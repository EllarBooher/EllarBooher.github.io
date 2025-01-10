import TransmittanceLUTPak from '../shaders/transmittance_LUT.wgsl';
import MultiscatteringLUTPak from '../shaders/multiscatter_LUT.wgsl';
import SkyViewLUTPak from '../shaders/skyview_LUT.wgsl';
import AtmosphereCameraPak from '../shaders/atmosphere_camera.wgsl';

import { RendererApp, RendererAppConstructor } from "./RendererApp"
import { mat4, Mat4, vec4, Vec4 } from 'wgpu-matrix';

interface CameraUBO
{
    inv_proj: Mat4,
    inv_view: Mat4,
    position: Vec4,
}

interface TransmittanceLUTPassResources
{
    texture: GPUTexture;
    view: GPUTextureView;
    group0: GPUBindGroup;
    pipeline: GPUComputePipeline;
}

function CreateTransmittanceLUTPassResources(
    device: GPUDevice, 
    dimensions: {width: number, height: number},
): TransmittanceLUTPassResources
{
    const label = "Transmittance LUT";
    const transmittanceLUT = device.createTexture({
        size: dimensions,
        dimension: "2d",
        format: "rgba16float",
        usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING,
        label: label,
    });
    const transmittanceLUTView = transmittanceLUT.createView({label: label})

    const bindGroup0Layout = device.createBindGroupLayout({
        entries: [
            {
                binding: 0,
                visibility: GPUShaderStage.COMPUTE,
                storageTexture: {
                    access: "write-only",
                    format: "rgba16float",
                }
            },
        ],
        label: label
    });

    const bindGroup0 = device.createBindGroup({
        layout: bindGroup0Layout,
        entries: [
            {
                binding: 0,
                resource: transmittanceLUTView,
            },
        ],
        label: label
    });

    const transmittanceLUTShaderModule = device.createShaderModule({
        code: TransmittanceLUTPak,
        label: label
    });
    const transmittanceLUTPipeline = device.createComputePipeline({
        compute: {
            module: transmittanceLUTShaderModule,
            entryPoint: "computeTransmittance",
        },
        layout: device.createPipelineLayout({
            bindGroupLayouts: [bindGroup0Layout]
        }),
        label: label
    })

    return {
        group0: bindGroup0,
        pipeline: transmittanceLUTPipeline,
        texture: transmittanceLUT,
        view: transmittanceLUTView,
    }
}

interface MultiscatterLUTPassResources
{
    texture: GPUTexture;
    view: GPUTextureView;
    group0: GPUBindGroup;
    pipeline: GPUComputePipeline;
}

function CreateMultiscatterLUTPassResources(
    device: GPUDevice, 
    dimensions: {width: number, height: number},
    transmittanceLUT: GPUTextureView,
): MultiscatterLUTPassResources
{
    const label = "Multiscatter LUT";
    const multiscatterLUT = device.createTexture({
        size: dimensions,
        dimension: "2d",
        format: "rgba16float",
        usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING,
        label: label,
    });
    const multiscatterLUTView = multiscatterLUT.createView({label: label})

    const bindGroup0Layout = device.createBindGroupLayout({
        entries: [
            {
                binding: 0,
                visibility: GPUShaderStage.COMPUTE,
                storageTexture: {
                    access: "write-only",
                    format: "rgba16float",
                }
            },
            {
                binding: 1,
                visibility: GPUShaderStage.COMPUTE,
                texture: {}
            },
        ],
        label: label
    });

    const bindGroup0 = device.createBindGroup({
        layout: bindGroup0Layout,
        entries: [
            {
                binding: 0,
                resource: multiscatterLUTView,
            },
            {
                binding: 1,
                resource: transmittanceLUT,
            },
        ],
        label: label
    });

    const multiscatterLUTShaderModule = device.createShaderModule({
        code: MultiscatteringLUTPak,
        label: label
    });
    const multiscatterLUTPipeline = device.createComputePipeline({
        compute: {
            module: multiscatterLUTShaderModule,
            entryPoint: "computeMultiscattering",
        },
        layout: device.createPipelineLayout({
            bindGroupLayouts: [bindGroup0Layout]
        }),
        label: label
    })

    return {
        group0: bindGroup0,
        pipeline: multiscatterLUTPipeline,
        texture: multiscatterLUT,
        view: multiscatterLUTView,
    }
}

interface SkyViewLUTPassResources
{
    texture: GPUTexture;
    view: GPUTextureView;
    group0: GPUBindGroup;
    pipeline: GPUComputePipeline;
}

