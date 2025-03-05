import { GlobalUBO } from "./UBO.ts";
import AerialPerspectiveLUTPak from "../../shaders/sky-sea/aerial_perspective_LUT.wgsl";
import { TimestampQueryInterval } from "./Common.ts";

const AERIAL_PERSPECTIVE_LUT_FORMAT: GPUTextureFormat = "rgba32float";

export class AerialPerspectiveLUTPassResources {
	texture: GPUTexture;
	view: GPUTextureView;

	/*
	 * @group(0) @binding(0) var aerial_perspective_lut: texture_storage_3d<rgba32float, write>;
	 * @group(0) @binding(1) var lut_sampler: sampler;
	 * @group(0) @binding(2) var transmittance_lut: texture_2d<f32>;
	 * @group(0) @binding(3) var multiscatter_lut: texture_2d<f32>;
	 *
	 * @group(1) @binding(0) var<uniform> u_global: GlobalUBO;
	 */
	group0: GPUBindGroup;
	group1: GPUBindGroup;

	pipeline: GPUComputePipeline;

	constructor(
		device: GPUDevice,
		dimensions: GPUExtent3DDictStrict,
		transmittanceLUT: GPUTextureView,
		multiscatterLUT: GPUTextureView,
		filterableLUT: boolean,
		globalUBO: GlobalUBO
	) {
		this.texture = device.createTexture({
			size: dimensions,
			dimension: "3d",
			format: AERIAL_PERSPECTIVE_LUT_FORMAT,
			usage:
				GPUTextureUsage.STORAGE_BINDING |
				GPUTextureUsage.TEXTURE_BINDING,
			label: "Aerial Perspective LUT",
		});
		this.view = this.texture.createView({
			label: this.texture.label,
			dimension: "3d",
		});

		const bindGroup0Layout = device.createBindGroupLayout({
			entries: [
				{
					binding: 0,
					visibility: GPUShaderStage.COMPUTE,
					storageTexture: {
						access: "write-only",
						viewDimension: "3d",
						format: AERIAL_PERSPECTIVE_LUT_FORMAT,
					},
				},
				{
					binding: 1,
					visibility: GPUShaderStage.COMPUTE,
					sampler: {
						type: filterableLUT ? "filtering" : "non-filtering",
					},
				},
				{
					binding: 2,
					visibility: GPUShaderStage.COMPUTE,
					texture: {
						sampleType: filterableLUT
							? "float"
							: "unfilterable-float",
					},
				},
				{
					binding: 3,
					visibility: GPUShaderStage.COMPUTE,
					texture: {
						sampleType: filterableLUT
							? "float"
							: "unfilterable-float",
					},
				},
			],
			label: "Aerial Perspective LUT",
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
						magFilter: filterableLUT ? "linear" : "nearest",
						minFilter: filterableLUT ? "linear" : "nearest",
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
			label: "Aerial Perspective LUT Group 0",
		});

		const bindGroup1Layout = device.createBindGroupLayout({
			entries: [
				{
					binding: 0,
					visibility: GPUShaderStage.COMPUTE,
					buffer: {},
				},
			],
			label: "Aerial Perspective LUT Group 1",
		});

		this.group1 = device.createBindGroup({
			layout: bindGroup1Layout,
			entries: [
				{
					binding: 0,
					resource: { buffer: globalUBO.buffer },
				},
			],
			label: "Aerial Perspective LUT Group 1",
		});

		const shaderModule = device.createShaderModule({
			code: AerialPerspectiveLUTPak,
		});

		this.pipeline = device.createComputePipeline({
			compute: {
				module: shaderModule,
				entryPoint: "computeAerialPerspective",
			},
			layout: device.createPipelineLayout({
				bindGroupLayouts: [bindGroup0Layout, bindGroup1Layout],
			}),
			label: "Aerial Perspective LUT",
		});
	}

	record(
		commandEncoder: GPUCommandEncoder,
		timestampInterval: TimestampQueryInterval | undefined
	) {
		const aerialPerspectiveLUTPassEncoder = commandEncoder.beginComputePass(
			{
				timestampWrites:
					timestampInterval !== undefined
						? {
								querySet: timestampInterval.querySet,
								beginningOfPassWriteIndex:
									timestampInterval.beginWriteIndex,
								endOfPassWriteIndex:
									timestampInterval.endWriteIndex,
						  }
						: undefined,
				label: "Aerial Perspective LUT",
			}
		);
		aerialPerspectiveLUTPassEncoder.setPipeline(this.pipeline);
		aerialPerspectiveLUTPassEncoder.setBindGroup(0, this.group0);
		aerialPerspectiveLUTPassEncoder.setBindGroup(1, this.group1);
		aerialPerspectiveLUTPassEncoder.dispatchWorkgroups(
			Math.ceil(this.texture.width / 16),
			Math.ceil(this.texture.height / 16),
			Math.ceil(this.texture.depthOrArrayLayers / 1)
		);
		aerialPerspectiveLUTPassEncoder.end();
	}
}
