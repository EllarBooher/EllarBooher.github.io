/// <reference types="@webgpu/types" />

declare module "*.png" {
    const value: any;
    export = value;
}

declare module '*.wgsl' {
    const shader: string;
    export default shader;
}