// Displace a grid of vertices representing the ocean surface, then rasterize into the gbuffer with a graphics pass

#include types.inc.wgsl
#include raycast.inc.wgsl

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
	vertex_size: u32,

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

const WAVE_COUNT = 12u;

const WATER_COLOR = 0.3 * vec3<f32>(16.0 / 255.0, 97.0 / 255.0, 171.0 / 255.0);
const WAVE_NEUTRAL_PLANE = 1.0;

const CASCADE_CAPACITY = 4u;
const WAVE_CASCADE_SIZES = array<f32,3>(200.0, 50.0, 10.0);

struct OceanSurfaceDisplacement
{
	displacement: vec3<f32>,
}

fn sampleOceanSurfaceDisplacementFromMap(
	global_uv: vec2<f32>,
	cascade_position_weights: array<f32,CASCADE_CAPACITY>,
	gerstner: bool,
) -> OceanSurfaceDisplacement
{
    var result: OceanSurfaceDisplacement;
	result.displacement = vec3<f32>(0.0);

	for(var array_layer = 0u; array_layer <= 3u; array_layer++)
	{
		let position_lambda = cascade_position_weights[array_layer];

		let patch_uv = global_uv / WAVE_CASCADE_SIZES[array_layer];

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
			delta_displacement.x = 0.0;
			delta_displacement.z = 0.0;
		}

		result.displacement += position_lambda * delta_displacement;
	}

	return result;
}

fn sampleOceanSurfaceDisplacementFromWave(
	wave: PlaneWave,
	time: f32,
	coords: vec2<f32>,
	falloff_distance: f32
) -> OceanSurfaceDisplacement
{
	let falloff_factor = (1.0 - smoothstep(0.0, falloff_distance, length(coords)));
    let wave_amplitude = falloff_factor * wave.amplitude;
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

    var result: OceanSurfaceDisplacement;

    let result_xz = -wave_direction * wave_amplitude * sin_theta;
    let result_y = wave_amplitude * cos_theta;
    result.displacement = vec3<f32>(result_xz.x, result_y, result_xz.y);

    return result;
}

fn getOceanSurfaceDisplacement(
	global_uv: vec2<f32>,
	cascade_position_weights: array<f32,CASCADE_CAPACITY>,
) -> OceanSurfaceDisplacement
{
	var result: OceanSurfaceDisplacement;
	result.displacement = vec3<f32>(0.0);

	if(u_settings.b_displacement_map == 1u)
	{
    	let uv = (global_uv + vec2<f32>(0.5,0.5));
		let gerstner = u_settings.b_gerstner == 1u;
		let sample = sampleOceanSurfaceDisplacementFromMap(uv, cascade_position_weights, gerstner);

		result.displacement += sample.displacement;
	}
	else
	{
		var sample: OceanSurfaceDisplacement;

		for (var i = 0u; i < WAVE_COUNT; i++)
		{
			sample = sampleOceanSurfaceDisplacementFromWave(
				u_waves[i],
				u_global.time.time_seconds,
				global_uv,
				u_settings.patch_world_half_extent
			);

			result.displacement += result.displacement;
		}
	}

	return result;
}

