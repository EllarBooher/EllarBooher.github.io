import { Controller as LilController, GUI as LilGUI } from "lil-gui";
import { RendererApp, RendererAppConstructor } from "../RendererApp.ts";
import { mat4, vec2, vec3, vec4 } from "wgpu-matrix";
import { Camera, GlobalUBO } from "./UBO.ts";
import { Extent2D } from "./Common.ts";

import { TransmittanceLUTPassResources } from "./atmosphere/TransmittanceLUT.ts";
import { MultiscatterLUTPassResources } from "./atmosphere/MultiscatterLUT.ts";
import { SkyViewLUTPassResources } from "./atmosphere/SkyViewLUT.ts";
import { AtmosphereCameraPassResources } from "./atmosphere/AtmosphereCamera.ts";
import { AerialPerspectiveLUTPassResources } from "./atmosphere/AerialPerspectiveLUT.ts";

import {
	RenderOutputCategory,
	RenderOutputTexture,
	RenderOutputController,
} from "./RenderOutputController.ts";
import { GBuffer } from "./GBuffer.ts";
import { FFTWaveSpectrumResources, FFTWavesSettings } from "./FourierWaves.ts";
import { WaveSurfaceDisplacementPassResources } from "./WaveDisplacement.ts";
import { FullscreenQuadPassResources } from "./FullscreenQuad.ts";
import { PerformanceTracker } from "./PerformanceTracker.ts";

const TRANSMITTANCE_LUT_EXTENT = { width: 2048, height: 1024 } as const;
const MULTISCATTER_LUT_EXTENT = { width: 1024, height: 1024 } as const;
const SKYVIEW_LUT_EXTENT = { width: 1024, height: 512 } as const;
const AERIAL_PERSPECTIVE_LUT_EXTENT = {
	width: 32,
	height: 32,
	depthOrArrayLayers: 32,
} as const;

const RENDER_SCALES = [0.25, 0.3333, 0.5, 0.75, 1.0, 1.5, 2.0, 4.0];

interface CameraParameters {
	translationX: number;
	translationY: number;
	translationZ: number;
	// Applied in order Y * X * Z
	// Z first, X second, Y third
	eulerAnglesX: number;
	eulerAnglesY: number;
	eulerAnglesZ: number;
}

interface SkySeaAppParameters {
	renderFromOceanPOV: boolean;
	renderScale: number;
	readonly oceanSurfaceSettings: {
		gerstner: boolean;
		fft: boolean;
		foamScale: number;
		foamBias: number;
	};
	readonly oceanCamera: CameraParameters;
	readonly debugCamera: CameraParameters;
	readonly fourierWavesSettings: FFTWavesSettings;
	readonly time: {
		pause: boolean;
		timeSeconds: number;
		deltaTimeSeconds: number;
	};
	readonly orbit: {
		timeHours: number;
		timeSpeedupFactor: number;
		reversed: boolean;
		paused: boolean;
		inclinationRadians: number;
		sunsetAzimuthRadians: number;
	};
}
type ValidParamsGuard<T> = T extends {
	[K in keyof T]: number | boolean | string | ValidParamsGuard<T[K]>;
}
	? T
	: never;

