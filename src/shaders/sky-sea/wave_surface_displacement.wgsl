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
	padding0: f32,

	gbuffer_extent: vec2<f32>,
	foam_scale: f32,
	foam_bias: f32,
}

@group(0) @binding(0) var<uniform> u_settings: WaveSurfaceDisplacementUBO;
@group(0) @binding(1) var<uniform> u_global: GlobalUBO;

@group(1) @binding(0) var displacement_map_sampler: sampler;
@group(1) @binding(1) var Dx_Dy_Dz_Dxdz_spatial: texture_2d_array<f32>;
@group(1) @binding(2) var Dydx_Dydz_Dxdx_Dzdz_spatial: texture_2d_array<f32>;
@group(1) @binding(3) var<uniform> u_waves: array<PlaneWave, WAVE_COUNT>;

@group(2) @binding(0) var turbulence_jacobian: texture_2d_array<f32>;

const PI = 3.141592653589793;

// Extra 1 for tiling
const VERTEX_DIMENSION = 3000u;
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
	foam_strength: f32,
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
	output.foam_strength = 0.0;

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
	output.foam_strength = 0.0;

    return output;
}

fn sampleMap(
	global_uv: vec2<f32>,
	cascade_weights: array<vec2<f32>,10u>,
	gerstner: bool,
) -> WaveDisplacementResult
{
	let delta = 0.5 / vec2<f32>(textureDimensions(Dx_Dy_Dz_Dxdz_spatial));

    var output: WaveDisplacementResult;
	output.displacement = vec3<f32>(0.0);
	output.tangent = vec3<f32>(0.0);
	output.bitangent = vec3<f32>(0.0);
	output.foam_strength = 0.0;

	const WAVE_PATCH_SIZES = array<f32,3>(200.0, 50.0, 10.0);

	var turbulence_accumulated = 0.0;
	var turbulence_max = 0.0;
	for(var array_layer = 0u; array_layer <= 3u; array_layer++)
	{
		let position_lambda = cascade_weights[array_layer].x;
		let normal_lambda = cascade_weights[array_layer].y;

		let patch_uv = global_uv / WAVE_PATCH_SIZES[array_layer];

		let Dx_Dy_Dz_Dxdz = textureSampleLevel(
			Dx_Dy_Dz_Dxdz_spatial,
			displacement_map_sampler,
			patch_uv,
			array_layer,
			0.0
		);

		var delta_displacement = Dx_Dy_Dz_Dxdz.xyz;
		if(!gerstner)
		{
			output.displacement.x = 0.0;
			output.displacement.z = 0.0;
		}

		output.displacement += position_lambda * delta_displacement;

		let Dydx_Dydz_Dxdx_Dzdz = textureSampleLevel(
			Dydx_Dydz_Dxdx_Dzdz_spatial,
			displacement_map_sampler,
			patch_uv,
			array_layer,
			0.0
		);

		let Dydx = Dydx_Dydz_Dxdx_Dzdz.x;
		let Dydz = Dydx_Dydz_Dxdx_Dzdz.y;

		let Dxdz = Dx_Dy_Dz_Dxdz.w * f32(gerstner);
		let Dzdx = Dxdz;

		var Dxdx = Dydx_Dydz_Dxdx_Dzdz.z * f32(gerstner);
		var Dzdz = Dydx_Dydz_Dxdx_Dzdz.w * f32(gerstner);

		output.tangent += normal_lambda * vec3<f32>(Dxdx, Dydx, Dzdx);
		output.bitangent += normal_lambda * vec3<f32>(Dxdz, Dydz, Dzdz);

		let turbulence = textureSampleLevel(
			turbulence_jacobian,
			displacement_map_sampler,
			patch_uv,
			array_layer,
			0.0
		).x;
		turbulence_accumulated += normal_lambda * turbulence;
		turbulence_max += normal_lambda;
	}

	// Weaken foam at lower detail levels
	// TODO: this could use more rigour
	output.foam_strength = clamp(
		u_settings.foam_scale * (1.0 - turbulence_accumulated / turbulence_max - u_settings.foam_bias),
		0.0,
		1.0
	);

	return output;
}

struct DisplacementResult
{
	world_position: vec3<f32>,
	world_normal: vec3<f32>,
	foam_strength: f32,
}

fn computeDisplacement(
	in_world_position: vec3<f32>,
	cascade_weights: array<vec2<f32>,10u>,
	time: f32,
) -> DisplacementResult
{
	var displacement = vec3<f32>(0.0);
    var tangent = vec3<f32>(1.0, 0.0, 0.0);
    var bitangent = vec3<f32>(0.0, 0.0, 1.0);
	var foam_strength = 0.0;

	if(u_settings.b_displacement_map == 1u)
	{
    	let uv = (in_world_position.xz + vec2<f32>(0.5,0.5));
		let gerstner = u_settings.b_gerstner == 1u;
		let result: WaveDisplacementResult = sampleMap(uv, cascade_weights, gerstner);

		displacement += result.displacement;
		tangent += result.tangent;
		bitangent += result.bitangent;
		foam_strength += result.foam_strength;
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

			displacement += result.displacement;
			tangent += result.tangent;
			bitangent += result.bitangent;
			foam_strength += result.foam_strength;
		}
	}

	var result: DisplacementResult;

	result.world_position = in_world_position + displacement;
	// our system is right-handed, so negate WGSL left-handed cross
	result.world_normal = normalize(-cross(tangent, bitangent));
	result.foam_strength = clamp(foam_strength, 0.0, 1.0);

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
	@location(4) foam_strength : f32,
}

