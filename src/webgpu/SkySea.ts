import TransmittanceLUTPak from '../shaders/transmittance_LUT.wgsl';
import MultiscatteringLUTPak from '../shaders/multiscatter_LUT.wgsl';
import SkyViewLUTPak from '../shaders/skyview_LUT.wgsl';
import AtmosphereCameraPak from '../shaders/atmosphere_camera.wgsl';
import { GUI } from "lil-gui";
import FullscreenQuadPak from '../shaders/fullscreen_quad.wgsl';

import { RendererApp, RendererAppConstructor } from "./RendererApp"
import { mat4, Mat4, vec3, Vec3, vec4, Vec4 } from 'wgpu-matrix';

const transmittanceLUTDimensions = {width: 1024, height: 512};
const multiscatteringLUTDimensions = {width: 1024, height: 1024};
const skyviewLUTDimensions = {width: 512, height: 128};

interface CameraUBO
{
    inv_proj: Mat4,
    inv_view: Mat4,
    position: Vec4,
}

interface CelestialLight
{
    color: Vec3;
    strength: number;
    forward: Vec3;
    angularRadius: number;
}

class CelestialLightUBO
{
    data: {light: CelestialLight } = {
        light: {
            color: vec3.create(1.0, 1.0, 1.0),
            strength: 6.0,
            forward: vec3.create(0.0, -0.1961, 0.98058),
            angularRadius: 16.0 / 60.0 * (3.141592653589793 / 180.0),
        }
    };

    length: number = (3 + 1 + 3 + 1); 
    stagingBuffer: Float32Array;
    buffer: GPUBuffer;

    constructor(device: GPUDevice)
    {
        this.stagingBuffer = new Float32Array(this.length);
        this.buffer = device.createBuffer({
            size: this.stagingBuffer.byteLength,
            usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.UNIFORM
        })
    }
    writeToBuffer(device: GPUDevice) {
        this.stagingBuffer.set(this.data.light.color, 0);
        this.stagingBuffer[3] = this.data.light.strength;
        this.stagingBuffer.set(this.data.light.forward, 4);
        this.stagingBuffer[7] = this.data.light.angularRadius;

        device.queue.writeBuffer(this.buffer, 0, this.stagingBuffer, 0, this.stagingBuffer.length);
    }
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
                sampler: { type: "filtering" },  
            },
            {
                binding: 2,
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
                resource: device.createSampler({magFilter: "linear", minFilter: "linear"}),  
            },
            {
                binding: 2,
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
    group1: GPUBindGroup;
    pipeline: GPUComputePipeline;
}

function CreateSkyViewLUTPassResources(
    device: GPUDevice, 
    dimensions: {width: number, height: number},
    transmittanceLUT: GPUTextureView,
    multiscatterLUT: GPUTextureView,
    lightUBO: CelestialLightUBO,
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
                sampler: {type: "filtering"}
            },
            {
                binding: 2,
                visibility: GPUShaderStage.COMPUTE,
                texture: {}
            },
            {
                binding: 3,
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
                resource: device.createSampler({magFilter: "linear", minFilter: "linear"}),  
            },
            {
                binding: 2,
                resource: transmittanceLUT,
            },
            {
                binding: 3,
                resource: multiscatterLUT,
            }
        ],
        label
    });

    const bindGroup1Layout = device.createBindGroupLayout({
        entries: [
            {
                binding: 0,
                visibility: GPUShaderStage.COMPUTE,
                buffer: {}
            }
        ]
    });
    const bindGroup1 = device.createBindGroup({
        layout: bindGroup1Layout,
        entries: [
            {
                binding: 0,
                resource: {buffer: lightUBO.buffer}
            }
        ]
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
            bindGroupLayouts: [bindGroup0Layout, bindGroup1Layout]
        }),
        label
    })

    return {
        group0: bindGroup0,
        group1: bindGroup1,
        pipeline: skyviewLUTPipeline,
        texture: skyviewLUT,
        view: skyviewLUTView,
    }
}

interface FullscreenQuadPassResources
{
    group0Layout: GPUBindGroupLayout;
    group0: GPUBindGroup;

    pipeline: GPURenderPipeline;
}

