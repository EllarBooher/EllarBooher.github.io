// Textures must have the same dimension
//// INCLUDE types.inc.wgsl

const FOURIER_GRID_DIMENSION = 512u;
const WAVE_PATCH_EXTENT_METERS = 100.0;

const PI = 3.141592653589793;
const FUNDAMENTAL_WAVE_NUMBER = 2.0 * PI / WAVE_PATCH_EXTENT_METERS;

const GRAVITY = 9.8;

const WIND_SPEED_METERS_PER_SECOND = 10.0;
// 10 km fetch
const WIND_FETCH_METERS = 10.0 * 1000.0;
const SWELL = 0.3;

// Implementation derived from:
// Nicolas Lutz, Arnaud Schoentgen, and Guillaume Gilet. 2024. Fast orientable aperiodic ocean synthesis using tiling and blending. Proc. ACM Comput. Graph. Interact. Tech. 7, 3, Article 49 (August 2024), 22 pages. https://doi.org/10.1145/3675388

// Deterministic wave parameters derived from texture coordinate
struct WaveParameters
{
	// Ranges from -WAVE_PATCH_EXTENT_METERS / 2 to WAVE_PATCH_EXTENT_METERS / 2
	wave_coord: vec2<i32>,

	wave_vector: vec2<f32>,
	wave_number: f32,
	delta_wave_number: f32,
	frequency: f32,
	d_frequency_d_wave_number: f32,
	wind_angle: f32,
}

fn waveParameters(texel_coord: vec2<u32>) -> WaveParameters
{
	var result: WaveParameters;

	const wave_coord_offset = i32(FOURIER_GRID_DIMENSION / 2u);
	const g = GRAVITY;

	result.wave_coord = vec2<i32>(i32(texel_coord.x), i32(texel_coord.y)) - vec2<i32>(wave_coord_offset);
	result.wave_vector = FUNDAMENTAL_WAVE_NUMBER * vec2<f32>(result.wave_coord);

	result.delta_wave_number = FUNDAMENTAL_WAVE_NUMBER;

	result.wave_number = length(result.wave_vector);

	// Gravity dispersion relationship for deep water
	let k = result.wave_number;
	result.frequency = sqrt(g * k);
	// d/dk (sqrt(gk)) = g / (2 * sqrt(g * k))
	result.d_frequency_d_wave_number = 0.5 * g * inverseSqrt(g * k);
	result.wind_angle = atan2(result.wave_vector.y, result.wave_vector.x);

	return result;
}

fn waveSpectrumJONSWAP(frequency: f32, peak_frequency: f32) -> f32
{
	const wind_speed = WIND_SPEED_METERS_PER_SECOND;
	const wind_fetch = WIND_FETCH_METERS;
	const g = GRAVITY;

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

fn waveDirectionalSpreading(frequency: f32, peak_frequency: f32, angle: f32) -> f32
{
	let f_ratio = peak_frequency / frequency;
	let swell = SWELL;

	let s = 16.0 * tanh(f_ratio) * swell * swell;

	let gamma_0 = gammaApprox(s + 1.0);
	let gamma_1 = gammaApprox(2.0 * s + 1.0);

	let q = (pow(2.0, 2.0 * s - 1.0) / PI) * (gamma_0 * gamma_0 / gamma_1);

	return q * pow(abs(cos(angle / 2.0)), 2.0 * s);
}

@group(0) @binding(0) var out_fourier_amplitude: texture_storage_2d<rg32float, write>;
@group(0) @binding(1) var in_gaussian_random_pairs: texture_storage_2d<rg32float, read>;

@compute @workgroup_size(16, 16, 1)
fn computeFourierAmplitude(@builtin(global_invocation_id) global_id: vec3<u32>,)
{
    let texel_coord = vec2<u32>(global_id.xy);
    let size = textureDimensions(out_fourier_amplitude);
    if texel_coord.x >= size.x || texel_coord.y >= size.y {
        return;
    }

	let gaussian_pair = textureLoad(in_gaussian_random_pairs, texel_coord).xy;
	let wave_parameters = waveParameters(texel_coord);

	if (abs(wave_parameters.wave_number) < FUNDAMENTAL_WAVE_NUMBER)
	{
		let amplitude = vec2<f32>(0.0, 0.0);
		textureStore(out_fourier_amplitude, texel_coord, vec4<f32>(amplitude, 0.0, 0.0));
		return;
	}

	let peak_frequency = 22.0 * pow(GRAVITY * GRAVITY / (WIND_SPEED_METERS_PER_SECOND * WIND_FETCH_METERS), 1.0 / 3.0);

	let spectrum = waveSpectrumJONSWAP(wave_parameters.frequency, peak_frequency)
		* waveDirectionalSpreading(wave_parameters.frequency, peak_frequency, wave_parameters.wind_angle);

	let magnitude = sqrt(
		2.0
		* spectrum
		* (wave_parameters.d_frequency_d_wave_number / wave_parameters.wave_number)
		* wave_parameters.delta_wave_number * wave_parameters.delta_wave_number
	);

	let amplitude = inverseSqrt(2.0)
		* gaussian_pair
		* magnitude;

	textureStore(out_fourier_amplitude, texel_coord, vec4<f32>(amplitude, 0.0, 0.0));
}

@group(0) @binding(0) var out_realized_fourier_amplitude: texture_storage_2d<rg32float, write>;
@group(0) @binding(1) var in_fourier_amplitude: texture_storage_2d<rg32float, read>;

@group(1) @binding(0) var<uniform> u_global: GlobalUBO;

fn complexMult(a: vec2<f32>, b: vec2<f32>) -> vec2<f32>
{
	return vec2<f32>(a.x*b.x - a.y*b.y, a.x*b.y + a.y*b.x);
}

@compute @workgroup_size(16, 16, 1)
fn realizeFourierAmplitude(@builtin(global_invocation_id) global_id: vec3<u32>,)
{
	let texel_coord = vec2<u32>(global_id.xy);
    let size = textureDimensions(out_realized_fourier_amplitude);
    if texel_coord.x >= size.x || texel_coord.y >= size.y {
        return;
    }

	let wave_parameters = waveParameters(texel_coord);
	let k_amplitude = textureLoad(in_fourier_amplitude, texel_coord).xy;

	let k_minus_coord = vec2<u32>(
		(FOURIER_GRID_DIMENSION - texel_coord.x) % FOURIER_GRID_DIMENSION,
		(FOURIER_GRID_DIMENSION - texel_coord.y) % FOURIER_GRID_DIMENSION
	);
	let k_minus_amplitude = textureLoad(in_fourier_amplitude, k_minus_coord).xy;
	let k_minus_amplitude_conjugate = vec2<f32>(k_minus_amplitude.x, -k_minus_amplitude.y);

	let phase = wave_parameters.frequency * u_global.time.time_seconds;
	let exponential = vec2<f32>(cos(phase), sin(phase));
	let exponential_conjugate = vec2<f32>(exponential.x, -exponential.y);

	let time_amplitude = complexMult(exponential, k_amplitude) + complexMult(exponential_conjugate, k_minus_amplitude_conjugate);

	textureStore(out_realized_fourier_amplitude, texel_coord, vec4<f32>(time_amplitude, 0.0, 0.0));
}
