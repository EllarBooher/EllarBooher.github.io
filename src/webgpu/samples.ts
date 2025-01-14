import { HelloCubeAppConstructor as HelloCube } from "./HelloCube";
import { SkySeaAppConstructor as SkySea } from "./SkySea";
import { RendererAppConstructor } from "./RendererApp"

interface SampleEntry
{
    name: string,
    requiredFeatures: ReadonlySet<GPUFeatureName>,
    create: RendererAppConstructor,
};
export const defaultSample = {
    name: "Hello Cube",
    requiredFeatures: new Set(),
    create: HelloCube,
} satisfies SampleEntry;
export const samplesByQueryParam = new Map<string, SampleEntry>([
    ["hello-cube", defaultSample],
    ["sky-sea", {
        name: "Sky and Sea",
        requiredFeatures: new Set(['float32-filterable']),
        create: SkySea,
    }]
]);
