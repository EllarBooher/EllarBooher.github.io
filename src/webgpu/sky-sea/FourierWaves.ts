import FourierWavesShaderPak from "../../shaders/sky-sea/fourier_waves.wgsl";
import DFFTShaderPak from "../../shaders/sky-sea/fft.wgsl";

import { UBO } from "./UBO";

// The dimension of the fourier grid, i.e., the sqrt of the number of unique waves for our discrete fourier transform
const GRID_SIZE = 8;
const GAUSSIAN_NOISE_FORMAT: GPUTextureFormat = "rg32float";

const FOURIER_AMPLITUDE_FORMAT: GPUTextureFormat = "rg32float";
const REALIZED_FOURIER_AMPLITUDE_FORMAT: GPUTextureFormat = "rg32float";

/* Box-Muller transform two uniform random numbers to gaussian pair
 * The two values returned are dependent, and should not be used directly as two independent values
 */
function randGaussian2DBoxMuller() {
	// https://en.wikipedia.org/wiki/Box%E2%80%93Muller_transform

	const u_0 = Math.random();
	const u_1 = Math.random();

	const amplitude = Math.sqrt(-2.0 * Math.log(u_0));
	const theta = 2.0 * Math.PI * u_1;

	const z_0 = amplitude * Math.cos(theta);
	const z_1 = amplitude * Math.sin(theta);

	return [z_0, z_1];
}

class DFFTPrecomputeParametersUBO extends UBO {
	public readonly data: {
		log_2_size: number;
		size: number;
	} = {
		log_2_size: 1,
		size: 2,
	};

	constructor(device: GPUDevice) {
		const FLOAT_COUNT = 2;
		super(device, FLOAT_COUNT, "DFFT Parameters UBO");
	}

	protected override packed(): ArrayBuffer {
		const buffer = new ArrayBuffer(this.buffer.size);
		const view = new DataView(buffer);

		view.setUint32(0, this.data.log_2_size, true);
		view.setUint32(4, this.data.size, true);

		return buffer;
	}
}

class DFFTResources {
	precomputeInstructionsParameters: DFFTPrecomputeParametersUBO;
	precomputeInstructionsSteps: GPUBuffer;

	/*
	 * @group(0) @binding(0) var<uniform> parameters: DFFTParameters;
	 * @group(0) @binding(1) var<storage, write> two_point_dfts_log2n_by_n: array<TwoPointDFT>;
	 */

	precomputeInstructionsBindGroup: GPUBindGroup;
	precomputeInstructionsKernel: GPUComputePipeline;

	/*
	 * @group(0) @binding(0) var<uniform> u_parameters: DFFTParameters;
	 * @group(0) @binding(1) var<storage, read> two_point_dfts_log2n_by_n: array<TwoPointDFT>;
	 * @group(0) @binding(2) var<storage, read_write> buffer_0: array<vec2<f32>>;
	 * @group(0) @binding(3) var<storage, read_write> buffer_1: array<vec2<f32>>;
	 */
	buffer0: GPUBuffer;
	buffer1: GPUBuffer;
	performBindGroup: GPUBindGroup;
	performKernel: GPUComputePipeline;

	debugBufferMapped: GPUBuffer;

	stepCounterBuffer: GPUBuffer;
	incrementStepCounterBindGroup: GPUBindGroup;
	incrementStepCounterKernel: GPUComputePipeline;

