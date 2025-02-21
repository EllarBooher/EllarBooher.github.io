import { UBO } from "./UBO";
import { RenderOutput, TimestampQueryInterval } from "./Common";
import FullscreenQuadPak from "../../shaders/sky-sea/fullscreen_quad.wgsl";
import { Vec2, vec2, Vec4, vec4 } from "wgpu-matrix";

export class FullscreenQuadUBOData {
	color_gain: Vec4 = vec4.create(1.0, 1.0, 1.0, 1.0);
	vertex_scale: Vec4 = vec4.create(1.0, 1.0, 1.0, 1.0);
	padding0: Vec2 = vec2.create();
	array_layer_u32 = 0;
	mip_level_u32 = 0;
}

export class FullscreenQuadUBO extends UBO {
	data: FullscreenQuadUBOData = new FullscreenQuadUBOData();

	constructor(device: GPUDevice) {
		super(device, 4 + 4 + 4, "Fullscreen Quad UBO");
	}

	protected override packed(): ArrayBuffer {
		const buffer = new ArrayBuffer(this.buffer.size);
		const view = new DataView(buffer);

		new Float32Array(buffer).set(this.data.color_gain, 0 / 4);
		new Float32Array(buffer).set(this.data.vertex_scale, 16 / 4);
		// padding0 byteOffset: 32 byteLength: 8
		view.setUint32(40, this.data.array_layer_u32, true);
		view.setUint32(44, this.data.mip_level_u32, true);

		return buffer;
	}
}

export class FullscreenQuadPassResources {
	// keep layout for resetting textures when resizing them
	private group0Layout: GPUBindGroupLayout;
	private group0LayoutArray: GPUBindGroupLayout;

	private group0ByOutputTexture: Map<
		RenderOutput,
		{ array: boolean; bindGroup: GPUBindGroup }
	>;
	private group0Sampler: GPUSampler;

	private ubo: FullscreenQuadUBO;

	private fullscreenQuadIndexBuffer: GPUBuffer;

	private group1: GPUBindGroup;
	private pipeline: GPURenderPipeline;
	private arrayPipeline: GPURenderPipeline;

	setView(
		device: GPUDevice,
		id: RenderOutput,
		view: GPUTextureView,
		array: boolean
	) {
		this.group0ByOutputTexture.set(id, {
			array: array,
			bindGroup: device.createBindGroup({
				layout: array ? this.group0LayoutArray : this.group0Layout,
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
				label: `Fullscreen Quad Group 0 Texture '${view.label}'`,
			}),
		});
	}

	constructor(device: GPUDevice, outputFormat: GPUTextureFormat) {
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

		this.group0Layout = device.createBindGroupLayout({
			entries: [
				{
					binding: 0,
					visibility: GPUShaderStage.FRAGMENT,
					texture: { sampleType: "unfilterable-float" },
				},
				{
					binding: 1,
					visibility: GPUShaderStage.FRAGMENT,
					sampler: { type: "non-filtering" },
				},
			],
			label: "Fullscreen Quad Group 0",
		});
		this.group0LayoutArray = device.createBindGroupLayout({
			entries: [
				{
					binding: 0,
					visibility: GPUShaderStage.FRAGMENT,
					texture: {
						viewDimension: "2d-array",
						sampleType: "unfilterable-float",
					},
				},
				{
					binding: 1,
					visibility: GPUShaderStage.FRAGMENT,
					sampler: { type: "non-filtering" },
				},
			],
			label: "Fullscreen Quad Group 0 Array",
		});

		this.group0ByOutputTexture = new Map<
			RenderOutput,
			{ array: boolean; bindGroup: GPUBindGroup }
		>();

		this.group0Sampler = device.createSampler({
			magFilter: "nearest",
			minFilter: "nearest",
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
				entryPoint: "vertexMain",
			},
			fragment: {
				module: shaderModule,
				entryPoint: "fragmentMain",
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
		this.arrayPipeline = device.createRenderPipeline({
			vertex: {
				module: shaderModule,
				entryPoint: "vertexMain",
			},
			fragment: {
				module: shaderModule,
				entryPoint: "fragmentMainArray",
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
				bindGroupLayouts: [this.group0LayoutArray, group1Layout],
			}),
			label: "Fullscreen Quad",
		});
	}

	recordPresent(
		device: GPUDevice,
		commandEncoder: GPUCommandEncoder,
		presentView: GPUTextureView,
		id: RenderOutput,
		renderParams: FullscreenQuadUBOData,
		timestamps?: TimestampQueryInterval
	) {
		const clearColor = { r: 0.0, g: 0.0, b: 0.0, a: 1.0 };

		const bindGroup0 = this.group0ByOutputTexture.get(id);
		if (bindGroup0 === undefined) {
			console.warn("FullscreenQuadPass: No texture to output.");
			return;
		}

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
				timestamps !== undefined
					? {
							querySet: timestamps.querySet,
							beginningOfPassWriteIndex:
								timestamps.beginWriteIndex,
							endOfPassWriteIndex: timestamps.endWriteIndex,
					  }
					: undefined,
			label: "Fullscreen Pass",
		});

		// This should happen upon changing params in the UI, not every draw?
		// It probably does not matter too much with how small the buffer is,
		// and how it is mostly static each frame.
		this.ubo.data = renderParams;
		this.ubo.writeToGPU(device.queue);

		fullscreenPassEncoder.setIndexBuffer(
			this.fullscreenQuadIndexBuffer,
			"uint32",
			0,
			this.fullscreenQuadIndexBuffer.size
		);
		fullscreenPassEncoder.setBindGroup(1, this.group1);

		fullscreenPassEncoder.setPipeline(
			bindGroup0.array ? this.arrayPipeline : this.pipeline
		);
		fullscreenPassEncoder.setBindGroup(0, bindGroup0.bindGroup);

		fullscreenPassEncoder.drawIndexed(6, 1, 0, 0, 0);

		fullscreenPassEncoder.end();
	}
}
