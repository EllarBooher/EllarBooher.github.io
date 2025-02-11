// Displace a grid of vertices representing the ocean surface, then rasterize into the gbuffer with a graphics pass

//// INCLUDE types.inc.wgsl

struct PlaneWave
{
    direction: vec2<f32>,
    amplitude: f32,
    wavelength: f32,
}

struct WaveSurfaceDisplacementUBO
{
	patch_world_half_extent: f32,
	b_gerstner: u32,
	b_displacement_map: u32,
}

@group(0) @binding(0) var<uniform> u_settings: WaveSurfaceDisplacementUBO;
@group(0) @binding(1) var<uniform> u_global: GlobalUBO;

@group(1) @binding(0) var displacement_map_sampler: sampler;
@group(1) @binding(1) var Dx_Dy_Dz_Dxdz_spatial: texture_2d<f32>;
@group(1) @binding(2) var Dydx_Dydz_Dxdx_Dzdz_spatial: texture_2d<f32>;
@group(1) @binding(3) var<uniform> u_waves: array<PlaneWave, WAVE_COUNT>;

// Extra 1 for tiling
const VERTEX_DIMENSION = 2048u + 1u;
const VERTEX_COUNT = VERTEX_DIMENSION * VERTEX_DIMENSION;
// const TRIANGLE_COUNT = 2u * (VERTEX_DIMENSION - 1u) * (VERTEX_DIMENSION - 1u);
// const INDEX_COUNT = 3u * TRIANGLE_COUNT;

const WAVE_COUNT = 12u;

const WATER_COLOR = vec3<f32>(1.0 / 255.0, 123.0 / 255.0, 146.0 / 255.0);
const WAVE_NEUTRAL_PLANE = 1.0;

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

fn sampleMap(map: texture_2d<f32>, sampler: sampler, patch_uv: vec2<f32>, gerstner: bool, lod: u32) -> WaveDisplacementResult
{
	let delta = 0.5 / vec2<f32>(textureDimensions(Dx_Dy_Dz_Dxdz_spatial));

    var output: WaveDisplacementResult;

	let Dx_Dy_Dz_Dxdz = textureSampleLevel(Dx_Dy_Dz_Dxdz_spatial, displacement_map_sampler, patch_uv, f32(lod));

	output.displacement = Dx_Dy_Dz_Dxdz.xyz;

	if(!gerstner)
	{
		output.displacement.x = 0.0;
		output.displacement.z = 0.0;
	}

	let Dydx_Dydz_Dxdx_Dzdz = textureSampleLevel(Dydx_Dydz_Dxdx_Dzdz_spatial, displacement_map_sampler, patch_uv, f32(lod));

	let Dydx = Dydx_Dydz_Dxdx_Dzdz.x;
	let Dydz = Dydx_Dydz_Dxdx_Dzdz.y;

	let Dxdz = Dx_Dy_Dz_Dxdz.w * f32(gerstner);
	let Dzdx = Dxdz;

	var Dxdx = Dydx_Dydz_Dxdx_Dzdz.z * f32(gerstner);
	var Dzdz = Dydx_Dydz_Dxdx_Dzdz.w * f32(gerstner);

	output.tangent = vec3<f32>(Dxdx, Dydx, Dzdx);
	output.bitangent = vec3<f32>(Dxdz, Dydz, Dzdz);

	return output;
}

struct DisplacementResult
{
	world_position: vec3<f32>,
	world_normal: vec3<f32>,
}

fn computeDisplacement(in_world_position: vec3<f32>, time: f32, lod: u32) -> DisplacementResult
{
	var displaced_position = in_world_position;
    var tangent = vec3<f32>(1.0, 0.0, 0.0);
    var bitangent = vec3<f32>(0.0, 0.0, 1.0);

    let uv = (in_world_position.xz + vec2<f32>(0.5,0.5)) / (2.0 * u_settings.patch_world_half_extent);

	if(u_settings.b_displacement_map == 1u)
	{
		let gerstner = u_settings.b_gerstner == 1u;
		let result: WaveDisplacementResult = sampleMap(Dx_Dy_Dz_Dxdz_spatial, displacement_map_sampler, uv, gerstner, lod);

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
				result = sampleGerstner(u_waves[i], time, in_world_position.xz, u_settings.patch_world_half_extent);
			}
			else
			{
				result = sampleCosine(u_waves[i], time, in_world_position.xz, u_settings.patch_world_half_extent);
			}

			displaced_position += result.displacement;
			tangent += result.tangent;
			bitangent += result.bitangent;
		}
	}

	var result: DisplacementResult;
	result.world_position = displaced_position;
	result.world_normal = -normalize(cross(tangent, bitangent));

	return result;
}