	constructor(device: GPUDevice) {
		const LOG_2_GRID_SIZE = Math.log2(GRID_SIZE);

		this.precomputeInstructionsParameters = new DFFTPrecomputeParametersUBO(
			device
		);
		this.precomputeInstructionsParameters.data.log_2_size = LOG_2_GRID_SIZE;
		this.precomputeInstructionsParameters.data.size = GRID_SIZE;

		this.precomputeInstructionsParameters.writeToGPU(device);

		const TWO_POINT_DFT_SIZE_BYTES = 16;
		this.precomputeInstructionsSteps = device.createBuffer({
			label: "DFFT Precompute Stage Steps",
			size: LOG_2_GRID_SIZE * GRID_SIZE * TWO_POINT_DFT_SIZE_BYTES,
			usage: GPUBufferUsage.COPY_SRC | GPUBufferUsage.STORAGE,
		});

		const shaderModule = device.createShaderModule({
			label: "DFFT Precompute Stage",
			code: DFFTShaderPak,
		});

		const precomputeBindGroup0Layout = device.createBindGroupLayout({
			label: "DFFT Precompute Stage Group 0",
			entries: [
				{
					binding: 0,
					visibility: GPUShaderStage.COMPUTE,
					buffer: { type: "uniform" },
				},
				{
					binding: 1,
					visibility: GPUShaderStage.COMPUTE,
					buffer: { type: "storage" },
				},
			],
		});

		this.precomputeInstructionsBindGroup = device.createBindGroup({
			label: "DFFT Precompute Stage Group 0",
			layout: precomputeBindGroup0Layout,
			entries: [
				{
					binding: 0,
					resource: {
						buffer: this.precomputeInstructionsParameters.buffer,
					},
				},
				{
					binding: 1,
					resource: { buffer: this.precomputeInstructionsSteps },
				},
			],
		});

		const precomputePipelineLayout = device.createPipelineLayout({
			label: "DFFT Precompute Steps Kernel",
			bindGroupLayouts: [precomputeBindGroup0Layout],
		});

		this.precomputeInstructionsKernel = device.createComputePipeline({
			label: "DFFT Precompute Stage",
			compute: {
				module: shaderModule,
				entryPoint: "precomputeDFFTInstructions",
			},
			layout: precomputePipelineLayout,
		});

		const performBindGroup0Layout = device.createBindGroupLayout({
			label: "DFFT Perform Group 0",
			entries: [
				{
					binding: 0,
					visibility: GPUShaderStage.COMPUTE,
					buffer: { type: "uniform" },
				},
				{
					binding: 1,
					visibility: GPUShaderStage.COMPUTE,
					buffer: { type: "read-only-storage" },
				},
				{
					binding: 2,
					visibility: GPUShaderStage.COMPUTE,
					buffer: { type: "storage" },
				},
				{
					binding: 3,
					visibility: GPUShaderStage.COMPUTE,
					buffer: { type: "storage" },
				},
				{
					binding: 4,
					visibility: GPUShaderStage.COMPUTE,
					buffer: { type: "uniform" },
				},
			],
		});

		// We store complex numbers as vec2<f32>
		const BYTES_PER_BUFFER_ELEMENT = 8;

		this.buffer0 = device.createBuffer({
			label: "DFFT Buffer 0",
			size: GRID_SIZE * GRID_SIZE * BYTES_PER_BUFFER_ELEMENT,
			usage:
				GPUBufferUsage.STORAGE |
				GPUBufferUsage.COPY_SRC |
				GPUBufferUsage.COPY_DST,
		});

		/*
		const FFT_SOURCE_DATA = new Float32Array(this.buffer0.size / 4);
		for (let i = 0; i < FFT_SOURCE_DATA.length; i += 2) {
			FFT_SOURCE_DATA[i] = randGaussian2DBoxMuller()[0];
			FFT_SOURCE_DATA[i + 1] = randGaussian2DBoxMuller()[0];
		}
		*/
		const FFT_SOURCE_DATA = new Float32Array([
			0.8300127902776954, 0.6318618313020082, 0.17674588886476572,
			0.9585100119647068, 0.2746410144646575, 0.8956966222578245,
			0.09479796705183685, 0.8266641586256556, 0.4283513568026234,
			0.7502754994599827, 0.20679068949898627, 0.6067219896746471,
			0.5786378100266184, 0.839804153613712, 0.18014525877280863,
			0.7846130637936518, 0.1759842589421139, 0.389514418327228,
			0.33617963818656627, 0.5839322028154545, 0.752213354056994,
			0.6279687445751599, 0.4514160814046133, 0.2592579092052715,
			0.8778843955334732, 0.28336821309600924, 0.4787297965330646,
			0.0727364505193403, 0.7639876878497286, 0.5183216183965998,
			0.37200598951648534, 0.3187830289191339, 0.796084262482368,
			0.19565315206423672, 0.25157658015729156, 0.8809478221159481,
			0.5983670177873817, 0.5711599864185878, 0.41809162017206913,
			0.835585794875752, 0.7056105877781721, 0.5220147852089254,
			0.18103937401028314, 0.8031427392615641, 0.676384761864447,
			0.949580729732104, 0.52124017839235, 0.002452313782037363,
			0.9257588978794409, 0.6805597238588148, 0.7272867889835447,
			0.9500731712709466, 0.13192007943447293, 0.08254203847159991,
			0.13544710406244787, 0.012384610469754032, 0.5347807343196065,
			0.2530584303714193, 0.6640919013768003, 0.5812126474661842,
			0.6416245025592698, 0.042262076072049015, 0.3723882556348753,
			0.21166642558927884, 0.5202466497099341, 0.4899746552437385,
			0.571248642974018, 0.4521982858651934, 0.45955026386329845,
			0.9035523012184122, 0.7648960508489103, 0.41047011864595095,
			0.8474449913966372, 0.7068740818151812, 0.28565280001823457,
			0.3368080396866372, 0.158293518201436, 0.6957471511718291,
			0.2045693884349309, 0.1493291139485099, 0.32673623158524534,
			0.09363948316265813, 0.4994103078111548, 0.8604438411991537,
			0.9170636391458757, 0.1334069320844372, 0.10398734871944249,
			0.5737434212188037, 0.6679829946306052, 0.7931941081858529,
			0.3339735794190928, 0.996017840235682, 0.11150142083175019,
			0.7350052159992939, 0.007831347958471846, 0.6385458880424444,
			0.7087579788540916, 0.7921306208497617, 0.6864138361015047,
			0.19000205395919, 0.7629344852338653, 0.01444776683395288,
			0.7469487369982373, 0.6876547017073337, 0.20882967808663844,
			0.12355813523152026, 0.01462616221365165, 0.9198500494244543,
			0.7079274785107775, 0.6624132177930282, 0.7646013852091801,
			0.17488046585164962, 0.24211316996387022, 0.8321127750049853,
			0.7845482583467699, 0.36934982505638303, 0.3094102434525682,
			0.7559722445108575, 0.23716193697808519, 0.9282414493453801,
			0.25847827430660586, 0.3297198334470405, 0.037093200192659936,
			0.9967900964847092, 0.8846679090111293, 0.5618127460631723,
			0.368984275900766, 0.6199859394911323,
		]);
		console.log(FFT_SOURCE_DATA);

		device.queue.writeBuffer(this.buffer0, 0, FFT_SOURCE_DATA);

		this.buffer1 = device.createBuffer({
			label: "DFFT Buffer 1",
			size: this.buffer0.size,
			usage: this.buffer0.usage,
		});

		this.stepCounterBuffer = device.createBuffer({
			label: "DFFT Step Counter",
			size: 4,
			usage:
				GPUBufferUsage.COPY_DST |
				GPUBufferUsage.STORAGE |
				GPUBufferUsage.UNIFORM,
		});
		const stepCounterInitial = new Uint32Array(1);
		stepCounterInitial[0] = 0;
		device.queue.writeBuffer(this.stepCounterBuffer, 0, stepCounterInitial);

		this.performBindGroup = device.createBindGroup({
			label: "DFFT Perform Group 0",
			layout: performBindGroup0Layout,
			entries: [
				{
					binding: 0,
					resource: {
						buffer: this.precomputeInstructionsParameters.buffer,
					},
				},
				{
					binding: 1,
					resource: { buffer: this.precomputeInstructionsSteps },
				},
				{
					binding: 2,
					resource: { buffer: this.buffer0 },
				},
				{
					binding: 3,
					resource: { buffer: this.buffer1 },
				},
				{
					binding: 4,
					resource: { buffer: this.stepCounterBuffer },
				},
			],
		});

		const performPipelineLayout = device.createPipelineLayout({
			label: "DFFT Perform Kernel",
			bindGroupLayouts: [performBindGroup0Layout],
		});

		this.performKernel = device.createComputePipeline({
			label: "DFFT Perform",
			compute: {
				module: shaderModule,
				entryPoint: "performDFFTStep",
			},
			layout: performPipelineLayout,
		});

		const incrementStepCounterBindGroupLayout =
			device.createBindGroupLayout({
				label: "DFFT Step Counter Bind Group 0",
				entries: [
					{
						binding: 0,
						visibility: GPUShaderStage.COMPUTE,
						buffer: { type: "storage" },
					},
				],
			});

		this.incrementStepCounterBindGroup = device.createBindGroup({
			label: "DFFT Step Counter Bind Group 0",
			layout: incrementStepCounterBindGroupLayout,
			entries: [
				{
					binding: 0,
					resource: { buffer: this.stepCounterBuffer },
				},
			],
		});

		this.incrementStepCounterKernel = device.createComputePipeline({
			label: "DFFT Increment Step Counter Kernel",
			layout: device.createPipelineLayout({
				label: "DFFT Increment Step Counter Kernel",
				bindGroupLayouts: [incrementStepCounterBindGroupLayout],
			}),
			compute: {
				module: shaderModule,
				entryPoint: "incrementStepCounter",
			},
		});

		const commandEncoder = device.createCommandEncoder({
			label: "DFFT Precompute",
		});
		let passEncoder = commandEncoder.beginComputePass({
			label: "DFFT Precompute Steps",
		});
		passEncoder.setPipeline(this.precomputeInstructionsKernel);
		passEncoder.setBindGroup(0, this.precomputeInstructionsBindGroup);
		passEncoder.dispatchWorkgroups(GRID_SIZE / 2, 1, 1);
		passEncoder.end();

		passEncoder = commandEncoder.beginComputePass({
			label: "DFFT Perform",
		});
		passEncoder.setPipeline(this.performKernel);
		passEncoder.setBindGroup(0, this.performBindGroup);
		passEncoder.dispatchWorkgroups(GRID_SIZE / 2, GRID_SIZE / 2, 1);

		for (let step = 1; step < 2 * LOG_2_GRID_SIZE; step++) {
			console.log(step);
			passEncoder.setPipeline(this.incrementStepCounterKernel);
			passEncoder.setBindGroup(0, this.incrementStepCounterBindGroup);
			passEncoder.dispatchWorkgroups(1, 1, 1);
			passEncoder.setPipeline(this.performKernel);
			passEncoder.setBindGroup(0, this.performBindGroup);
			passEncoder.dispatchWorkgroups(GRID_SIZE / 2, GRID_SIZE / 2, 1);
		}
		passEncoder.end();

		this.debugBufferMapped = device.createBuffer({
			label: "DFFT Debug Buffer",
			size: this.buffer1.size,
			usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ,
		});

		commandEncoder.copyBufferToBuffer(
			this.buffer0,
			0,
			this.debugBufferMapped,
			0,
			this.buffer0.size
		);
		device.queue.submit([commandEncoder.finish()]);

		this.debugBufferMapped.mapAsync(GPUMapMode.READ).then(() => {
			const mappedRange = this.debugBufferMapped.getMappedRange();
			const view = new DataView(mappedRange);
			// console.log(view);

			for (let y = 0; y < GRID_SIZE; y++) {
				console.log("\n");
				for (let x = 0; x < GRID_SIZE; x++) {
					let i = 4 * 2 * (x + y * GRID_SIZE);
					console.log(view.getFloat32(i, true));
					console.log(view.getFloat32(i + 4, true));
				}
			}

			/*
			for (var i = 0; i < view.byteLength; i += 16) {
				console.log(
					`(${view.getFloat32(i, true).toFixed(4)},${view
						.getFloat32(i + 4, true)
						.toFixed(4)}) ${view.getUint32(
						i + 8,
						true
					)} ${view.getUint32(i + 12, true)}`
				);
			}
				*/
			this.debugBufferMapped.unmap();
		});
	}
}

