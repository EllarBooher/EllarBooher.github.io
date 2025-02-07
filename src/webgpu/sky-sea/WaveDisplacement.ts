import { mat4, Mat4, Vec2, vec2, vec3, Vec3, Vec4, vec4 } from "wgpu-matrix";
import { GlobalUBO, UBO } from "./UBO";
import WaveSurfaceDisplacementPak from "../../shaders/sky-sea/wave_surface_displacement.wgsl";
import { TimestampQueryInterval } from "./Common";

// vec4<f32>
const BYTES_PER_PATCH_OFFSET = 16;
const PATCH_CAPACITY = 1000;

class WaveSurfaceDisplacementUBO extends UBO {
	public readonly data: {
		patch_world_half_extent: number;
		b_gerstner: boolean;
		b_fft: boolean;
	} = {
		patch_world_half_extent: 50.0,
		b_gerstner: true,
		b_fft: true,
	};

	constructor(device: GPUDevice) {
		const FLOAT_COUNT = 3;
		super(
			device,
			FLOAT_COUNT,
			"Wave Surface Displacement Patch World Half Extent UBO"
		);
	}

	protected override packed(): ArrayBuffer {
		const buffer = new ArrayBuffer(this.buffer.size);
		const view = new DataView(buffer);

		view.setFloat32(0, this.data.patch_world_half_extent, true);
		view.setUint32(4, this.data.b_gerstner ? 1 : 0, true);
		view.setUint32(8, this.data.b_fft ? 1 : 0, true);

		return buffer;
	}
}

interface RayPlaneHit {
	hit: boolean;
	t: number;
}

function rayPlaneIntersection(
	ray_origin: Vec3,
	ray_direction: Vec3,
	plane_origin: Vec3,
	plane_normal: Vec3
): RayPlaneHit {
	const perp = vec3.dot(plane_normal, ray_direction);
	const t = vec3.dot(vec3.sub(plane_origin, ray_origin), plane_normal) / perp;

	return {
		hit: Math.abs(perp) > 0.00001 && t > 0.0,
		t: t,
	};
}

interface PatchDrawInstancedLOD {
	instanceOffset: number;
	count: number;
}

