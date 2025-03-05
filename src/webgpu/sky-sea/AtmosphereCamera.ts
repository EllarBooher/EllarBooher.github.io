import { GlobalUBO } from "./UBO";
import AtmosphereCameraPak from "../../shaders/sky-sea/atmosphere_camera.wgsl";
import { TimestampQueryInterval } from "./Common";
import { GBuffer } from "./GBuffer";

const ATMOSPHERE_CAMERA_OUTPUT_TEXTURE_FORMAT: GPUTextureFormat = "rgba16float";

export class AtmosphereCameraPassResources {
	/*
		@group(0) @binding(0) var output_color: texture_storage_2d<rgba32float, write>;
		@group(0) @binding(1) var lut_sampler: sampler;
		@group(0) @binding(2) var transmittance_lut: texture_2d<f32>;
		@group(0) @binding(3) var multiscatter_lut: texture_2d<f32>;
		@group(0) @binding(4) var skyview_lut: texture_2d<f32>;

		@group(1) @binding(0) var<uniform> u_global: GlobalUBO;

		@group(2) @binding(0) var gbuffer_color_with_surface_world_depth_in_alpha: texture_2d<f32>;
		@group(2) @binding(1) var gbuffer_normal_with_surface_jacobian_in_alpha: texture_2d<f32>;
		*/
	group0Layout: GPUBindGroupLayout;
	group1Layout: GPUBindGroupLayout;

	lutSampler: GPUSampler;

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
		filterableLUT: boolean,
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
					sampler: {
						type: filterableLUT ? "filtering" : "non-filtering",
					},
				},
				{
					// transmittance
					binding: 2,
					visibility: GPUShaderStage.COMPUTE,
					texture: {
						sampleType: filterableLUT
							? "float"
							: "unfilterable-float",
						viewDimension: "2d",
					},
				},
				{
					// multiscatter
					binding: 3,
					visibility: GPUShaderStage.COMPUTE,
					texture: {
						sampleType: filterableLUT
							? "float"
							: "unfilterable-float",
						viewDimension: "2d",
					},
				},
				{
					// skyview
					binding: 4,
					visibility: GPUShaderStage.COMPUTE,
					texture: {
						sampleType: filterableLUT
							? "float"
							: "unfilterable-float",
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

		this.lutSampler = device.createSampler({
			label: "Atmosphere Camera LUT Sampler",
			magFilter: filterableLUT ? "linear" : "nearest",
			minFilter: filterableLUT ? "linear" : "nearest",
		});

		this.group0 = device.createBindGroup({
			layout: this.group0Layout,
			entries: [
				{
					binding: 0,
					resource: this.outputColorView,
				},
				{
					binding: 1,
					resource: this.lutSampler,
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

	record(
		commandEncoder: GPUCommandEncoder,
		timestampInterval: TimestampQueryInterval | undefined,
		gbuffer: GBuffer
	) {
		const atmosphereCameraPassEncoder = commandEncoder.beginComputePass({
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
			label: "Atmosphere Camera",
		});
		atmosphereCameraPassEncoder.setPipeline(this.pipeline);
		atmosphereCameraPassEncoder.setBindGroup(0, this.group0);
		atmosphereCameraPassEncoder.setBindGroup(1, this.group1);
		atmosphereCameraPassEncoder.setBindGroup(2, gbuffer.readGroup);
		atmosphereCameraPassEncoder.dispatchWorkgroups(
			Math.ceil(this.outputColor.width / 16),
			Math.ceil(this.outputColor.height / 16)
		);
		atmosphereCameraPassEncoder.end();
	}
}
