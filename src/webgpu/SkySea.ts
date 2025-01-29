import TransmittanceLUTPak from "../shaders/sky-sea/transmittance_LUT.wgsl";
import MultiscatterLUTPak from "../shaders/sky-sea/multiscatter_LUT.wgsl";
import SkyViewLUTPak from "../shaders/sky-sea/skyview_LUT.wgsl";
import AtmosphereCameraPak from "../shaders/sky-sea/atmosphere_camera.wgsl";
import FullscreenQuadPak from "../shaders/sky-sea/fullscreen_quad.wgsl";
import WaveSurfaceDisplacementPak from "../shaders/sky-sea/wave_surface_displacement.wgsl";

import { Controller as LilController, GUI as LilGUI } from "lil-gui";
import { RendererApp, RendererAppConstructor } from "./RendererApp";
import { mat4, vec2, Vec2, vec3, vec4 } from "wgpu-matrix";
import {
	FullscreenQuadUBO,
	FullscreenQuadUBOData,
	GlobalUBO,
} from "./sky-sea/UBO";

const TRANSMITTANCE_LUT_EXTENT = { width: 2048, height: 1024 } as const;
const MULTISCATTER_LUT_EXTENT = { width: 1024, height: 1024 } as const;
const SKYVIEW_LUT_EXTENT = { width: 1024, height: 512 } as const;

const TRANSMITTANCE_LUT_FORMAT: GPUTextureFormat = "rgba32float";
const TRANSMITTANCE_LUT_SAMPLE_TYPE: GPUTextureSampleType = "float";

const MULTISCATTER_LUT_FORMAT: GPUTextureFormat = "rgba32float";
const MULTISCATTER_LUT_SAMPLE_TYPE: GPUTextureSampleType = "float";

const SKYVIEW_LUT_FORMAT: GPUTextureFormat = "rgba32float";
const SKYVIEW_LUT_SAMPLE_TYPE: GPUTextureSampleType = "float";

const GBUFFER_COLOR_FORMAT: GPUTextureFormat = "rgba16float";
const GBUFFER_COLOR_SAMPLE_TYPE: GPUTextureSampleType = "float";
const GBUFFER_DEPTH_FORMAT: GPUTextureFormat = "depth32float";

const GBUFFER_NORMAL_FORMAT: GPUTextureFormat = "rgba16float";
const GBUFFER_NORMAL_SAMPLE_TYPE: GPUTextureSampleType = "float";

const ATMOSPHERE_CAMERA_OUTPUT_TEXTURE_FORMAT: GPUTextureFormat = "rgba32float";

class Extent2D {
	width = 1;
	height = 1;
}

class GBuffer {
	colorWithDepthInAlpha: GPUTexture;
	colorWithDepthInAlphaView: GPUTextureView;

	normal: GPUTexture;
	normalView: GPUTextureView;

	// Depth used for graphics pipelines that render into the gbuffer
	depth: GPUTexture;
	depthView: GPUTextureView;

	// Keep both layout and group around for reuse across other pipelines

	// binding 0: color
	// binding 1: normal

	// texture_2d
	readGroupLayout: GPUBindGroupLayout;
	readGroup: GPUBindGroup;

	// texture_storage_2d
	writeGroupLayout: GPUBindGroupLayout;
	writeGroup: GPUBindGroup;

	constructor(device: GPUDevice, dimensions: Extent2D, old?: GBuffer) {
		this.colorWithDepthInAlpha = device.createTexture({
			size: dimensions,
			dimension: "2d",
			format: GBUFFER_COLOR_FORMAT,
			usage:
				GPUTextureUsage.STORAGE_BINDING |
				GPUTextureUsage.RENDER_ATTACHMENT |
				GPUTextureUsage.TEXTURE_BINDING,
			label: "GBuffer ColorWithDepthInAlpha",
		});
		this.colorWithDepthInAlphaView = this.colorWithDepthInAlpha.createView({
			label: "GBuffer ColorWithDepthInAlpha",
		});

		this.normal = device.createTexture({
			size: dimensions,
			dimension: "2d",
			format: GBUFFER_NORMAL_FORMAT,
			usage:
				GPUTextureUsage.STORAGE_BINDING |
				GPUTextureUsage.RENDER_ATTACHMENT |
				GPUTextureUsage.TEXTURE_BINDING,
			label: "GBuffer Normal",
		});
		this.normalView = this.normal.createView({ label: "GBuffer Normal" });

		this.readGroupLayout =
			old?.readGroupLayout ??
			device.createBindGroupLayout({
				entries: [
					{
						binding: 0,
						visibility:
							GPUShaderStage.COMPUTE | GPUShaderStage.FRAGMENT,
						texture: { sampleType: GBUFFER_COLOR_SAMPLE_TYPE },
					},
					{
						binding: 1,
						visibility:
							GPUShaderStage.COMPUTE | GPUShaderStage.FRAGMENT,
						texture: { sampleType: GBUFFER_NORMAL_SAMPLE_TYPE },
					},
				],
				label: "GBuffer Read Group Layout",
			});
		this.readGroup = device.createBindGroup({
			layout: this.readGroupLayout,
			entries: [
				{
					binding: 0,
					resource: this.colorWithDepthInAlphaView,
				},
				{
					binding: 1,
					resource: this.normalView,
				},
			],
			label: "GBuffer Read Group",
		});

		this.writeGroupLayout =
			old?.writeGroupLayout ??
			device.createBindGroupLayout({
				entries: [
					{
						binding: 0,
						visibility:
							GPUShaderStage.COMPUTE | GPUShaderStage.FRAGMENT,
						storageTexture: {
							access: "write-only",
							format: GBUFFER_COLOR_FORMAT,
						},
					},
					{
						binding: 1,
						visibility:
							GPUShaderStage.COMPUTE | GPUShaderStage.FRAGMENT,
						storageTexture: {
							access: "write-only",
							format: GBUFFER_NORMAL_FORMAT,
						},
					},
				],
				label: "GBuffer Write Group Layout",
			});
		this.writeGroup = device.createBindGroup({
			layout: this.writeGroupLayout,
			entries: [
				{
					binding: 0,
					resource: this.colorWithDepthInAlphaView,
				},
				{
					binding: 1,
					resource: this.normalView,
				},
			],
			label: "GBuffer Write Group",
		});

		this.depth = device.createTexture({
			size: dimensions,
			dimension: "2d",
			format: GBUFFER_DEPTH_FORMAT,
			usage:
				GPUTextureUsage.RENDER_ATTACHMENT |
				GPUTextureUsage.TEXTURE_BINDING,
			label: "GBuffer Depth",
		});
		this.depthView = this.depth.createView({ label: "GBuffer Depth" });
	}
}

class TransmittanceLUTPassResources {
	texture: GPUTexture;
	view: GPUTextureView;

	/*
		@group(0) @binding(0) var transmittance_lut: texture_storage_2d<rgba32float, write>;

		@group(1) @binding(0) var<uniform> u_global: GlobalUBO;
	*/
	group0: GPUBindGroup;
	group1: GPUBindGroup;

	pipeline: GPUComputePipeline;

	constructor(device: GPUDevice, dimensions: Extent2D, globalUBO: GlobalUBO) {
		this.texture = device.createTexture({
			size: dimensions,
			dimension: "2d",
			format: TRANSMITTANCE_LUT_FORMAT,
			usage:
				GPUTextureUsage.STORAGE_BINDING |
				GPUTextureUsage.TEXTURE_BINDING,
			label: "Transmittance LUT",
		});
		this.view = this.texture.createView({ label: "Transmittance LUT" });

		const bindGroup0Layout = device.createBindGroupLayout({
			entries: [
				{
					binding: 0,
					visibility: GPUShaderStage.COMPUTE,
					storageTexture: {
						access: "write-only",
						format: TRANSMITTANCE_LUT_FORMAT,
					},
				},
			],
			label: "Transmittance LUT Group 0",
		});

		this.group0 = device.createBindGroup({
			layout: bindGroup0Layout,
			entries: [
				{
					binding: 0,
					resource: this.view,
				},
			],
			label: "Transmittance LUT Group 0",
		});

		const bindGroup1Layout = device.createBindGroupLayout({
			entries: [
				{
					binding: 0,
					visibility: GPUShaderStage.COMPUTE,
					buffer: {},
				},
			],
			label: "Transmittance LUT Group 1",
		});

		this.group1 = device.createBindGroup({
			layout: bindGroup1Layout,
			entries: [
				{
					binding: 0,
					resource: { buffer: globalUBO.buffer },
				},
			],
			label: "Transmittance LUT Group 1",
		});

		const transmittanceLUTShaderModule = device.createShaderModule({
			code: TransmittanceLUTPak,
			label: "Transmittance LUT",
		});
		this.pipeline = device.createComputePipeline({
			compute: {
				module: transmittanceLUTShaderModule,
				entryPoint: "computeTransmittance",
			},
			layout: device.createPipelineLayout({
				bindGroupLayouts: [bindGroup0Layout, bindGroup1Layout],
			}),
			label: "Transmittance LUT",
		});
	}
}

