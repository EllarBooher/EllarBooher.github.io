interface RendererApp
{
    device: GPUDevice;
    presentFormat: GPUTextureFormat;
    draw: (
        presentView: GPUTextureView, 
        aspectRatio: number, 
        time: number
    ) => void;
};

type RendererAppConstructor = (device: GPUDevice, presentFormat: GPUTextureFormat) => RendererApp;