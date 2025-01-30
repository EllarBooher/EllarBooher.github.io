import { Extent2D } from "./Common.ts";

const GBUFFER_COLOR_FORMAT: GPUTextureFormat = "rgba16float";
const GBUFFER_COLOR_SAMPLE_TYPE: GPUTextureSampleType = "float";
const GBUFFER_DEPTH_FORMAT: GPUTextureFormat = "depth32float";

const GBUFFER_NORMAL_FORMAT: GPUTextureFormat = "rgba16float";
const GBUFFER_NORMAL_SAMPLE_TYPE: GPUTextureSampleType = "float";

export class GBuffer {
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
