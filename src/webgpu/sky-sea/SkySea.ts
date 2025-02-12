import { Controller as LilController, GUI as LilGUI } from "lil-gui";
import { RendererApp, RendererAppConstructor } from "../RendererApp.ts";
import { mat4, vec3, vec4 } from "wgpu-matrix";
import { GlobalUBO } from "./UBO.ts";
import { Extent2D, RenderOutput, RenderOutputTexture } from "./Common.ts";

import { GBuffer } from "./GBuffer.ts";
import { TransmittanceLUTPassResources } from "./TransmittanceLUT.ts";
import { MultiscatterLUTPassResources } from "./MultiscatterLUT.ts";
import { SkyViewLUTPassResources } from "./SkyViewLUT.ts";
import { FFTWaveSpectrumResources } from "./FourierWaves.ts";
import { WaveSurfaceDisplacementPassResources } from "./WaveDisplacement.ts";
import { AtmosphereCameraPassResources } from "./AtmosphereCamera.ts";
import {
	FullscreenQuadUBOData,
	FullscreenQuadPassResources,
} from "./FullscreenQuad.ts";

const TRANSMITTANCE_LUT_EXTENT = { width: 2048, height: 1024 } as const;
const MULTISCATTER_LUT_EXTENT = { width: 1024, height: 1024 } as const;
const SKYVIEW_LUT_EXTENT = { width: 1024, height: 512 } as const;

class RenderOutputTransform {
	flip = false;
	colorGain: {
		r: number;
		g: number;
		b: number;
	} = { r: 1.0, g: 1.0, b: 1.0 };
	mipLevel = 0;
}

