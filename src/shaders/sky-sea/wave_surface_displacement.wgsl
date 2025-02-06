// Displace a grid of vertices representing the ocean surface, then rasterize into the gbuffer with a graphics pass

//// INCLUDE types.inc.wgsl

/* --- begin ocean mesh displacement --- */

// Defines the world half-extent (radius of the square) of the patch where the ocean waves are defined
const WORLD_HALF_EXTENT_METERS = 300.0;

const WATER_COLOR = vec3<f32>(1.0 / 255.0, 123.0 / 255.0, 146.0 / 255.0);
const WAVE_NEUTRAL_PLANE = 1.0;

struct PlaneWave
{
    direction: vec2<f32>,
    amplitude: f32,
    wavelength: f32,
}

// When sampling multiple waves, these properties should be summed since we assume waves add linearly
// The gradient distributes linearly, so sum all tangents and bitangent before crossing to produce normal
struct WaveDisplacementResult
{
    displacement: vec3<f32>,
    tangent: vec3<f32>,
    bitangent: vec3<f32>,
}

fn sampleGerstner(wave: PlaneWave, time: f32, coords: vec2<f32>) -> WaveDisplacementResult
{
    let wave_amplitude = (1.0 - smoothstep(0.0, WORLD_HALF_EXTENT_METERS, length(coords))) * wave.amplitude;
    let wave_direction = normalize(wave.direction);
    let wavelength = wave.wavelength;

    let wave_number = 2.0 * 3.141592653589793 / wavelength;

    let gravity = 9.8;

    // Dispersion relationship for deep ocean waves
    // wave_speed = sqrt(gravity / wave_number)
    // angular_frequency = wave_speed * wave_number
    let angular_frequency = sqrt(gravity * wave_number);

    let wave_vector = wave_direction * wave_number;

    let theta = dot(coords, wave_vector) - angular_frequency * time;
    let sin_theta = sin(theta);
    let cos_theta = cos(theta);

    var output: WaveDisplacementResult;

    let output_xz = -wave_direction * wave_amplitude * sin_theta;
    let output_y = wave_amplitude * cos_theta;
    output.displacement = vec3<f32>(output_xz.x, output_y, output_xz.y);

    // partial derivatives computed exactly via the above formula
    // Note these vectors are parallel, since wave only displaces in travel direction
    output.tangent = vec3<f32>(
        - wave_amplitude * wave_direction.x * cos_theta * wave_vector.x,
        - wave_amplitude * sin_theta * wave_vector.x,
        - wave_amplitude * wave_direction.y * cos_theta * wave_vector.x,
    );
    output.bitangent = vec3<f32>(
        - wave_amplitude * wave_direction.x * cos_theta * wave_vector.y,
        - wave_amplitude * sin_theta * wave_vector.y,
        - wave_amplitude * wave_direction.y * cos_theta * wave_vector.y,
    );

    return output;
}

fn sampleCosine(wave: PlaneWave, time: f32, coords: vec2<f32>) -> WaveDisplacementResult
{
    let wave_amplitude = (1.0 - smoothstep(0.0, WORLD_HALF_EXTENT_METERS, length(coords))) * wave.amplitude;
    let wave_direction = normalize(wave.direction);
    let wavelength = wave.wavelength;

    let wave_number = 2.0 * 3.141592653589793 / wavelength;

    let gravity = 9.8;

    // Dispersion relationship for deep ocean waves
    // wave_speed = sqrt(gravity / wave_number)
    // angular_frequency = wave_speed * wave_number
    let angular_frequency = sqrt(gravity * wave_number);

    let wave_vector = wave_direction * wave_number;

    let theta = dot(coords, wave_vector) - angular_frequency * time;
    let sin_theta = sin(theta);
    let cos_theta = cos(theta);

    var output: WaveDisplacementResult;

    output.displacement = vec3<f32>(
        0.0,
        wave_amplitude * cos_theta,
        0.0
    );

    // partial derivatives computed exactly via the above formula
    // Note these vectors are parallel, since wave only displaces in travel direction
    output.tangent = vec3<f32>(
        0.0,
        - wave_amplitude * sin_theta * wave_vector.x,
        0.0,
    );
    output.bitangent = vec3<f32>(
        0.0,
        - wave_amplitude * sin_theta * wave_vector.y,
        0.0,
    );

    return output;
}

fn sampleMap(map: texture_2d<f32>, sampler: sampler, patch_uv: vec2<f32>) -> WaveDisplacementResult
{
	let delta = 0.5 / vec2<f32>(textureDimensions(displacement_map));
	let y = textureSampleLevel(displacement_map, displacement_map_sampler, patch_uv, 0).r;
	let dy_dx = textureSampleLevel(displacement_map, displacement_map_sampler, patch_uv + vec2<f32>(delta.x, 0.0), 0).r - y;
	let dy_dz = textureSampleLevel(displacement_map, displacement_map_sampler, patch_uv + vec2<f32>(0.0, delta.y), 0).r - y;

    var output: WaveDisplacementResult;

	output.tangent = vec3<f32>(1.0, dy_dx, 0.0);
	output.bitangent = vec3<f32>(0.0, dy_dz, 1.0);
	output.displacement = vec3<f32>(
		0.0,
		y,
		0.0
	);

	return output;
}

