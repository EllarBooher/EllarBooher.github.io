import { RenderOutputCategory, RenderOutputCategories } from "./Common";
import { RenderOutputTransform } from "./FullscreenQuad";
import { Controller as LilController, GUI as LilGUI } from "lil-gui";

type NestedUniform<T, B> = T extends object
	? { [K in keyof T]: NestedUniform<T[K], B> }
	: B;

const RENDER_OUTPUT_TRANSFORM_DEFAULT_OVERRIDES: ({
	[K in keyof RenderOutputTransform]?: RenderOutputTransform[K];
} & {
	id: RenderOutputCategory;
})[] = [
	{ id: "AtmosphereTransmittanceLUT", flip: true },
	{
		id: "AtmosphereMultiscatterLUT",
		flip: true,
		colorGain: { r: 20.0, g: 20.0, b: 20.0 },
	},
	{
		id: "AtmosphereSkyviewLUT",
		colorGain: { r: 8.0, g: 8.0, b: 8.0 },
	},
	{
		id: "AtmosphereAerialPerspectiveLUT",
		colorGain: { r: 8.0, g: 8.0, b: 8.0 },
	},
	{
		id: "FFTWaveInitialAmplitude",
		colorGain: { r: 100.0, g: 100.0, b: 100.0 },
	},
	{
		id: "FFTWaveDx_plus_iDy_Dz_iDxdz_Amplitude",
		colorGain: { r: 100.0, g: 100.0, b: 100.0 },
	},
	{
		id: "FFTWaveDydx_plus_iDydz_Dxdx_plus_iDzdz_Amplitude",
		colorGain: { r: 100.0, g: 100.0, b: 100.0 },
	},
];

export class RenderOutputController {
	private options: {
		outputTexture: RenderOutputCategory;
		renderOutputTransforms: Map<
			RenderOutputCategory,
			RenderOutputTransform
		>;
	};
	private textureProperties: Map<
		RenderOutputCategory,
		{ mipLevelCount: number; depthOrArrayLayerCount: number }
	>;
	private controllers:
		| NestedUniform<RenderOutputTransform, LilController>
		| undefined;

	current() {
		return {
			category: this.options.outputTexture,
			transform: structuredClone(
				this.options.renderOutputTransforms.get(
					this.options.outputTexture
				)!
			),
		};
	}

	private updateVariableControllerBounds() {
		if (this.controllers === undefined) {
			return;
		}

		const texture = this.textureProperties.get(this.options.outputTexture);
		if (texture !== undefined) {
			this.controllers.mipLevel.max(texture.mipLevelCount - 1);
			this.controllers.mipLevel.disable(texture.mipLevelCount == 1);
			if (texture.mipLevelCount == 1) {
				this.controllers.mipLevel.setValue(0);
			}
			this.controllers.mipLevel.updateDisplay();

			this.controllers.arrayLayer.max(texture.depthOrArrayLayerCount - 1);
			this.controllers.arrayLayer.disable(
				texture.depthOrArrayLayerCount == 1
			);
			if (texture.depthOrArrayLayerCount == 1) {
				this.controllers.arrayLayer.setValue(0);
			}
			this.controllers.arrayLayer.updateDisplay();
		}
	}

	setTextureProperties(props: {
		category: RenderOutputCategory;
		mipLevelCount: number;
		depthOrArrayLayerCount: number;
	}) {
		this.textureProperties.set(props.category, {
			mipLevelCount: props.mipLevelCount,
			depthOrArrayLayerCount: props.depthOrArrayLayerCount,
		});

		if (props.category == this.options.outputTexture) {
			this.updateVariableControllerBounds();
		}
	}

	private setOutput(category: RenderOutputCategory) {
		if (this.controllers === undefined) {
			return;
		}

		this.options.outputTexture = category;

		/*
		 * There is a tradeoff for using LilGUI without wrapping
		 * 	1) Either we copy the values and keep LilController.object stable
		 * 	2) or we swap out the .object reference with our current saved config sub-object
		 *
		 * We go with option 2 since copying arbitrary types correctly is hard
		 * and for any nested types (which we have) would require updating the
		 * references anyway.
		 */

		const transform = this.options.renderOutputTransforms.get(
			this.options.outputTexture
		)!;

		this.controllers.flip.object = transform;

		this.controllers.colorGain.r.object = transform.colorGain;
		this.controllers.colorGain.g.object = transform.colorGain;
		this.controllers.colorGain.b.object = transform.colorGain;

		this.controllers.channelMasks.r.object = transform.channelMasks;
		this.controllers.channelMasks.g.object = transform.channelMasks;
		this.controllers.channelMasks.b.object = transform.channelMasks;

		this.controllers.swapBARG.object = transform;
		this.controllers.mipLevel.object = transform;
		this.controllers.arrayLayer.object = transform;

		this.updateVariableControllerBounds();
	}

