import { HelloCubeAppConstructor as HelloCube } from "./HelloCube";
import { SkySeaAppConstructor as SkySea } from "./sky-sea/SkySea";
import { RendererAppConstructor } from "./RendererApp";

export interface SampleEntry {
	name: string;
	requiredLimits: ReadonlyMap<keyof GPUSupportedLimits, number>;
	// GPUAdapter requires all desired features, optional or not, to be provided at creation time. So we track both and fail when any features in requiredFeatures are missing.
	requiredFeatures: ReadonlySet<GPUFeatureName>;
	optionalFeatures: ReadonlySet<GPUFeatureName>;
	description: string;
	create: RendererAppConstructor;
}
export const defaultSampleQueryParam = "hello-cube";
export const defaultSample = {
	name: "Hello Cube",
	requiredLimits: new Map(),
	requiredFeatures: new Set(),
	optionalFeatures: new Set([
		"depth-clip-control",
		"depth32float-stencil8",
		"texture-compression-bc",
		"texture-compression-bc-sliced-3d",
		"texture-compression-etc2",
		"texture-compression-astc",
		"texture-compression-astc-sliced-3d",
		"timestamp-query",
		"indirect-first-instance",
		"shader-f16",
		"rg11b10ufloat-renderable",
		"bgra8unorm-storage",
		"float32-filterable",
		"float32-blendable",
		"clip-distances",
		"dual-source-blending",
	]),
	description: "Tests WebGPU functionality with a simple spinning cube.",
	create: HelloCube,
} satisfies SampleEntry;
export const samplesByQueryParam = new Map<string, SampleEntry>([
	[defaultSampleQueryParam, defaultSample],
	[
		"sky-sea",
		{
			name: "Sky and Sea",
			description:
				"Real-time rendering of a dynamic sun over the open ocean, with various models for surface waves and raymarched atmospheric scattering.",
			requiredLimits: new Map([["maxStorageTexturesPerShaderStage", 8]]),
			requiredFeatures: new Set(),
			optionalFeatures: new Set([
				"timestamp-query",
				"float32-filterable",
			]),
			create: SkySea,
		},
	],
]);
