import { Mat4, mat4, vec4, vec3, Vec4, Vec3 } from "wgpu-matrix";

// See "shaders/sky-sea/ubo.inc.wgsl" for the GPU counterpart of all these types, and the reference for sizes/alignments

const BYTES_PER_FLOAT32 = 4;

export abstract class UBO {
	public readonly buffer: GPUBuffer;

	constructor(device: GPUDevice, lengthFloat32: number, label: string) {
		this.buffer = device.createBuffer({
			size: lengthFloat32 * BYTES_PER_FLOAT32,
			usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.UNIFORM,
			label: label,
		});
	}

	protected abstract packed(): ArrayBuffer;

	public writeToGPU(queue: GPUQueue) {
		const values = this.packed();

		if (values.byteLength != this.buffer.size) {
			console.warn(
				`GPUBuffer label: '${this.buffer.label}' uploaded with improper size. Expected: ${this.buffer.size} bytes, got ${values.byteLength} bytes.`
			);
		}

		queue.writeBuffer(this.buffer, 0, values);
	}
}

interface RayleighProfile {
	// Units of inverse length
	scattering: Vec3;
	absorption: Vec3;

	// Units of length
	densityScale: number;
}

interface MieProfile {
	// Units of inverse length
	scattering: Vec3;
	absorption: Vec3;

	// Units of length
	densityScale: number;
}

interface OzoneProfile {
	// Units of inverse length
	scattering: Vec3;
	absorption: Vec3;

	// Ozone uses hardcode density function
}

// Units are in megameters
interface Atmosphere {
	rayleighMm: RayleighProfile;
	mieMm: MieProfile;
	ozoneMm: OzoneProfile;

	planetRadiusMm: number;
	atmosphereRadiusMm: number;

	// Unitless albedo
	groundAlbedo: Vec3;
}

// Values taken from Table 1 of:
// Hillaire, Sébastien. “A Scalable and Production Ready Sky and Atmosphere Rendering Technique.”
// Computer Graphics Forum 39 (2020): n. pag.
function atmosphereEarth(): Atmosphere {
	return {
		rayleighMm: {
			scattering: vec3.create(5.802, 13.558, 33.1),
			absorption: vec3.create(0.0, 0.0, 0.0),
			densityScale: 0.008,
		},
		mieMm: {
			scattering: vec3.create(3.996, 3.996, 3.996),
			absorption: vec3.create(4.4, 4.4, 4.4),
			densityScale: 0.0012,
		},
		ozoneMm: {
			scattering: vec3.create(0.0, 0.0, 0.0),
			absorption: vec3.create(0.65, 1.881, 0.085),
		},

		planetRadiusMm: 6.36,
		atmosphereRadiusMm: 6.42,

		// Unitless albedo
		// Values are arbitrary
		groundAlbedo: vec3.create(0.3 * 1.0, 0.3 * 0.75, 0.3 * 0.4),
	};
}

interface CelestialLight {
	color: Vec3;
	strength: number;
	forward: Vec3;
	angularRadius: number;
}

function lightSun(): CelestialLight {
	return {
		color: vec3.create(1.0, 1.0, 1.0),
		strength: 60.0,
		forward: vec3.create(0.0, -1.0, 0.0),
		angularRadius: (16.0 / 60.0) * (3.141592653589793 / 180.0),
	};
}

export interface Camera {
	invProj: Mat4;
	invView: Mat4;
	projView: Mat4;
	position: Vec4;
	forward: Vec4;
}

interface Time {
	timeSeconds: number;
	deltaTimeSeconds: number;
}

const ALIGNOF_GPU_ATMOSPHERE = 16;
const SIZEOF_GPU_ATMOSPHERE = 128;

const ALIGNOF_GPU_CELESTIALLIGHT = 16;
const SIZEOF_GPU_CELESTIALLIGHT = 32;

const ALIGNOF_GPU_CAMERA = 16;
const SIZEOF_GPU_CAMERA = 256;

const ALIGNOF_GPU_TIME = 16;
const SIZEOF_GPU_TIME = 16;