	private setUniformColorScale(scale: number) {
		const currentTransform = this.options.renderOutputTransforms.get(
			this.options.outputTexture
		)!;
		currentTransform.colorGain.r = scale;
		currentTransform.colorGain.g = scale;
		currentTransform.colorGain.b = scale;
	}

	setupUI(gui: LilGUI) {
		const outputTextureFolder = gui.addFolder("Render Output").close();
		outputTextureFolder
			.add({ outputTexture: "Scene" }, "outputTexture", {
				"Final Scene": "Scene",
				"[GBuffer] Color": "GBufferColor",
				"[GBuffer] Normal": "GBufferNormal",
				"[Atmosphere] Transmittance LUT": "AtmosphereTransmittanceLUT",
				"[Atmosphere] Multiscatter LUT": "AtmosphereMultiscatterLUT",
				"[Atmosphere] Skyview LUT": "AtmosphereSkyviewLUT",
				"[Atmosphere] Aerial Perspective LUT":
					"AtmosphereAerialPerspectiveLUT",
				"[FFT Waves] Gaussian Noise": "FFTWaveSpectrumGaussianNoise",
				"[FFT Waves] Initial Amplitude": "FFTWaveInitialAmplitude",
				"[FFT Waves] Frequency Domain (Dx + i * Dy, Dz + i * Dxdz)":
					"FFTWaveDx_plus_iDy_Dz_iDxdz_Amplitude",
				"[FFT Waves] Frequency Domain (Dydx + i * Dydz, Dxdx + i * Dzdz)":
					"FFTWaveDydx_plus_iDydz_Dxdx_plus_iDzdz_Amplitude",
				"[FFT Waves] (Turbulence, Jacobian)":
					"FFTWaveTurbulenceJacobian",
				"[FFT Waves] Spatial Domain (Dx, Dy, Dz, Dxdz)":
					"FFTWaveDx_Dy_Dz_Dxdz_Spatial",
				"[FFT Waves] Spatial Domain (Dydx, Dydz, Dxdx, Dzdx)":
					"FFTWaveDydx_Dydz_Dxdx_Dzdz_Spatial",
			})
			.name("Render Output")
			.listen()
			.onFinishChange((v: RenderOutputCategory) => {
				this.setOutput(v);
			});

		const currentTransform = this.options.renderOutputTransforms.get(
			this.options.outputTexture
		)!;

		const flipController = outputTextureFolder
			.add(currentTransform, "flip")
			.name("Flip Image")
			.listen();
		const mipLevelController = outputTextureFolder
			.add(currentTransform, "mipLevel")
			.min(0)
			.max(0)
			.step(1)
			.name("Mip Level")
			.listen();
		const arrayLayerController = outputTextureFolder
			.add(currentTransform, "arrayLayer")
			.min(0)
			.max(0)
			.step(1)
			.name("Array Layer")
			.listen();
		outputTextureFolder
			.add({ scale: 0.0 }, "scale")
			.name("Uniform Scale")
			.min(-10000.0)
			.max(10000.0)
			.onChange((v: number) => {
				this.setUniformColorScale(v);
			});
		const rMaskController = outputTextureFolder
			.add(currentTransform.channelMasks, "r")
			.name("R")
			.listen();
		const rController = outputTextureFolder
			.add(currentTransform.colorGain, "r")
			.name("")
			.min(0.0)
			.max(10000.0)
			.listen();
		const gMaskController = outputTextureFolder
			.add(currentTransform.channelMasks, "g")
			.name("G")
			.listen();
		const gController = outputTextureFolder
			.add(currentTransform.colorGain, "g")
			.name("")
			.min(0.0)
			.max(10000.0)
			.listen();
		const bMaskController = outputTextureFolder
			.add(currentTransform.channelMasks, "b")
			.name("B")
			.listen();
		const bController = outputTextureFolder
			.add(currentTransform.colorGain, "b")
			.name("")
			.min(0.0)
			.max(10000.0)
			.listen();
		const swapBARGController = outputTextureFolder
			.add(currentTransform, "swapBARG")
			.name("Swap Blue-Alpha and Red-Green Pairs")
			.listen();

		this.controllers = {
			flip: flipController,
			colorGain: {
				r: rController,
				g: gController,
				b: bController,
			},
			channelMasks: {
				r: rMaskController,
				g: gMaskController,
				b: bMaskController,
			},
			swapBARG: swapBARGController,
			mipLevel: mipLevelController,
			arrayLayer: arrayLayerController,
		};
	}

	constructor() {
		this.options = {
			outputTexture: "Scene",
			renderOutputTransforms: new Map(
				RenderOutputCategories.map((category) => {
					return [category, new RenderOutputTransform()];
				})
			),
		};
		RENDER_OUTPUT_TRANSFORM_DEFAULT_OVERRIDES.forEach(
			({ id, ...overrides }) => {
				const original = this.options.renderOutputTransforms.get(id)!;

				this.options.renderOutputTransforms.set(id, {
					...original,
					...overrides,
				} satisfies RenderOutputTransform);
			}
		);
		this.textureProperties = new Map();
	}
}
