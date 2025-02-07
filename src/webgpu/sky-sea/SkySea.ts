import { Controller as LilController, GUI as LilGUI } from "lil-gui";
import { RendererApp, RendererAppConstructor } from "../RendererApp.ts";
import { mat4, vec3, vec4 } from "wgpu-matrix";
import { GlobalUBO } from "./UBO.ts";
import { Extent2D, RenderOutput, WaveModel } from "./Common.ts";

import { GBuffer } from "./GBuffer.ts";
import { TransmittanceLUTPassResources } from "./TransmittanceLUT.ts";
import { MultiscatterLUTPassResources } from "./MultiscatterLUT.ts";
import { SkyViewLUTPassResources } from "./SkyViewLUT.ts";
import { FFTWaveSpectrumResources } from "./FourierWaves.ts";
import { WaveSurfaceDisplacementPassResources } from "./WaveDisplacement.ts";
import { AtmosphereCameraPassResources } from "./AtmosphereCamera.ts";
import { FullscreenQuadPassResources } from "./FullscreenQuad.ts";

const TRANSMITTANCE_LUT_EXTENT = { width: 2048, height: 1024 } as const;
const MULTISCATTER_LUT_EXTENT = { width: 1024, height: 1024 } as const;
const SKYVIEW_LUT_EXTENT = { width: 1024, height: 512 } as const;

class OutputTexturePostProcessSettings {
	flip = false;
	color_gain: {
		r: number;
		g: number;
		b: number;
	} = { r: 1.0, g: 1.0, b: 1.0 };
}

const RENDER_SCALES = [0.25, 0.3333, 0.5, 0.75, 1.0, 1.5, 2.0, 4.0];

enum FrametimeCategory {
	DrawToDraw,
	SkyviewLUT,
	FFTWaves,
	OceanSurface,
	AtmosphereCamera,
	FullscreenQuad,
}

class ArithmeticSumArray {
	private values: number[];
	private sum = 0.0;
	private average_ = 0.0;
	// Count how many values are valid. Starts at zero, goes to values.length, and stays there. Necessary to keep runningSum valid before the buffer can be filled once.
	private count = 0;
	// Index into values of next value to write
	private index = 0;

	constructor(capacity: number) {
		this.values = new Array<number>(capacity).fill(0.0);
	}

	get average() {
		return this.average_;
	}

	public push(value: number) {
		if (this.index >= this.values.length) {
			this.index = 0;
		}
		if (this.index < this.count) {
			this.sum -= this.values[this.index];
		}
		this.values[this.index] = value;
		this.sum += value;
		this.count = Math.min(this.values.length, this.count + 1);
		this.average_ = this.sum / this.count;
		this.index += 1;
	}
}

class SkySeaApp implements RendererApp {
	transmittanceLUTPassResources: TransmittanceLUTPassResources;
	multiscatterLUTPassResources: MultiscatterLUTPassResources;
	skyviewLUTPassResources: SkyViewLUTPassResources;
	fftWaveSpectrumResources: FFTWaveSpectrumResources;
	waveSurfaceDisplacementPassResources: WaveSurfaceDisplacementPassResources;
	atmosphereCameraPassResources: AtmosphereCameraPassResources;
	fullscreenQuadPassResources: FullscreenQuadPassResources;

	gbuffer: GBuffer;
	scaledSize: Extent2D;
	rawSize: Extent2D;

	settings: {
		outputTexture: RenderOutput;
		oceanWaveModel: WaveModel;
		outputTextureSettings: Map<
			RenderOutput,
			OutputTexturePostProcessSettings
		>;
		currentOutputTextureSettings: OutputTexturePostProcessSettings;
		orbit: {
			timeHours: number;
			timeSpeedupFactor: number;
			reversed: boolean;
			paused: boolean;
			inclinationRadians: number;
			sunsetAzimuthRadians: number;
		};
		renderScale: number;
	};

	uiReadonly: {
		averageFPS: number;
		frametimeControllers: Map<FrametimeCategory, LilController>;
	};

	globalUBO: GlobalUBO;

	fullscreenQuadIndexBuffer: GPUBuffer;

	device: GPUDevice;
	presentFormat: GPUTextureFormat;
	quit = false;

	// undefined when 'timestamp-query' feature is disabled
	frametimeQuery:
		| {
				querySet: GPUQuerySet;
				// We cannot read directly from the buffer that WebGPU writes the timestamps to
				// So we use a copy operation, then an async mapping.
				// Since we cannot map until unmapping at the end of this async operation, we set a flag to avoid that until then.
				writeBuffer: GPUBuffer;
				readBuffer: GPUBuffer;
				mappingLock: boolean;
		  }
		| undefined;
	frametimeAverages: Map<FrametimeCategory, ArithmeticSumArray>;

