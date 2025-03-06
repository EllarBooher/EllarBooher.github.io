import { Controller as LilController, GUI as LilGUI } from "lil-gui";
import { RendererApp, RendererAppConstructor } from "../RendererApp.ts";
import { mat4, vec2, vec3, vec4 } from "wgpu-matrix";
import { GlobalUBO } from "./UBO.ts";
import { Extent2D, RenderOutput, RenderOutputTexture } from "./Common.ts";

import { GBuffer } from "./GBuffer.ts";
import { TransmittanceLUTPassResources } from "./TransmittanceLUT.ts";
import { MultiscatterLUTPassResources } from "./MultiscatterLUT.ts";
import { SkyViewLUTPassResources } from "./SkyViewLUT.ts";
import { FFTWaveSpectrumResources, FFTWavesSettings } from "./FourierWaves.ts";
import { WaveSurfaceDisplacementPassResources } from "./WaveDisplacement.ts";
import { AtmosphereCameraPassResources } from "./AtmosphereCamera.ts";
import {
	FullscreenQuadPassResources,
	RenderOutputTransform,
} from "./FullscreenQuad.ts";
import { AerialPerspectiveLUTPassResources } from "./AerialPerspectiveLUT.ts";
import {
	FrametimeCategories,
	FrametimeCategory,
	PerformanceTracker,
} from "./PerformanceTracker.ts";

const TRANSMITTANCE_LUT_EXTENT = { width: 2048, height: 1024 } as const;
const MULTISCATTER_LUT_EXTENT = { width: 1024, height: 1024 } as const;
const SKYVIEW_LUT_EXTENT = { width: 1024, height: 512 } as const;
const AERIAL_PERSPECTIVE_LUT_EXTENT = {
	width: 32,
	height: 32,
	depthOrArrayLayers: 32,
} as const;