const VERTEX_DIMENSION = 2048u;
const VERTEX_COUNT = VERTEX_DIMENSION * VERTEX_DIMENSION;
// const TRIANGLE_COUNT = 2u * (VERTEX_DIMENSION - 1u) * (VERTEX_DIMENSION - 1u);
// const INDEX_COUNT = 3u * TRIANGLE_COUNT;

const WAVE_COUNT = 6u;

@id(0) override wave_model: u32 = 1u;
const WAVE_MODEL_COSINE = 0u;
const WAVE_MODEL_GERSTNER = 1u;
const WAVE_MODEL_DISPLACEMENT_MAP = 2u;

// Vertices are in (x,y,z) world coordinates, so during rasterization you must swizzle y <-> z
@group(0) @binding(0) var<storage, read_write> output_vertices: array<vec4<f32>, VERTEX_COUNT>;
@group(0) @binding(1) var<storage, read_write> output_world_normals: array<vec4<f32>, VERTEX_COUNT>;
@group(0) @binding(2) var<uniform> waves: array<PlaneWave, WAVE_COUNT>;

@group(1) @binding(0) var<uniform> u_global: GlobalUBO;

@group(2) @binding(0) var displacement_map_sampler: sampler;
@group(2) @binding(1) var displacement_map: texture_2d<f32>;

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
    let time = u_global.time.time_seconds;

    var displaced_position = vec3<f32>(world_position_xz.x, WAVE_NEUTRAL_PLANE, world_position_xz.y);
    var tangent = vec3<f32>(1.0, 0.0, 0.0);
    var bitangent = vec3<f32>(0.0, 0.0, 1.0);

    for (var i = 0u; i < WAVE_COUNT; i++)
    {
        var result: WaveDisplacementResult;

        switch wave_model {
            case WAVE_MODEL_COSINE: {
                result = sampleCosine(waves[i], time, world_position_xz);
            }
            case WAVE_MODEL_GERSTNER: {
                result = sampleGerstner(waves[i], time, world_position_xz);
            }
			case WAVE_MODEL_DISPLACEMENT_MAP: {
				result = sampleMap(displacement_map, displacement_map_sampler, uv);
			}
			default: {
				result.tangent = vec3<f32>(1.0, 0.0, 0.0);
				result.bitangent = vec3<f32>(0.0, 0.0, 1.0);
				result.displacement = vec3<f32>(0.0, WAVE_NEUTRAL_PLANE, 0.0);
			}
        }

        displaced_position += result.displacement;
        tangent += result.tangent;
        bitangent += result.bitangent;
    }

    let vertex_index = vertex_coord.x + vertex_coord.y * VERTEX_DIMENSION;
    output_vertices[vertex_index] = vec4<f32>(displaced_position, 1.0);

    let world_normal = -normalize(cross(tangent, bitangent));
    output_world_normals[vertex_index] = vec4<f32>(world_normal, 0.0);
}

/* --- begin surface rasterization --- */

@group(0) @binding(0) var<storage> vertices: array<vec4<f32>, VERTEX_COUNT>;
@group(0) @binding(1) var<storage> world_normals: array<vec4<f32>, VERTEX_COUNT>;

// Commented to avoid re-declaration
// @group(1) @binding(0) var<uniform> u_global: GlobalUBO;

struct VertexOut {
    @builtin(position) position : vec4<f32>,
    @location(1) world_normal : vec3<f32>,
    @location(2) color : vec3<f32>,
    @location(3) camera_distance : f32,
}

@vertex
fn rasterizationVertex(@builtin(vertex_index) index : u32) -> VertexOut
{
    var output : VertexOut;

    let world_position = vertices[index];

    output.position = u_global.camera.proj_view * world_position;
    output.world_normal = world_normals[index].xyz;
    output.color = vec3<f32>(WATER_COLOR);
    output.camera_distance = distance(u_global.camera.position, world_position);

    return output;
}

struct FragmentOut
{
    @location(0) color: vec4<f32>,
    @location(1) world_normal: vec4<f32>,
}

@fragment
fn rasterizationFragment(frag_interpolated: VertexOut) -> FragmentOut
{
    var output : FragmentOut;

    output.color = vec4<f32>(frag_interpolated.color, frag_interpolated.camera_distance);
    output.world_normal = vec4<f32>(frag_interpolated.world_normal,0.0);

    return output;
}
