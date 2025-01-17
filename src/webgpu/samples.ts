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
    optionalFeatures: new Set(),
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