fn projectNDCToPlaneWorldPosition(
	ndc: vec2<f32>,
	ndc_offset: vec2<f32>,
	camera: Camera,
	ocean_origin: vec3<f32>,
	ocean_normal: vec3<f32>
) -> vec3<f32>
{
	let near_plane = 1.0;
	let direction_view_space = camera.inv_proj * vec4<f32>(
		ndc + ndc_offset,
		near_plane,
		1.0
	);

	let direction_world = normalize((camera.inv_view * vec4<f32>(direction_view_space.xyz, 0.0)).xyz);

	let ocean_plane_hit = rayPlaneIntersection(camera.position.xyz, direction_world, ocean_origin, ocean_normal);
	let t = mix(1000.0, ocean_plane_hit.t, f32(ocean_plane_hit.hit));
	var world_position = camera.position.xyz + t * direction_world;

	return world_position;
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

	let ocean_origin = vec3<f32>(0.0, WAVE_NEUTRAL_PLANE, 0.0);
	let ocean_normal = vec3<f32>(0.0,1.0,0.0);

	let cell_world_position = projectNDCToPlaneWorldPosition(
		ndc_space_coord,
		vec2<f32>(0.0,0.0),
		camera,
		ocean_origin,
		ocean_normal,
	);
	let neighbor_world_position = projectNDCToPlaneWorldPosition(
		ndc_space_coord,
		vec2<f32>(1.0) / f32(VERTEX_DIMENSION - 1u),
		camera,
		ocean_origin,
		ocean_normal,
	);
	let pixel_neighbor_world_position = projectNDCToPlaneWorldPosition(
		ndc_space_coord,
		vec2<f32>(1.0) / u_settings.gbuffer_extent,
		camera,
		ocean_origin,
		ocean_normal,
	);

	/*
	 * When projecting this grid of screen-space triangles to the ocean, each
	 * vertex is a sample of our ocean wave data. We don't want to sample waves
	 * outside the nyquist limit for a given cell/pixel.
	 *
	 * We filter cascades' effect on POSITION by the sample rate of the entire
	 * triangle/cell.
	 *
	 * We filter cascades' effect on NORMAL by the sample rate of each pixel.
	 *
	 * These criteria are separated since normals are per pixel, while
	 * displacement visually relies on triangle rasterization and visible
	 * feature detail is bounded by the final distance of vertices.
	 */

	const CASCADE_CAPACITY = 10u;
	var cascade_weights = array<vec2<f32>, CASCADE_CAPACITY>();

	const NYQUIST_MIN = 1.0;
	const NYQUIST_MAX = 2.5;

	// TODO: this is hardcoded right now, but should be updated as wave initial amplitudes are changed
	const WAVE_NUMBER_FENCE_POSTS = array<f32, 5>(
		0.001,
		8.042477193189871,
		32.169908772759484,
		160.8495438637974,
		1000
	);

	// Any wave with wavenumber greater than this should NOT be sampled
	let cell_nyquist_wavenumber = (2.0 * PI) / (distance(neighbor_world_position, cell_world_position) * 2.0);
	let pixel_nyquist_wavenumber = (2.0 * PI) / (distance(pixel_neighbor_world_position, cell_world_position) * 2.0);

	for(var cascade = 0u; cascade < textureNumLayers(Dx_Dy_Dz_Dxdz_spatial); cascade++)
	{
		let wave_number_min = WAVE_NUMBER_FENCE_POSTS[cascade];
		let wave_number_max = WAVE_NUMBER_FENCE_POSTS[cascade + 1u];

		let wave_number_concentration = mix(wave_number_min, wave_number_max, 0.1);

		const MIN_SCALE = 1.0;
		const MAX_SCALE = 2.5;

		let position_scale = 1.0 - smoothstep(
			cell_nyquist_wavenumber * MIN_SCALE,
			cell_nyquist_wavenumber * MAX_SCALE,
			wave_number_concentration
		);
		let normal_scale = 1.0 - smoothstep(
			pixel_nyquist_wavenumber * MIN_SCALE,
			pixel_nyquist_wavenumber * MAX_SCALE,
			wave_number_concentration
		);

		cascade_weights[cascade] = vec2<f32>(position_scale, normal_scale);
	}

	let displacement_result = computeDisplacement(cell_world_position, cascade_weights, u_global.time.time_seconds);

	let world_position = displacement_result.world_position;

    output.position = u_global.camera.proj_view * vec4<f32>(world_position, 1.0);
	// Unclipped depth didn't work (and requires a feature) so this is a workaround
	output.position.z /= 1.001;
	output.world_normal = displacement_result.world_normal;
	output.color = vec3<f32>(WATER_COLOR);
	output.foam_strength = displacement_result.foam_strength;

	// Test screen-space density of vertices
	// output.color = vec3<f32>(step(fract(50 * ndc_space_coord), vec2<f32>(0.1)),0.0);
 	// output.color = vec3<f32>(step(fract(1.0 * world_position.x), 0.05),0.0,0.0);

    output.camera_distance = distance(u_global.camera.position.xyz, world_position);

    return output;
}

struct FragmentOut
{
    @location(0) color_with_surface_world_depth_in_alpha: vec4<f32>,
    @location(1) world_normal_with_surface_foam_strength_in_alpha: vec4<f32>,
}

@fragment
fn rasterizationFragment(frag_interpolated: VertexOut) -> FragmentOut
{
    var output : FragmentOut;

    output.color_with_surface_world_depth_in_alpha = vec4<f32>(frag_interpolated.color, frag_interpolated.camera_distance);
    output.world_normal_with_surface_foam_strength_in_alpha = vec4<f32>(frag_interpolated.world_normal,frag_interpolated.foam_strength);

    return output;
}
