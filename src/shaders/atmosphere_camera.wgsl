//// INCLUDE atmosphere_types.inc.wgsl

@group(0) @binding(0) var output_color: texture_storage_2d<rgba32float, write>;
@group(0) @binding(1) var lut_sampler: sampler;
@group(0) @binding(2) var transmittance_lut: texture_2d<f32>;
@group(0) @binding(3) var multiscatter_lut: texture_2d<f32>;
@group(0) @binding(4) var skyview_lut: texture_2d<f32>;

struct CameraUBO
{
    inv_proj: mat4x4<f32>,
    inv_view: mat4x4<f32>,
    position: vec4<f32>,
}

@group(1) @binding(0) var<uniform> b_camera: CameraUBO;
@group(1) @binding(1) var<uniform> b_light: CelestialLightUBO;

@group(2) @binding(0) var gbuffer_color_with_depth_in_alpha: texture_2d<f32>;
@group(2) @binding(1) var gbuffer_normal: texture_2d<f32>;

// vertex state NOT included
// Render a quad and use this as the fragment stage

//// INCLUDE atmosphere_common.inc.wgsl
//// INCLUDE atmosphere_raymarch.inc.wgsl MULTISCATTERING SCATTERING_NONLINEAR_SAMPLE LIGHT_ILLUMINANCE_IS_ONE

//// INCLUDE tonemap.inc.wgsl
//// INCLUDE pbr.inc.wgsl

fn sampleSkyViewLUT(
    atmosphere: ptr<function, Atmosphere>, 
    position: vec3<f32>, 
    direction: vec3<f32>
) -> vec3<f32>
{
    // Horizon zenith cannot be less than PI/2, so we use sin and assume it is a quadrant 2 angle
    let sinHorizonZenith = clamp((*atmosphere).planetRadiusMm / length(position), -1.0, 1.0);
    let horizonZenith = PI - asin(sinHorizonZenith);

    let cosViewZenith = clamp(dot(position, direction) / (length(position) * length(direction)), -1.0, 1.0);
    let cosHorizonZenith = -safeSqrt(1.0 - sinHorizonZenith * sinHorizonZenith);

    let viewZenith = acos(cosViewZenith);

    // We still want uv.y = 0 and uv.y = 1 to the extreme zenith angles
    // But since we make the horizon a straight line through the middle, and its zenith may not be PI/2,
    // we must scale angles differently depending on if they are above or below the horizon.

    var u = 0.0;
    var v = 0.0;

    if (cosViewZenith > cosHorizonZenith)
    {
        // Above horizon, v shall range from 0.0 to 0.5
        // viewZenith varies from 0 to horizonZenith

        let angleFraction = viewZenith / horizonZenith;

        // Increase angle density towards v = 0.5
        v = (1.0 - sqrt(1.0 - angleFraction)) * 0.5;
    }
    else
    {
        // Below horizon, v shall range from 0.5 to 1
        // viewZenith varies from horizonZenith to PI

        let angleFraction = (viewZenith - horizonZenith) / (PI - horizonZenith);

        // Increase angle density towards v = 0.5
        v = sqrt(angleFraction) * 0.5 + 0.5;
    }

    {
        var azimuth = 0.0;

        if (direction.z == 0.0)
        {
            azimuth = sign(direction.x) * PI / 2.0;
        }
        else
        {
            azimuth = atan2(direction.x, direction.z);
        }

        // azimuth varies -PI to PI

        u = (azimuth / (2.0 * PI)) + 0.5;
    }

    return textureSampleLevel(skyview_lut, lut_sampler, vec2<f32>(u, v), 0.0).xyz;
}

fn sampleSunDisk(
    atmosphere: ptr<function, Atmosphere>, 
    light: ptr<function, CelestialLight>, 
    position: vec3<f32>, 
    direction: vec3<f32>
) -> vec3<f32>
{
    let directionToSun = -(*light).forward;

    let cosDirectionSun = dot(direction, directionToSun) / (length(direction) * length(directionToSun));

    if (cosDirectionSun < 0.0)
    {
        return vec3(0.0);
    }

    // Small angle approximation
    let sinSunRadius = (*light).angularRadius;

    let sinDirectionSun = safeSqrt(1.0 - cosDirectionSun * cosDirectionSun);

    let transmittanceToSun = sampleTransmittanceLUT_Ray(transmittance_lut, lut_sampler, atmosphere, position, direction);

    return transmittanceToSun * (1.0 - smoothstep(0.2 * sinSunRadius, sinSunRadius, sinDirectionSun));
}

