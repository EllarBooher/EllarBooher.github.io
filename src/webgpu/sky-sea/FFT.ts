import { UBO } from "./UBO";
import DFFTShaderPak from "../../shaders/sky-sea/fft.wgsl";

class DFFTParametersUBO extends UBO {
	public readonly data: {
		log_2_size: number;
		size: number;
		b_inverse: boolean;
	} = {
		log_2_size: 1,
		size: 2,
		b_inverse: false,
	};

	constructor(device: GPUDevice) {
		const FLOAT_COUNT = 3;
		super(device, FLOAT_COUNT, "DFFT Parameters UBO");
	}

	protected override packed(): ArrayBuffer {
		const buffer = new ArrayBuffer(this.buffer.size);
		const view = new DataView(buffer);

		view.setUint32(0, this.data.log_2_size, true);
		view.setUint32(4, this.data.size, true);
		view.setFloat32(8, this.data.b_inverse ? 1.0 : 0.0, true);

		return buffer;
	}
}

export class DFFTResources {
	private parametersUBO: DFFTParametersUBO;
	private intermediateDFTs: GPUBuffer;
	// Work with buffers instead of textures, since webgpu is restrictive on which storage textures can be read_write
	// A possible workaround is using two functions for the perform kernel, identical up to swapping source/destination buffer. This would save copying during IO, but might not be necessary.
	private complexBuffer0: GPUBuffer;
	private complexBuffer1: GPUBuffer;
	private stepCounterBuffer: GPUBuffer;

	/*
	 * @group(0) @binding(0) var<uniform> u_parameters: DFFTParameters;
	 * @group(0) @binding(1) var<storage, write> out_intermediate_dfts_log2n_by_n: array<TwoPointDFT>;
	 */
	private intermediateDFTsBindGroup: GPUBindGroup;
	private intermediateDFTsKernel: GPUComputePipeline;

	/*
	 * @group(0) @binding(0) var<uniform> u_parameters: DFFTParameters;
	 * @group(0) @binding(1) var<storage, read> intermediate_dfts_log2n_by_n: array<TwoPointDFT>;
	 * @group(0) @binding(2) var<storage, read_write> buffer_0: array<vec2<f32>>;
	 * @group(0) @binding(3) var<storage, read_write> buffer_1: array<vec2<f32>>;
	 * @group(0) @binding(4) var<uniform> step_counter: u32;
	 */
	private performBindGroup: GPUBindGroup;
	private performKernel: GPUComputePipeline;
	private performSwapEvenSignsKernel: GPUComputePipeline;

	/*
	 * @group(0) @binding(0) var<storage, read_write> out_step_counter: u32;
	 */
	private stepCounterBindGroup: GPUBindGroup;
	private incrementStepCounterKernel: GPUComputePipeline;
	private resetStepCounterKernel: GPUComputePipeline;