class MultiscatterLUTPassResources {
	texture: GPUTexture;
	view: GPUTextureView;

	/*
		@group(0) @binding(0) var multiscatter_lut: texture_storage_2d<rgba32float, write>;
		@group(0) @binding(1) var lut_sampler: sampler;
		@group(0) @binding(2) var transmittance_lut: texture_2d<f32>;

		@group(1) @binding(0) var<uniform> u_global: GlobalUBO;
	*/
	group0: GPUBindGroup;
	group1: GPUBindGroup;

	pipeline: GPUComputePipeline;

	constructor(
		device: GPUDevice,
		dimensions: Extent2D,
		transmittanceLUT: GPUTextureView,
		globalUBO: GlobalUBO
	) {
		const label = "Multiscatter LUT";
		this.texture = device.createTexture({
			size: dimensions,
			dimension: "2d",
			format: MULTISCATTER_LUT_FORMAT,
			usage:
				GPUTextureUsage.STORAGE_BINDING |
				GPUTextureUsage.TEXTURE_BINDING,
			label: "Multiscatter LUT",
		});
		this.view = this.texture.createView({ label: label });

		const bindGroup0Layout = device.createBindGroupLayout({
			entries: [
				{
					binding: 0,
					visibility: GPUShaderStage.COMPUTE,
					storageTexture: {
						access: "write-only",
						format: MULTISCATTER_LUT_FORMAT,
					},
				},
				{
					binding: 1,
					visibility: GPUShaderStage.COMPUTE,
					sampler: { type: "filtering" },
				},
				{
					binding: 2,
					visibility: GPUShaderStage.COMPUTE,
					texture: { sampleType: TRANSMITTANCE_LUT_SAMPLE_TYPE },
				},
			],
			label: "Multiscatter LUT Group 0",
		});

		this.group0 = device.createBindGroup({
			layout: bindGroup0Layout,
			entries: [
				{
					binding: 0,
					resource: this.view,
				},
				{
					binding: 1,
					resource: device.createSampler({
						magFilter: "linear",
						minFilter: "linear",
					}),
				},
				{
					binding: 2,
					resource: transmittanceLUT,
				},
			],
			label: "Multiscatter LUT Group 0",
		});

		const bindGroup1Layout = device.createBindGroupLayout({
			entries: [
				{
					binding: 0,
					visibility: GPUShaderStage.COMPUTE,
					buffer: {},
				},
			],
			label: "Multiscatter LUT Group 1",
		});

		this.group1 = device.createBindGroup({
			layout: bindGroup1Layout,
			entries: [
				{
					binding: 0,
					resource: { buffer: globalUBO.buffer },
				},
			],
			label: "Multiscatter LUT Group 1",
		});

		const multiscatterLUTShaderModule = device.createShaderModule({
			code: MultiscatterLUTPak,
			label: label,
		});
		this.pipeline = device.createComputePipeline({
			compute: {
				module: multiscatterLUTShaderModule,
				entryPoint: "computeMultiscattering",
			},
			layout: device.createPipelineLayout({
				bindGroupLayouts: [bindGroup0Layout, bindGroup1Layout],
			}),
			label: "Multiscatter LUT",
		});
	}
}

class SkyViewLUTPassResources {
	texture: GPUTexture;
	view: GPUTextureView;

	/*
	@group(0) @binding(0) var skyview_lut: texture_storage_2d<rgba32float, write>;
	@group(0) @binding(1) var lut_sampler: sampler;
	@group(0) @binding(2) var transmittance_lut: texture_2d<f32>;
	@group(0) @binding(3) var multiscatter_lut: texture_2d<f32>;

	@group(1) @binding(0) var<uniform> u_global: GlobalUBO;
	*/
	group0: GPUBindGroup;
	group1: GPUBindGroup;

	pipeline: GPUComputePipeline;

	constructor(
		device: GPUDevice,
		dimensions: Extent2D,
		transmittanceLUT: GPUTextureView,
		multiscatterLUT: GPUTextureView,
		globalUBO: GlobalUBO
	) {
		this.texture = device.createTexture({
			size: dimensions,
			dimension: "2d",
			format: SKYVIEW_LUT_FORMAT,
			usage:
				GPUTextureUsage.STORAGE_BINDING |
				GPUTextureUsage.TEXTURE_BINDING,
			label: "Skyview LUT",
		});
		this.view = this.texture.createView({ label: "Skyview LUT" });

		const bindGroup0Layout = device.createBindGroupLayout({
			entries: [
				{
					binding: 0,
					visibility: GPUShaderStage.COMPUTE,
					storageTexture: {
						access: "write-only",
						format: SKYVIEW_LUT_FORMAT,
					},
				},
				{
					binding: 1,
					visibility: GPUShaderStage.COMPUTE,
					sampler: { type: "filtering" },
				},
				{
					binding: 2,
					visibility: GPUShaderStage.COMPUTE,
					texture: { sampleType: TRANSMITTANCE_LUT_SAMPLE_TYPE },
				},
				{
					binding: 3,
					visibility: GPUShaderStage.COMPUTE,
					texture: { sampleType: MULTISCATTER_LUT_SAMPLE_TYPE },
				},
			],
			label: "Skyview LUT",
		});

		this.group0 = device.createBindGroup({
			layout: bindGroup0Layout,
			entries: [
				{
					binding: 0,
					resource: this.view,
				},
				{
					binding: 1,
					resource: device.createSampler({
						magFilter: "linear",
						minFilter: "linear",
					}),
				},
				{
					binding: 2,
					resource: transmittanceLUT,
				},
				{
					binding: 3,
					resource: multiscatterLUT,
				},
			],
			label: "Skyview LUT Group 0",
		});

		const bindGroup1Layout = device.createBindGroupLayout({
			entries: [
				{
					binding: 0,
					visibility: GPUShaderStage.COMPUTE,
					buffer: {},
				},
			],
			label: "Skyview LUT Group 1",
		});

		this.group1 = device.createBindGroup({
			layout: bindGroup1Layout,
			entries: [
				{
					binding: 0,
					resource: { buffer: globalUBO.buffer },
				},
			],
			label: "Skyview LUT Group 1",
		});

		const skyviewLUTShaderModule = device.createShaderModule({
			code: SkyViewLUTPak,
		});

		this.pipeline = device.createComputePipeline({
			compute: {
				module: skyviewLUTShaderModule,
				entryPoint: "computeSkyViewLuminance",
			},
			layout: device.createPipelineLayout({
				bindGroupLayouts: [bindGroup0Layout, bindGroup1Layout],
			}),
			label: "Skyview LUT",
		});
	}
}

class FFTWaveSpectrumResources {
	// We produce a discrete spectrum of waves, for which the various values will be stored in square textures
	// This dimension determines the diameter of that square, so the total number of frequencies we produce
	// Our spectrum is discrete so we can apply an IDFT algorithm to determine the displacement when rendering the sums of these waves
	// (x,z) position in this grid uniquely identifies a wave with wave vector k = (k_x,k_z)
	spectrumDimension: number;

	// A two-channel texture of pairs of gaussian random variables, used to generate the amplitudes of our waves
	gaussianNoise: GPUTexture;
	gaussianNoiseView: GPUTextureView;

	constructor(device: GPUDevice) {
		const GAUSSIAN_NOISE_FORMAT: GPUTextureFormat = "rg32float";
		const SPECTRUM_DIMENSION = 2048;

		this.spectrumDimension = SPECTRUM_DIMENSION;
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
			// Box-Muller transform two uniform random numbers to gaussian pair
			// https://en.wikipedia.org/wiki/Box%E2%80%93Muller_transform
			const u_0 = Math.random();
			const u_1 = Math.random();

			const amplitude = Math.sqrt(-2.0 * Math.log(u_0));
			const theta = 2.0 * Math.PI * u_1;

			// We cannot use both gaussians in the pair since they are dependent
			// It may be possible to use the second far away in the texture, but this is a single texture generated
			// on the CPU so it is not a bottleneck
			const z_0 = amplitude * Math.cos(theta);
			// const z_1 = amplitude * Math.sin(theta);

			randomNumbers[i] = z_0;
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
	}
}

// Holds a compute pass for computing the displacement of a bunch of vertices,
// then a graphics pass for rasterizing these vertices
class WaveSurfaceDisplacementPassResources {
	/*
		@group(0) @binding(0) var<storage, read_write> output_vertices: array<vec4<f32>, VERTEX_COUNT>;
		@group(0) @binding(1) var<storage, read_write> output_world_normals: array<vec4<f32>, VERTEX_COUNT>;
		@group(0) @binding(2) var<uniform> waves: array<PlaneWave, WAVE_COUNT>;

		@group(1) @binding(0) var<uniform> u_global: GlobalUBO;
		*/
	group0Compute: GPUBindGroup;

	/*
		@group(0) @binding(0) var<storage> vertices: array<vec4<f32>, VERTEX_COUNT>;
		@group(0) @binding(1) var<storage> world_normals: array<vec4<f32>, VERTEX_COUNT>;

		@group(1) @binding(0) var<uniform> u_global: GlobalUBO;
		*/
	group0Graphics: GPUBindGroup;