const METERS_PER_MM: f32 = 1000000;
fn projectNDCToOceanSurface(
	ndc: vec2<f32>,
	ndc_offset: vec2<f32>,
	camera: Camera,
) -> vec3<f32>
{
	let near_plane = 1.0;
	let direction_view_space = camera.inv_proj * vec4<f32>(
		ndc + ndc_offset,
		near_plane,
		1.0
	);

	let direction_world = normalize((camera.inv_view * vec4<f32>(direction_view_space.xyz, 0.0)).xyz);

	let ocean_hit = raySphereIntersection(
		camera.position.xyz + vec3<f32>(0.0, u_global.atmosphere.planet_radius_Mm * METERS_PER_MM, 0.0),
		direction_world,
		u_global.atmosphere.planet_radius_Mm * METERS_PER_MM
	);
	let t = mix(10000.0, ocean_hit.t0, f32(ocean_hit.hit && ocean_hit.t0 > 0.0));

	if (ocean_hit.hit && ocean_hit.t0 > 0.0)
	{
		return camera.position.xyz + ocean_hit.t0 * direction_world;
	}

	return normalize(camera.position.xyz + 10000.0 * direction_world) * u_global.atmosphere.planet_radius_Mm * METERS_PER_MM - vec3<f32>(0.0, u_global.atmosphere.planet_radius_Mm * METERS_PER_MM, 0.0);
}
fn projectNDCToOceanSurfaceWithPivot(
	ndc: vec2<f32>,
	ndc_offset: vec2<f32>,
	camera: Camera,
	pivot: vec3<f32>,
) -> vec3<f32>
{
	let world_position = projectNDCToOceanSurface(ndc, ndc_offset, camera);
	let pivot_offset = world_position - pivot;
	let pivot_distance = length(pivot_offset);

	/*
	 * Stretch all points away from a pivot, which should be some sort of
	 * "center" of the projected ocean surface quad. This covers gaps at the
	 * edges when waves grow too large, while being reactive to the shape of
	 * the quad.
	 *
	 * Some other solutions that might work, but weren't chosen over this due
	 * to being too complicated or difficult to make work nicely:
	 * 		- stretch input NDC-space coordinates before projecting. This ends
	 *		  up wasting many vertices in the distance, and compensating for
	 *		  world space distance in ndc-space requires lots of back and forth
	 * 		  conversions.
	 *		- Some sort of offset based on the camera forward. This quickly
	 *		  falls apart when the camera forward is close to the unperturbed
	 *		  ocean surface normal/world-up, and handling that case separately
	 *		  is messy since it is predicated on camera FOV, aspect ratio,
	 *		  position, etc.
	 */
	const STRETCH_THRESHOLDS = vec2<f32>(2.0,20.0);
	// Avoid the singularity near the pivot, and drop out when this fix is less necessary
	if(pivot_distance < STRETCH_THRESHOLDS.x || camera.position.y > 100.0)
	{
		return world_position;
	}
	const STRETCH_ABSOLUTE_BIAS = 80.0;
	let stretch_parameter = smoothstep(
		STRETCH_THRESHOLDS.x,
		STRETCH_THRESHOLDS.y,
		pivot_distance
	);
	let stretch = ((pivot_distance + stretch_parameter * STRETCH_ABSOLUTE_BIAS) / pivot_distance);
	return pivot + pivot_offset * stretch;
}

struct VertexOut {
    @builtin(position) position             : vec4<f32>,
	@location(0) surface_normal             : vec3<f32>,
    @location(1) color                      : vec3<f32>,
    @location(2) camera_distance            : f32,
	@location(3) cascade_1234_normal_weights: vec4<f32>,
	@location(5) global_uv                  : vec2<f32>,
}

/*
 * Projects a grid of vertices with evenly distributed screen space coordinates
 */
