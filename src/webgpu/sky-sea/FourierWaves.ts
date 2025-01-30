export class FFTWaveSpectrumResources {
	// We produce a discrete spectrum of waves, for which the various values will be stored in square textures
	// This dimension determines the diameter of that square, so the total number of frequencies we produce
	// Our spectrum is discrete so we can apply an IDFT algorithm to determine the displacement when rendering the sums of these waves
	// (x,z) position in this grid uniquely identifies a wave with wave vector k = (k_x,k_z)
	spectrumDimension: number;

	// A two-channel texture of pairs of gaussian random variables, used to generate the amplitudes of our waves
	gaussianNoise: GPUTexture;
	gaussianNoiseView: GPUTextureView;

	constructor(device: GPUDevice) {
		const GAUSSIAN_NOISE_FORMAT: GPUTextureFormat = "rg32float";
		const SPECTRUM_DIMENSION = 2048;

		this.spectrumDimension = SPECTRUM_DIMENSION;
		this.gaussianNoise = device.createTexture({
			label: "FFT Wave Gaussian Noise",
			format: GAUSSIAN_NOISE_FORMAT,
			size: {
				width: this.spectrumDimension,
				height: this.spectrumDimension,
			},
			usage:
				GPUTextureUsage.COPY_DST |
				GPUTextureUsage.STORAGE_BINDING |
				GPUTextureUsage.TEXTURE_BINDING,
		});
		this.gaussianNoiseView = this.gaussianNoise.createView();

		const FLOAT32_PER_GAUSSIAN_NOISE_TEXEL = 2;
		const BYTES_PER_TEXEL = 8;
		const BYTES_PER_ROW = BYTES_PER_TEXEL * this.spectrumDimension;
		const randomNumbers = new Float32Array(
			this.spectrumDimension *
				this.spectrumDimension *
				FLOAT32_PER_GAUSSIAN_NOISE_TEXEL
		);

		for (let i = 0; i < randomNumbers.length; i++) {
			// Box-Muller transform two uniform random numbers to gaussian pair
			// https://en.wikipedia.org/wiki/Box%E2%80%93Muller_transform
			const u_0 = Math.random();
			const u_1 = Math.random();

			const amplitude = Math.sqrt(-2.0 * Math.log(u_0));
			const theta = 2.0 * Math.PI * u_1;

			// We cannot use both gaussians in the pair since they are dependent
			// It may be possible to use the second far away in the texture, but this is a single texture generated
			// on the CPU so it is not a bottleneck
			const z_0 = amplitude * Math.cos(theta);
			// const z_1 = amplitude * Math.sin(theta);

			randomNumbers[i] = z_0;
		}

		device.queue.writeTexture(
			{ texture: this.gaussianNoise },
			randomNumbers,
			{ bytesPerRow: BYTES_PER_ROW },
			{
				width: this.gaussianNoise.width,
				height: this.gaussianNoise.height,
			}
		);
	}
}
