import TransmittanceLUTPak from '../shaders/transmittance_LUT.wgsl';
import MultiscatterLUTPak from '../shaders/multiscatter_LUT.wgsl';
import SkyViewLUTPak from '../shaders/skyview_LUT.wgsl';
import AtmosphereCameraPak from '../shaders/atmosphere_camera.wgsl';
import { GUI } from "lil-gui";
import FullscreenQuadPak from '../shaders/fullscreen_quad.wgsl';

import { RendererApp, RendererAppConstructor } from "./RendererApp"
import { mat4, Mat4, vec3, Vec3, vec4, Vec4 } from 'wgpu-matrix';

const transmittanceLUTDimensions = {width: 2048, height: 1024};

const TRANSMITTANCE_LUT_FORMAT: GPUTextureFormat = 'rgba32float';
const TRANSMITTANCE_LUT_SAMPLE_TYPE: GPUTextureSampleType = 'float';
const MULTISCATTER_LUT_FORMAT: GPUTextureFormat = 'rgba32float';
const MULTISCATTER_LUT_SAMPLE_TYPE: GPUTextureSampleType = 'float';
const SKYVIEW_LUT_FORMAT: GPUTextureFormat = 'rgba32float';
const SKYVIEW_LUT_SAMPLE_TYPE: GPUTextureSampleType = 'float';

const multiscatterLUTDimensions = {width: 1024, height: 1024};
const skyviewLUTDimensions = {width: 1024, height: 256};

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

interface FullscreenQuadUBOData
{
    gain: Vec4
}

class FullscreenQuadUBO
{
    data: FullscreenQuadUBOData = {
        gain: vec4.create(1.0,1.0,1.0,1.0),
    };

    public readonly lengthFloat32: number = 4
    stagingBuffer: Float32Array;
    buffer: GPUBuffer;

    constructor(device: GPUDevice)
    {
        this.stagingBuffer = new Float32Array(this.lengthFloat32);
        this.buffer = device.createBuffer({
            size: this.stagingBuffer.byteLength,
            usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.UNIFORM
        })
    }
    writeToBuffer(device: GPUDevice) {
        this.stagingBuffer.set(this.data.gain);

        device.queue.writeBuffer(this.buffer, 0, this.stagingBuffer, 0, this.stagingBuffer.length);
    }
}

class CelestialLightUBO
{
    data: {light: CelestialLight } = {
        light: {
            color: vec3.create(1.0, 1.0, 1.0),
            strength: 100.0,
            forward: vec3.create(0.0, 1.0, 0.0),
            angularRadius: 16.0 / 60.0 * (3.141592653589793 / 180.0),
        }
    };

    
    public readonly lengthFloat32: number = 3 + 1 + 3 + 1;
    stagingBuffer: Float32Array;
    buffer: GPUBuffer;

    constructor(device: GPUDevice)
    {
        this.stagingBuffer = new Float32Array(this.lengthFloat32);
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
        format: TRANSMITTANCE_LUT_FORMAT,
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
                    format: TRANSMITTANCE_LUT_FORMAT,
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
        format: MULTISCATTER_LUT_FORMAT,
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
                    format: MULTISCATTER_LUT_FORMAT,
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
                texture: {sampleType: TRANSMITTANCE_LUT_SAMPLE_TYPE}
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
        code: MultiscatterLUTPak,
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
        format: SKYVIEW_LUT_FORMAT,
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
                    format: SKYVIEW_LUT_FORMAT,
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
                texture: {sampleType: TRANSMITTANCE_LUT_SAMPLE_TYPE}
            },
            {
                binding: 3,
                visibility: GPUShaderStage.COMPUTE,
                texture: {sampleType: MULTISCATTER_LUT_SAMPLE_TYPE}
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

    group0ByOutputTexture: Map<RenderOutput, GPUBindGroup>;

    uboDataByOutputTexture: Map<RenderOutput, FullscreenQuadUBOData>;
    ubo: FullscreenQuadUBO;

    group1: GPUBindGroup;

    pipeline: GPURenderPipeline;
}

// For showing a single texture stretched across the screen
function CreateFullscreenQuadPassResources(
    device: GPUDevice,
    textures: Map<RenderOutput, {view: GPUTextureView, defaultUBO: FullscreenQuadUBOData}>,
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
                    texture: {sampleType: 'float'}
                },
                {
                    binding: 1,
                    visibility: GPUShaderStage.FRAGMENT,
                    sampler: { type: 'filtering' }
                }
            ], label
        });

    const group0ByOutputTexture = new Map<RenderOutput, GPUBindGroup>();

    const uboDataByOutputTexture = new Map<RenderOutput, FullscreenQuadUBOData>();

    textures.forEach(({view, defaultUBO}, key) => {
        group0ByOutputTexture.set(key, device.createBindGroup({
            layout: group0Layout,
            entries: [
                {
                    binding: 0,
                    resource: view,
                },
                {
                    binding: 1,
                    resource: device.createSampler({magFilter: 'linear', minFilter: 'linear'}),
                },
            ],
            label: label + key.toString()
        }))
        uboDataByOutputTexture.set(key, defaultUBO);
    });

    const ubo = new FullscreenQuadUBO(device);

    const group1Layout = device.createBindGroupLayout({
        entries: [
            {
                binding: 0,
                visibility: GPUShaderStage.FRAGMENT,
                buffer: {type: 'uniform' }
            }
        ], label
    });
    const group1 = device.createBindGroup({
        layout: group1Layout,
        entries: [
            {
                binding: 0,
                resource: {buffer: ubo.buffer }
            }
        ]
    });

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
            bindGroupLayouts: [ group0Layout, group1Layout ],
        }),
        label
    })

    return {
        group0Layout,
        group0ByOutputTexture,
        uboDataByOutputTexture,
        ubo,
        group1,
        pipeline,
    };
}