@vertex
fn screenSpaceWarped(@builtin(vertex_index) index : u32) -> VertexOut
{
	var output : VertexOut;

	/*
	 * Note the usage of a separate camera. The camera for ocean surface
	 * generation is decoupled from the final rendering POV camera. In normal
	 * use it's the same, but for debugging and illustration it helps to render
	 * the ocean surface from anywhere.
	 */
	let ocean_camera = u_global.ocean_camera;

	let vert_coord = vec2<f32>(
		f32(index % u_settings.vertex_size),
		f32(index / u_settings.vertex_size)
	) / f32(u_settings.vertex_size - 1u);

	let overlap = vec2<f32>(1.05);

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

	let ndc_horizon_forward =
		ocean_camera.proj_view
		* vec4<f32>(
			ocean_camera.forward.x,
			0.0,
			ocean_camera.forward.z,
			0.0
		);

	let ndc_min = vec2<f32>(-overlap.x, -overlap.y);
	let ndc_max = vec2<f32>(overlap.x, min(ndc_horizon_forward.y / ndc_horizon_forward.w, overlap.y));

	let ndc_space_coord = mix(ndc_min, ndc_max, vert_coord);

	let ocean_origin = vec3<f32>(0.0, WAVE_NEUTRAL_PLANE, 0.0);
	let ocean_normal = vec3<f32>(0.0,1.0,0.0);

	let center_position = projectNDCToOceanSurface(
		mix(ndc_min, ndc_max, 0.5),
		vec2<f32>(0.0,0.0),
		ocean_camera,
	);

	let cell_world_position = projectNDCToOceanSurfaceWithPivot(
		ndc_space_coord,
		vec2<f32>(0.0,0.0),
		ocean_camera,
		center_position
	);
	let neighbor_world_position = projectNDCToOceanSurfaceWithPivot(
		ndc_space_coord,
		vec2<f32>(1.0) / f32(u_settings.vertex_size - 1u),
		ocean_camera,
		center_position
	);
	let pixel_neighbor_world_position = projectNDCToOceanSurfaceWithPivot(
		ndc_space_coord,
		vec2<f32>(1.0) / u_settings.gbuffer_extent,
		ocean_camera,
		center_position
	);

	var cascade_position_weights = array<f32, CASCADE_CAPACITY>(1,1,1,1);
	var cascade_normal_weights = array<f32, CASCADE_CAPACITY>(1,1,1,1);

	/*
	 * Disable this since mipmapping is good enough.
	 * The eventual goal to enable this would be to transition to a
	 * distant ocean BRDF in order to replace the normal perturbations we filter
	 * out.
	 */
	const WITH_NYQUIST_FILTERING = false;
	if(WITH_NYQUIST_FILTERING)
	{
		/*
		* When projecting this grid of screen-space triangles to the ocean, each
		* vertex and fragment is a sample of our ocean wave data. We don't want to
		* sample waves outside the nyquist limit for a given cell/pixel.
		*
		* We filter cascades' effect on POSITION by the sample rate of the entire
		* triangle/cell, i.e. per vertex.
		*
		* We filter cascades' effect on NORMAL by the sample rate of each pixel,
		* i.e. per fragment.
		*
		* These criteria are distinct since normals are per pixel, while
		* displacement visually relies on triangle rasterization and visible
		* feature detail is bounded by the final distance of vertices.
		*/

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

			let wave_number_concentration = mix(wave_number_min, wave_number_max, 0.15);

			let position_weight = 1.0 - smoothstep(
				cell_nyquist_wavenumber * 1.0,
				cell_nyquist_wavenumber * 2.5,
				wave_number_concentration
			);
			let normal_weight = 1.0 - smoothstep(
				pixel_nyquist_wavenumber * 1.0,
				pixel_nyquist_wavenumber * 3.0,
				wave_number_concentration
			);

			cascade_position_weights[cascade] = position_weight;
			cascade_normal_weights[cascade] = normal_weight;
		}
	}

	let global_uv = cell_world_position.xz;
	let displacement_result = getOceanSurfaceDisplacement(
		global_uv,
		cascade_position_weights
	);
	let world_position = cell_world_position + displacement_result.displacement;

	output.global_uv = global_uv;

    output.position = u_global.camera.proj_view * vec4<f32>(world_position, 1.0);
    output.camera_distance = distance(u_global.camera.position.xyz, world_position);

	// Unclipped depth didn't work (and requires a feature) so this is a workaround
	output.position.z /= 1.001;

	output.color = vec3<f32>(WATER_COLOR);

	// Test screen-space density of vertices
	// output.color = vec3<f32>(step(fract(50 * ndc_space_coord), vec2<f32>(0.1)),0.0);
 	// output.color = vec3<f32>(step(fract(1.0 * world_position.x), 0.05),0.0,0.0);


	output.surface_normal = normalize(
		world_position
		+ vec3<f32>(0.0, u_global.atmosphere.planet_radius_Mm * METERS_PER_MM, 0.0)
	);

	output.cascade_1234_normal_weights = vec4<f32>(
		cascade_normal_weights[0],
		cascade_normal_weights[1],
		cascade_normal_weights[2],
		cascade_normal_weights[3],
	);

    return output;
}

struct FragmentOut
{
    @location(0) color_with_surface_world_depth_in_alpha: vec4<f32>,
    @location(1) world_normal_with_surface_foam_strength_in_alpha: vec4<f32>,
}