function CreateSkyViewLUTPassResources(
    device: GPUDevice, 
    dimensions: {width: number, height: number},
    transmittanceLUT: GPUTextureView,
    multiscatterLUT: GPUTextureView,
): SkyViewLUTPassResources
{
    const label = "Skyview LUT";
    const skyviewLUT = device.createTexture({
        size: dimensions,
        dimension: "2d",
        format: "rgba16float",
        usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING,
        label,
    });
    const skyviewLUTView = skyviewLUT.createView({label})

    const bindGroup0Layout = device.createBindGroupLayout({
        entries: [
            {
                binding: 0,
                visibility: GPUShaderStage.COMPUTE,
                storageTexture: {
                    access: "write-only",
                    format: "rgba16float",
                }
            },
            {
                binding: 1,
                visibility: GPUShaderStage.COMPUTE,
                texture: {}
            },
            {
                binding: 2,
                visibility: GPUShaderStage.COMPUTE,
                texture: {}
            }
        ],
        label
    });

    const bindGroup0 = device.createBindGroup({
        layout: bindGroup0Layout,
        entries: [
            {
                binding: 0,
                resource: skyviewLUTView,
            },
            {
                binding: 1,
                resource: transmittanceLUT,
            },
            {
                binding: 2,
                resource: multiscatterLUT,
            }
        ],
        label
    });

    const skyviewLUTShaderModule = device.createShaderModule({
        code: SkyViewLUTPak,
        label
    });
    const skyviewLUTPipeline = device.createComputePipeline({
        compute: {
            module: skyviewLUTShaderModule,
            entryPoint: "computeSkyViewLuminance",
        },
        layout: device.createPipelineLayout({
            bindGroupLayouts: [bindGroup0Layout]
        }),
        label
    })

    return {
        group0: bindGroup0,
        pipeline: skyviewLUTPipeline,
        texture: skyviewLUT,
        view: skyviewLUTView,
    }
}

class SkySeaApp implements RendererApp {
    transmittanceLUTPassResources: TransmittanceLUTPassResources;
    multiscatterLUTPassResources: MultiscatterLUTPassResources;
    skyviewLUTPassResources: SkyViewLUTPassResources;

    atmosphereCameraLUTGroup: GPUBindGroup;
    cameraUBO: GPUBuffer;
    cameraUBOGroup: GPUBindGroup;
    atmosphereCameraPipeline: GPURenderPipeline;

    fullscreenQuadIndexBuffer: GPUBuffer;

    device: GPUDevice;
    presentFormat: GPUTextureFormat;

    constructor(device: GPUDevice, presentFormat: GPUTextureFormat)
    {
        this.device = device;
        this.presentFormat = presentFormat;

        const transmittanceLUTDimensions = {width: 512, height: 256};
        const multiscatteringLUTDimensions = {width: 512, height: 512};
        const skyviewLUTDimensions = {width: 1920, height: 1080};

        this.transmittanceLUTPassResources = CreateTransmittanceLUTPassResources(
            this.device, transmittanceLUTDimensions
        );
        this.multiscatterLUTPassResources = CreateMultiscatterLUTPassResources(
            this.device, multiscatteringLUTDimensions, 
            this.transmittanceLUTPassResources.view
        );
        this.skyviewLUTPassResources = CreateSkyViewLUTPassResources(
            this.device, skyviewLUTDimensions, 
            this.transmittanceLUTPassResources.view, 
            this.multiscatterLUTPassResources.view
        );

        const atmosphereBindGroupLayout = device.createBindGroupLayout({
            entries: [
                { // sampler for the LUTs
                    binding: 0,
                    visibility: GPUShaderStage.FRAGMENT,
                    sampler: {}
                },
                { // transmittance
                    binding: 1,
                    visibility: GPUShaderStage.FRAGMENT | GPUShaderStage.COMPUTE,
                    texture: {
                        sampleType: "float",
                        viewDimension: "2d"
                    }
                },
                { // multiscatter
                    binding: 2,
                    visibility: GPUShaderStage.FRAGMENT | GPUShaderStage.COMPUTE,
                    texture: {
                        sampleType: "float",
                        viewDimension: "2d"
                    }
                },
                { // skyview
                    binding: 3,
                    visibility: GPUShaderStage.FRAGMENT | GPUShaderStage.COMPUTE,
                    texture: {
                        sampleType: "float",
                        viewDimension: "2d"
                    }
                },
            ], label: "Atmosphere sampler/LUT/UBO Group"
        });

        const fullscreenQuadIndices = new Uint32Array([
            0, 1, 2,
            0, 2, 3,
        ]);
        this.fullscreenQuadIndexBuffer = device.createBuffer({size: fullscreenQuadIndices.byteLength, usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST});
        device.queue.writeBuffer(this.fullscreenQuadIndexBuffer, 0, fullscreenQuadIndices, 0, fullscreenQuadIndices.length);

        const atmosphereCameraLayouts = [
            atmosphereBindGroupLayout,
            device.createBindGroupLayout({
                entries: [
                    {
                        binding: 0,
                        visibility: GPUShaderStage.FRAGMENT,
                        buffer: {}
                    }
                ], label: "Camera UBO"
            })
        ];
        this.atmosphereCameraLUTGroup = device.createBindGroup({
            layout: atmosphereBindGroupLayout,
            entries: [
                {
                    binding: 0,
                    resource: device.createSampler(),
                },
                {
                    binding: 1,
                    resource: this.transmittanceLUTPassResources.view,
                },
                {
                    binding: 2,
                    resource: this.multiscatterLUTPassResources.view,
                },
                {
                    binding: 3,
                    resource: this.skyviewLUTPassResources.view,
                },
            ],
            label: "Atmosphere Camera LUT Group"
        });

        this.cameraUBO = device.createBuffer({
            size: 16 * 4 + 16 * 4 + 4 * 4, // 2 mat4x4 + vec4
            usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.UNIFORM,
        });
        this.cameraUBOGroup = device.createBindGroup({
            layout: atmosphereCameraLayouts[1],
            entries: [
                {
                    binding: 0,
                    resource: {buffer: this.cameraUBO},
                },
            ],
            label: "Atmosphere Camera CameraUBO"
        })

        const atmosphereCameraShaderModule = device.createShaderModule({
            code: AtmosphereCameraPak,
            label: "Atmosphere Camera",
        });
        this.atmosphereCameraPipeline = device.createRenderPipeline({
            vertex: {
                module: atmosphereCameraShaderModule,
                entryPoint: "vertex_main",
            },
            fragment: {
                module: atmosphereCameraShaderModule,
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
                bindGroupLayouts: atmosphereCameraLayouts,
            }),
            label: "Atmosphere Camera"
        })

