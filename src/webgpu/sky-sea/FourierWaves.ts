import FourierWavesShaderPak from "../../shaders/sky-sea/fourier_waves.wgsl";

import { GlobalUBO, UBO } from "./UBO.ts";
import { DFFTResources } from "./FFT.ts";
import { RenderOutputTexture, TimestampQueryInterval } from "./Common.ts";
import {
	MipMapGenerationPassResources,
	MipMapGenerationTextureBindings,
} from "./MipMap.ts";
import { vec2, Vec2 } from "wgpu-matrix";

// The dimension of the fourier grid, i.e., the sqrt of the number of unique waves for our discrete fourier transform
const GRID_SIZE = 512;
const LOG_2_GRID_SIZE = 9;
const GRAVITY = 9.8;
const WAVE_PERIOD_SECONDS = 100.0;

const GAUSSIAN_NOISE_FORMAT: GPUTextureFormat = "rg32float";

const INITIAL_AMPLITUDE_FORMAT: GPUTextureFormat = "rg32float";
const DISPLACEMENT_FORMAT: GPUTextureFormat = "rgba16float";
const TURBULENCE_JACOBIAN_FORMAT: GPUTextureFormat = "rgba16float";

const FFT_IO_TEXTURE_FORMAT: GPUTextureFormat = "rgba32float";

export interface FFTWavesSettings {
	gravity: number;
	windSpeedMetersPerSeconds: number;
	windFetchMeters: number;
	waveSwell: number;
}

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

		wave_number_min_max: Vec2;
		padding1: Vec2;
	} = {
		fourier_grid_size: GRID_SIZE,
		gravity: GRAVITY,
		wave_patch_extent_meters: 50.0,
		wave_period_seconds: WAVE_PERIOD_SECONDS,

		wind_speed_meters_per_second: 10.0,
		wind_fetch_meters: 10.0 * 1000.0,
		wave_swell: 0.3,
		padding0: 0,

		wave_number_min_max: vec2.create(0.0, 1000.0),
		padding1: vec2.create(0, 0),
	};

	constructor(device: GPUDevice) {
		super(device, 12, "Fourier Waves UBO");
	}

	protected override packed(): ArrayBuffer {
		const buffer = new ArrayBuffer(this.buffer.size);
		const view = new DataView(buffer);
		const float32View = new Float32Array(buffer);

		view.setUint32(0, this.data.fourier_grid_size, true);
		view.setFloat32(4, this.data.gravity, true);
		view.setFloat32(8, this.data.wave_patch_extent_meters, true);
		view.setFloat32(12, this.data.wave_period_seconds, true);

		view.setFloat32(16, this.data.wind_speed_meters_per_second, true);
		view.setFloat32(20, this.data.wind_fetch_meters, true);
		view.setFloat32(24, this.data.wave_swell, true);
		view.setFloat32(28, this.data.padding0, true);

		float32View.set(this.data.wave_number_min_max, 8);
		float32View.set(this.data.padding1, 10);

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
	packed_Dx_plus_iDy_Dz_iDxdz_Amplitude: RenderOutputTexture;
	packed_Dydx_plus_iDydz_Dxdx_plus_iDzdz_Amplitude: RenderOutputTexture;
	turbulenceJacobian: RenderOutputTexture;
	Dx_Dy_Dz_Dxdz_Spatial: RenderOutputTexture;
	Dydx_Dydz_Dxdx_Dzdz_Spatial: RenderOutputTexture;
}

export class FFTWaveDisplacementMaps {
	private Dx_Dy_Dz_Dxdz_Spatial: GPUTexture;
	private Dydx_Dydz_Dxdx_Dzdz_Spatial: GPUTexture;
	private turbulenceJacobian: GPUTexture[];

