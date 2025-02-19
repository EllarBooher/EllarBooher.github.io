// Textures must have the same dimension
//// INCLUDE types.inc.wgsl

const PI = 3.141592653589793;

struct FourierWavesUBO
{
	fourier_grid_size: u32,
	gravity: f32,
	wave_patch_extent_meters: f32,
	wave_period_seconds: f32,

	wind_speed_meters_per_second: f32,
	wind_fetch_meters: f32,
	wave_swell: f32,
	padding0: f32,
}

// Implementation derived from:
// Nicolas Lutz, Arnaud Schoentgen, and Guillaume Gilet. 2024. Fast orientable aperiodic ocean synthesis using tiling and blending. Proc. ACM Comput. Graph. Interact. Tech. 7, 3, Article 49 (August 2024), 22 pages. https://doi.org/10.1145/3675388

// Deterministic wave parameters derived from texture coordinate
struct WaveParameters
{
	// Ranges from -fourier_grid_size / 2 to fourier_grid_size / 2
	wave_coord: vec2<i32>,

	wave_vector: vec2<f32>,
	wave_number: f32,
	delta_wave_number: f32,
	frequency: f32,
	d_frequency_d_wave_number: f32,
	wind_angle: f32,
}

fn quantizeFrequency(frequency: f32, fundamental_frequency: f32) -> f32
{
	let multiple = frequency / fundamental_frequency;
	return (multiple - fract(multiple)) * fundamental_frequency;
}

fn waveParameters(settings: ptr<uniform, FourierWavesUBO>, texel_coord: vec2<u32>) -> WaveParameters
{
	var result: WaveParameters;

	let wave_coord_offset = i32((*settings).fourier_grid_size / 2u);
	let g = (*settings).gravity;

	result.wave_coord = vec2<i32>(i32(texel_coord.x), i32(texel_coord.y)) - vec2<i32>(wave_coord_offset);

	const QUANTIZED_FREQUENCIES = true;
	if (QUANTIZED_FREQUENCIES)
	{
		let frequency_quantization_step = 2.0 * PI / (*settings).wave_period_seconds;
		let fundamental_frequency = quantizeFrequency(
			sqrt(g * 2.0 * PI / (*settings).wave_patch_extent_meters),
			frequency_quantization_step
			);
		let fundamental_wave_number = fundamental_frequency * fundamental_frequency / g;
		result.delta_wave_number = fundamental_wave_number;

		let wave_number_non_quantized = length(fundamental_wave_number * vec2<f32>(result.wave_coord));

		result.frequency = quantizeFrequency(sqrt(g * wave_number_non_quantized), frequency_quantization_step);
		// d/dk (sqrt(gk)) = g / (2 * sqrt(g * k))
		result.d_frequency_d_wave_number = 0.5 * g / result.frequency;

		result.wave_number = result.frequency * result.frequency / g;

		result.wave_vector = result.wave_number * normalize(vec2<f32>(result.wave_coord));
	}
	else
	{
		let fundamental_wave_number = 2.0 * PI / (*settings).wave_patch_extent_meters;
		let fundamental_frequency = sqrt(g * fundamental_wave_number);
		result.delta_wave_number = fundamental_wave_number;

		result.wave_vector = fundamental_wave_number * vec2<f32>(result.wave_coord);
		result.wave_number = length(result.wave_vector);

		result.frequency = sqrt(g * result.wave_number);
		// d/dk (sqrt(gk)) = g / (2 * sqrt(g * k))
		result.d_frequency_d_wave_number = 0.5 * g * inverseSqrt(g * result.wave_number);
	}

	result.wind_angle = atan2(result.wave_vector.y, result.wave_vector.x);

	return result;
}