	startTime: number;
	dummyFrameCounter: number;
	probationFrameCounter: number;
	targetFPS = 0.0;
	float32Filterable: boolean;

	setupUI(gui: LilGUI) {
		const outputTextureController = gui
			.add(this.settings, "outputTexture", {
				Scene: RenderOutput.Scene,
				"Transmittance LUT": RenderOutput.TransmittanceLUT,
				"Multiscatter LUT": RenderOutput.MultiscatterLUT,
				"Skyview LUT": RenderOutput.SkyviewLUT,
				"GBuffer Color": RenderOutput.GBufferColor,
				"GBuffer Normal": RenderOutput.GBufferNormal,
				"FFT Wave Gaussian Noise":
					RenderOutput.FFTWaveSpectrumGaussianNoise,
				"FFT Wave Initial Amplitude":
					RenderOutput.FFTWaveFourierAmplitude,
				"FFT Wave Time-Dependent Amplitude (Dy)":
					RenderOutput.FFTWaveAmplitude_Dy,
				"FFT Wave Time-Dependent Amplitude (Dx + i*Dz)":
					RenderOutput.FFTWaveAmplitude_Dx_plus_iDz,
				"FFT Wave Displacement": RenderOutput.FFTWaveDisplacement,
			})
			.name("Render Output")
			.listen();
		gui.add(this.settings, "renderScale", RENDER_SCALES)
			.name("Render Resolution Scale")
			.decimals(1)
			.onFinishChange((_v: number) => {
				this.handleResize(this.rawSize.width, this.rawSize.height);
			})
			.listen();
		gui.add(this.uiReadonly, "averageFPS")
			.decimals(1)
			.disable()
			.name("Average FPS")
			.listen();

		gui.add(this.settings, "oceanWaveModel", {
			Cosine: WaveModel.Cosine,
			Gerstner: WaveModel.Gerstner,
			"FFT Waves": WaveModel.FFTDisplacement,
		}).name("Ocean Wave Model");

		const sunFolder = gui.addFolder("Sun Parameters").open();

		sunFolder
			.add(this.settings.orbit, "timeHours")
			.min(0.0)
			.max(24.0)
			.name("Time in Hours")
			.listen();
		sunFolder
			.add(this.settings.orbit, "timeSpeedupFactor")
			.min(1.0)
			.max(50000)
			.step(1.0)
			.name("Time Multiplier");
		sunFolder.add(this.settings.orbit, "paused").name("Pause Sun");

		sunFolder
			.add(
				{
					fn: () => {
						this.settings.orbit.timeHours = this.settings.orbit
							.reversed
							? 18.0 + 0.5
							: 6.0 - 0.5;
					},
				},
				"fn"
			)
			.name("Skip to Sunrise");
		sunFolder
			.add(
				{
					fn: () => {
						this.settings.orbit.timeHours = this.settings.orbit
							.reversed
							? 6.0 + 0.5
							: 18.0 - 0.5;
					},
				},
				"fn"
			)
			.name("Skip to Sunset");

		sunFolder.add(this.settings.orbit, "reversed").name("Reverse Sun");
		sunFolder
			.add(this.settings.orbit, "sunsetAzimuthRadians")
			.name("Sun Azimuth")
			.min(0.0)
			.max(2.0 * Math.PI);
		sunFolder
			.add(this.settings.orbit, "inclinationRadians")
			.name("Sun Inclination")
			.min(0.0)
			.max(Math.PI);

		const outputTextureFolder = gui.addFolder("Output Transform").close();
		if (
			!this.fullscreenQuadPassResources.uboDataByOutputTexture.has(
				this.settings.outputTexture
			)
		) {
			outputTextureFolder.hide();
		}
		outputTextureFolder
			.add(this.settings.currentOutputTextureSettings, "flip")
			.name("Flip Image")
			.listen();
		outputTextureFolder
			.add({ gain: 0.0 }, "gain")
			.name("RGB")
			.min(0.0)
			.max(100.0)
			.onChange((v: number) => {
				this.settings.currentOutputTextureSettings.color_gain.r = v;
				this.settings.currentOutputTextureSettings.color_gain.g = v;
				this.settings.currentOutputTextureSettings.color_gain.b = v;
			});
		outputTextureFolder
			.add(this.settings.currentOutputTextureSettings.color_gain, "r")
			.name("R")
			.min(0.0)
			.max(100.0)
			.listen();
		outputTextureFolder
			.add(this.settings.currentOutputTextureSettings.color_gain, "g")
			.name("G")
			.min(0.0)
			.max(100.0)
			.listen();
		outputTextureFolder
			.add(this.settings.currentOutputTextureSettings.color_gain, "b")
			.name("B")
			.min(0.0)
			.max(100.0)
			.listen();
		outputTextureController.onChange((newValue: RenderOutput) => {
			const previousValue =
				outputTextureController._listenPrevValue as RenderOutput;

			if (!this.settings.outputTextureSettings.has(previousValue)) {
				this.settings.outputTextureSettings.set(
					previousValue,
					new OutputTexturePostProcessSettings()
				);
			}

			const oldSettings =
				this.settings.outputTextureSettings.get(previousValue)!;
			oldSettings.flip = this.settings.currentOutputTextureSettings.flip;
			Object.assign(
				oldSettings.color_gain,
				this.settings.currentOutputTextureSettings.color_gain
			);

			if (!this.settings.outputTextureSettings.has(newValue)) {
				this.settings.outputTextureSettings.set(
					newValue,
					new OutputTexturePostProcessSettings()
				);
			}

			const newSettings =
				this.settings.outputTextureSettings.get(newValue)!;
			this.settings.currentOutputTextureSettings.flip = newSettings.flip;
			Object.assign(
				this.settings.currentOutputTextureSettings.color_gain,
				newSettings.color_gain
			);
		});

		const performanceFolder = gui.addFolder("Performance").close();
		this.frametimeAverages.forEach((_value, category) => {
			this.uiReadonly.frametimeControllers.set(
				category,
				performanceFolder
					.add({ value: 0 }, "value")
					.name(`${FrametimeCategory[category]} (ms)`)
					.decimals(6)
					.disable()
			);
		});
	}

