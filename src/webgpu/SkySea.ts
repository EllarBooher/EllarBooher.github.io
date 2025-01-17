import TransmittanceLUTPak from '../shaders/transmittance_LUT.wgsl';
import MultiscatterLUTPak from '../shaders/multiscatter_LUT.wgsl';
import SkyViewLUTPak from '../shaders/skyview_LUT.wgsl';
import AtmosphereCameraPak from '../shaders/atmosphere_camera.wgsl';
import { Controller as LilController, GUI as LilGUI } from "lil-gui";
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

const ATMOSPHERE_CAMERA_OUTPUT_TEXTURE_FORMAT: GPUTextureFormat = 'rgba32float';

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
    });

    return {
        group1,
        pipeline,
    };
}

interface AtmosphereCameraPassResoruces
{
    group0Layout: GPUBindGroupLayout;
    group1Layout: GPUBindGroupLayout;

    group0: GPUBindGroup;
    group1: GPUBindGroup;

    outputColor: GPUTexture;
    outputColorView: GPUTextureView;

    pipeline: GPUComputePipeline;
}

function CreateAtmosphereCameraPassResources(
    device: GPUDevice,
    gbufferReadGrouplayout: GPUBindGroupLayout,
    transmittanceLUTView: GPUTextureView,
    multiscatterLUTView: GPUTextureView,
    skyviewLUTView: GPUTextureView,
    cameraUBO: CameraUBO,
    lightUBO: CelestialLightUBO,
)
{
    const group0Layout = device.createBindGroupLayout({
        entries: [
            { // output texture
                binding: 0,
                visibility: GPUShaderStage.COMPUTE,
                storageTexture: {format: ATMOSPHERE_CAMERA_OUTPUT_TEXTURE_FORMAT}
            },
            { // sampler for the LUTs
                binding: 1,
                visibility: GPUShaderStage.COMPUTE,
                sampler: {type: 'filtering'}
            },
            { // transmittance
                binding: 2,
                visibility: GPUShaderStage.COMPUTE,
                texture: {
                    sampleType: TRANSMITTANCE_LUT_SAMPLE_TYPE,
                    viewDimension: "2d"
                }
            },
            { // multiscatter
                binding: 3,
                visibility: GPUShaderStage.COMPUTE,
                texture: {
                    sampleType: MULTISCATTER_LUT_SAMPLE_TYPE,
                    viewDimension: "2d"
                }
            },
            { // skyview
                binding: 4,
                visibility: GPUShaderStage.COMPUTE,
                texture: {
                    sampleType: SKYVIEW_LUT_SAMPLE_TYPE,
                    viewDimension: "2d"
                }
            },
        ], label: "Atmosphere sampler/LUT/UBO Group"
    });
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
        ], label: "Atmosphere Camera Group 1"
    });

    const atmosphereCameraLayouts = [
        group0Layout,
        group1Layout,
        gbufferReadGrouplayout
    ];

    const outputColor = device.createTexture({
        format: ATMOSPHERE_CAMERA_OUTPUT_TEXTURE_FORMAT,
        size: {width: 1, height: 1},
        usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING
    });
    const outputColorView = outputColor.createView();

    const group0 = device.createBindGroup({
        layout: group0Layout,
        entries: [
            {
                binding: 0,
                resource: outputColorView,
            },
            {
                binding: 1,
                resource: device.createSampler({
                    magFilter: 'linear',
                    minFilter: 'linear',
                }),
            },
            {
                binding: 2,
                resource: transmittanceLUTView,
            },
            {
                binding: 3,
                resource: multiscatterLUTView,
            },
            {
                binding: 4,
                resource: skyviewLUTView,
            },
        ],
        label: "Atmosphere Camera Group 0"
    });

    const group1 = device.createBindGroup({
        layout: atmosphereCameraLayouts[1],
        entries: [
            {
                binding: 0,
                resource: {buffer: cameraUBO.buffer},
            },
            {
                binding: 1,
                resource: {buffer: lightUBO.buffer},
            },
        ],
        label: "Atmosphere Camera Group 1"
    })

    const atmosphereCameraShaderModule = device.createShaderModule({
        code: AtmosphereCameraPak,
        label: "Atmosphere Camera",
    });
    const pipeline = device.createComputePipeline({
        compute: {
            module: atmosphereCameraShaderModule,
            entryPoint: "renderCompositedAtmosphere",
        },
        layout: device.createPipelineLayout({
            bindGroupLayouts: atmosphereCameraLayouts,
        }),
        label: "Atmosphere Camera"
    })

    return {
        group0Layout,
        group1Layout,
        group0,
        group1,
        outputColor,
        outputColorView,
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

const RENDER_SCALES = [0.25, 0.3333, 0.5, 0.75, 1.0, 1.5];

enum FrametimeCategory
{
    DrawToDraw,
    SkyviewLUT,
    Heightmap,
    AtmosphereCamera,
    FullscreenQuad,
}

class ArithmeticSumArray
{
    private values: number[];
    private sum = 0.0;
    private average_ = 0.0;
    // Count how many values are valid. Starts at zero, goes to values.length, and stays there. Necessary to keep runningSum valid before the buffer can be filled once.
    private count = 0;
    // Index into values of next value to write
    private index = 0;

    constructor(capacity: number)
    {
        this.values = new Array<number>(capacity).fill(0.0);
    }

    get average() 
    {
        return this.average_;
    }

    public push(value: number)
    {
        if(this.index >= this.values.length)
        {
            this.index = 0;
        }
        if(this.index < this.count)
        {
            this.sum -= this.values[this.index];
        }
        this.values[this.index] = value;
        this.sum += value;
        this.count = Math.min(this.values.length, this.count + 1);
        this.average_ = this.sum / this.count;
        this.index += 1;
    }
}

class SkySeaApp implements RendererApp {
    transmittanceLUTPassResources: TransmittanceLUTPassResources;
    multiscatterLUTPassResources: MultiscatterLUTPassResources;
    skyviewLUTPassResources: SkyViewLUTPassResources;
    heightmapPassResources: HeightmapPassResources;
    atmosphereCameraPassResources: AtmosphereCameraPassResoruces;
    fullscreenQuadPassResources: FullscreenQuadPassResources;

    gbuffer: GBuffer;
    scaledSize: {width: number, height: number};
    rawSize: {width: number, height: number};

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
        },
        renderScale: number,
    };

    uiReadonly: {
        averageFPS: number;
        frametimeControllers: Map<FrametimeCategory, LilController>;
    };

    celestialLightUBO: CelestialLightUBO;
    cameraUBO: CameraUBO;
    timeUBO: TimeUBO;
    
    fullscreenQuadIndexBuffer: GPUBuffer;

    device: GPUDevice;
    presentFormat: GPUTextureFormat;
    quit = false;

    // undefined when 'timestamp-query' feature is disabled
    frametimeQuery: {
        querySet: GPUQuerySet;
        // We cannot read directly from the buffer that WebGPU writes the timestamps to
        // So we use a copy operation, then an async mapping.
        // Since we cannot map until unmapping at the end of this async operation, we set a flag to avoid that until then.
        writeBuffer: GPUBuffer;
        readBuffer: GPUBuffer;
        mappingLock: boolean;
    } | undefined;
    frametimeAverages: Map<FrametimeCategory, ArithmeticSumArray>;

    startTime: number;
    dummyFrameCounter: number;
    probationFrameCounter: number;
    targetFPS = 0.0;

    setupUI(gui: LilGUI)
    {
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
        gui.add(this.settings, 'renderScale', RENDER_SCALES).name('Render Resolution Scale').decimals(1).onFinishChange((_v: number) => {
            this.handleResize(this.rawSize.width, this.rawSize.height);
        }).listen();
        gui.add(this.uiReadonly, 'averageFPS').decimals(1).disable().name('Average FPS').listen();
        
        gui.add(this.settings.orbit, 'timeHours').min(0.0).max(24.0).name('Time in Hours').listen();
        gui.add(this.settings.orbit, 'timeSpeedupFactor').min(1.0).max(50000).step(1.0).name('Time Multiplier');
        gui.add(this.settings.orbit, 'paused').name('Pause Sun');

        gui.add({ fn: () => { this.settings.orbit.timeHours = this.settings.orbit.reversed ? (18.0 + 0.5) : (6.0 - 0.5)}}, 'fn').name('Skip to Sunrise');
        gui.add({ fn: () => { this.settings.orbit.timeHours = this.settings.orbit.reversed ? (6.0 + 0.5) : (18.0 - 0.5)}}, 'fn').name('Skip to Sunset');
        
        gui.add(this.settings.orbit, 'reversed').name('Reverse Sun');
        gui.add(this.settings.orbit, 'sunsetAzimuthRadians').name("Sun Azimuth").min(0.0).max(2.0 * Math.PI);
        gui.add(this.settings.orbit, 'inclinationRadians').name("Sun Inclination").min(0.0).max(Math.PI);

        const outputTextureFolder = gui.addFolder('Output Transform').close();
        if(!this.fullscreenQuadPassResources.uboDataByOutputTexture.has(this.settings.outputTexture))
        {
            outputTextureFolder.hide();
        }
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

        const performanceFolder = gui.addFolder('Performance').close();
        this.frametimeAverages.forEach((_value, category) => {
            this.uiReadonly.frametimeControllers.set(category, performanceFolder.add({value: 0}, 'value').name(`${FrametimeCategory[category]} (ms)`).decimals(6).disable());
        })
    }

    constructor(device: GPUDevice, presentFormat: GPUTextureFormat, time: number)
    {
        this.device = device;
        this.presentFormat = presentFormat;
        this.startTime = time;
        this.settings = {
            outputTexture: RenderOutput.Scene,
            outputTextureSettings: new Map<RenderOutput, OutputTexturePostProcessSettings>([
                [RenderOutput.Scene,
                    {
                        flip: false,
                        color_gain: {r: 1.0, g: 1.0, b: 1.0}
                    }],
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
                timeSpeedupFactor: 400.0,
                paused: false,
                reversed: false,
                inclinationRadians: Math.PI / 2,
                sunsetAzimuthRadians: 0.0,
            },
            renderScale: 1.5,
        };
        this.uiReadonly = {
            averageFPS: 0.0,
            frametimeControllers: new Map(),
        };
        this.scaledSize = {width: 1.0, height: 1.0};
        this.rawSize = {width: 1.0, height: 1.0};

        if (this.settings.outputTextureSettings.has(this.settings.outputTexture)) {
            const newSettings = this.settings.outputTextureSettings.get(this.settings.outputTexture)!;
            this.settings.currentOutputTextureSettings.flip = newSettings.flip;
            this.settings.currentOutputTextureSettings.color_gain.r = newSettings.color_gain.r;
            this.settings.currentOutputTextureSettings.color_gain.g = newSettings.color_gain.g;
            this.settings.currentOutputTextureSettings.color_gain.b = newSettings.color_gain.b;
        }

        this.frametimeAverages = new Map();
        if(device.features.has('timestamp-query'))
        {
            // Space for start & end for each step
            // webgpu timestamps are 64 bit nanoseconds
            const BYTES_PER_TIMESTAMP_SAMPLE = 8;
            const numberOfTimestamps = 2 * Object.keys(FrametimeCategory).map(v => Number(v)).filter(isNaN).length;
            this.frametimeQuery = {
                mappingLock: false,
                querySet: device.createQuerySet({type: 'timestamp', count: numberOfTimestamps}),
                writeBuffer: device.createBuffer({size: BYTES_PER_TIMESTAMP_SAMPLE * numberOfTimestamps, usage: GPUBufferUsage.COPY_SRC | GPUBufferUsage.QUERY_RESOLVE}),
                readBuffer: device.createBuffer({size: BYTES_PER_TIMESTAMP_SAMPLE * numberOfTimestamps, usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ}),
            };
            Object.keys(FrametimeCategory).map(v => Number(v)).filter(v => !isNaN(v)).forEach(index => {
                const category = index as FrametimeCategory;
                this.frametimeAverages.set(category, new ArithmeticSumArray(400));
                Object.assign(this.uiReadonly, String(category), 0.0);
            });
        }
        else
        {
            console.warn("WebGPU feature 'timestamp-query' is not supported. Continuing, but without performance information about specific stages.");
            this.frametimeAverages.set(FrametimeCategory.DrawToDraw, new ArithmeticSumArray(400));
        }

        this.dummyFrameCounter = 10.0;
        this.probationFrameCounter = 100.0;

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

        const fullscreenQuadIndices = new Uint32Array([
            0, 1, 2,
            0, 2, 3,
        ]);
        this.fullscreenQuadIndexBuffer = device.createBuffer({size: fullscreenQuadIndices.byteLength, usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST});
        device.queue.writeBuffer(this.fullscreenQuadIndexBuffer, 0, fullscreenQuadIndices, 0, fullscreenQuadIndices.length);

        this.atmosphereCameraPassResources = CreateAtmosphereCameraPassResources(
            this.device,
            this.gbuffer.readGroupLayout,
            this.transmittanceLUTPassResources.view,
            this.multiscatterLUTPassResources.view,
            this.skyviewLUTPassResources.view,
            this.cameraUBO,
            this.celestialLightUBO,
        );

        this.fullscreenQuadPassResources = CreateFullscreenQuadPassResources(
            this.device, 
            new Map<RenderOutput, {view: GPUTextureView, defaultUBO: FullscreenQuadUBOData}>([
                [RenderOutput.Scene,
                    {
                        view: this.atmosphereCameraPassResources.outputColorView,
                        defaultUBO: {vertex_scale: vec4.create(1.0,1.0,1.0,1.0), color_gain: vec4.create(1.0,1.0,1.01,.0) }
                    }],
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
        if(deltaTimeMilliseconds > 0.01)
        {
            this.frametimeAverages.get(FrametimeCategory.DrawToDraw)?.push(deltaTimeMilliseconds);
            this.uiReadonly.averageFPS = 1000.0 / (this.frametimeAverages.get(FrametimeCategory.DrawToDraw)?.average ?? 1000.0);
            this.uiReadonly.frametimeControllers.get(FrametimeCategory.DrawToDraw)?.setValue(this.frametimeAverages.get(FrametimeCategory.DrawToDraw)?.average ?? -1.0);
        }
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
        this.timeUBO.data.time_seconds = Math.min(this.timeUBO.data.time_seconds, 60.0);
        this.timeUBO.data.time_seconds += deltaTimeMilliseconds / 1000.0;
        if(this.timeUBO.data.time_seconds > 400.0)
        {
            this.timeUBO.data.time_seconds = 0.0;
        }
        this.timeUBO.writeToGPU(this.device);
    }

    draw(
        presentTexture: GPUTexture, 
        aspectRatio: number, 
        _timeMilliseconds: number,
        deltaTimeMilliseconds: number): void
    {
        // Workaround for firefox stalling causing time issues

        if(this.dummyFrameCounter > 0)
        {
            this.dummyFrameCounter -= 1;
            return;
        }
        const presentView = presentTexture.createView();

        this.updateFPSValues(deltaTimeMilliseconds);

        // Run some dummy frames to estimate monitor refresh and guess the best render scale to hit it
        if(this.probationFrameCounter > 49.0)
        {
            this.probationFrameCounter -= 1;

            if(this.probationFrameCounter < 50.0)
            {
                console.log(`Average FPS without load is ${this.uiReadonly.averageFPS}`);
                this.targetFPS = this.uiReadonly.averageFPS;
            }
            return;
        }
        if(this.probationFrameCounter > 0.0)
        {
            this.probationFrameCounter -= 1;
            if(this.probationFrameCounter < 1.0)
            {
                console.log(`Average FPS with load is ${this.uiReadonly.averageFPS}`);
                const exactScale = this.uiReadonly.averageFPS / (this.targetFPS);
                this.settings.renderScale = RENDER_SCALES[0];
                RENDER_SCALES.forEach(scale => {
                    if(Math.abs(scale - exactScale) < Math.abs(this.settings.renderScale - exactScale))
                        {
                            this.settings.renderScale = scale;
                        }
                    });
                this.handleResize(this.rawSize.width, this.rawSize.height);
            }
        }
        
        this.updateCamera(aspectRatio);
        this.updateTime(deltaTimeMilliseconds);
        this.updateOrbit(deltaTimeMilliseconds);

        const clearColor = {r: 0.0, g: 0.0, b: 0.0, a: 1.0};

        const commandEncoder = this.device.createCommandEncoder({label: "Main"});

        let timestampQueryIndex = 0;
        const timestampIndexMapping = new Map<FrametimeCategory, number>();
        timestampIndexMapping.set(FrametimeCategory.Heightmap, timestampQueryIndex);
        const heightmapPassEncoder = commandEncoder.beginComputePass({timestampWrites: this.frametimeQuery !== undefined ? {querySet: this.frametimeQuery.querySet, beginningOfPassWriteIndex: timestampQueryIndex++, endOfPassWriteIndex: timestampQueryIndex++} : undefined, label: "Heightmap"});
        heightmapPassEncoder.setPipeline(this.heightmapPassResources.pipeline);
        heightmapPassEncoder.setBindGroup(0, this.gbuffer.writeGroup);
        heightmapPassEncoder.setBindGroup(1, this.heightmapPassResources.group1);
        heightmapPassEncoder.dispatchWorkgroups(
            Math.ceil(this.gbuffer.colorWithDepthInAlpha.width / 16), 
            Math.ceil(this.gbuffer.colorWithDepthInAlpha.height / 16),
        ); 
        heightmapPassEncoder.end();

        timestampIndexMapping.set(FrametimeCategory.SkyviewLUT, timestampQueryIndex);
        const skyviewLUTPassEncoder = commandEncoder.beginComputePass({timestampWrites: this.frametimeQuery !== undefined ? {querySet: this.frametimeQuery.querySet, beginningOfPassWriteIndex: timestampQueryIndex++, endOfPassWriteIndex: timestampQueryIndex++} : undefined, label: "Skyview LUT"});
        skyviewLUTPassEncoder.setPipeline(this.skyviewLUTPassResources.pipeline);
        skyviewLUTPassEncoder.setBindGroup(0, this.skyviewLUTPassResources.group0);
        skyviewLUTPassEncoder.setBindGroup(1, this.skyviewLUTPassResources.group1);
        skyviewLUTPassEncoder.dispatchWorkgroups(
            Math.ceil(skyviewLUTDimensions.width / 16),
            // divide by 31, since we can skip most of the lower half of the LUT 
            Math.ceil(skyviewLUTDimensions.height / 31),
        );
        skyviewLUTPassEncoder.end();

        timestampIndexMapping.set(FrametimeCategory.AtmosphereCamera, timestampQueryIndex);
        const atmosphereCameraPassEncoder = commandEncoder.beginComputePass({timestampWrites: this.frametimeQuery !== undefined ? {querySet: this.frametimeQuery.querySet, beginningOfPassWriteIndex: timestampQueryIndex++, endOfPassWriteIndex: timestampQueryIndex++} : undefined, label: "Atmosphere Camera"});
        atmosphereCameraPassEncoder.setPipeline(this.atmosphereCameraPassResources.pipeline);
        atmosphereCameraPassEncoder.setBindGroup(0, this.atmosphereCameraPassResources.group0);
        atmosphereCameraPassEncoder.setBindGroup(1, this.atmosphereCameraPassResources.group1);
        atmosphereCameraPassEncoder.setBindGroup(2, this.gbuffer.readGroup);
        atmosphereCameraPassEncoder.dispatchWorkgroups(
            Math.ceil(this.atmosphereCameraPassResources.outputColor.width / 16),
            Math.ceil(this.atmosphereCameraPassResources.outputColor.height / 16),
        );
        atmosphereCameraPassEncoder.end();

        timestampIndexMapping.set(FrametimeCategory.FullscreenQuad, timestampQueryIndex);
        const fullscreenPassEncoder = commandEncoder.beginRenderPass({
            colorAttachments: [
                { 
                    clearValue: clearColor, 
                    loadOp: "clear", 
                    storeOp: "store", 
                    view: presentView
                },
            ],
            timestampWrites: this.frametimeQuery !== undefined ? {querySet: this.frametimeQuery.querySet, beginningOfPassWriteIndex: timestampQueryIndex++, endOfPassWriteIndex: timestampQueryIndex++} : undefined,
            label: "Fullscreen Pass"
        });

        if(this.fullscreenQuadPassResources.uboDataByOutputTexture.has(this.settings.outputTexture))
        {
            const settings = this.settings.currentOutputTextureSettings;
            const uboData = this.fullscreenQuadPassResources.uboDataByOutputTexture.get(this.settings.outputTexture)!;
            uboData.color_gain = vec4.create(settings.color_gain.r,settings.color_gain.g,settings.color_gain.b,1.0);
            uboData.vertex_scale = vec4.create(1.0, settings.flip ? -1.0 : 1.0, 1.0, 1.0);
        }

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

        if(this.probationFrameCounter < 1.0)
        {
            fullscreenPassEncoder.drawIndexed(6, 1, 0, 0, 0);
        }
        
        fullscreenPassEncoder.end();

        if(this.frametimeQuery != undefined && !this.frametimeQuery.mappingLock)
        {
            commandEncoder.resolveQuerySet(this.frametimeQuery.querySet, 0, 2 * timestampIndexMapping.size, this.frametimeQuery.writeBuffer, 0);
            commandEncoder.copyBufferToBuffer(this.frametimeQuery.writeBuffer, 0, this.frametimeQuery.readBuffer, 0, this.frametimeQuery.readBuffer.size);
        }
        
        this.device.queue.submit([commandEncoder.finish()]);
        
        if (this.frametimeQuery !== undefined && !this.frametimeQuery.mappingLock)
        {
            this.frametimeQuery.mappingLock = true;
            this.frametimeQuery.readBuffer.mapAsync(GPUMapMode.READ, 0, this.frametimeQuery.readBuffer.size).then(() => {
                const timestampsView = new BigInt64Array(this.frametimeQuery.readBuffer.getMappedRange(0, this.frametimeQuery.readBuffer.size));
                timestampIndexMapping.forEach((value, key) => {
                    const MS_PER_NS = 1000000;
                    const timeMilliseconds = Number(timestampsView.at(value + 1)! - timestampsView.at(value)!) / MS_PER_NS;
                    this.frametimeAverages.get(key)?.push(timeMilliseconds);
                    this.uiReadonly.frametimeControllers.get(key)?.setValue(this.frametimeAverages.get(key)?.average ?? -1.0);
                });
                this.frametimeQuery.readBuffer.unmap();
                this.frametimeQuery.mappingLock = false;
            }).catch(reason => {
                console.error(`Failed while retrieving frametime values from GPU:`);
                console.error(reason);
            });
        }
    }

    handleResize(newWidth: number, newHeight: number)
    {
        this.scaledSize = {width: newWidth * this.settings.renderScale, height: newHeight * this.settings.renderScale};
        this.rawSize = {width: newWidth, height: newHeight};
        this.gbuffer = CreateGBuffer(this.device, this.scaledSize, this.gbuffer);

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

        this.atmosphereCameraPassResources.outputColor = this.device.createTexture({
            format: ATMOSPHERE_CAMERA_OUTPUT_TEXTURE_FORMAT,
            size: this.scaledSize,
            usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING
        });
        this.atmosphereCameraPassResources.outputColorView = this.atmosphereCameraPassResources.outputColor.createView();

        this.fullscreenQuadPassResources.group0ByOutputTexture.set(
            RenderOutput.Scene, 
            this.device.createBindGroup({
                layout: this.fullscreenQuadPassResources.group0Layout,
                entries: [
                    {
                        binding: 0,
                        resource: this.atmosphereCameraPassResources.outputColorView
                    },
                    {
                        binding: 1,
                        resource: this.fullscreenQuadPassResources.group0Sampler,
                    }  
                ],
                label: 'Fullscreen Quad Pass Bing Group 0 GBuffer Normal Resized'
            })
        );

        this.atmosphereCameraPassResources.group0 = this.device.createBindGroup({
            layout: this.atmosphereCameraPassResources.group0Layout,
            entries: [
                {
                    binding: 0,
                    resource: this.atmosphereCameraPassResources.outputColorView,
                },
                {
                    binding: 1,
                    resource: this.device.createSampler({
                        magFilter: 'linear',
                        minFilter: 'linear',
                    }),
                },
                {
                    binding: 2,
                    resource: this.transmittanceLUTPassResources.view,
                },
                {
                    binding: 3,
                    resource: this.multiscatterLUTPassResources.view,
                },
                {
                    binding: 4,
                    resource: this.skyviewLUTPassResources.view,
                },
            ],
            label: "Atmosphere Camera Group 0"
        });
    }
};

export const SkySeaAppConstructor: RendererAppConstructor = (device, presentFormat, time) => {
    return new SkySeaApp(device, presentFormat, time);
};