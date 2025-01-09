import shaderSource from '../shaders/main.wgsl';
import { mat4 } from 'wgpu-matrix';

// Draw a simple cube

export class HelloCubeApp implements RendererApp {
    device: GPUDevice;
    presentFormat: GPUTextureFormat;

    pipeline: GPURenderPipeline;

    vertexBuffer: GPUBuffer;
    indexBuffer: GPUBuffer;

    indexCount: number;

    projViewModelBuffer: GPUBuffer;
    projViewModelBindGroup: GPUBindGroup;

    constructor(device: GPUDevice, presentFormat: GPUTextureFormat) {
        this.device = device;
        this.presentFormat = presentFormat;

        const shaderModule = this.device.createShaderModule({
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
        this.indexCount = indices.length;
    
        this.vertexBuffer = this.device.createBuffer({
            size: vertices.byteLength,
            usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        });
        this.device.queue.writeBuffer(this.vertexBuffer, 0, vertices, 0, vertices.length);
        const vertexBuffers: GPUVertexBufferLayout[] = [{ 
            attributes: [
                {shaderLocation: 0, offset: 0, format: "float32x4",},
                {shaderLocation: 1, offset: 16, format: "float32x4"},
            ],
            arrayStride: 2 * 16,
            stepMode: "vertex",
        }];
    
        this.indexBuffer = this.device.createBuffer({size: indices.byteLength, usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST});
        this.device.queue.writeBuffer(this.indexBuffer, 0, indices, 0, indices.length);
    
        const PROJ_VIEW_BUFFER_SIZE = 16 * 4;

        this.projViewModelBuffer = this.device.createBuffer({size: PROJ_VIEW_BUFFER_SIZE, usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST});

        const bindGroupLayout = this.device.createBindGroupLayout({entries: [
            {
                binding: 0,
                visibility: GPUShaderStage.VERTEX,
                buffer: {
                    type: "uniform"
                }
            }
        ]});
    
        this.projViewModelBindGroup = this.device.createBindGroup({
            layout: bindGroupLayout, 
            entries: [
                {
                    binding: 0,
                    resource: {
                        buffer: this.projViewModelBuffer,
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
                        format: this.presentFormat
                    },
                ]
            },
            primitive: {
                topology: "triangle-list",
                cullMode: "back",
                frontFace: "cw",
            },
            layout: this.device.createPipelineLayout({
                bindGroupLayouts: [bindGroupLayout],
            }),
        };
        this.pipeline = this.device.createRenderPipeline(pipelineDescriptor);
    };
    draw(
        presentView: GPUTextureView, 
        aspectRatio: number, 
        time: number): void
    {
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
        this.device.queue.writeBuffer(this.projViewModelBuffer, 0, projViewModel, 0, projViewModel.length)

        const commandEncoder = this.device.createCommandEncoder();
    
        const clearColor = {r: 0.5, g: 0.5, b: 0.5, a: 0.0};
        const passEncoder = commandEncoder.beginRenderPass({
            colorAttachments: [
                { 
                    clearValue: clearColor, 
                    loadOp: "clear", 
                    storeOp: "store", 
                    view: presentView
                },
            ],
        });
    
        passEncoder.setPipeline(this.pipeline);
        passEncoder.setVertexBuffer(0, this.vertexBuffer);
        passEncoder.setIndexBuffer(this.indexBuffer, "uint32", 0, this.indexBuffer.size)
        passEncoder.setBindGroup(0, this.projViewModelBindGroup);
        passEncoder.drawIndexed(this.indexCount, 1, 0, 0, 0);
    
        passEncoder.end();
        this.device.queue.submit([commandEncoder.finish()]);
    }
}

export const HelloCubeAppConstructor: RendererAppConstructor = (device, presentFormat) => {
    return new HelloCubeApp(device, presentFormat);
}
