import FourierWavesShaderPak from "../../shaders/sky-sea/fourier_waves.wgsl";

import { GlobalUBO, UBO } from "./UBO.ts";
import { DFFTResources } from "./FFT.ts";
import { RenderOutputTexture, TimestampQueryInterval } from "./Common.ts";
import {
	MipMapGenerationPassResources,
	MipMapGenerationTextureBindings,
} from "./MipMap.ts";

// The dimension of the fourier grid, i.e., the sqrt of the number of unique waves for our discrete fourier transform
const GRID_SIZE = 512;
const LOG_2_GRID_SIZE = 9;
const GRAVITY = 9.8;
const WAVE_PERIOD_SECONDS = 100.0;

const GAUSSIAN_NOISE_FORMAT: GPUTextureFormat = "rg32float";

const INITIAL_AMPLITUDE_FORMAT: GPUTextureFormat = "rg32float";
const DISPLACEMENT_FORMAT: GPUTextureFormat = "rgba16float";
const DERIVATIVES_FORMAT: GPUTextureFormat = "rgba16float";

const FFT_IO_TEXTURE_FORMAT: GPUTextureFormat = "rg32float";

class FourierWavesUBO extends UBO {
	public readonly data: {
		fourier_grid_size: number;
		gravity: number;
		wave_patch_extent_meters: number;
		wave_period_seconds: number;

		wind_speed_meters_per_second: number;
		wind_fetch_meters: number;
		wave_swell: number;
		padding0: number;
	} = {
		fourier_grid_size: GRID_SIZE,
		gravity: GRAVITY,
		wave_patch_extent_meters: 50.0,
		wave_period_seconds: WAVE_PERIOD_SECONDS,

		wind_speed_meters_per_second: 5.0,
		wind_fetch_meters: 10.0 * 1000.0,
		wave_swell: 0.3,
		padding0: 0,
	};

	constructor(device: GPUDevice) {
		super(device, 8, "Fourier Waves UBO");
	}

	protected override packed(): ArrayBuffer {
		const buffer = new ArrayBuffer(this.buffer.size);
		const view = new DataView(buffer);

		view.setUint32(0, this.data.fourier_grid_size, true);
		view.setFloat32(4, this.data.gravity, true);
		view.setFloat32(8, this.data.wave_patch_extent_meters, true);
		view.setFloat32(12, this.data.wave_period_seconds, true);

		view.setFloat32(16, this.data.wind_speed_meters_per_second, true);
		view.setFloat32(20, this.data.wind_fetch_meters, true);
		view.setFloat32(24, this.data.wave_swell, true);
		view.setFloat32(28, this.data.padding0, true);

		return buffer;
	}
}

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

export interface FFTWaveSpectrumRenderables {
	gaussianNoise: RenderOutputTexture;
	initialAmplitude: RenderOutputTexture;
	Dy_Amplitude: RenderOutputTexture;
	Dx_plus_iDz_Amplitude: RenderOutputTexture;
	packed_Dydx_plus_iDydz_Amplitude: RenderOutputTexture;
	packed_Dxdx_plus_iDzdz_Amplitude: RenderOutputTexture;
	Dx_Dy_Dz_Dxdz_Spatial: RenderOutputTexture;
	Dydx_Dydz_Dxdx_Dzdz_Spatial: RenderOutputTexture;
}

export class FFTWaveDisplacementMaps {
	private Dx_Dy_Dz_Dxdz_Spatial: GPUTexture;
	private Dydx_Dydz_Dxdx_Dzdz_Spatial: GPUTexture;

	get mipLevelCount() {
		return this.Dx_Dy_Dz_Dxdz_Spatial.mipLevelCount;
	}
	readonly Dx_Dy_Dz_Dxdz_SpatialAllMips: GPUTextureView;
	readonly Dydx_Dydz_Dxdx_Dzdz_SpatialAllMips: GPUTextureView;

