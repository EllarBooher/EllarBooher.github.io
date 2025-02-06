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

export interface TimestampQueryInterval {
	querySet: GPUQuerySet;
	beginWriteIndex: GPUSize32;
	endWriteIndex: GPUSize32;
}

export enum WaveModel {
	Cosine,
	Gerstner,
	FFTDisplacement,
}