	group1: GPUBindGroup;

	vertices: GPUBuffer;
	worldNormals: GPUBuffer;
	indices: GPUBuffer;

	displacementCosinePipeline: GPUComputePipeline;
	displacementGerstnerPipeline: GPUComputePipeline;

	surfaceRasterizationPipeline: GPURenderPipeline;

	constructor(device: GPUDevice, globalUBO: GlobalUBO) {
		// Grid of vertices + extra quad for ocean horizon

		// vec4<f32>
		const VERTEX_SIZE_BYTES = 4 * 4;
		const VERTEX_DIMENSION = 2048;
		const VERTEX_COUNT = VERTEX_DIMENSION * VERTEX_DIMENSION;

		// u32
		const INDEX_SIZE_BYTES = 4;
		const TRIANGLE_COUNT =
			2 * (VERTEX_DIMENSION - 1) * (VERTEX_DIMENSION - 1);
		const INDEX_COUNT = 3 * TRIANGLE_COUNT;

		this.vertices = device.createBuffer({
			size: VERTEX_SIZE_BYTES * VERTEX_COUNT,
			usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.STORAGE,
			label: "Wave Surface Displacement Vertices",
		});
		this.worldNormals = device.createBuffer({
			size: VERTEX_SIZE_BYTES * VERTEX_COUNT,
			usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.STORAGE,
			label: "Wave Surface Displacement Normals",
		});

		this.indices = device.createBuffer({
			size: INDEX_COUNT * INDEX_SIZE_BYTES,
			usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.INDEX,
			label: "Wave Surface Displacement Indices",
		});

		// Could use instancing instead of duplicating the indices, since these are all a bunch of quads
		const indicesSource = new Uint32Array(INDEX_COUNT);
		let indicesSourceOffset = 0;
		for (let y = 0; y < VERTEX_DIMENSION - 1; y++) {
			for (let x = 0; x < VERTEX_DIMENSION - 1; x++) {
				// Looking at the grid from above we have 4 indices per cell of adjacent vertices
				// y 2 3
				// | 0 1
				// ----x

				const index0 = x + y * VERTEX_DIMENSION;
				const index1 = index0 + 1;
				const index2 = index0 + VERTEX_DIMENSION;
				const index3 = index2 + 1;

				const twoTriangleIndices = new Uint32Array([
					index0,
					index2,
					index1,
					index1,
					index2,
					index3,
				]);
				indicesSource.set(twoTriangleIndices, indicesSourceOffset);
				indicesSourceOffset += twoTriangleIndices.length;
			}
		}
		device.queue.writeBuffer(this.indices, 0, indicesSource);

		const WAVE_COUNT = 6;
		const WAVE_SIZE_FLOATS = 4;
		const WAVE_SIZE_BYTES = 4 * WAVE_SIZE_FLOATS;
		const waves = device.createBuffer({
			size: WAVE_COUNT * WAVE_SIZE_BYTES,
			usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.UNIFORM,
			label: "Wave Surface Displacement Waves",
		});

		// We ensure that the waves can loop, and determine this loop period
		// To ensure this, the phase speeds must be an integer ratio
		// Our model uses the dispersion relationship for deep ocean waves:
		// c := wave speed
		// g := gravity = 9.8
		// k := wave number = wavelength / 2pi
		// T := period in seconds
		//
		// c = sqrt(g * k) = sqrt(g * wavelength / 2pi)
		// T = wavelength / c = sqrt(wavelength * 2pi / g)
		//
		// Thus we pick some base largest wavelength to determine the animation period
		// Then, all smaller periods must be T/n for some integer n.
		// So all smaller wavelengths are wavelength / n^2 for some integer n.
		//
		// Note: we do not actually need to render the largest wave, this just ensures that the periods work out.

		const gravity = 9.8;
		const animationPeriod = 60.0;
		// ~5615 meter wavelength
		const baseWavelength =
			(animationPeriod * animationPeriod * gravity) / (2.0 * Math.PI);

		// Mirrors GPU structure size and alignment
		interface PlaneWave {
			direction: Vec2;
			amplitude: number;
			wavelength: number;
		}

		// Arbitrarily picked wavelengths/directions/amplitudes
		// Loops may occur but I did not see any with these parameters
		const wavesSource = new Array<PlaneWave>(
			{
				direction: vec2.create(1.0, 2.0),
				amplitude: 0.75,
				wavelength: baseWavelength / (16.0 * 16.0),
			},
			{
				direction: vec2.create(1.2, 2.0),
				amplitude: 0.75,
				wavelength: baseWavelength / (14.0 * 14.0),
			},
			{
				direction: vec2.create(0.8, 2.0),
				amplitude: 0.75,
				wavelength: baseWavelength / (12.0 * 12.0),
			},
			{
				direction: vec2.create(1.25, 2.0),
				amplitude: 0.75,
				wavelength: baseWavelength / (16.0 * 16.0),
			},
			{
				direction: vec2.create(-2.0, 1.0),
				amplitude: 0.1,
				wavelength: baseWavelength / (19.0 * 19.0),
			},
			{
				direction: vec2.create(0.0, 1.0),
				amplitude: 0.1,
				wavelength: baseWavelength / (19.0 * 19.0),
			}
		);
		const wavesFloats = new Float32Array(WAVE_COUNT * WAVE_SIZE_FLOATS);
		let wavesFloatsIndex = 0;
		wavesSource.forEach((value) => {
			wavesFloats.set(value.direction, wavesFloatsIndex);
			wavesFloats[wavesFloatsIndex + 2] = value.amplitude;
			wavesFloats[wavesFloatsIndex + 3] = value.wavelength;
			wavesFloatsIndex += 4;
		});
		device.queue.writeBuffer(waves, 0, wavesFloats);

		const group0LayoutCompute = device.createBindGroupLayout({
			entries: [
				{
					binding: 0,
					visibility: GPUShaderStage.COMPUTE,
					buffer: { type: "storage" },
				},
				{
					binding: 1,
					visibility: GPUShaderStage.COMPUTE,
					buffer: { type: "storage" },
				},
				{
					binding: 2,
					visibility: GPUShaderStage.COMPUTE,
					buffer: { type: "uniform" },
				},
			],
			label: "Wave Surface Displacement Group 0 Compute",
		});

		this.group0Compute = device.createBindGroup({
			layout: group0LayoutCompute,
			entries: [
				{ binding: 0, resource: { buffer: this.vertices } },
				{ binding: 1, resource: { buffer: this.worldNormals } },
				{ binding: 2, resource: { buffer: waves } },
			],
			label: "Wave Surface Displacement Group 0 Compute",
		});

		const group0LayoutGraphics = device.createBindGroupLayout({
			entries: [
				{
					binding: 0,
					visibility: GPUShaderStage.VERTEX,
					buffer: { type: "read-only-storage" },
				},
				{
					binding: 1,
					visibility: GPUShaderStage.VERTEX,
					buffer: { type: "read-only-storage" },
				},
			],
			label: "Wave Surface Displacement Group 0 Graphics",
		});

		this.group0Graphics = device.createBindGroup({
			layout: group0LayoutGraphics,
			entries: [
				{ binding: 0, resource: { buffer: this.vertices } },
				{ binding: 1, resource: { buffer: this.worldNormals } },
			],
			label: "Wave Surface Displacement Group 0 Graphics",
		});

		const group1Layout = device.createBindGroupLayout({
			entries: [
				{
					binding: 0,
					visibility: GPUShaderStage.VERTEX | GPUShaderStage.COMPUTE,
					buffer: {},
				},
			],
			label: "Wave Surface Displacement Group 1",
		});
		this.group1 = device.createBindGroup({
			layout: group1Layout,
			entries: [
				{
					binding: 0,
					resource: { buffer: globalUBO.buffer },
				},
			],
			label: "Wave Surface Displacement Group 1",
		});

		const shaderModule = device.createShaderModule({
			code: WaveSurfaceDisplacementPak,
			label: "Wave Surface Displacement",
		});

		this.displacementCosinePipeline = device.createComputePipeline({
			layout: device.createPipelineLayout({
				bindGroupLayouts: [group0LayoutCompute, group1Layout],
			}),
			compute: {
				module: shaderModule,
				entryPoint: "displaceVertices",
				constants: {
					0: 0,
				},
			},
			label: "Wave Surface Displacement Cosine Kernel",
		});
		this.displacementGerstnerPipeline = device.createComputePipeline({
			layout: device.createPipelineLayout({
				bindGroupLayouts: [group0LayoutCompute, group1Layout],
			}),
			compute: {
				module: shaderModule,
				entryPoint: "displaceVertices",
				constants: {
					0: 1,
				},
			},
			label: "Wave Surface Displacement Gerstner Kernel",
		});

		this.surfaceRasterizationPipeline = device.createRenderPipeline({
			layout: device.createPipelineLayout({
				bindGroupLayouts: [group0LayoutGraphics, group1Layout],
			}),
			vertex: {
				module: shaderModule,
				entryPoint: "rasterizationVertex",
			},
			fragment: {
				module: shaderModule,
				entryPoint: "rasterizationFragment",
				targets: [
					{ format: GBUFFER_COLOR_FORMAT },
					{ format: GBUFFER_NORMAL_FORMAT },
				],
			},
			primitive: {
				topology: "triangle-list",
				cullMode: "back",
				frontFace: "ccw",
			},
			depthStencil: {
				format: GBUFFER_DEPTH_FORMAT,
				depthWriteEnabled: true,
				depthCompare: "less",
			},
			label: "Wave Surface Displacement Surface Rasterization",
		});
	}
}

