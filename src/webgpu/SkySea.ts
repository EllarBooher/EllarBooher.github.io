import TransmittanceLUTPak from '../shaders/transmittance_LUT.wgsl';
import MultiscatterLUTPak from '../shaders/multiscatter_LUT.wgsl';
import SkyViewLUTPak from '../shaders/skyview_LUT.wgsl';
import AtmosphereCameraPak from '../shaders/atmosphere_camera.wgsl';
import { GUI } from "lil-gui";
import FullscreenQuadPak from '../shaders/fullscreen_quad.wgsl';
import HeightmapPak from '../shaders/heightmap.wgsl';

import { RendererApp, RendererAppConstructor } from "./RendererApp"
import { mat4, Mat4, vec3, Vec3, vec4, Vec4 } from 'wgpu-matrix';

const transmittanceLUTDimensions = {width: 2048, height: 1024};

const TRANSMITTANCE_LUT_FORMAT: GPUTextureFormat = 'rgba32float';
const TRANSMITTANCE_LUT_SAMPLE_TYPE: GPUTextureSampleType = 'float';

const MULTISCATTER_LUT_FORMAT: GPUTextureFormat = 'rgba32float';
const MULTISCATTER_LUT_SAMPLE_TYPE: GPUTextureSampleType = 'float';

const SKYVIEW_LUT_FORMAT: GPUTextureFormat = 'rgba32float';
const SKYVIEW_LUT_SAMPLE_TYPE: GPUTextureSampleType = 'float';

const GBUFFER_COLOR_FORMAT: GPUTextureFormat = 'rgba16float';
const GBUFFER_COLOR_SAMPLE_TYPE: GPUTextureSampleType = 'float';

const GBUFFER_NORMAL_FORMAT: GPUTextureFormat = 'rgba16float';
const GBUFFER_NORMAL_SAMPLE_TYPE: GPUTextureSampleType = 'float';

const multiscatterLUTDimensions = {width: 1024, height: 1024};
const skyviewLUTDimensions = {width: 1024, height: 256};

abstract class UBO
{
    protected readonly stagingBuffer: Float32Array;
    public readonly buffer: GPUBuffer;

    constructor(device: GPUDevice, lengthFloat32: number)
    {
        this.stagingBuffer = new Float32Array(lengthFloat32);
        this.buffer = device.createBuffer({
            size: this.stagingBuffer.byteLength,
            usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.UNIFORM
        })
    }

    protected abstract stageFloats(): void;

    public writeToGPU(device: GPUDevice)
    {
        this.stageFloats();

        device.queue.writeBuffer(this.buffer, 0, this.stagingBuffer, 0, this.stagingBuffer.length);
    }
}

class TimeUBO extends UBO
{
    public readonly data: {
        time_seconds: number,
    } = {
        time_seconds: 0.0,
    };

    constructor(device: GPUDevice)
    {
        super(device, 1);
    }

    public stageFloats(): void
    {
        this.stagingBuffer[0] = this.data.time_seconds;
    }
}

class CameraUBO extends UBO
{
    public readonly data: {
        inv_proj: Mat4,
        inv_view: Mat4,
        position: Vec4,
    } = {
        inv_proj: mat4.identity(),
        inv_view: mat4.identity(),
        position: vec4.create(0.0,0.0,0.0,1.0),
    };

    constructor(device: GPUDevice)
    {
        super(device, 16 + 16 + 4);
    }

    public stageFloats(): void 
    {
        this.stagingBuffer.set(this.data.inv_proj, 0);
        this.stagingBuffer.set(this.data.inv_view, 16);
        this.stagingBuffer.set(this.data.position, 32);
    }
}

interface FullscreenQuadUBOData
{
    color_gain: Vec4,
    vertex_scale: Vec4,
}

class FullscreenQuadUBO extends UBO
{
    data: FullscreenQuadUBOData = {
        color_gain: vec4.create(1.0,1.0,1.0,1.0),
        vertex_scale: vec4.create(1.0,1.0,1.0,1.0),
    };

    constructor(device: GPUDevice)
    {
        super(device, 4 + 4);
    }