export class FFTWaveSpectrumResources {
	// We produce a discrete spectrum of waves, for which the various values will be stored in square textures
	// This dimension determines the diameter of that square, so the total number of frequencies we produce
	// Our spectrum is discrete so we can apply an IDFT algorithm to determine the displacement when rendering the sums of these waves
	// (x,z) position in this grid uniquely identifies a wave with wave vector k = (k_x,k_z)
	spectrumDimension: number;

	// A two-channel texture of pairs of gaussian random variables, used to generate the amplitudes of our waves
	gaussianNoise: GPUTexture;
	gaussianNoiseView: GPUTextureView;

	// A fourier grid of wave amplitude that are a function of the wave vector
	fourierAmplitude: GPUTexture;
	fourierAmplitudeView: GPUTextureView;

	/*
	@group(0) @binding(0) var out_fourier_amplitude: texture_storage_2d<rg32float, write>;
	@group(0) @binding(1) var in_gaussian_random_pairs: texture_storage_2d<rg32float, read>;
	*/
	fourierAmplitudeGroup0: GPUBindGroup;
	fourierAmplitudePipeline: GPUComputePipeline;

	// A fourier grid of realized wave amplitudes that are a function of wave vector (stored in fourierAmplitude) and time
	realizedFourierAmplitude: GPUTexture;
	realizedFourierAmplitudeView: GPUTextureView;