	constructor(
		device: GPUDevice,
		presentFormat: GPUTextureFormat,
		time: number
	) {
		this.device = device;

		this.float32Filterable = device.features.has("float32-filterable");

		this.presentFormat = presentFormat;
		this.startTime = time;
		this.settings = {
			outputTexture: RenderOutput.Scene,
			oceanWaveModel: WaveModel.FFTDisplacement,
			outputTextureSettings: new Map<
				RenderOutput,
				OutputTexturePostProcessSettings
			>([
				[
					RenderOutput.Scene,
					{
						flip: false,
						color_gain: { r: 1.0, g: 1.0, b: 1.0 },
					},
				],
				[
					RenderOutput.TransmittanceLUT,
					{
						flip: true,
						color_gain: { r: 1.0, g: 1.0, b: 1.0 },
					},
				],
				[
					RenderOutput.MultiscatterLUT,
					{
						flip: true,
						color_gain: { r: 15.0, g: 15.0, b: 15.0 },
					},
				],
				[
					RenderOutput.SkyviewLUT,
					{
						flip: false,
						color_gain: { r: 8.0, g: 8.0, b: 8.0 },
					},
				],
				[
					RenderOutput.GBufferColor,
					{
						flip: false,
						color_gain: { r: 1.0, g: 1.0, b: 1.0 },
					},
				],
				[
					RenderOutput.GBufferNormal,
					{
						flip: false,
						color_gain: { r: 1.0, g: 1.0, b: 1.0 },
					},
				],
				[
					RenderOutput.FFTWaveSpectrumGaussianNoise,
					{
						flip: false,
						color_gain: { r: 1.0, g: 1.0, b: 1.0 },
					},
				],
				[
					RenderOutput.FFTWaveFourierAmplitude,
					{
						flip: false,
						color_gain: { r: 100.0, g: 100.0, b: 100.0 },
					},
				],
				[
					RenderOutput.FFTWaveAmplitude_Dy,
					{
						flip: false,
						color_gain: { r: 100.0, g: 100.0, b: 100.0 },
					},
				],
				[
					RenderOutput.FFTWaveAmplitude_Dx_plus_iDz,
					{
						flip: false,
						color_gain: { r: 100.0, g: 100.0, b: 100.0 },
					},
				],
				[
					RenderOutput.FFTWaveDisplacement,
					{
						flip: false,
						color_gain: { r: 1.0, g: 1.0, b: 1.0 },
					},
				],
			]),
			currentOutputTextureSettings: {
				flip: false,
				color_gain: {
					r: 1.0,
					g: 1.0,
					b: 1.0,
				},
			},
			orbit: {
				timeHours: 5.5,
				timeSpeedupFactor: 400.0,
				paused: false,
				reversed: false,
				inclinationRadians: Math.PI / 2,
				sunsetAzimuthRadians: 0.0,
			},
			renderScale: 1.5,
		};
		this.uiReadonly = {
			averageFPS: 0.0,
			frametimeControllers: new Map(),
		};
		this.scaledSize = { width: 1.0, height: 1.0 };
		this.rawSize = { width: 1.0, height: 1.0 };

		if (
			this.settings.outputTextureSettings.has(this.settings.outputTexture)
		) {
			const newSettings = this.settings.outputTextureSettings.get(
				this.settings.outputTexture
			)!;
			this.settings.currentOutputTextureSettings.flip = newSettings.flip;
			this.settings.currentOutputTextureSettings.color_gain.r =
				newSettings.color_gain.r;
			this.settings.currentOutputTextureSettings.color_gain.g =
				newSettings.color_gain.g;
			this.settings.currentOutputTextureSettings.color_gain.b =
				newSettings.color_gain.b;
		}

		this.frametimeAverages = new Map();
		if (device.features.has("timestamp-query")) {
			// Space for start & end for each step
			// webgpu timestamps are 64 bit nanoseconds
			const BYTES_PER_TIMESTAMP_SAMPLE = 8;
			const numberOfTimestamps =
				2 *
				Object.keys(FrametimeCategory)
					.map((v) => Number(v))
					.filter(isNaN).length;
			this.frametimeQuery = {
				mappingLock: false,
				querySet: device.createQuerySet({
					type: "timestamp",
					count: numberOfTimestamps,
				}),
				writeBuffer: device.createBuffer({
					size: BYTES_PER_TIMESTAMP_SAMPLE * numberOfTimestamps,
					usage:
						GPUBufferUsage.COPY_SRC | GPUBufferUsage.QUERY_RESOLVE,
				}),
				readBuffer: device.createBuffer({
					size: BYTES_PER_TIMESTAMP_SAMPLE * numberOfTimestamps,
					usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ,
				}),
			};
			Object.keys(FrametimeCategory)
				.map((v) => Number(v))
				.filter((v) => !isNaN(v))
				.forEach((index) => {
					const category = index as FrametimeCategory;
					this.frametimeAverages.set(
						category,
						new ArithmeticSumArray(400)
					);
					Object.assign(this.uiReadonly, String(category), 0.0);
				});
		} else {
			console.warn(
				"WebGPU feature 'timestamp-query' is not supported. Continuing, but without performance information about specific stages."
			);
			this.frametimeAverages.set(
				FrametimeCategory.DrawToDraw,
				new ArithmeticSumArray(400)
			);
		}

		this.dummyFrameCounter = 10.0;
		this.probationFrameCounter = 100.0;

		this.globalUBO = new GlobalUBO(device);
		this.globalUBO.writeToGPU(this.device);

		this.gbuffer = new GBuffer(device, { width: 1, height: 1 });

		this.transmittanceLUTPassResources = new TransmittanceLUTPassResources(
			this.device,
			TRANSMITTANCE_LUT_EXTENT,
			this.globalUBO
		);

		this.multiscatterLUTPassResources = new MultiscatterLUTPassResources(
			this.device,
			MULTISCATTER_LUT_EXTENT,
			this.transmittanceLUTPassResources.view,
			this.float32Filterable,
			this.globalUBO
		);

		this.skyviewLUTPassResources = new SkyViewLUTPassResources(
			this.device,
			SKYVIEW_LUT_EXTENT,
			this.transmittanceLUTPassResources.view,
			this.multiscatterLUTPassResources.view,
			this.float32Filterable,
			this.globalUBO
		);

		this.fftWaveSpectrumResources = new FFTWaveSpectrumResources(
			this.device,
			this.globalUBO
		);

		const fftWaveViews = this.fftWaveSpectrumResources.views();
		this.waveSurfaceDisplacementPassResources =
			new WaveSurfaceDisplacementPassResources(
				this.device,
				this.globalUBO,
				this.gbuffer.colorWithDepthInAlpha.format,
				this.gbuffer.normal.format,
				this.gbuffer.depth.format,
				fftWaveViews.displacementView
			);

		const fullscreenQuadIndices = new Uint32Array([0, 1, 2, 0, 2, 3]);
		this.fullscreenQuadIndexBuffer = device.createBuffer({
			size: fullscreenQuadIndices.byteLength,
			usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST,
		});
		device.queue.writeBuffer(
			this.fullscreenQuadIndexBuffer,
			0,
			fullscreenQuadIndices,
			0,
			fullscreenQuadIndices.length
		);

		this.atmosphereCameraPassResources = new AtmosphereCameraPassResources(
			this.device,
			this.gbuffer.readGroupLayout,
			this.transmittanceLUTPassResources.view,
			this.multiscatterLUTPassResources.view,
			this.skyviewLUTPassResources.view,
			this.float32Filterable,
			this.globalUBO
		);

		this.fullscreenQuadPassResources = new FullscreenQuadPassResources(
			this.device,
			new Map<RenderOutput, GPUTextureView>([
				[
					RenderOutput.Scene,
					this.atmosphereCameraPassResources.outputColorView,
				],
				[
					RenderOutput.TransmittanceLUT,
					this.transmittanceLUTPassResources.view,
				],
				[
					RenderOutput.MultiscatterLUT,
					this.multiscatterLUTPassResources.view,
				],
				[RenderOutput.SkyviewLUT, this.skyviewLUTPassResources.view],
				[
					RenderOutput.GBufferColor,
					this.gbuffer.colorWithDepthInAlphaView,
				],
				[RenderOutput.GBufferNormal, this.gbuffer.normalView],
				[
					RenderOutput.FFTWaveSpectrumGaussianNoise,
					fftWaveViews.gaussianNoiseView,
				],
				[
					RenderOutput.FFTWaveFourierAmplitude,
					fftWaveViews.fourierAmplitudeView,
				],
				[
					RenderOutput.FFTWaveAmplitude_Dy,
					fftWaveViews.amplitude_Dy_View,
				],
				[
					RenderOutput.FFTWaveAmplitude_Dx_plus_iDz,
					fftWaveViews.amplitude_Dx_plus_iDz_View,
				],
				[
					RenderOutput.FFTWaveDisplacement,
					fftWaveViews.displacementView,
				],
			]),
			this.presentFormat
		);

		const commandEncoder = device.createCommandEncoder();

		let passEncoder = commandEncoder.beginComputePass();
		passEncoder.setPipeline(this.transmittanceLUTPassResources.pipeline);
		passEncoder.setBindGroup(0, this.transmittanceLUTPassResources.group0);
		passEncoder.setBindGroup(1, this.transmittanceLUTPassResources.group1);
		passEncoder.dispatchWorkgroups(
			Math.ceil(TRANSMITTANCE_LUT_EXTENT.width / 16),
			Math.ceil(TRANSMITTANCE_LUT_EXTENT.height / 16)
		);
		passEncoder.end();

		passEncoder = commandEncoder.beginComputePass();
		passEncoder.setPipeline(this.multiscatterLUTPassResources.pipeline);
		passEncoder.setBindGroup(0, this.multiscatterLUTPassResources.group0);
		passEncoder.setBindGroup(1, this.multiscatterLUTPassResources.group1);
		passEncoder.dispatchWorkgroups(
			Math.ceil(MULTISCATTER_LUT_EXTENT.width / 16),
			Math.ceil(MULTISCATTER_LUT_EXTENT.height / 16)
		);
		passEncoder.end();

		device.queue.submit([commandEncoder.finish()]);
	}