    public stageFloats(): void 
    {
        this.stagingBuffer.set(this.data.color_gain, 0);
        this.stagingBuffer.set(this.data.vertex_scale, 4);
    }
}

interface CelestialLight
{
    color: Vec3;
    strength: number;
    forward: Vec3;
    angularRadius: number;
}

class CelestialLightUBO extends UBO
{
    data: {light: CelestialLight } = {
        light: {
            color: vec3.create(1.0, 1.0, 1.0),
            strength: 100.0,
            forward: vec3.create(0.0, 1.0, 0.0),
            angularRadius: 16.0 / 60.0 * (3.141592653589793 / 180.0),
        }
    };

    constructor(device: GPUDevice)
    {
        super(device, 3 + 1 + 3 + 1);
    }
    
    public stageFloats(): void {
        this.stagingBuffer.set(this.data.light.color, 0);
        this.stagingBuffer[3] = this.data.light.strength;
        this.stagingBuffer.set(this.data.light.forward, 4);
        this.stagingBuffer[7] = this.data.light.angularRadius;

    }
}

interface GBuffer
{
    colorWithDepthInAlpha: GPUTexture;
    colorWithDepthInAlphaView: GPUTextureView;

    normal: GPUTexture;
    normalView: GPUTextureView;

    // Keep both layout and group around for reuse across other pipelines

    // binding 0: color
    // binding 1: normal

    // texture_2d
    readGroupLayout: GPUBindGroupLayout;
    readGroup: GPUBindGroup;

    // texture_storage_2d
    writeGroupLayout: GPUBindGroupLayout;
    writeGroup: GPUBindGroup;
}