class AtmosphereCameraPassResources {
	/*
		@group(0) @binding(0) var output_color: texture_storage_2d<rgba32float, write>;
		@group(0) @binding(1) var lut_sampler: sampler;
		@group(0) @binding(2) var transmittance_lut: texture_2d<f32>;
		@group(0) @binding(3) var multiscatter_lut: texture_2d<f32>;
		@group(0) @binding(4) var skyview_lut: texture_2d<f32>;

		@group(1) @binding(0) var<uniform> u_global: GlobalUBO;

		@group(2) @binding(0) var gbuffer_color_with_depth_in_alpha: texture_2d<f32>;
		@group(2) @binding(1) var gbuffer_normal: texture_2d<f32>;
		*/
	group0Layout: GPUBindGroupLayout;
	group1Layout: GPUBindGroupLayout;

	group0: GPUBindGroup;
	group1: GPUBindGroup;

	outputColor: GPUTexture;
	outputColorView: GPUTextureView;

	pipeline: GPUComputePipeline;

	constructor(
		device: GPUDevice,
		gbufferReadGroupLayout: GPUBindGroupLayout,
		transmittanceLUTView: GPUTextureView,
		multiscatterLUTView: GPUTextureView,
		skyviewLUTView: GPUTextureView,
		globalUBO: GlobalUBO
	) {
		this.group0Layout = device.createBindGroupLayout({
			entries: [
				{
					// output texture
					binding: 0,
					visibility: GPUShaderStage.COMPUTE,
					storageTexture: {
						format: ATMOSPHERE_CAMERA_OUTPUT_TEXTURE_FORMAT,
					},
				},
				{
					// sampler for the LUTs
					binding: 1,
					visibility: GPUShaderStage.COMPUTE,
					sampler: { type: "filtering" },
				},
				{
					// transmittance
					binding: 2,
					visibility: GPUShaderStage.COMPUTE,
					texture: {
						sampleType: TRANSMITTANCE_LUT_SAMPLE_TYPE,
						viewDimension: "2d",
					},
				},
				{
					// multiscatter
					binding: 3,
					visibility: GPUShaderStage.COMPUTE,
					texture: {
						sampleType: MULTISCATTER_LUT_SAMPLE_TYPE,
						viewDimension: "2d",
					},
				},
				{
					// skyview
					binding: 4,
					visibility: GPUShaderStage.COMPUTE,
					texture: {
						sampleType: SKYVIEW_LUT_SAMPLE_TYPE,
						viewDimension: "2d",
					},
				},
			],
			label: "Atmosphere Camera Group 0",
		});
		this.group1Layout = device.createBindGroupLayout({
			entries: [
				{
					binding: 0,
					visibility: GPUShaderStage.COMPUTE,
					buffer: {},
				},
			],
			label: "Atmosphere Camera Group 1",
		});

		this.outputColor = device.createTexture({
			format: ATMOSPHERE_CAMERA_OUTPUT_TEXTURE_FORMAT,
			size: { width: 1, height: 1 },
			usage:
				GPUTextureUsage.STORAGE_BINDING |
				GPUTextureUsage.TEXTURE_BINDING,
			label: "Atmosphere Camera Output Color",
		});
		this.outputColorView = this.outputColor.createView();

		this.group0 = device.createBindGroup({
			layout: this.group0Layout,
			entries: [
				{
					binding: 0,
					resource: this.outputColorView,
				},
				{
					binding: 1,
					resource: device.createSampler({
						magFilter: "linear",
						minFilter: "linear",
					}),
				},
				{
					binding: 2,
					resource: transmittanceLUTView,
				},
				{
					binding: 3,
					resource: multiscatterLUTView,
				},
				{
					binding: 4,
					resource: skyviewLUTView,
				},
			],
			label: "Atmosphere Camera Group 0",
		});

		this.group1 = device.createBindGroup({
			layout: this.group1Layout,
			entries: [
				{
					binding: 0,
					resource: { buffer: globalUBO.buffer },
				},
			],
			label: "Atmosphere Camera Group 1",
		});

		const atmosphereCameraShaderModule = device.createShaderModule({
			code: AtmosphereCameraPak,
			label: "Atmosphere Camera",
		});
		this.pipeline = device.createComputePipeline({
			compute: {
				module: atmosphereCameraShaderModule,
				entryPoint: "renderCompositedAtmosphere",
			},
			layout: device.createPipelineLayout({
				bindGroupLayouts: [
					this.group0Layout,
					this.group1Layout,
					gbufferReadGroupLayout,
				],
			}),
			label: "Atmosphere Camera",
		});
	}
}

class FullscreenQuadPassResources {
	// keep layout for resetting textures when resizing them
	group0Layout: GPUBindGroupLayout;

	group0ByOutputTexture: Map<RenderOutput, GPUBindGroup>;
	group0Sampler: GPUSampler;

	uboDataByOutputTexture: Map<RenderOutput, FullscreenQuadUBOData>;
	ubo: FullscreenQuadUBO;

	group1: GPUBindGroup;

	pipeline: GPURenderPipeline;

	constructor(
		device: GPUDevice,
		textures: Map<RenderOutput, GPUTextureView>,
		outputFormat: GPUTextureFormat
	) {
		this.group0Layout = device.createBindGroupLayout({
			entries: [
				{
					binding: 0,
					visibility: GPUShaderStage.FRAGMENT,
					texture: { sampleType: "float" },
				},
				{
					binding: 1,
					visibility: GPUShaderStage.FRAGMENT,
					sampler: { type: "filtering" },
				},
			],
			label: "Fullscreen Quad Group 0",
		});

		this.group0ByOutputTexture = new Map<RenderOutput, GPUBindGroup>();
		this.uboDataByOutputTexture = new Map<
			RenderOutput,
			FullscreenQuadUBOData
		>();

		this.group0Sampler = device.createSampler({
			magFilter: "linear",
			minFilter: "linear",
		});

		textures.forEach((view, key) => {
			this.group0ByOutputTexture.set(
				key,
				device.createBindGroup({
					layout: this.group0Layout,
					entries: [
						{
							binding: 0,
							resource: view,
						},
						{
							binding: 1,
							resource: this.group0Sampler,
						},
					],
					label: `Fullscreen Quad Group 0 Texture '${key.toString()}'`,
				})
			);
			this.uboDataByOutputTexture.set(key, new FullscreenQuadUBOData());
		});

		this.ubo = new FullscreenQuadUBO(device);

		const group1Layout = device.createBindGroupLayout({
			entries: [
				{
					binding: 0,
					visibility: GPUShaderStage.FRAGMENT | GPUShaderStage.VERTEX,
					buffer: { type: "uniform" },
				},
			],
			label: "Fullscreen Quad Group 1",
		});
		this.group1 = device.createBindGroup({
			layout: group1Layout,
			entries: [
				{
					binding: 0,
					resource: { buffer: this.ubo.buffer },
				},
			],
		});

		const shaderModule = device.createShaderModule({
			code: FullscreenQuadPak,
			label: "Fullscreen Quad",
		});
		this.pipeline = device.createRenderPipeline({
			vertex: {
				module: shaderModule,
				entryPoint: "vertex_main",
			},
			fragment: {
				module: shaderModule,
				entryPoint: "fragment_main",
				targets: [
					{
						format: outputFormat,
					},
				],
			},
			primitive: {
				topology: "triangle-list",
				cullMode: "none",
				frontFace: "ccw",
			},
			layout: device.createPipelineLayout({
				bindGroupLayouts: [this.group0Layout, group1Layout],
			}),
			label: "Fullscreen Quad",
		});
	}

	rebuildOutputTextureBinding(
		device: GPUDevice,
		id: RenderOutput,
		view: GPUTextureView
	) {
		this.group0ByOutputTexture.set(
			id,
			device.createBindGroup({
				layout: this.group0Layout,
				entries: [
					{
						binding: 0,
						resource: view,
					},
					{
						binding: 1,
						resource: this.group0Sampler,
					},
				],
				label: `Fullscreen Quad Group 0 Texture '${id.toString()}'`,
			})
		);
	}
}

enum RenderOutput {
	SkyviewLUT,
	TransmittanceLUT,
	MultiscatterLUT,
	Scene,
	GBufferColor,
	GBufferNormal,
	FFTWaveSpectrumGaussianNoise,
}

class OutputTexturePostProcessSettings {
	flip = false;
	color_gain: {
		r: number;
		g: number;
		b: number;
	} = { r: 1.0, g: 1.0, b: 1.0 };
}

enum WaveModel {
	Cosine,
	Gerstner,
}