	updateOrbit(deltaTimeMilliseconds: number) {
		const orbit = this.settings.orbit;

		if (!this.settings.orbit.paused) {
			const HOURS_TO_MILLISECONDS = 60.0 * 60.0 * 1000.0;
			orbit.timeHours +=
				((orbit.reversed ? -1.0 : 1.0) *
					orbit.timeSpeedupFactor *
					deltaTimeMilliseconds) /
				HOURS_TO_MILLISECONDS;
			orbit.timeHours =
				orbit.timeHours - Math.floor(orbit.timeHours / 24.0) * 24.0;
		}

		// offset the time so that the app starts during the day
		const SUN_ROTATION_RAD_PER_HOUR = (2.0 * Math.PI) / 24.0;
		const SUN_ANOMALY =
			(12.0 - orbit.timeHours) * SUN_ROTATION_RAD_PER_HOUR;

		const sunsetDirection = vec3.create(
			-Math.sin(orbit.sunsetAzimuthRadians),
			0.0,
			Math.cos(orbit.sunsetAzimuthRadians)
		);
		const noonDirection = vec3.create(
			Math.cos(orbit.sunsetAzimuthRadians) *
				Math.cos(orbit.inclinationRadians),
			Math.sin(orbit.inclinationRadians),
			Math.sin(orbit.sunsetAzimuthRadians) *
				Math.cos(orbit.inclinationRadians)
		);
		const sunDirection = vec3.add(
			vec3.scale(sunsetDirection, Math.sin(SUN_ANOMALY)),
			vec3.scale(noonDirection, Math.cos(SUN_ANOMALY))
		);
		vec3.scale(sunDirection, -1.0, this.globalUBO.data.light.forward);
	}

