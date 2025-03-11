import { UBO } from "./UBO";
import {
	RenderOutputCategory,
	RenderOutputTexture,
	RenderOutputTransform,
} from "./RenderOutputController";
import FullscreenQuadPak from "../../shaders/sky-sea/fullscreen_quad.wgsl";
import { Vec4, vec4 } from "wgpu-matrix";
import { TimestampQueryInterval } from "./PerformanceTracker";

class FullscreenQuadUBOData {
	color_gain: Vec4 = vec4.create(1.0, 1.0, 1.0, 1.0);
	vertex_scale: Vec4 = vec4.create(1.0, 1.0, 1.0, 1.0);
	swap_ba_rg = false;
	channel_mask: number = 1 + 2 + 4;
	depth_or_array_layer = 0;
	mip_level_u32 = 0;
}

class FullscreenQuadUBO extends UBO {
	data: FullscreenQuadUBOData = new FullscreenQuadUBOData();

	constructor(device: GPUDevice) {
		super(device, 4 + 4 + 4, "Fullscreen Quad UBO");
	}

	protected override packed(): ArrayBuffer {
		const buffer = new ArrayBuffer(this.buffer.size);
		const view = new DataView(buffer);

		new Float32Array(buffer).set(this.data.color_gain, 0 / 4);
		new Float32Array(buffer).set(this.data.vertex_scale, 16 / 4);
		view.setUint32(32, this.data.swap_ba_rg ? 1 : 0, true);
		view.setUint32(36, this.data.channel_mask, true);
		view.setFloat32(40, this.data.depth_or_array_layer, true);
		view.setUint32(44, this.data.mip_level_u32, true);

		return buffer;
	}
}

/**
 * Contains the resources for a graphics pass that draws a single quad with a
 * single texture mapped to it. Multiple textures can be bound, and selected at
 * draw time.
 * @see {@link RenderOutputTransform} for transformations that can be applied to
 * 	the sampled texture values.
 * @export
 * @class FullscreenQuadPassResources
 */
export class FullscreenQuadPassResources {
	// keep layout for resetting textures when resizing them
	private group0Layout: GPUBindGroupLayout;
	private group0LayoutArray: GPUBindGroupLayout;
	private group0Layout3D: GPUBindGroupLayout;

	private group0ByOutputTexture: Map<
		RenderOutputCategory,
		{
			texture: RenderOutputTexture;
			bindGroup: GPUBindGroup;
		}
	>;
	private group0Sampler: GPUSampler;

	private ubo: FullscreenQuadUBO;

	private fullscreenQuadIndexBuffer: GPUBuffer;

	private group1: GPUBindGroup;
	private pipeline: GPURenderPipeline;
	private pipelineArray: GPURenderPipeline;
	private pipeline3D: GPURenderPipeline;

	public readonly outputFormat: GPUTextureFormat;

	/**
	 * Generate and save bind groups for a given category, so it can be read at
	 * draw time.
	 * @param {GPUDevice} device
	 * @param {RenderOutputCategory} category - The category that can be passed
	 * 	at draw time to use this texture for sampling.
	 * @param {RenderOutputTexture} texture - The texture to generate bindings
	 * 	for.
	 * @memberof FullscreenQuadPassResources
	 */
	setOutput(
		device: GPUDevice,
		category: RenderOutputCategory,
		texture: RenderOutputTexture
	) {
		let layout = this.group0Layout;
		switch (texture.viewDimension) {
			case "2d": {
				layout = this.group0Layout;
				break;
			}
			case "2d-array": {
				layout = this.group0LayoutArray;
				break;
			}
			case "3d": {
				layout = this.group0Layout3D;
				break;
			}
			default: {
				throw new RangeError(
					`Unsupported texture dimension '${texture.viewDimension}'`
				);
			}
		}

		this.group0ByOutputTexture.set(category, {
			texture: texture,
			bindGroup: device.createBindGroup({
				layout: layout,
				entries: [
					{
						binding: 0,
						resource: texture.view,
					},
					{
						binding: 1,
						resource: this.group0Sampler,
					},
				],
				label: `Fullscreen Quad Group 0 Texture '${texture.view.label}'`,
			}),
		});
	}

	/**
	 * Enumerates properties of bound textures by category. Useful for
	 * reflecting in UI without references to the underlying textures.
	 * @return { Iterable<{ category: RenderOutputCategory; mipLevelCount:
	 *  number; depthOrArrayLayerCount: number; }>} Returns the properties and
	 *  category of each texture that is bound. Only one texture will exist for
	 *  each category.
	 * @memberof FullscreenQuadPassResources
	 */
	getAllTextureProperties(): Iterable<{
		category: RenderOutputCategory;
		mipLevelCount: number;
		depthOrArrayLayerCount: number;
	}> {
		return [...this.group0ByOutputTexture.entries()].map(
			([category, { texture }]) => {
				return {
					category: category,
					mipLevelCount: texture.mipLevelCount,
					depthOrArrayLayerCount: texture.depthOrArrayLayerCount,
				};
			}
		);
	}