	constructor(
		Dx_Dy_Dz_Dxdz_Spatial: GPUTexture,
		Dydx_Dydz_Dxdx_Dzdz_Spatial: GPUTexture
	) {
		if (
			Dx_Dy_Dz_Dxdz_Spatial.mipLevelCount !=
			Dydx_Dydz_Dxdx_Dzdz_Spatial.mipLevelCount
		) {
			console.warn(
				`FFT Displacement maps do not have identical mip levels. ${Dx_Dy_Dz_Dxdz_Spatial.mipLevelCount} vs ${Dydx_Dydz_Dxdx_Dzdz_Spatial.mipLevelCount}`
			);
		}

		this.Dx_Dy_Dz_Dxdz_Spatial = Dx_Dy_Dz_Dxdz_Spatial;
		this.Dydx_Dydz_Dxdx_Dzdz_Spatial = Dydx_Dydz_Dxdx_Dzdz_Spatial;

		this.Dx_Dy_Dz_Dxdz_SpatialAllMips =
			this.Dx_Dy_Dz_Dxdz_Spatial.createView({
				label: `FFTWaveDisplacementMaps for ${this.Dx_Dy_Dz_Dxdz_Spatial.label}`,
			});
		this.Dydx_Dydz_Dxdx_Dzdz_SpatialAllMips =
			this.Dydx_Dydz_Dxdx_Dzdz_Spatial.createView({
				label: `FFTWaveDisplacementMaps for ${this.Dydx_Dydz_Dxdx_Dzdz_Spatial.label}`,
			});
	}
}

export interface FFTWaveCascade {}

export class FFTWaveSpectrumResources {
	// We produce a discrete spectrum of waves, for which the various values will be stored in square textures
	// This dimension determines the diameter of that square, so the total number of frequencies we produce
	// Our spectrum is discrete so we can apply an IDFT algorithm to determine the displacement when rendering the sums of these waves
	// (x,z) position in this grid uniquely identifies a wave with wave vector k = (k_x,k_z)
	private gridSize: number;

	// A two-channel texture of pairs of gaussian random variables, used to generate the amplitudes of our waves
	private gaussianNoise: GPUTexture;

	// A fourier grid of wave amplitude that are a function of the wave vector
	private initialAmplitude: GPUTexture;

	private fourierWavesUBO: FourierWavesUBO;

	/*
	 * @group(0) @binding(0) var out_initial_amplitude: texture_storage_2d<rg32float, write>;
	 * @group(0) @binding(1) var in_gaussian_random_pairs: texture_storage_2d<rg32float, read>;
	 *
	 * @group(1) @binding(0) var<uniform> u_global: GlobalUBO;
	 * @group(1) @binding(1) var<uniform> u_fourier_waves: FourierWavesUBO;
	 */
	private initialAmplitudeGroup0: GPUBindGroup;
	private initialAmplitudeGroup1: GPUBindGroup;
	private initialAmplitudePipeline: GPUComputePipeline;

	// Since we know the result is a real value, we can pack two fourier transforms into the space of one by multiplying one by i, the imaginary unit
	private packed_Dy_plus_iDxdz_Amplitude: GPUTexture;
	private packed_Dx_plus_iDz_Amplitude: GPUTexture;
	private packed_Dydx_plus_iDydz_Amplitude: GPUTexture;
	private packed_Dxdx_plus_iDzdz_Amplitude: GPUTexture;

	/*
	 * @group(0) @binding(0) var out_packed_Dy_plus_iDxdz_amplitude: texture_storage_2d<rg32float, write>;
	 * @group(0) @binding(1) var out_packed_Dx_plus_iDz_amplitude: texture_storage_2d<rg32float, write>;
	 * @group(0) @binding(2) var out_packed_Dydx_plus_iDydz_amplitude: texture_storage_2d<rg32float, write>;
	 * @group(0) @binding(3) var out_packed_Dxdx_plus_iDzdz_amplitude: texture_storage_2d<rg32float, write>;
	 * @group(0) @binding(4) var in_initial_amplitude: texture_storage_2d<rg32float, read>;
	 *
	 * @group(1) @binding(0) var<uniform> u_global: GlobalUBO;
	 * @group(1) @binding(1) var<uniform> u_fourier_waves: FourierWavesUBO;
	 */
	private realizedAmplitudeGroup0: GPUBindGroup;
	private realizedAmplitudeGroup1: GPUBindGroup;
	private realizedAmplitudePipeline: GPUComputePipeline;

	/*
	 * Output textures of the FFT
	 */
	private Dy_Dxdz_Spatial: GPUTexture;
	private Dx_Dz_Spatial: GPUTexture;
	private Dydx_Dydz_Spatial: GPUTexture;
	private Dxdx_Dzdz_Spatial: GPUTexture;

	/*
	 * Final output maps, organized versions of the FFT outputs above
	 */
	private Dx_Dy_Dz_Dxdz_Spatial: GPUTexture;
	private Dydx_Dydz_Dxdx_Dzdz_Spatial: GPUTexture;

