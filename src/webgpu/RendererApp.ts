import { GUI } from "lil-gui";

export interface RendererApp {
	device: GPUDevice;
	presentFormat: GPUTextureFormat;
	quit: boolean;
	handleResize?: (newWidth: number, newHeight: number) => void;
	draw: (
		presentTexture: GPUTexture,
		aspectRatio: number,
		timeMilliseconds: number,
		deltaTimeMilliseconds: number
	) => void;
	setupUI?: (gui: GUI) => void;
}

export type RendererAppConstructor = (
	device: GPUDevice,
	presentFormat: GPUTextureFormat,
	time: number
) => RendererApp;

export async function getDevice(
	requiredFeatures: ReadonlySet<GPUFeatureName>,
	optionalFeatures: ReadonlySet<GPUFeatureName>,
	requiredLimits: ReadonlyMap<keyof GPUSupportedLimits, number>
): Promise<{ adapter: GPUAdapter; device: GPUDevice }> {
	console.log("Starting WebGPU");
	if (!("gpu" in navigator)) {
		return Promise.reject(
			new Error("WebGPU is not available in this browser.", {
				cause: new Error("navigator.gpu is null"),
			})
		);
	}

	const adapterPromise = navigator.gpu
		.requestAdapter()
		.then((value) => {
			if (!value) {
				return Promise.reject(
					new Error("Requested WebGPU Adapter is not available.")
				);
			}
			return Promise.resolve(value);
		})
		.catch((reason) => {
			return Promise.reject(
				new Error("Unable to get WebGPU Adapter", { cause: reason })
			);
		});

	const devicePromise = adapterPromise.then((adapter) => {
		const knownRequiredFeatures = Array.from(
			requiredFeatures.values()
		).filter((feature) => {
			return adapter.features.has(feature);
		});
		if (knownRequiredFeatures.length != requiredFeatures.size) {
			const reason = `Required features unavailable: ${Array.from(
				requiredFeatures.values()
			)
				.filter((feature) => !adapter.features.has(feature))
				.map((feature) => `'${feature}'`)
				.join(",")}`;
			return Promise.reject(
				new Error("Unable to get WebGPU Device", { cause: reason })
			);
		}
		const features = knownRequiredFeatures.concat(
			...Array.from(optionalFeatures.values()).filter((feature) => {
				return adapter.features.has(feature);
			})
		);
		console.log(`Enabling features: '${features.join(`', '`)}'`);

		const satisfiedRequiredLimits = new Map<
			keyof GPUSupportedLimits,
			number
		>();
		const missingLimits = new Array<{
			name: keyof GPUSupportedLimits;
			requestedMinimum: number;
			supported: number;
		}>();
		for (const [name, requestedMinimum] of requiredLimits.entries()) {
			const supported = adapter.limits[name] as number;

			if (supported >= requestedMinimum) {
				satisfiedRequiredLimits.set(name, requestedMinimum);
			} else {
				missingLimits.push({
					name: name,
					requestedMinimum: requestedMinimum,
					supported: supported,
				});
			}
		}
		if (satisfiedRequiredLimits.size < requiredLimits.size) {
			const reason = `Required limits unsatisfied: ${missingLimits
				.map(
					(limit) =>
						`( name: '${limit.name}' supported: '${limit.supported}' requested: '${limit.requestedMinimum}' )`
				)
				.join(",")}`;
			return Promise.reject(
				new Error("Unable to get WebGPU Device", { cause: reason })
			);
		}

		const limits: Record<string, number> = {};
		for (const [name, limit] of satisfiedRequiredLimits) {
			limits[name] = limit;
		}

		return adapter
			.requestDevice({
				requiredFeatures: features,
				requiredLimits: limits,
			})
			.catch((reason) => {
				return Promise.reject(
					new Error("Unable to get WebGPU Device", { cause: reason })
				);
			});
	});

	return Promise.all([adapterPromise, devicePromise]).then((value) => {
		const [adapter, device] = value;
		return {
			adapter,
			device,
		};
	});
}
