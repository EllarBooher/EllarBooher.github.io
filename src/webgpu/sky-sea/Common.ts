export class Extent2D {
	width = 1;
	height = 1;
}

export enum RenderOutput {
	AtmosphereSkyviewLUT,
	AtmosphereTransmittanceLUT,
	AtmosphereMultiscatterLUT,
	AtmosphereAerialPerspectiveLUT,
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
	readonly viewDimension: GPUTextureViewDimension;

	get mipLevelCount() {
		return this.texture.mipLevelCount;
	}
	get depthOrArrayLayerCount() {
		return this.texture.depthOrArrayLayers;
	}

	constructor(texture: GPUTexture) {
		this.texture = texture;

		let arrayLayerCount = 1;
		let dimension: GPUTextureViewDimension = this.texture.dimension;
		if (
			this.texture.dimension == "2d" &&
			this.texture.depthOrArrayLayers > 1
		) {
			arrayLayerCount = this.texture.depthOrArrayLayers;
			dimension = "2d-array";
		}

		this.viewDimension = dimension;

		this.view = texture.createView({
			label: `Render Output View for '${texture.label}'`,
			dimension: this.viewDimension,
			arrayLayerCount: arrayLayerCount,
			baseArrayLayer: 0,
		});
	}
}
