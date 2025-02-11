import MipMapPak from "../../shaders/sky-sea/mipmap.wgsl";

const MIP_MAP_TEXTURE_FORMAT = "rgba16float";

export interface MipMapGenerationTextureBindings {
	bindGroupsByMipLevel: GPUBindGroup[];
	level0Size: { width: number; height: number };
}

export class MipMapGenerationPassResources {
	/*
	 * @group(0) @binding(0) var out_next_mip_level: texture_storage_2d<rgba16float, write>;
	 * @group(0) @binding(1) var in_previous_mip_level: texture_2d<f32>;
	 */
	private fillMipMapTextureInOutLayout: GPUBindGroupLayout;
	// private fillMipMapTextureBindGroups: GPUBindGroup[];

	// private baseSize: { width: number; height: number };

	private fillMipMapKernel: GPUComputePipeline;

	createBindGroups(
		device: GPUDevice,
		texture: GPUTexture
	): MipMapGenerationTextureBindings {
		if (texture.format != MIP_MAP_TEXTURE_FORMAT) {
			throw new RangeError(
				`Invalid source texture (label ${texture.label}) for MipMap generation`,
				{
					cause: `Source format is ${texture.format} when expected ${MIP_MAP_TEXTURE_FORMAT}`,
				}
			);
		}
		if (!(texture.usage & GPUTextureUsage.COPY_SRC)) {
			throw new RangeError(
				`Invalid source texture (label ${texture.label}) for MipMap generation`,
				{
					cause: `Source usage is missing required flag COPY_SRC`,
				}
			);
		}
		if (
			texture.width != texture.height ||
			!Number.isInteger(Math.log2(texture.width))
		) {
			throw new RangeError(
				`Invalid source texture (label ${texture.label}) for MipMap generation`,
				{
					cause: `Source dimensions of (${texture.width},${texture.height}) are invalid, texture must be square and power-of-2.`,
				}
			);
		}

		const maxMipMapCount = Math.log2(texture.width);

		return {
			level0Size: {
				width: texture.width,
				height: texture.height,
			},
			bindGroupsByMipLevel: [
				...new Array(
					Math.min(maxMipMapCount, texture.mipLevelCount) - 1
				).keys(),
			].map((_value, index) => {
				const nextMipLevel = index + 1;
				const previousMipLevel = index;
				return device.createBindGroup({
					label: `MipMap Generation for '${texture.label}' IO Bind Group '${previousMipLevel} => ${nextMipLevel}'`,
					layout: this.fillMipMapTextureInOutLayout,
					entries: [
						{
							binding: 0,
							resource: texture.createView({
								baseMipLevel: nextMipLevel,
								mipLevelCount: 1,
							}),
						},
						{
							binding: 1,
							resource: texture.createView({
								baseMipLevel: previousMipLevel,
								mipLevelCount: 1,
							}),
						},
					],
				});
			}),
		};
	}

	constructor(device: GPUDevice /*, texture: GPUTexture */) {
		this.fillMipMapTextureInOutLayout = device.createBindGroupLayout({
			label: "MipMap Generation fillMipMap Texture In-Out",
			entries: [
				{
					binding: 0,
					visibility: GPUShaderStage.COMPUTE,
					storageTexture: { format: MIP_MAP_TEXTURE_FORMAT },
				},
				{
					binding: 1,
					visibility: GPUShaderStage.COMPUTE,
					texture: { sampleType: "unfilterable-float" },
				},
			],
		});

		const shaderModule = device.createShaderModule({
			label: "sky-sea/mipmap.wgsl",
			code: MipMapPak,
		});

		const fillMipMapKernelLayout = device.createPipelineLayout({
			label: "MipMap Generation fillMipMap Kernel",
			bindGroupLayouts: [this.fillMipMapTextureInOutLayout],
		});

		this.fillMipMapKernel = device.createComputePipeline({
			label: "MipMap Generation fillMipMap Kernel",
			layout: fillMipMapKernelLayout,
			compute: {
				module: shaderModule,
				entryPoint: "fillMipMap",
			},
		});
	}

	updateMipMaps(
		commandEncoder: GPUCommandEncoder,
		target: MipMapGenerationTextureBindings
	) {
		const fillMipMapsPass = commandEncoder.beginComputePass({
			label: `MipMap Generation`,
		});

		fillMipMapsPass.setPipeline(this.fillMipMapKernel);
		target.bindGroupsByMipLevel.forEach((bindGroup, index) => {
			fillMipMapsPass.setBindGroup(0, bindGroup);

			const previousMipScale = 1 << index;

			fillMipMapsPass.dispatchWorkgroups(
				target.level0Size.width / previousMipScale / 16,
				target.level0Size.height / previousMipScale / 16
			);
		});
		fillMipMapsPass.end();
	}
}
