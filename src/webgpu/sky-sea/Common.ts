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
	FFTWaveFourierAmplitude,
	FFTWaveDy_plus_iDxdz_Amplitude,
	FFTWaveDx_plus_iDz_Amplitude,
	FFTWaveDydx_plus_iDydz_Amplitude,
	FFTWaveDxdx_plus_iDzdz_Amplitude,
	FFTWaveDx_Dy_Dz_Dxdz_Spatial,
	FFTWaveDydx_Dydz_Dxdx_Dzdz_Spatial,
}

export interface TimestampQueryInterval {
	querySet: GPUQuerySet;
	beginWriteIndex: GPUSize32;
	endWriteIndex: GPUSize32;
}
