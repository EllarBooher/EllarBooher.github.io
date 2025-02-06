import FourierWavesShaderPak from "../../shaders/sky-sea/fourier_waves.wgsl";

import { GlobalUBO } from "./UBO.ts";
import { DFFTResources } from "./FFT.ts";
import { TimestampQueryInterval } from "./Common.ts";

// The dimension of the fourier grid, i.e., the sqrt of the number of unique waves for our discrete fourier transform
const GRID_SIZE = 512;
const LOG_2_GRID_SIZE = 9;
const GAUSSIAN_NOISE_FORMAT: GPUTextureFormat = "rg32float";

const FOURIER_AMPLITUDE_FORMAT: GPUTextureFormat = "rg32float";
const REALIZED_FOURIER_AMPLITUDE_FORMAT: GPUTextureFormat = "rg32float";
const DISPLACEMENT_FORMAT: GPUTextureFormat = "rgba32float";

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

export interface FFTWaveSpectrumResourcesViews {
	gaussianNoiseView: GPUTextureView;
	fourierAmplitudeView: GPUTextureView;
	amplitude_Dy_View: GPUTextureView;
	amplitude_Dx_plus_iDz_View: GPUTextureView;
	displacementView: GPUTextureView;
}

export class FFTWaveSpectrumResources {
	// We produce a discrete spectrum of waves, for which the various values will be stored in square textures
	// This dimension determines the diameter of that square, so the total number of frequencies we produce
	// Our spectrum is discrete so we can apply an IDFT algorithm to determine the displacement when rendering the sums of these waves
	// (x,z) position in this grid uniquely identifies a wave with wave vector k = (k_x,k_z)
	private spectrumDimension: number;

	// A two-channel texture of pairs of gaussian random variables, used to generate the amplitudes of our waves
	private gaussianNoise: GPUTexture;
	private gaussianNoiseView: GPUTextureView;

	// A fourier grid of wave amplitude that are a function of the wave vector
	private fourierAmplitude: GPUTexture;
	private fourierAmplitudeView: GPUTextureView;

	/*
	 * @group(0) @binding(0) var out_fourier_amplitude: texture_storage_2d<rg32float, write>;
	 * @group(0) @binding(1) var in_gaussian_random_pairs: texture_storage_2d<rg32float, read>;
	 */
	private fourierAmplitudeGroup0: GPUBindGroup;
	private fourierAmplitudePipeline: GPUComputePipeline;

	// A fourier grid of realized wave amplitudes that are a function of wave vector (stored in fourierAmplitude) and time
	private amplitude_Dy: GPUTexture;
	private amplitude_Dy_View: GPUTextureView;

	// Since we know the result is a real value, we can pack two fourier transforms into the space of one by multiplying one by i, the imaginary unit
	private amplitude_Dx_plus_iDz: GPUTexture;
	private amplitude_Dx_plus_iDz_View: GPUTextureView;

	/*
	 * @group(0) @binding(0) var out_dy_amplitude: texture_storage_2d<rg32float, write>;
	 * @group(0) @binding(1) var out_packed_dx_plus_idz_amplitude: texture_storage_2d<rg32float, write>;
	 * @group(0) @binding(2) var in_fourier_amplitude: texture_storage_2d<rg32float, read>;
	 *
	 * @group(1) @binding(0) var<uniform> u_global: GlobalUBO;
	 */
	private realizedFourierAmplitudeGroup0: GPUBindGroup;
	private realizedFourierAmplitudeGroup1: GPUBindGroup;
	private realizedFourierAmplitudePipeline: GPUComputePipeline;

	/*
	 * We need these intermediate textures for the FFT.
	 * There is potential to eventually combine 2 complex pairs into one FFT
	 */

	private displacement_Dy_0: GPUTexture;
	private displacement_Dy_0_view: GPUTextureView;

	private displacement_Dx_Dz: GPUTexture;
	private displacement_Dx_Dz_View: GPUTextureView;

