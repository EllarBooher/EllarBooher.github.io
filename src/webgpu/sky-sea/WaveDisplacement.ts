import { Vec2, vec2 } from "wgpu-matrix";
import { GlobalUBO } from "./UBO";
import WaveSurfaceDisplacementPak from "../../shaders/sky-sea/wave_surface_displacement.wgsl";

// Holds a compute pass for computing the displacement of a bunch of vertices,
// then a graphics pass for rasterizing these vertices
export class WaveSurfaceDisplacementPassResources {
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

	constructor(
		device: GPUDevice,
		globalUBO: GlobalUBO,
		colorFormat: GPUTextureFormat,
		normalFormat: GPUTextureFormat,
		depthFormat: GPUTextureFormat
	) {
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
				targets: [{ format: colorFormat }, { format: normalFormat }],
			},
			primitive: {
				topology: "triangle-list",
				cullMode: "back",
				frontFace: "ccw",
			},
			depthStencil: {
				format: depthFormat,
				depthWriteEnabled: true,
				depthCompare: "less",
			},
			label: "Wave Surface Displacement Surface Rasterization",
		});
	}
}
