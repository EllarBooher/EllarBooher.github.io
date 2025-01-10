import { HelloCubeAppConstructor as HelloCube } from "./HelloCube";
import { SkySeaAppConstructor as SkySea } from "./SkySea";
import { RendererAppConstructor } from "./RendererApp"

interface SampleEntry
{
    name: string,
    create: RendererAppConstructor,
};
export const defaultSample = {
    name: "Hello Cube",
    create: HelloCube,
};
export const samplesByQueryParam = new Map<string, SampleEntry>([
    ["hello-cube", defaultSample],
    ["sky-sea", {
        name: "Sky and Sea",
        create: SkySea,
    }]
]);
