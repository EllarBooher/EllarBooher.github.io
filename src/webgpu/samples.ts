import { HelloCubeAppConstructor as HelloCube } from "./HelloCube";
import { SkySeaAppConstructor as SkySea } from "./SkySea";

interface SampleEntry
{
    name: string,
    create: RendererAppConstructor,
};

export const defaultSample = "hello-cube";
export const samplesByQueryParam = new Map<string, SampleEntry>([
    ["hello-cube", {
        name: "Hello Cube",
        create: HelloCube,
    }],
    ["sky-sea", {
        name: "Sky and Sea",
        create: SkySea,
    }]
]);