	/*
	 * @group(0) @binding(0) var out_displacement: texture_storage_2d<rgba32float, write>;
	 * @group(0) @binding(1) var in_displacement_dy_0: texture_storage_2d<rg32float, read>;
	 * @group(0) @binding(2) var in_displacement_dx_dz: texture_storage_2d<rg32float, read>;
	 */
	private fillSpatialTexturesGroup0: GPUBindGroup;
	private fillSpatialTexturesKernel: GPUComputePipeline;

	private dfftResources: DFFTResources;

	private mipMapGenerator: MipMapGenerationPassResources;
	private mipMapBindings_Dx_Dy_Dz_Dxdz_Spatial: MipMapGenerationTextureBindings;
	private mipMapBindings_Dydx_Dydz_Dxdx_Dzdz_Spatial: MipMapGenerationTextureBindings;

	constructor(device: GPUDevice, globalUBO: GlobalUBO) {
		this.gridSize = GRID_SIZE;

		const spectrumTextureSize = {
			width: this.gridSize,
			height: this.gridSize,
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

		const FLOAT32_PER_GAUSSIAN_NOISE_TEXEL = 2;
		const BYTES_PER_TEXEL = 8;
		const BYTES_PER_ROW = BYTES_PER_TEXEL * this.gridSize;
		const randomNumbers = new Float32Array(
			this.gridSize * this.gridSize * FLOAT32_PER_GAUSSIAN_NOISE_TEXEL
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

		this.fourierWavesUBO = new FourierWavesUBO(device);
		this.fourierWavesUBO.writeToGPU(device.queue);

		this.initialAmplitude = device.createTexture({
			label: "FFT Wave Fourier Amplitude h_0(k)",
			format: INITIAL_AMPLITUDE_FORMAT,
			size: spectrumTextureSize,
			usage:
				GPUTextureUsage.STORAGE_BINDING |
				GPUTextureUsage.TEXTURE_BINDING,
		});

		const initialAmplitudeGroup0Layout = device.createBindGroupLayout({
			label: "FFT Wave Initial Amplitude h_0(k) Group 0",
			entries: [
				{
					binding: 0,
					visibility: GPUShaderStage.COMPUTE,
					storageTexture: {
						format: INITIAL_AMPLITUDE_FORMAT,
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

		this.initialAmplitudeGroup0 = device.createBindGroup({
			label: "FFT Wave Initial Amplitude h_0(k) Group 0",
			layout: initialAmplitudeGroup0Layout,
			entries: [
				{
					binding: 0,
					resource: this.initialAmplitude.createView(),
				},
				{
					binding: 1,
					resource: this.gaussianNoise.createView(),
				},
			],
		});

		const initialAmplitudeGroup1Layout = device.createBindGroupLayout({
			label: "FFT Wave Initial Amplitude h_0(k) Group 1",
			entries: [
				{
					binding: 0,
					visibility: GPUShaderStage.COMPUTE,
					buffer: {
						type: "uniform",
					},
				},
				{
					binding: 1,
					visibility: GPUShaderStage.COMPUTE,
					buffer: {
						type: "uniform",
					},
				},
			],
		});

		this.initialAmplitudeGroup1 = device.createBindGroup({
			label: "FFT Wave Initial Amplitude h_0(k) Group 1",
			layout: initialAmplitudeGroup1Layout,
			entries: [
				{
					binding: 0,
					resource: { buffer: globalUBO.buffer },
				},
				{
					binding: 1,
					resource: { buffer: this.fourierWavesUBO.buffer },
				},
			],
		});

		this.dfftResources = new DFFTResources(device, LOG_2_GRID_SIZE);

		const shaderModule = device.createShaderModule({
			label: "FFT Wave",
			code: FourierWavesShaderPak,
		});

		this.initialAmplitudePipeline = device.createComputePipeline({
			label: "FFT Wave Initial Amplitude h_0(k)",
			layout: device.createPipelineLayout({
				label: "FFT Wave Initial Amplitude h_0(k)",
				bindGroupLayouts: [
					initialAmplitudeGroup0Layout,
					initialAmplitudeGroup1Layout,
				],
			}),
			compute: {
				module: shaderModule,
				entryPoint: "computeInitialAmplitude",
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
		this.packed_Dx_plus_iDz_Amplitude = device.createTexture({
			label: "FFT Wave Packed Dx + i * Dz Amplitude",
			format: this.packed_Dy_plus_iDxdz_Amplitude.format,
			size: spectrumTextureSize,
			usage: this.packed_Dy_plus_iDxdz_Amplitude.usage,
		});

		this.packed_Dydx_plus_iDydz_Amplitude = device.createTexture({
			label: "FFT Wave Packed Dydx + i * Dydz Amplitude",
			format: this.packed_Dy_plus_iDxdz_Amplitude.format,
			size: spectrumTextureSize,
			usage: this.packed_Dy_plus_iDxdz_Amplitude.usage,
		});

		this.packed_Dxdx_plus_iDzdz_Amplitude = device.createTexture({
			label: "FFT Wave Packed Dxdx + i * Dzdz Amplitude",
			format: this.packed_Dy_plus_iDxdz_Amplitude.format,
			size: spectrumTextureSize,
			usage: this.packed_Dy_plus_iDxdz_Amplitude.usage,
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

		this.Dx_Dz_Spatial = device.createTexture({
			label: "FFT Wave Spatial (Dx, Dz)",
			format: this.Dy_Dxdz_Spatial.format,
			size: spectrumTextureSize,
			usage: this.Dy_Dxdz_Spatial.usage,
		});

		this.Dydx_Dydz_Spatial = device.createTexture({
			label: "FFT Wave Spatial (Dydx, Dydz)",
			format: this.Dy_Dxdz_Spatial.format,
			size: spectrumTextureSize,
			usage: this.Dy_Dxdz_Spatial.usage,
		});

		this.Dxdx_Dzdz_Spatial = device.createTexture({
			label: "FFT Wave Spatial (Dxdx, Dzdz)",
			format: this.Dy_Dxdz_Spatial.format,
			size: spectrumTextureSize,
			usage: this.Dy_Dxdz_Spatial.usage,
		});

		this.Dx_Dy_Dz_Dxdz_Spatial = device.createTexture({
			label: "FFT Wave Final Displacement",
			format: DISPLACEMENT_FORMAT,
			size: spectrumTextureSize,
			mipLevelCount: LOG_2_GRID_SIZE,
			usage:
				GPUTextureUsage.STORAGE_BINDING |
				GPUTextureUsage.TEXTURE_BINDING |
				GPUTextureUsage.COPY_SRC |
				GPUTextureUsage.COPY_DST,
		});

		this.Dydx_Dydz_Dxdx_Dzdz_Spatial = device.createTexture({
			label: "FFT Wave Final Derivatives",
			format: DERIVATIVES_FORMAT,
			size: spectrumTextureSize,
			mipLevelCount: this.Dx_Dy_Dz_Dxdz_Spatial.mipLevelCount,
			usage: this.Dx_Dy_Dz_Dxdz_Spatial.usage,
		});

		this.mipMapGenerator = new MipMapGenerationPassResources(device);
		this.mipMapBindings_Dx_Dy_Dz_Dxdz_Spatial =
			this.mipMapGenerator.createBindGroups(
				device,
				this.Dx_Dy_Dz_Dxdz_Spatial
			);
		this.mipMapBindings_Dydx_Dydz_Dxdx_Dzdz_Spatial =
			this.mipMapGenerator.createBindGroups(
				device,
				this.Dydx_Dydz_Dxdx_Dzdz_Spatial
			);

		const realizedAmplitudeGroup0Layout = device.createBindGroupLayout({
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
		this.realizedAmplitudeGroup0 = device.createBindGroup({
			label: "FFT Wave Realized Fourier Amplitude h(k,t) Group 0",
			layout: realizedAmplitudeGroup0Layout,
			entries: [
				{
					binding: 0,
					resource: this.packed_Dy_plus_iDxdz_Amplitude.createView(),
				},
				{
					binding: 1,
					resource: this.packed_Dx_plus_iDz_Amplitude.createView(),
				},
				{
					binding: 2,
					resource:
						this.packed_Dydx_plus_iDydz_Amplitude.createView(),
				},
				{
					binding: 3,
					resource:
						this.packed_Dxdx_plus_iDzdz_Amplitude.createView(),
				},
				{
					binding: 4,
					resource: this.initialAmplitude.createView(),
				},
			],
		});

		const realizedAmplitudeGroup1Layout = device.createBindGroupLayout({
			label: "FFT Wave Realized Fourier Amplitude h(k,t) Group 1",
			entries: [
				{
					binding: 0,
					visibility: GPUShaderStage.COMPUTE,
					buffer: { type: "uniform" },
				},
				{
					binding: 1,
					visibility: GPUShaderStage.COMPUTE,
					buffer: { type: "uniform" },
				},
			],
		});
		this.realizedAmplitudeGroup1 = device.createBindGroup({
			label: "FFT Wave Realized Fourier Amplitude h(k,t) Group 1",
			layout: realizedAmplitudeGroup1Layout,
			entries: [
				{
					binding: 0,
					resource: { buffer: globalUBO.buffer },
				},
				{
					binding: 1,
					resource: { buffer: this.fourierWavesUBO.buffer },
				},
			],
		});

		this.realizedAmplitudePipeline = device.createComputePipeline({
			label: "FFT Wave Realized Fourier Amplitude h(k,t)",
			layout: device.createPipelineLayout({
				label: "FFT Wave Realized Fourier Amplitude h(k,t)",
				bindGroupLayouts: [
					realizedAmplitudeGroup0Layout,
					realizedAmplitudeGroup1Layout,
				],
			}),
			compute: {
				module: shaderModule,
				entryPoint: "computeRealizedAmplitude",
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
					resource: this.Dx_Dy_Dz_Dxdz_Spatial.createView({
						mipLevelCount: 1,
					}),
				},
				{
					binding: 1,
					resource: this.Dydx_Dydz_Dxdx_Dzdz_Spatial.createView({
						mipLevelCount: 1,
					}),
				},
				{
					binding: 2,
					resource: this.Dy_Dxdz_Spatial.createView(),
				},
				{
					binding: 3,
					resource: this.Dx_Dz_Spatial.createView(),
				},
				{
					binding: 4,
					resource: this.Dydx_Dydz_Spatial.createView(),
				},
				{
					binding: 5,
					resource: this.Dxdx_Dzdz_Spatial.createView(),
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
		passEncoder.setPipeline(this.initialAmplitudePipeline);
		passEncoder.setBindGroup(0, this.initialAmplitudeGroup0);
		passEncoder.setBindGroup(1, this.initialAmplitudeGroup1);

		const dispatchSize = {
			width: this.initialAmplitude.width,
			height: this.initialAmplitude.height,
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
	views(): FFTWaveSpectrumRenderables {
		return {
			gaussianNoise: new RenderOutputTexture(this.gaussianNoise),
			initialAmplitude: new RenderOutputTexture(this.initialAmplitude),
			Dy_Amplitude: new RenderOutputTexture(
				this.packed_Dy_plus_iDxdz_Amplitude
			),
			Dx_plus_iDz_Amplitude: new RenderOutputTexture(
				this.packed_Dx_plus_iDz_Amplitude
			),
			Dx_Dy_Dz_Dxdz_Spatial: new RenderOutputTexture(
				this.Dx_Dy_Dz_Dxdz_Spatial
			),
			packed_Dxdx_plus_iDzdz_Amplitude: new RenderOutputTexture(
				this.packed_Dxdx_plus_iDzdz_Amplitude
			),
			packed_Dydx_plus_iDydz_Amplitude: new RenderOutputTexture(
				this.packed_Dydx_plus_iDydz_Amplitude
			),
			Dydx_Dydz_Dxdx_Dzdz_Spatial: new RenderOutputTexture(
				this.Dydx_Dydz_Dxdx_Dzdz_Spatial
			),
		};
	}

	displacementMaps(): FFTWaveDisplacementMaps {
		return new FFTWaveDisplacementMaps(
			this.Dx_Dy_Dz_Dxdz_Spatial,
			this.Dydx_Dydz_Dxdx_Dzdz_Spatial
		);
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
		realizePassEncoder.setPipeline(this.realizedAmplitudePipeline);
		realizePassEncoder.setBindGroup(0, this.realizedAmplitudeGroup0);
		realizePassEncoder.setBindGroup(1, this.realizedAmplitudeGroup1);

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

		this.mipMapGenerator.updateMipMaps(
			commandEncoder,
			this.mipMapBindings_Dx_Dy_Dz_Dxdz_Spatial
		);
		this.mipMapGenerator.updateMipMaps(
			commandEncoder,
			this.mipMapBindings_Dydx_Dydz_Dxdx_Dzdz_Spatial
		);
	}
}
