//// INCLUDE atmosphere_types.inc.wgsl

struct CameraUBO
{
    inv_proj: mat4x4<f32>,
    inv_view: mat4x4<f32>,
    proj_view: mat4x4<f32>,
    position: vec4<f32>,
}

struct TimeUBO
{
    time_seconds: f32,
}

@group(0) @binding(0) var gbuffer_color_with_depth_in_alpha: texture_storage_2d<rgba16float, write>;
@group(0) @binding(1) var gbuffer_normal: texture_storage_2d<rgba16float, write>;

@group(1) @binding(0) var<uniform> b_camera: CameraUBO;
@group(1) @binding(1) var<uniform> b_time: TimeUBO;

//// INCLUDE atmosphere_common.inc.wgsl

struct PlaneWave
{
    amplitude: f32,
    wavelength: f32,
    direction: vec2<f32>,
    speed: f32,
}

// Fairly arbitrary parameters I thought looked good
// Some wavelengths/velocities were derived from actual oceanographic data

const WAVE_1 = PlaneWave(
    1.5,
    33.8,
    vec2<f32>( 0.447213595499957, 0.89442719099991587856),
    5.9,
);

const WAVE_2 = PlaneWave(
    0.02,
    3.5,
    vec2<f32>(1.0, 0.0),
    0.5,
);

const WAVE_3 = PlaneWave(
    0.02,
    4.5,
    vec2<f32>(0.0, 1.0),
    1.5,
);

const WATER_COLOR = vec3<f32>(1.0 / 255.0, 123.0 / 255.0, 146.0 / 255.0);
const WAVE_NEUTRAL_PLANE = 1.0;
const WAVE_MAX_HEIGHT = WAVE_NEUTRAL_PLANE + (WAVE_1.amplitude + WAVE_2.amplitude + WAVE_3.amplitude);

fn sampleWave(
    wave: PlaneWave,
    time: f32, 
    coords: vec2<f32>, 
) -> f32
{
    let wave_number = 2.0 * 3.141592653589793 / wave.wavelength;
    let wave_vector = wave.direction * wave_number;
    let angular_frequency = wave.speed * wave_number;

    return wave.amplitude * (WAVE_NEUTRAL_PLANE + cos(dot(coords, wave_vector) - angular_frequency * time));
}

// Distance when waves 2 and 3 (the smaller, finer detail ones) drop out
const FIRST_DISTANCE = 100.0;
// Distance when wave 1 drops out
const SECOND_DISTANCE = 300.0;

fn sampleHeightmapCoarse(coords: vec2<f32>, time: f32) -> f32
{
    return (1.0 - smoothstep(0.0, SECOND_DISTANCE, length(coords))) * (sampleWave(
        WAVE_1,
        time, 
        coords, 
    ));
}

fn estimateCoarseHeightmapNormal(coords: vec2<f32>, time: f32) -> vec3<f32>
{
    // estimate of heightmap gradient
    const EPSILON = 0.001;

    let dFdx = sampleHeightmapCoarse(vec2<f32>(coords.x + EPSILON, coords.y), time) 
        - sampleHeightmapCoarse(vec2<f32>(coords.x - EPSILON, coords.y), time);
    let dFdz = sampleHeightmapCoarse(vec2<f32>(coords.x, coords.y + EPSILON), time)
        - sampleHeightmapCoarse(vec2<f32>(coords.x,coords.y - EPSILON), time);

    let normal = normalize(vec3<f32>(
        -dFdx,
        2.0 * EPSILON,
        -dFdz,
    ));
    return normal;
}

fn sampleHeightmap(coords: vec2<f32>, time: f32) -> f32
{
    return (1.0 - smoothstep(0.0, SECOND_DISTANCE, length(coords))) * (sampleWave(
        WAVE_1,
        time, 
        coords, 
    )) 
    + (1.0 - smoothstep(0.0, FIRST_DISTANCE, length(coords))) * (sampleWave(
        WAVE_2,
        time, 
        coords, 
    ) 
    + sampleWave(
        WAVE_3,
        time, 
        coords, 
    ));
}

fn estimateHeightmapNormal(coords: vec2<f32>, time: f32) -> vec3<f32>
{
    // estimate of heightmap gradient
    const EPSILON = 0.001;

    let dFdx = sampleHeightmap(vec2<f32>(coords.x + EPSILON, coords.y), time) 
        - sampleHeightmap(vec2<f32>(coords.x - EPSILON, coords.y), time);
    let dFdz = sampleHeightmap(vec2<f32>(coords.x, coords.y + EPSILON), time)
        - sampleHeightmap(vec2<f32>(coords.x,coords.y - EPSILON), time);

    let normal = normalize(vec3<f32>(
        -dFdx,
        2.0 * EPSILON,
        -dFdz,
    ));
    return normal;
}

