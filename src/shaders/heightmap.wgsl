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

@group(0) @binding(0) var<uniform> b_camera: CameraUBO;

// const METERS_PER_MM = 1000000.0;

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

    let dFdx = sampleHeightmap(vec2<f32>(coords.x + EPSILON, coords.y), 0.0) 
        - sampleHeightmap(vec2<f32>(coords.x - EPSILON, coords.y), 0.0);
    let dFdz = sampleHeightmap(vec2<f32>(coords.x, coords.y + EPSILON), 0.0)
        - sampleHeightmap(vec2<f32>(coords.x,coords.y - EPSILON), 0.0);

    let normal = normalize(vec3<f32>(
        -dFdx,
        2.0 * EPSILON,
        -dFdz,
    ));
    return normal;
}

fn raymarchHeightmap(atmosphere: ptr<function, Atmosphere>, origin: vec3<f32>, direction: vec3<f32>) -> vec4<f32>
{
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
            0.0
        );

        if(sampled_height > position.y)
        {
            let normal = estimateHeightmapNormal(position.xz, 0.0);
            let view = normalize(origin - position);
            let light = normalize(vec3<f32>(0.0,1.0,-10.0));
            let halfway = normalize(view + light);
            return vec4<f32>(vec3<f32>(dot(normal, halfway)),1.0);
        }
        t += step_size;
    }

    return vec4<f32>(0.0,0.0,0.0,0.0);
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
    let uv = fragData.uv;

    // const METERS_PER_MM = 1000000.0;
    //let origin = vec3<f32>(0.0, atmosphere.planetRadiusMm, 0.0) + b_camera.position.xyz / METERS_PER_MM;
    let origin = vec3<f32>(0.0, 0.0, 0.0) + b_camera.position.xyz;

    let uv_clip_space = (uv - vec2<f32>(0.5)) * 2.0;
    let near_plane_depth = 1.0;
    let direction_view_space = b_camera.inv_proj * vec4(uv_clip_space, near_plane_depth, 1.0);
    let direction_world = normalize((b_camera.inv_view * vec4<f32>(direction_view_space.xyz, 0.0)).xyz);

    return raymarchHeightmap(&atmosphere, origin, direction_world);
}