import shaderSource from '../shaders/main.wgsl';
import { mat4 } from 'wgpu-matrix';

// Draw a simple cube

function drawCube(device: GPUDevice, presentView: GPUTextureView, presentFormat: GPUTextureFormat, aspectRatio: number, time: number) {
    const shaderModule = device.createShaderModule({
        code: shaderSource,
    });

    // Alternating position & color
    // raw unfiltered cube model
    const vertices = new Float32Array([
        -1, -1, -1, 1.0,
            0.0, 0.0, 0.0, 1.0,
         1, -1, -1, 1.0,
            1.0, 0.0, 0.0, 1.0,
         1,  1, -1, 1.0,
            1.0, 1.0, 0.0, 1.0,
        -1,  1, -1, 1.0,
            0.0, 1.0, 0.0, 1.0,
        -1, -1,  1, 1.0,
            0.0, 0.0, 1.0, 1.0,
         1, -1,  1, 1.0,
            1.0, 0.0, 1.0, 1.0,
         1,  1,  1, 1.0,
            1.0, 1.0, 1.0, 1.0,
        -1,  1,  1, 1.0,
            0.0, 1.0, 1.0, 1.0,
    ]);
    const indices = new Uint32Array([
        // -Z
        0, 1, 2,
        0, 2, 3,
        // +X
        1, 5, 6,
        1, 6, 2,
        // +Y
        2, 6, 7,
        2, 7, 3,
        // +Z
        4, 7, 6,
        4, 6, 5,
        // -X
        0, 3, 7,
        0, 7, 4,
        // -Y
        0, 4, 5,
        0, 5, 1,
    ]);

    const fov = 60 * Math.PI / 180
    const near = 0.1;
    const far = 1000;
    const perspective = mat4.perspective(fov, aspectRatio, near, far);
    
    const eye = [3, 5, 10];
    const target = [0, 0, 0];
    const up = [0, 1, 0];
    const view = mat4.lookAt(eye, target, up);

    const model = mat4.axisRotation([1.0, 1.0, 0.0], time / 1000.0);

    const projViewModel =  mat4.mul(perspective, mat4.mul(view, model));

    const vertexBuffer = device.createBuffer({
        size: vertices.byteLength,
        usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
    });
    device.queue.writeBuffer(vertexBuffer, 0, vertices, 0, vertices.length);
    const vertexBuffers: GPUVertexBufferLayout[] = [{ attributes: [
            {shaderLocation: 0, offset: 0, format: "float32x4",},
            {shaderLocation: 1, offset: 16, format: "float32x4"},
        ],
        arrayStride: 2 * 16,
        stepMode: "vertex",
    }];

    const indexBuffer = device.createBuffer({size: indices.byteLength, usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST});
    device.queue.writeBuffer(indexBuffer, 0, indices, 0, indices.length);

    const projViewModelBuffer = device.createBuffer({size: projViewModel.byteLength, usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST});
    device.queue.writeBuffer(projViewModelBuffer, 0, projViewModel, 0, projViewModel.length)

    const bindGroupLayout = device.createBindGroupLayout({entries: [
        {
            binding: 0,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
                type: "uniform"
            }
        }
    ]});

    const bindGroup = device.createBindGroup({
        layout: bindGroupLayout, 
        entries: [
            {
                binding: 0,
                resource: {
                    buffer: projViewModelBuffer,
                },
            },
        ],
    });

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
                    format: presentFormat
                },
            ]
        },
        primitive: {
            topology: "triangle-list",
            cullMode: "back",
            frontFace: "cw",
        },
        layout: device.createPipelineLayout({
            bindGroupLayouts: [bindGroupLayout],
        }),
    };
    const pipeline = device.createRenderPipeline(pipelineDescriptor);

    const commandEncoder = device.createCommandEncoder();

    const clearColor = {r: 0.5, g: 0.5, b: 0.5, a: 0.0};
    const drawVerticesPass: GPURenderPassDescriptor = {
        colorAttachments: [
            { 
                clearValue: clearColor, 
                loadOp: "clear", 
                storeOp: "store", 
                view: presentView
            },
        ],
    };

    const passEncoder = commandEncoder.beginRenderPass(drawVerticesPass);

    passEncoder.setPipeline(pipeline);
    passEncoder.setVertexBuffer(0, vertexBuffer);
    passEncoder.setIndexBuffer(indexBuffer, "uint32", 0, indexBuffer.size)
    passEncoder.setBindGroup(0, bindGroup);
    passEncoder.drawIndexed(indices.length, 1, 0, 0, 0);

    passEncoder.end();
    device.queue.submit([commandEncoder.finish()]);

    vertexBuffer.destroy();
    indexBuffer.destroy();
    projViewModelBuffer.destroy();
}

export const HelloCubeApp: RendererApp = {
    draw: drawCube,
};