	updateFPSValues(deltaTimeMilliseconds: number) {
		if (deltaTimeMilliseconds > 0.01) {
			this.frametimeAverages
				.get(FrametimeCategory.DrawToDraw)
				?.push(deltaTimeMilliseconds);
			this.uiReadonly.averageFPS =
				1000.0 /
				(this.frametimeAverages.get(FrametimeCategory.DrawToDraw)
					?.average ?? 1000.0);
			this.uiReadonly.frametimeControllers
				.get(FrametimeCategory.DrawToDraw)
				?.setValue(
					this.frametimeAverages.get(FrametimeCategory.DrawToDraw)
						?.average ?? -1.0
				);
		}
	}

	updateCamera(aspectRatio: number) {
		const fov = (60 * Math.PI) / 180;
		const near = 0.1;
		const far = 1000;
		const perspective = mat4.perspective(fov, aspectRatio, near, far);

		const camera_pos = [0, 10, -20];
		const view = mat4.lookAt(camera_pos, [0, 0, 400], [0, 1, 0]);

		Object.assign(this.globalUBO.data.camera, {
			invProj: mat4.inverse(perspective),
			invView: mat4.inverse(view),
			projView: mat4.mul(perspective, view),
			position: vec4.create(
				camera_pos[0],
				camera_pos[1],
				camera_pos[2],
				1.0
			),
		});
	}