	/**
	 * Creates a collection of pipelines capable of perform a Discrete Fourier Transform on a 2D square grid whose side length is a power of 2.
	 * @param {GPUDevice} device
	 * @param {number} log2GridSize - The exponent used to calculate the grid size. Must be greater than 4.
	 * @memberof DFFTResources
	 */
	constructor(device: GPUDevice, log2GridSize: number) {
		if (log2GridSize < 5) {
			throw new RangeError("gridSizeExponent must be greater than 4.");
		}
		const gridSize = Math.pow(2, log2GridSize);

		this.parametersUBO = new DFFTParametersUBO(device);
		this.parametersUBO.data.log_2_size = log2GridSize;
		this.parametersUBO.data.size = gridSize;
		this.parametersUBO.data.b_inverse = false;

		this.parametersUBO.writeToGPU(device.queue);

		const TWO_POINT_DFT_SIZE_BYTES = 16;
		this.intermediateDFTs = device.createBuffer({
			label: "DFFT Precompute Stage Steps",
			size: log2GridSize * gridSize * TWO_POINT_DFT_SIZE_BYTES,
			usage: GPUBufferUsage.STORAGE,
		});

		const shaderModule = device.createShaderModule({
			label: "DFFT Precompute Stage",
			code: DFFTShaderPak,
		});

		const precomputeBindGroup0Layout = device.createBindGroupLayout({
			label: "DFFT Precompute Stage Group 0",
			entries: [
				{
					binding: 0,
					visibility: GPUShaderStage.COMPUTE,
					buffer: { type: "uniform" },
				},
				{
					binding: 1,
					visibility: GPUShaderStage.COMPUTE,
					buffer: { type: "storage" },
				},
			],
		});

		this.intermediateDFTsBindGroup = device.createBindGroup({
			label: "DFFT Precompute Stage Group 0",
			layout: precomputeBindGroup0Layout,
			entries: [
				{
					binding: 0,
					resource: {
						buffer: this.parametersUBO.buffer,
					},
				},
				{
					binding: 1,
					resource: { buffer: this.intermediateDFTs },
				},
			],
		});

		const precomputePipelineLayout = device.createPipelineLayout({
			label: "DFFT Precompute Steps Kernel",
			bindGroupLayouts: [precomputeBindGroup0Layout],
		});

		this.intermediateDFTsKernel = device.createComputePipeline({
			label: "DFFT Precompute Stage",
			compute: {
				module: shaderModule,
				entryPoint: "precomputeDFFTInstructions",
			},
			layout: precomputePipelineLayout,
		});

		const performBindGroup0Layout = device.createBindGroupLayout({
			label: "DFFT Perform Group 0",
			entries: [
				{
					binding: 0,
					visibility: GPUShaderStage.COMPUTE,
					buffer: { type: "uniform" },
				},
				{
					binding: 1,
					visibility: GPUShaderStage.COMPUTE,
					buffer: { type: "read-only-storage" },
				},
				{
					binding: 2,
					visibility: GPUShaderStage.COMPUTE,
					buffer: { type: "storage" },
				},
				{
					binding: 3,
					visibility: GPUShaderStage.COMPUTE,
					buffer: { type: "storage" },
				},
				{
					binding: 4,
					visibility: GPUShaderStage.COMPUTE,
					buffer: { type: "uniform" },
				},
			],
		});

		// We store complex numbers as vec2<f32>
		const BYTES_PER_COMPLEX_BUFFER_ELEMENT = 8;

		this.complexBuffer0 = device.createBuffer({
			label: "DFFT Buffer 0",
			size: gridSize * gridSize * BYTES_PER_COMPLEX_BUFFER_ELEMENT,
			usage:
				GPUBufferUsage.STORAGE |
				GPUBufferUsage.COPY_SRC |
				GPUBufferUsage.COPY_DST,
		});

		this.complexBuffer1 = device.createBuffer({
			label: "DFFT Buffer 1",
			size: this.complexBuffer0.size,
			usage: this.complexBuffer0.usage,
		});

		this.stepCounterBuffer = device.createBuffer({
			label: "DFFT Step Counter",
			size: 4,
			usage:
				GPUBufferUsage.COPY_DST |
				GPUBufferUsage.STORAGE |
				GPUBufferUsage.UNIFORM,
		});
		const stepCounterInitial = new Uint32Array(1);
		stepCounterInitial[0] = 0;
		device.queue.writeBuffer(this.stepCounterBuffer, 0, stepCounterInitial);

		this.performBindGroup = device.createBindGroup({
			label: "DFFT Perform Group 0",
			layout: performBindGroup0Layout,
			entries: [
				{
					binding: 0,
					resource: {
						buffer: this.parametersUBO.buffer,
					},
				},
				{
					binding: 1,
					resource: { buffer: this.intermediateDFTs },
				},
				{
					binding: 2,
					resource: { buffer: this.complexBuffer0 },
				},
				{
					binding: 3,
					resource: { buffer: this.complexBuffer1 },
				},
				{
					binding: 4,
					resource: { buffer: this.stepCounterBuffer },
				},
			],
		});

		const performPipelineLayout = device.createPipelineLayout({
			label: "DFFT Perform",
			bindGroupLayouts: [performBindGroup0Layout],
		});

		this.performKernel = device.createComputePipeline({
			label: "DFFT Perform DFFT Step",
			compute: {
				module: shaderModule,
				entryPoint: "performDFFTStep",
			},
			layout: performPipelineLayout,
		});
		this.performSwapEvenSignsKernel = device.createComputePipeline({
			label: "DFFT Perform Swap Even Signs",
			compute: {
				module: shaderModule,
				entryPoint: "performSwapEvenSigns",
			},
			layout: performPipelineLayout,
		});

		const stepCounterBindGroupLayout = device.createBindGroupLayout({
			label: "DFFT Step Counter Bind Group 0",
			entries: [
				{
					binding: 0,
					visibility: GPUShaderStage.COMPUTE,
					buffer: { type: "storage" },
				},
			],
		});

		this.stepCounterBindGroup = device.createBindGroup({
			label: "DFFT Step Counter Bind Group 0",
			layout: stepCounterBindGroupLayout,
			entries: [
				{
					binding: 0,
					resource: { buffer: this.stepCounterBuffer },
				},
			],
		});

		const stepCounterPipelineLayout = device.createPipelineLayout({
			label: "DFFT Step Counter",
			bindGroupLayouts: [stepCounterBindGroupLayout],
		});
		this.incrementStepCounterKernel = device.createComputePipeline({
			label: "DFFT Increment Step Counter Kernel",
			layout: stepCounterPipelineLayout,
			compute: {
				module: shaderModule,
				entryPoint: "incrementStepCounter",
			},
		});
		this.resetStepCounterKernel = device.createComputePipeline({
			label: "DFFT Reset Step Counter Kernel",
			layout: stepCounterPipelineLayout,
			compute: {
				module: shaderModule,
				entryPoint: "resetStepCounter",
			},
		});

		this.parametersUBO.data.b_inverse = true;
		this.parametersUBO.writeToGPU(device.queue);

		const commandEncoder = device.createCommandEncoder({
			label: "DFFT Precompute",
		});
		const passEncoder = commandEncoder.beginComputePass({
			label: "DFFT Precompute Steps",
		});
		passEncoder.setPipeline(this.intermediateDFTsKernel);
		passEncoder.setBindGroup(0, this.intermediateDFTsBindGroup);
		passEncoder.dispatchWorkgroups(gridSize / 2 / 2, 1, 1);
		passEncoder.end();

		device.queue.submit([commandEncoder.finish()]);
	}