fn computeFractionOfSunVisible(
    atmosphere: ptr<function, Atmosphere>, 
    light: ptr<function, CelestialLight>, 
    position: vec3<f32>, 
) -> f32
{
    let sinHorizonZenith = (*atmosphere).planetRadiusMm / length(position);
    let cosSunZenith = dot(-(*light).forward, normalize(position));

    // Do some trig to estimate the fraction of the sun above the horizon

    // Ignore third dimension, since earth is a symmetrical sphere
    let directionToHorizon = normalize(vec2<f32>(
        sinHorizonZenith, 
        safeSqrt(1.0 - sinHorizonZenith * sinHorizonZenith)
    ));
    let directionToSun = normalize(vec2<f32>(
        safeSqrt(1.0 - cosSunZenith * cosSunZenith), 
        cosSunZenith
    ));

    let cosHorizonSun = dot(directionToHorizon, directionToSun);

    // + when above horizon, - when below
    let sinHorizonSun = 
        sign(directionToSun.y - directionToHorizon.y) 
        * safeSqrt(1.0 - cosHorizonSun * cosHorizonSun);

    // Small angle approximation
    let sinSunRadius = (*light).angularRadius;

    if (sinHorizonSun > sinSunRadius)
    {
        return 1.0;
    }
    else if (sinHorizonSun < -sinSunRadius)
    {
        return 0.0;
    }

    // Approximation of the area of the chorded segment above the horizon divided by the area of the circle
    return 0.5 * (sinHorizonSun / sinSunRadius) + 0.5;
}

fn sampleEnvironmentLuminance(
    atmosphere: ptr<function, Atmosphere>, 
    light: ptr<function, CelestialLight>, 
    position: vec3<f32>, 
    direction: vec3<f32>
) -> vec3<f32>
{
    var luminance = sampleSkyViewLUT(atmosphere, position, direction);
    if(direction.y >= 0.0)
    {
        let light_direction = normalize(-(*light).forward);
        let radius = length(position);
        let mu_light = dot(position, light_direction) / radius;

        let transmittance_to_light = sampleTransmittanceLUT_Sun(
            transmittance_lut, 
            lut_sampler,
            atmosphere, 
            light, 
            radius,
            mu_light
        );

        luminance += transmittance_to_light * sampleSunDisk(atmosphere, light, position, direction) * (*light).color.rgb * (*light).strength;
    }
    return luminance;
}

fn sampleGeometryLuminance(
    atmosphere: ptr<function, Atmosphere>,
    light: ptr<function, CelestialLight>,
    material: PBRTexel,
    position: vec3<f32>,
    direction: vec3<f32>,
    distance: f32,
    intersects_ground: bool
) -> vec3<f32>
{
    let light_direction = normalize(-(*light).forward);

    var origin_step = RaymarchStep();
    origin_step.radius = length(position);
    origin_step.mu = dot(position, direction) / origin_step.radius;
    origin_step.mu_light = dot(position, light_direction) / origin_step.radius;
    origin_step.nu = dot(direction, light_direction);

    let surface_step: RaymarchStep = stepRadiusMu(origin_step, distance);
    let transmittance_to_surface = sampleTransmittanceLUT_Segment(
        transmittance_lut, 
        lut_sampler,
        atmosphere, 
        origin_step.radius,
        origin_step.mu,
        distance,
        intersects_ground
    );

    var light_luminance_transfer = vec3<f32>(0.0);

    // TODO: shadowmap, occlusion texture

    // Model water as perfect reflections with some diffuse scattering to emulate light coming up from underwater

    let diffuse = diffuseBRDF(material);

    // shift reflection vector up to make up for the lack of secondary bounces
    // Otherwise, the environmental luminance will be 0 and we get random black patches
    var reflection_direction = reflect(normalize(direction), normalize(material.normal));
    reflection_direction.y = max(reflection_direction.y, 0.001); 
    reflection_direction = normalize(reflection_direction);

    let surface_position = position + direction * distance;

    light_luminance_transfer += 
        transmittance_to_surface
        * sampleEnvironmentLuminance(atmosphere, light, surface_position, reflection_direction) 
        * mix(
            diffuse, 
            vec3<f32>(1.0), 
            computeFresnelPerfectReflection(material, reflection_direction)
        );

    light_luminance_transfer += 
        transmittance_to_surface
        * diffuse
        * sampleMultiscatterLUT(multiscatter_lut, lut_sampler, atmosphere, surface_step.radius, surface_step.mu_light);

    { 
        // Aerial perspective, the light scattered by air between viewer and the surface
        // TODO: aerial perspective LUT
        let include_ground = false;
        light_luminance_transfer += computeLuminanceScatteringIntegral(
            atmosphere, 
            light, 
            lut_sampler,
            transmittance_lut, 
            multiscatter_lut, 
            position, 
            direction, 
            include_ground
        ).luminance;
    }

    return light_luminance_transfer;
}

