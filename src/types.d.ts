/// <reference types="@webgpu/types" />

declare module "*.png" {
    const value: string;
    export = value;
}

declare module '*.wgsl' {
    const shader: string;
    export default shader;
}