const RENDER_SCALES = [0.25, 0.3333, 0.5, 0.75, 1.0, 1.5, 2.0, 4.0];

enum FrametimeCategory {
	DrawToDraw,
	SkyviewLUT,
	OceanSurface,
	AtmosphereCamera,
	FullscreenQuad,
}

class ArithmeticSumArray {
	private values: number[];
	private sum = 0.0;
	private average_ = 0.0;
	// Count how many values are valid. Starts at zero, goes to values.length, and stays there. Necessary to keep runningSum valid before the buffer can be filled once.
	private count = 0;
	// Index into values of next value to write
	private index = 0;

	constructor(capacity: number) {
		this.values = new Array<number>(capacity).fill(0.0);
	}

	get average() {
		return this.average_;
	}

	public push(value: number) {
		if (this.index >= this.values.length) {
			this.index = 0;
		}
		if (this.index < this.count) {
			this.sum -= this.values[this.index];
		}
		this.values[this.index] = value;
		this.sum += value;
		this.count = Math.min(this.values.length, this.count + 1);
		this.average_ = this.sum / this.count;
		this.index += 1;
	}
}

class SkySeaApp implements RendererApp {
	transmittanceLUTPassResources: TransmittanceLUTPassResources;
	multiscatterLUTPassResources: MultiscatterLUTPassResources;
	skyviewLUTPassResources: SkyViewLUTPassResources;
	fftWaveSpectrumResources: FFTWaveSpectrumResources;
	waveSurfaceDisplacementPassResources: WaveSurfaceDisplacementPassResources;
	atmosphereCameraPassResources: AtmosphereCameraPassResources;
	fullscreenQuadPassResources: FullscreenQuadPassResources;

	gbuffer: GBuffer;
	scaledSize: Extent2D;
	rawSize: Extent2D;

	settings: {
		outputTexture: RenderOutput;
		oceanWaveModel: WaveModel;
		outputTextureSettings: Map<
			RenderOutput,
			OutputTexturePostProcessSettings
		>;
		currentOutputTextureSettings: OutputTexturePostProcessSettings;
		orbit: {
			timeHours: number;
			timeSpeedupFactor: number;
			reversed: boolean;
			paused: boolean;
			inclinationRadians: number;
			sunsetAzimuthRadians: number;
		};
		renderScale: number;
	};

	uiReadonly: {
		averageFPS: number;
		frametimeControllers: Map<FrametimeCategory, LilController>;
	};

	globalUBO: GlobalUBO;

	fullscreenQuadIndexBuffer: GPUBuffer;

	device: GPUDevice;
	presentFormat: GPUTextureFormat;
	quit = false;

	// undefined when 'timestamp-query' feature is disabled
	frametimeQuery:
		| {
				querySet: GPUQuerySet;
				// We cannot read directly from the buffer that WebGPU writes the timestamps to
				// So we use a copy operation, then an async mapping.
				// Since we cannot map until unmapping at the end of this async operation, we set a flag to avoid that until then.
				writeBuffer: GPUBuffer;
				readBuffer: GPUBuffer;
				mappingLock: boolean;
		  }
		| undefined;
	frametimeAverages: Map<FrametimeCategory, ArithmeticSumArray>;

	startTime: number;
	dummyFrameCounter: number;
	probationFrameCounter: number;
	targetFPS = 0.0;

	setupUI(gui: LilGUI) {
		const outputTextureController = gui
			.add(this.settings, "outputTexture", {
				Scene: RenderOutput.Scene,
				"Transmittance LUT": RenderOutput.TransmittanceLUT,
				"Multiscatter LUT": RenderOutput.MultiscatterLUT,
				"Skyview LUT": RenderOutput.SkyviewLUT,
				"GBuffer Color": RenderOutput.GBufferColor,
				"GBuffer Normal": RenderOutput.GBufferNormal,
				"Wave Spectrum Gaussian Noise":
					RenderOutput.FFTWaveSpectrumGaussianNoise,
			})
			.name("Render Output")
			.listen();
		gui.add(this.settings, "renderScale", RENDER_SCALES)
			.name("Render Resolution Scale")
			.decimals(1)
			.onFinishChange((_v: number) => {
				this.handleResize(this.rawSize.width, this.rawSize.height);
			})
			.listen();
		gui.add(this.uiReadonly, "averageFPS")
			.decimals(1)
			.disable()
			.name("Average FPS")
			.listen();

		gui.add(this.settings, "oceanWaveModel", {
			Cosine: WaveModel.Cosine,
			Gerstner: WaveModel.Gerstner,
		}).name("Ocean Wave Model");

		const sunFolder = gui.addFolder("Sun Parameters").open();

		sunFolder
			.add(this.settings.orbit, "timeHours")
			.min(0.0)
			.max(24.0)
			.name("Time in Hours")
			.listen();
		sunFolder
			.add(this.settings.orbit, "timeSpeedupFactor")
			.min(1.0)
			.max(50000)
			.step(1.0)
			.name("Time Multiplier");
		sunFolder.add(this.settings.orbit, "paused").name("Pause Sun");

		sunFolder
			.add(
				{
					fn: () => {
						this.settings.orbit.timeHours = this.settings.orbit
							.reversed
							? 18.0 + 0.5
							: 6.0 - 0.5;
					},
				},
				"fn"
			)
			.name("Skip to Sunrise");
		sunFolder
			.add(
				{
					fn: () => {
						this.settings.orbit.timeHours = this.settings.orbit
							.reversed
							? 6.0 + 0.5
							: 18.0 - 0.5;
					},
				},
				"fn"
			)
			.name("Skip to Sunset");

		sunFolder.add(this.settings.orbit, "reversed").name("Reverse Sun");
		sunFolder
			.add(this.settings.orbit, "sunsetAzimuthRadians")
			.name("Sun Azimuth")
			.min(0.0)
			.max(2.0 * Math.PI);
		sunFolder
			.add(this.settings.orbit, "inclinationRadians")
			.name("Sun Inclination")
			.min(0.0)
			.max(Math.PI);

		const outputTextureFolder = gui.addFolder("Output Transform").close();
		if (
			!this.fullscreenQuadPassResources.uboDataByOutputTexture.has(
				this.settings.outputTexture
			)
		) {
			outputTextureFolder.hide();
		}
		outputTextureFolder
			.add(this.settings.currentOutputTextureSettings, "flip")
			.name("Flip Image")
			.listen();
		outputTextureFolder
			.add({ gain: 0.0 }, "gain")
			.name("RGB")
			.min(0.0)
			.max(100.0)
			.onChange((v: number) => {
				this.settings.currentOutputTextureSettings.color_gain.r = v;
				this.settings.currentOutputTextureSettings.color_gain.g = v;
				this.settings.currentOutputTextureSettings.color_gain.b = v;
			});
		outputTextureFolder
			.add(this.settings.currentOutputTextureSettings.color_gain, "r")
			.name("R")
			.min(0.0)
			.max(100.0)
			.listen();
		outputTextureFolder
			.add(this.settings.currentOutputTextureSettings.color_gain, "g")
			.name("G")
			.min(0.0)
			.max(100.0)
			.listen();
		outputTextureFolder
			.add(this.settings.currentOutputTextureSettings.color_gain, "b")
			.name("B")
			.min(0.0)
			.max(100.0)
			.listen();
		outputTextureController.onChange((newValue: RenderOutput) => {
			const previousValue =
				outputTextureController._listenPrevValue as RenderOutput;

			if (!this.settings.outputTextureSettings.has(previousValue)) {
				this.settings.outputTextureSettings.set(
					previousValue,
					new OutputTexturePostProcessSettings()
				);
			}

			const oldSettings =
				this.settings.outputTextureSettings.get(previousValue)!;
			oldSettings.flip = this.settings.currentOutputTextureSettings.flip;
			Object.assign(
				oldSettings.color_gain,
				this.settings.currentOutputTextureSettings.color_gain
			);

			if (!this.settings.outputTextureSettings.has(newValue)) {
				this.settings.outputTextureSettings.set(
					newValue,
					new OutputTexturePostProcessSettings()
				);
			}

			const newSettings =
				this.settings.outputTextureSettings.get(newValue)!;
			this.settings.currentOutputTextureSettings.flip = newSettings.flip;
			Object.assign(
				this.settings.currentOutputTextureSettings.color_gain,
				newSettings.color_gain
			);
		});

		const performanceFolder = gui.addFolder("Performance").close();
		this.frametimeAverages.forEach((_value, category) => {
			this.uiReadonly.frametimeControllers.set(
				category,
				performanceFolder
					.add({ value: 0 }, "value")
					.name(`${FrametimeCategory[category]} (ms)`)
					.decimals(6)
					.disable()
			);
		});
	}