function queuePatchLODDrawCommands(
	lodCount: number,
	camera: {
		invProj: Mat4;
		invView: Mat4;
		position: Vec4;
	}
) {
	const nearPlaneDepth = 1.0;

	const ndcCorners = [
		vec4.create(-1.0, -1.0, nearPlaneDepth, 1.0),
		vec4.create(1.0, -1.0, nearPlaneDepth, 1.0),
		vec4.create(1.0, 1.0, nearPlaneDepth, 1.0),
		vec4.create(-1.0, 1.0, nearPlaneDepth, 1.0),
	];

	// Each raycast out from the camera produces a point that 1) hits the ocean or 2) doesn't but can be projected straight down to one
	// This defines a quadrilateral that we will then convert into patches
	// Keep as vec3 for easier component swizzling, but y should be 0 for all of these
	const frustumProjectedPositions = [
		vec3.create(),
		vec3.create(),
		vec3.create(),
		vec3.create(),
	];
	let intersectionCount = 0;

	const DISTANCE_BOUND = 1000.0;
	const FLT_MAX = 3.402823e38;
	let min = vec3.create(FLT_MAX, FLT_MAX, FLT_MAX);
	let max = vec3.create(-FLT_MAX, -FLT_MAX, -FLT_MAX);

	for (let i = 0; i < 4; i++) {
		const directionViewSpace = mat4.mul(camera.invProj, ndcCorners[i]);
		directionViewSpace[4] = 0.0;
		const directionWorld = vec3.normalize(
			mat4.mul(camera.invView, directionViewSpace)
		);

		const planeOrigin = vec3.create(0.0, 0.0, 0.0);
		const planeNormal = vec3.create(0.0, 1.0, 0.0);

		const rayOrigin = vec3.copy(camera.position);
		const rayDirection = vec3.copy(directionWorld);

		const oceanHit = rayPlaneIntersection(
			rayOrigin,
			rayDirection,
			planeOrigin,
			planeNormal
		);
		if (oceanHit.hit) {
			intersectionCount += 1.0;
		}

		const endpoint = vec3.add(
			vec3.mulScalar(
				rayDirection,
				oceanHit.hit ? oceanHit.t : DISTANCE_BOUND
			),
			rayOrigin
		);
		endpoint[1] = 0.0;

		frustumProjectedPositions[i] = vec3.copy(endpoint);

		min = vec3.min(endpoint, min);
		max = vec3.max(endpoint, max);
	}

	min[1] = 0.0;
	max[1] = 0.0;

	const PATCH_WORLD_HALF_EXTENT = 50.0;
	const patchMin = vec3.floor(vec3.divScalar(min, PATCH_WORLD_HALF_EXTENT));
	const patchMax = vec3.ceil(vec3.divScalar(max, PATCH_WORLD_HALF_EXTENT));

	const PatchOffsetsPackedByLOD = new Map<number, number[]>();

	let instanceCount = 0;

	if (intersectionCount > 0.0) {
		for (let lod = 0; lod < lodCount; lod++) {
			PatchOffsetsPackedByLOD.set(lod, []);
		}

		for (let z = patchMin[2]; z <= patchMax[2]; z += 1.0) {
			for (let x = patchMin[0]; x <= patchMax[0]; x += 1.0) {
				const patchPosition = vec3.mulScalar(
					vec3.create(x, 0.0, z),
					2.0 * PATCH_WORLD_HALF_EXTENT
				);
				const deltaCamera = vec3.sub(patchPosition, camera.position);

				const distance = vec3.length(deltaCamera);
				const t = Math.max(
					Math.min(distance / DISTANCE_BOUND, 1.0),
					0.0
				);
				const lod = Math.atan(t) * lodCount;

				PatchOffsetsPackedByLOD.get(Math.round(lod))?.push(
					...patchPosition,
					0.0
				);
			}
		}

		for (const [_lod, offsetsPacked] of PatchOffsetsPackedByLOD) {
			instanceCount += offsetsPacked.length / 4;
		}
	}

	// For the CPU to dispatch the commands
	const patchDrawInstanceByLOD = new Map<number, PatchDrawInstancedLOD>();
	// To be copied to the GPU as per-instance data offsetting each vertex of each patch
	const patchOffsetsPackedSortedByLOD = new Float32Array(instanceCount * 4);

	let patchInstanceOffset = 0;
	for (const [lod, offsetsPacked] of PatchOffsetsPackedByLOD) {
		patchDrawInstanceByLOD.set(lod, {
			count: offsetsPacked.length / 4,
			instanceOffset: patchInstanceOffset,
		});
		patchOffsetsPackedSortedByLOD.set(
			offsetsPacked,
			patchInstanceOffset * 4
		);
		patchInstanceOffset += offsetsPacked.length / 4;
	}

	return {
		patchDrawInstanceByLOD,
		patchOffsetsPackedSortedByLOD,
	};
}

// Holds a compute pass for computing the displacement of a bunch of vertices,
// then a graphics pass for rasterizing these vertices
export class WaveSurfaceDisplacementPassResources {
	/*
	 * @group(0) @binding(0) var<storage, read_write> output_vertices: array<vec4<f32>, VERTEX_COUNT>;
	 * @group(0) @binding(1) var<storage, read_write> output_world_normals: array<vec4<f32>, VERTEX_COUNT>;
	 * @group(0) @binding(2) var<uniform> patch_world_half_extent: f32;
	 * @group(0) @binding(3) var<uniform> waves: array<PlaneWave, WAVE_COUNT>;
	 *
	 * @group(1) @binding(0) var<uniform> u_global: GlobalUBO;
	 *
	 * @group(2) @binding(0) var displacement_map_sampler: sampler;
	 * @group(2) @binding(1) var displacement_map: texture_2d<f32>;
	 */
	group0Compute: GPUBindGroup;
	group2Compute: GPUBindGroup;