@compute @workgroup_size(16,16,1)
fn renderCompositedAtmosphere(@builtin(global_invocation_id) global_id : vec3<u32>)
{
    let texel_coord = vec2<u32>(global_id.xy);
    let size = textureDimensions(gbuffer_color_with_depth_in_alpha);
    if(texel_coord.x >= size.x || texel_coord.y >= size.y)
    {
        return;
    }

    var atmosphere = ATMOSPHERE_GLOBAL;
    var light = b_light.light;

    let offset = vec2<f32>(0.5, 0.5);
    let uv = (vec2<f32>(texel_coord) + offset) / vec2<f32>(size);

    const METERS_PER_MM = 1000000.0;
    let origin = vec3<f32>(0.0, atmosphere.planetRadiusMm, 0.0) + b_camera.position.xyz / METERS_PER_MM;

    let ndc_space_coord = (uv - vec2<f32>(0.5)) * 2.0 * vec2<f32>(1.0, -1.0);
    let near_plane_depth = 1.0;
    let direction_view_space = b_camera.inv_proj * vec4(ndc_space_coord, near_plane_depth, 1.0);
    let direction_world = normalize((b_camera.inv_view * vec4<f32>(direction_view_space.xyz, 0.0)).xyz);

    let color_with_depth_in_alpha = textureLoad(gbuffer_color_with_depth_in_alpha, texel_coord, 0);
    let normal = textureLoad(gbuffer_normal, texel_coord, 0); 

    let material: PBRTexel = convertPBRProperties(color_with_depth_in_alpha.xyz, normal.xyz);
    let depth = color_with_depth_in_alpha.a / METERS_PER_MM;

    var luminance_transfer = vec3<f32>(0.0);

    // TODO: Use radius/mu to test if mu is below horizon instead?
    let intersects_ground = raySphereTest(origin, direction_world, atmosphere.planetRadiusMm);

    if (depth <= 0.0)
    {
        // Unobscured view of the virtual environment, i.e. sky or ground

        /*
        This should not occur if the virtual ground is obscured by otherwise rendered terrain/geometry
        Uncomment if needed at some point
        if (intersects_ground)
        {
            let include_ground = true;

            // Ray intersects the ground, so the sky view LUT is not valid

            luminance_transfer = computeLuminanceScatteringIntegral(
                &atmosphere, 
                &light, 
                lut_sampler,
                transmittance_lut, 
                multiscatter_lut, 
                origin, 
                direction_world, 
                include_ground
            ).luminance;
        }
        else
        */
        {
            luminance_transfer = sampleEnvironmentLuminance(&atmosphere, &light, origin, direction_world);
        }
    }
    else
    {
        luminance_transfer = sampleGeometryLuminance(&atmosphere, &light, material, origin, direction_world, depth, intersects_ground);
    }

    let luminance = light.strength * light.color * luminance_transfer;

    let output = vec4<f32>(tonemapACES(luminance),1.0);

    textureStore(output_color, texel_coord, output);
}