	/**
	 * Instantiates all resources.
	 * @param {GPUDevice} device
	 * @param {GPUTextureFormat} outputFormat - The texture format that will be
	 *  used for the render pipelines attachments. This must match the format of
	 *  the texture view used as the attachment at draw time.
	 * @memberof FullscreenQuadPassResources
	 */
	constructor(device: GPUDevice, outputFormat: GPUTextureFormat) {
		this.outputFormat = outputFormat;

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
		this.group0Layout3D = device.createBindGroupLayout({
			entries: [
				{
					binding: 0,
					visibility: GPUShaderStage.FRAGMENT,
					texture: {
						viewDimension: "3d",
						sampleType: "unfilterable-float",
					},
				},
				{
					binding: 1,
					visibility: GPUShaderStage.FRAGMENT,
					sampler: { type: "non-filtering" },
				},
			],
			label: "Fullscreen Quad Group 0 3D",
		});

		this.group0ByOutputTexture = new Map();

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
			label: "Fullscreen Quad 2D",
		});
		this.pipelineArray = device.createRenderPipeline({
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
			label: "Fullscreen Quad 2D Array",
		});
		this.pipeline3D = device.createRenderPipeline({
			vertex: {
				module: shaderModule,
				entryPoint: "vertexMain",
			},
			fragment: {
				module: shaderModule,
				entryPoint: "fragmentMain3D",
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
				bindGroupLayouts: [this.group0Layout3D, group1Layout],
			}),
			label: "Fullscreen Quad 3D",
		});
	}

	/**
	 * Record the rendering of a fullscreen quad, sampling the texture that
	 * has been bound to the requested category.
	 * @see {@link setOutput} for how to bind the texture that will used here.
	 * @param {GPUDevice} device
	 * @param {GPUCommandEncoder} commandEncoder - The command encoder to record
	 * 	into.
	 * @param {GPUTextureView} presentView - The texture view to use as the
	 * 	output attachment.
	 * @param {RenderOutputCategory} id - The category selecting the bound
	 * 	texture to use.
	 * @param {RenderOutputTransform} transform - The transformation to apply to
	 * 	the sampled texture values in the fragment stage.
	 * @param {TimestampQueryInterval} [timestamps] - The interval to record
	 * 	timing information into.
	 * @memberof FullscreenQuadPassResources
	 */
	record(
		device: GPUDevice,
		commandEncoder: GPUCommandEncoder,
		presentView: GPUTextureView,
		id: RenderOutputCategory,
		transform: RenderOutputTransform,
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

		this.ubo.data.color_gain = vec4.create(
			transform.colorGain.r,
			transform.colorGain.g,
			transform.colorGain.b,
			1.0
		);
		this.ubo.data.vertex_scale = vec4.create(
			1.0,
			transform.flip ? -1.0 : 1.0,
			1.0,
			1.0
		);
		this.ubo.data.mip_level_u32 = Math.round(transform.mipLevel);
		this.ubo.data.depth_or_array_layer = transform.arrayLayer;
		this.ubo.data.channel_mask =
			(transform.channelMasks.r ? 1 : 0) +
			(transform.channelMasks.g ? 2 : 0) +
			(transform.channelMasks.b ? 4 : 0);
		this.ubo.data.swap_ba_rg = transform.swapBARG;

		this.ubo.writeToGPU(device.queue);

		fullscreenPassEncoder.setIndexBuffer(
			this.fullscreenQuadIndexBuffer,
			"uint32",
			0,
			this.fullscreenQuadIndexBuffer.size
		);
		fullscreenPassEncoder.setBindGroup(1, this.group1);

		switch (bindGroup0.texture.viewDimension) {
			case "2d": {
				fullscreenPassEncoder.setPipeline(this.pipeline);
				break;
			}
			case "2d-array": {
				fullscreenPassEncoder.setPipeline(this.pipelineArray);
				break;
			}
			case "3d": {
				fullscreenPassEncoder.setPipeline(this.pipeline3D);
				break;
			}
			default: {
				throw new Error(
					`Unsupported texture dimension '${bindGroup0.texture.viewDimension}'`
				);
			}
		}
		fullscreenPassEncoder.setBindGroup(0, bindGroup0.bindGroup);

		fullscreenPassEncoder.drawIndexed(6, 1, 0, 0, 0);

		fullscreenPassEncoder.end();
	}
}