struct RayPlaneHit {
	hit: bool,
	t: f32,
}

fn rayPlaneIntersection(
	ray_origin: vec3<f32>,
	ray_direction: vec3<f32>,
	plane_origin: vec3<f32>,
	plane_normal: vec3<f32>
) -> RayPlaneHit
{
	var result: RayPlaneHit;

	let perp = dot(plane_normal, ray_direction);
	result.t = dot(plane_origin - ray_origin, plane_normal) / perp;
	result.hit = (abs(perp) > 0.00001) && (result.t > 0.0);

	return result;
}

struct VertexOut {
    @builtin(position) position : vec4<f32>,
    @location(1) world_normal : vec3<f32>,
    @location(2) color : vec3<f32>,
    @location(3) camera_distance : f32,
}

/*
 * Projects a grid of vertices with evenly distributed screen space coordinates
 */
@vertex
fn screenSpaceWarped(@builtin(vertex_index) index : u32) -> VertexOut
{
	var output : VertexOut;

	let camera = u_global.camera;

	let vert_coord = vec2<f32>(
		f32(index % VERTEX_DIMENSION),
		f32(index / VERTEX_DIMENSION)
	) / f32(VERTEX_DIMENSION - 1u);

	let overlap = vec2<f32>(1.5);

	/*
	 * This assumes:
	 *  - the camera has no roll, so the horizon is flat in NDC space and extends to y=-1
	 *  - the horizon is visible
	 */

	/* Enable this when camera moves too high, and horizon drops more than a pixel or two
	const METERS_PER_MM = 1000000.0;
	let atmosphere = u_global.atmosphere;

    let origin = vec3<f32>(0.0, atmosphere.planet_radius_Mm, 0.0) + camera.position.xyz / METERS_PER_MM;
    let sin_horizon: f32 = atmosphere.planet_radius_Mm / length(origin);
    let cos_horizon: f32 = -safeSqrt(1.0 - sin_horizon * sin_horizon);
	let ndc_horizon_forward = (camera.proj_view * vec4<f32>(camera.forward.x, 0.0, camera.forward.z, 0.0));
	*/

	let ndc_horizon_forward = (camera.proj_view * vec4<f32>(camera.forward.x, 0.0, camera.forward.z, 0.0));

	let ndc_min = vec2<f32>(-overlap.x, -overlap.y);
	let ndc_max = vec2<f32>(overlap.x, ndc_horizon_forward.y / ndc_horizon_forward.w);

	let ndc_space_coord = mix(ndc_min, ndc_max, vert_coord);

    let near_plane_depth = 1.0;
    let direction_view_space = camera.inv_proj * vec4(ndc_space_coord, near_plane_depth, 1.0);
    let direction_world = normalize((camera.inv_view * vec4<f32>(direction_view_space.xyz, 0.0)).xyz);

	let ocean_origin = vec3<f32>(0.0, WAVE_NEUTRAL_PLANE, 0.0);
	let ocean_normal = vec3<f32>(0.0,1.0,0.0);
	let ocean_plane_hit = rayPlaneIntersection(camera.position.xyz, direction_world, ocean_origin, ocean_normal);
	// We assume the camera is nice, and that our manipulation of uv above guarantees a hit
	// assert(ocean_plane_hit.hit)
	var t = mix(1000.0, ocean_plane_hit.t, f32(ocean_plane_hit.hit));

	var in_world_position = camera.position.xyz + t * direction_world;
	in_world_position.y = WAVE_NEUTRAL_PLANE;

	const max_lod = 4u;
	const lod_scale_meters = 350.0;
	let lod: u32 = min(max_lod, u32(t / lod_scale_meters));
	let displacement_result = computeDisplacement(in_world_position, u_global.time.time_seconds, lod);

	let world_position = displacement_result.world_position;

    output.position = u_global.camera.proj_view * vec4<f32>(world_position, 1.0);
	// Unclipped depth didn't work (and requires a feature) so this is a workaround
	output.position.z /= 1.001;
	output.world_normal = displacement_result.world_normal;
	output.color = vec3<f32>(WATER_COLOR);

	// Test screen-space density of vertices
	// output.color = vec3<f32>(step(fract(50 * ndc_space_coord), vec2<f32>(0.1)),0.0);
 	// output.color = vec3<f32>(step(fract(1.0 * world_position.x), 0.05),0.0,0.0);

    output.camera_distance = distance(u_global.camera.position.xyz, world_position);

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