fn waveSpectrumJONSWAP(settings: ptr<uniform, FourierWavesUBO>, frequency: f32, peak_frequency: f32) -> f32
{
	let wind_speed = (*settings).wind_speed_meters_per_second;
	let wind_fetch = (*settings).wind_fetch_meters;
	let g = (*settings).gravity;

	let alpha = 0.076 * pow(wind_speed * wind_speed / (wind_fetch * g), 0.22);
	let gamma = 3.3;
	var sigma = 0.07;
	if (frequency > peak_frequency)
	{
		sigma = 0.09;
	}
	let r = exp(-(frequency-peak_frequency)*(frequency-peak_frequency)/(2 * sigma * sigma * peak_frequency * peak_frequency));

	let f_ratio = peak_frequency / frequency;

	let numerator =
		alpha
		* g * g
		* exp(-1.25 * f_ratio * f_ratio * f_ratio * f_ratio)
		* pow(gamma, r);

	let denominator = frequency * frequency * frequency * frequency * frequency;

	return numerator / denominator;
}

// This fit is valid for positive reals greater than or equal to 1.0, tested up to z = 141.0
// Note, gamma(z) = (z-1)! for integral z
fn gammaApprox(z: f32) -> f32
{
	// Values computed from Lanczos approximation, see webgpu/sky-sea/scripts/lanczos.py
	// Generated with n = 2 and r = 2.603209
	// r choice is not arbitrary, it is determined from the largest zero of an error function (see script for details)
	// For this strategy for choosing r, c_0 will just be 1 due to float precision
	const c_0 = 1.000000000267524225;
	const c_1 = 4.739837024840160673;
	const c_2 = -1.393160104839919367;
	const r = 2.603209;

	let s = c_0 + c_1 / (z+1.0) + c_2 / (z+2.0);
	return sqrt(2.0 * PI) * pow(z + r + 0.5, z + 0.5) * exp(-(z + r + 0.5)) * s;
}

fn waveDirectionalSpreading(settings: ptr<uniform, FourierWavesUBO>, frequency: f32, peak_frequency: f32, angle: f32) -> f32
{
	let f_ratio = peak_frequency / frequency;
	let swell = (*settings).wave_swell;

	let s = 16.0 * tanh(f_ratio) * swell * swell;

	let gamma_0 = gammaApprox(s + 1.0);
	let gamma_1 = gammaApprox(2.0 * s + 1.0);

	let q = (pow(2.0, 2.0 * s - 1.0) / PI) * (gamma_0 * gamma_0 / gamma_1);

	return q * pow(abs(cos(angle / 2.0)), 2.0 * s);
}

@group(0) @binding(0) var out_initial_amplitude: texture_storage_2d<rg32float, write>;
@group(0) @binding(1) var in_gaussian_random_pairs: texture_storage_2d<rg32float, read>;

@group(1) @binding(0) var<uniform> u_global: GlobalUBO;
@group(1) @binding(1) var<uniform> u_fourier_waves: FourierWavesUBO;

@compute @workgroup_size(16, 16, 1)
fn computeInitialAmplitude(@builtin(global_invocation_id) global_id: vec3<u32>,)
{
    let texel_coord = vec2<u32>(global_id.xy);
    let size = textureDimensions(out_initial_amplitude);
    if texel_coord.x >= size.x || texel_coord.y >= size.y {
        return;
    }

	let gaussian_pair = textureLoad(in_gaussian_random_pairs, texel_coord).xy;
	let wave = waveParameters(&u_fourier_waves, texel_coord);

	if (abs(wave.wave_number) < wave.delta_wave_number)
	{
		let amplitude = vec2<f32>(0.0, 0.0);
		textureStore(out_initial_amplitude, texel_coord, vec4<f32>(amplitude, 0.0, 0.0));
		return;
	}

	let g = u_fourier_waves.gravity;
	let wind_speed = u_fourier_waves.wind_speed_meters_per_second;
	let wind_fetch = u_fourier_waves.wind_fetch_meters;

	let peak_frequency = 22.0 * pow(g * g / (wind_speed * wind_fetch), 1.0 / 3.0);

	let spectrum = waveSpectrumJONSWAP(&u_fourier_waves, wave.frequency, peak_frequency)
		* waveDirectionalSpreading(&u_fourier_waves, wave.frequency, peak_frequency, wave.wind_angle);

	let magnitude = sqrt(
		2.0
		* spectrum
		* (wave.d_frequency_d_wave_number / wave.wave_number)
		* wave.delta_wave_number * wave.delta_wave_number
	);

	let amplitude = inverseSqrt(2.0)
		* gaussian_pair
		* magnitude;

	textureStore(out_initial_amplitude, texel_coord, vec4<f32>(amplitude, 0.0, 0.0));
}


