const PI = 3.141592653589793;

/*
* Decimation-in-time Cooley-Tukey Inverse Discrete Fast Fourier Transform
* Performed on a Square 2D Grid
*/

struct DFFTParameters
{
	log_2_size: u32,
	size: u32,
}

struct TwoPointDFT
{
	twiddle: vec2<f32>,

	// The un-twiddled index
	lower_index: u32,

	// The twiddled index
	upper_index: u32,
}

/*
* two_point_dfts_log2n_by_n:
*
* 	2d array of dimension log2(N) by N, where N is the size of the input grid
* 	Each row represents a step in the 1D DFFT
* 	step 0 is the first step performed, and represents the initial N/2 2-point DFTs
* 	step log2(N) - 1 is the last step performed, and represents the final N-point DFT
*
* 	Each element is the source indices for a 2-point DFT plus twiddle factor
*/

@group(0) @binding(0) var<uniform> u_parameters: DFFTParameters;
@group(0) @binding(1) var<storage, read_write> out_two_point_dfts_log2n_by_n: array<TwoPointDFT>;

fn twoPointDFTIndex(step: u32, major_index: u32) -> u32
{
	return step * u_parameters.size + major_index;
}

// Only imaginary argument since that's what is needed
fn complexExp(imaginary_arg: f32) -> vec2<f32>
{
	return vec2<f32>(cos(imaginary_arg),sin(imaginary_arg));
}

// Dispatch should have (N / 2, 1, 1) invocations, where N is the grid size.
@compute @workgroup_size(2, 1, 1)
fn precomputeDFFTInstructions(@builtin(global_invocation_id) global_id: vec3<u32>)
{
	var major_index = global_id.x;

	let grid_size = u_parameters.size;

	for(var step = 0u; step < u_parameters.log_2_size; step += 1u)
	{
		let dft_size = 1u << (step + 1u);
		let dft_count = u32(grid_size / dft_size);

		let dft = u32(major_index / u32(dft_size / 2u));
		let n = major_index % u32(dft_size / 2u);

		var lower_twiddle: TwoPointDFT;
		lower_twiddle.twiddle = complexExp(-2.0 * PI * f32(n) / f32(dft_size));
		lower_twiddle.lower_index = dft + n * 2u * dft_count;
		lower_twiddle.upper_index = lower_twiddle.lower_index + dft_count;

		var upper_twiddle = lower_twiddle;
		upper_twiddle.twiddle *= -1.0;

		let instruction_index = n * dft_count + dft;

		out_two_point_dfts_log2n_by_n[twoPointDFTIndex(step, instruction_index)] = lower_twiddle;
		out_two_point_dfts_log2n_by_n[twoPointDFTIndex(step, instruction_index + (grid_size / 2u))] = upper_twiddle;
	}
}

// Avoid redeclare
// @group(0) @binding(0) var<uniform> u_parameters: DFFTParameters;
@group(0) @binding(1) var<storage, read> two_point_dfts_log2n_by_n: array<TwoPointDFT>;
@group(0) @binding(2) var<storage, read_write> buffer_0: array<vec2<f32>>;
@group(0) @binding(3) var<storage, read_write> buffer_1: array<vec2<f32>>;
@group(0) @binding(4) var<uniform> step_counter: u32;

fn complexMult(a: vec2<f32>, b: vec2<f32>) -> vec2<f32>
{
	return vec2<f32>(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
}

fn bufferIndex(x: u32, y: u32) -> u32
{
	return x + y * u_parameters.size;
}

/*
* buffer_0 needs to have the initial data
* buffer_1's state does not matter, it will be overwritten
* The final output will be in buffer_0 (since vertical + horizontal guarantees an even amount of ping-pongs)
* Make sure step_counter is updated between steps, incrementing by one until 2 * log2(N)
*/
@compute @workgroup_size(2, 2, 1)
fn performDFFTStep(@builtin(global_invocation_id) global_id: vec3<u32>)
{
	// We need to bounce between buffers since each cell in each step relies on multiple cells from the previous step
	let ping_pong = (step_counter % 2u) == 1u;

	// step_counter ranges from [ 0, 2 * log2(N) ), with the second half representing the vertical pass
	// We do this to avoid needing to pass duplicate data with an extra vertical flag, or needing to split up the function into two kernels

	if (step_counter < u_parameters.log_2_size)
	{
		// Horizontal Pass
		let two_point_dft = two_point_dfts_log2n_by_n[twoPointDFTIndex(step_counter, global_id.x)];
		if(ping_pong)
		{
			let lower_input = buffer_1[bufferIndex(two_point_dft.lower_index, global_id.y)];
			let upper_input = buffer_1[bufferIndex(two_point_dft.upper_index, global_id.y)];

			let result = lower_input + complexMult(two_point_dft.twiddle, upper_input);

			buffer_0[bufferIndex(global_id.x, global_id.y)] = result;
		}
		else
		{
			let lower_input = buffer_0[bufferIndex(two_point_dft.lower_index, global_id.y)];
			let upper_input = buffer_0[bufferIndex(two_point_dft.upper_index, global_id.y)];

			let result = lower_input + complexMult(two_point_dft.twiddle, upper_input);

			buffer_1[bufferIndex(global_id.x, global_id.y)] = result;
		}
	}
	else
	{
		// Vertical Pass
		let two_point_dft = two_point_dfts_log2n_by_n[twoPointDFTIndex(step_counter % u_parameters.log_2_size, global_id.y)];
		if(ping_pong)
		{
			let lower_input = buffer_1[bufferIndex(global_id.x, two_point_dft.lower_index)];
			let upper_input = buffer_1[bufferIndex(global_id.x, two_point_dft.upper_index)];

			let result = lower_input + complexMult(two_point_dft.twiddle, upper_input);

			buffer_0[bufferIndex(global_id.x, global_id.y)] = result;
		}
		else
		{
			let lower_input = buffer_0[bufferIndex(global_id.x, two_point_dft.lower_index)];
			let upper_input = buffer_0[bufferIndex(global_id.x, two_point_dft.upper_index)];

			let result = lower_input + complexMult(two_point_dft.twiddle, upper_input);

			buffer_1[bufferIndex(global_id.x, global_id.y)] = result;
		}
	}
}


@group(0) @binding(0) var<storage, read_write> out_step_counter: u32;

@compute @workgroup_size(1, 1, 1)
fn incrementStepCounter(@builtin(global_invocation_id) global_id: vec3<u32>)
{
	if(global_id.x == 0 && global_id.y == 0)
	{
		out_step_counter = out_step_counter + 1;
	}
}