	get mipLevelCount() {
		return this.Dx_Dy_Dz_Dxdz_Spatial.mipLevelCount;
	}
	readonly Dx_Dy_Dz_Dxdz_SpatialAllMips: GPUTextureView;
	readonly Dydx_Dydz_Dxdx_Dzdz_SpatialAllMips: GPUTextureView;
	readonly turbulenceJacobianOneMip: GPUTextureView[];

	constructor(
		Dx_Dy_Dz_Dxdz_Spatial: GPUTexture,
		Dydx_Dydz_Dxdx_Dzdz_Spatial: GPUTexture,
		turbulenceJacobian: GPUTexture[]
	) {
		if (
			Dx_Dy_Dz_Dxdz_Spatial.mipLevelCount !=
			Dydx_Dydz_Dxdx_Dzdz_Spatial.mipLevelCount
		) {
			console.warn(
				`FFT Wave Displacement maps do not have identical mip levels. ${Dx_Dy_Dz_Dxdz_Spatial.mipLevelCount} vs ${Dydx_Dydz_Dxdx_Dzdz_Spatial.mipLevelCount}`
			);
		}

		this.Dx_Dy_Dz_Dxdz_Spatial = Dx_Dy_Dz_Dxdz_Spatial;
		this.Dydx_Dydz_Dxdx_Dzdz_Spatial = Dydx_Dydz_Dxdx_Dzdz_Spatial;
		this.turbulenceJacobian = turbulenceJacobian;

		this.Dx_Dy_Dz_Dxdz_SpatialAllMips =
			this.Dx_Dy_Dz_Dxdz_Spatial.createView({
				label: `FFT Wave DisplacementMaps for ${this.Dx_Dy_Dz_Dxdz_Spatial.label}`,
			});
		this.Dydx_Dydz_Dxdx_Dzdz_SpatialAllMips =
			this.Dydx_Dydz_Dxdx_Dzdz_Spatial.createView({
				label: `FFT Wave DisplacementMaps for ${this.Dydx_Dydz_Dxdx_Dzdz_Spatial.label}`,
			});
		this.turbulenceJacobianOneMip = this.turbulenceJacobian.map(
			(texture, index) =>
				texture.createView({
					label: `FFT Wave DisplacementMaps for ${this.turbulenceJacobian[index].label} index ${index}`,
				})
		);
	}
}

// TODO: Some of these resources could be deduplicated across cascades
export interface FFTWaveCascade {
	// A two-channel texture of pairs of gaussian random variables, used to generate the amplitudes of our waves
	gaussianNoise: GPUTexture;
	// A fourier grid of wave amplitude that are a function of the wave vector
	initialAmplitude: GPUTexture;

	waveSettings: FourierWavesUBO;

	/*
	 * @group(0) @binding(0) var out_initial_amplitude: texture_storage_2d<rg32float, write>;
	 * @group(0) @binding(1) var in_gaussian_random_pairs: texture_storage_2d<rg32float, read>;
	 *
	 * @group(1) @binding(0) var<uniform> u_global: GlobalUBO;
	 * @group(1) @binding(1) var<uniform> u_fourier_waves: FourierWavesUBO;
	 */
	initialAmplitudeGroup0: GPUBindGroup;
	initialAmplitudeGroup1: GPUBindGroup;

	/*
	 * Since we know the result is a real value, we can pack two fourier
	 * transforms into the space of one by multiplying one by i, the imaginary
	 * unit.
	 * Ordered such that the real-valued results are in the component-order consumed by the ocean surface displacement passes.
	 */
	packed_Dx_plus_iDy_Dz_iDxdz_Amplitude: GPUTexture;
	packed_Dydx_plus_iDydz_Dxdx_plus_iDzdz_Amplitude: GPUTexture;

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
	realizedAmplitudeGroup0: GPUBindGroup;
	realizedAmplitudeGroup1: GPUBindGroup;
}

interface TurbulenceJacobianEntry {
	textureArray: GPUTexture;
	bindGroup: GPUBindGroup;
	mipMapBindings: MipMapGenerationTextureBindings;
}