	constructor(
		device: GPUDevice,
		presentFormat: GPUTextureFormat,
		time: number
	) {
		this.device = device;
		this.presentFormat = presentFormat;
		this.startTime = time;
		this.settings = {
			outputTexture: RenderOutput.Scene,
			oceanWaveModel: WaveModel.Gerstner,
			outputTextureSettings: new Map<
				RenderOutput,
				OutputTexturePostProcessSettings
			>([
				[
					RenderOutput.Scene,
					{
						flip: false,
						color_gain: { r: 1.0, g: 1.0, b: 1.0 },
					},
				],
				[
					RenderOutput.TransmittanceLUT,
					{
						flip: true,
						color_gain: { r: 1.0, g: 1.0, b: 1.0 },
					},
				],
				[
					RenderOutput.MultiscatterLUT,
					{
						flip: true,
						color_gain: { r: 15.0, g: 15.0, b: 15.0 },
					},
				],
				[
					RenderOutput.SkyviewLUT,
					{
						flip: false,
						color_gain: { r: 8.0, g: 8.0, b: 8.0 },
					},
				],
				[
					RenderOutput.GBufferColor,
					{
						flip: false,
						color_gain: { r: 1.0, g: 1.0, b: 1.0 },
					},
				],
				[
					RenderOutput.GBufferNormal,
					{
						flip: false,
						color_gain: { r: 1.0, g: 1.0, b: 1.0 },
					},
				],
				[
					RenderOutput.FFTWaveSpectrumGaussianNoise,
					{
						flip: false,
						color_gain: { r: 1.0, g: 1.0, b: 1.0 },
					},
				],
			]),
			currentOutputTextureSettings: {
				flip: false,
				color_gain: {
					r: 1.0,
					g: 1.0,
					b: 1.0,
				},
			},
			orbit: {
				timeHours: 5.5,
				timeSpeedupFactor: 400.0,
				paused: false,
				reversed: false,
				inclinationRadians: Math.PI / 2,
				sunsetAzimuthRadians: 0.0,
			},
			renderScale: 1.5,
		};
		this.uiReadonly = {
			averageFPS: 0.0,
			frametimeControllers: new Map(),
		};
		this.scaledSize = { width: 1.0, height: 1.0 };
		this.rawSize = { width: 1.0, height: 1.0 };

		if (
			this.settings.outputTextureSettings.has(this.settings.outputTexture)
		) {
			const newSettings = this.settings.outputTextureSettings.get(
				this.settings.outputTexture
			)!;
			this.settings.currentOutputTextureSettings.flip = newSettings.flip;
			this.settings.currentOutputTextureSettings.color_gain.r =
				newSettings.color_gain.r;
			this.settings.currentOutputTextureSettings.color_gain.g =
				newSettings.color_gain.g;
			this.settings.currentOutputTextureSettings.color_gain.b =
				newSettings.color_gain.b;
		}

		this.frametimeAverages = new Map();
		if (device.features.has("timestamp-query")) {
			// Space for start & end for each step
			// webgpu timestamps are 64 bit nanoseconds
			const BYTES_PER_TIMESTAMP_SAMPLE = 8;
			const numberOfTimestamps =
				2 *
				Object.keys(FrametimeCategory)
					.map((v) => Number(v))
					.filter(isNaN).length;
			this.frametimeQuery = {
				mappingLock: false,
				querySet: device.createQuerySet({
					type: "timestamp",
					count: numberOfTimestamps,
				}),
				writeBuffer: device.createBuffer({
					size: BYTES_PER_TIMESTAMP_SAMPLE * numberOfTimestamps,
					usage:
						GPUBufferUsage.COPY_SRC | GPUBufferUsage.QUERY_RESOLVE,
				}),
				readBuffer: device.createBuffer({
					size: BYTES_PER_TIMESTAMP_SAMPLE * numberOfTimestamps,
					usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ,
				}),
			};
			Object.keys(FrametimeCategory)
				.map((v) => Number(v))
				.filter((v) => !isNaN(v))
				.forEach((index) => {
					const category = index as FrametimeCategory;
					this.frametimeAverages.set(
						category,
						new ArithmeticSumArray(400)
					);
					Object.assign(this.uiReadonly, String(category), 0.0);
				});
		} else {
			console.warn(
				"WebGPU feature 'timestamp-query' is not supported. Continuing, but without performance information about specific stages."
			);
			this.frametimeAverages.set(
				FrametimeCategory.DrawToDraw,
				new ArithmeticSumArray(400)
			);
		}

		this.dummyFrameCounter = 10.0;
		this.probationFrameCounter = 100.0;

		this.globalUBO = new GlobalUBO(device);
		this.globalUBO.writeToGPU(this.device);

		this.gbuffer = new GBuffer(device, { width: 1, height: 1 });

		this.transmittanceLUTPassResources = new TransmittanceLUTPassResources(
			this.device,
			TRANSMITTANCE_LUT_EXTENT,
			this.globalUBO
		);

		this.multiscatterLUTPassResources = new MultiscatterLUTPassResources(
			this.device,
			MULTISCATTER_LUT_EXTENT,
			this.transmittanceLUTPassResources.view,
			this.globalUBO
		);

		this.skyviewLUTPassResources = new SkyViewLUTPassResources(
			this.device,
			SKYVIEW_LUT_EXTENT,
			this.transmittanceLUTPassResources.view,
			this.multiscatterLUTPassResources.view,
			this.globalUBO
		);

		this.fftWaveSpectrumResources = new FFTWaveSpectrumResources(
			this.device
		);

		this.waveSurfaceDisplacementPassResources =
			new WaveSurfaceDisplacementPassResources(
				this.device,
				this.globalUBO
			);

		const fullscreenQuadIndices = new Uint32Array([0, 1, 2, 0, 2, 3]);
		this.fullscreenQuadIndexBuffer = device.createBuffer({
			size: fullscreenQuadIndices.byteLength,
			usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST,
		});
		device.queue.writeBuffer(
			this.fullscreenQuadIndexBuffer,
			0,
			fullscreenQuadIndices,
			0,
			fullscreenQuadIndices.length
		);

		this.atmosphereCameraPassResources = new AtmosphereCameraPassResources(
			this.device,
			this.gbuffer.readGroupLayout,
			this.transmittanceLUTPassResources.view,
			this.multiscatterLUTPassResources.view,
			this.skyviewLUTPassResources.view,
			this.globalUBO
		);

		this.fullscreenQuadPassResources = new FullscreenQuadPassResources(
			this.device,
			new Map<RenderOutput, GPUTextureView>([
				[
					RenderOutput.Scene,
					this.atmosphereCameraPassResources.outputColorView,
				],
				[
					RenderOutput.TransmittanceLUT,
					this.transmittanceLUTPassResources.view,
				],
				[
					RenderOutput.MultiscatterLUT,
					this.multiscatterLUTPassResources.view,
				],
				[RenderOutput.SkyviewLUT, this.skyviewLUTPassResources.view],
				[
					RenderOutput.GBufferColor,
					this.gbuffer.colorWithDepthInAlphaView,
				],
				[RenderOutput.GBufferNormal, this.gbuffer.normalView],
				[
					RenderOutput.FFTWaveSpectrumGaussianNoise,
					this.fftWaveSpectrumResources.gaussianNoiseView,
				],
			]),
			this.presentFormat
		);

		const commandEncoder = device.createCommandEncoder();

		let passEncoder = commandEncoder.beginComputePass();
		passEncoder.setPipeline(this.transmittanceLUTPassResources.pipeline);
		passEncoder.setBindGroup(0, this.transmittanceLUTPassResources.group0);
		passEncoder.setBindGroup(1, this.transmittanceLUTPassResources.group1);
		passEncoder.dispatchWorkgroups(
			Math.ceil(TRANSMITTANCE_LUT_EXTENT.width / 16),
			Math.ceil(TRANSMITTANCE_LUT_EXTENT.height / 16)
		);
		passEncoder.end();

		passEncoder = commandEncoder.beginComputePass();
		passEncoder.setPipeline(this.multiscatterLUTPassResources.pipeline);
		passEncoder.setBindGroup(0, this.multiscatterLUTPassResources.group0);
		passEncoder.setBindGroup(1, this.multiscatterLUTPassResources.group1);
		passEncoder.dispatchWorkgroups(
			Math.ceil(MULTISCATTER_LUT_EXTENT.width / 16),
			Math.ceil(MULTISCATTER_LUT_EXTENT.height / 16)
		);
		passEncoder.end();

		device.queue.submit([commandEncoder.finish()]);
	}

	updateOrbit(deltaTimeMilliseconds: number) {
		const orbit = this.settings.orbit;

		if (!this.settings.orbit.paused) {
			const HOURS_TO_MILLISECONDS = 60.0 * 60.0 * 1000.0;
			orbit.timeHours +=
				((orbit.reversed ? -1.0 : 1.0) *
					orbit.timeSpeedupFactor *
					deltaTimeMilliseconds) /
				HOURS_TO_MILLISECONDS;
			orbit.timeHours =
				orbit.timeHours - Math.floor(orbit.timeHours / 24.0) * 24.0;
		}

		// offset the time so that the app starts during the day
		const SUN_ROTATION_RAD_PER_HOUR = (2.0 * Math.PI) / 24.0;
		const SUN_ANOMALY =
			(12.0 - orbit.timeHours) * SUN_ROTATION_RAD_PER_HOUR;

		const sunsetDirection = vec3.create(
			-Math.sin(orbit.sunsetAzimuthRadians),
			0.0,
			Math.cos(orbit.sunsetAzimuthRadians)
		);
		const noonDirection = vec3.create(
			Math.cos(orbit.sunsetAzimuthRadians) *
				Math.cos(orbit.inclinationRadians),
			Math.sin(orbit.inclinationRadians),
			Math.sin(orbit.sunsetAzimuthRadians) *
				Math.cos(orbit.inclinationRadians)
		);
		const sunDirection = vec3.add(
			vec3.scale(sunsetDirection, Math.sin(SUN_ANOMALY)),
			vec3.scale(noonDirection, Math.cos(SUN_ANOMALY))
		);
		vec3.scale(sunDirection, -1.0, this.globalUBO.data.light.forward);
	}

