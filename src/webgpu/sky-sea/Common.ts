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
	FFTWaveDy_plus_iDxdz_Amplitude,
	FFTWaveDx_plus_iDz_Amplitude,
	FFTWaveDydx_plus_iDydz_Amplitude,
	FFTWaveDxdx_plus_iDzdz_Amplitude,
	FFTWaveDx_Dy_Dz_Dxdz_Spatial,
	FFTWaveDydx_Dydz_Dxdx_Dzdz_Spatial,
}

export class RenderOutputTexture {
	private texture: GPUTexture;
	readonly view: GPUTextureView;
	get mipLevelCount() {
		return this.texture.mipLevelCount;
	}

	constructor(texture: GPUTexture) {
		this.texture = texture;
		this.view = texture.createView();
	}
}

export interface TimestampQueryInterval {
	querySet: GPUQuerySet;
	beginWriteIndex: GPUSize32;
	endWriteIndex: GPUSize32;
}
