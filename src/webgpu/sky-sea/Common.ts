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
	FFTWaveAmplitude_Dy,
	FFTWaveAmplitude_Dx_plus_iDz,
	FFTWaveDisplacement,
}

export interface TimestampQueryInterval {
	querySet: GPUQuerySet;
	beginWriteIndex: GPUSize32;
	endWriteIndex: GPUSize32;
}