function CreateGBuffer(
    device: GPUDevice, 
    dimensions: {width: number, height: number},
    old?: GBuffer,
): GBuffer
{
    const label = 'GBuffer';
    const colorWithDepthInAlpha = device.createTexture({
        size: dimensions,
        dimension: '2d',
        format: GBUFFER_COLOR_FORMAT,
        usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING, 
        label: label,
    });
    const colorWithDepthInAlphaView = colorWithDepthInAlpha.createView({label: label});

    const normal = device.createTexture({
        size: dimensions,
        dimension: '2d',
        format: GBUFFER_NORMAL_FORMAT,
        usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING, 
        label: label,
    });
    const normalView = normal.createView({label: label});

    const readGroupLayout = old?.readGroupLayout ?? device.createBindGroupLayout({
        entries: [
            {
                binding: 0,
                visibility: GPUShaderStage.COMPUTE | GPUShaderStage.FRAGMENT,
                texture: {sampleType: GBUFFER_COLOR_SAMPLE_TYPE},
            },
            {
                binding: 1,
                visibility: GPUShaderStage.COMPUTE | GPUShaderStage.FRAGMENT,
                texture: {sampleType: GBUFFER_NORMAL_SAMPLE_TYPE},
            }
        ]
    });
    const readGroup = device.createBindGroup({
        layout: readGroupLayout,
        entries: [
            {
                binding: 0,
                resource: colorWithDepthInAlphaView,
            },
            {
                binding: 1,
                resource: normalView,
            }
        ],
        label: label,
    });

    const writeGroupLayout = old?.writeGroupLayout ?? device.createBindGroupLayout({
        entries: [
            {
                binding: 0,
                visibility: GPUShaderStage.COMPUTE | GPUShaderStage.FRAGMENT,
                storageTexture: {access: 'write-only',format: GBUFFER_COLOR_FORMAT},
            },
            {
                binding: 1,
                visibility: GPUShaderStage.COMPUTE | GPUShaderStage.FRAGMENT,
                storageTexture: {access: 'write-only',format: GBUFFER_NORMAL_FORMAT},
            }
        ]
    });
    const writeGroup = device.createBindGroup({
        layout: writeGroupLayout,
        entries: [
            {
                binding: 0,
                resource: colorWithDepthInAlphaView,
            },
            {
                binding: 1,
                resource: normalView,
            }
        ],
        label: label,
    });

    return {
        colorWithDepthInAlpha,
        colorWithDepthInAlphaView,
        normal,
        normalView,
        readGroupLayout,
        readGroup,
        writeGroupLayout,
        writeGroup,
    };
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

interface HeightmapPassResources
{
    group1: GPUBindGroup;
    pipeline: GPUComputePipeline;
}

function CreateHeightmapPassResources(
    device: GPUDevice,
    gbufferWriteGroupLayout: GPUBindGroupLayout,
    cameraUBO: CameraUBO,
    timeUBO: TimeUBO,
)
{
    const label = "Heightmap Pass";

    const group1Layout = device.createBindGroupLayout({                    
        entries: [
            {
                binding: 0,
                visibility: GPUShaderStage.COMPUTE,
                buffer: {}
            },
            {
                binding: 1,
                visibility: GPUShaderStage.COMPUTE,
                buffer: {}
            }
        ], label
    });
    const group1 = device.createBindGroup({
        layout: group1Layout,
        entries: [
            {
                binding: 0,
                resource: {buffer: cameraUBO.buffer }
            },
            {
                binding: 1,
                resource: {buffer: timeUBO.buffer }
            }
        ]
    });

    const shaderModule = device.createShaderModule({code: HeightmapPak, label});

    const pipeline = device.createComputePipeline({
        layout: device.createPipelineLayout({
            bindGroupLayouts: [gbufferWriteGroupLayout, group1Layout],
        }),
        compute: {
            module: shaderModule,
            entryPoint: 'renderHeightmap',
        },
        label
    })

    return {
        group1,
        pipeline,
    };
}

interface FullscreenQuadPassResources
{
    group0Layout: GPUBindGroupLayout;

    group0ByOutputTexture: Map<RenderOutput, GPUBindGroup>;
    group0Sampler: GPUSampler;

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

    const group0Sampler = device.createSampler({magFilter: 'linear', minFilter: 'linear'});

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
                    resource: group0Sampler,
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
                visibility: GPUShaderStage.FRAGMENT | GPUShaderStage.VERTEX,
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
        group0Sampler,
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
    GBufferColor,
    GBufferNormal,
};


interface OutputTexturePostProcessSettings
{
    flip: boolean;
    color_gain: {
        r: number,
        g: number,
        b: number,
    };
};

class SkySeaApp implements RendererApp {
    transmittanceLUTPassResources: TransmittanceLUTPassResources;
    multiscatterLUTPassResources: MultiscatterLUTPassResources;
    skyviewLUTPassResources: SkyViewLUTPassResources;
    fullscreenQuadPassResources: FullscreenQuadPassResources;
    heightmapPassResources: HeightmapPassResources;

    gbuffer: GBuffer;

    settings: {
        outputTexture: RenderOutput,
        outputTextureSettings: Map<RenderOutput, OutputTexturePostProcessSettings>,
        currentOutputTextureSettings: OutputTexturePostProcessSettings,
        orbit: {
            timeHours: number,
            timeSpeedupFactor: number,
            reversed: boolean,
            paused: boolean,
            inclinationRadians: number,
            sunsetAzimuthRadians: number,
        }
    };

    celestialLightUBO: CelestialLightUBO;

    atmosphereCameraLUTGroup: GPUBindGroup;
    
    cameraUBO: CameraUBO;
    timeUBO: TimeUBO;
    
    atmosphereCameraGroup1: GPUBindGroup;
    atmosphereCameraPipeline: GPURenderPipeline;

    fullscreenQuadIndexBuffer: GPUBuffer;

    device: GPUDevice;
    presentFormat: GPUTextureFormat;
    quit = false;

    startTime: number;
    dummyFrameCounter: number;

    deltaTimeRecord: {
        milliseconds: number[],
        index: number,
        count: number,
        runningSum: number,
        averageFPS: number,
    };

    setupUI(gui: GUI)
    {
        gui.add(this.deltaTimeRecord, 'averageFPS').decimals(3).disable().name('Average FPS').listen();
        const outputTextureController = gui.add(this.settings, 'outputTexture', 
            {
                'Scene': RenderOutput.Scene, 
                'Transmittance LUT': RenderOutput.TransmittanceLUT, 
                'Multiscatter LUT': RenderOutput.MultiscatterLUT, 
                'Skyview LUT': RenderOutput.SkyviewLUT,
                'GBuffer Color': RenderOutput.GBufferColor,
                'GBuffer Normal': RenderOutput.GBufferNormal,
            }
        ).name('Render Output').listen();
        const outputTextureFolder = gui.addFolder('Display Gain').hide();
        outputTextureFolder.add(this.settings.currentOutputTextureSettings, 'flip').name('Flip Image').listen();
        outputTextureFolder.add({gain: 0.0}, 'gain').name('RGB').min(0.0).max(100.0).onChange((v: number) => {
            this.settings.currentOutputTextureSettings.color_gain.r = v;
            this.settings.currentOutputTextureSettings.color_gain.g = v;
            this.settings.currentOutputTextureSettings.color_gain.b = v;
        });
        outputTextureFolder.add(this.settings.currentOutputTextureSettings.color_gain, 'r').name('R').min(0.0).max(100.0).listen();
        outputTextureFolder.add(this.settings.currentOutputTextureSettings.color_gain, 'g').name('G').min(0.0).max(100.0).listen();
        outputTextureFolder.add(this.settings.currentOutputTextureSettings.color_gain, 'b').name('B').min(0.0).max(100.0).listen();
        outputTextureController.onChange((v: RenderOutput) => {
            if(this.fullscreenQuadPassResources.uboDataByOutputTexture.has(v))
            {
                // UI is bound to suboject so we can't just reassign in one statement, need to recursively set fields
                this.settings.currentOutputTextureSettings.flip = false;
                this.settings.currentOutputTextureSettings.color_gain.r = 1.0;
                this.settings.currentOutputTextureSettings.color_gain.g = 1.0;
                this.settings.currentOutputTextureSettings.color_gain.b = 1.0;
    
                if(this.settings.outputTextureSettings.has(v))
                {
                    const newSettings = this.settings.outputTextureSettings.get(v)!;
                    this.settings.currentOutputTextureSettings.flip = newSettings.flip;
                    this.settings.currentOutputTextureSettings.color_gain.r = newSettings.color_gain.r;
                    this.settings.currentOutputTextureSettings.color_gain.g = newSettings.color_gain.g;
                    this.settings.currentOutputTextureSettings.color_gain.b = newSettings.color_gain.b;
                }

                outputTextureFolder.show();
            }
            else
            {
                outputTextureFolder.hide();
            }
        });
        
        gui.add(this.settings.orbit, 'timeHours').min(0.0).max(24.0).name('Time in Hours').listen();
        gui.add(this.settings.orbit, 'timeSpeedupFactor').min(1.0).max(50000).step(1.0).name('Time Multiplier');
        gui.add(this.settings.orbit, 'paused').name('Pause Time');

        gui.add({ fn: () => { this.settings.orbit.timeHours = this.settings.orbit.reversed ? (18.0 + 0.5) : (6.0 - 0.5)}}, 'fn').name('Skip to Sunrise');
        gui.add({ fn: () => { this.settings.orbit.timeHours = this.settings.orbit.reversed ? (6.0 + 0.5) : (18.0 - 0.5)}}, 'fn').name('Skip to Sunset');
        
        gui.add(this.settings.orbit, 'reversed').name('Reverse Sun');
        gui.add(this.settings.orbit, 'sunsetAzimuthRadians').name("Sun Azimuth").min(0.0).max(2.0 * Math.PI);
        gui.add(this.settings.orbit, 'inclinationRadians').name("Sun Inclination").min(0.0).max(Math.PI);
    }

    constructor(device: GPUDevice, presentFormat: GPUTextureFormat, time: number)
    {
        this.device = device;
        this.presentFormat = presentFormat;
        this.startTime = time;
        this.settings = {
            outputTexture: RenderOutput.Scene,
            outputTextureSettings: new Map<RenderOutput, OutputTexturePostProcessSettings>([
                [RenderOutput.TransmittanceLUT, 
                    {
                        flip: false, 
                        color_gain: {r: 1.0, g: 1.0, b: 1.0}
                    }], 
                [RenderOutput.MultiscatterLUT, 
                    { 
                        flip: false,
                        color_gain: {r: 15.0, g: 15.0, b: 15.0}
                    }], 
                [RenderOutput.SkyviewLUT, 
                    { 
                        flip: true,
                        color_gain: {r: 8.0, g: 8.0, b: 8.0}
                    }],
                [RenderOutput.GBufferColor,
                    {
                        flip: false,
                        color_gain: {r: 1.0, g: 1.0, b: 1.0}
                    }],
                [RenderOutput.GBufferNormal, 
                    {
                        flip: false,
                        color_gain: {r: 1.0, g: 1.0, b: 1.0}
                    }],
            ]),
            currentOutputTextureSettings: {
                flip: false,
                color_gain: {
                    r: 1.0, g: 1.0, b: 1.0
                }
            },
            orbit: {
                timeHours: 5.5, 
                timeSpeedupFactor: 1000.0,
                paused: false,
                reversed: false,
                inclinationRadians: Math.PI / 2,
                sunsetAzimuthRadians: 0.0,
            }
        };

        if (this.settings.outputTextureSettings.has(this.settings.outputTexture)) {
            const newSettings = this.settings.outputTextureSettings.get(this.settings.outputTexture)!;
            console.log(newSettings);
            this.settings.currentOutputTextureSettings.flip = newSettings.flip;
            this.settings.currentOutputTextureSettings.color_gain.r = newSettings.color_gain.r;
            this.settings.currentOutputTextureSettings.color_gain.g = newSettings.color_gain.g;
            this.settings.currentOutputTextureSettings.color_gain.b = newSettings.color_gain.b;
        }

        this.deltaTimeRecord = {
            milliseconds: new Array<number>(100).fill(0.0),
            count: 0,
            index: 0,
            runningSum: 0.0,
            averageFPS: 0.0,
        };
        this.dummyFrameCounter = 10.0;

        this.cameraUBO = new CameraUBO(device);
        this.timeUBO = new TimeUBO(device);

        this.celestialLightUBO = new CelestialLightUBO(device);

        this.gbuffer = CreateGBuffer(device, {width: 1, height: 1});

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

        this.heightmapPassResources = CreateHeightmapPassResources(
            this.device, this.gbuffer.writeGroupLayout, this.cameraUBO, this.timeUBO
        );

        this.fullscreenQuadPassResources = CreateFullscreenQuadPassResources(
            this.device, 
            new Map<RenderOutput, {view: GPUTextureView, defaultUBO: FullscreenQuadUBOData}>([
                [RenderOutput.TransmittanceLUT, 
                    { 
                        view: this.transmittanceLUTPassResources.view, 
                        defaultUBO: {vertex_scale: vec4.create(1.0,1.0,1.0,1.0), color_gain: vec4.create(1.0,1.0,1.0,1.0) } 
                    }], 
                [RenderOutput.MultiscatterLUT, 
                    { 
                        view: this.multiscatterLUTPassResources.view, 
                        defaultUBO: {vertex_scale: vec4.create(1.0,1.0,1.0,1.0), color_gain: vec4.create(15.0,15.0,15.0,15.0) }
                    }], 
                [RenderOutput.SkyviewLUT, 
                    { 
                        view: this.skyviewLUTPassResources.view, 
                        defaultUBO: {vertex_scale: vec4.create(1.0,-1.0,1.0,1.0), color_gain: vec4.create(8.0,8.0,8.0,8.0) }
                    }],
                [RenderOutput.GBufferColor,
                    {
                        view: this.gbuffer.colorWithDepthInAlphaView,
                        defaultUBO: {vertex_scale: vec4.create(1.0,1.0,1.0,1.0), color_gain: vec4.create(1.0,1.0,1.0,1.0)}
                    }],
                [RenderOutput.GBufferNormal,
                    {
                        view: this.gbuffer.normalView,
                        defaultUBO: {vertex_scale: vec4.create(1.0,1.0,1.0,1.0), color_gain: vec4.create(1.0,1.0,1.0,1.0)}
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

        this.atmosphereCameraGroup1 = device.createBindGroup({
            layout: atmosphereCameraLayouts[1],
            entries: [
                {
                    binding: 0,
                    resource: {buffer: this.cameraUBO.buffer},
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
        passEncoder.dispatchWorkgroups(
            Math.ceil(transmittanceLUTDimensions.width / 16), 
            Math.ceil(transmittanceLUTDimensions.height / 16),
        );
        passEncoder.end();

        passEncoder = commandEncoder.beginComputePass();
        passEncoder.setPipeline(this.multiscatterLUTPassResources.pipeline);
        passEncoder.setBindGroup(0, this.multiscatterLUTPassResources.group0);
        passEncoder.dispatchWorkgroups(
            Math.ceil(multiscatterLUTDimensions.width / 16), 
            Math.ceil(multiscatterLUTDimensions.height / 16),
        ); 
        passEncoder.end();

        device.queue.submit([commandEncoder.finish()]);
    }

    updateOrbit(deltaTimeMilliseconds: number)
    {
        const orbit = this.settings.orbit;

        if(!this.settings.orbit.paused)
        {
            const HOURS_TO_MILLISECONDS = 60.0 * 60.0 * 1000.0;
            orbit.timeHours += (orbit.reversed ? -1.0 : 1.0) 
                * orbit.timeSpeedupFactor 
                * deltaTimeMilliseconds 
                / HOURS_TO_MILLISECONDS;
            orbit.timeHours = orbit.timeHours - Math.floor(orbit.timeHours / 24.0) * 24.0;
        }

        // offset the time so that the app starts during the day
        const SUN_ROTATION_RAD_PER_HOUR = (2.0 * Math.PI) / 24.0;
        const SUN_ANOMALY = (12.0 - orbit.timeHours) * SUN_ROTATION_RAD_PER_HOUR;

        const sunsetDirection = vec3.create(
            -Math.sin(orbit.sunsetAzimuthRadians), 
            0.0, 
            Math.cos(orbit.sunsetAzimuthRadians)
        );
        const noonDirection = vec3.create(
            Math.cos(orbit.sunsetAzimuthRadians) * Math.cos(orbit.inclinationRadians),
            Math.sin(orbit.inclinationRadians),
            Math.sin(orbit.sunsetAzimuthRadians) * Math.cos(orbit.inclinationRadians)
        );
        const sunDirection = vec3.add(
            vec3.scale(sunsetDirection, Math.sin(SUN_ANOMALY)), 
            vec3.scale(noonDirection, Math.cos(SUN_ANOMALY))
        );
        vec3.scale(sunDirection, -1.0, this.celestialLightUBO.data.light.forward);

        this.celestialLightUBO.writeToGPU(this.device);   
    }

    updateFPSValues(deltaTimeMilliseconds: number)
    {
        const record = this.deltaTimeRecord;
        if(record.index >= record.milliseconds.length)
        {
            record.index = 0;
        }
        if(record.index < record.count)
        {
            record.runningSum -= 1000.0 / record.milliseconds[record.index];
        }
        record.milliseconds[record.index] = deltaTimeMilliseconds;
        record.runningSum += 1000.0 / deltaTimeMilliseconds;
        record.count = Math.min(record.milliseconds.length, record.count + 1);
        record.averageFPS = record.runningSum / record.count;
        record.index += 1;
    }

    updateCamera(aspectRatio: number)
    {
        const fov = 60 * Math.PI / 180
        const near = 0.1;
        const far = 1000;
        const perspective = mat4.perspective(fov, aspectRatio, near, far);
        
        const camera_pos = [0, 10, 0];
        const view = mat4.lookAt(camera_pos, [0, 20, 100], [0, 1, 0]);

        Object.assign(this.cameraUBO.data, {
            inv_proj: mat4.inverse(perspective),
            inv_view: mat4.inverse(view),
            position: vec4.create(...camera_pos),
        });
        this.cameraUBO.writeToGPU(this.device);
    }

    updateTime(deltaTimeMilliseconds: number)
    {
        this.timeUBO.data.time_seconds += deltaTimeMilliseconds / 1000.0;
        this.timeUBO.writeToGPU(this.device);
    }

    draw(
        presentTexture: GPUTexture, 
        aspectRatio: number, 
        _timeMilliseconds: number,
        deltaTimeMilliseconds: number): void
    {
        // Workaround for firefox stalling
        if(this.dummyFrameCounter > 0)
        {
            this.dummyFrameCounter -= 1;
            return;
        }
        const presentView = presentTexture.createView();
        
        this.updateCamera(aspectRatio);
        this.updateTime(deltaTimeMilliseconds);
        this.updateOrbit(deltaTimeMilliseconds);
        this.updateFPSValues(deltaTimeMilliseconds);

        const clearColor = {r: 1.0, g: 0.0, b: 0.0, a: 0.0};

        const commandEncoder = this.device.createCommandEncoder();

        const heightmapPassEncoder = commandEncoder.beginComputePass();
        heightmapPassEncoder.setPipeline(this.heightmapPassResources.pipeline);
        heightmapPassEncoder.setBindGroup(0, this.gbuffer.writeGroup);
        heightmapPassEncoder.setBindGroup(1, this.heightmapPassResources.group1);
        heightmapPassEncoder.dispatchWorkgroups(
            Math.ceil(this.gbuffer.colorWithDepthInAlpha.width / 16), 
            Math.ceil(this.gbuffer.colorWithDepthInAlpha.height / 16),
        ); 
        heightmapPassEncoder.end();

        const skyviewLUTPassEncoder = commandEncoder.beginComputePass();
        skyviewLUTPassEncoder.setPipeline(this.skyviewLUTPassResources.pipeline);
        skyviewLUTPassEncoder.setBindGroup(0, this.skyviewLUTPassResources.group0);
        skyviewLUTPassEncoder.setBindGroup(1, this.skyviewLUTPassResources.group1);

        skyviewLUTPassEncoder.dispatchWorkgroups(
            Math.ceil(skyviewLUTDimensions.width / 16), 
            Math.ceil(skyviewLUTDimensions.height / 32),
        );
        skyviewLUTPassEncoder.end();

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
            const settings = this.settings.currentOutputTextureSettings;
            const uboData = this.fullscreenQuadPassResources.uboDataByOutputTexture.get(this.settings.outputTexture)!;
            uboData.color_gain = vec4.create(settings.color_gain.r,settings.color_gain.g,settings.color_gain.b,1.0);
            uboData.vertex_scale = vec4.create(1.0, settings.flip ? -1.0 : 1.0, 1.0, 1.0);
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
                    color_gain: vec4.create(1.0,1.0,1.0,1.0),
                    vertex_scale: vec4.create(1.0,1.0,1.0,1.0),
                };
            }
            this.fullscreenQuadPassResources.ubo.writeToGPU(this.device);
            fullscreenPassEncoder.setBindGroup(1, this.fullscreenQuadPassResources.group1);
            fullscreenPassEncoder.drawIndexed(6, 1, 0, 0, 0);
        }
        
        fullscreenPassEncoder.end();
    
        this.device.queue.submit([commandEncoder.finish()]);
    }

    handleResize(newWidth: number, newHeight: number)
    {
        this.gbuffer = CreateGBuffer(this.device, {width: newWidth, height: newHeight}, this.gbuffer);
        this.fullscreenQuadPassResources.group0ByOutputTexture.set(
            RenderOutput.GBufferColor, 
            this.device.createBindGroup({
                layout: this.fullscreenQuadPassResources.group0Layout,
                entries: [
                    {
                        binding: 0,
                        resource: this.gbuffer.colorWithDepthInAlphaView
                    },
                    {
                        binding: 1,
                        resource: this.fullscreenQuadPassResources.group0Sampler,
                    }  
                ],
                label: 'Fullscreen Quad Pass Bing Group 0 GBuffer Color Resized'
            })
        );
        this.fullscreenQuadPassResources.group0ByOutputTexture.set(
            RenderOutput.GBufferNormal, 
            this.device.createBindGroup({
                layout: this.fullscreenQuadPassResources.group0Layout,
                entries: [
                    {
                        binding: 0,
                        resource: this.gbuffer.normalView
                    },
                    {
                        binding: 1,
                        resource: this.fullscreenQuadPassResources.group0Sampler,
                    }  
                ],
                label: 'Fullscreen Quad Pass Bing Group 0 GBuffer Normal Resized'
            })
        );
    }
};

export const SkySeaAppConstructor: RendererAppConstructor = (device, _supportedFeatures, presentFormat, time) => {
    return new SkySeaApp(device, presentFormat, time);
};