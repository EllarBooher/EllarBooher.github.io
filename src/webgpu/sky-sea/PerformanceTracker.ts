export const QueryCategories = [
	"SkyviewLUT",
	"AerialPerspectiveLUT",
	"FFTWaves",
	"OceanSurface",
	"AtmosphereCamera",
	"FullscreenQuad",
] as const;
export type QueryCategory = (typeof QueryCategories)[number];

export const FrametimeCategories = ["DrawToDraw", ...QueryCategories] as const;
export type FrametimeCategory = (typeof FrametimeCategories)[number];

export interface TimestampQueryInterval {
	querySet: GPUQuerySet;
	beginWriteIndex: GPUSize32;
	endWriteIndex: GPUSize32;
}

class ArithmeticSumArray {
	private values: number[];
	private sum = 0.0;
	private average_ = 0.0;
	// Count how many values are valid. Starts at zero, goes to values.length, and stays there. Necessary to keep runningSum valid before the buffer can be filled once.
	private count = 0;
	// Index into values of next value to write
	private index = 0;

	constructor(capacity: number) {
		this.values = new Array<number>(capacity).fill(0.0);
	}

	get average() {
		return this.average_;
	}

	public push(value: number) {
		if (this.index >= this.values.length) {
			this.index = 0;
		}
		if (this.index < this.count) {
			this.sum -= this.values[this.index];
		}
		this.values[this.index] = value;
		this.sum += value;
		this.count = Math.min(this.values.length, this.count + 1);
		this.average_ = this.sum / this.count;
		this.index += 1;
	}
}

export class PerformanceTracker {
	// Defined only when timestamp querying is supported
	private readonly queryBuffers:
		| {
				querySet: GPUQuerySet;
				// We cannot read directly from the buffer that WebGPU writes the timestamps to
				// So we use a copy operation, then an async mapping.
				// Since we cannot map until unmapping at the end of this async operation, we set a flag to avoid that until then.
				writeBuffer: GPUBuffer;
				readBuffer: GPUBuffer;
				mappingLock: boolean;
		  }
		| undefined;
	private readonly frametimeAverages: Map<
		FrametimeCategory,
		ArithmeticSumArray
	>;

	private readonly timestampIndexMapping = new Map<
		FrametimeCategory,
		number
	>();
	private timestampQueryIndex = 0;

	pushTimestampQueryInterval(
		category: QueryCategory
	): TimestampQueryInterval | undefined {
		if (this.queryBuffers === undefined) {
			return undefined;
		}
		this.timestampIndexMapping.set(category, this.timestampQueryIndex);

		const beginWriteIndex = this.timestampQueryIndex;
		const endWriteIndex = beginWriteIndex + 1;

		this.timestampQueryIndex += 2;

		return {
			querySet: this.queryBuffers.querySet,
			beginWriteIndex: beginWriteIndex,
			endWriteIndex: endWriteIndex,
		};
	}

	startFrame(deltaTimeMilliseconds: number) {
		this.frametimeAverages.get("DrawToDraw")?.push(deltaTimeMilliseconds);
		this.timestampQueryIndex = 0;
		this.timestampIndexMapping.clear();
	}

	recordCopyBuffers(commandEncoder: GPUCommandEncoder) {
		if (
			this.queryBuffers == undefined ||
			this.queryBuffers.readBuffer.mapState !== "unmapped"
		) {
			return;
		}

		commandEncoder.resolveQuerySet(
			this.queryBuffers.querySet,
			0,
			this.timestampQueryIndex,
			this.queryBuffers.writeBuffer,
			0
		);
		commandEncoder.copyBufferToBuffer(
			this.queryBuffers.writeBuffer,
			0,
			this.queryBuffers.readBuffer,
			0,
			this.queryBuffers.readBuffer.size
		);
	}

	asyncUpdateFrametimeAverages() {
		if (
			this.queryBuffers == undefined ||
			this.queryBuffers.readBuffer.mapState !== "unmapped"
		) {
			return;
		}
		const buffer = this.queryBuffers.readBuffer;

		/*
		 * It's okay to throw away this promise, since we just want to update
		 * performance whenever the buffer is available. We could rotate them,
		 * but that would be extra work and sampling whatever frames we can
		 * is okay.
		 */
		buffer
			.mapAsync(GPUMapMode.READ, 0, buffer.size)
			.then(() => {
				const timestampsView = new BigInt64Array(
					buffer.getMappedRange(0, buffer.size)
				);
				this.timestampIndexMapping.forEach((value, key) => {
					const MS_PER_NS = 1000000;
					const timeMilliseconds =
						Number(
							timestampsView.at(value + 1)! -
								timestampsView.at(value)!
						) / MS_PER_NS;
					this.frametimeAverages.get(key)?.push(timeMilliseconds);
				});
				buffer.unmap();
			})
			.catch((reason) => {
				console.error(
					`Failed while retrieving frametime values from GPU:`
				);
				console.error(reason);
			});
	}

	averageByCategory(category: FrametimeCategory): number | undefined {
		return this.frametimeAverages.get(category)?.average;
	}

	constructor(device: GPUDevice) {
		const FRAMETIME_SAMPLE_SIZE = 400;

		this.frametimeAverages = new Map([
			["DrawToDraw", new ArithmeticSumArray(FRAMETIME_SAMPLE_SIZE)],
		]);

		if (!device.features.has("timestamp-query")) {
			console.warn(
				"WebGPU feature 'timestamp-query' is not supported. Continuing, but without performance information about specific stages."
			);
			return;
		}

		// Space for start & end for each step
		// webgpu timestamps are 64 bit nanoseconds
		const BYTES_PER_TIMESTAMP_SAMPLE = 8;
		const numberOfTimestamps = 2 * QueryCategories.length;
		this.queryBuffers = {
			mappingLock: false,
			querySet: device.createQuerySet({
				type: "timestamp",
				count: numberOfTimestamps,
			}),
			writeBuffer: device.createBuffer({
				size: BYTES_PER_TIMESTAMP_SAMPLE * numberOfTimestamps,
				usage: GPUBufferUsage.COPY_SRC | GPUBufferUsage.QUERY_RESOLVE,
			}),
			readBuffer: device.createBuffer({
				size: BYTES_PER_TIMESTAMP_SAMPLE * numberOfTimestamps,
				usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ,
			}),
		};
		QueryCategories.forEach((category) => {
			this.frametimeAverages.set(
				category,
				new ArithmeticSumArray(FRAMETIME_SAMPLE_SIZE)
			);
		});
	}
}
