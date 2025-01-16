// Call this in a render pass, passing in an index buffer [0, 1, 2, 0, 2, 3]

//// INCLUDE atmosphere_types.inc.wgsl

// const HEIGHTMAP_MIN: f32 = -1.0;
// const HEIGHTMAP_MAX: f32 = 1.0; 

struct CameraUBO
{
    inv_proj: mat4x4<f32>,
    inv_view: mat4x4<f32>,
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

struct PlaneWave
{
    amplitude: f32,
    wavelength: f32,
    direction: vec2<f32>,
    speed: f32,
}

const WAVE_1 = PlaneWave(
    1.5,
    33.8,
    vec2<f32>(0.707,0.707),
    5.9,
);

fn sampleWave(
    wave: PlaneWave,
    time: f32, 
    coords: vec2<f32>, 
) -> f32
{
    let wave_number = 2.0 * 3.141592653589793 / wave.wavelength;
    let wave_vector = wave.direction * wave_number;
    let angular_frequency = wave.speed * wave_number;

    return wave.amplitude * cos(dot(coords, wave_vector) - angular_frequency * time);
}

fn sampleHeightmap(coords: vec2<f32>, time: f32) -> f32
{
    return sampleWave(
        WAVE_1,
        time, 
        coords, 
    );
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

    let step_size = 1.0;
    const MAX_DISTANCE = 1000.0;
    var t = 0.0;
    while(t < MAX_DISTANCE)
    {
        // TODO: Figure out spherical coordinate raymarching
        // Make larger stepsize work for closer features 
        let scaled_t = (t / MAX_DISTANCE) * (t / MAX_DISTANCE) * MAX_DISTANCE;
        let position = scaled_t * direction + origin;

        let sampled_height = sampleHeightmap(
            position.xz,
            time
        );

        if(sampled_height > position.y)
        {
            let normal = estimateHeightmapNormal(position.xz, time);

            const water_color = vec3<f32>(1.0 / 255.0, 123.0 / 255.0, 146.0 / 255.0);
            
            return HeightmapRaymarchResult(
                vec4<f32>(water_color, 1.0),
                vec4<f32>(normal, 0.0),
                t,
            );
        }
        t += step_size;
    }

    return HeightmapRaymarchResult(
        vec4<f32>(0.0),
        vec4<f32>(0.0),
        0.0,
    );
}

@compute @workgroup_size(16,16,1)
fn renderHeightmap(@builtin(global_invocation_id) global_id : vec3<u32>,) 
{
    let texel_coord = vec2<u32>(global_id.xy);
    let size = textureDimensions(gbuffer_color_with_depth_in_alpha);
    if(texel_coord.x >= size.x || texel_coord.y >= size.y)
    {
        return;
    }
    var atmosphere = ATMOSPHERE_GLOBAL;

    let offset = vec2<f32>(0.5, 0.5);
    let uv = (vec2<f32>(texel_coord) + offset) / vec2<f32>(size);

    // const METERS_PER_MM = 1000000.0;
    //let origin = vec3<f32>(0.0, atmosphere.planetRadiusMm, 0.0) + b_camera.position.xyz / METERS_PER_MM;
    let origin = vec3<f32>(0.0, 0.0, 0.0) + b_camera.position.xyz;

    let uv_clip_space = (uv - vec2<f32>(0.5)) * 2.0;
    let near_plane_depth = 1.0;
    let direction_view_space = b_camera.inv_proj * vec4(uv_clip_space, near_plane_depth, 1.0);
    let direction_world = normalize((b_camera.inv_view * vec4<f32>(direction_view_space.xyz, 0.0)).xyz);

    let result = raymarchHeightmap(&atmosphere, origin, direction_world);

    textureStore(gbuffer_color_with_depth_in_alpha, texel_coord, vec4<f32>(result.color.xyz, result.distance));
    textureStore(gbuffer_normal, texel_coord, vec4<f32>(result.normal.xyz, 0.0));
}