	updateTime(deltaTimeMilliseconds: number) {
		const timeUBO = this.globalUBO.data.time;
		timeUBO.timeSeconds += deltaTimeMilliseconds / 1000.0;
		if (timeUBO.timeSeconds > 60.0) {
			timeUBO.timeSeconds = 0.0;
		}
	}

	draw(
		presentTexture: GPUTexture,
		aspectRatio: number,
		_timeMilliseconds: number,
		deltaTimeMilliseconds: number
	): void {
		// Workaround for firefox stalling causing time issues

		if (this.dummyFrameCounter > 0) {
			this.dummyFrameCounter -= 1;
			return;
		}
		const presentView = presentTexture.createView();

		this.updateFPSValues(deltaTimeMilliseconds);

		// Run some dummy frames to estimate monitor refresh and guess the best render scale to hit it
		if (this.probationFrameCounter > 49.0) {
			this.probationFrameCounter -= 1;

			if (this.probationFrameCounter < 50.0) {
				console.log(
					`Average FPS without load is ${this.uiReadonly.averageFPS}`
				);
				this.targetFPS = this.uiReadonly.averageFPS;
			}
			return;
		}
		if (this.probationFrameCounter > 0.0) {
			this.probationFrameCounter -= 1;
			if (this.probationFrameCounter < 1.0) {
				console.log(
					`Average FPS with load is ${this.uiReadonly.averageFPS}`
				);
				const exactScale = this.uiReadonly.averageFPS / this.targetFPS;
				this.settings.renderScale = RENDER_SCALES[0];
				RENDER_SCALES.forEach((scale) => {
					if (
						Math.abs(scale - exactScale) <
						Math.abs(this.settings.renderScale - exactScale)
					) {
						this.settings.renderScale = scale;
					}
				});
				this.handleResize(this.rawSize.width, this.rawSize.height);
			}
		}

		this.updateCamera(aspectRatio);
		this.updateTime(deltaTimeMilliseconds);
		this.updateOrbit(deltaTimeMilliseconds);

		this.globalUBO.writeToGPU(this.device);

		const clearColor = { r: 0.0, g: 0.0, b: 0.0, a: 1.0 };

		const commandEncoder = this.device.createCommandEncoder({
			label: "Main",
		});

		const timestampIndexMapping = new Map<FrametimeCategory, number>();
		let timestampQueryIndex = 0;

		timestampIndexMapping.set(
			FrametimeCategory.FFTWaves,
			timestampQueryIndex
		);
		this.fftWaveSpectrumResources.record(
			this.device,
			commandEncoder,
			this.frametimeQuery !== undefined
				? {
						querySet: this.frametimeQuery.querySet,
						beginWriteIndex: timestampQueryIndex++,
						endWriteIndex: timestampQueryIndex++,
				  }
				: undefined
		);

		timestampIndexMapping.set(
			FrametimeCategory.OceanSurface,
			timestampQueryIndex
		);

		this.waveSurfaceDisplacementPassResources.record(
			this.device,
			commandEncoder,
			this.globalUBO,
			this.frametimeQuery !== undefined
				? {
						querySet: this.frametimeQuery.querySet,
						beginWriteIndex: timestampQueryIndex++,
						endWriteIndex: timestampQueryIndex++,
				  }
				: undefined,
			this.settings.oceanWaveModel,
			{
				colorWithDepthInAlpha: this.gbuffer.colorWithDepthInAlphaView,
				normal: this.gbuffer.normalView,
				depth: this.gbuffer.depthView,
			}
		);

		timestampIndexMapping.set(
			FrametimeCategory.SkyviewLUT,
			timestampQueryIndex
		);
		const skyviewLUTPassEncoder = commandEncoder.beginComputePass({
			timestampWrites:
				this.frametimeQuery !== undefined
					? {
							querySet: this.frametimeQuery.querySet,
							beginningOfPassWriteIndex: timestampQueryIndex++,
							endOfPassWriteIndex: timestampQueryIndex++,
					  }
					: undefined,
			label: "Skyview LUT",
		});
		skyviewLUTPassEncoder.setPipeline(
			this.skyviewLUTPassResources.pipeline
		);
		skyviewLUTPassEncoder.setBindGroup(
			0,
			this.skyviewLUTPassResources.group0
		);
		skyviewLUTPassEncoder.setBindGroup(
			1,
			this.skyviewLUTPassResources.group1
		);
		skyviewLUTPassEncoder.dispatchWorkgroups(
			Math.ceil(SKYVIEW_LUT_EXTENT.width / 16),
			// Trim lower half of skyview lut to save roughly half of the work. We render the ocean over the entirety and are at a lower altitude, so our use case is a bit specific
			Math.ceil(SKYVIEW_LUT_EXTENT.height / (16 * 1.9))
		);
		skyviewLUTPassEncoder.end();

		timestampIndexMapping.set(
			FrametimeCategory.AtmosphereCamera,
			timestampQueryIndex
		);
		const atmosphereCameraPassEncoder = commandEncoder.beginComputePass({
			timestampWrites:
				this.frametimeQuery !== undefined
					? {
							querySet: this.frametimeQuery.querySet,
							beginningOfPassWriteIndex: timestampQueryIndex++,
							endOfPassWriteIndex: timestampQueryIndex++,
					  }
					: undefined,
			label: "Atmosphere Camera",
		});
		atmosphereCameraPassEncoder.setPipeline(
			this.atmosphereCameraPassResources.pipeline
		);
		atmosphereCameraPassEncoder.setBindGroup(
			0,
			this.atmosphereCameraPassResources.group0
		);
		atmosphereCameraPassEncoder.setBindGroup(
			1,
			this.atmosphereCameraPassResources.group1
		);
		atmosphereCameraPassEncoder.setBindGroup(2, this.gbuffer.readGroup);
		atmosphereCameraPassEncoder.dispatchWorkgroups(
			Math.ceil(
				this.atmosphereCameraPassResources.outputColor.width / 16
			),
			Math.ceil(
				this.atmosphereCameraPassResources.outputColor.height / 16
			)
		);
		atmosphereCameraPassEncoder.end();

		timestampIndexMapping.set(
			FrametimeCategory.FullscreenQuad,
			timestampQueryIndex
		);
		const fullscreenPassEncoder = commandEncoder.beginRenderPass({
			colorAttachments: [
				{
					clearValue: clearColor,
					loadOp: "clear",
					storeOp: "store",
					view: presentView,
				},
			],
			timestampWrites:
				this.frametimeQuery !== undefined
					? {
							querySet: this.frametimeQuery.querySet,
							beginningOfPassWriteIndex: timestampQueryIndex++,
							endOfPassWriteIndex: timestampQueryIndex++,
					  }
					: undefined,
			label: "Fullscreen Pass",
		});

		if (
			this.fullscreenQuadPassResources.uboDataByOutputTexture.has(
				this.settings.outputTexture
			)
		) {
			const settings = this.settings.currentOutputTextureSettings;
			const uboData =
				this.fullscreenQuadPassResources.uboDataByOutputTexture.get(
					this.settings.outputTexture
				)!;
			uboData.color_gain = vec4.create(
				settings.color_gain.r,
				settings.color_gain.g,
				settings.color_gain.b,
				1.0
			);
			uboData.vertex_scale = vec4.create(
				1.0,
				settings.flip ? -1.0 : 1.0,
				1.0,
				1.0
			);
		}

		fullscreenPassEncoder.setPipeline(
			this.fullscreenQuadPassResources.pipeline
		);
		fullscreenPassEncoder.setIndexBuffer(
			this.fullscreenQuadIndexBuffer,
			"uint32",
			0,
			this.fullscreenQuadIndexBuffer.size
		);
		fullscreenPassEncoder.setBindGroup(
			0,
			this.fullscreenQuadPassResources.group0ByOutputTexture.get(
				this.settings.outputTexture
			)
		);
		const uboData =
			this.fullscreenQuadPassResources.uboDataByOutputTexture.get(
				this.settings.outputTexture
			);
		if (uboData) {
			this.fullscreenQuadPassResources.ubo.data = uboData;
		} else {
			this.fullscreenQuadPassResources.ubo.data = {
				color_gain: vec4.create(1.0, 1.0, 1.0, 1.0),
				vertex_scale: vec4.create(1.0, 1.0, 1.0, 1.0),
			};
		}
		this.fullscreenQuadPassResources.ubo.writeToGPU(this.device);
		fullscreenPassEncoder.setBindGroup(
			1,
			this.fullscreenQuadPassResources.group1
		);

		if (this.probationFrameCounter < 1.0) {
			fullscreenPassEncoder.drawIndexed(6, 1, 0, 0, 0);
		}

		fullscreenPassEncoder.end();

		if (
			this.frametimeQuery != undefined &&
			!this.frametimeQuery.mappingLock
		) {
			commandEncoder.resolveQuerySet(
				this.frametimeQuery.querySet,
				0,
				2 * timestampIndexMapping.size,
				this.frametimeQuery.writeBuffer,
				0
			);
			commandEncoder.copyBufferToBuffer(
				this.frametimeQuery.writeBuffer,
				0,
				this.frametimeQuery.readBuffer,
				0,
				this.frametimeQuery.readBuffer.size
			);
		}

		this.device.queue.submit([commandEncoder.finish()]);

		if (
			this.frametimeQuery !== undefined &&
			!this.frametimeQuery.mappingLock
		) {
			const query = this.frametimeQuery;

			this.frametimeQuery.mappingLock = true;
			this.frametimeQuery.readBuffer
				.mapAsync(
					GPUMapMode.READ,
					0,
					this.frametimeQuery.readBuffer.size
				)
				.then(() => {
					const timestampsView = new BigInt64Array(
						query.readBuffer.getMappedRange(
							0,
							query.readBuffer.size
						)
					);
					timestampIndexMapping.forEach((value, key) => {
						const MS_PER_NS = 1000000;
						const timeMilliseconds =
							Number(
								timestampsView.at(value + 1)! -
									timestampsView.at(value)!
							) / MS_PER_NS;
						this.frametimeAverages.get(key)?.push(timeMilliseconds);
						this.uiReadonly.frametimeControllers
							.get(key)
							?.setValue(
								this.frametimeAverages.get(key)?.average ?? -1.0
							);
					});
					query.readBuffer.unmap();
					query.mappingLock = false;
				})
				.catch((reason) => {
					console.error(
						`Failed while retrieving frametime values from GPU:`
					);
					console.error(reason);
				});
		}
	}