	// static debugCounter: number = 0;
	debugBuffersCopied = false;
	private recordPerformOnBuffer0(
		commandEncoder: GPUCommandEncoder,
		endTimestampWrites: GPUComputePassTimestampWrites | undefined
	) {
		const gridSize = this.parametersUBO.data.size;
		const log2GridSize = this.parametersUBO.data.log_2_size;

		const passEncoder = commandEncoder.beginComputePass({
			label: "DFFT Perform",
			timestampWrites: endTimestampWrites,
		});

		for (let step = 0; step < 2 * log2GridSize; step++) {
			if (step === 0) {
				passEncoder.setPipeline(this.resetStepCounterKernel);
				passEncoder.setBindGroup(0, this.stepCounterBindGroup);
				passEncoder.dispatchWorkgroups(1, 1, 1);
			} else {
				passEncoder.setPipeline(this.incrementStepCounterKernel);
				passEncoder.setBindGroup(0, this.stepCounterBindGroup);
				passEncoder.dispatchWorkgroups(1, 1, 1);
			}
			passEncoder.setPipeline(this.performKernel);
			passEncoder.setBindGroup(0, this.performBindGroup);
			passEncoder.dispatchWorkgroups(gridSize / 16, gridSize / 16, 1);
		}

		passEncoder.setPipeline(this.performSwapEvenSignsKernel);
		passEncoder.setBindGroup(0, this.performBindGroup);
		passEncoder.dispatchWorkgroups(gridSize / 16, gridSize / 16, 1);

		passEncoder.end();
	}

	/**
	 * Performs the 2D DFFT on a grid of complex numbers (two channel). The inverse is not scaled.
	 *
	 * @param {GPUDevice} device
	 * @param {GPUCommandEncoder} commandEncoder
	 * @param {GPUTexture} sourceTexture - The texture to copy the input from. Its format should be "rg32float"
	 * @param {GPUTexture} destinationTexture - The texture to copy the output into. Its format should be "rg32float"
	 * @param {boolean} inverse - Whether to perform an inverse transform or not.
	 * @memberof DFFTResources
	 */
	recordPerform(
		device: GPUDevice,
		commandEncoder: GPUCommandEncoder,
		sourceTexture: GPUTexture,
		destinationTexture: GPUTexture,
		inverse: boolean,
		endTimestampWrites: GPUComputePassTimestampWrites | undefined
	) {
		// TODO: We should be able to pack 2 complex numbers into a source texture
		// We require this format so it maps perfectly to our buffers of complex numbers (WGSL type: vec2<f32>)
		const REQUIRED_FORMAT: GPUTextureFormat = "rg32float";
		if (
			sourceTexture.format != REQUIRED_FORMAT ||
			destinationTexture.format != REQUIRED_FORMAT
		) {
			throw RangeError(
				`SourceTexture (format ${sourceTexture.format}) and DestinationTexture (format ${destinationTexture.format}) must both be ${REQUIRED_FORMAT}`
			);
		}

		this.parametersUBO.data.b_inverse = inverse;
		this.parametersUBO.writeToGPU(device.queue);

		const gridSize = this.parametersUBO.data.size;

		commandEncoder.copyTextureToBuffer(
			{ texture: sourceTexture },
			{
				buffer: this.complexBuffer0,
				bytesPerRow: this.complexBuffer0.size / gridSize,
			},
			{
				width: sourceTexture.width,
				height: sourceTexture.height,
				depthOrArrayLayers: sourceTexture.depthOrArrayLayers,
			}
		);

		this.recordPerformOnBuffer0(commandEncoder, endTimestampWrites);

		commandEncoder.copyBufferToTexture(
			{
				buffer: this.complexBuffer0,
				bytesPerRow: this.complexBuffer0.size / gridSize,
			},
			{ texture: destinationTexture },
			{
				width: destinationTexture.width,
				height: destinationTexture.height,
				depthOrArrayLayers: destinationTexture.depthOrArrayLayers,
			}
		);
	}
}