	private displacement: GPUTexture;
	private displacementView: GPUTextureView;

	/*
	 * @group(0) @binding(0) var out_displacement: texture_storage_2d<rgba32float, write>;
	 * @group(0) @binding(1) var in_displacement_dy_0: texture_storage_2d<rg32float, read>;
	 * @group(0) @binding(2) var in_displacement_dx_dz: texture_storage_2d<rg32float, read>;
	 */
	private fillDisplacementGroup0: GPUBindGroup;
	private fillDisplacementKernel: GPUComputePipeline;

	private dfftResources: DFFTResources;

	constructor(device: GPUDevice, globalUBO: GlobalUBO) {
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
		this.gaussianNoiseView = this.gaussianNoise.createView({
			label: "FFT Wave Gaussian Noise",
		});

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
		this.fourierAmplitudeView = this.fourierAmplitude.createView({
			label: "FFT Wave Fourier Amplitude h_0(k)",
		});

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

		this.dfftResources = new DFFTResources(device, LOG_2_GRID_SIZE);

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

		this.amplitude_Dy = device.createTexture({
			label: "FFT Wave dy Amplitude",
			format: REALIZED_FOURIER_AMPLITUDE_FORMAT,
			size: {
				width: this.spectrumDimension,
				height: this.spectrumDimension,
			},
			usage:
				GPUTextureUsage.STORAGE_BINDING |
				GPUTextureUsage.TEXTURE_BINDING |
				GPUTextureUsage.COPY_SRC,
		});
		this.amplitude_Dy_View = this.amplitude_Dy.createView({
			label: "FFT Wave dy Amplitude",
		});
		this.amplitude_Dx_plus_iDz = device.createTexture({
			label: "FFT Wave Packed dx + i * dz Amplitude",
			format: REALIZED_FOURIER_AMPLITUDE_FORMAT,
			size: {
				width: this.spectrumDimension,
				height: this.spectrumDimension,
			},
			usage:
				GPUTextureUsage.STORAGE_BINDING |
				GPUTextureUsage.TEXTURE_BINDING |
				GPUTextureUsage.COPY_SRC,
		});
		this.amplitude_Dx_plus_iDz_View = this.amplitude_Dx_plus_iDz.createView(
			{
				label: "FFT Wave Packed dx + i * dz Amplitude",
			}
		);

		this.displacement_Dy_0 = device.createTexture({
			label: "FFT Wave Displacement (Dy,0)",
			format: REALIZED_FOURIER_AMPLITUDE_FORMAT,
			size: {
				width: this.spectrumDimension,
				height: this.spectrumDimension,
			},
			usage:
				GPUTextureUsage.STORAGE_BINDING |
				GPUTextureUsage.TEXTURE_BINDING |
				GPUTextureUsage.COPY_DST,
		});
		this.displacement_Dy_0_view = this.displacement_Dy_0.createView({
			label: this.displacement_Dy_0.label,
		});

		this.displacement_Dx_Dz = device.createTexture({
			label: "FFT Wave Displacement (Dx, Dz)",
			format: REALIZED_FOURIER_AMPLITUDE_FORMAT,
			size: {
				width: this.spectrumDimension,
				height: this.spectrumDimension,
			},
			usage:
				GPUTextureUsage.STORAGE_BINDING |
				GPUTextureUsage.TEXTURE_BINDING |
				GPUTextureUsage.COPY_DST,
		});
		this.displacement_Dx_Dz_View = this.displacement_Dx_Dz.createView({
			label: this.displacement_Dx_Dz.label,
		});

		this.displacement = device.createTexture({
			label: "FFT Wave Final Displacement",
			format: DISPLACEMENT_FORMAT,
			size: {
				width: this.spectrumDimension,
				height: this.spectrumDimension,
			},
			usage:
				GPUTextureUsage.STORAGE_BINDING |
				GPUTextureUsage.TEXTURE_BINDING |
				GPUTextureUsage.COPY_DST,
		});
		this.displacementView = this.displacement.createView({
			label: this.displacement.label,
		});

		const realizedFourierAmplitudeGroup0Layout =
			device.createBindGroupLayout({
				label: "FFT Wave Realized Fourier Amplitude h(k,t) Group 0",
				entries: [
					{
						binding: 0,
						visibility: GPUShaderStage.COMPUTE,
						storageTexture: {
							format: "rg32float",
							access: "write-only",
						},
					},
					{
						binding: 1,
						visibility: GPUShaderStage.COMPUTE,
						storageTexture: {
							format: "rg32float",
							access: "write-only",
						},
					},
					{
						binding: 2,
						visibility: GPUShaderStage.COMPUTE,
						storageTexture: {
							format: "rg32float",
							access: "read-only",
						},
					},
				],
			});
		this.realizedFourierAmplitudeGroup0 = device.createBindGroup({
			label: "FFT Wave Realized Fourier Amplitude h(k,t) Group 0",
			layout: realizedFourierAmplitudeGroup0Layout,
			entries: [
				{
					binding: 0,
					resource: this.amplitude_Dy_View,
				},
				{ binding: 1, resource: this.amplitude_Dx_plus_iDz_View },
				{
					binding: 2,
					resource: this.fourierAmplitudeView,
				},
			],
		});

		const realizedFourierAmplitudeGroup1Layout =
			device.createBindGroupLayout({
				label: "FFT Wave Realized Fourier Amplitude h(k,t) Group 1",
				entries: [
					{
						binding: 0,
						visibility: GPUShaderStage.COMPUTE,
						buffer: { type: "uniform" },
					},
				],
			});
		this.realizedFourierAmplitudeGroup1 = device.createBindGroup({
			label: "FFT Wave Realized Fourier Amplitude h(k,t) Group 1",
			layout: realizedFourierAmplitudeGroup1Layout,
			entries: [
				{
					binding: 0,
					resource: { buffer: globalUBO.buffer },
				},
			],
		});

		this.realizedFourierAmplitudePipeline = device.createComputePipeline({
			label: "FFT Wave Realized Fourier Amplitude h(k,t)",
			layout: device.createPipelineLayout({
				label: "FFT Wave Realized Fourier Amplitude h(k,t)",
				bindGroupLayouts: [
					realizedFourierAmplitudeGroup0Layout,
					realizedFourierAmplitudeGroup1Layout,
				],
			}),
			compute: {
				module: shaderModule,
				entryPoint: "realizeFourierAmplitude",
			},
		});

		const fillDisplacementGroup0Layout = device.createBindGroupLayout({
			label: "FFT Wave Fill Displacement Group 0",
			entries: [
				{
					binding: 0,
					visibility: GPUShaderStage.COMPUTE,
					storageTexture: {
						format: DISPLACEMENT_FORMAT,
						access: "write-only",
					},
				},
				{
					binding: 1,
					visibility: GPUShaderStage.COMPUTE,
					storageTexture: {
						format: REALIZED_FOURIER_AMPLITUDE_FORMAT,
						access: "read-only",
					},
				},
				{
					binding: 2,
					visibility: GPUShaderStage.COMPUTE,
					storageTexture: {
						format: REALIZED_FOURIER_AMPLITUDE_FORMAT,
						access: "read-only",
					},
				},
			],
		});
		this.fillDisplacementGroup0 = device.createBindGroup({
			label: "FFT Wave Fill Displacement Group 0",
			layout: fillDisplacementGroup0Layout,
			entries: [
				{
					binding: 0,
					resource: this.displacementView,
				},
				{
					binding: 1,
					resource: this.displacement_Dy_0_view,
				},
				{
					binding: 2,
					resource: this.displacement_Dx_Dz_View,
				},
			],
		});
		this.fillDisplacementKernel = device.createComputePipeline({
			label: "FFT Wave Fill Displacement",
			layout: device.createPipelineLayout({
				label: "FFT Wave Fill Displacement",
				bindGroupLayouts: [fillDisplacementGroup0Layout],
			}),
			compute: {
				module: shaderModule,
				entryPoint: "fillDisplacementTexture",
			},
		});

		const commandEncoder = device.createCommandEncoder({
			label: "FFT Wave Precompute",
		});
		const passEncoder = commandEncoder.beginComputePass({
			label: "FFT Wave Fourier Amplitude",
		});
		passEncoder.setPipeline(this.fourierAmplitudePipeline);
		passEncoder.setBindGroup(0, this.fourierAmplitudeGroup0);

		const dispatchSize = {
			width: this.fourierAmplitude.width,
			height: this.fourierAmplitude.height,
			depth: 1,
		};

		passEncoder.dispatchWorkgroups(
			dispatchSize.width / 16,
			dispatchSize.height / 16,
			dispatchSize.depth / 1
		);

		passEncoder.end();
		device.queue.submit([commandEncoder.finish()]);
	}