	dfftResources: DFFTResources;

	constructor(device: GPUDevice) {
		this.spectrumDimension = GRID_SIZE;
		this.gaussianNoise = device.createTexture({
			label: "FFT Wave Gaussian Noise",
			format: GAUSSIAN_NOISE_FORMAT,
			size: {
				width: this.spectrumDimension,
				height: this.spectrumDimension,
			},
			usage:
				GPUTextureUsage.COPY_DST |
				GPUTextureUsage.STORAGE_BINDING |
				GPUTextureUsage.TEXTURE_BINDING,
		});
		this.gaussianNoiseView = this.gaussianNoise.createView();

		const FLOAT32_PER_GAUSSIAN_NOISE_TEXEL = 2;
		const BYTES_PER_TEXEL = 8;
		const BYTES_PER_ROW = BYTES_PER_TEXEL * this.spectrumDimension;
		const randomNumbers = new Float32Array(
			this.spectrumDimension *
				this.spectrumDimension *
				FLOAT32_PER_GAUSSIAN_NOISE_TEXEL
		);

		for (let i = 0; i < randomNumbers.length; i++) {
			randomNumbers[i] = randGaussian2DBoxMuller()[0];
		}

		device.queue.writeTexture(
			{ texture: this.gaussianNoise },
			randomNumbers,
			{ bytesPerRow: BYTES_PER_ROW },
			{
				width: this.gaussianNoise.width,
				height: this.gaussianNoise.height,
			}
		);

		this.fourierAmplitude = device.createTexture({
			label: "FFT Wave Fourier Amplitude h_0(k)",
			format: FOURIER_AMPLITUDE_FORMAT,
			size: {
				width: this.spectrumDimension,
				height: this.spectrumDimension,
			},
			usage:
				GPUTextureUsage.STORAGE_BINDING |
				GPUTextureUsage.TEXTURE_BINDING,
		});
		this.fourierAmplitudeView = this.fourierAmplitude.createView();

		const fourierAmplitudeGroup0Layout = device.createBindGroupLayout({
			label: "FFT Wave Fourier Amplitude h_0(k) Group 0",
			entries: [
				{
					binding: 0,
					visibility: GPUShaderStage.COMPUTE,
					storageTexture: {
						format: FOURIER_AMPLITUDE_FORMAT,
						access: "write-only",
					},
				},
				{
					binding: 1,
					visibility: GPUShaderStage.COMPUTE,
					storageTexture: {
						format: GAUSSIAN_NOISE_FORMAT,
						access: "read-only",
					},
				},
			],
		});

		this.fourierAmplitudeGroup0 = device.createBindGroup({
			label: "FFT Wave Fourier Amplitude h_0(k) Group 0",
			layout: fourierAmplitudeGroup0Layout,
			entries: [
				{
					binding: 0,
					resource: this.fourierAmplitudeView,
				},
				{
					binding: 1,
					resource: this.gaussianNoiseView,
				},
			],
		});

		this.dfftResources = new DFFTResources(device);

		const shaderModule = device.createShaderModule({
			label: "FFT Wave",
			code: FourierWavesShaderPak,
		});

		this.fourierAmplitudePipeline = device.createComputePipeline({
			label: "FFT Wave Fourier Amplitude h_0(k)",
			layout: device.createPipelineLayout({
				label: "FFT Wave Fourier Amplitude h_0(k)",
				bindGroupLayouts: [fourierAmplitudeGroup0Layout],
			}),
			compute: {
				module: shaderModule,
				entryPoint: "computeFourierAmplitude",
			},
		});

		this.realizedFourierAmplitude = device.createTexture({
			label: "FFT Wave Realized Fourier Amplitude h(k,t)",
			format: REALIZED_FOURIER_AMPLITUDE_FORMAT,
			size: {
				width: this.spectrumDimension,
				height: this.spectrumDimension,
			},
			usage: GPUTextureUsage.STORAGE_BINDING,
		});
		this.realizedFourierAmplitudeView =
			this.realizedFourierAmplitude.createView();

		const commandEncoder = device.createCommandEncoder({
			label: "FFT Wave Precompute",
		});
		const passEncoder = commandEncoder.beginComputePass({
			label: "FFT Wave Fourier Amplitude",
		});
		passEncoder.setPipeline(this.fourierAmplitudePipeline);
		passEncoder.setBindGroup(0, this.fourierAmplitudeGroup0);
		passEncoder.dispatchWorkgroups(2048 / 16, 2048 / 16, 1);
		passEncoder.end();
		device.queue.submit([commandEncoder.finish()]);
	}
}
