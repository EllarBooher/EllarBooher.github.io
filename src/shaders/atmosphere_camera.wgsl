// Call this in a render pass, passing in an index buffer [0, 1, 2, 0, 2, 3]

//// INCLUDE atmosphere_types.inc.wgsl

@group(0) @binding(0) var lut_sampler: sampler;
@group(0) @binding(1) var transmittance_lut: texture_2d<f32>;
@group(0) @binding(2) var multiscatter_lut: texture_2d<f32>;
@group(0) @binding(3) var skyview_lut: texture_2d<f32>;

struct CameraUBO
{
    inv_proj: mat4x4<f32>,
    inv_view: mat4x4<f32>,
    position: vec4<f32>,
}

@group(1) @binding(0) var<uniform> b_camera: CameraUBO;
@group(1) @binding(1) var<uniform> b_light: CelestialLightUBO;

// vertex state NOT included
// Render a quad and use this as the fragment stage

//// INCLUDE atmosphere_common.inc.wgsl
//// INCLUDE atmosphere_raymarch.inc.wgsl MULTISCATTERING LIGHT_ILLUMINANCE_IS_ONE

//// INCLUDE tonemap.inc.wgsl

fn sampleSkyViewLUT(
    atmosphere: ptr<function, Atmosphere>, 
    position: vec3<f32>, 
    direction: vec3<f32>
) -> vec3<f32>
{
    // Horizon zenith cannot be less than PI/2, so we use sin and assume it is a quadrant 2 angle
    let sinHorizonZenith = (*atmosphere).planetRadiusMm / length(position);
    let horizonZenith = PI - asin(sinHorizonZenith);

    let cosViewZenith = dot(position, direction) / (length(position) * length(direction));
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

    // return vec3<f32>(sinDirectionSun);
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
    if (raySphereTest(position, direction, (*atmosphere).planetRadiusMm))
    {
        let include_ground = true;

        // Ray intersects the ground, so the sky view LUT is not valid

        return computeLuminanceScatteringIntegral(
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
    else
    {
        // If sun is above horizon, the sun disk and sky is visible so the sky view LUT is valid.
       
        let luminance = sampleSkyViewLUT(atmosphere, position, direction)
            + sampleSunDisk(atmosphere, light, position, direction) * (*light).color.rgb * (*light).strength;

        return luminance;
    }
}


const QUAD_VERTICES: array<vec4<f32>, 4> = array<vec4<f32>,4>(
    vec4<f32>(-1.0, -1.0, 0.0, 1.0),
    vec4<f32>(1.0, -1.0, 0.0, 1.0),
    vec4<f32>(1.0, 1.0, 0.0, 1.0),
    vec4<f32>(-1.0, 1.0, 0.0, 1.0),
);
const QUAD_UVS: array<vec2<f32>,4> = array<vec2<f32>,4>(
    vec2<f32>(0.0, 0.0),
    vec2<f32>(1.0, 0.0),
    vec2<f32>(1.0, 1.0),
    vec2<f32>(0.0, 1.0),
);

struct VertexOut {
    @builtin(position) position : vec4<f32>,
    @location(0) uv : vec2<f32>
}

@vertex
fn vertex_main(@builtin(vertex_index) index : u32) -> VertexOut
{
    var output : VertexOut;
    output.position = QUAD_VERTICES[index];
    output.uv = QUAD_UVS[index];
    return output; 
}

@fragment
fn fragment_main(fragData: VertexOut) -> @location(0) vec4<f32>
{
    var atmosphere = ATMOSPHERE_GLOBAL;
    var light = b_light.light;

    let uv = fragData.uv;

    const METERS_PER_MM = 1000000.0;
    let origin = vec3<f32>(0.0, atmosphere.planetRadiusMm, 0.0) + b_camera.position.xyz / METERS_PER_MM;

    let uv_clip_space = (uv - vec2<f32>(0.5)) * 2.0;
    let near_plane_depth = 1.0;
    let direction_view_space = b_camera.inv_proj * vec4(uv_clip_space, near_plane_depth, 1.0);
    let direction_world = normalize((b_camera.inv_view * vec4<f32>(direction_view_space.xyz, 0.0)).xyz);

    let luminance = light.strength * sampleEnvironmentLuminance(&atmosphere, &light, origin, direction_world);

    return vec4<f32>(tonemapACES(luminance),1.0);
}