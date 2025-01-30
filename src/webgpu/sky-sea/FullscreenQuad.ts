import { FullscreenQuadUBO, FullscreenQuadUBOData } from "./UBO";
import { RenderOutput } from "./Common";
import FullscreenQuadPak from "../../shaders/sky-sea/fullscreen_quad.wgsl";

export class FullscreenQuadPassResources {
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