export class FFTWaveSpectrumResources {
	/*
	 * We produce a discrete spectrum of waves, for which the various values
	 * will be stored in square textures. This dimension determines the diameter
	 * of that square, so the total number of frequencies we produce. Our
	 * spectrum is discrete so we can apply an IDFT algorithm to determine the
	 * displacement when rendering the sums of these waves. (x,z) position in
	 * this grid uniquely identifies a wave with wave vector k = (k_x,k_z)
	 */
	private gridSize: number;

	private initialAmplitudeKernel: GPUComputePipeline;
	private realizedAmplitudeKernel: GPUComputePipeline;
	private accumulateTurbulenceKernel: GPUComputePipeline;

	private dfftResources: DFFTResources;

	private mipMapGenerator: MipMapGenerationPassResources;

	private cascades: FFTWaveCascade[];

	/*
	 * Final output maps, organized versions of the FFT outputs above.
	 * There is one layer for each cascade.
	 */
	private Dx_Dy_Dz_Dxdz_SpatialArray: GPUTexture;
	private Dydx_Dydz_Dxdx_Dzdz_SpatialArray: GPUTexture;

	/*
	 * Array layer N contains the jacobian computed from layers 1 through N.
	 * Each layer is a cascade, so it is done this way in case we only sample the lower cascades.
	 * We do not want the turbulence from higher cascades to affect the lower cascades.
	 *
	 * We need two storage textures since we cannot natively have read_write storage. They are swapped out each frame.
	 */

	private turbulenceJacobianArrays: TurbulenceJacobianEntry[];
	private turbulenceJacobianIndex = 0;

	public get turbulenceMapIndex() {
		return this.turbulenceJacobianIndex;
	}

	private Dx_Dy_Dz_Dxdz_SpatialArray_MipMapBindings: MipMapGenerationTextureBindings;
	private Dydx_Dydz_Dxdx_Dzdz_SpatialArray_MipMapBindings: MipMapGenerationTextureBindings;

	private waveSettings: FFTWavesSettings;

