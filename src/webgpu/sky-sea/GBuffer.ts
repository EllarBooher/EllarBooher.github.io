import { Extent2D } from "./Common.ts";

const GBUFFER_COLOR_FORMAT: GPUTextureFormat = "rgba16float";
const GBUFFER_COLOR_SAMPLE_TYPE: GPUTextureSampleType = "float";
const GBUFFER_DEPTH_FORMAT: GPUTextureFormat = "depth32float";

const GBUFFER_NORMAL_FORMAT: GPUTextureFormat = "rgba16float";
const GBUFFER_NORMAL_SAMPLE_TYPE: GPUTextureSampleType = "float";

/**
 * Stores color and depth textures in a GBuffer, in a format that is consumed by
 * render pipelines in the renderer. The textures by WebGPU format are:
 * - `rgba16float`  - Color with world-space distance to the texel packed into
 *                    the alpha channel.
 * - `rgba16float`  - World-space normals with ocean-surface foam strength
 *                    packed into the alpha channel.
 * - `depth32float` - Framebuffer depth.
 * @export
 * @class GBuffer
 */
export class GBuffer {
	colorWithSurfaceWorldDepthInAlpha: GPUTexture;
	colorWithSurfaceWorldDepthInAlphaView: GPUTextureView;

	normalWithSurfaceFoamStrengthInAlpha: GPUTexture;
	normalWithSurfaceFoamStrengthInAlphaView: GPUTextureView;

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

	/**
	 * Instantiates all textures and bind groups for the GBuffer.
	 * @param {GPUDevice} device
	 * @param {Extent2D} dimensions - The dimensions in pixels to instantiate
	 * 	all the textures with.
	 * @param {GBuffer} [old] - A previous instance of `GBuffer` to potentially
	 *  reuse resources or parameters from. This is useful to pass when the
	 *  GBuffer is resized to match the presentation viewport's dimensions.
	 * @memberof GBuffer
	 */
	constructor(device: GPUDevice, dimensions: Extent2D, old?: GBuffer) {
		this.colorWithSurfaceWorldDepthInAlpha = device.createTexture({
			size: dimensions,
			dimension: "2d",
			format: GBUFFER_COLOR_FORMAT,
			usage:
				GPUTextureUsage.STORAGE_BINDING |
				GPUTextureUsage.RENDER_ATTACHMENT |
				GPUTextureUsage.TEXTURE_BINDING,
			label: "GBuffer ColorWithSurfaceWorldDepthInAlpha",
		});
		this.colorWithSurfaceWorldDepthInAlphaView =
			this.colorWithSurfaceWorldDepthInAlpha.createView({
				label: "GBuffer ColorWithSurfaceWorldDepthInAlpha",
			});

		this.normalWithSurfaceFoamStrengthInAlpha = device.createTexture({
			size: dimensions,
			dimension: "2d",
			format: GBUFFER_NORMAL_FORMAT,
			usage:
				GPUTextureUsage.STORAGE_BINDING |
				GPUTextureUsage.RENDER_ATTACHMENT |
				GPUTextureUsage.TEXTURE_BINDING,
			label: "GBuffer Normal",
		});
		this.normalWithSurfaceFoamStrengthInAlphaView =
			this.normalWithSurfaceFoamStrengthInAlpha.createView({
				label: "GBuffer Normal",
			});

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
					resource: this.colorWithSurfaceWorldDepthInAlphaView,
				},
				{
					binding: 1,
					resource: this.normalWithSurfaceFoamStrengthInAlphaView,
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
					resource: this.colorWithSurfaceWorldDepthInAlphaView,
				},
				{
					binding: 1,
					resource: this.normalWithSurfaceFoamStrengthInAlphaView,
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
