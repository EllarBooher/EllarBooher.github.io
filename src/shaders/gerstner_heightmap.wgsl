// Displace a grid of vertices with Gerstner waves, then rasterize into a heightmap with a graphics pass

/* --- begin ocean heightmap mesh displacement --- */

// Defines the world half-extent (radius of the square) of the patch where the ocean waves are defined  
const WORLD_HALF_EXTENT_METERS = 300.0;

const WATER_COLOR = vec3<f32>(1.0 / 255.0, 123.0 / 255.0, 146.0 / 255.0);

const VERTEX_DIMENSION = 2048u;
const VERTEX_COUNT = VERTEX_DIMENSION * VERTEX_DIMENSION;
// const TRIANGLE_COUNT = 2u * (VERTEX_DIMENSION - 1u) * (VERTEX_DIMENSION - 1u);
// const INDEX_COUNT = 3u * TRIANGLE_COUNT;

// Vertices are in (x,y,z) world coordinates, so when rasterizing the heightmap you must swizzle y <-> z
@group(0) @binding(0) var<storage, read_write> output_vertices: array<vec4<f32>, VERTEX_COUNT>;
@group(0) @binding(1) var<storage, read_write> output_world_normals: array<vec4<f32>, VERTEX_COUNT>;
// Indices are populated CPU side
// @group(0) @binding(1) var<storage, read_write> output_indices: array<u32, INDEX_COUNT>;  

@compute @workgroup_size(16, 16, 1)
fn displaceVertices(@builtin(global_invocation_id) global_id : vec3<u32>,) 
{
    let vertex_coord = vec2<u32>(global_id.xy);
    let size = vec2<u32>(VERTEX_DIMENSION);
    if(vertex_coord.x >= size.x || vertex_coord.y >= size.y)
    {
        return;
    }

    let uv = (vec2<f32>(vertex_coord) + vec2<f32>(0.5,0.5)) / vec2<f32>(size);

    let world_position_xz = vec2<f32>(WORLD_HALF_EXTENT_METERS) * 2.0 * (uv - vec2<f32>(0.5));
    let time = b_time.time_seconds;

    // No tiling yet, so shorten waves as they get further before the bounds of the patch
    let wave_amplitude = 2.9 * clamp(1.0 - length(world_position_xz) / WORLD_HALF_EXTENT_METERS, 0.0, 1.0);
    let wave_direction = normalize(vec2<f32>(1.0,2.0));
    let wavelength = 33.8;
    
    let wave_number = 2.0 * 3.141592653589793 / wavelength;

    let gravity = 9.8;
    // Dispersion relationship for deep ocean waves
    let angular_frequency = sqrt(gravity * wave_number);
    
    let wave_vector = wave_direction * wave_number;

    let theta = dot(world_position_xz, wave_vector) - angular_frequency * time;
    let sin_theta = sin(theta);
    let cos_theta = cos(theta);

    let vertex_xz = world_position_xz - wave_direction * wave_amplitude * sin_theta;
    let vertex_y = wave_amplitude * cos_theta;

    let vertex = vec4<f32>(vertex_xz.x, vertex_y, vertex_xz.y, 1.0);

    let vertex_index = vertex_coord.x + vertex_coord.y * VERTEX_DIMENSION;
    output_vertices[vertex_index] = vertex;

    // partial derivatives computed exactly via the above formula
    let del_vertex_del_x = vec3<f32>(
        1.0 - wave_amplitude * wave_direction.x * cos_theta * wave_vector.x,
            - wave_amplitude * sin_theta * wave_vector.x,
            - wave_amplitude * wave_direction.y * cos_theta * wave_vector.x,
    );
    let del_vertex_del_z = vec3<f32>(
            - wave_amplitude * wave_direction.x * cos_theta * wave_vector.y,
            - wave_amplitude * sin_theta * wave_vector.y,
        1.0 - wave_amplitude * wave_direction.y * cos_theta * wave_vector.y,
    );
    let world_normal = -normalize(cross(del_vertex_del_x, del_vertex_del_z));
    output_world_normals[vertex_index] = vec4<f32>(world_normal, 0.0);
}

/* --- begin heightmap rasterization --- */

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

@group(0) @binding(0) var<storage> vertices: array<vec4<f32>, VERTEX_COUNT>;
@group(0) @binding(1) var<storage> world_normals: array<vec4<f32>, VERTEX_COUNT>;

@group(1) @binding(0) var<uniform> b_camera: CameraUBO;
@group(1) @binding(1) var<uniform> b_time: TimeUBO;

struct VertexOut {
    @builtin(position) position : vec4<f32>,
    @location(1) world_normal : vec3<f32>,
    @location(2) color : vec3<f32>,
}

@vertex
fn heightmapVertex(@builtin(vertex_index) index : u32) -> VertexOut 
{
    var output : VertexOut;

    let world_position = vertices[index];

    output.position = b_camera.proj_view * world_position;
    output.world_normal = world_normals[index].xyz;
    output.color = vec3<f32>(WATER_COLOR);

    return output; 
}

struct FragmentOut
{
    @location(0) color: vec4<f32>,
    @location(1) world_normal: vec4<f32>,
}

@fragment
fn heightmapFragment(frag_interpolated: VertexOut) -> FragmentOut
{
    var output : FragmentOut;

    output.color = vec4<f32>(frag_interpolated.color, 1.0);
    output.world_normal = vec4<f32>(frag_interpolated.world_normal,0.0);

    return output;
}