        const commandEncoder = device.createCommandEncoder();
    
        let passEncoder = commandEncoder.beginComputePass();
        passEncoder.setPipeline(this.transmittanceLUTPassResources.pipeline);
        passEncoder.setBindGroup(0, this.transmittanceLUTPassResources.group0);
        passEncoder.dispatchWorkgroups(transmittanceLUTDimensions.width / 16, transmittanceLUTDimensions.height / 16);
        passEncoder.end();

        passEncoder = commandEncoder.beginComputePass();
        passEncoder.setPipeline(this.multiscatterLUTPassResources.pipeline);
        passEncoder.setBindGroup(0, this.multiscatterLUTPassResources.group0);
        passEncoder.dispatchWorkgroups(multiscatteringLUTDimensions.width / 16, multiscatteringLUTDimensions.height / 16); 
        passEncoder.end();

        passEncoder = commandEncoder.beginComputePass();
        passEncoder.setPipeline(this.skyviewLUTPassResources.pipeline);
        passEncoder.setBindGroup(0, this.skyviewLUTPassResources.group0);
        passEncoder.dispatchWorkgroups(skyviewLUTDimensions.width / 16, skyviewLUTDimensions.height / 16, 1);
        passEncoder.end();

        device.queue.submit([commandEncoder.finish()]);
    }

    draw(
        presentView: GPUTextureView, 
        aspectRatio: number, 
        _time: number): void
    {
        const fov = 60 * Math.PI / 180
        const near = 0.1;
        const far = 1000;
        const perspective = mat4.perspective(fov, aspectRatio, near, far);
        
        const camera_pos = [0, 10, 0];
        const view = mat4.translation(camera_pos);

        const cameraUBOData: CameraUBO = {
            inv_proj: mat4.inverse(perspective),
            inv_view: mat4.inverse(view),
            position: vec4.create(...camera_pos),
        };
        const cameraUBODataBytes = new Float32Array(16 + 16 + 4);
        cameraUBODataBytes.set(cameraUBOData.inv_proj, 0);
        cameraUBODataBytes.set(cameraUBOData.inv_view, 16);
        cameraUBODataBytes.set(cameraUBOData.position, 16 + 16);
        // console.log(cameraUBODataBytes.join(','));
        this.device.queue.writeBuffer(this.cameraUBO, 0, cameraUBODataBytes, 0, cameraUBODataBytes.length)

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
            label: "Atmosphere Camera"
        });

        fullscreenPassEncoder.setPipeline(this.atmosphereCameraPipeline);
        fullscreenPassEncoder.setIndexBuffer(this.fullscreenQuadIndexBuffer, "uint32", 0, this.fullscreenQuadIndexBuffer.size);
        fullscreenPassEncoder.setBindGroup(0, this.atmosphereCameraLUTGroup);
        fullscreenPassEncoder.setBindGroup(1, this.cameraUBOGroup);
        fullscreenPassEncoder.drawIndexed(6, 1, 0, 0, 0);
    
        fullscreenPassEncoder.end();
    
        this.device.queue.submit([commandEncoder.finish()]);
    }
};

export const SkySeaAppConstructor: RendererAppConstructor = (device, presentFormat) => {
    return new SkySeaApp(device, presentFormat);
};