const RENDER_OUTPUT_TRANSFORM_DEFAULT_OVERRIDES: ({
	[K in keyof RenderOutputTransform]?: RenderOutputTransform[K];
} & {
	id: RenderOutput;
})[] = [
	{ id: RenderOutput.Scene },
	{ id: RenderOutput.AtmosphereTransmittanceLUT, flip: true },
	{
		id: RenderOutput.AtmosphereMultiscatterLUT,
		flip: true,
		colorGain: { r: 20.0, g: 20.0, b: 20.0 },
	},
	{
		id: RenderOutput.AtmosphereSkyviewLUT,
		colorGain: { r: 8.0, g: 8.0, b: 8.0 },
	},
	{
		id: RenderOutput.AtmosphereAerialPerspectiveLUT,
		colorGain: { r: 8.0, g: 8.0, b: 8.0 },
	},
	{ id: RenderOutput.GBufferColor },
	{ id: RenderOutput.GBufferNormal },
	{ id: RenderOutput.FFTWaveSpectrumGaussianNoise },
	{
		id: RenderOutput.FFTWaveInitialAmplitude,
		colorGain: { r: 100.0, g: 100.0, b: 100.0 },
	},
	{
		id: RenderOutput.FFTWaveDx_plus_iDy_Dz_iDxdz_Amplitude,
		colorGain: { r: 100.0, g: 100.0, b: 100.0 },
	},
	{
		id: RenderOutput.FFTWaveDydx_plus_iDydz_Dxdx_plus_iDzdz_Amplitude,
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

class SkySeaApp implements RendererApp {
	transmittanceLUTPassResources: TransmittanceLUTPassResources;
	multiscatterLUTPassResources: MultiscatterLUTPassResources;
	skyviewLUTPassResources: SkyViewLUTPassResources;
	aerialPerspectiveLUTPassResources: AerialPerspectiveLUTPassResources;
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
		oceanSurfaceSettings: {
			gerstner: boolean;
			fft: boolean;
			foamScale: number;
			foamBias: number;
		};
		cameraSettings: {
			renderFromOceanPOV: boolean;
			oceanCamera: {
				translationX: number;
				translationY: number;
				translationZ: number;
				// Applied in order Y * X * Z
				// Z first, X second, Y third
				eulerAnglesX: number;
				eulerAnglesY: number;
				eulerAnglesZ: number;
			};
			debugCamera: {
				translationX: number;
				translationY: number;
				translationZ: number;
				eulerAnglesX: number;
				eulerAnglesY: number;
				eulerAnglesZ: number;
			};
		};
		fourierWavesSettings: FFTWavesSettings;
		pauseGlobalTime: boolean;
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

	performance: PerformanceTracker;

	startTime: number;
	dummyFrameCounter: number;
	probationFrameCounter: number;
	targetFPS = 0.0;
	float32Filterable: boolean;

	setupUI(gui: LilGUI) {
		const outputTextureController = gui
			.add(this.settings, "outputTexture", {
				"Final Scene": RenderOutput.Scene,
				"[GBuffer] Color": RenderOutput.GBufferColor,
				"[GBuffer] Normal": RenderOutput.GBufferNormal,
				"[Atmosphere] Transmittance LUT":
					RenderOutput.AtmosphereTransmittanceLUT,
				"[Atmosphere] Multiscatter LUT":
					RenderOutput.AtmosphereMultiscatterLUT,
				"[Atmosphere] Skyview LUT": RenderOutput.AtmosphereSkyviewLUT,
				"[Atmosphere] Aerial Perspective LUT":
					RenderOutput.AtmosphereAerialPerspectiveLUT,
				"[FFT Waves] Gaussian Noise":
					RenderOutput.FFTWaveSpectrumGaussianNoise,
				"[FFT Waves] Initial Amplitude":
					RenderOutput.FFTWaveInitialAmplitude,
				"[FFT Waves] Frequency Domain (Dx + i * Dy, Dz + i * Dxdz)":
					RenderOutput.FFTWaveDx_plus_iDy_Dz_iDxdz_Amplitude,
				"[FFT Waves] Frequency Domain (Dydx + i * Dydz, Dxdx + i * Dzdz)":
					RenderOutput.FFTWaveDydx_plus_iDydz_Dxdx_plus_iDzdz_Amplitude,
				"[FFT Waves] (Turbulence, Jacobian)":
					RenderOutput.FFTWaveTurbulenceJacobian,
				"[FFT Waves] Spatial Domain (Dx, Dy, Dz, Dxdz)":
					RenderOutput.FFTWaveDx_Dy_Dz_Dxdz_Spatial,
				"[FFT Waves] Spatial Domain (Dydx, Dydz, Dxdx, Dzdx)":
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

		const cameraParameters = gui.addFolder("Camera").open();
		cameraParameters
			.add(this.settings.cameraSettings.oceanCamera, "translationX")
			.name("Camera X")
			.min(-100.0)
			.max(100.0);
		cameraParameters
			.add(this.settings.cameraSettings.oceanCamera, "translationY")
			.name("Camera Y")
			.min(10.0)
			.max(2000.0);
		cameraParameters
			.add(this.settings.cameraSettings.oceanCamera, "translationZ")
			.name("Camera Z")
			.min(-100.0)
			.max(100.0);

		const EULER_ANGLES_X_SAFETY_MARGIN = 0.01;
		cameraParameters
			.add(this.settings.cameraSettings.oceanCamera, "eulerAnglesX")
			.name("Camera Pitch")
			.min(-Math.PI / 2.0 + EULER_ANGLES_X_SAFETY_MARGIN)
			.max(Math.PI / 2.0 - EULER_ANGLES_X_SAFETY_MARGIN);
		cameraParameters
			.add(this.settings.cameraSettings.oceanCamera, "eulerAnglesY")
			.name("Camera Yaw")
			.min(-Math.PI)
			.max(Math.PI);
		/* Non-zero camera roll breaks certain horizon calculations in shaders
		cameraParameters
			.add(this.settings.cameraSettings, "eulerAnglesZ")
			.name("Camera Roll")
			.min(-Math.PI)
			.max(Math.PI);
		*/

		const sunFolder = gui.addFolder("Sun").open();
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

		const oceanFolder = gui.addFolder("Ocean").close();
		oceanFolder
			.add(this.settings.oceanSurfaceSettings, "gerstner")
			.name("Gerstner Waves");
		oceanFolder
			.add(this.settings.oceanSurfaceSettings, "fft")
			.name("FFT Accelerated Waves");
		oceanFolder.add(this.settings, "pauseGlobalTime").name("Pause Waves");
		oceanFolder
			.add(this.settings.oceanSurfaceSettings, "foamScale")
			.name("Foam Scale")
			.min(-30.0)
			.max(30.0);
		oceanFolder
			.add(this.settings.oceanSurfaceSettings, "foamBias")
			.name("Foam Bias")
			.min(-1.0)
			.max(1.0);

		oceanFolder
			.add(this.settings.fourierWavesSettings, "gravity")
			.name("Gravity (m / s^2)")
			.min(0.01)
			.max(20.0);
		oceanFolder
			.add(this.settings.fourierWavesSettings, "waveSwell")
			.name("Wave Swell")
			.min(0.01)
			.max(1.0);
		oceanFolder
			.add(this.settings.fourierWavesSettings, "windFetchMeters")
			.name("Wind Fetch (m)")
			.min(10.0 * 1000.0)
			.max(100.0 * 1000.0);
		oceanFolder
			.add(
				this.settings.fourierWavesSettings,
				"windSpeedMetersPerSeconds"
			)
			.name("Wind Speed (m/s)")
			.min(0.01)
			.max(50.0);

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
		const arrayLayerController = outputTextureFolder
			.add(this.settings.currentRenderOutputTransform, "arrayLayer")
			.min(0)
			.max(0)
			.step(1)
			.name("Array Layer")
			.listen();
		outputTextureFolder
			.add({ gain: 0.0 }, "gain")
			.name("Uniform Scale")
			.min(-10000.0)
			.max(10000.0)
			.onChange((v: number) => {
				this.settings.currentRenderOutputTransform.colorGain.r = v;
				this.settings.currentRenderOutputTransform.colorGain.g = v;
				this.settings.currentRenderOutputTransform.colorGain.b = v;
			});
		const rMaskController = outputTextureFolder
			.add(this.settings.currentRenderOutputTransform.channelMasks, "r")
			.name("R")
			.listen();
		const rController = outputTextureFolder
			.add(this.settings.currentRenderOutputTransform.colorGain, "r")
			.name("")
			.min(0.0)
			.max(10000.0)
			.listen();
		const gMaskController = outputTextureFolder
			.add(this.settings.currentRenderOutputTransform.channelMasks, "g")
			.name("G")
			.listen();
		const gController = outputTextureFolder
			.add(this.settings.currentRenderOutputTransform.colorGain, "g")
			.name("")
			.min(0.0)
			.max(10000.0)
			.listen();
		const bMaskController = outputTextureFolder
			.add(this.settings.currentRenderOutputTransform.channelMasks, "b")
			.name("B")
			.listen();
		const bController = outputTextureFolder
			.add(this.settings.currentRenderOutputTransform.colorGain, "b")
			.name("")
			.min(0.0)
			.max(10000.0)
			.listen();
		outputTextureFolder
			.add(this.settings.currentRenderOutputTransform, "swapBARG")
			.name("Swap Blue-Alpha and Red-Green Pairs")
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
			if (renderOutput !== undefined) {
				mipLevelController.max(renderOutput.mipLevelCount - 1);
				mipLevelController.disable(renderOutput.mipLevelCount == 1);
				if (renderOutput.mipLevelCount == 1) {
					mipLevelController.setValue(0);
				}
				mipLevelController.updateDisplay();

				arrayLayerController.max(
					renderOutput.depthOrArrayLayerCount - 1
				);
				arrayLayerController.disable(
					renderOutput.depthOrArrayLayerCount == 1
				);
				if (renderOutput.depthOrArrayLayerCount == 1) {
					arrayLayerController.setValue(0);
				}
				arrayLayerController.updateDisplay();
			}

			rController.object =
				this.settings.currentRenderOutputTransform.colorGain;
			gController.object =
				this.settings.currentRenderOutputTransform.colorGain;
			bController.object =
				this.settings.currentRenderOutputTransform.colorGain;

			rMaskController.object =
				this.settings.currentRenderOutputTransform.channelMasks;
			gMaskController.object =
				this.settings.currentRenderOutputTransform.channelMasks;
			bMaskController.object =
				this.settings.currentRenderOutputTransform.channelMasks;
		});

		const renderOutput = this.renderOutputs.get(
			outputTextureController.getValue() as RenderOutput
		);
		if (renderOutput !== undefined) {
			mipLevelController.max(renderOutput.mipLevelCount - 1);
			mipLevelController.disable(renderOutput.mipLevelCount == 1);
			if (renderOutput.mipLevelCount == 1) {
				mipLevelController.setValue(0);
			}
			mipLevelController.updateDisplay();

			arrayLayerController.max(renderOutput.depthOrArrayLayerCount - 1);
			arrayLayerController.disable(
				renderOutput.depthOrArrayLayerCount == 1
			);
			if (renderOutput.depthOrArrayLayerCount == 1) {
				arrayLayerController.setValue(0);
			}
			arrayLayerController.updateDisplay();
		}

		const performanceFolder = gui.addFolder("Performance").close();
		FrametimeCategories.forEach((category) => {
			this.uiReadonly.frametimeControllers.set(
				category,
				performanceFolder
					.add({ value: 0 }, "value")
					.name(`${category} (ms)`)
					.decimals(6)
					.disable()
			);
		});

		const debugFolder = gui.addFolder("Debug").close();
		const debugCameraControllers: LilController[] = [];
		debugFolder
			.add(this.settings.cameraSettings, "renderFromOceanPOV")
			.name("Render from Ocean POV")
			.onFinishChange((v: boolean) => {
				debugCameraControllers.forEach((c) => {
					c.enable(!v);
				});
			});

		debugCameraControllers.push(
			debugFolder
				.add(this.settings.cameraSettings.debugCamera, "translationX")
				.name("Camera X")
				.min(-100.0)
				.max(100.0),
			debugFolder
				.add(this.settings.cameraSettings.debugCamera, "translationY")
				.name("Camera Y")
				.min(10.0)
				.max(1000.0),
			debugFolder
				.add(this.settings.cameraSettings.debugCamera, "translationZ")
				.name("Camera Z")
				.min(-100.0)
				.max(100.0),

			debugFolder
				.add(this.settings.cameraSettings.debugCamera, "eulerAnglesX")
				.name("Camera Pitch")
				.min(-Math.PI / 2.0 + EULER_ANGLES_X_SAFETY_MARGIN)
				.max(Math.PI / 2.0 - EULER_ANGLES_X_SAFETY_MARGIN),
			debugFolder
				.add(this.settings.cameraSettings.debugCamera, "eulerAnglesY")
				.name("Camera Yaw")
				.min(-Math.PI)
				.max(Math.PI),

			/* Non-zero camera roll breaks certain horizon calculations in shaders
		debugFolder
			.add(this.settings.cameraSettings.debugCamera, "eulerAnglesZ")
			.name("Camera Roll")
			.min(-Math.PI)
			.max(Math.PI),
		*/
			debugFolder
				.add(
					{
						fn: () => {
							Object.assign<
								typeof this.settings.cameraSettings.debugCamera,
								typeof this.settings.cameraSettings.debugCamera
							>(
								this.settings.cameraSettings.debugCamera,
								structuredClone(
									this.settings.cameraSettings.oceanCamera
								)
							);
							debugFolder.controllers.forEach((c) => {
								c.updateDisplay();
							});
						},
					},
					"fn"
				)
				.name("Reset to match main camera")
		);
		debugCameraControllers.forEach((c) => c.enable(false));
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
			oceanSurfaceSettings: {
				gerstner: true,
				fft: true,
				foamScale: 15,
				foamBias: 0.25,
			},
			cameraSettings: {
				renderFromOceanPOV: true,
				oceanCamera: {
					translationX: 0.0,
					translationY: 20.0,
					translationZ: 0.0,
					eulerAnglesX: -0.2,
					eulerAnglesY: 0.0,
					eulerAnglesZ: 0.0,
				},
				debugCamera: {
					translationX: 0.0,
					translationY: 40.0,
					translationZ: -20.0,
					eulerAnglesX: -0.4,
					eulerAnglesY: 0.0,
					eulerAnglesZ: 0.0,
				},
			},
			fourierWavesSettings: {
				gravity: 9.8,
				windSpeedMetersPerSeconds: 15.0,
				windFetchMeters: 40.0 * 1000.0,
				waveSwell: 0.3,
			},
			renderOutputTransforms: new Map<
				RenderOutput,
				RenderOutputTransform
			>(),
			pauseGlobalTime: false,
			currentRenderOutputTransform: new RenderOutputTransform(),
			orbit: {
				timeHours: 5.7,
				timeSpeedupFactor: 400.0,
				paused: false,
				reversed: false,
				inclinationRadians: Math.PI / 2,
				sunsetAzimuthRadians: Math.PI,
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

		this.performance = new PerformanceTracker(this.device);

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

		this.aerialPerspectiveLUTPassResources =
			new AerialPerspectiveLUTPassResources(
				this.device,
				AERIAL_PERSPECTIVE_LUT_EXTENT,
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
				this.gbuffer.colorWithSurfaceWorldDepthInAlpha.format,
				this.gbuffer.normalWithSurfaceFoamStrengthInAlpha.format,
				this.gbuffer.depth.format,
				this.fftWaveSpectrumResources.displacementMaps()
			);

		this.atmosphereCameraPassResources = new AtmosphereCameraPassResources(
			this.device,
			this.gbuffer.readGroupLayout,
			this.transmittanceLUTPassResources.view,
			this.multiscatterLUTPassResources.view,
			this.skyviewLUTPassResources.view,
			this.aerialPerspectiveLUTPassResources.view,
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
				RenderOutput.AtmosphereTransmittanceLUT,
				new RenderOutputTexture(
					this.transmittanceLUTPassResources.texture
				),
			],
			[
				RenderOutput.AtmosphereMultiscatterLUT,
				new RenderOutputTexture(
					this.multiscatterLUTPassResources.texture
				),
			],
			[
				RenderOutput.AtmosphereSkyviewLUT,
				new RenderOutputTexture(this.skyviewLUTPassResources.texture),
			],
			[
				RenderOutput.AtmosphereAerialPerspectiveLUT,
				new RenderOutputTexture(
					this.aerialPerspectiveLUTPassResources.texture
				),
			],
			[
				RenderOutput.GBufferColor,
				new RenderOutputTexture(
					this.gbuffer.colorWithSurfaceWorldDepthInAlpha
				),
			],
			[
				RenderOutput.GBufferNormal,
				new RenderOutputTexture(
					this.gbuffer.normalWithSurfaceFoamStrengthInAlpha
				),
			],
			[
				RenderOutput.FFTWaveSpectrumGaussianNoise,
				fftWaveViews.gaussianNoise,
			],
			[
				RenderOutput.FFTWaveInitialAmplitude,
				fftWaveViews.initialAmplitude,
			],
			[
				RenderOutput.FFTWaveDx_plus_iDy_Dz_iDxdz_Amplitude,
				fftWaveViews.packed_Dx_plus_iDy_Dz_iDxdz_Amplitude,
			],
			[
				RenderOutput.FFTWaveDydx_plus_iDydz_Dxdx_plus_iDzdz_Amplitude,
				fftWaveViews.packed_Dydx_plus_iDydz_Dxdx_plus_iDzdz_Amplitude,
			],
			[
				RenderOutput.FFTWaveTurbulenceJacobian,
				fftWaveViews.turbulenceJacobian,
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
			this.fullscreenQuadPassResources.setView(
				device,
				id,
				resource.view,
				resource.viewDimension
			);
		}

		const commandEncoder = device.createCommandEncoder({
			label: "Atmosphere LUT Initialization",
		});
		this.transmittanceLUTPassResources.record(commandEncoder);
		this.multiscatterLUTPassResources.record(commandEncoder);

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

	updatePerformanceUI() {
		this.uiReadonly.averageFPS =
			1000.0 /
			(this.performance.averageByCategory("DrawToDraw") ?? 1000.0);

		FrametimeCategories.forEach((category) => {
			const averageMilliseconds =
				this.performance.averageByCategory(category);
			if (averageMilliseconds === undefined) {
				return;
			}

			this.uiReadonly.frametimeControllers
				.get(category)
				?.setValue(averageMilliseconds);
		});
	}

	updateCameras(aspectRatio: number) {
		const fov = (60 * Math.PI) / 180;
		const near = 0.1;
		const far = 1000;
		const perspective = mat4.perspective(fov, aspectRatio, near, far);

		{
			const oceanCameraSettings =
				this.settings.cameraSettings.oceanCamera;
			const oceanCameraPos = [
				oceanCameraSettings.translationX,
				oceanCameraSettings.translationY,
				oceanCameraSettings.translationZ,
				1,
			];
			const rotationX = mat4.rotationX(oceanCameraSettings.eulerAnglesX);
			const rotationY = mat4.rotationY(oceanCameraSettings.eulerAnglesY);
			const rotationZ = mat4.rotationZ(oceanCameraSettings.eulerAnglesZ);

			const oceanTransform = mat4.mul(
				mat4.translation(vec4.create(...oceanCameraPos)),
				mat4.mul(rotationY, mat4.mul(rotationX, rotationZ))
			);
			const oceanView = mat4.inverse(oceanTransform);

			Object.assign<
				typeof this.globalUBO.data.ocean_camera,
				typeof this.globalUBO.data.ocean_camera
			>(this.globalUBO.data.ocean_camera, {
				invProj: mat4.inverse(perspective),
				invView: oceanTransform,
				projView: mat4.mul(perspective, oceanView),
				position: vec4.create(...oceanCameraPos),
				forward: vec4.create(
					...mat4.multiply(
						oceanTransform,
						vec4.create(0.0, 0.0, -1.0, 0.0)
					)
				),
			});
		}

		if (this.settings.cameraSettings.renderFromOceanPOV) {
			Object.assign<
				typeof this.globalUBO.data.camera,
				typeof this.globalUBO.data.camera
			>(
				this.globalUBO.data.camera,
				structuredClone(this.globalUBO.data.ocean_camera)
			);
		} else {
			const debugCameraSettings =
				this.settings.cameraSettings.debugCamera;
			const debugCameraPos = [
				debugCameraSettings.translationX,
				debugCameraSettings.translationY,
				debugCameraSettings.translationZ,
				1,
			];
			const rotationX = mat4.rotationX(debugCameraSettings.eulerAnglesX);
			const rotationY = mat4.rotationY(debugCameraSettings.eulerAnglesY);
			const rotationZ = mat4.rotationZ(debugCameraSettings.eulerAnglesZ);

			const debugTransform = mat4.mul(
				mat4.translation(vec4.create(...debugCameraPos)),
				mat4.mul(rotationY, mat4.mul(rotationX, rotationZ))
			);

			const view = mat4.inverse(debugTransform);

			Object.assign<
				typeof this.globalUBO.data.camera,
				typeof this.globalUBO.data.camera
			>(this.globalUBO.data.camera, {
				invProj: mat4.inverse(perspective),
				invView: debugTransform,
				projView: mat4.mul(perspective, view),
				position: vec4.create(...debugCameraPos),
				forward: vec4.create(
					...mat4.multiply(
						debugTransform,
						vec4.create(0.0, 0.0, -1.0, 0.0)
					)
				),
			});
		}
	}

	updateTime(deltaTimeMilliseconds: number) {
		const timeUBO = this.globalUBO.data.time;
		if (!this.settings.pauseGlobalTime) {
			timeUBO.deltaTimeSeconds = deltaTimeMilliseconds / 1000.0;
			timeUBO.timeSeconds += timeUBO.deltaTimeSeconds;
		} else {
			timeUBO.deltaTimeSeconds = 0.0;
		}

		const NON_FFT_WAVE_PERIOD_SECONDS = 60.0;
		const FFT_WAVE_PERIOD_SECONDS = 100.0;

		const periodSeconds = this.settings.oceanSurfaceSettings.fft
			? FFT_WAVE_PERIOD_SECONDS
			: NON_FFT_WAVE_PERIOD_SECONDS;

		// It is important to NOT set the time, instead modulo it.
		// This keeps the delta time consistent.
		timeUBO.timeSeconds -=
			Math.floor(timeUBO.timeSeconds / periodSeconds) * periodSeconds;
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

		this.performance.startFrame(deltaTimeMilliseconds);
		this.updatePerformanceUI();

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

		this.updateCameras(aspectRatio);
		this.updateTime(deltaTimeMilliseconds);
		this.updateOrbit(deltaTimeMilliseconds);

		this.globalUBO.writeToGPU(this.device.queue);

		const commandEncoder = this.device.createCommandEncoder({
			label: "Main",
		});

		this.fftWaveSpectrumResources.record(
			this.device,
			commandEncoder,
			this.settings.fourierWavesSettings,
			this.performance.pushTimestampQueryInterval("FFTWaves")
		);

		this.waveSurfaceDisplacementPassResources.record(
			this.device,
			commandEncoder,
			this.performance.pushTimestampQueryInterval("OceanSurface"),
			this.fftWaveSpectrumResources.turbulenceMapIndex,
			{
				gerstner: this.settings.oceanSurfaceSettings.gerstner,
				fft: this.settings.oceanSurfaceSettings.fft,
				foamBias: this.settings.oceanSurfaceSettings.foamBias,
				foamScale: this.settings.oceanSurfaceSettings.foamScale,
			},
			{
				extent: vec2.create(
					this.gbuffer.colorWithSurfaceWorldDepthInAlpha.width,
					this.gbuffer.colorWithSurfaceWorldDepthInAlpha.height
				),
				colorWithSurfaceWorldDepthInAlpha:
					this.gbuffer.colorWithSurfaceWorldDepthInAlphaView,
				normalWithSurfaceFoamInAlpha:
					this.gbuffer.normalWithSurfaceFoamStrengthInAlphaView,
				depth: this.gbuffer.depthView,
			}
		);

		this.skyviewLUTPassResources.record(
			commandEncoder,
			this.performance.pushTimestampQueryInterval("SkyviewLUT")
		);
		this.aerialPerspectiveLUTPassResources.record(
			commandEncoder,
			this.performance.pushTimestampQueryInterval("AerialPerspectiveLUT")
		);
		this.atmosphereCameraPassResources.record(
			commandEncoder,
			this.performance.pushTimestampQueryInterval("AtmosphereCamera"),
			this.gbuffer
		);
		this.fullscreenQuadPassResources.record(
			this.device,
			commandEncoder,
			presentView,
			this.settings.outputTexture,
			this.settings.currentRenderOutputTransform,
			this.performance.pushTimestampQueryInterval("FullscreenQuad")
		);

		this.performance.recordCopyBuffers(commandEncoder);

		this.device.queue.submit([commandEncoder.finish()]);

		this.performance.asyncUpdateFrametimeAverages();
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
			new RenderOutputTexture(
				this.gbuffer.colorWithSurfaceWorldDepthInAlpha
			)
		);
		this.renderOutputs.set(
			RenderOutput.GBufferNormal,
			new RenderOutputTexture(
				this.gbuffer.normalWithSurfaceFoamStrengthInAlpha
			)
		);

		this.atmosphereCameraPassResources.resize(
			this.scaledSize,
			this.device,
			this.transmittanceLUTPassResources.view,
			this.multiscatterLUTPassResources.view,
			this.skyviewLUTPassResources.view,
			this.aerialPerspectiveLUTPassResources.view
		);
		this.renderOutputs.set(
			RenderOutput.Scene,
			new RenderOutputTexture(
				this.atmosphereCameraPassResources.outputColor
			)
		);

		this.renderOutputs.forEach((value, key) => {
			this.fullscreenQuadPassResources.setView(
				this.device,
				key,
				value.view,
				value.viewDimension
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
