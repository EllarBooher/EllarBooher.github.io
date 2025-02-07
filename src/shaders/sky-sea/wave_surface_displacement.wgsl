// Displace a grid of vertices representing the ocean surface, then rasterize into the gbuffer with a graphics pass

//// INCLUDE types.inc.wgsl

/* --- begin ocean mesh displacement --- */

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

fn sampleGerstner(wave: PlaneWave, time: f32, coords: vec2<f32>, falloff_distance: f32) -> WaveDisplacementResult
{
    let wave_amplitude = (1.0 - smoothstep(0.0, falloff_distance, length(coords))) * wave.amplitude;
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

fn sampleCosine(wave: PlaneWave, time: f32, coords: vec2<f32>, falloff_distance: f32) -> WaveDisplacementResult
{
    let wave_amplitude = (1.0 - smoothstep(0.0, falloff_distance, length(coords))) * wave.amplitude;
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

fn sampleMap(map: texture_2d<f32>, sampler: sampler, patch_uv: vec2<f32>, gerstner: bool) -> WaveDisplacementResult
{
	let delta = 0.5 / vec2<f32>(textureDimensions(Dx_Dy_Dz_Dxdz_spatial));

    var output: WaveDisplacementResult;

	let Dx_Dy_Dz_Dxdz = textureSampleLevel(Dx_Dy_Dz_Dxdz_spatial, displacement_map_sampler, patch_uv, 0);

	output.displacement = Dx_Dy_Dz_Dxdz.xyz;

	if(!gerstner)
	{
		output.displacement.x = 0.0;
		output.displacement.z = 0.0;
	}

	let Dydx_Dydz_Dxdx_Dzdz = textureSampleLevel(Dydx_Dydz_Dxdx_Dzdz_spatial, displacement_map_sampler, patch_uv, 0);

	let Dydx = Dydx_Dydz_Dxdx_Dzdz.x;
	let Dydz = Dydx_Dydz_Dxdx_Dzdz.y;

	let Dxdz = Dx_Dy_Dz_Dxdz.w;
	let Dzdx = Dxdz;

	var Dxdx = Dydx_Dydz_Dxdx_Dzdz.z * f32(gerstner);
	var Dzdz = Dydx_Dydz_Dxdx_Dzdz.w * f32(gerstner);

	output.tangent = vec3<f32>(Dxdx, Dydx, Dzdx);
	output.bitangent = vec3<f32>(Dxdz, Dydz, Dzdz);

	return output;
}

// Extra 1 for tiling
const VERTEX_DIMENSION = 1024u + 1u;
const VERTEX_COUNT = VERTEX_DIMENSION * VERTEX_DIMENSION;
// const TRIANGLE_COUNT = 2u * (VERTEX_DIMENSION - 1u) * (VERTEX_DIMENSION - 1u);
// const INDEX_COUNT = 3u * TRIANGLE_COUNT;

const WAVE_COUNT = 12u;

struct WaveSurfaceDisplacementUBO
{
	patch_world_half_extent: f32,
	b_gerstner: u32,
	b_displacement_map: u32,
}

// Vertices are in (x,y,z) world coordinates, so during rasterization you must swizzle y <-> z
@group(0) @binding(0) var<storage, read_write> output_vertices: array<vec4<f32>, VERTEX_COUNT>;
@group(0) @binding(1) var<storage, read_write> output_world_normals: array<vec4<f32>, VERTEX_COUNT>;
@group(0) @binding(2) var<uniform> u_settings: WaveSurfaceDisplacementUBO;
@group(0) @binding(3) var<uniform> u_waves: array<PlaneWave, WAVE_COUNT>;

@group(1) @binding(0) var<uniform> u_global: GlobalUBO;

@group(2) @binding(0) var displacement_map_sampler: sampler;
@group(2) @binding(1) var Dx_Dy_Dz_Dxdz_spatial: texture_2d<f32>;
// First two channels are needed for general slope, last two channels are needed for gerstner wave slopes (when Dx or Dz are nonzero)
@group(2) @binding(2) var Dydx_Dydz_Dxdx_Dzdz_spatial: texture_2d<f32>;

@compute @workgroup_size(16, 16, 1)
fn displaceVertices(@builtin(global_invocation_id) global_id : vec3<u32>,)
{
    let vertex_coord = vec2<u32>(global_id.xy);

	// Offset size so uv doesn't extend to duplicated edge
    let size = vec2<u32>(VERTEX_DIMENSION - 1u);

    if(vertex_coord.x >= size.x || vertex_coord.y >= size.y)
    {
        return;
    }

    let uv = (vec2<f32>(vertex_coord) + vec2<f32>(0.5,0.5)) / vec2<f32>(size);

    let world_position_xz = vec2<f32>(u_settings.patch_world_half_extent) * 2.0 * (uv - vec2<f32>(0.5));
    let time = u_global.time.time_seconds;

    var displaced_position = vec3<f32>(world_position_xz.x, WAVE_NEUTRAL_PLANE, world_position_xz.y);
    var tangent = vec3<f32>(1.0, 0.0, 0.0);
    var bitangent = vec3<f32>(0.0, 0.0, 1.0);

	if(u_settings.b_displacement_map == 1u)
	{
		let gerstner = u_settings.b_gerstner == 1u;
		let result: WaveDisplacementResult = sampleMap(Dx_Dy_Dz_Dxdz_spatial, displacement_map_sampler, uv, gerstner);

		displaced_position += result.displacement;
		tangent += result.tangent;
		bitangent += result.bitangent;
	}
	else
	{
		var result: WaveDisplacementResult;

		for (var i = 0u; i < WAVE_COUNT; i++)
		{
			if(u_settings.b_gerstner == 1u)
			{
				result = sampleGerstner(u_waves[i], time, world_position_xz, u_settings.patch_world_half_extent);
			}
			else
			{
				result = sampleCosine(u_waves[i], time, world_position_xz, u_settings.patch_world_half_extent);
			}

			displaced_position += result.displacement;
			tangent += result.tangent;
			bitangent += result.bitangent;
		}
	}

    let vertex_index = vertex_coord.x + vertex_coord.y * VERTEX_DIMENSION;
    output_vertices[vertex_index] = vec4<f32>(displaced_position, 1.0);

    let world_normal = -normalize(cross(tangent, bitangent));
    output_world_normals[vertex_index] = vec4<f32>(world_normal, 0.0);

	// We need to fill in the edge so the mesh tiles properly
	if(vertex_coord.x == 0u && vertex_coord.y == 0u)
	{
		let index = (VERTEX_DIMENSION - 1u) + (VERTEX_DIMENSION - 1u) * VERTEX_DIMENSION;
		let offset = vec3<f32>(u_settings.patch_world_half_extent * 2.0, 0.0, u_settings.patch_world_half_extent * 2.0);
    	output_vertices[index] = vec4<f32>(displaced_position + offset, 1.0);
    	output_world_normals[index] = vec4<f32>(world_normal, 0.0);
	}

	if (vertex_coord.x == 0u)
	{
		let index = (VERTEX_DIMENSION - 1u) + (vertex_coord.y) * VERTEX_DIMENSION;
		let offset = vec3<f32>(u_settings.patch_world_half_extent * 2.0, 0.0, 0.0);
    	output_vertices[index] = vec4<f32>(displaced_position + offset, 1.0);
    	output_world_normals[index] = vec4<f32>(world_normal, 0.0);
	}

	if (vertex_coord.y == 0u)
	{
		let index = vertex_coord.x + (VERTEX_DIMENSION - 1u) * VERTEX_DIMENSION;
		let offset = vec3<f32>(0.0, 0.0, u_settings.patch_world_half_extent * 2.0);
    	output_vertices[index] = vec4<f32>(displaced_position + offset, 1.0);
    	output_world_normals[index] = vec4<f32>(world_normal, 0.0);
	}
}

/* --- begin surface rasterization --- */

@group(0) @binding(0) var<storage> vertices: array<vec4<f32>, VERTEX_COUNT>;
@group(0) @binding(1) var<storage> world_normals: array<vec4<f32>, VERTEX_COUNT>;
// Commented to avoid re-declaration
// @group(0) @binding(2) var<uniform> u_settings: WaveSurfaceDisplacementUBO;
@group(0) @binding(3) var<storage> patch_instance_offsets: array<vec4<f32>>;

// Commented to avoid re-declaration
// @group(1) @binding(0) var<uniform> u_global: GlobalUBO;

struct VertexOut {
    @builtin(position) position : vec4<f32>,
    @location(1) world_normal : vec3<f32>,
    @location(2) color : vec3<f32>,
    @location(3) camera_distance : f32,
}

@vertex
fn rasterizationVertex(@builtin(vertex_index) index : u32, @builtin(instance_index) instance : u32) -> VertexOut
{
    var output : VertexOut;

	let world_position = vertices[index] + patch_instance_offsets[instance];

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