const RENDER_OUTPUT_TRANSFORM_DEFAULT_OVERRIDES: ({
	[K in keyof RenderOutputTransform]?: RenderOutputTransform[K];
} & {
	id: RenderOutput;
})[] = [
	{ id: RenderOutput.Scene },
	{ id: RenderOutput.TransmittanceLUT, flip: true },
	{ id: RenderOutput.MultiscatterLUT, flip: true },
	{ id: RenderOutput.SkyviewLUT, colorGain: { r: 8.0, g: 8.0, b: 8.0 } },
	{ id: RenderOutput.GBufferColor },
	{ id: RenderOutput.GBufferNormal },
	{ id: RenderOutput.FFTWaveSpectrumGaussianNoise },
	{
		id: RenderOutput.FFTWaveFourierAmplitude,
		colorGain: { r: 100.0, g: 100.0, b: 100.0 },
	},
	{
		id: RenderOutput.FFTWaveDy_plus_iDxdz_Amplitude,
		colorGain: { r: 100.0, g: 100.0, b: 100.0 },
	},
	{
		id: RenderOutput.FFTWaveDx_plus_iDz_Amplitude,
		colorGain: { r: 100.0, g: 100.0, b: 100.0 },
	},
	{
		id: RenderOutput.FFTWaveDydx_plus_iDydz_Amplitude,
		colorGain: { r: 100.0, g: 100.0, b: 100.0 },
	},
	{
		id: RenderOutput.FFTWaveDxdx_plus_iDzdz_Amplitude,
		colorGain: { r: 100.0, g: 100.0, b: 100.0 },
	},
	{
		id: RenderOutput.FFTWaveDx_Dy_Dz_Dxdz_Spatial,
	},
	{
		id: RenderOutput.FFTWaveDydx_Dydz_Dxdx_Dzdz_Spatial,
	},
];

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

	renderOutputs: Map<RenderOutput, RenderOutputTexture>;

	settings: {
		outputTexture: RenderOutput;
		oceanWaveSettings: {
			gerstner: boolean;
			fft: boolean;
		};
		renderOutputTransforms: Map<RenderOutput, RenderOutputTransform>;
		currentRenderOutputTransform: RenderOutputTransform;
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
				"FFT Wave Frequency Domain (Dy + i*Dxdz)":
					RenderOutput.FFTWaveDy_plus_iDxdz_Amplitude,
				"FFT Wave Frequency Domain (Dx + i*Dz)":
					RenderOutput.FFTWaveDx_plus_iDz_Amplitude,
				"FFT Wave Frequency Domain (Dydx + i*Dydz)":
					RenderOutput.FFTWaveDydx_plus_iDydz_Amplitude,
				"FFT Wave Frequency Domain (Dxdx + i*Dzdz)":
					RenderOutput.FFTWaveDxdx_plus_iDzdz_Amplitude,
				"FFT Wave Spatial Domain (Dx, Dy, Dz, Dxdz)":
					RenderOutput.FFTWaveDx_Dy_Dz_Dxdz_Spatial,
				"FFT Wave Spatial Domain (Dydx, Dydz, Dxdx, Dzdx)":
					RenderOutput.FFTWaveDydx_Dydz_Dxdx_Dzdz_Spatial,
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

		gui.add(this.settings.oceanWaveSettings, "gerstner").name(
			"Gerstner Waves"
		);
		gui.add(this.settings.oceanWaveSettings, "fft").name(
			"FFT Accelerated Waves"
		);

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
		outputTextureFolder
			.add(this.settings.currentRenderOutputTransform, "flip")
			.name("Flip Image")
			.listen();
		const mipLevelController = outputTextureFolder
			.add(this.settings.currentRenderOutputTransform, "mipLevel")
			.min(0)
			.max(0)
			.step(1)
			.name("Mip Level")
			.listen();
		outputTextureFolder
			.add({ gain: 0.0 }, "gain")
			.name("RGB")
			.min(0.0)
			.max(100.0)
			.onChange((v: number) => {
				this.settings.currentRenderOutputTransform.colorGain.r = v;
				this.settings.currentRenderOutputTransform.colorGain.g = v;
				this.settings.currentRenderOutputTransform.colorGain.b = v;
			});
		const rController = outputTextureFolder
			.add(this.settings.currentRenderOutputTransform.colorGain, "r")
			.name("R")
			.min(0.0)
			.max(100.0)
			.listen();
		const gController = outputTextureFolder
			.add(this.settings.currentRenderOutputTransform.colorGain, "g")
			.name("G")
			.min(0.0)
			.max(100.0)
			.listen();
		const bController = outputTextureFolder
			.add(this.settings.currentRenderOutputTransform.colorGain, "b")
			.name("B")
			.min(0.0)
			.max(100.0)
			.listen();
		outputTextureController.onChange((newValue: RenderOutput) => {
			const previousValue =
				outputTextureController._listenPrevValue as RenderOutput;

			this.settings.renderOutputTransforms.set(
				previousValue,
				structuredClone(this.settings.currentRenderOutputTransform)
			);

			Object.assign(
				this.settings.currentRenderOutputTransform,
				structuredClone(
					this.settings.renderOutputTransforms.get(newValue) ??
						new RenderOutputTransform()
				)
			);

			const renderOutput = this.renderOutputs.get(newValue);
			mipLevelController.max(renderOutput?.mipLevelCount ?? 0);
			mipLevelController.updateDisplay();

			rController.object =
				this.settings.currentRenderOutputTransform.colorGain;
			gController.object =
				this.settings.currentRenderOutputTransform.colorGain;
			bController.object =
				this.settings.currentRenderOutputTransform.colorGain;
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
			oceanWaveSettings: {
				gerstner: true,
				fft: true,
			},
			renderOutputTransforms: new Map<
				RenderOutput,
				RenderOutputTransform
			>(),
			currentRenderOutputTransform: new RenderOutputTransform(),
			orbit: {
				timeHours: 5.6,
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

		RENDER_OUTPUT_TRANSFORM_DEFAULT_OVERRIDES.reduce(
			(acc, { id, ...overrides }) => {
				acc.set(id, {
					...new RenderOutputTransform(),
					...overrides,
				});
				return acc;
			},
			this.settings.renderOutputTransforms
		);

		if (
			this.settings.renderOutputTransforms.has(
				this.settings.outputTexture
			)
		) {
			const newSettings = this.settings.renderOutputTransforms.get(
				this.settings.outputTexture
			)!;
			this.settings.currentRenderOutputTransform.flip = newSettings.flip;
			this.settings.currentRenderOutputTransform.colorGain.r =
				newSettings.colorGain.r;
			this.settings.currentRenderOutputTransform.colorGain.g =
				newSettings.colorGain.g;
			this.settings.currentRenderOutputTransform.colorGain.b =
				newSettings.colorGain.b;
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

		this.globalUBO = new GlobalUBO(this.device);
		this.globalUBO.writeToGPU(this.device.queue);

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
				this.fftWaveSpectrumResources.displacementMaps()
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
			this.presentFormat
		);

		this.renderOutputs = new Map<RenderOutput, RenderOutputTexture>([
			[
				RenderOutput.Scene,
				new RenderOutputTexture(
					this.atmosphereCameraPassResources.outputColor
				),
			],
			[
				RenderOutput.TransmittanceLUT,
				new RenderOutputTexture(
					this.transmittanceLUTPassResources.texture
				),
			],
			[
				RenderOutput.MultiscatterLUT,
				new RenderOutputTexture(
					this.multiscatterLUTPassResources.texture
				),
			],
			[
				RenderOutput.SkyviewLUT,
				new RenderOutputTexture(this.skyviewLUTPassResources.texture),
			],
			[
				RenderOutput.GBufferColor,
				new RenderOutputTexture(this.gbuffer.colorWithDepthInAlpha),
			],
			[
				RenderOutput.GBufferNormal,
				new RenderOutputTexture(this.gbuffer.normal),
			],
			[
				RenderOutput.FFTWaveSpectrumGaussianNoise,
				fftWaveViews.gaussianNoise,
			],
			[
				RenderOutput.FFTWaveFourierAmplitude,
				fftWaveViews.fourierAmplitude,
			],
			[
				RenderOutput.FFTWaveDy_plus_iDxdz_Amplitude,
				fftWaveViews.Dy_Amplitude,
			],
			[
				RenderOutput.FFTWaveDx_plus_iDz_Amplitude,
				fftWaveViews.Dx_plus_iDz_Amplitude,
			],
			[
				RenderOutput.FFTWaveDydx_plus_iDydz_Amplitude,
				fftWaveViews.packed_Dydx_plus_iDydz_Amplitude,
			],
			[
				RenderOutput.FFTWaveDxdx_plus_iDzdz_Amplitude,
				fftWaveViews.packed_Dxdx_plus_iDzdz_Amplitude,
			],
			[
				RenderOutput.FFTWaveDx_Dy_Dz_Dxdz_Spatial,
				fftWaveViews.Dx_Dy_Dz_Dxdz_Spatial,
			],
			[
				RenderOutput.FFTWaveDydx_Dydz_Dxdx_Dzdz_Spatial,
				fftWaveViews.Dydx_Dydz_Dxdx_Dzdz_Spatial,
			],
		]);
		for (const [id, resource] of this.renderOutputs) {
			this.fullscreenQuadPassResources.setView(device, id, resource.view);
		}

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

		this.globalUBO.writeToGPU(this.device.queue);

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
			this.frametimeQuery !== undefined
				? {
						querySet: this.frametimeQuery.querySet,
						beginWriteIndex: timestampQueryIndex++,
						endWriteIndex: timestampQueryIndex++,
				  }
				: undefined,
			{
				gerstner: this.settings.oceanWaveSettings.gerstner,
				fft: this.settings.oceanWaveSettings.fft,
			},
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

		{
			const renderOutputTransform =
				this.settings.currentRenderOutputTransform;
			const uboData = new FullscreenQuadUBOData();
			uboData.color_gain = vec4.create(
				renderOutputTransform.colorGain.r,
				renderOutputTransform.colorGain.g,
				renderOutputTransform.colorGain.b,
				1.0
			);
			uboData.vertex_scale = vec4.create(
				1.0,
				renderOutputTransform.flip ? -1.0 : 1.0,
				1.0,
				1.0
			);
			uboData.mip_level_u32 = Math.round(renderOutputTransform.mipLevel);

			timestampIndexMapping.set(
				FrametimeCategory.FullscreenQuad,
				timestampQueryIndex
			);
			this.fullscreenQuadPassResources.recordPresent(
				this.device,
				commandEncoder,
				presentView,
				this.settings.outputTexture,
				uboData,
				this.frametimeQuery !== undefined
					? {
							querySet: this.frametimeQuery.querySet,
							beginWriteIndex: timestampQueryIndex++,
							endWriteIndex: timestampQueryIndex++,
					  }
					: undefined
			);
		}

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

		this.renderOutputs.set(
			RenderOutput.GBufferColor,
			new RenderOutputTexture(this.gbuffer.colorWithDepthInAlpha)
		);
		this.renderOutputs.set(
			RenderOutput.GBufferNormal,
			new RenderOutputTexture(this.gbuffer.normal)
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

		this.renderOutputs.set(
			RenderOutput.Scene,
			new RenderOutputTexture(
				this.atmosphereCameraPassResources.outputColor
			)
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

		this.renderOutputs.forEach((value, key) => {
			this.fullscreenQuadPassResources.setView(
				this.device,
				key,
				value.view
			);
		});
	}
}

export const SkySeaAppConstructor: RendererAppConstructor = (
	device,
	presentFormat,
	time
) => {
	return new SkySeaApp(device, presentFormat, time);
};