struct OceanSurfaceTangents
{
	tangent: vec3<f32>,
	bitangent: vec3<f32>,
	foam_strength: f32,
}

fn sampleOceanSurfaceTangentDifferentialFromMap(
	global_uv: vec2<f32>,
	cascade_normal_weights: array<f32,CASCADE_CAPACITY>,
	gerstner: bool,
) -> OceanSurfaceTangents
{
    var result: OceanSurfaceTangents;
	result.tangent = vec3<f32>(0.0);
	result.bitangent = vec3<f32>(0.0);

	var turbulence_accumulated = 0.0;
	var turbulence_max = 0.0;
	for(var array_layer = 0u; array_layer < textureNumLayers(Dx_Dy_Dz_Dxdz_spatial); array_layer++)
	{
		let normal_lambda = cascade_normal_weights[array_layer];

		let patch_uv = global_uv / WAVE_CASCADE_SIZES[array_layer];

		let Dx_Dy_Dz_Dxdz = textureSample(
			Dx_Dy_Dz_Dxdz_spatial,
			displacement_map_sampler,
			patch_uv,
			array_layer
		);

		let Dydx_Dydz_Dxdx_Dzdz = textureSample(
			Dydx_Dydz_Dxdx_Dzdz_spatial,
			displacement_map_sampler,
			patch_uv,
			array_layer
		);

		let Dydx = Dydx_Dydz_Dxdx_Dzdz.x;
		let Dydz = Dydx_Dydz_Dxdx_Dzdz.y;

		let Dxdz = Dx_Dy_Dz_Dxdz.w * f32(gerstner);
		let Dzdx = Dxdz;

		var Dxdx = Dydx_Dydz_Dxdx_Dzdz.z * f32(gerstner);
		var Dzdz = Dydx_Dydz_Dxdx_Dzdz.w * f32(gerstner);

		result.tangent += normal_lambda * vec3<f32>(Dxdx, Dydx, Dzdx);
		result.bitangent += normal_lambda * vec3<f32>(Dxdz, Dydz, Dzdz);

		let turbulence = textureSample(
			turbulence_jacobian,
			displacement_map_sampler,
			patch_uv,
			array_layer
		).x;
		turbulence_accumulated += normal_lambda * clamp(1.0 - turbulence, 0.0, 1.0);
		turbulence_max += max(normal_lambda, 0.1);
	}

	// TODO: this could use more rigour
	result.foam_strength = clamp(
		u_settings.foam_scale * (turbulence_accumulated / turbulence_max - u_settings.foam_bias),
		0.0,
		1.0
	);

	return result;
}

fn sampleOceanSurfaceTangentDifferentialFromWave(
	global_uv: vec2<f32>,
	wave: PlaneWave,
	time: f32,
	falloff_distance: f32,
	gerstner: bool,
) -> OceanSurfaceTangents
{
	let falloff_factor = (1.0 - smoothstep(0.0, falloff_distance, length(global_uv)));
    let wave_amplitude = falloff_factor * wave.amplitude;
    let wave_direction = normalize(wave.direction);
    let wavelength = wave.wavelength;

    let wave_number = 2.0 * 3.141592653589793 / wavelength;

	// TODO: parameterize this in ubo (like how the FFT waves do it)
    let gravity = 9.8;

    // Dispersion relationship for deep ocean waves
    // wave_speed = sqrt(gravity / wave_number)
    // angular_frequency = wave_speed * wave_number
    let angular_frequency = sqrt(gravity * wave_number);

    let wave_vector = wave_direction * wave_number;

    let theta = dot(global_uv, wave_vector) - angular_frequency * time;
    let sin_theta = sin(theta);
    let cos_theta = cos(theta);

    var result: OceanSurfaceTangents;

    // partial derivatives computed exactly via the above formula
    // Note these vectors are parallel, since wave only displaces in travel direction
    result.tangent = vec3<f32>(
        - wave_amplitude * wave_direction.x * cos_theta * wave_vector.x,
        - wave_amplitude * sin_theta * wave_vector.x,
        - wave_amplitude * wave_direction.y * cos_theta * wave_vector.x,
    );
    result.bitangent = vec3<f32>(
        - wave_amplitude * wave_direction.x * cos_theta * wave_vector.y,
        - wave_amplitude * sin_theta * wave_vector.y,
        - wave_amplitude * wave_direction.y * cos_theta * wave_vector.y,
    );
	result.foam_strength = 0.0;

	if(!gerstner)
	{
		result.tangent.x = 0.0;
		result.tangent.z = 0.0;

		result.bitangent.x = 0.0;
		result.bitangent.z = 0.0;
	}

    return result;
}

