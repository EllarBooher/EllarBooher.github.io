const BYTES_PER_FLOAT32 = 4;

/**
 * A wrapper around a device buffer that handles packing and uploading the
 * proper byte representation for a host-shareable and constructible GPU
 * type.
 * @export
 * @abstract
 * @class UBO
 */
export abstract class UBO {
	/**
	 * The device buffer that is uploaded to.
	 * @type {GPUBuffer}
	 * @memberof UBO
	 */
	public readonly buffer: GPUBuffer;

	/**
	 * Allocates the backing buffer with a given size.
	 * @param {GPUDevice} device
	 * @param {number} lengthFloat32 - The length of the buffer in 32-bit
	 *  (4-byte) floats.
	 * @param {string} label - A label for debugging purposes, used by WebGPU.
	 * @memberof UBO
	 */
	constructor(device: GPUDevice, lengthFloat32: number, label: string) {
		this.buffer = device.createBuffer({
			size: lengthFloat32 * BYTES_PER_FLOAT32,
			usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.UNIFORM,
			label: label,
		});
	}

	/**
	 * Synthesizes the bytes that will be written to the UBO buffer.
	 * @protected
	 * @abstract
	 * @return {ArrayBuffer} A packed array of the bytes that must match the
	 *  exact representation of the mirrored type on the device.
	 * @memberof UBO
	 */
	protected abstract packed(): ArrayBuffer;

	/**
	 * Writes the bytes of the host data into the device buffer.
	 * @param {GPUQueue} queue - The device queue to submit the synchronous
	 *  write command into.
	 * @memberof UBO
	 */
	public writeToGPU(queue: GPUQueue): void {
		const values = this.packed();

		if (values.byteLength != this.buffer.size) {
			console.warn(
				`GPUBuffer label: '${this.buffer.label}' uploaded with improper size. Expected: ${this.buffer.size} bytes, got ${values.byteLength} bytes.`
			);
		}

		queue.writeBuffer(this.buffer, 0, values);
	}
}
