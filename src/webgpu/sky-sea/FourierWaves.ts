import FourierWavesShaderPak from "../../shaders/sky-sea/fourier_waves.wgsl";

// The dimension of the fourier grid, i.e., the sqrt of the number of unique waves for our discrete fourier transform
const SPECTRUM_DIMENSION = 512;
const GAUSSIAN_NOISE_FORMAT: GPUTextureFormat = "rg32float";

const FOURIER_AMPLITUDE_FORMAT: GPUTextureFormat = "rg32float";
const REALIZED_FOURIER_AMPLITUDE_FORMAT: GPUTextureFormat = "rg32float";

export class FFTWaveSpectrumResources {
	// We produce a discrete spectrum of waves, for which the various values will be stored in square textures
	// This dimension determines the diameter of that square, so the total number of frequencies we produce
	// Our spectrum is discrete so we can apply an IDFT algorithm to determine the displacement when rendering the sums of these waves
	// (x,z) position in this grid uniquely identifies a wave with wave vector k = (k_x,k_z)
	spectrumDimension: number;

	// A two-channel texture of pairs of gaussian random variables, used to generate the amplitudes of our waves
	gaussianNoise: GPUTexture;
	gaussianNoiseView: GPUTextureView;

	// A fourier grid of wave amplitude that are a function of the wave vector
	fourierAmplitude: GPUTexture;
	fourierAmplitudeView: GPUTextureView;

	/*
	@group(0) @binding(0) var out_fourier_amplitude: texture_storage_2d<rg32float, write>;
	@group(0) @binding(1) var in_gaussian_random_pairs: texture_storage_2d<rg32float, read>;
	*/
	fourierAmplitudeGroup0: GPUBindGroup;
	fourierAmplitudePipeline: GPUComputePipeline;

	// A fourier grid of realized wave amplitudes that are a function of wave vector (stored in fourierAmplitude) and time
	realizedFourierAmplitude: GPUTexture;
	realizedFourierAmplitudeView: GPUTextureView;

	constructor(device: GPUDevice) {
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

		this.fourierAmplitude = device.createTexture({
			label: "FFT Wave Fourier Amplitude h_0(k)",
			format: FOURIER_AMPLITUDE_FORMAT,
			size: {
				width: this.spectrumDimension,
				height: this.spectrumDimension,
			},
			usage:
				GPUTextureUsage.STORAGE_BINDING |
				GPUTextureUsage.TEXTURE_BINDING,
		});
		this.fourierAmplitudeView = this.fourierAmplitude.createView();

		const fourierAmplitudeGroup0Layout = device.createBindGroupLayout({
			label: "FFT Wave Fourier Amplitude h_0(k) Group 0",
			entries: [
				{
					binding: 0,
					visibility: GPUShaderStage.COMPUTE,
					storageTexture: {
						format: FOURIER_AMPLITUDE_FORMAT,
						access: "write-only",
					},
				},
				{
					binding: 1,
					visibility: GPUShaderStage.COMPUTE,
					storageTexture: {
						format: GAUSSIAN_NOISE_FORMAT,
						access: "read-only",
					},
				},
			],
		});

		this.fourierAmplitudeGroup0 = device.createBindGroup({
			label: "FFT Wave Fourier Amplitude h_0(k) Group 0",
			layout: fourierAmplitudeGroup0Layout,
			entries: [
				{
					binding: 0,
					resource: this.fourierAmplitudeView,
				},
				{
					binding: 1,
					resource: this.gaussianNoiseView,
				},
			],
		});

		const shaderModule = device.createShaderModule({
			label: "FFT Wave",
			code: FourierWavesShaderPak,
		});

		this.fourierAmplitudePipeline = device.createComputePipeline({
			label: "FFT Wave Fourier Amplitude h_0(k)",
			layout: device.createPipelineLayout({
				label: "FFT Wave Fourier Amplitude h_0(k)",
				bindGroupLayouts: [fourierAmplitudeGroup0Layout],
			}),
			compute: {
				module: shaderModule,
				entryPoint: "computeFourierAmplitude",
			},
		});

		this.realizedFourierAmplitude = device.createTexture({
			label: "FFT Wave Realized Fourier Amplitude h(k,t)",
			format: REALIZED_FOURIER_AMPLITUDE_FORMAT,
			size: {
				width: this.spectrumDimension,
				height: this.spectrumDimension,
			},
			usage: GPUTextureUsage.STORAGE_BINDING,
		});
		this.realizedFourierAmplitudeView =
			this.realizedFourierAmplitude.createView();

		const commandEncoder = device.createCommandEncoder({
			label: "FFT Wave Precompute",
		});
		const passEncoder = commandEncoder.beginComputePass({
			label: "FFT Wave Fourier Amplitude",
		});
		passEncoder.setPipeline(this.fourierAmplitudePipeline);
		passEncoder.setBindGroup(0, this.fourierAmplitudeGroup0);
		passEncoder.dispatchWorkgroups(2048 / 16, 2048 / 16, 1);
		passEncoder.end();
		device.queue.submit([commandEncoder.finish()]);
	}
}