enum RenderOutput {
    SkyviewLUT,
    TransmittanceLUT,
    MultiscatterLUT,
    Scene,
};

class SkySeaApp implements RendererApp {
    transmittanceLUTPassResources: TransmittanceLUTPassResources;
    multiscatterLUTPassResources: MultiscatterLUTPassResources;
    skyviewLUTPassResources: SkyViewLUTPassResources;

    settings: {
        showSkyViewLUT: boolean,
        timeHours: number,
        timeSpeedupFactor: number,
        paused: boolean,
        outputTexture: RenderOutput,
        fullscreenQuadUBO: {
            gain: {
                r: number,
                g: number,
                b: number,
            }
        },
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
        const outputTextureController = gui.add(this.settings, 'outputTexture', 
            {
                'Scene': RenderOutput.Scene, 
                'Transmittance LUT': RenderOutput.TransmittanceLUT, 
                'Multiscatter LUT': RenderOutput.MultiscatterLUT, 
                'Skyview LUT': RenderOutput.SkyviewLUT
            }
        ).name('Render Output');
        const displayGainFolder = gui.addFolder('Display Gain').hide();
        displayGainFolder.add({gain: 0.0}, 'gain').name('RGB').min(0.0).max(20.0).onChange((v: number) => {
            this.settings.fullscreenQuadUBO.gain.r = v;
            this.settings.fullscreenQuadUBO.gain.g = v;
            this.settings.fullscreenQuadUBO.gain.b = v;
        });
        displayGainFolder.add(this.settings.fullscreenQuadUBO.gain, 'r').name('R').min(0.0).max(20.0).listen();
        displayGainFolder.add(this.settings.fullscreenQuadUBO.gain, 'g').name('G').min(0.0).max(20.0).listen();
        displayGainFolder.add(this.settings.fullscreenQuadUBO.gain, 'b').name('B').min(0.0).max(20.0).listen();
        outputTextureController.onFinishChange((v: RenderOutput) => {
            if(v != RenderOutput.Scene && this.fullscreenQuadPassResources.uboDataByOutputTexture.has(v))
            {
                const sourceUBO = this.fullscreenQuadPassResources.uboDataByOutputTexture.get(v)!;
                this.settings.fullscreenQuadUBO.gain.r = sourceUBO.gain.at(0) ?? 1.0;
                this.settings.fullscreenQuadUBO.gain.g = sourceUBO.gain.at(1) ?? 1.0;
                this.settings.fullscreenQuadUBO.gain.b = sourceUBO.gain.at(2) ?? 1.0;
                displayGainFolder.show();
            }
            else
            {
                displayGainFolder.hide();
            }
        })
        
        gui.add(this.settings, 'timeHours').min(0.0).max(24.0).name('Time in Hours').listen();
        gui.add(this.settings, 'timeSpeedupFactor').min(1.0).max(50000).step(1.0).name('Time Multiplier');
        gui.add(this.settings, 'paused').name('Pause Time');
        gui.add({ fn: () => { this.settings.timeHours = 6.0 - 0.5 }}, 'fn').name('Skip to Sunrise');
        gui.add({ fn: () => { this.settings.timeHours = 18.0 - 0.5 }}, 'fn').name('Skip to Sunset');
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
            paused: false,
            outputTexture: RenderOutput.Scene,
            fullscreenQuadUBO: {
                gain: {
                    r: 1.0, g: 1.0, b: 1.0
                }
            }
        };

        this.celestialLightUBO = new CelestialLightUBO(device);