fn getOceanSurfaceTangents(
	global_uv: vec2<f32>,
	cascade_normal_weights: array<f32,CASCADE_CAPACITY>,
) -> OceanSurfaceTangents
{
	var result: OceanSurfaceTangents;
	/*
	 * The derivative of the sum of all waves is the sum of the derivatives.
	 * Thus, the unperturbed tangent T=(1,0,0) (which comes from d/dx(x,y,z))
	 * is summed with the tangent differentials dT=d/dx(Dx,Dy,Dz) for each
	 * contribution, where (Dx,Dy,Dz) is the displacement due to the wave as a
	 * function of (x,y,z).
	 * Same for bitangent, just replace d/dx with d/dz
	 */
    result.tangent = vec3<f32>(1.0, 0.0, 0.0);
    result.bitangent = vec3<f32>(0.0, 0.0, 1.0);
	result.foam_strength = 0.0;

	let gerstner = u_settings.b_gerstner == 1u;
	if(u_settings.b_displacement_map == 1u)
	{
		let sample: OceanSurfaceTangents = sampleOceanSurfaceTangentDifferentialFromMap(
			global_uv,
			cascade_normal_weights,
			gerstner
		);

		result.tangent += sample.tangent;
		result.bitangent += sample.bitangent;
		result.foam_strength += sample.foam_strength;
	}
	else
	{
		var sample: OceanSurfaceTangents;

		for (var i = 0u; i < WAVE_COUNT; i++)
		{
			sample = sampleOceanSurfaceTangentDifferentialFromWave(
				global_uv,
				u_waves[i],
				u_global.time.time_seconds,
				u_settings.patch_world_half_extent,
				gerstner
			);

			result.tangent += sample.tangent;
			result.bitangent += sample.bitangent;
			result.foam_strength += sample.foam_strength / f32(WAVE_COUNT);
		}
	}

	result.tangent = normalize(result.tangent);
	result.bitangent = normalize(result.bitangent);

	return result;
}

@fragment
fn rasterizationFragment(frag_interpolated: VertexOut) -> FragmentOut
{
    var output : FragmentOut;

    output.color_with_surface_world_depth_in_alpha = vec4<f32>(
		frag_interpolated.color,
		frag_interpolated.camera_distance
	);

	var cascade_normal_weights = array<f32, CASCADE_CAPACITY>();
	cascade_normal_weights[0] = frag_interpolated.cascade_1234_normal_weights.x;
	cascade_normal_weights[1] = frag_interpolated.cascade_1234_normal_weights.y;
	cascade_normal_weights[2] = frag_interpolated.cascade_1234_normal_weights.z;
	cascade_normal_weights[3] = frag_interpolated.cascade_1234_normal_weights.w;

	let surface = getOceanSurfaceTangents(
		frag_interpolated.global_uv,
		cascade_normal_weights,
	);
	// reverse left-handed WGSL coordinates
	let normal = normalize(-cross(surface.tangent, surface.bitangent));

	// This probably falls apart in the general case, but the distance surface
	// should be near flat anyway, with the surface normal close to planet
	// normal
	let surface_normal = normalize(frag_interpolated.surface_normal);
	let tangent = normalize(-cross(vec3<f32>(0.0,0.0,1.0), surface_normal));
	let bitangent = normalize(-cross(surface_normal, tangent));
	let perturbed_normal = normal.x * tangent + normal.y * surface_normal + normal.z * bitangent;

	//output.world_normal_with_surface_foam_strength_in_alpha = vec4<f32>(normal, surface.foam_strength);
	output.world_normal_with_surface_foam_strength_in_alpha = vec4<f32>(
		normalize(perturbed_normal),
		surface.foam_strength
	);

    return output;
}