	/**
	 * Returns the views into all the FFT Wave textures, for read-only display purposes.
	 *
	 * @return {*}  {FFTWaveSpectrumResourcesViews}
	 * @memberof FFTWaveSpectrumResources
	 */
	views(): FFTWaveSpectrumResourcesViews {
		return {
			gaussianNoiseView: this.gaussianNoiseView,
			fourierAmplitudeView: this.fourierAmplitudeView,
			amplitude_Dy_View: this.amplitude_Dy_View,
			amplitude_Dx_plus_iDz_View: this.amplitude_Dx_plus_iDz_View,
			displacementView: this.displacementView,
		};
	}

	record(
		device: GPUDevice,
		commandEncoder: GPUCommandEncoder,
		timestampInterval: TimestampQueryInterval | undefined
	) {
		const realizePassEncoder = commandEncoder.beginComputePass({
			label: "FFT Wave Fourier Amplitude Realization",
			timestampWrites:
				timestampInterval !== undefined
					? {
							querySet: timestampInterval.querySet,
							beginningOfPassWriteIndex:
								timestampInterval.beginWriteIndex,
					  }
					: undefined,
		});
		realizePassEncoder.setPipeline(this.realizedFourierAmplitudePipeline);
		realizePassEncoder.setBindGroup(0, this.realizedFourierAmplitudeGroup0);
		realizePassEncoder.setBindGroup(1, this.realizedFourierAmplitudeGroup1);

		const workgroupCounts = {
			width: this.amplitude_Dy.width,
			height: this.amplitude_Dy.height,
			depth: 1,
		};

		realizePassEncoder.dispatchWorkgroups(
			workgroupCounts.width / 16,
			workgroupCounts.height / 16,
			workgroupCounts.depth / 1
		);

		realizePassEncoder.end();

		this.dfftResources.recordPerform(
			device,
			commandEncoder,
			this.amplitude_Dy,
			this.displacement_Dy_0,
			true,
			undefined
		);
		this.dfftResources.recordPerform(
			device,
			commandEncoder,
			this.amplitude_Dx_plus_iDz,
			this.displacement_Dx_Dz,
			true,
			undefined
		);

		const fillDisplacementPassEncoder = commandEncoder.beginComputePass({
			label: "FFT Wave Fill Displacement",
			timestampWrites:
				timestampInterval !== undefined
					? {
							querySet: timestampInterval.querySet,
							endOfPassWriteIndex:
								timestampInterval.endWriteIndex,
					  }
					: undefined,
		});

		fillDisplacementPassEncoder.setPipeline(this.fillDisplacementKernel);
		fillDisplacementPassEncoder.setBindGroup(
			0,
			this.fillDisplacementGroup0
		);
		fillDisplacementPassEncoder.dispatchWorkgroups(
			this.displacement.width / 16,
			this.displacement.height / 16,
			1
		);

		fillDisplacementPassEncoder.end();
	}
}
