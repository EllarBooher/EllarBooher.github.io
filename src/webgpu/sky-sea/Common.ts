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
	FFTWaveRealizedAmplitude,
	FFTWaveHeightmap,
}
