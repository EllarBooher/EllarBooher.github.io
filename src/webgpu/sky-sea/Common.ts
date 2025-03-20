/**
 * Defines the width and height of a 2D texture, typically interpreted as
 * pixels.
 * @interface Extent2D
 */
export interface Extent2D {
	width: number;
	height: number;
}

/**
 * WebGPU extent type, but fields are not optional.
 */
export type Extent3D = GPUExtent3DDictStrict & {
	[K in keyof GPUExtent3DDict]-?: GPUExtent3DDict[K];
};