	updateFPSValues(deltaTimeMilliseconds: number) {
		if (deltaTimeMilliseconds > 0.01) {
			this.frametimeAverages
				.get(FrametimeCategory.DrawToDraw)
				?.push(deltaTimeMilliseconds);
			this.uiReadonly.averageFPS =
				1000.0 /
				(this.frametimeAverages.get(FrametimeCategory.DrawToDraw)
					?.average ?? 1000.0);
			this.uiReadonly.frametimeControllers
				.get(FrametimeCategory.DrawToDraw)
				?.setValue(
					this.frametimeAverages.get(FrametimeCategory.DrawToDraw)
						?.average ?? -1.0
				);
		}
	}

	updateCamera(aspectRatio: number) {
		const fov = (60 * Math.PI) / 180;
		const near = 0.1;
		const far = 1000;
		const perspective = mat4.perspective(fov, aspectRatio, near, far);

		const camera_pos = [0, 10, -20];
		const view = mat4.lookAt(camera_pos, [0, 0, 400], [0, 1, 0]);

		Object.assign(this.globalUBO.data.camera, {
			invProj: mat4.inverse(perspective),
			invView: mat4.inverse(view),
			projView: mat4.mul(perspective, view),
			position: vec4.create(
				camera_pos[0],
				camera_pos[1],
				camera_pos[2],
				1.0
			),
		});
	}

	updateTime(deltaTimeMilliseconds: number) {
		const timeUBO = this.globalUBO.data.time;
		timeUBO.timeSeconds += deltaTimeMilliseconds / 1000.0;
		if (timeUBO.timeSeconds > 60.0) {
			timeUBO.timeSeconds = 0.0;
		}
	}

	draw(
		presentTexture: GPUTexture,
		aspectRatio: number,
		_timeMilliseconds: number,
		deltaTimeMilliseconds: number
	): void {
		// Workaround for firefox stalling causing time issues

		if (this.dummyFrameCounter > 0) {
			this.dummyFrameCounter -= 1;
			return;
		}
		const presentView = presentTexture.createView();

		this.updateFPSValues(deltaTimeMilliseconds);

		// Run some dummy frames to estimate monitor refresh and guess the best render scale to hit it
		if (this.probationFrameCounter > 49.0) {
			this.probationFrameCounter -= 1;

			if (this.probationFrameCounter < 50.0) {
				console.log(
					`Average FPS without load is ${this.uiReadonly.averageFPS}`
				);
				this.targetFPS = this.uiReadonly.averageFPS;
			}
			return;
		}
		if (this.probationFrameCounter > 0.0) {
			this.probationFrameCounter -= 1;
			if (this.probationFrameCounter < 1.0) {
				console.log(
					`Average FPS with load is ${this.uiReadonly.averageFPS}`
				);
				const exactScale = this.uiReadonly.averageFPS / this.targetFPS;
				this.settings.renderScale = RENDER_SCALES[0];
				RENDER_SCALES.forEach((scale) => {
					if (
						Math.abs(scale - exactScale) <
						Math.abs(this.settings.renderScale - exactScale)
					) {
						this.settings.renderScale = scale;
					}
				});
				this.handleResize(this.rawSize.width, this.rawSize.height);
			}
		}

		this.updateCamera(aspectRatio);
		this.updateTime(deltaTimeMilliseconds);
		this.updateOrbit(deltaTimeMilliseconds);

		this.globalUBO.writeToGPU(this.device);

		const clearColor = { r: 0.0, g: 0.0, b: 0.0, a: 1.0 };

		const commandEncoder = this.device.createCommandEncoder({
			label: "Main",
		});

		let timestampQueryIndex = 0;
		const timestampIndexMapping = new Map<FrametimeCategory, number>();
		timestampIndexMapping.set(
			FrametimeCategory.OceanSurface,
			timestampQueryIndex
		);

		switch (this.settings.oceanWaveModel) {
			case WaveModel.Cosine:
			case WaveModel.Gerstner: {
				const displacementPassEncoder = commandEncoder.beginComputePass(
					{
						label: "Wave Surface Mesh Displacement",
						timestampWrites:
							this.frametimeQuery !== undefined
								? {
										querySet: this.frametimeQuery.querySet,
										beginningOfPassWriteIndex:
											timestampQueryIndex++,
								  }
								: undefined,
					}
				);
				if (this.settings.oceanWaveModel == WaveModel.Cosine) {
					displacementPassEncoder.setPipeline(
						this.waveSurfaceDisplacementPassResources
							.displacementCosinePipeline
					);
				} else {
					displacementPassEncoder.setPipeline(
						this.waveSurfaceDisplacementPassResources
							.displacementGerstnerPipeline
					);
				}
				displacementPassEncoder.setBindGroup(
					0,
					this.waveSurfaceDisplacementPassResources.group0Compute
				);
				displacementPassEncoder.setBindGroup(
					1,
					this.waveSurfaceDisplacementPassResources.group1
				);
				displacementPassEncoder.dispatchWorkgroups(
					Math.ceil(2048 / 16),
					Math.ceil(2048 / 16)
				);
				displacementPassEncoder.end();

				const surfaceRasterizationPassEncoder =
					commandEncoder.beginRenderPass({
						label: "Wave Surface Rasterization",
						colorAttachments: [
							{
								clearValue: { r: 0.0, g: 0.0, b: 0.0, a: 0.0 },
								loadOp: "clear",
								storeOp: "store",
								view: this.gbuffer.colorWithDepthInAlphaView,
							},
							{
								clearValue: { r: 0.0, g: 0.0, b: 0.0, a: 0.0 },
								loadOp: "clear",
								storeOp: "store",
								view: this.gbuffer.normalView,
							},
						],
						depthStencilAttachment: {
							view: this.gbuffer.depthView,
							depthClearValue: 1.0,
							depthLoadOp: "clear",
							depthStoreOp: "store",
						},
						timestampWrites:
							this.frametimeQuery !== undefined
								? {
										querySet: this.frametimeQuery.querySet,
										endOfPassWriteIndex:
											timestampQueryIndex++,
								  }
								: undefined,
					});
				surfaceRasterizationPassEncoder.setPipeline(
					this.waveSurfaceDisplacementPassResources
						.surfaceRasterizationPipeline
				);
				surfaceRasterizationPassEncoder.setBindGroup(
					0,
					this.waveSurfaceDisplacementPassResources.group0Graphics
				);
				surfaceRasterizationPassEncoder.setBindGroup(
					1,
					this.waveSurfaceDisplacementPassResources.group1
				);
				surfaceRasterizationPassEncoder.setIndexBuffer(
					this.waveSurfaceDisplacementPassResources.indices,
					"uint32"
				);
				surfaceRasterizationPassEncoder.drawIndexed(
					this.waveSurfaceDisplacementPassResources.indices.size / 4
				);
				surfaceRasterizationPassEncoder.end();
				break;
			}
		}

		timestampIndexMapping.set(
			FrametimeCategory.SkyviewLUT,
			timestampQueryIndex
		);
		const skyviewLUTPassEncoder = commandEncoder.beginComputePass({
			timestampWrites:
				this.frametimeQuery !== undefined
					? {
							querySet: this.frametimeQuery.querySet,
							beginningOfPassWriteIndex: timestampQueryIndex++,
							endOfPassWriteIndex: timestampQueryIndex++,
					  }
					: undefined,
			label: "Skyview LUT",
		});
		skyviewLUTPassEncoder.setPipeline(
			this.skyviewLUTPassResources.pipeline
		);
		skyviewLUTPassEncoder.setBindGroup(
			0,
			this.skyviewLUTPassResources.group0
		);
		skyviewLUTPassEncoder.setBindGroup(
			1,
			this.skyviewLUTPassResources.group1
		);
		skyviewLUTPassEncoder.dispatchWorkgroups(
			Math.ceil(SKYVIEW_LUT_EXTENT.width / 16),
			// Trim lower half of skyview lut to save roughly half of the work. We render the ocean over the entirety and are at a lower altitude, so our use case is a bit specific
			Math.ceil(SKYVIEW_LUT_EXTENT.height / (16 * 1.9))
		);
		skyviewLUTPassEncoder.end();

		timestampIndexMapping.set(
			FrametimeCategory.AtmosphereCamera,
			timestampQueryIndex
		);
		const atmosphereCameraPassEncoder = commandEncoder.beginComputePass({
			timestampWrites:
				this.frametimeQuery !== undefined
					? {
							querySet: this.frametimeQuery.querySet,
							beginningOfPassWriteIndex: timestampQueryIndex++,
							endOfPassWriteIndex: timestampQueryIndex++,
					  }
					: undefined,
			label: "Atmosphere Camera",
		});
		atmosphereCameraPassEncoder.setPipeline(
			this.atmosphereCameraPassResources.pipeline
		);
		atmosphereCameraPassEncoder.setBindGroup(
			0,
			this.atmosphereCameraPassResources.group0
		);
		atmosphereCameraPassEncoder.setBindGroup(
			1,
			this.atmosphereCameraPassResources.group1
		);
		atmosphereCameraPassEncoder.setBindGroup(2, this.gbuffer.readGroup);
		atmosphereCameraPassEncoder.dispatchWorkgroups(
			Math.ceil(
				this.atmosphereCameraPassResources.outputColor.width / 16
			),
			Math.ceil(
				this.atmosphereCameraPassResources.outputColor.height / 16
			)
		);
		atmosphereCameraPassEncoder.end();

		timestampIndexMapping.set(
			FrametimeCategory.FullscreenQuad,
			timestampQueryIndex
		);
		const fullscreenPassEncoder = commandEncoder.beginRenderPass({
			colorAttachments: [
				{
					clearValue: clearColor,
					loadOp: "clear",
					storeOp: "store",
					view: presentView,
				},
			],
			timestampWrites:
				this.frametimeQuery !== undefined
					? {
							querySet: this.frametimeQuery.querySet,
							beginningOfPassWriteIndex: timestampQueryIndex++,
							endOfPassWriteIndex: timestampQueryIndex++,
					  }
					: undefined,
			label: "Fullscreen Pass",
		});

		if (
			this.fullscreenQuadPassResources.uboDataByOutputTexture.has(
				this.settings.outputTexture
			)
		) {
			const settings = this.settings.currentOutputTextureSettings;
			const uboData =
				this.fullscreenQuadPassResources.uboDataByOutputTexture.get(
					this.settings.outputTexture
				)!;
			uboData.color_gain = vec4.create(
				settings.color_gain.r,
				settings.color_gain.g,
				settings.color_gain.b,
				1.0
			);
			uboData.vertex_scale = vec4.create(
				1.0,
				settings.flip ? -1.0 : 1.0,
				1.0,
				1.0
			);
		}

		fullscreenPassEncoder.setPipeline(
			this.fullscreenQuadPassResources.pipeline
		);
		fullscreenPassEncoder.setIndexBuffer(
			this.fullscreenQuadIndexBuffer,
			"uint32",
			0,
			this.fullscreenQuadIndexBuffer.size
		);
		fullscreenPassEncoder.setBindGroup(
			0,
			this.fullscreenQuadPassResources.group0ByOutputTexture.get(
				this.settings.outputTexture
			)
		);
		const uboData =
			this.fullscreenQuadPassResources.uboDataByOutputTexture.get(
				this.settings.outputTexture
			);
		if (uboData) {
			this.fullscreenQuadPassResources.ubo.data = uboData;
		} else {
			this.fullscreenQuadPassResources.ubo.data = {
				color_gain: vec4.create(1.0, 1.0, 1.0, 1.0),
				vertex_scale: vec4.create(1.0, 1.0, 1.0, 1.0),
			};
		}
		this.fullscreenQuadPassResources.ubo.writeToGPU(this.device);
		fullscreenPassEncoder.setBindGroup(
			1,
			this.fullscreenQuadPassResources.group1
		);

		if (this.probationFrameCounter < 1.0) {
			fullscreenPassEncoder.drawIndexed(6, 1, 0, 0, 0);
		}

		fullscreenPassEncoder.end();

		if (
			this.frametimeQuery != undefined &&
			!this.frametimeQuery.mappingLock
		) {
			commandEncoder.resolveQuerySet(
				this.frametimeQuery.querySet,
				0,
				2 * timestampIndexMapping.size,
				this.frametimeQuery.writeBuffer,
				0
			);
			commandEncoder.copyBufferToBuffer(
				this.frametimeQuery.writeBuffer,
				0,
				this.frametimeQuery.readBuffer,
				0,
				this.frametimeQuery.readBuffer.size
			);
		}

		this.device.queue.submit([commandEncoder.finish()]);

		if (
			this.frametimeQuery !== undefined &&
			!this.frametimeQuery.mappingLock
		) {
			const query = this.frametimeQuery;

			this.frametimeQuery.mappingLock = true;
			this.frametimeQuery.readBuffer
				.mapAsync(
					GPUMapMode.READ,
					0,
					this.frametimeQuery.readBuffer.size
				)
				.then(() => {
					const timestampsView = new BigInt64Array(
						query.readBuffer.getMappedRange(
							0,
							query.readBuffer.size
						)
					);
					timestampIndexMapping.forEach((value, key) => {
						const MS_PER_NS = 1000000;
						const timeMilliseconds =
							Number(
								timestampsView.at(value + 1)! -
									timestampsView.at(value)!
							) / MS_PER_NS;
						this.frametimeAverages.get(key)?.push(timeMilliseconds);
						this.uiReadonly.frametimeControllers
							.get(key)
							?.setValue(
								this.frametimeAverages.get(key)?.average ?? -1.0
							);
					});
					query.readBuffer.unmap();
					query.mappingLock = false;
				})
				.catch((reason) => {
					console.error(
						`Failed while retrieving frametime values from GPU:`
					);
					console.error(reason);
				});
		}
	}