/*
 * Capital D refers to displacement of the water surface
 * Lowercase d refers to partial derivative
 *
 * In order to halve the total FFT's we have to perform, we can do the following trick
 * If we have the following results from the FT:
 * 		complex f(n) -> purely real a
 * 		complex g(n) -> purely real b
 *
 * Then, by the linearity of the FT over linear combinations of the input function, we have that:
 *		 complex f(n) + i * g(n) -> a + i * b
 *
 * Thus, we can pack two sets of inputs for the FFT into the same two input channels, and avoid a wasted output channel.
 */
@group(0) @binding(0) var out_packed_Dy_plus_iDxdz_amplitude: texture_storage_2d<rg32float, write>;
@group(0) @binding(1) var out_packed_Dx_plus_iDz_amplitude: texture_storage_2d<rg32float, write>;
@group(0) @binding(2) var out_packed_Dydx_plus_iDydz_amplitude: texture_storage_2d<rg32float, write>;
@group(0) @binding(3) var out_packed_Dxdx_plus_iDzdz_amplitude: texture_storage_2d<rg32float, write>;
@group(0) @binding(4) var in_initial_amplitude: texture_storage_2d<rg32float, read>;

/* Commented to avoid re-declaration
@group(1) @binding(0) var<uniform> u_global: GlobalUBO;
@group(1) @binding(1) var<uniform> u_fourier_waves: FourierWavesUBO;
*/
fn complexMult(a: vec2<f32>, b: vec2<f32>) -> vec2<f32>
{
	return vec2<f32>(a.x*b.x - a.y*b.y, a.x*b.y + a.y*b.x);
}

@compute @workgroup_size(16, 16, 1)
fn computeRealizedAmplitude(@builtin(global_invocation_id) global_id: vec3<u32>,)
{
	let texel_coord = vec2<u32>(global_id.xy);
    let size = textureDimensions(out_packed_Dy_plus_iDxdz_amplitude);
    if texel_coord.x >= size.x || texel_coord.y >= size.y {
        return;
    }

	let wave = waveParameters(&u_fourier_waves, texel_coord);
	let k_amplitude = textureLoad(in_initial_amplitude, texel_coord).xy;

	let k_minus_coord = vec2<u32>(
		(u_fourier_waves.fourier_grid_size - texel_coord.x) % u_fourier_waves.fourier_grid_size,
		(u_fourier_waves.fourier_grid_size - texel_coord.y) % u_fourier_waves.fourier_grid_size
	);
	let k_minus_amplitude = textureLoad(in_initial_amplitude, k_minus_coord).xy;
	let k_minus_amplitude_conjugate = vec2<f32>(k_minus_amplitude.x, -k_minus_amplitude.y);

	let phase = wave.frequency * u_global.time.time_seconds;
	let exponential = vec2<f32>(cos(phase), sin(phase));
	let exponential_conjugate = vec2<f32>(exponential.x, -exponential.y);

	let Dy_amplitude = complexMult(exponential, k_amplitude) + complexMult(exponential_conjugate, k_minus_amplitude_conjugate);

	/*
	 * For gerstner waves, displacement in x/z directions is based on the gradient
	 * (x,z)-Displacement of:
	 *
	 * h(k,t) * exp(i * dot(k,x))
	 * 	= i * k(k,t)/k * h(k,t) * exp(i * dot(k,x))
	 *
	 * Where i is the imaginary number sqrt(-1)
	 *
	 * We're going to be doing a few derivatives. h(k,t) is independent of (x,z),
	 * so in general taking the derivative brings down a factor of i * k_x or i * k_z from the exponential
	 */

	let iDy_amplitude = vec2<f32>(-Dy_amplitude.y, Dy_amplitude.x);

	var one_over_wave_number = 1.0 / wave.wave_number;
	if (abs(wave.wave_number) < wave.delta_wave_number)
	{
		one_over_wave_number = 1.0;
		return;
	}

	// wave.wave_vector.y here actually refers to the wave-vector's z component, since it is two-channel

	let Dx_amplitude = iDy_amplitude * wave.wave_vector.x / wave.wave_number;
	let Dz_amplitude = iDy_amplitude * wave.wave_vector.y / wave.wave_number;

	let Dxdx_amplitude = -Dy_amplitude * wave.wave_vector.x * wave.wave_vector.x / wave.wave_number;
	let Dydx_amplitude = iDy_amplitude * wave.wave_vector.x;
	let Dzdx_amplitude = -Dy_amplitude * wave.wave_vector.x * wave.wave_vector.y / wave.wave_number;

	// Mixed derivative is redundant, since Dxdz = Dzdx
	// let Dxdz_amplitude = -Dy_amplitude * wave.wave_vector.y * wave.wave_vector.x / wave.wave_number;
	let Dydz_amplitude = iDy_amplitude * wave.wave_vector.y;
	let Dzdz_amplitude = -Dy_amplitude * wave.wave_vector.y * wave.wave_vector.y / wave.wave_number;

	let iDxdz_amplitude = vec2<f32>(-Dzdx_amplitude.y, Dzdx_amplitude.x);
	let iDz_amplitude = vec2<f32>(-Dz_amplitude.y, Dz_amplitude.x);
	let iDydz_amplitude = vec2<f32>(-Dydz_amplitude.y, Dydz_amplitude.x);
	let iDzdz_amplitude = vec2<f32>(-Dzdz_amplitude.y, Dzdz_amplitude.x);

	textureStore(out_packed_Dy_plus_iDxdz_amplitude, texel_coord, vec4<f32>(Dy_amplitude + iDxdz_amplitude, 0.0, 0.0));
	textureStore(out_packed_Dx_plus_iDz_amplitude, texel_coord, vec4<f32>(Dx_amplitude + iDz_amplitude, 0.0, 0.0));
	textureStore(out_packed_Dydx_plus_iDydz_amplitude, texel_coord, vec4<f32>(Dydx_amplitude + iDydz_amplitude, 0.0, 0.0));
	textureStore(out_packed_Dxdx_plus_iDzdz_amplitude, texel_coord, vec4<f32>(Dxdx_amplitude + iDzdz_amplitude, 0.0, 0.0));
}