// For showing a single texture stretched across the screen
function CreateFullscreenQuadPassResources(
    device: GPUDevice,
    texture: GPUTextureView, 
    outputFormat: GPUTextureFormat,
)
{
    const label = "Fullscreen Quad";
    const group0Layout = 
        device.createBindGroupLayout({
            entries: [
                {
                    binding: 0,
                    visibility: GPUShaderStage.FRAGMENT,
                    texture: {}
                },
                {
                    binding: 1,
                    visibility: GPUShaderStage.FRAGMENT,
                    sampler: {}
                }
            ], label
        });

    const group0 = device.createBindGroup({
        layout: group0Layout,
        entries: [
            {
                binding: 0,
                resource: texture,
            },
            {
                binding: 1,
                resource: device.createSampler({magFilter: "nearest", minFilter: "nearest"}),
            },
        ],
        label
    })

    const shaderModule = device.createShaderModule({
        code: FullscreenQuadPak,
        label
    });
    const pipeline = device.createRenderPipeline({
        vertex: {
            module: shaderModule,
            entryPoint: "vertex_main",
        },
        fragment: {
            module: shaderModule,
            entryPoint: "fragment_main",
            targets: [
                {
                    format: outputFormat
                },
            ]
        },
        primitive: {
            topology: "triangle-list",
            cullMode: "none",
            frontFace: "ccw",
        },
        layout: device.createPipelineLayout({
            bindGroupLayouts: [ group0Layout ],
        }),
        label
    })

    return {
        pipeline,
        group0,
        group0Layout,
    };
}

class SkySeaApp implements RendererApp {
    transmittanceLUTPassResources: TransmittanceLUTPassResources;
    multiscatterLUTPassResources: MultiscatterLUTPassResources;
    skyviewLUTPassResources: SkyViewLUTPassResources;

    settings: {
        showSkyViewLUT: boolean,
        timeHours: number,
        timeSpeedupFactor: number,
        skipNight: boolean,
    };
    fullscreenQuadPassResources: FullscreenQuadPassResources;

    celestialLightUBO: CelestialLightUBO;

    atmosphereCameraLUTGroup: GPUBindGroup;
    cameraUBO: GPUBuffer;
    atmosphereCameraGroup1: GPUBindGroup;
    atmosphereCameraPipeline: GPURenderPipeline;

    fullscreenQuadIndexBuffer: GPUBuffer;

    device: GPUDevice;
    presentFormat: GPUTextureFormat;

    startTime: number;

    setupUI(gui: GUI)
    {
        gui.add(this.settings, 'showSkyViewLUT').name('Show Sky-view Lookup Table');
        gui.add(this.settings, 'timeHours').min(0.0).max(24.0).name('Time in Hours').listen();
        gui.add(this.settings, 'timeSpeedupFactor').min(1.0).max(50000).step(1.0).name('Time Speed Multiplier');
        gui.add(this.settings, 'skipNight').name('Skip Night');
    }

