import TransmittanceLUTPak from '../shaders/transmittance_LUT.wgsl';
import MultiscatteringLUTPak from '../shaders/multiscatter_LUT.wgsl';
import FullscreenQuadPak from '../shaders/fullscreen_quad.wgsl';
import SkyViewLUTPak from '../shaders/skyview_LUT.wgsl';

import { RendererApp, RendererAppConstructor } from "./RendererApp"

class SkySeaApp implements RendererApp {
    transmittanceLUTTexture: GPUTexture;
    transmittanceLUTView: GPUTextureView;

    transmittanceLUTWriteGroup: GPUBindGroup;
    transmittanceLUTReadGroup: GPUBindGroup;

    transmittanceLUTPipeline: GPUComputePipeline;

    multiscatteringLUTTexture: GPUTexture;
    multiscatteringLUTView: GPUTextureView;

    multiscatteringLUTWriteGroup: GPUBindGroup;
    multiscatteringLUTReadGroup: GPUBindGroup;

    multiscatteringLUTPipeline: GPUComputePipeline;

    skyviewLUTTexture: GPUTexture;
    skyviewLUTView: GPUTextureView;

    skyviewLUTWriteGroup: GPUBindGroup;
    skyviewLUTPipeline: GPUComputePipeline;

    samplerForFullscreenPass: GPUSampler;
    combinedSamplerForFullscreenPass: GPUBindGroup;

    fullscreenQuadIndexBuffer: GPUBuffer;
    fullscreenPassPipeline: GPURenderPipeline;

    device: GPUDevice;
    presentFormat: GPUTextureFormat;

