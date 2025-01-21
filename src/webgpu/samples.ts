import { HelloCubeAppConstructor as HelloCube } from "./HelloCube";
import { SkySeaAppConstructor as SkySea } from "./SkySea";
import { RendererAppConstructor } from "./RendererApp"

interface SampleEntry
{
    name: string,
    // GPUAdapter requires all desired features, optional or not, to be provided at creation time. So we track both and fail when any features in requiredFeatures are missing.
    requiredFeatures: ReadonlySet<GPUFeatureName>,
    optionalFeatures: ReadonlySet<GPUFeatureName>,
    create: RendererAppConstructor,
};
export const defaultSample = {
    name: "Hello Cube",
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
    create: HelloCube,
} satisfies SampleEntry;
export const samplesByQueryParam = new Map<string, SampleEntry>([
    ["hello-cube", defaultSample],
    ["sky-sea", {
        name: "Sky and Sea",
        requiredFeatures: new Set(['float32-filterable']),
        optionalFeatures: new Set(['timestamp-query']),
        create: SkySea,
    }]
]);
