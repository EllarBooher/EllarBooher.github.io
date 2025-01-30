import { Extent2D } from "./Common.ts";
import { GlobalUBO } from "./UBO.ts";
import TransmittanceLUTPak from "../../shaders/sky-sea/transmittance_LUT.wgsl";

const TRANSMITTANCE_LUT_FORMAT: GPUTextureFormat = "rgba32float";

export class TransmittanceLUTPassResources {
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
						format: this.texture.format,
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
