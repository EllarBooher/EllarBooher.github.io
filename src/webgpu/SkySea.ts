import shaderSource from '../shaders/transmittance_LUT.wgsl'
import fullscreenQuadSource from '../shaders/fullscreen_quad.wgsl'

export class SkySeaApp implements RendererApp {
    transmittanceLUTGroup?: GPUBindGroup;
    transmittanceLUTPipeline?: GPUComputePipeline;

    transmittanceLUTTexture?: GPUTexture;
    transmittanceLUTView?: GPUTextureView;

    transmittanceLUTSampler?: GPUSampler;

    transmittanceLUTCombinedSamplerForFullscreenPass?: GPUBindGroup;

    fullscreenQuadIndexBuffer?: GPUBuffer;
    fullscreenPassPipeline?: GPURenderPipeline;

    prepare(device: GPUDevice, presentFormat: GPUTextureFormat)
    {
        const shaderModule = device.createShaderModule({
            code: shaderSource,
        });
    
        const transmittanceLUTDimensions = {width: 512, height: 256};
    
        this.transmittanceLUTTexture = device.createTexture({
            size: transmittanceLUTDimensions,
            dimension: "2d",
            format: "rgba16float",
            usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING,
        });
        this.transmittanceLUTView =  this.transmittanceLUTTexture.createView();
    
        const transmittanceLUTGroupLayout = device.createBindGroupLayout({entries: [
            {
                binding: 0,
                visibility: GPUShaderStage.COMPUTE,
                storageTexture: {
                    access: "write-only",
                    format: "rgba16float",
                    viewDimension: "2d",
                }
            }
        ]});
    
        this.transmittanceLUTGroup = device.createBindGroup({
            layout: transmittanceLUTGroupLayout,
            entries: [
                {
                    binding: 0,
                    resource: this.transmittanceLUTView,
                }
            ]
        })
    
        this.transmittanceLUTPipeline = device.createComputePipeline({
            compute: {
                module: shaderModule,
                entryPoint: "computeTransmittance"
            },
            layout: device.createPipelineLayout({
                bindGroupLayouts: [transmittanceLUTGroupLayout]
            }),
        })
    
        const fullscreenQuadIndices = new Uint32Array([
            0, 1, 2,
            0, 2, 3,
        ]);
        this.fullscreenQuadIndexBuffer = device.createBuffer({size: fullscreenQuadIndices.byteLength, usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST});
        device.queue.writeBuffer(this.fullscreenQuadIndexBuffer, 0, fullscreenQuadIndices, 0, fullscreenQuadIndices.length);
        
        this.transmittanceLUTSampler = device.createSampler();
    
        const fullscreenPassGroupLayout = device.createBindGroupLayout({
            entries: [
                {
                    binding: 0,
                    visibility: GPUShaderStage.FRAGMENT,
                    texture: {
                        sampleType: "float",
                        viewDimension: "2d"
                    }
                },
                {
                    binding: 1,
                    visibility: GPUShaderStage.FRAGMENT,
                    sampler: {
                        type: "filtering"
                    }
                }
            ]
        });
        this.transmittanceLUTCombinedSamplerForFullscreenPass = device.createBindGroup({
            layout: fullscreenPassGroupLayout,
            entries: [
                {
                    binding: 0,
                    resource: this.transmittanceLUTView,
                },
                {
                    binding: 1,
                    resource: this.transmittanceLUTSampler,
                }
            ]
        });
    
        const fullscreenPassShaderModule = device.createShaderModule({
            code: fullscreenQuadSource
        });
    
        this.fullscreenPassPipeline = device.createRenderPipeline({
            vertex: {
                module: fullscreenPassShaderModule,
                entryPoint: "vertex_main",
            },
            fragment: {
                module: fullscreenPassShaderModule,
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
                frontFace: "ccw",
            },
            layout: device.createPipelineLayout({
                bindGroupLayouts: [fullscreenPassGroupLayout],
            }),
        });

        const commandEncoder = device.createCommandEncoder();
    
        const passEncoder = commandEncoder.beginComputePass();
        passEncoder.setPipeline(this.transmittanceLUTPipeline);
        passEncoder.setBindGroup(0, this.transmittanceLUTGroup);
        passEncoder.dispatchWorkgroups(transmittanceLUTDimensions.width / 16, transmittanceLUTDimensions.height / 16);
        passEncoder.end();

        device.queue.submit([commandEncoder.finish()]);
    }
    draw(device: GPUDevice, presentView: GPUTextureView, _presentFormat: GPUTextureFormat, _aspectRatio: number, _time: number): void
    {
        const commandEncoder = device.createCommandEncoder();

        const clearColor = {r: 1.0, g: 0.0, b: 0.0, a: 0.0};
        const fullscreenPassEncoder = commandEncoder.beginRenderPass({
            colorAttachments: [
                { 
                    clearValue: clearColor, 
                    loadOp: "clear", 
                    storeOp: "store", 
                    view: presentView
                },
            ],
        });
        fullscreenPassEncoder.setPipeline(this.fullscreenPassPipeline!);
        fullscreenPassEncoder.setIndexBuffer(this.fullscreenQuadIndexBuffer!, "uint32", 0, this.fullscreenQuadIndexBuffer!.size);
        fullscreenPassEncoder.setBindGroup(0, this.transmittanceLUTCombinedSamplerForFullscreenPass);
        fullscreenPassEncoder.drawIndexed(6, 1, 0, 0, 0);
    
        fullscreenPassEncoder.end();
    
        device.queue.submit([commandEncoder.finish()]);
    }
};