        this.transmittanceLUTPassResources = CreateTransmittanceLUTPassResources(
            this.device, transmittanceLUTDimensions
        );
        this.multiscatterLUTPassResources = CreateMultiscatterLUTPassResources(
            this.device, multiscatterLUTDimensions, 
            this.transmittanceLUTPassResources.view
        );
        this.skyviewLUTPassResources = CreateSkyViewLUTPassResources(
            this.device, skyviewLUTDimensions, 
            this.transmittanceLUTPassResources.view, 
            this.multiscatterLUTPassResources.view,
            this.celestialLightUBO,
        );
        this.fullscreenQuadPassResources = CreateFullscreenQuadPassResources(
            this.device, 
            new Map<RenderOutput, {view: GPUTextureView, defaultUBO: FullscreenQuadUBOData}>([
                [RenderOutput.TransmittanceLUT, 
                    { 
                        view: this.transmittanceLUTPassResources.view, 
                        defaultUBO: {gain: vec4.create(1.0,1.0,1.0,1.0) } 
                    }], 
                [RenderOutput.MultiscatterLUT, 
                    { 
                        view: this.multiscatterLUTPassResources.view, 
                        defaultUBO: {gain: vec4.create(15.0,15.0,15.0,15.0) }
                    }], 
                [RenderOutput.SkyviewLUT, 
                    { 
                        view: this.skyviewLUTPassResources.view, 
                        defaultUBO: {gain: vec4.create(8.0,8.0,8.0,8.0) }
                    }]
            ]), 
            this.presentFormat
        );

        const atmosphereBindGroupLayout = device.createBindGroupLayout({
            entries: [
                { // sampler for the LUTs
                    binding: 0,
                    visibility: GPUShaderStage.FRAGMENT,
                    sampler: {type: 'filtering'}
                },
                { // transmittance
                    binding: 1,
                    visibility: GPUShaderStage.FRAGMENT | GPUShaderStage.COMPUTE,
                    texture: {
                        sampleType: TRANSMITTANCE_LUT_SAMPLE_TYPE,
                        viewDimension: "2d"
                    }
                },
                { // multiscatter
                    binding: 2,
                    visibility: GPUShaderStage.FRAGMENT | GPUShaderStage.COMPUTE,
                    texture: {
                        sampleType: MULTISCATTER_LUT_SAMPLE_TYPE,
                        viewDimension: "2d"
                    }
                },
                { // skyview
                    binding: 3,
                    visibility: GPUShaderStage.FRAGMENT | GPUShaderStage.COMPUTE,
                    texture: {
                        sampleType: SKYVIEW_LUT_SAMPLE_TYPE,
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
                        magFilter: 'linear',
                        minFilter: 'linear',
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
                        format: this.presentFormat
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
        passEncoder.dispatchWorkgroups(multiscatterLUTDimensions.width / 16, multiscatterLUTDimensions.height / 16); 
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
 
        if(!this.settings.paused)
        {
            const HOURS_TO_MILLISECONDS = 60.0 * 60.0 * 1000.0;
            this.settings.timeHours += this.settings.timeSpeedupFactor * deltaTimeMilliseconds / HOURS_TO_MILLISECONDS;
            this.settings.timeHours = this.settings.timeHours - Math.floor(this.settings.timeHours / 24.0) * 24.0;
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

        if(this.fullscreenQuadPassResources.uboDataByOutputTexture.has(this.settings.outputTexture))
        {
            const gain = this.settings.fullscreenQuadUBO.gain;
            this.fullscreenQuadPassResources.uboDataByOutputTexture.get(this.settings.outputTexture)!.gain = vec4.create(gain.r,gain.g,gain.b,1.0);
        }

        if(this.settings.outputTexture === RenderOutput.Scene)
        {
            fullscreenPassEncoder.setPipeline(this.atmosphereCameraPipeline);
            fullscreenPassEncoder.setIndexBuffer(this.fullscreenQuadIndexBuffer, "uint32", 0, this.fullscreenQuadIndexBuffer.size);
            fullscreenPassEncoder.setBindGroup(0, this.atmosphereCameraLUTGroup);
            fullscreenPassEncoder.setBindGroup(1, this.atmosphereCameraGroup1);
            fullscreenPassEncoder.drawIndexed(6, 1, 0, 0, 0);
        }
        else
        {
            fullscreenPassEncoder.setPipeline(this.fullscreenQuadPassResources.pipeline);
            fullscreenPassEncoder.setIndexBuffer(this.fullscreenQuadIndexBuffer, "uint32", 0, this.fullscreenQuadIndexBuffer.size);
            fullscreenPassEncoder.setBindGroup(0, this.fullscreenQuadPassResources.group0ByOutputTexture.get(this.settings.outputTexture));
            const uboData = this.fullscreenQuadPassResources.uboDataByOutputTexture.get(this.settings.outputTexture);
            if(uboData)
            {
                this.fullscreenQuadPassResources.ubo.data = uboData;
            }
            else
            {
                this.fullscreenQuadPassResources.ubo.data = {
                    gain: vec4.create(1.0,1.0,1.0,1.0)
                };
            }
            this.fullscreenQuadPassResources.ubo.writeToBuffer(this.device);
            fullscreenPassEncoder.setBindGroup(1, this.fullscreenQuadPassResources.group1);
            fullscreenPassEncoder.drawIndexed(6, 1, 0, 0, 0);
        }
        
        fullscreenPassEncoder.end();
    
        this.device.queue.submit([commandEncoder.finish()]);
    }
};

export const SkySeaAppConstructor: RendererAppConstructor = (device, _supportedFeatures, presentFormat, time) => {
    return new SkySeaApp(device, presentFormat, time);
};