function setupUI(
	gui: LilGUI,
	paramsToBind: ValidParamsGuard<SkySeaAppParameters>,
	handleResize: () => void
) {
	gui.add(paramsToBind, "renderScale", RENDER_SCALES)
		.name("Render Resolution Scale")
		.decimals(1)
		.onFinishChange((_v: number) => {
			handleResize();
		})
		.listen();

	const cameraParameters = gui.addFolder("Camera").open();
	cameraParameters
		.add(paramsToBind.oceanCamera, "translationX")
		.name("Camera X")
		.min(-100.0)
		.max(100.0);
	cameraParameters
		.add(paramsToBind.oceanCamera, "translationY")
		.name("Camera Y")
		.min(10.0)
		.max(2000.0);
	cameraParameters
		.add(paramsToBind.oceanCamera, "translationZ")
		.name("Camera Z")
		.min(-100.0)
		.max(100.0);

	const EULER_ANGLES_X_SAFETY_MARGIN = 0.01;
	cameraParameters
		.add(paramsToBind.oceanCamera, "eulerAnglesX")
		.name("Camera Pitch")
		.min(-Math.PI / 2.0 + EULER_ANGLES_X_SAFETY_MARGIN)
		.max(Math.PI / 2.0 - EULER_ANGLES_X_SAFETY_MARGIN);
	cameraParameters
		.add(paramsToBind.oceanCamera, "eulerAnglesY")
		.name("Camera Yaw")
		.min(-Math.PI)
		.max(Math.PI);
	/* Non-zero camera roll breaks certain horizon calculations in shaders
		cameraParameters
			.add(this.controls.cameraSettings, "eulerAnglesZ")
			.name("Camera Roll")
			.min(-Math.PI)
			.max(Math.PI);
		*/

	const sunFolder = gui.addFolder("Sun").open();
	sunFolder
		.add(paramsToBind.orbit, "timeHours")
		.min(0.0)
		.max(24.0)
		.name("Time in Hours")
		.listen();
	sunFolder
		.add(paramsToBind.orbit, "timeSpeedupFactor")
		.min(1.0)
		.max(50000)
		.step(1.0)
		.name("Time Multiplier");
	sunFolder.add(paramsToBind.orbit, "paused").name("Pause Sun");

	sunFolder
		.add(
			{
				fn: () => {
					paramsToBind.orbit.timeHours = paramsToBind.orbit.reversed
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
					paramsToBind.orbit.timeHours = paramsToBind.orbit.reversed
						? 6.0 + 0.5
						: 18.0 - 0.5;
				},
			},
			"fn"
		)
		.name("Skip to Sunset");

	sunFolder.add(paramsToBind.orbit, "reversed").name("Reverse Sun");
	sunFolder
		.add(paramsToBind.orbit, "sunsetAzimuthRadians")
		.name("Sun Azimuth")
		.min(0.0)
		.max(2.0 * Math.PI);
	sunFolder
		.add(paramsToBind.orbit, "inclinationRadians")
		.name("Sun Inclination")
		.min(0.0)
		.max(Math.PI);

	const oceanFolder = gui.addFolder("Ocean").close();
	oceanFolder
		.add(paramsToBind.oceanSurfaceSettings, "gerstner")
		.name("Gerstner Waves");
	oceanFolder
		.add(paramsToBind.oceanSurfaceSettings, "fft")
		.name("FFT Accelerated Waves");
	oceanFolder.add(paramsToBind.time, "pause").name("Pause Waves");
	oceanFolder
		.add(paramsToBind.oceanSurfaceSettings, "foamScale")
		.name("Foam Scale")
		.min(-30.0)
		.max(30.0);
	oceanFolder
		.add(paramsToBind.oceanSurfaceSettings, "foamBias")
		.name("Foam Bias")
		.min(-1.0)
		.max(1.0);

	oceanFolder
		.add(paramsToBind.fourierWavesSettings, "gravity")
		.name("Gravity (m / s^2)")
		.min(0.01)
		.max(20.0);
	oceanFolder
		.add(paramsToBind.fourierWavesSettings, "waveSwell")
		.name("Wave Swell")
		.min(0.01)
		.max(1.0);
	oceanFolder
		.add(paramsToBind.fourierWavesSettings, "windFetchMeters")
		.name("Wind Fetch (m)")
		.min(10.0 * 1000.0)
		.max(100.0 * 1000.0);
	oceanFolder
		.add(paramsToBind.fourierWavesSettings, "windSpeedMetersPerSeconds")
		.name("Wind Speed (m/s)")
		.min(0.01)
		.max(50.0);

	const debugFolder = gui.addFolder("Debug").close();
	const debugCameraControllers: LilController[] = [];
	debugFolder
		.add(paramsToBind, "renderFromOceanPOV")
		.name("Render from Ocean POV")
		.onFinishChange((v: boolean) => {
			debugCameraControllers.forEach((c) => {
				c.enable(!v);
			});
		});

	debugCameraControllers.push(
		debugFolder
			.add(paramsToBind.debugCamera, "translationX")
			.name("Camera X")
			.min(-100.0)
			.max(100.0),
		debugFolder
			.add(paramsToBind.debugCamera, "translationY")
			.name("Camera Y")
			.min(10.0)
			.max(1000.0),
		debugFolder
			.add(paramsToBind.debugCamera, "translationZ")
			.name("Camera Z")
			.min(-100.0)
			.max(100.0),

		debugFolder
			.add(paramsToBind.debugCamera, "eulerAnglesX")
			.name("Camera Pitch")
			.min(-Math.PI / 2.0 + EULER_ANGLES_X_SAFETY_MARGIN)
			.max(Math.PI / 2.0 - EULER_ANGLES_X_SAFETY_MARGIN),
		debugFolder
			.add(paramsToBind.debugCamera, "eulerAnglesY")
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
							typeof paramsToBind.debugCamera,
							typeof paramsToBind.debugCamera
						>(
							paramsToBind.debugCamera,
							structuredClone(paramsToBind.oceanCamera)
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

class SkySeaApp implements RendererApp {
	private transmittanceLUTPassResources: TransmittanceLUTPassResources;
	private multiscatterLUTPassResources: MultiscatterLUTPassResources;
	private skyviewLUTPassResources: SkyViewLUTPassResources;
	private aerialPerspectiveLUTPassResources: AerialPerspectiveLUTPassResources;
	private fftWaveSpectrumResources: FFTWaveSpectrumResources;
	private waveSurfaceDisplacementPassResources: WaveSurfaceDisplacementPassResources;
	private atmosphereCameraPassResources: AtmosphereCameraPassResources;
	private fullscreenQuadPassResources: FullscreenQuadPassResources;

	private gbuffer: GBuffer;
	private unscaledResolution: Extent2D;

	private renderOutputController: RenderOutputController;
	private parameters: SkySeaAppParameters;
	private performance: PerformanceTracker;

	private globalUBO: GlobalUBO;

	private device: GPUDevice;

	quit = false;

	private dummyFrameCounter: number;
	private float32Filterable: boolean;

	presentationInterface(): {
		device: GPUDevice;
		format: GPUTextureFormat;
	} {
		return {
			device: this.device,
			format: this.fullscreenQuadPassResources.outputFormat,
		};
	}

	setupUI(gui: LilGUI) {
		setupUI(gui, this.parameters, () => {
			this.updateResizableResources();
		});

		this.renderOutputController.setupUI(gui);
		this.performance.setupUI(gui);
	}

	constructor(device: GPUDevice, presentFormat: GPUTextureFormat) {
		this.device = device;

		this.float32Filterable = device.features.has("float32-filterable");

		this.renderOutputController = new RenderOutputController();
		this.parameters = {
			oceanSurfaceSettings: {
				gerstner: true,
				fft: true,
				foamScale: 15,
				foamBias: 0.25,
			},
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
			fourierWavesSettings: {
				gravity: 9.8,
				windSpeedMetersPerSeconds: 15.0,
				windFetchMeters: 40.0 * 1000.0,
				waveSwell: 0.3,
			},
			time: {
				pause: false,
				timeSeconds: 0.0,
				deltaTimeSeconds: 0.0,
			},
			orbit: {
				timeHours: 5.7,
				timeSpeedupFactor: 400.0,
				paused: false,
				reversed: false,
				inclinationRadians: Math.PI / 2,
				sunsetAzimuthRadians: Math.PI,
			},
			renderScale: 1.0,
		};

		this.unscaledResolution = { width: 1.0, height: 1.0 };

		this.performance = new PerformanceTracker(this.device);

		this.dummyFrameCounter = 10.0;

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
			presentFormat
		);

		(
			[
				[
					"Scene",
					new RenderOutputTexture(
						this.atmosphereCameraPassResources.outputColor
					),
				],
				[
					"GBufferColor",
					new RenderOutputTexture(
						this.gbuffer.colorWithSurfaceWorldDepthInAlpha
					),
				],
				[
					"GBufferNormal",
					new RenderOutputTexture(
						this.gbuffer.normalWithSurfaceFoamStrengthInAlpha
					),
				],
				[
					"AtmosphereTransmittanceLUT",
					new RenderOutputTexture(
						this.transmittanceLUTPassResources.texture
					),
				],
				[
					"AtmosphereMultiscatterLUT",
					new RenderOutputTexture(
						this.multiscatterLUTPassResources.texture
					),
				],
				[
					"AtmosphereSkyviewLUT",
					new RenderOutputTexture(
						this.skyviewLUTPassResources.texture
					),
				],
				[
					"AtmosphereAerialPerspectiveLUT",
					new RenderOutputTexture(
						this.aerialPerspectiveLUTPassResources.texture
					),
				],
				["FFTWaveSpectrumGaussianNoise", fftWaveViews.gaussianNoise],
				["FFTWaveInitialAmplitude", fftWaveViews.initialAmplitude],
				[
					"FFTWaveDx_plus_iDy_Dz_iDxdz_Amplitude",
					fftWaveViews.packed_Dx_plus_iDy_Dz_iDxdz_Amplitude,
				],
				[
					"FFTWaveDydx_plus_iDydz_Dxdx_plus_iDzdz_Amplitude",
					fftWaveViews.packed_Dydx_plus_iDydz_Dxdx_plus_iDzdz_Amplitude,
				],
				["FFTWaveTurbulenceJacobian", fftWaveViews.turbulenceJacobian],
				[
					"FFTWaveDx_Dy_Dz_Dxdz_Spatial",
					fftWaveViews.Dx_Dy_Dz_Dxdz_Spatial,
				],
				[
					"FFTWaveDydx_Dydz_Dxdx_Dzdz_Spatial",
					fftWaveViews.Dydx_Dydz_Dxdx_Dzdz_Spatial,
				],
			] as [RenderOutputCategory, RenderOutputTexture][]
		).forEach(([category, texture]) => {
			this.fullscreenQuadPassResources.setOutput(
				this.device,
				category,
				texture
			);
		});

		for (const props of this.fullscreenQuadPassResources.getAllTextureProperties()) {
			this.renderOutputController.setTextureProperties(props);
		}

		const commandEncoder = device.createCommandEncoder({
			label: "Atmosphere LUT Initialization",
		});
		this.transmittanceLUTPassResources.record(commandEncoder);
		this.multiscatterLUTPassResources.record(commandEncoder);

		device.queue.submit([commandEncoder.finish()]);
	}

	tickTime(deltaTimeMilliseconds: number) {
		const NON_FFT_WAVE_PERIOD_SECONDS = 60.0;
		const FFT_WAVE_PERIOD_SECONDS = 100.0;

		const periodSeconds = this.parameters.oceanSurfaceSettings.fft
			? FFT_WAVE_PERIOD_SECONDS
			: NON_FFT_WAVE_PERIOD_SECONDS;

		const time = this.parameters.time;
		if (!time.pause) {
			time.deltaTimeSeconds = deltaTimeMilliseconds / 1000.0;
			time.timeSeconds += time.deltaTimeSeconds;
		} else {
			time.deltaTimeSeconds = 0.0;
		}

		// It is important to NOT set the time, instead modulo it.
		// This keeps the delta time consistent.
		time.timeSeconds -=
			Math.floor(time.timeSeconds / periodSeconds) * periodSeconds;

		const orbit = this.parameters.orbit;
		if (!orbit.paused) {
			const HOURS_TO_MILLISECONDS = 60.0 * 60.0 * 1000.0;
			orbit.timeHours +=
				((orbit.reversed ? -1.0 : 1.0) *
					orbit.timeSpeedupFactor *
					deltaTimeMilliseconds) /
				HOURS_TO_MILLISECONDS;
			orbit.timeHours =
				orbit.timeHours - Math.floor(orbit.timeHours / 24.0) * 24.0;
		}
	}

	updateGlobalUBO(aspectRatio: number) {
		const parameters = this.parameters;

		this.globalUBO.data.time.deltaTimeSeconds =
			parameters.time.deltaTimeSeconds;
		this.globalUBO.data.time.timeSeconds = parameters.time.timeSeconds;

		// offset the time so that the app starts during the day
		const SUN_ROTATION_RAD_PER_HOUR = (2.0 * Math.PI) / 24.0;
		const SUN_ANOMALY =
			(12.0 - parameters.orbit.timeHours) * SUN_ROTATION_RAD_PER_HOUR;

		const sunsetDirection = vec3.create(
			-Math.sin(parameters.orbit.sunsetAzimuthRadians),
			0.0,
			Math.cos(parameters.orbit.sunsetAzimuthRadians)
		);
		const noonDirection = vec3.create(
			Math.cos(parameters.orbit.sunsetAzimuthRadians) *
				Math.cos(parameters.orbit.inclinationRadians),
			Math.sin(parameters.orbit.inclinationRadians),
			Math.sin(parameters.orbit.sunsetAzimuthRadians) *
				Math.cos(parameters.orbit.inclinationRadians)
		);
		const sunDirection = vec3.add(
			vec3.scale(sunsetDirection, Math.sin(SUN_ANOMALY)),
			vec3.scale(noonDirection, Math.cos(SUN_ANOMALY))
		);
		vec3.scale(sunDirection, -1.0, this.globalUBO.data.light.forward);

		const fov = (60 * Math.PI) / 180;
		const near = 0.1;
		const far = 1000;
		const perspective = mat4.perspective(fov, aspectRatio, near, far);

		const assignToGPUCamera = (
			destination: Camera,
			source: CameraParameters
		): void => {
			const cameraPos = [
				source.translationX,
				source.translationY,
				source.translationZ,
				1,
			];
			const rotationX = mat4.rotationX(source.eulerAnglesX);
			const rotationY = mat4.rotationY(source.eulerAnglesY);
			const rotationZ = mat4.rotationZ(source.eulerAnglesZ);

			const transform = mat4.mul(
				mat4.translation(vec4.create(...cameraPos)),
				mat4.mul(rotationY, mat4.mul(rotationX, rotationZ))
			);
			const view = mat4.inverse(transform);

			Object.assign<Camera, Camera>(destination, {
				invProj: mat4.inverse(perspective),
				invView: transform,
				projView: mat4.mul(perspective, view),
				position: vec4.create(...cameraPos),
				forward: vec4.create(
					...mat4.multiply(
						transform,
						vec4.create(0.0, 0.0, -1.0, 0.0)
					)
				),
			});
		};

		assignToGPUCamera(
			this.globalUBO.data.ocean_camera,
			parameters.oceanCamera
		);
		assignToGPUCamera(
			this.globalUBO.data.camera,
			parameters.renderFromOceanPOV
				? parameters.oceanCamera
				: parameters.debugCamera
		);

		this.globalUBO.writeToGPU(this.device.queue);
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

		this.tickTime(deltaTimeMilliseconds);

		this.updateGlobalUBO(aspectRatio);

		const commandEncoder = this.device.createCommandEncoder({
			label: "Main",
		});

		this.fftWaveSpectrumResources.record(
			this.device,
			commandEncoder,
			this.parameters.fourierWavesSettings,
			this.performance.pushTimestampQueryInterval("FFTWaves")
		);

		this.waveSurfaceDisplacementPassResources.record(
			this.device,
			commandEncoder,
			this.performance.pushTimestampQueryInterval("OceanSurface"),
			this.fftWaveSpectrumResources.turbulenceMapIndex,
			{
				gerstner: this.parameters.oceanSurfaceSettings.gerstner,
				fft: this.parameters.oceanSurfaceSettings.fft,
				foamBias: this.parameters.oceanSurfaceSettings.foamBias,
				foamScale: this.parameters.oceanSurfaceSettings.foamScale,
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

		const output = this.renderOutputController.current();
		this.fullscreenQuadPassResources.record(
			this.device,
			commandEncoder,
			presentView,
			output.category,
			output.transform,
			this.performance.pushTimestampQueryInterval("FullscreenQuad")
		);

		this.performance.recordCopyBuffers(commandEncoder);

		this.device.queue.submit([commandEncoder.finish()]);

		this.performance.asyncUpdateFrametimeAverages();
	}

	updateResizableResources() {
		const calcScaledSize = (renderScale: number) => {
			return {
				width: Math.floor(this.unscaledResolution.width * renderScale),
				height: Math.floor(
					this.unscaledResolution.height * renderScale
				),
			};
		};

		const validateSize = (size: Extent2D) => {
			const WEBGPU_MAX_DIMENSION = 8192;
			const WEBGPU_MAX_BUFFER_BYTES = 268435456;
			const BYTES_PER_RGBA32FLOAT = 16;
			return (
				size.width < WEBGPU_MAX_DIMENSION &&
				size.height < WEBGPU_MAX_DIMENSION &&
				size.width * size.height * BYTES_PER_RGBA32FLOAT <
					WEBGPU_MAX_BUFFER_BYTES
			);
		};

		let renderScale = this.parameters.renderScale;
		const originalScaledSize = calcScaledSize(renderScale);
		if (!validateSize(originalScaledSize)) {
			RENDER_SCALES.slice()
				.reverse()
				.some((newRenderScale) => {
					if (validateSize(calcScaledSize(newRenderScale))) {
						renderScale = newRenderScale;
						return true;
					}
				});
			console.warn(
				`During resize: Texture size (${originalScaledSize.width},${originalScaledSize.height}) exceeds WebGPU guaranteed limit (8192, 8192).
					Defaulting to highest possible render scale of ${renderScale}`
			);
		}
		this.parameters.renderScale = renderScale;

		const finalScaledSize = calcScaledSize(this.parameters.renderScale);
		console.log(
			`Resizing to (${finalScaledSize.width},${finalScaledSize.height})`
		);

		this.gbuffer = new GBuffer(this.device, finalScaledSize, this.gbuffer);

		this.fullscreenQuadPassResources.setOutput(
			this.device,
			"GBufferColor",
			new RenderOutputTexture(
				this.gbuffer.colorWithSurfaceWorldDepthInAlpha
			)
		);
		this.fullscreenQuadPassResources.setOutput(
			this.device,
			"GBufferNormal",
			new RenderOutputTexture(
				this.gbuffer.normalWithSurfaceFoamStrengthInAlpha
			)
		);

		this.atmosphereCameraPassResources.resize(
			finalScaledSize,
			this.device,
			this.transmittanceLUTPassResources.view,
			this.multiscatterLUTPassResources.view,
			this.skyviewLUTPassResources.view,
			this.aerialPerspectiveLUTPassResources.view
		);
		this.fullscreenQuadPassResources.setOutput(
			this.device,
			"Scene",
			new RenderOutputTexture(
				this.atmosphereCameraPassResources.outputColor
			)
		);

		for (const props of this.fullscreenQuadPassResources.getAllTextureProperties()) {
			this.renderOutputController.setTextureProperties(props);
		}
	}

	handleResize(newWidth: number, newHeight: number) {
		this.unscaledResolution.width = newWidth;
		this.unscaledResolution.height = newHeight;

		this.updateResizableResources();
	}
}

/**
 * Constructor for {@link SkySeaApp}.
 * @see {@link RendererAppConstructor}
 */
export const SkySeaAppConstructor: RendererAppConstructor = (
	device,
	presentFormat
) => {
	return new SkySeaApp(device, presentFormat);
};