	handleResize(newWidth: number, newHeight: number) {
		const newSize = {
			width: newWidth * this.settings.renderScale,
			height: newHeight * this.settings.renderScale,
		};

		const WEBGPU_MAX_DIMENSION = 8192;
		const WEBGPU_MAX_BUFFER_BYTES = 268435456;
		const BYTES_PER_RGBA32FLOAT = 16;

		const validateSize = (width: number, height: number) => {
			return (
				width < WEBGPU_MAX_DIMENSION &&
				height < WEBGPU_MAX_DIMENSION &&
				width * height * BYTES_PER_RGBA32FLOAT < WEBGPU_MAX_BUFFER_BYTES
			);
		};

		if (!validateSize(newSize.width, newSize.height)) {
			RENDER_SCALES.slice()
				.reverse()
				.some((value) => {
					if (validateSize(newWidth * value, newHeight * value)) {
						this.settings.renderScale = value;
						return true;
					}
				});
			console.warn(
				`During resize: Texture size (${newSize.width},${newSize.height}) exceeds WebGPU guaranteed limit (8192, 8192).
								Defaulting to highest possible render scale of ${this.settings.renderScale}`
			);
			this.scaledSize = {
				width: newWidth * this.settings.renderScale,
				height: newHeight * this.settings.renderScale,
			};
		} else {
			this.scaledSize = newSize;
		}

		console.log(
			`Resizing to (${this.scaledSize.width},${this.scaledSize.height})`
		);

		this.rawSize = { width: newWidth, height: newHeight };
		this.gbuffer = new GBuffer(this.device, this.scaledSize, this.gbuffer);

		this.fullscreenQuadPassResources.rebuildOutputTextureBinding(
			this.device,
			RenderOutput.GBufferColor,
			this.gbuffer.colorWithDepthInAlphaView
		);
		this.fullscreenQuadPassResources.rebuildOutputTextureBinding(
			this.device,
			RenderOutput.GBufferNormal,
			this.gbuffer.normalView
		);

		this.atmosphereCameraPassResources.outputColor =
			this.device.createTexture({
				format: this.atmosphereCameraPassResources.outputColor.format,
				size: this.scaledSize,
				usage:
					GPUTextureUsage.STORAGE_BINDING |
					GPUTextureUsage.TEXTURE_BINDING,
			});
		this.atmosphereCameraPassResources.outputColorView =
			this.atmosphereCameraPassResources.outputColor.createView();

		this.fullscreenQuadPassResources.rebuildOutputTextureBinding(
			this.device,
			RenderOutput.Scene,
			this.atmosphereCameraPassResources.outputColorView
		);

		this.atmosphereCameraPassResources.group0 = this.device.createBindGroup(
			{
				layout: this.atmosphereCameraPassResources.group0Layout,
				entries: [
					{
						binding: 0,
						resource:
							this.atmosphereCameraPassResources.outputColorView,
					},
					{
						binding: 1,
						resource: this.atmosphereCameraPassResources.lutSampler,
					},
					{
						binding: 2,
						resource: this.transmittanceLUTPassResources.view,
					},
					{
						binding: 3,
						resource: this.multiscatterLUTPassResources.view,
					},
					{
						binding: 4,
						resource: this.skyviewLUTPassResources.view,
					},
				],
				label: "Atmosphere Camera Group 0",
			}
		);
	}
}

export const SkySeaAppConstructor: RendererAppConstructor = (
	device,
	presentFormat,
	time
) => {
	return new SkySeaApp(device, presentFormat, time);
};
