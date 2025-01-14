import { GUI } from "lil-gui";

export interface RendererApp
{
    device: GPUDevice;
    presentFormat: GPUTextureFormat;
    draw: (
        presentView: GPUTextureView, 
        aspectRatio: number, 
        timeMilliseconds: number,
        deltaTimeMilliseconds: number
    ) => void;
    setupUI?: (
        gui: GUI,
    ) => void;
};

export type RendererAppConstructor = (device: GPUDevice, supportedFeatures: GPUSupportedFeatures, presentFormat: GPUTextureFormat, time: number) => RendererApp;

export async function getDevice(): Promise<{adapter: GPUAdapter, device: GPUDevice}> {
    return new Promise<{adapter: GPUAdapter, device: GPUDevice}>(async (resolve, reject) => {
        console.log("Starting WebGPU");
        if(!('gpu' in navigator)) {
            reject(new Error("WebGPU is not available in this browser.", {cause: new Error("navigator.gpu is null")}));
        }
    
        const adapter = await navigator.gpu.requestAdapter().catch(reason => {
            reject(new Error("Unable to get WebGPU Adapter", {cause: reason}));
        });

        if(!adapter)
        {
            reject(new Error("Unable to get WebGPU Adapter"));
            return;
        }
        
        const device = await adapter.requestDevice().catch(reason => {
                reject(new Error("Unable to get WebGPU Device", {cause: reason}));
            });

        if(!device)
        {
            reject(new Error("Unable to get WebGPU Device"));
            return;
        }

        resolve({adapter, device});
    });
}