struct HeightmapRaymarchResult
{
    color: vec4<f32>,
    normal: vec4<f32>,
    distance: f32,
}

fn raymarchHeightmap(
    atmosphere: ptr<function, Atmosphere>, 
    origin: vec3<f32>, 
    direction: vec3<f32>
) -> HeightmapRaymarchResult
{
    let time = b_time.time_seconds;
    // TODO: Figure out spherical coordinate raymarching

    // Skip to where waves can possibly start.
    // Also skip the case where the camera starts below the waves (for now)
    var t = -max(origin.y-WAVE_MAX_HEIGHT, 0.0) / direction.y;
    if (t < 0.0)
    {
        return HeightmapRaymarchResult(
            vec4<f32>(0.0),
            vec4<f32>(0.0),
            0.0,
        );
    }

    while(t < FIRST_DISTANCE)
    {
        // Make larger stepsize work for closer features
        let scaled_t = t;
        let position = scaled_t * direction + origin;

        let sampled_height = sampleHeightmap(
            position.xz,
            time
        );

        if(sampled_height > position.y)
        {
            let normal = estimateHeightmapNormal(position.xz, time);

            return HeightmapRaymarchResult(
                vec4<f32>(WATER_COLOR, 1.0),
                vec4<f32>(normal, 0.0),
                t,
            );
        }
        t += 0.1;
    }

    while(t < SECOND_DISTANCE)
    {
        let scaled_t = (t / SECOND_DISTANCE) * (t / SECOND_DISTANCE) * SECOND_DISTANCE;
        let position = scaled_t * direction + origin;

        let sampled_height = sampleHeightmapCoarse(
            position.xz,
            time
        );

        if(sampled_height > position.y)
        {
            let normal = estimateCoarseHeightmapNormal(position.xz, time);

            return HeightmapRaymarchResult(
                vec4<f32>(WATER_COLOR, 1.0),
                vec4<f32>(normal, 0.0),
                t,
            );
        }
        t += 0.2;
    }

    let sin_horizonZenith: f32 = (*atmosphere).planetRadiusMm / (length(origin) / METERS_PER_MM + (*atmosphere).planetRadiusMm);
    let cos_horizonZenith: f32 = -safeSqrt(1.0 - sin_horizonZenith * sin_horizonZenith);

    if(dot(normalize(origin / METERS_PER_MM + vec3<f32>(0.0, (*atmosphere).planetRadiusMm, 0.0)), normalize(direction)) > cos_horizonZenith)
    {
        return HeightmapRaymarchResult(
            vec4<f32>(0.0),
            vec4<f32>(0.0),
            0.0,
        );
    }

    // To fill in colors at the edge, estimate the ocean as a flat plane
    let distance_to_floor = max(-origin.y / direction.y, 0.0);

    return HeightmapRaymarchResult(
        vec4<f32>(WATER_COLOR, 1.0),
        vec4<f32>(0.0,1.0,0.0, 0.0),
        distance_to_floor,
    );
}

@compute @workgroup_size(16,16,1)
fn renderHeightmap(@builtin(global_invocation_id) global_id : vec3<u32>,) 
{
    let texel_coord = vec2<u32>(global_id.xy);
    let size = textureDimensions(gbuffer_color_with_depth_in_alpha);
    if(texel_coord.x >= size.x || texel_coord.y >= size.y)
    {
        textureStore(gbuffer_color_with_depth_in_alpha, texel_coord, vec4<f32>(0.0));
        textureStore(gbuffer_normal, texel_coord, vec4<f32>(0.0));
        return;
    }
    var atmosphere = ATMOSPHERE_GLOBAL;

    let offset = vec2<f32>(0.5, 0.5);
    let uv = (vec2<f32>(texel_coord) + offset) / vec2<f32>(size);

    let origin = b_camera.position.xyz;

    let ndc_space_coord = (uv - vec2<f32>(0.5)) * 2.0 * vec2<f32>(1.0, -1.0);
    let near_plane_depth = 1.0;
    let direction_view_space = b_camera.inv_proj * vec4(ndc_space_coord, near_plane_depth, 1.0);
    let direction_world = normalize((b_camera.inv_view * vec4<f32>(direction_view_space.xyz, 0.0)).xyz);

    let result = raymarchHeightmap(&atmosphere, origin, direction_world);

    textureStore(gbuffer_color_with_depth_in_alpha, texel_coord, vec4<f32>(result.color.xyz, result.distance));
    textureStore(gbuffer_normal, texel_coord, vec4<f32>(result.normal.xyz, 0.0));
}