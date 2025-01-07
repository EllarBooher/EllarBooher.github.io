import shaderSource from '../shaders/main.wgsl';

export function drawTriangle(device: GPUDevice) {
    device.lost.then((reason) => {
        throw new Error(`WebGPU device lost - ("${reason.reason}"):\n ${reason.message}`);
    })
    device.onuncapturederror = (ev) => {
        throw new Error(`WebGPU device uncaptured error: ${ev.error.message}`)
    }

    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    const context = canvas.getContext('webgpu') as GPUCanvasContext;

    const devicePixelRatio = window.devicePixelRatio;
    canvas.width = canvas.clientWidth * devicePixelRatio;
    canvas.height = canvas.clientHeight * devicePixelRatio;
    const presentationFormat = navigator.gpu.getPreferredCanvasFormat();

    context.configure({device: device, format: presentationFormat});

    const shaderModule = device.createShaderModule({
        code: shaderSource,
    });

    // Alternating position & color
    const vertices = new Float32Array([
        0.0, 0.5, 0.0, 1.0,
            1.0, 0.0, 0.0, 1.0,
        -0.5, -0.5, 0.0, 1.0,
            0.0, 1.0, 0.0, 1.0,
        0.5, -0.5, 0.0, 1.0,
            0.0, 0.0, 1.0, 1.0,
    ]);
    const vertexBuffer = device.createBuffer({
        size: vertices.byteLength,
        usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
    });
    device.queue.writeBuffer(vertexBuffer, 0, vertices, 0, vertices.length);
    const vertexBuffers: Array<GPUVertexBufferLayout> = [{ attributes: [
            {shaderLocation: 0, offset: 0, format: "float32x4",},
            {shaderLocation: 1, offset: 16, format: "float32x4"},
        ],
        arrayStride: 2 * 16,
        stepMode: "vertex",
    }];

    const pipelineDescriptor: GPURenderPipelineDescriptor = {
        vertex: {
            module: shaderModule,
            entryPoint: "vertex_main",
            buffers: vertexBuffers,
        },
        fragment: {
            module: shaderModule,
            entryPoint: "fragment_main",
            targets: [
                {
                    format: presentationFormat
                },
            ]
        },
        primitive: {
            topology: "triangle-list",
        },
        layout: "auto",
    };
    const pipeline = device.createRenderPipeline(pipelineDescriptor);

    const commandEncoder = device.createCommandEncoder();

    const clearColor = {r: 0.0, g: 0.3, b: 0.6, a: 1.0};
    const presentationView = context.getCurrentTexture().createView();
    const drawVerticesPass: GPURenderPassDescriptor = {
        colorAttachments: [
            { 
                clearValue: clearColor, 
                loadOp: "clear", 
                storeOp: "store", 
                view: presentationView
            },
        ],
    };

    const passEncoder = commandEncoder.beginRenderPass(drawVerticesPass);

    passEncoder.setPipeline(pipeline);
    passEncoder.setVertexBuffer(0, vertexBuffer);
    passEncoder.draw(3);

    passEncoder.end();
    device.queue.submit([commandEncoder.finish()]);
}

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
                resolve(device!);
            }
            reject(new Error(`No WebGPU device.`));
        }).catch(reason => {
            reject(new Error("Unable to get WebGPU Device", {cause: new Error(`${reason.reason} - ${reason.message}`)}));
        });
    });
}