    constructor(device: GPUDevice, presentFormat: GPUTextureFormat, time: number)
    {
        this.device = device;
        this.presentFormat = presentFormat;
        this.startTime = time;
        this.settings = {
            showSkyViewLUT: false, 
            timeHours: 5.5, 
            timeSpeedupFactor: 1000.0,
            skipNight: true,
        };

        this.celestialLightUBO = new CelestialLightUBO(device);

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
            this.multiscatterLUTPassResources.view,
            this.celestialLightUBO,
        );
        this.fullscreenQuadPassResources = CreateFullscreenQuadPassResources(
            this.device, this.skyviewLUTPassResources.view, presentFormat
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
                    },
                    {
                        binding: 1,
                        visibility: GPUShaderStage.FRAGMENT,
                        buffer: {}
                    }
                ], label: "Atmosphere Camera Group 1"
            })
        ];
        this.atmosphereCameraLUTGroup = device.createBindGroup({
            layout: atmosphereBindGroupLayout,
            entries: [
                {
                    binding: 0,
                    resource: device.createSampler({
                        magFilter: "linear",
                    }),
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
            label: "Atmosphere Camera Group 0"
        });

        this.cameraUBO = device.createBuffer({
            size: 16 * 4 + 16 * 4 + 4 * 4, // 2 mat4x4 + vec4
            usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.UNIFORM,
        });
        this.atmosphereCameraGroup1 = device.createBindGroup({
            layout: atmosphereCameraLayouts[1],
            entries: [
                {
                    binding: 0,
                    resource: {buffer: this.cameraUBO},
                },
                {
                    binding: 1,
                    resource: {buffer: this.celestialLightUBO.buffer},
                },
            ],
            label: "Atmosphere Camera Group 1"
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

        device.queue.submit([commandEncoder.finish()]);
    }

    draw(
        presentView: GPUTextureView, 
        aspectRatio: number, 
        _timeMilliseconds: number,
        deltaTimeMilliseconds: number): void
    {
        const commandEncoder = this.device.createCommandEncoder();

        const skyviewLUTPassEncoder = commandEncoder.beginComputePass();
        skyviewLUTPassEncoder.setPipeline(this.skyviewLUTPassResources.pipeline);
        skyviewLUTPassEncoder.setBindGroup(0, this.skyviewLUTPassResources.group0);

        const HOURS_TO_MILLISECONDS = 60.0 * 60.0 * 1000.0;

        this.settings.timeHours += this.settings.timeSpeedupFactor * deltaTimeMilliseconds / HOURS_TO_MILLISECONDS;
        this.settings.timeHours = this.settings.timeHours - Math.floor(this.settings.timeHours / 24.0) * 24.0;

        const NIGHT_START_HOURS = (12.0 + 6.0) + 0.25;
        const NIGHT_END_HOURS = 6.0 - 0.25;
        if(this.settings.skipNight && (this.settings.timeHours > NIGHT_START_HOURS || this.settings.timeHours < NIGHT_END_HOURS))
        {
            // time is between 0.0 and 24.0
            // Skip from ~7 PM to 5 AM (1 hour after sunset to 1 hour before sunrise)
            this.settings.timeHours = NIGHT_END_HOURS;
        }

        // offset the time so that the app starts during the day
        const MIDNIGHT_ROTATION = 0.0;
        const SUN_ROTATION_RAD_PER_HOUR = (2.0 * Math.PI) / 24.0;
        vec3.rotateX(
            vec3.create(0.0, 1.0, 0.0), 
            vec3.create(0.0,0.0,0.0), 
            this.settings.timeHours * SUN_ROTATION_RAD_PER_HOUR + MIDNIGHT_ROTATION, 
            this.celestialLightUBO.data.light.forward
        );
        this.celestialLightUBO.writeToBuffer(this.device);   
        skyviewLUTPassEncoder.setBindGroup(1, this.skyviewLUTPassResources.group1);

        skyviewLUTPassEncoder.dispatchWorkgroups(skyviewLUTDimensions.width / 16, skyviewLUTDimensions.height / 16, 1);
        skyviewLUTPassEncoder.end();

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
        this.device.queue.writeBuffer(this.cameraUBO, 0, cameraUBODataBytes, 0, cameraUBODataBytes.length)

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
            label: "Fullscreen Pass"
        });

        if(this.settings.showSkyViewLUT)
        {
            fullscreenPassEncoder.setPipeline(this.fullscreenQuadPassResources.pipeline);
            fullscreenPassEncoder.setIndexBuffer(this.fullscreenQuadIndexBuffer, "uint32", 0, this.fullscreenQuadIndexBuffer.size);
            fullscreenPassEncoder.setBindGroup(0, this.fullscreenQuadPassResources.group0);
            fullscreenPassEncoder.drawIndexed(6, 1, 0, 0, 0);
        }
        else
        {
            fullscreenPassEncoder.setPipeline(this.atmosphereCameraPipeline);
            fullscreenPassEncoder.setIndexBuffer(this.fullscreenQuadIndexBuffer, "uint32", 0, this.fullscreenQuadIndexBuffer.size);
            fullscreenPassEncoder.setBindGroup(0, this.atmosphereCameraLUTGroup);
            fullscreenPassEncoder.setBindGroup(1, this.atmosphereCameraGroup1);
            fullscreenPassEncoder.drawIndexed(6, 1, 0, 0, 0);
        }
        
        fullscreenPassEncoder.end();
    
        this.device.queue.submit([commandEncoder.finish()]);
    }
};

export const SkySeaAppConstructor: RendererAppConstructor = (device, presentFormat, time) => {
    return new SkySeaApp(device, presentFormat, time);
};