	/*
	 * @group(0) @binding(0) var<storage> vertices: array<vec4<f32>, VERTEX_COUNT>;
	 * @group(0) @binding(1) var<storage> world_normals: array<vec4<f32>, VERTEX_COUNT>;
	 * @group(0) @binding(2) var<uniform> patch_world_half_extent: f32;
	 * @group(0) @binding(3) var<storage> patch_offsets: array<vec4<f32>>;
	 *
	 * @group(1) @binding(0) var<uniform> u_global: GlobalUBO;
	 */
	group0Graphics: GPUBindGroup;

	settingsUBO: WaveSurfaceDisplacementUBO;
	patchInstanceOffsetsXYZW: GPUBuffer;

	group1: GPUBindGroup;

	vertexDimension: number;
	lodCount: number;
	baseIndexCount: number;

	vertices: GPUBuffer;
	worldNormals: GPUBuffer;
	indices: GPUBuffer;
	lodIndices: GPUBuffer;

	displaceVerticesKernel: GPUComputePipeline;

	surfaceRasterizationPipeline: GPURenderPipeline;

	constructor(
		device: GPUDevice,
		globalUBO: GlobalUBO,
		colorFormat: GPUTextureFormat,
		normalFormat: GPUTextureFormat,
		depthFormat: GPUTextureFormat,
		filterable_Dx_Dy_Dz_Dxdz_Map: GPUTextureView,
		filterable_Dydx_Dydz_Dxdx_Dzdz_Map: GPUTextureView
	) {
		// Grid of vertices + extra quad for ocean horizon

		// vec4<f32>
		const VERTEX_SIZE_BYTES = 4 * 4;

		// Extra 1 for tiling
		const VERTEX_DIMENSION = 1024 + 1;

		this.vertexDimension = VERTEX_DIMENSION;

		const VERTEX_COUNT = VERTEX_DIMENSION * VERTEX_DIMENSION;

		// u32
		const INDEX_SIZE_BYTES = 4;
		const TRIANGLE_COUNT =
			2 * (VERTEX_DIMENSION - 1) * (VERTEX_DIMENSION - 1);
		const INDEX_COUNT = 3 * TRIANGLE_COUNT;
		this.baseIndexCount = INDEX_COUNT;

		// Each LOD quarters the triangle count (halves the span)
		const LOD_COUNT = 10;
		this.lodCount = LOD_COUNT;

		function computeIndexCountWithLOD(
			baseIndexCount: number,
			lodCount: number
		) {
			let count = 0;
			for (let lod = 0; lod < lodCount; lod++) {
				count += baseIndexCount / (1 << (2 * lod));
			}
			return count;
		}

		const indexCountWithLOD = computeIndexCountWithLOD(
			this.baseIndexCount,
			this.lodCount
		);

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
		// Have to separate buffer in case original buffer is too large
		// On the upside, if the original buffer fits in the size limit (webgpu says ~256 MB), ALL lod will fit in this one
		// Assuming dimension is reduced by 2 each level
		this.lodIndices = device.createBuffer({
			size: (indexCountWithLOD - INDEX_COUNT) * INDEX_SIZE_BYTES,
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

		const lodIndicesSource = new Uint32Array(
			indexCountWithLOD - INDEX_COUNT
		);
		indicesSourceOffset = 0;
		for (let lod = 1; lod < LOD_COUNT; lod++) {
			for (let y = 0; y < VERTEX_DIMENSION - 1; y += 1 << lod) {
				for (let x = 0; x < VERTEX_DIMENSION - 1; x += 1 << lod) {
					const index0 = x + y * VERTEX_DIMENSION;
					const index1 = index0 + (1 << lod);
					const index2 = index0 + (1 << lod) * VERTEX_DIMENSION;
					const index3 = index2 + (1 << lod);

					const twoTriangleIndices = new Uint32Array([
						index0,
						index2,
						index1,
						index1,
						index2,
						index3,
					]);
					lodIndicesSource.set(
						twoTriangleIndices,
						indicesSourceOffset
					);
					indicesSourceOffset += twoTriangleIndices.length;
				}
			}
		}
		device.queue.writeBuffer(this.lodIndices, 0, lodIndicesSource);

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
				{
					binding: 3,
					visibility: GPUShaderStage.COMPUTE,
					buffer: { type: "uniform" },
				},
			],
			label: "Wave Surface Displacement Group 0 Compute",
		});

