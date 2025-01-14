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
    console.log("Starting WebGPU");
    if(!('gpu' in navigator)) {
        return Promise.reject(new Error("WebGPU is not available in this browser.", {cause: new Error("navigator.gpu is null")}));
    }

    const adapterPromise = navigator.gpu.requestAdapter().then((value) => {
        if(!value)
        {
            return Promise.reject(new Error("Requested WebGPU Adapter is not available."));
        }
        return Promise.resolve(value);
    }).catch(reason => {
        return Promise.reject(new Error("Unable to get WebGPU Adapter", {cause: reason}));
    });
    
    const devicePromise = adapterPromise.then(adapter => {
        return adapter.requestDevice({requiredFeatures: ['float32-filterable']}).catch(reason => {
            return Promise.reject(new Error("Unable to get WebGPU Device", {cause: reason}));
        });
    });

    return Promise.all([adapterPromise, devicePromise]).then(value => {
        const [adapter, device] = value;
        return {
            adapter,
            device,
        }
    });
}