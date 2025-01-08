interface RendererApp
{
    draw: (
        device: GPUDevice, 
        presentView: GPUTextureView, 
        presentFormat: GPUTextureFormat, 
        aspectRatio: number, 
        time: number
    ) => void;
    prepare: (
        device: GPUDevice, 
        presentFormat: GPUTextureFormat
    ) => void;
};