		this.settingsUBO = new WaveSurfaceDisplacementUBO(device);

		this.group0Compute = device.createBindGroup({
			layout: group0LayoutCompute,
			entries: [
				{ binding: 0, resource: { buffer: this.vertices } },
				{ binding: 1, resource: { buffer: this.worldNormals } },
				{
					binding: 2,
					resource: {
						buffer: this.settingsUBO.buffer,
					},
				},
				{ binding: 3, resource: { buffer: waves } },
			],
			label: "Wave Surface Displacement Group 0 Compute",
		});

		const group2LayoutCompute = device.createBindGroupLayout({
			label: "Wave Surface Displacement Group 2 Compute (Displacement Map)",
			entries: [
				{
					binding: 0,
					visibility: GPUShaderStage.COMPUTE,
					sampler: { type: "filtering" },
				},
				{
					binding: 1,
					visibility: GPUShaderStage.COMPUTE,
					texture: { sampleType: "float" },
				},
				{
					binding: 2,
					visibility: GPUShaderStage.COMPUTE,
					texture: { sampleType: "float" },
				},
			],
		});
		this.group2Compute = device.createBindGroup({
			label: "Wave Surface Displacement Group 2 Compute (Displacement Map)",
			layout: group2LayoutCompute,
			entries: [
				{
					binding: 0,
					resource: device.createSampler({
						label: "Wave Surface Displacement Group 2 Sampler",
						minFilter: "linear",
						magFilter: "linear",
					}),
				},
				{ binding: 1, resource: filterable_Dx_Dy_Dz_Dxdz_Map },
				{ binding: 2, resource: filterable_Dydx_Dydz_Dxdx_Dzdz_Map },
			],
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
				{
					binding: 2,
					visibility: GPUShaderStage.VERTEX,
					buffer: { type: "uniform" },
				},
				{
					binding: 3,
					visibility: GPUShaderStage.VERTEX,
					buffer: { type: "read-only-storage" },
				},
			],
			label: "Wave Surface Displacement Group 0 Graphics",
		});

		this.patchInstanceOffsetsXYZW = device.createBuffer({
			label: "Wave Surface Displacement Patch Offsets",
			size: BYTES_PER_PATCH_OFFSET * PATCH_CAPACITY,
			usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.STORAGE,
		});

		this.group0Graphics = device.createBindGroup({
			layout: group0LayoutGraphics,
			entries: [
				{ binding: 0, resource: { buffer: this.vertices } },
				{ binding: 1, resource: { buffer: this.worldNormals } },
				{
					binding: 2,
					resource: {
						buffer: this.settingsUBO.buffer,
					},
				},
				{
					binding: 3,
					resource: {
						buffer: this.patchInstanceOffsetsXYZW,
					},
				},
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

		this.displaceVerticesKernel = device.createComputePipeline({
			layout: device.createPipelineLayout({
				bindGroupLayouts: [
					group0LayoutCompute,
					group1Layout,
					group2LayoutCompute,
				],
			}),
			compute: {
				module: shaderModule,
				entryPoint: "displaceVertices",
			},
			label: "Wave Surface Displacement Displace Vertices Kernel",
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

	record(
		device: GPUDevice,
		commandEncoder: GPUCommandEncoder,
		globalUBO: GlobalUBO,
		timestampInterval: TimestampQueryInterval | undefined,
		settings: {
			gerstner: boolean;
			fft: boolean;
		},
		attachments: {
			colorWithDepthInAlpha: GPUTextureView;
			normal: GPUTextureView;
			depth: GPUTextureView;
		}
	) {
		this.settingsUBO.data.patch_world_half_extent = settings.fft
			? 50.0
			: 300.0;
		this.settingsUBO.data.b_gerstner = settings.gerstner;
		this.settingsUBO.data.b_fft = settings.fft;
		this.settingsUBO.writeToGPU(device.queue);

		const displacementPassEncoder = commandEncoder.beginComputePass({
			label: "Wave Surface Mesh Displacement",
			timestampWrites:
				timestampInterval !== undefined
					? {
							querySet: timestampInterval.querySet,
							beginningOfPassWriteIndex:
								timestampInterval.beginWriteIndex,
					  }
					: undefined,
		});

		displacementPassEncoder.setPipeline(this.displaceVerticesKernel);
		displacementPassEncoder.setBindGroup(0, this.group0Compute);
		displacementPassEncoder.setBindGroup(1, this.group1);
		displacementPassEncoder.setBindGroup(2, this.group2Compute);
		displacementPassEncoder.dispatchWorkgroups(
			Math.ceil(this.vertexDimension / 16),
			Math.ceil(this.vertexDimension / 16)
		);
		displacementPassEncoder.end();

		const surfaceRasterizationPassEncoder = commandEncoder.beginRenderPass({
			label: "Wave Surface Rasterization",
			colorAttachments: [
				{
					clearValue: { r: 0.0, g: 0.0, b: 0.0, a: 0.0 },
					loadOp: "clear",
					storeOp: "store",
					view: attachments.colorWithDepthInAlpha,
				},
				{
					clearValue: { r: 0.0, g: 0.0, b: 0.0, a: 0.0 },
					loadOp: "clear",
					storeOp: "store",
					view: attachments.normal,
				},
			],
			depthStencilAttachment: {
				view: attachments.depth,
				depthClearValue: 1.0,
				depthLoadOp: "clear",
				depthStoreOp: "store",
			},
			timestampWrites:
				timestampInterval !== undefined
					? {
							querySet: timestampInterval.querySet,
							endOfPassWriteIndex:
								timestampInterval.endWriteIndex,
					  }
					: undefined,
		});

		surfaceRasterizationPassEncoder.setPipeline(
			this.surfaceRasterizationPipeline
		);
		surfaceRasterizationPassEncoder.setBindGroup(0, this.group0Graphics);
		surfaceRasterizationPassEncoder.setBindGroup(1, this.group1);
		surfaceRasterizationPassEncoder.setIndexBuffer(this.indices, "uint32");

		if (this.settingsUBO.data.b_fft) {
			const { patchDrawInstanceByLOD, patchOffsetsPackedSortedByLOD } =
				queuePatchLODDrawCommands(this.lodCount, {
					invProj: globalUBO.data.camera.invProj,
					invView: globalUBO.data.camera.invView,
					position: globalUBO.data.camera.position,
				});

			device.queue.writeBuffer(
				this.patchInstanceOffsetsXYZW,
				0,
				patchOffsetsPackedSortedByLOD,
				0,
				Math.min(
					this.patchInstanceOffsetsXYZW.size / 4,
					patchOffsetsPackedSortedByLOD.length
				)
			);

			function computeLODIndexOffset(
				lod: number,
				baseIndexCount: number
			) {
				// A new index buffer is used starting at lod = 1, so indexing resets there
				if (lod === 0 || lod === 1) {
					return 0;
				}

				let offset = 0;
				for (let i = 1; i < lod; i++) {
					offset += baseIndexCount / (1 << (2 * i));
				}
				return offset;
			}

			for (let lod = 0; lod < this.lodCount; lod++) {
				const lodInstanceData = patchDrawInstanceByLOD.get(lod);

				if (lod == 1) {
					surfaceRasterizationPassEncoder.setIndexBuffer(
						this.lodIndices,
						"uint32"
					);
				}

				const indexCount = this.baseIndexCount / (1 << (2 * lod));
				const indexOffset = computeLODIndexOffset(
					lod,
					this.baseIndexCount
				);

				surfaceRasterizationPassEncoder.drawIndexed(
					indexCount,
					lodInstanceData?.count,
					indexOffset,
					0,
					lodInstanceData?.instanceOffset
				);
			}
		} else {
			surfaceRasterizationPassEncoder.drawIndexed(this.baseIndexCount, 1);
		}

		surfaceRasterizationPassEncoder.end();
	}
}