    constructor(device: GPUDevice, presentFormat: GPUTextureFormat)
    {
        this.device = device;
        this.presentFormat = presentFormat;

        const transmittanceLUTShaderModule = device.createShaderModule({
            code: TransmittanceLUTPak,
            label: "Transmittance LUT"
        });
        const multiscatteringLUTShaderModule = device.createShaderModule({
            code: MultiscatteringLUTPak,
            label: "Multiscattering LUT"
        });
        const skyviewLUTShaderModule = device.createShaderModule({
            code: SkyViewLUTPak,
            label: "Skyview LUT"
        })

        const transmittanceLUTDimensions = {width: 512, height: 256};
        const multiscatteringLUTDimensions = {width: 512, height: 512};
        const skyviewLUTDimensions = {width: 1920, height: 1080};
        
        this.transmittanceLUTTexture = device.createTexture({
            size: transmittanceLUTDimensions,
            dimension: "2d",
            format: "rgba16float",
            usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING,
        });
        this.transmittanceLUTView = this.transmittanceLUTTexture.createView({label: "Transmittance LUT"});

        this.multiscatteringLUTTexture = device.createTexture({
            size: multiscatteringLUTDimensions,
            dimension: "2d",
            format: "rgba16float",
            usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING,
        });
        this.multiscatteringLUTView = this.multiscatteringLUTTexture.createView({label: "Multiscattering LUT"});
    
        this.skyviewLUTTexture = device.createTexture({
            size: skyviewLUTDimensions,
            dimension: "2d",
            format: "rgba16float",
            usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING,
        });
        this.skyviewLUTView = this.skyviewLUTTexture.createView({label: "Skyview LUT"})

        const writeOnlyTextureGroupLayout = device.createBindGroupLayout({entries: [
            {
                binding: 0,
                visibility: GPUShaderStage.COMPUTE,
                storageTexture: {
                    access: "write-only",
                    format: "rgba16float",
                    viewDimension: "2d",
                }
            }
        ], label: "Write-Only Texture"});
        const readOnlyTextureGroupLayout = device.createBindGroupLayout({entries: [
            {
                binding: 0,
                visibility: GPUShaderStage.COMPUTE,
                texture: {
                    viewDimension: "2d",
                }
            }
        ], label: "Read-Only Texture"});
    
        this.transmittanceLUTWriteGroup = device.createBindGroup({
            layout: writeOnlyTextureGroupLayout,
            entries: [
                {
                    binding: 0,
                    resource: this.transmittanceLUTView,
                }
            ],
            label: "Transmittance LUT Write-Only"
        });
        this.multiscatteringLUTWriteGroup = device.createBindGroup({
            layout: writeOnlyTextureGroupLayout,
            entries: [
                {
                    binding: 0,
                    resource: this.multiscatteringLUTView,
                }
            ],
            label: "Multiscattering LUT Write-Only"
        });
        this.skyviewLUTWriteGroup = device.createBindGroup({
            layout: writeOnlyTextureGroupLayout,
            entries: [
                {
                    binding: 0,
                    resource: this.skyviewLUTView,
                }
            ],
            label: "Skyview LUT Write-Only"
        });
        this.transmittanceLUTReadGroup = device.createBindGroup({
            layout: readOnlyTextureGroupLayout,
            entries: [
                {
                    binding: 0,
                    resource: this.transmittanceLUTView,
                }
            ],
            label: "Transmittance LUT Read-Only"
        });
        this.multiscatteringLUTReadGroup = device.createBindGroup({
            layout: readOnlyTextureGroupLayout,
            entries: [
                {
                    binding: 0,
                    resource: this.multiscatteringLUTView,
                }
            ],
            label: "Multiscattering LUT Read-Only"
        });
    
        this.transmittanceLUTPipeline = device.createComputePipeline({
            compute: {
                module: transmittanceLUTShaderModule,
                entryPoint: "computeTransmittance"
            },
            layout: device.createPipelineLayout({
                bindGroupLayouts: [writeOnlyTextureGroupLayout]
            }),
        })
        this.multiscatteringLUTPipeline = device.createComputePipeline({
            compute: {
                module: multiscatteringLUTShaderModule,
                entryPoint: "computeMultiscattering"
            },
            layout: device.createPipelineLayout({
                bindGroupLayouts: [writeOnlyTextureGroupLayout, readOnlyTextureGroupLayout]
            }),
        })
        this.skyviewLUTPipeline = device.createComputePipeline({
            compute: {
                module: skyviewLUTShaderModule,
                entryPoint: "computeSkyViewLuminance",
            },
            layout: device.createPipelineLayout({
                bindGroupLayouts: [writeOnlyTextureGroupLayout, readOnlyTextureGroupLayout, readOnlyTextureGroupLayout]
            })
        })
    
        const fullscreenQuadIndices = new Uint32Array([
            0, 1, 2,
            0, 2, 3,
        ]);
        this.fullscreenQuadIndexBuffer = device.createBuffer({size: fullscreenQuadIndices.byteLength, usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST});
        device.queue.writeBuffer(this.fullscreenQuadIndexBuffer, 0, fullscreenQuadIndices, 0, fullscreenQuadIndices.length);
        
        this.samplerForFullscreenPass = device.createSampler();
    
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
        this.combinedSamplerForFullscreenPass = device.createBindGroup({
            layout: fullscreenPassGroupLayout,
            entries: [
                {
                    binding: 0,
                    resource: this.skyviewLUTView,
                },
                {
                    binding: 1,
                    resource: this.samplerForFullscreenPass,
                }
            ]
        });
    
        const fullscreenPassShaderModule = device.createShaderModule({
            code: FullscreenQuadPak
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
    
        let passEncoder = commandEncoder.beginComputePass();
        passEncoder.setPipeline(this.transmittanceLUTPipeline);
        passEncoder.setBindGroup(0, this.transmittanceLUTWriteGroup);
        passEncoder.dispatchWorkgroups(transmittanceLUTDimensions.width / 16, transmittanceLUTDimensions.height / 16);
        passEncoder.end();

        passEncoder = commandEncoder.beginComputePass();
        passEncoder.setPipeline(this.multiscatteringLUTPipeline);
        passEncoder.setBindGroup(0, this.multiscatteringLUTWriteGroup);
        passEncoder.setBindGroup(1, this.transmittanceLUTReadGroup);
        passEncoder.dispatchWorkgroups(multiscatteringLUTDimensions.width / 16, multiscatteringLUTDimensions.height / 16); 
        passEncoder.end();

        passEncoder = commandEncoder.beginComputePass();
        passEncoder.setPipeline(this.skyviewLUTPipeline);
        passEncoder.setBindGroup(0, this.skyviewLUTWriteGroup);
        passEncoder.setBindGroup(1, this.transmittanceLUTReadGroup);
        passEncoder.setBindGroup(2, this.multiscatteringLUTReadGroup);
        passEncoder.dispatchWorkgroups(skyviewLUTDimensions.width / 16, skyviewLUTDimensions.height / 16, 1);
        passEncoder.end();

        device.queue.submit([commandEncoder.finish()]);
    }

    draw(
        presentView: GPUTextureView, 
        _aspectRatio: number, 
        _time: number): void
    {
        const commandEncoder = this.device.createCommandEncoder();

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
        fullscreenPassEncoder.setPipeline(this.fullscreenPassPipeline);
        fullscreenPassEncoder.setIndexBuffer(this.fullscreenQuadIndexBuffer, "uint32", 0, this.fullscreenQuadIndexBuffer.size);
        fullscreenPassEncoder.setBindGroup(0, this.combinedSamplerForFullscreenPass);
        fullscreenPassEncoder.drawIndexed(6, 1, 0, 0, 0);
    
        fullscreenPassEncoder.end();
    
        this.device.queue.submit([commandEncoder.finish()]);
    }
};

export const SkySeaAppConstructor: RendererAppConstructor = (device, presentFormat) => {
    return new SkySeaApp(device, presentFormat);
};