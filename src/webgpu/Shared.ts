export async function getDevice(): Promise<GPUDevice> {
    return new Promise<GPUDevice>((resolve, reject) => {
        console.log("Starting WebGPU");
        if(!('gpu' in navigator)) {
            reject(new Error("WebGPU is not available in this browser.", {cause: new Error("navigator.gpu is null")}));
        }
    
        navigator.gpu.requestAdapter().then(adapter => {
            return adapter?.requestDevice();
        }).then(device => {
            if(device)
            {
                resolve(device);
            }
            reject(new Error(`No WebGPU device.`));
        }).catch(reason => {
            reject(new Error("Unable to get WebGPU Device", {cause: reason}));
        });
    });
}