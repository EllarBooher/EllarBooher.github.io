export class Extent2D {
	width = 1;
	height = 1;
}

export enum RenderOutput {
	SkyviewLUT,
	TransmittanceLUT,
	MultiscatterLUT,
	Scene,
	GBufferColor,
	GBufferNormal,
	FFTWaveSpectrumGaussianNoise,
	FFTWaveInitialAmplitude,
	FFTWaveDx_plus_iDy_Dz_iDxdz_Amplitude,
	FFTWaveDydx_plus_iDydz_Dxdx_plus_iDzdz_Amplitude,
	FFTWaveTurbulenceJacobian,
	FFTWaveDx_Dy_Dz_Dxdz_Spatial,
	FFTWaveDydx_Dydz_Dxdx_Dzdz_Spatial,
}

export class RenderOutputTexture {
	private texture: GPUTexture;
	readonly view: GPUTextureView;
	get mipLevelCount() {
		return this.texture.mipLevelCount;
	}
	get depthOrArrayLayerCount() {
		return this.texture.depthOrArrayLayers;
	}

	constructor(texture: GPUTexture) {
		this.texture = texture;

		this.view = texture.createView({
			label: `Render Output View for '${texture.label}'`,
			dimension: this.depthOrArrayLayerCount > 1 ? "2d-array" : "2d",
			arrayLayerCount: this.depthOrArrayLayerCount,
			baseArrayLayer: 0,
		});
	}
}

export interface TimestampQueryInterval {
	querySet: GPUQuerySet;
	beginWriteIndex: GPUSize32;
	endWriteIndex: GPUSize32;
}