@group(0) @binding(0) var out_displacement: texture_storage_2d<rgba16float, write>;
@group(0) @binding(1) var out_Dydx_Dydz_Dxdx_Dzdz_derivatives: texture_storage_2d<rgba16float, write>;
@group(0) @binding(2) var in_displacement_Dy_Dxdz: texture_storage_2d<rg32float, read>;
@group(0) @binding(3) var in_displacement_Dx_Dz: texture_storage_2d<rg32float, read>;
@group(0) @binding(4) var in_displacement_Dydx_Dydz: texture_storage_2d<rg32float, read>;
@group(0) @binding(5) var in_displacement_Dxdx_Dzdz: texture_storage_2d<rg32float, read>;

@compute @workgroup_size(16, 16, 1)
fn fillSpatialTextures(@builtin(global_invocation_id) global_id: vec3<u32>)
{
	let texel_coord = vec2<u32>(global_id.xy);
    let size = textureDimensions(out_displacement);
    if texel_coord.x >= size.x || texel_coord.y >= size.y {
        return;
    }

	let Dy_Dxdz = textureLoad(in_displacement_Dy_Dxdz, texel_coord).xy;
	let Dx_Dz = textureLoad(in_displacement_Dx_Dz, texel_coord).xy;

	let Dx = Dx_Dz.x;
	let Dy = Dy_Dxdz.x;
	let Dz = Dx_Dz.y;

	let Dxdz = Dy_Dxdz.y;

	let Dydx_Dydz = textureLoad(in_displacement_Dydx_Dydz, texel_coord).xy;
	let Dxdx_Dzdz = textureLoad(in_displacement_Dxdx_Dzdz, texel_coord).xy;

	textureStore(out_displacement, texel_coord, vec4<f32>(Dx, Dy, Dz, Dxdz));
	textureStore(out_Dydx_Dydz_Dxdx_Dzdz_derivatives, texel_coord, vec4<f32>(Dydx_Dydz, Dxdx_Dzdz));
}
