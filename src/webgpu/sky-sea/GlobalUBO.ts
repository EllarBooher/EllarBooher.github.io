import { Mat4, mat4, vec4, vec3, Vec4, Vec3 } from "wgpu-matrix";
import { UBO } from "./util/UBO";

/*
 * See "shaders/sky-sea/types.inc.wgsl" for the GPU counterpart of all these
 * types, and the reference for sizes/alignments
 */

/**
 * The profile of light scattering and absorption for Rayleigh particles in a
 * medium. Its altitude-dependent density is modelled with a exponential
 * function `exp(-densityScale * altitude)`.
 * @prop {Vec3} scattering - Optical depth of scattered light per unit length
 * @prop {Vec3} absorption - Optical depth of absorbed light per unit length
 * @prop {number} densityScale - The inner coefficient for the exponential-decay
 *  density function, with units of length.
 * @export
 * @interface RayleighProfile
 */
export interface RayleighProfile {
	// Units of inverse length
	scattering: Vec3;
	absorption: Vec3;

	// Units of length
	densityScale: number;
}
/**
 * @see {@link RayleighProfile}
 */
export type MieProfile = RayleighProfile;

/**
 * The profile of light scattering and absorption for Ozone in a medium. Its
 * altitude-dependent density is modelled with a hardcoded tent function.
 * @prop {Vec3} scattering - Optical depth of scattered light per unit length
 * @prop {Vec3} absorption - Optical depth of absorbed light per unit length
 * @export
 * @interface OzoneProfile
 */
export interface OzoneProfile {
	scattering: Vec3;
	absorption: Vec3;
}

/**
 * The parameters for the atmosphere and planet the scene is surrounded by.
 * Units are in megameters, since that is what the GPU atmosphere code uses.
 * @prop {RayleighProfile} rayleighMm - The profile for Rayleigh particles.
 * @prop {MieProfile} mieMm - The profile for Mie particles.
 * @prop {OzoneProfile} ozoneMm - The profile for Ozone particles.
 * @prop {number} planetRadiusMm - The uniform radius of the spherical planet,
 *  where the atmosphere begins.
 * @prop {number} atmosphereRadiusMm - The uniform radius of the atmosphere, the
 *  outer boundary of the atmosphere. It is the sum of the planet's radius and
 *  the thickness of the atmosphere.
 * @prop {Vec3} groundAlbedo - The albedo for the planet's surface. Unused.
 * @export
 * @interface Atmosphere
 */
export interface Atmosphere {
	rayleighMm: RayleighProfile;
	mieMm: MieProfile;
	ozoneMm: OzoneProfile;

	planetRadiusMm: number;
	atmosphereRadiusMm: number;

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

/**
 * Parameters for a directional light illuminating the scene. Multiply `color`
 * and `strength` to get the RGB spectral luminance of light incident to the
 * scene.
 * @prop {Vec3} color - The relative strengths of red, green, and blue light
 *  respectively.
 * @prop {number} strength - The wavelength-independent magnitude of
 *  luminance/radiance for this light.
 * @prop {Vec3} forward - The normalized direction of all rays emanating from
 *  this light source.
 * @prop {number} angularRadius - The angle subtended by the light modelled as a
 *  disk (or distant sphere). Due to the parallel light rays this angle is the
 *  same anywhere in the scene.
 * @export
 * @interface CelestialLight
 */
export interface CelestialLight {
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

/**
 * The matrices and vectors for a perspective camera in the scene.
 * @prop {Mat4} invProj - Inverse of the perspective projection matrix
 * @prop {Mat4} invView - Inverse of the view matrix
 * @prop {Mat4} projView - Precomputed product of the perspective projection and
 * 	view matrix.
 * @prop {Vec4} position - The world-space position of the camera in the scene.
 * @prop {Vec4} forward - The world-space direction of the camera in the scene.
 * @export
 * @interface Camera
 */
export interface Camera {
	invProj: Mat4;
	invView: Mat4;
	projView: Mat4;
	position: Vec4;
	forward: Vec4;
}

/**
 * The timing information for a scene.
 * @prop {number} timeSeconds - The time in seconds
 * @prop {number} deltaTimeSeconds - The time in seconds that has elapsed since
 *  the last frame.
 * @export
 * @interface Time
 */
export interface Time {
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
function wgpuRoundUp(k: number, n: number): number {
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

/**
 * The backing data for {@link GlobalUBO}, closely matching its gpu
 * representation.
 * @prop {Camera} ocean_camera - A camera that is used as the perspective for
 *  the generation of the screen-space warped ocean surface.
 * @prop {Camera} camera - A second camera that is used for rendering the scene.
 *  Usually should match `ocean_camera`, but can be different for debug or
 *  demonstration purposes.
 * @prop {Atmosphere} atmosphere - The parameters to define the participating
 *  medium of the sky in the scene.
 * @prop {CelestialLight} light - The primary directional light used in the
 *  scene, coming from space.
 * @prop {Time} time - The timing information for the scene, for a specific
 *  frame.
 * @export
 * @interface GlobalUBOData
 */
export interface GlobalUBOData {
	ocean_camera: Camera;
	camera: Camera;
	atmosphere: Atmosphere;
	light: CelestialLight;
	time: Time;
}

/**
 * A UBO containing various parameters integral to rendering. It is intended for
 * a single instance to be shared, with the same buffer bound to many pipelines.
 * @export
 * @class GlobalUBO
 * @extends {UBO}
 */
export class GlobalUBO extends UBO {
	/**
	 * The data that will be packed and laid out in proper byte order in
	 * {@link packed}, to be written to the GPU.
	 * @type {GlobalUBOData}
	 * @memberof GlobalUBO
	 */
	public readonly data: GlobalUBOData = {
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
		const BYTES_PER_FLOAT32 = 4;
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