	private createCascade(
		device: GPUDevice,
		globalUBO: GlobalUBO,
		patchExtentMeters: number,
		waveNumberMinMax: [number, number]
	): FFTWaveCascade {
		const textureGridSize: GPUExtent3DStrict = {
			width: this.gridSize,
			height: this.gridSize,
		};

		const gaussianNoise = device.createTexture({
			label: "FFT Wave Gaussian Noise",
			format: GAUSSIAN_NOISE_FORMAT,
			size: textureGridSize,
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
			{ texture: gaussianNoise },
			randomNumbers,
			{ bytesPerRow: BYTES_PER_ROW },
			{
				width: gaussianNoise.width,
				height: gaussianNoise.height,
			}
		);

		const waveSettings = new FourierWavesUBO(device);

		waveSettings.data.wave_patch_extent_meters = patchExtentMeters;
		vec2.set(
			waveNumberMinMax[0],
			waveNumberMinMax[1],
			waveSettings.data.wave_number_min_max
		);
		waveSettings.writeToGPU(device.queue);

		const initialAmplitude = device.createTexture({
			label: "FFT Wave Fourier Amplitude h_0(k)",
			format: INITIAL_AMPLITUDE_FORMAT,
			size: textureGridSize,
			usage:
				GPUTextureUsage.STORAGE_BINDING |
				GPUTextureUsage.TEXTURE_BINDING,
		});

		const initialAmplitudeGroup0 = device.createBindGroup({
			label: "FFT Wave Initial Amplitude h_0(k) Group 0",
			layout: this.initialAmplitudeKernel.getBindGroupLayout(0),
			entries: [
				{
					binding: 0,
					resource: initialAmplitude.createView(),
				},
				{
					binding: 1,
					resource: gaussianNoise.createView(),
				},
			],
		});

		const initialAmplitudeGroup1 = device.createBindGroup({
			label: "FFT Wave Initial Amplitude h_0(k) Group 1",
			layout: this.initialAmplitudeKernel.getBindGroupLayout(1),
			entries: [
				{
					binding: 0,
					resource: { buffer: globalUBO.buffer },
				},
				{
					binding: 1,
					resource: { buffer: waveSettings.buffer },
				},
			],
		});

		const packed_Dx_plus_iDy_Dz_iDxdz_Amplitude = device.createTexture({
			label: "FFT Wave Packed (Dx + iDy, Dz + iDxdz) Amplitude",
			format: FFT_IO_TEXTURE_FORMAT,
			size: textureGridSize,
			usage:
				GPUTextureUsage.STORAGE_BINDING |
				GPUTextureUsage.TEXTURE_BINDING |
				GPUTextureUsage.COPY_SRC,
		});
		const packed_Dydx_plus_iDydz_Dxdx_plus_iDzdz_Amplitude =
			device.createTexture({
				label: "FFT Wave Packed (Dydx + iDydz, Dxdx + iDzdz) Amplitude",
				format: packed_Dx_plus_iDy_Dz_iDxdz_Amplitude.format,
				size: textureGridSize,
				usage: packed_Dx_plus_iDy_Dz_iDxdz_Amplitude.usage,
			});

		const realizedAmplitudeGroup0 = device.createBindGroup({
			label: "FFT Wave Realized Fourier Amplitude h(k,t) Group 0",
			layout: this.realizedAmplitudeKernel.getBindGroupLayout(0),
			entries: [
				{
					binding: 0,
					resource:
						packed_Dx_plus_iDy_Dz_iDxdz_Amplitude.createView(),
				},
				{
					binding: 1,
					resource:
						packed_Dydx_plus_iDydz_Dxdx_plus_iDzdz_Amplitude.createView(),
				},
				{
					binding: 2,
					resource: initialAmplitude.createView(),
				},
			],
		});

		const realizedAmplitudeGroup1 = device.createBindGroup({
			label: "FFT Wave Realized Fourier Amplitude h(k,t) Group 1",
			layout: this.realizedAmplitudeKernel.getBindGroupLayout(1),
			entries: [
				{
					binding: 0,
					resource: { buffer: globalUBO.buffer },
				},
				{
					binding: 1,
					resource: { buffer: waveSettings.buffer },
				},
			],
		});

		return {
			gaussianNoise: gaussianNoise,
			initialAmplitude: initialAmplitude,
			waveSettings: waveSettings,
			initialAmplitudeGroup0: initialAmplitudeGroup0,
			initialAmplitudeGroup1: initialAmplitudeGroup1,
			packed_Dx_plus_iDy_Dz_iDxdz_Amplitude:
				packed_Dx_plus_iDy_Dz_iDxdz_Amplitude,
			packed_Dydx_plus_iDydz_Dxdx_plus_iDzdz_Amplitude:
				packed_Dydx_plus_iDydz_Dxdx_plus_iDzdz_Amplitude,
			realizedAmplitudeGroup0: realizedAmplitudeGroup0,
			realizedAmplitudeGroup1: realizedAmplitudeGroup1,
		} satisfies FFTWaveCascade;
	}

	constructor(device: GPUDevice, globalUBO: GlobalUBO) {
		this.gridSize = GRID_SIZE;

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

		this.dfftResources = new DFFTResources(device, LOG_2_GRID_SIZE);

		const shaderModule = device.createShaderModule({
			label: "FFT Wave",
			code: FourierWavesShaderPak,
		});

		this.initialAmplitudeKernel = device.createComputePipeline({
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

		this.mipMapGenerator = new MipMapGenerationPassResources(device);

		const realizedAmplitudeGroup0Layout = device.createBindGroupLayout({
			label: "FFT Wave Realized Fourier Amplitude h(k,t) Group 0",
			entries: [
				{
					binding: 0,
					visibility: GPUShaderStage.COMPUTE,
					storageTexture: {
						format: FFT_IO_TEXTURE_FORMAT,
						access: "write-only",
					},
				},
				{
					binding: 1,
					visibility: GPUShaderStage.COMPUTE,
					storageTexture: {
						format: FFT_IO_TEXTURE_FORMAT,
						access: "write-only",
					},
				},
				{
					binding: 2,
					visibility: GPUShaderStage.COMPUTE,
					storageTexture: {
						format: INITIAL_AMPLITUDE_FORMAT,
						access: "read-only",
					},
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

		this.realizedAmplitudeKernel = device.createComputePipeline({
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

		const accumulateTurbulenceGroup0Layout = device.createBindGroupLayout({
			label: "FFT Wave Accumulate Turbulence Group 0",
			entries: [
				{
					binding: 0,
					visibility: GPUShaderStage.COMPUTE,
					storageTexture: {
						viewDimension: "2d-array",
						format: TURBULENCE_JACOBIAN_FORMAT,
					},
				},
				{
					binding: 1,
					visibility: GPUShaderStage.COMPUTE,
					texture: {
						viewDimension: "2d-array",
						sampleType: "unfilterable-float",
					},
				},
				{
					binding: 2,
					visibility: GPUShaderStage.COMPUTE,
					texture: {
						viewDimension: "2d-array",
						sampleType: "unfilterable-float",
					},
				},
				{
					binding: 3,
					visibility: GPUShaderStage.COMPUTE,
					texture: {
						viewDimension: "2d-array",
						sampleType: "unfilterable-float",
					},
				},
				{
					binding: 4,
					visibility: GPUShaderStage.COMPUTE,
					buffer: { type: "uniform" },
				},
			],
		});

		this.accumulateTurbulenceKernel = device.createComputePipeline({
			label: "FFT Wave Accumulate Turbulence",
			layout: device.createPipelineLayout({
				label: "FFT Wave Accumulate Turbulence",
				bindGroupLayouts: [accumulateTurbulenceGroup0Layout],
			}),
			compute: {
				module: shaderModule,
				entryPoint: "accumulateTurbulence",
			},
		});

		function nyquistWaveNumber(spatialSampleDistance: number) {
			const wavelength = 2.0 * spatialSampleDistance;
			return (2.0 * Math.PI) / wavelength;
		}

		const WAVE_PATCH_SIZES = [200.0, 50.0, 10.0];
		const WAVE_NUMBER_FENCE_POSTS: number[] = [
			0.001,
			...WAVE_PATCH_SIZES.map((value) =>
				nyquistWaveNumber(value / this.gridSize)
			),
			1000.0,
		];

		const CASCADE_PARAMETERS: {
			patchExtentMeters: number;
			waveNumberMinMax: [number, number];
		}[] = WAVE_PATCH_SIZES.map((value, index) => {
			return {
				patchExtentMeters: value,
				waveNumberMinMax: [
					WAVE_NUMBER_FENCE_POSTS[index],
					WAVE_NUMBER_FENCE_POSTS[index + 1],
				],
			};
		});

		const CASCADE_COUNT = CASCADE_PARAMETERS.length;
		this.Dx_Dy_Dz_Dxdz_SpatialArray = device.createTexture({
			label: "FFT Wave Final Displacement Array",
			format: DISPLACEMENT_FORMAT,
			dimension: "2d",
			size: {
				width: this.gridSize,
				height: this.gridSize,
				depthOrArrayLayers: CASCADE_COUNT,
			},
			mipLevelCount: LOG_2_GRID_SIZE,
			usage:
				GPUTextureUsage.STORAGE_BINDING |
				GPUTextureUsage.TEXTURE_BINDING |
				GPUTextureUsage.COPY_SRC |
				GPUTextureUsage.COPY_DST,
		});
		this.Dydx_Dydz_Dxdx_Dzdz_SpatialArray = device.createTexture({
			label: "FFT Wave Final Derivatives Array",
			format: this.Dx_Dy_Dz_Dxdz_SpatialArray.format,
			size: {
				width: this.Dx_Dy_Dz_Dxdz_SpatialArray.width,
				height: this.Dx_Dy_Dz_Dxdz_SpatialArray.height,
				depthOrArrayLayers:
					this.Dx_Dy_Dz_Dxdz_SpatialArray.depthOrArrayLayers,
			},
			mipLevelCount: this.Dx_Dy_Dz_Dxdz_SpatialArray.mipLevelCount,
			usage: this.Dx_Dy_Dz_Dxdz_SpatialArray.usage,
		});

		this.cascades = CASCADE_PARAMETERS.map((value) =>
			this.createCascade(
				device,
				globalUBO,
				value.patchExtentMeters,
				value.waveNumberMinMax
			)
		);

		// We need to fill rgba16float buffer with 1.0, there may be a better way
		const ONE_IN_FLOAT16_AS_UINT = 15360;
		const turbulenceJacobianInitialBuffer = new Uint16Array(
			this.Dx_Dy_Dz_Dxdz_SpatialArray.width *
				this.Dx_Dy_Dz_Dxdz_SpatialArray.height *
				this.Dx_Dy_Dz_Dxdz_SpatialArray.depthOrArrayLayers *
				4
		).fill(ONE_IN_FLOAT16_AS_UINT);

		this.turbulenceJacobianArrays = [0, 0]
			.map((_value, index) => {
				return device.createTexture({
					label: `FFT Wave (Turbulence,Jacobian) Array ${index}`,
					format: TURBULENCE_JACOBIAN_FORMAT,
					size: {
						width: this.Dx_Dy_Dz_Dxdz_SpatialArray.width,
						height: this.Dx_Dy_Dz_Dxdz_SpatialArray.height,
						depthOrArrayLayers:
							this.Dx_Dy_Dz_Dxdz_SpatialArray.depthOrArrayLayers,
					},
					mipLevelCount: LOG_2_GRID_SIZE,
					usage:
						GPUTextureUsage.STORAGE_BINDING | // write to
						GPUTextureUsage.TEXTURE_BINDING | // read from to accumulate turbulence
						GPUTextureUsage.COPY_SRC | // mip map generation
						GPUTextureUsage.COPY_DST, // initialize/wipe turbulence to 0
				});
			})
			.reduce<TurbulenceJacobianEntry[]>(
				(accumulatedEntries, texture, index, textures) => {
					device.queue.writeTexture(
						{ texture: texture },
						turbulenceJacobianInitialBuffer,
						{
							bytesPerRow:
								this.Dx_Dy_Dz_Dxdz_SpatialArray.width * 8,
							rowsPerImage:
								this.Dx_Dy_Dz_Dxdz_SpatialArray.height,
						},
						{
							width: this.Dx_Dy_Dz_Dxdz_SpatialArray.width,
							height: this.Dx_Dy_Dz_Dxdz_SpatialArray.height,
							depthOrArrayLayers:
								this.Dx_Dy_Dz_Dxdz_SpatialArray
									.depthOrArrayLayers,
						}
					);

					const bindGroup = device.createBindGroup({
						layout: this.accumulateTurbulenceKernel.getBindGroupLayout(
							0
						),
						entries: [
							{
								binding: 0,
								resource: texture.createView({
									mipLevelCount: 1,
								}),
							},
							{
								binding: 1,
								resource: textures[
									(index + 1) % textures.length
								].createView({}),
							},
							{
								binding: 2,
								resource:
									this.Dx_Dy_Dz_Dxdz_SpatialArray.createView(
										{}
									),
							},
							{
								binding: 3,
								resource:
									this.Dydx_Dydz_Dxdx_Dzdz_SpatialArray.createView(
										{}
									),
							},
							{
								binding: 4,
								resource: { buffer: globalUBO.buffer },
							},
						],
					});

					return accumulatedEntries.concat({
						textureArray: texture,
						bindGroup: bindGroup,
						mipMapBindings: this.mipMapGenerator.createBindGroups(
							device,
							texture
						),
					});
				},
				[]
			);

		this.Dx_Dy_Dz_Dxdz_SpatialArray_MipMapBindings =
			this.mipMapGenerator.createBindGroups(
				device,
				this.Dx_Dy_Dz_Dxdz_SpatialArray
			);
		this.Dydx_Dydz_Dxdx_Dzdz_SpatialArray_MipMapBindings =
			this.mipMapGenerator.createBindGroups(
				device,
				this.Dydx_Dydz_Dxdx_Dzdz_SpatialArray
			);

		this.waveSettings = {
			gravity: 0.0,
			waveSwell: 0.0,
			windFetchMeters: 0.0,
			windSpeedMetersPerSeconds: 0.0,
		};
	}

	/**
	 * Returns the views into all the FFT Wave textures, for read-only display purposes.
	 *
	 * @return {*}  {FFTWaveSpectrumResourcesViews}
	 * @memberof FFTWaveSpectrumResources
	 */
	views(): FFTWaveSpectrumRenderables {
		const cascade = this.cascades[0];

		return {
			gaussianNoise: new RenderOutputTexture(cascade.gaussianNoise),
			initialAmplitude: new RenderOutputTexture(cascade.initialAmplitude),
			packed_Dx_plus_iDy_Dz_iDxdz_Amplitude: new RenderOutputTexture(
				cascade.packed_Dx_plus_iDy_Dz_iDxdz_Amplitude
			),
			packed_Dydx_plus_iDydz_Dxdx_plus_iDzdz_Amplitude:
				new RenderOutputTexture(
					cascade.packed_Dydx_plus_iDydz_Dxdx_plus_iDzdz_Amplitude
				),
			turbulenceJacobian: new RenderOutputTexture(
				this.turbulenceJacobianArrays[0].textureArray
			),
			Dx_Dy_Dz_Dxdz_Spatial: new RenderOutputTexture(
				this.Dx_Dy_Dz_Dxdz_SpatialArray
			),
			Dydx_Dydz_Dxdx_Dzdz_Spatial: new RenderOutputTexture(
				this.Dydx_Dydz_Dxdx_Dzdz_SpatialArray
			),
		};
	}

	displacementMaps(): FFTWaveDisplacementMaps {
		return new FFTWaveDisplacementMaps(
			this.Dx_Dy_Dz_Dxdz_SpatialArray,
			this.Dydx_Dydz_Dxdx_Dzdz_SpatialArray,
			this.turbulenceJacobianArrays.map((value) => value.textureArray)
		);
	}

	record(
		device: GPUDevice,
		commandEncoder: GPUCommandEncoder,
		settings: FFTWavesSettings,
		timestampInterval: TimestampQueryInterval | undefined
	) {
		const settingsChanged =
			settings.gravity != this.waveSettings.gravity ||
			settings.waveSwell != this.waveSettings.waveSwell ||
			settings.windSpeedMetersPerSeconds !=
				this.waveSettings.windSpeedMetersPerSeconds ||
			settings.windFetchMeters != this.waveSettings.windFetchMeters;

		if (settingsChanged) {
			this.waveSettings = structuredClone(settings);
			const passEncoder = commandEncoder.beginComputePass({
				label: "FFT Wave Initial Amplitude",
			});

			this.cascades.forEach((cascade) => {
				cascade.waveSettings.data.wave_swell =
					this.waveSettings.waveSwell;
				cascade.waveSettings.data.wind_fetch_meters =
					this.waveSettings.windFetchMeters;
				cascade.waveSettings.data.wind_speed_meters_per_second =
					this.waveSettings.windSpeedMetersPerSeconds;
				cascade.waveSettings.data.gravity = this.waveSettings.gravity;

				cascade.waveSettings.writeToGPU(device.queue);

				passEncoder.setPipeline(this.initialAmplitudeKernel);
				passEncoder.setBindGroup(0, cascade.initialAmplitudeGroup0);
				passEncoder.setBindGroup(1, cascade.initialAmplitudeGroup1);

				const dispatchSize = {
					width: cascade.initialAmplitude.width,
					height: cascade.initialAmplitude.height,
					depth: cascade.initialAmplitude.depthOrArrayLayers,
				};

				passEncoder.dispatchWorkgroups(
					dispatchSize.width / 16,
					dispatchSize.height / 16,
					dispatchSize.depth / 1
				);
			});

			passEncoder.end();
		}

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
		this.cascades.forEach((cascade) => {
			realizePassEncoder.setPipeline(this.realizedAmplitudeKernel);
			realizePassEncoder.setBindGroup(0, cascade.realizedAmplitudeGroup0);
			realizePassEncoder.setBindGroup(1, cascade.realizedAmplitudeGroup1);

			const workgroupCounts = {
				width: cascade.packed_Dx_plus_iDy_Dz_iDxdz_Amplitude.width,
				height: cascade.packed_Dx_plus_iDy_Dz_iDxdz_Amplitude.height,
				depth: 1,
			};

			realizePassEncoder.dispatchWorkgroups(
				workgroupCounts.width / 16,
				workgroupCounts.height / 16,
				workgroupCounts.depth / 1
			);
		});

		realizePassEncoder.end();

		this.cascades.forEach((cascade, index) => {
			this.dfftResources.recordPerform(
				device,
				commandEncoder,
				cascade.packed_Dx_plus_iDy_Dz_iDxdz_Amplitude,
				this.Dx_Dy_Dz_Dxdz_SpatialArray,
				index,
				true,
				undefined
			);
			this.dfftResources.recordPerform(
				device,
				commandEncoder,
				cascade.packed_Dydx_plus_iDydz_Dxdx_plus_iDzdz_Amplitude,
				this.Dydx_Dydz_Dxdx_Dzdz_SpatialArray,
				index,
				true,
				undefined
			);
		});

		const accumulateTurbulencePass = commandEncoder.beginComputePass({
			label: "Turbulence Accumulation",
		});
		accumulateTurbulencePass.setPipeline(this.accumulateTurbulenceKernel);
		accumulateTurbulencePass.setBindGroup(
			0,
			this.turbulenceJacobianArrays[this.turbulenceJacobianIndex]
				.bindGroup
		);

		accumulateTurbulencePass.dispatchWorkgroups(
			this.gridSize / 16,
			this.gridSize / 16
		);

		accumulateTurbulencePass.end();

		const fillMipMapsPass = commandEncoder.beginComputePass({
			label: `MipMap Generation`,
			timestampWrites:
				timestampInterval !== undefined
					? {
							querySet: timestampInterval.querySet,
							endOfPassWriteIndex:
								timestampInterval.endWriteIndex,
					  }
					: undefined,
		});

		this.mipMapGenerator.updateMipMaps(
			fillMipMapsPass,
			this.Dx_Dy_Dz_Dxdz_SpatialArray_MipMapBindings
		);
		this.mipMapGenerator.updateMipMaps(
			fillMipMapsPass,
			this.Dydx_Dydz_Dxdx_Dzdz_SpatialArray_MipMapBindings
		);

		this.mipMapGenerator.updateMipMaps(
			fillMipMapsPass,
			this.turbulenceJacobianArrays[this.turbulenceJacobianIndex]
				.mipMapBindings
		);
		this.turbulenceJacobianIndex += 1;
		this.turbulenceJacobianIndex %= this.turbulenceJacobianArrays.length;

		fillMipMapsPass.end();
	}
}