// https://gpuweb.github.io/gpuweb/wgsl/#roundup
function wgpuRoundUp(k: number, n: number) {
	return Math.ceil(n / k) * k;
}

const ALIGNOF_GPU_GLOBAL_UBO = Math.max(
	ALIGNOF_GPU_ATMOSPHERE,
	ALIGNOF_GPU_CELESTIALLIGHT,
	ALIGNOF_GPU_CAMERA,
	ALIGNOF_GPU_TIME
);
const SIZEOF_GPU_GLOBAL_UBO = wgpuRoundUp(
	ALIGNOF_GPU_GLOBAL_UBO,
	SIZEOF_GPU_CAMERA +
		SIZEOF_GPU_CAMERA +
		SIZEOF_GPU_ATMOSPHERE +
		SIZEOF_GPU_CELESTIALLIGHT +
		SIZEOF_GPU_TIME
);

export class GlobalUBO extends UBO {
	public readonly data: {
		ocean_camera: Camera;
		camera: Camera;
		atmosphere: Atmosphere;
		light: CelestialLight;
		time: Time;
	} = {
		atmosphere: atmosphereEarth(),
		light: lightSun(),
		camera: {
			invProj: mat4.identity(),
			invView: mat4.identity(),
			projView: mat4.identity(),
			position: vec4.create(0.0, 0.0, 0.0, 1.0),
			forward: vec4.create(0.0, 0.0, -1.0, 0.0),
		},
		ocean_camera: {
			invProj: mat4.identity(),
			invView: mat4.identity(),
			projView: mat4.identity(),
			position: vec4.create(0.0, 0.0, 0.0, 1.0),
			forward: vec4.create(0.0, 0.0, -1.0, 0.0),
		},
		time: {
			timeSeconds: 0.0,
			deltaTimeSeconds: 0.0,
		},
	};

	constructor(device: GPUDevice) {
		super(device, SIZEOF_GPU_GLOBAL_UBO / BYTES_PER_FLOAT32, "Global UBO");
	}

	protected override packed(): Float32Array {
		const vec2_zeroed = new Float32Array(2).fill(0.0);
		const vec4_zeroed = new Float32Array(4).fill(0.0);
		const mat2x4_zeroed = new Float32Array(4 * 2).fill(0.0);

		const atmosphere = this.data.atmosphere;
		const rayleigh = atmosphere.rayleighMm;
		const mie = atmosphere.mieMm;

		// zeroed values are padding

		const atmospherePacked = new Float32Array([
			...rayleigh.scattering,
			rayleigh.densityScale,
			...rayleigh.absorption,
			atmosphere.planetRadiusMm,
			...mie.scattering,
			mie.densityScale,
			...mie.absorption,
			atmosphere.atmosphereRadiusMm,
			...atmosphere.groundAlbedo,
			0.0,
			...atmosphere.ozoneMm.scattering,
			0.0,
			...atmosphere.ozoneMm.absorption,
			0.0,
			...vec4_zeroed,
		]);

		const light = this.data.light;
		const lightPacked = new Float32Array([
			...light.color,
			light.strength,
			...light.forward,
			light.angularRadius,
		]);

		const camera = this.data.camera;
		const cameraPacked = new Float32Array([
			...camera.invProj,
			...camera.invView,
			...camera.projView,
			...camera.position,
			...camera.forward,
			...mat2x4_zeroed,
		]);

		const oceanCamera = this.data.ocean_camera;
		const oceanCameraPacked = new Float32Array([
			...oceanCamera.invProj,
			...oceanCamera.invView,
			...oceanCamera.projView,
			...oceanCamera.position,
			...oceanCamera.forward,
			...mat2x4_zeroed,
		]);

		const time = this.data.time;
		const timePacked = new Float32Array([
			...vec2_zeroed,
			time.timeSeconds,
			time.deltaTimeSeconds,
		]);

		return new Float32Array([
			...cameraPacked,
			...oceanCameraPacked,
			...atmospherePacked,
			...lightPacked,
			...timePacked,
		]);
	}
}