	handleResize(newWidth: number, newHeight: number) {
		const newSize = {
			width: newWidth * this.settings.renderScale,
			height: newHeight * this.settings.renderScale,
		};

		const WEBGPU_MAX_DIMENSION = 8192;
		const WEBGPU_MAX_BUFFER_BYTES = 268435456;
		const BYTES_PER_RGBA32FLOAT = 16;

		const validateSize = (width: number, height: number) => {
			return (
				width < WEBGPU_MAX_DIMENSION &&
				height < WEBGPU_MAX_DIMENSION &&
				width * height * BYTES_PER_RGBA32FLOAT < WEBGPU_MAX_BUFFER_BYTES
			);
		};

		if (!validateSize(newSize.width, newSize.height)) {
			RENDER_SCALES.slice()
				.reverse()
				.some((value) => {
					if (validateSize(newWidth * value, newHeight * value)) {
						this.settings.renderScale = value;
						return true;
					}
				});
			console.warn(
				`During resize: Texture size (${newSize.width},${newSize.height}) exceeds WebGPU guaranteed limit (8192, 8192).
								Defaulting to highest possible render scale of ${this.settings.renderScale}`
			);
			this.scaledSize = {
				width: newWidth * this.settings.renderScale,
				height: newHeight * this.settings.renderScale,
			};
		} else {
			this.scaledSize = newSize;
		}

		console.log(
			`Resizing to (${this.scaledSize.width},${this.scaledSize.height})`
		);

		this.rawSize = { width: newWidth, height: newHeight };
		this.gbuffer = new GBuffer(this.device, this.scaledSize, this.gbuffer);

		this.fullscreenQuadPassResources.rebuildOutputTextureBinding(
			this.device,
			RenderOutput.GBufferColor,
			this.gbuffer.colorWithDepthInAlphaView
		);
		this.fullscreenQuadPassResources.rebuildOutputTextureBinding(
			this.device,
			RenderOutput.GBufferNormal,
			this.gbuffer.normalView
		);

		this.atmosphereCameraPassResources.outputColor =
			this.device.createTexture({
				format: ATMOSPHERE_CAMERA_OUTPUT_TEXTURE_FORMAT,
				size: this.scaledSize,
				usage:
					GPUTextureUsage.STORAGE_BINDING |
					GPUTextureUsage.TEXTURE_BINDING,
			});
		this.atmosphereCameraPassResources.outputColorView =
			this.atmosphereCameraPassResources.outputColor.createView();

		this.fullscreenQuadPassResources.rebuildOutputTextureBinding(
			this.device,
			RenderOutput.Scene,
			this.atmosphereCameraPassResources.outputColorView
		);

		this.atmosphereCameraPassResources.group0 = this.device.createBindGroup(
			{
				layout: this.atmosphereCameraPassResources.group0Layout,
				entries: [
					{
						binding: 0,
						resource:
							this.atmosphereCameraPassResources.outputColorView,
					},
					{
						binding: 1,
						resource: this.device.createSampler({
							magFilter: "linear",
							minFilter: "linear",
						}),
					},
					{
						binding: 2,
						resource: this.transmittanceLUTPassResources.view,
					},
					{
						binding: 3,
						resource: this.multiscatterLUTPassResources.view,
					},
					{
						binding: 4,
						resource: this.skyviewLUTPassResources.view,
					},
				],
				label: "Atmosphere Camera Group 0",
			}
		);
	}
}

export const SkySeaAppConstructor: RendererAppConstructor = (
	device,
	presentFormat,
	time
) => {
	return new SkySeaApp(device, presentFormat, time);
};
