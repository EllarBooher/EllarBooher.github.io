import FourierWavesShaderPak from "../../shaders/sky-sea/fourier_waves.wgsl";

import { GlobalUBO } from "./UBO.ts";
import { DFFTResources } from "./FFT.ts";
import { TimestampQueryInterval } from "./Common.ts";

// The dimension of the fourier grid, i.e., the sqrt of the number of unique waves for our discrete fourier transform
const GRID_SIZE = 512;
const LOG_2_GRID_SIZE = 9;
const GAUSSIAN_NOISE_FORMAT: GPUTextureFormat = "rg32float";

const FOURIER_AMPLITUDE_FORMAT: GPUTextureFormat = "rg32float";
const DISPLACEMENT_FORMAT: GPUTextureFormat = "rgba16float";
const DERIVATIVES_FORMAT: GPUTextureFormat = "rgba16float";

const FFT_IO_TEXTURE_FORMAT: GPUTextureFormat = "rg32float";

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
	Dy_AmplitudeView: GPUTextureView;
	Dx_plus_iDz_AmplitudeView: GPUTextureView;
	packed_Dydx_plus_iDydz_AmplitudeView: GPUTextureView;
	packed_Dxdx_plus_iDzdz_AmplitudeView: GPUTextureView;
	Dx_Dy_Dz_Dxdz_SpatialView: GPUTextureView;
	Dydx_Dydz_Dxdx_Dzdz_DerivativesView: GPUTextureView;
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
	private packed_Dy_plus_iDxdz_Amplitude: GPUTexture;
	private packed_Dy_plus_iDxdz_AmplitudeView: GPUTextureView;

	// Since we know the result is a real value, we can pack two fourier transforms into the space of one by multiplying one by i, the imaginary unit
	private packed_Dx_plus_iDz_Amplitude: GPUTexture;
	private packed_Dx_plus_iDz_AmplitudeView: GPUTextureView;
	private packed_Dydx_plus_iDydz_Amplitude: GPUTexture;
	private packed_Dydx_plus_iDydz_AmplitudeView: GPUTextureView;
	private packed_Dxdx_plus_iDzdz_Amplitude: GPUTexture;
	private packed_Dxdx_plus_iDzdz_AmplitudeView: GPUTextureView;

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
	 * Output textures of the FFT
	 */
	private Dy_Dxdz_Spatial: GPUTexture;
	private Dy_Dxdz_SpatialView: GPUTextureView;

	private Dx_Dz_Spatial: GPUTexture;
	private Dx_Dz_SpatialView: GPUTextureView;

	private Dydx_Dydz_Spatial: GPUTexture;
	private Dydx_Dydz_SpatialView: GPUTextureView;

	private Dxdx_Dzdz_Spatial: GPUTexture;
	private Dxdx_Dzdz_SpatialView: GPUTextureView;

	/*
	 * Final output maps, organized versions of the FFT outputs above
	 */
	private Dx_Dy_Dz_Dxdz_Spatial: GPUTexture;
	private Dx_Dy_Dz_Dxdz_SpatialView: GPUTextureView;

	private Dydx_Dydz_Dxdx_Dzdz_Spatial: GPUTexture;
	private Dydx_Dydz_Dxdx_Dzdz_SpatialView: GPUTextureView;

	/*
	 * @group(0) @binding(0) var out_displacement: texture_storage_2d<rgba32float, write>;
	 * @group(0) @binding(1) var in_displacement_dy_0: texture_storage_2d<rg32float, read>;
	 * @group(0) @binding(2) var in_displacement_dx_dz: texture_storage_2d<rg32float, read>;
	 */
	private fillSpatialTexturesGroup0: GPUBindGroup;
	private fillSpatialTexturesKernel: GPUComputePipeline;

	private dfftResources: DFFTResources;

	constructor(device: GPUDevice, globalUBO: GlobalUBO) {
		this.spectrumDimension = GRID_SIZE;

		const spectrumTextureSize = {
			width: this.spectrumDimension,
			height: this.spectrumDimension,
		} satisfies GPUExtent3DStrict;

		this.gaussianNoise = device.createTexture({
			label: "FFT Wave Gaussian Noise",
			format: GAUSSIAN_NOISE_FORMAT,
			size: spectrumTextureSize,
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
			size: spectrumTextureSize,
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

		this.packed_Dy_plus_iDxdz_Amplitude = device.createTexture({
			label: "FFT Wave Dy Amplitude",
			format: FFT_IO_TEXTURE_FORMAT,
			size: spectrumTextureSize,
			usage:
				GPUTextureUsage.STORAGE_BINDING |
				GPUTextureUsage.TEXTURE_BINDING |
				GPUTextureUsage.COPY_SRC,
		});
		this.packed_Dy_plus_iDxdz_AmplitudeView =
			this.packed_Dy_plus_iDxdz_Amplitude.createView({
				label: this.packed_Dy_plus_iDxdz_Amplitude.label,
			});
		this.packed_Dx_plus_iDz_Amplitude = device.createTexture({
			label: "FFT Wave Packed Dx + i * Dz Amplitude",
			format: this.packed_Dy_plus_iDxdz_Amplitude.format,
			size: spectrumTextureSize,
			usage: this.packed_Dy_plus_iDxdz_Amplitude.usage,
		});
		this.packed_Dx_plus_iDz_AmplitudeView =
			this.packed_Dx_plus_iDz_Amplitude.createView({
				label: this.packed_Dx_plus_iDz_Amplitude.label,
			});

		this.packed_Dydx_plus_iDydz_Amplitude = device.createTexture({
			label: "FFT Wave Packed Dydx + i * Dydz Amplitude",
			format: this.packed_Dy_plus_iDxdz_Amplitude.format,
			size: spectrumTextureSize,
			usage: this.packed_Dy_plus_iDxdz_Amplitude.usage,
		});
		this.packed_Dydx_plus_iDydz_AmplitudeView =
			this.packed_Dydx_plus_iDydz_Amplitude.createView({
				label: this.packed_Dydx_plus_iDydz_Amplitude.label,
			});

		this.packed_Dxdx_plus_iDzdz_Amplitude = device.createTexture({
			label: "FFT Wave Packed Dxdx + i * Dzdz Amplitude",
			format: this.packed_Dy_plus_iDxdz_Amplitude.format,
			size: spectrumTextureSize,
			usage: this.packed_Dy_plus_iDxdz_Amplitude.usage,
		});
		this.packed_Dxdx_plus_iDzdz_AmplitudeView =
			this.packed_Dxdx_plus_iDzdz_Amplitude.createView({
				label: this.packed_Dxdx_plus_iDzdz_Amplitude.label,
			});

		this.Dy_Dxdz_Spatial = device.createTexture({
			label: "FFT Wave Spatial (Dy, 0)",
			format: FFT_IO_TEXTURE_FORMAT,
			size: spectrumTextureSize,
			usage:
				GPUTextureUsage.STORAGE_BINDING |
				GPUTextureUsage.TEXTURE_BINDING |
				GPUTextureUsage.COPY_DST,
		});
		this.Dy_Dxdz_SpatialView = this.Dy_Dxdz_Spatial.createView({
			label: this.Dy_Dxdz_Spatial.label,
		});

		this.Dx_Dz_Spatial = device.createTexture({
			label: "FFT Wave Spatial (Dx, Dz)",
			format: this.Dy_Dxdz_Spatial.format,
			size: spectrumTextureSize,
			usage: this.Dy_Dxdz_Spatial.usage,
		});
		this.Dx_Dz_SpatialView = this.Dx_Dz_Spatial.createView({
			label: this.Dx_Dz_Spatial.label,
		});

		this.Dydx_Dydz_Spatial = device.createTexture({
			label: "FFT Wave Spatial (Dydx, Dydz)",
			format: this.Dy_Dxdz_Spatial.format,
			size: spectrumTextureSize,
			usage: this.Dy_Dxdz_Spatial.usage,
		});
		this.Dydx_Dydz_SpatialView = this.Dydx_Dydz_Spatial.createView({
			label: this.Dydx_Dydz_Spatial.label,
		});

		this.Dxdx_Dzdz_Spatial = device.createTexture({
			label: "FFT Wave Spatial (Dxdx, Dzdz)",
			format: this.Dy_Dxdz_Spatial.format,
			size: spectrumTextureSize,
			usage: this.Dy_Dxdz_Spatial.usage,
		});
		this.Dxdx_Dzdz_SpatialView = this.Dxdx_Dzdz_Spatial.createView({
			label: this.Dxdx_Dzdz_Spatial.label,
		});

		this.Dx_Dy_Dz_Dxdz_Spatial = device.createTexture({
			label: "FFT Wave Final Displacement",
			format: DISPLACEMENT_FORMAT,
			size: spectrumTextureSize,
			usage:
				GPUTextureUsage.STORAGE_BINDING |
				GPUTextureUsage.TEXTURE_BINDING |
				GPUTextureUsage.COPY_DST,
		});
		this.Dx_Dy_Dz_Dxdz_SpatialView = this.Dx_Dy_Dz_Dxdz_Spatial.createView({
			label: this.Dx_Dy_Dz_Dxdz_Spatial.label,
		});
		this.Dydx_Dydz_Dxdx_Dzdz_Spatial = device.createTexture({
			label: "FFT Wave Final Derivatives",
			format: DERIVATIVES_FORMAT,
			size: spectrumTextureSize,
			usage: this.Dx_Dy_Dz_Dxdz_Spatial.usage,
		});
		this.Dydx_Dydz_Dxdx_Dzdz_SpatialView =
			this.Dydx_Dydz_Dxdx_Dzdz_Spatial.createView({
				label: this.Dydx_Dydz_Dxdx_Dzdz_Spatial.label,
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
							access: "write-only",
						},
					},
					{
						binding: 3,
						visibility: GPUShaderStage.COMPUTE,
						storageTexture: {
							format: "rg32float",
							access: "write-only",
						},
					},
					{
						binding: 4,
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
					resource: this.packed_Dy_plus_iDxdz_AmplitudeView,
				},
				{ binding: 1, resource: this.packed_Dx_plus_iDz_AmplitudeView },
				{
					binding: 2,
					resource: this.packed_Dydx_plus_iDydz_AmplitudeView,
				},
				{
					binding: 3,
					resource: this.packed_Dxdx_plus_iDzdz_AmplitudeView,
				},
				{
					binding: 4,
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

		const fillSpatialTexturesGroup0Layout = device.createBindGroupLayout({
			label: "FFT Wave Fill Spatial Textures Group 0",
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
						format: DERIVATIVES_FORMAT,
						access: "write-only",
					},
				},
				{
					binding: 2,
					visibility: GPUShaderStage.COMPUTE,
					storageTexture: {
						format: FFT_IO_TEXTURE_FORMAT,
						access: "read-only",
					},
				},
				{
					binding: 3,
					visibility: GPUShaderStage.COMPUTE,
					storageTexture: {
						format: FFT_IO_TEXTURE_FORMAT,
						access: "read-only",
					},
				},
				{
					binding: 4,
					visibility: GPUShaderStage.COMPUTE,
					storageTexture: {
						format: FFT_IO_TEXTURE_FORMAT,
						access: "read-only",
					},
				},
				{
					binding: 5,
					visibility: GPUShaderStage.COMPUTE,
					storageTexture: {
						format: FFT_IO_TEXTURE_FORMAT,
						access: "read-only",
					},
				},
			],
		});
		this.fillSpatialTexturesGroup0 = device.createBindGroup({
			label: "FFT Wave Fill Spatial Textures Group 0",
			layout: fillSpatialTexturesGroup0Layout,
			entries: [
				{
					binding: 0,
					resource: this.Dx_Dy_Dz_Dxdz_SpatialView,
				},
				{
					binding: 1,
					resource: this.Dydx_Dydz_Dxdx_Dzdz_SpatialView,
				},
				{
					binding: 2,
					resource: this.Dy_Dxdz_SpatialView,
				},
				{
					binding: 3,
					resource: this.Dx_Dz_SpatialView,
				},
				{
					binding: 4,
					resource: this.Dydx_Dydz_SpatialView,
				},
				{
					binding: 5,
					resource: this.Dxdx_Dzdz_SpatialView,
				},
			],
		});
		this.fillSpatialTexturesKernel = device.createComputePipeline({
			label: "FFT Wave Fill Spatial Textures",
			layout: device.createPipelineLayout({
				label: "FFT Wave Fill SpatialTextures",
				bindGroupLayouts: [fillSpatialTexturesGroup0Layout],
			}),
			compute: {
				module: shaderModule,
				entryPoint: "fillSpatialTextures",
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
			Dy_AmplitudeView: this.packed_Dy_plus_iDxdz_AmplitudeView,
			Dx_plus_iDz_AmplitudeView: this.packed_Dx_plus_iDz_AmplitudeView,
			Dx_Dy_Dz_Dxdz_SpatialView: this.Dx_Dy_Dz_Dxdz_SpatialView,
			packed_Dxdx_plus_iDzdz_AmplitudeView:
				this.packed_Dxdx_plus_iDzdz_AmplitudeView,
			packed_Dydx_plus_iDydz_AmplitudeView:
				this.packed_Dydx_plus_iDydz_AmplitudeView,
			Dydx_Dydz_Dxdx_Dzdz_DerivativesView:
				this.Dydx_Dydz_Dxdx_Dzdz_SpatialView,
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
			width: this.packed_Dy_plus_iDxdz_Amplitude.width,
			height: this.packed_Dy_plus_iDxdz_Amplitude.height,
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
			this.packed_Dy_plus_iDxdz_Amplitude,
			this.Dy_Dxdz_Spatial,
			true,
			undefined
		);
		this.dfftResources.recordPerform(
			device,
			commandEncoder,
			this.packed_Dx_plus_iDz_Amplitude,
			this.Dx_Dz_Spatial,
			true,
			undefined
		);
		this.dfftResources.recordPerform(
			device,
			commandEncoder,
			this.packed_Dydx_plus_iDydz_Amplitude,
			this.Dydx_Dydz_Spatial,
			true,
			undefined
		);
		this.dfftResources.recordPerform(
			device,
			commandEncoder,
			this.packed_Dxdx_plus_iDzdz_Amplitude,
			this.Dxdx_Dzdz_Spatial,
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

		fillDisplacementPassEncoder.setPipeline(this.fillSpatialTexturesKernel);
		fillDisplacementPassEncoder.setBindGroup(
			0,
			this.fillSpatialTexturesGroup0
		);
		fillDisplacementPassEncoder.dispatchWorkgroups(
			this.Dx_Dy_Dz_Dxdz_Spatial.width / 16,
			this.Dx_Dy_Dz_Dxdz_Spatial.height / 16,
			1
		);

		fillDisplacementPassEncoder.end();
	}
}
