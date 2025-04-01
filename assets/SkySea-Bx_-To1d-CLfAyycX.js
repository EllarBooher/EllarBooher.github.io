import{v as w,m as b,a as M,b as T}from"./wgpu-matrix.module-CuEgU2d4-DIZITxah.js";var le=Object.defineProperty,ue=(l,e,t)=>e in l?le(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t,r=(l,e,t)=>ue(l,typeof e!="symbol"?e+"":e,t);const ce=4;class R{constructor(e,t,a){r(this,"buffer"),this.buffer=e.createBuffer({size:t*ce,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM,label:a})}writeToGPU(e){const t=this.packed();t.byteLength!=this.buffer.size&&console.warn(`GPUBuffer label: '${this.buffer.label}' uploaded with improper size. Expected: ${this.buffer.size} bytes, got ${t.byteLength} bytes.`),e.writeBuffer(this.buffer,0,t)}}function de(){return{rayleighMm:{scattering:w.create(5.802,13.558,33.1),absorption:w.create(0,0,0),densityScale:.008},mieMm:{scattering:w.create(3.996,3.996,3.996),absorption:w.create(4.4,4.4,4.4),densityScale:.0012},ozoneMm:{scattering:w.create(0,0,0),absorption:w.create(.65,1.881,.085)},planetRadiusMm:6.36,atmosphereRadiusMm:6.42,groundAlbedo:w.create(.3*1,.3*.75,.3*.4)}}function _e(){return{color:w.create(1,1,1),strength:10,forward:w.create(0,-1,0),angularRadius:16/60*(3.141592653589793/180)}}const me=16,pe=128,he=16,fe=32,ge=16,W=256,ve=16,ye=16;function be(l,e){return Math.ceil(e/l)*l}const xe=Math.max(me,he,ge,ve),we=be(xe,W+W+pe+fe+ye);class Te extends R{constructor(e){super(e,we/4,"Global UBO"),r(this,"data",{atmosphere:de(),light:_e(),camera:{invProj:b.identity(),invView:b.identity(),projView:b.identity(),position:M.create(0,0,0,1),forward:M.create(0,0,-1,0)},ocean_camera:{invProj:b.identity(),invView:b.identity(),projView:b.identity(),position:M.create(0,0,0,1),forward:M.create(0,0,-1,0)},time:{timeSeconds:0,deltaTimeSeconds:0}})}packed(){const e=new Float32Array(2).fill(0),t=new Float32Array(4).fill(0),a=new Float32Array(4*2).fill(0),n=this.data.atmosphere,i=n.rayleighMm,o=n.mieMm,s=new Float32Array([...i.scattering,i.densityScale,...i.absorption,n.planetRadiusMm,...o.scattering,o.densityScale,...o.absorption,n.atmosphereRadiusMm,...n.groundAlbedo,0,...n.ozoneMm.scattering,0,...n.ozoneMm.absorption,0,...t]),u=this.data.light,c=new Float32Array([...u.color,u.strength,...u.forward,u.angularRadius]),d=this.data.camera,_=new Float32Array([...d.invProj,...d.invView,...d.projView,...d.position,...d.forward,...a]),m=this.data.ocean_camera,y=new Float32Array([...m.invProj,...m.invView,...m.projView,...m.position,...m.forward,...a]),v=this.data.time,p=new Float32Array([...e,v.timeSeconds,v.deltaTimeSeconds]);return new Float32Array([..._,...y,...s,...c,...p])}}const Se=`// Sizeof(Atmosphere) = 8 * 16 = 128
// Alignof(Atmosphere) = 16
struct Atmosphere
{
    scattering_rayleigh_per_Mm : vec3<f32>,
    density_scale_rayleigh_Mm : f32,
    absorption_rayleigh_per_Mm : vec3<f32>,

    planet_radius_Mm : f32,

    scattering_mie_per_Mm : vec3<f32>,
    density_scale_mie_Mm : f32,
    absorption_mie_per_Mm : vec3<f32>,

    atmosphere_radius_Mm : f32,

    ground_albedo : vec3<f32>,
    padding0 : f32,

    scattering_ozone_per_Mm : vec3<f32>,
    padding1 : f32,

    absorption_ozone_per_Mm : vec3<f32>,
    padding2 : f32,

    padding3 : vec4<f32>,
}

// Sizeof(CelestialLight) = 2 * 16 = 32
// Alignof(CelestialLight) = 16
struct CelestialLight
{
    color: vec3<f32>,
    strength: f32,

	forward: vec3<f32>,
    angular_radius: f32,
}

// Sizeof(Camera) = 4 * 64 = 256
// Alignof(Camera) = 16
struct Camera
{
    inv_proj: mat4x4<f32>,

	inv_view: mat4x4<f32>,

	proj_view: mat4x4<f32>,

    position: vec4<f32>,
	forward: vec4<f32>,
	padding0: mat2x4<f32>,
}

// Sizeof(Time) = 16
// Alignof(Time) = 16
struct Time
{
	padding0: vec2<f32>,
	time_seconds: f32,
	delta_time_seconds: f32,
}

// All of these uniform values have identical lifetimes: they update before rendering for the frame, and are constant throughout
// Thus we store everything together to simplify the bindings
// Sizeof(GlobalUBO) = 672 + 16 = 688 (as of writing)
// Alignof(GlobalUBO) = 16
struct GlobalUBO
{
	camera: Camera,           // offsets
	ocean_camera: Camera,     // 0   + 256 = 256
	atmosphere: Atmosphere,   // 256 + 256 = 512
	light: CelestialLight,    // 512 + 128 = 640
	time: Time,               // 640 + 32  = 672
}

struct RaySphereHit
{
    hit: bool,
    t0: f32,
    t1: f32,
}

// t1 > t0, values can be negative. Function returns true even if the sphere is behind the ray.
// If this returns false, t0 and t1 are unchanged.
fn raySphereIntersection(
    ray_origin: vec3<f32>,
    ray_direction_normalized: vec3<f32>,
    radius: f32
) -> RaySphereHit
{
    // Method taken from "Precision Improvements for Ray/Sphere Intersection"
    // by Eric Haines, Johannes Günther, and Tomas Akenine-Möller
    //
    // The method includes tricks to reduce float point inaccuracy errors.

    let f: vec3<f32> = ray_origin;
    let d: vec3<f32> = ray_direction_normalized;
    let b: f32 = -1.0 * dot(f, d);
    let center_to_intersection_chord: vec3<f32> = f + b * d;
    let discriminant: f32 = radius * radius - dot(center_to_intersection_chord, center_to_intersection_chord);
    let c: f32 = dot(f, f) - radius * radius;

    var output : RaySphereHit;
    output.hit = false;
    output.t0 = 0.0;
    output.t1 = 0.0;

    if (discriminant < 0.0)
    {
        return output;
    }

    var q: f32 = b;
    if (b < 0.0)
    {
        q -= sqrt(discriminant);
    }
    else
    {
        q += sqrt(discriminant);
    }

    output.hit = true;
    output.t0 = c / q;
    output.t1 = q;

    if (output.t0 > output.t1)
    {
        let temp: f32 = output.t0;
        output.t0 = output.t1;
        output.t1 = temp;
    }

    return output;
}

struct RayPlaneHit {
	hit: bool,
	t: f32,
}

fn rayPlaneIntersection(
	ray_origin: vec3<f32>,
	ray_direction: vec3<f32>,
	plane_origin: vec3<f32>,
	plane_normal: vec3<f32>
) -> RayPlaneHit
{
	var result: RayPlaneHit;

	let perp = dot(plane_normal, ray_direction);
	result.t = dot(plane_origin - ray_origin, plane_normal) / perp;
	result.hit = (abs(perp) > 0.00001) && (result.t > 0.0);

	return result;
}


@group(0) @binding(0) var transmittance_lut: texture_storage_2d<rgba32float, write>;

@group(1) @binding(0) var<uniform> u_global: GlobalUBO;

// This file contains shared methods and definitions for raymarching the atmosphere and generating the lookup tables

const PI = 3.141592653589793;
const METERS_PER_MM = 1000000;


// Based on:
// "A Scalable and Production Ready Sky and Atmosphere Rendering Technique" by Sébastien Hillaire (2020)
// https://sebh.github.io/publications/egsr2020.pdf
//
// "Precomputed Atmospheric Scattering: a New Implementation" by Eric Bruneton (2017)
// https://ebruneton.github.io/precomputed_atmospheric_scattering

const AERIAL_PERSPECTIVE_MM_PER_SLICE = 0.001;

const ISOTROPIC_PHASE = 1.0 / (4.0 * PI);

// Transmittance LUT UV mapping based on Bruneton et al. 2017 method
// https://ebruneton.github.io/precomputed_atmospheric_scattering/atmosphere/functions.glsl#transmittance_lookup

fn safeSqrt(value: f32) -> f32 { return sqrt(max(value, 0.0)); }

// Squeeze in UV values by half a texel, so the bounds of our sampled function can be stored precisely at the edge of
// the texture
fn textureCoordFromUnitRange(value: f32, length: u32) -> f32
{
    return 0.5 / f32(length) + value * (1.0 - 1.0 / f32(length));
}
fn unitRangeFromTextureCoord(coord: f32 , length: u32) -> f32
{
    return (coord - 0.5 / f32(length)) / (1.0 - 1.0 / f32(length));
}

// Radius is the distance in Mm from the center of the planet, aka length of position vector
// Mu is the cosine of the angle between the position vector and the direction vector we want to sample the
// transmittance in
fn transmittanceLUT_RMu_to_UV(
    atmosphere: ptr<function,Atmosphere>,
    radius: f32,
    mu: f32,
	dimensions: vec2<u32>,
) -> vec2<f32>
{
    let atmosphere_radius_Mm_squared: f32 = (*atmosphere).atmosphere_radius_Mm * (*atmosphere).atmosphere_radius_Mm;
    let planet_radius_Mm_squared: f32 = (*atmosphere).planet_radius_Mm * (*atmosphere).planet_radius_Mm;

    // Ground level, horizontal ray distance to atmospheric boundary
    let h: f32 = safeSqrt(atmosphere_radius_Mm_squared - planet_radius_Mm_squared);

    // Distance to horizon, which is also the exact position the previous horizontal ray starts at
    let rho: f32 = safeSqrt(radius * radius - planet_radius_Mm_squared);

    // rho + H = distance to atmosphere boundary when looking at the horizon
    // It represents the distance along the biggest angle (most negative mu) that has nonzero transmittance,
    // since any lower and we intersect the planet
    // This angle changes as the radius does, so this mapping seeks to compress a different range of mu values
    // at any given radius value

    // Distance to edge of atmosphere, with both its min and max values at this given radius.
    let d: f32 = max(-radius * mu + safeSqrt(radius * radius * (mu * mu - 1.0) + atmosphere_radius_Mm_squared), 0.0);
    let d_min: f32 = (*atmosphere).atmosphere_radius_Mm - radius;
    let d_max: f32 = rho + h;

    let x_mu: f32 = (d - d_min) / (d_max - d_min);
    let x_radius: f32 = rho / h;

    return vec2<f32>(
        textureCoordFromUnitRange(x_mu, dimensions.x),
        textureCoordFromUnitRange(x_radius, dimensions.y)
    );
}

// Inverse of transmittanceLUT_RMu_to_UV
// Allocates more texture space to interesting rays near the horizon.
fn transmittanceLUT_UV_to_RMu(
    atmosphere: ptr<function,Atmosphere>,
    uv: vec2<f32>,
	dimensions: vec2<u32>,
) -> vec2<f32>
{
    let x_mu : f32 = unitRangeFromTextureCoord(uv.x, dimensions.x);
    let x_radius : f32 = unitRangeFromTextureCoord(uv.y, dimensions.y);

    let atmosphere_radius_Mm_squared : f32 = (*atmosphere).atmosphere_radius_Mm * (*atmosphere).atmosphere_radius_Mm;
    let planet_radius_Mm_squared : f32 = (*atmosphere).planet_radius_Mm * (*atmosphere).planet_radius_Mm;

    // Ground level, horizontal ray distance to atmospheric boundary
    let h : f32 = safeSqrt(atmosphere_radius_Mm_squared - planet_radius_Mm_squared);

    let rho : f32 = h * x_radius;

    let radius : f32 = safeSqrt(rho * rho + planet_radius_Mm_squared);

    let d_min : f32 = (*atmosphere).atmosphere_radius_Mm - radius;
    let d_max : f32 = rho + h;

    let d : f32 = (d_max - d_min) * x_mu + d_min;

    // This boundary condition is important depending on floating point errors
    // We don't need to check radius since it is bounded below by planet radius, and that shouldn't be near 0
    let D_EPSILON: f32 = 0.000000001;
    if (d < D_EPSILON)
    {
        // mu is ambiguous since we are at the very edge of the atmosphere, where no angle produces valid transmittance
        // values
        return vec2<f32>(radius, 1.0);
    }

    let mu : f32 = (h * h - rho * rho - d * d) / (2.0 * radius * d);
    // Equivalently, mu = (atmosphere_radius_Mm_squared - radius * radius - d*d) / (2.0 * radius * d)
    // But atmosphere_radius_Mm_squared and radius * radius are large, so this avoids floating point errors from adding
    // these to the much smaller d * d

    // This clamp is very important
    return vec2<f32>(radius, clamp(mu, -1.0, 1.0));
}

fn multiscatterLUT_RMu_to_UV(
    atmosphere: ptr<function,Atmosphere>,
    radius: f32,
    mu_light: f32,
	dimensions: vec2<u32>,
) -> vec2<f32>
{
    let u_unit: f32 = 0.5 + 0.5 * mu_light;
    let v_unit: f32 = clamp(
        (radius - (*atmosphere).planet_radius_Mm)
            / ((*atmosphere).atmosphere_radius_Mm - (*atmosphere).planet_radius_Mm),
        0.0, 1.0
    );

    return vec2<f32>(
        textureCoordFromUnitRange(u_unit, dimensions.x),
        textureCoordFromUnitRange(v_unit, dimensions.y)
    );
}

fn multiscatterLUT_UV_to_RMu(
    atmosphere: ptr<function,Atmosphere>,
    uv: vec2<f32>,
	dimensions: vec2<u32>,
) -> vec2<f32>
{
    let u_unit: f32 = unitRangeFromTextureCoord(uv.x, dimensions.x);
    let v_unit: f32 = unitRangeFromTextureCoord(uv.y, dimensions.y);

    let mu_light: f32 = 2.0 * (u_unit - 0.5);

    // The exact radius is not too critical, and multiscattering is sensitive to being out of range, so we squeeze into
    // a slightly smaller planet radius to ensure we are valid.
    let radius: f32 = mix(
        (*atmosphere).planet_radius_Mm * (1.0002),
        (*atmosphere).atmosphere_radius_Mm * (0.9998),
        v_unit
    );

    return vec2<f32>(radius, mu_light);
}

fn sampleMultiscatterLUT(
    lut: texture_2d<f32>,
    s: sampler,
    atmosphere: ptr<function,Atmosphere>,
    radius: f32,
    mu_light: f32
) -> vec3<f32>
{
    let uv: vec2<f32> = multiscatterLUT_RMu_to_UV(
		atmosphere,
		radius,
		mu_light,
		textureDimensions(lut)
	);

    return textureSampleLevel(lut, s, uv, 0.0).xyz;
}

fn sampleTransmittanceLUT_RadiusMu(
    lut: texture_2d<f32>,
    s: sampler,
    atmosphere: ptr<function,Atmosphere>,
    radius: f32,
    mu: f32
) -> vec3<f32>
{
    let uv: vec2<f32> = transmittanceLUT_RMu_to_UV(
		atmosphere,
		radius,
		mu,
		textureDimensions(lut)
	);

    let sample = textureSampleLevel(lut, s, uv, 0.0).xyz;

    return sample;
}

fn sampleTransmittanceLUT_Ray(
    lut: texture_2d<f32>,
    s: sampler,
    atmosphere: ptr<function,Atmosphere>,
    position: vec3<f32>,
    direction: vec3<f32>
) -> vec3<f32>
{
    let radius: f32 = length(position);
    let mu: f32 = (dot(position, direction) / (length(position) * length(direction)));

    return sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, radius, mu);

}

fn sampleTransmittanceLUT_Segment(
    lut: texture_2d<f32>,
    s: sampler,
    atmosphere: ptr<function,Atmosphere>,
    r_start: f32,
    mu_start: f32,
    d: f32,
    intersects_ground: bool
) -> vec3<f32>
{
    let r_end = clamp(
        safeSqrt(d * d + 2.0 * r_start * mu_start * d + r_start * r_start),
        (*atmosphere).planet_radius_Mm, (*atmosphere).atmosphere_radius_Mm
    );
    let mu_end = clamp((r_start * mu_start + d) / r_end, -1.0, 1.0);

    if(intersects_ground)
    {
        return min(
            sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, r_end, -mu_end)
            / sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, r_start, -mu_start),
            vec3<f32>(1.0)
        );
    }
    else
    {
        return min(
            sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, r_start, mu_start)
            / sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, r_end, mu_end),
            vec3<f32>(1.0)
        );
    }
}

struct ExtinctionSample
{
    scattering_rayleigh: vec3<f32>,
    scattering_mie: vec3<f32>,
    scattering_ozone: vec3<f32>,

    absorption_rayleigh: vec3<f32>,
    absorption_mie: vec3<f32>,
    absorption_ozone: vec3<f32>,

    // This parameter is redundant, but convenient.
    // It is the sum of all scattering values.
    scattering: vec3<f32>,

    extinction: vec3<f32>,
}

// Ensure altitude and density_scale are the same units.
fn densityExponential(altitude: f32, density_scale: f32) -> f32
{ return exp(-altitude / density_scale); }

// Hardcoded with values for ozone
fn densityTent(altitude_km: f32) -> f32
{ return max(0.0, 1.0 - abs(altitude_km - 25.0) / 15.0); }

// Returned units are per Mm. Take care that this function takes in altitude, NOT radius.
// radius := altitude + planetRadius
fn sampleExtinction(atmosphere: ptr<function,Atmosphere>, altitude_Mm: f32) -> ExtinctionSample
{
    let density_rayleigh: f32 = densityExponential(altitude_Mm, (*atmosphere).density_scale_rayleigh_Mm);
    let scattering_rayleigh: vec3<f32> = (*atmosphere).scattering_rayleigh_per_Mm * density_rayleigh;
    let absorption_rayleigh: vec3<f32> = (*atmosphere).absorption_rayleigh_per_Mm * density_rayleigh;

    let density_mie: f32 = densityExponential(altitude_Mm, (*atmosphere).density_scale_mie_Mm);
    let scattering_mie: vec3<f32> = (*atmosphere).scattering_mie_per_Mm * density_mie;
    let absorption_mie: vec3<f32> = (*atmosphere).absorption_mie_per_Mm * density_mie;

    let density_ozone: f32 = densityTent(altitude_Mm * 1000.0);
    let scattering_ozone: vec3<f32> = (*atmosphere).scattering_ozone_per_Mm * density_ozone;
    let absorption_ozone: vec3<f32> = (*atmosphere).absorption_ozone_per_Mm * density_ozone;

    var extinction_sample: ExtinctionSample;
    extinction_sample.scattering_rayleigh = scattering_rayleigh;
    extinction_sample.scattering_mie = scattering_mie;
    extinction_sample.scattering_ozone = scattering_ozone;

    extinction_sample.absorption_rayleigh = absorption_rayleigh;
    extinction_sample.absorption_mie = absorption_mie;
    extinction_sample.absorption_ozone = absorption_ozone;

    extinction_sample.scattering = scattering_rayleigh + scattering_mie + scattering_ozone;
    extinction_sample.extinction = extinction_sample.scattering + absorption_rayleigh + absorption_mie + absorption_ozone;

    return extinction_sample;
}

// Input cosine is the cosine of the angle between incident and outgoing scattering directions
fn phaseRayleigh(cosine: f32) -> f32
{
    let scalar: f32 = 3.0 / (16.0 * PI);
    let numerator: f32 = (1.0 + cosine * cosine);

    return scalar * numerator;
}

// Input cosine is the cosine of the angle between incident and outgoing scattering directions
// Input g is a value from -1 to 1 that controls the concentration of back vs forward scattering.
// Note: g = 0 reduces to the case of our rayleigh phase function
fn phaseMie(cosine: f32, g: f32) -> f32
{
    let scalar: f32 = 3.0 / (8.0 * PI);
    let numerator: f32 = (1.0 - g * g) * (1.0 + cosine * cosine);
    let denominator: f32 = (2.0 + g * g) * pow(1.0 + g * g - 2.0 * g * cosine, 1.5);
    return scalar * numerator / denominator;
}

// (float, float) 2d encoding of position + direction
struct RaymarchStep
{
    // Distance from origin, represents (0, radius, 0)
    radius: f32,
    // Cosine of the angle between (0, radius, 0) and implicit direction vector
    mu: f32,
    // Cosine of the angle with the direction to the light
    mu_light: f32,
    // Cosine of travel direction vector and light direction vector
    nu: f32,
};

// Returns 'start' moved 'step_distance' units along the implicit direction vector
// nu is the dot product between normalized direction and light direction vector
fn stepRadiusMu(
    start: RaymarchStep,
    step_distance: f32,
) -> RaymarchStep
{
    // Consider starting position (0, radius, 0)
    // and step vector of d * (sqrt(1 - mu * mu), mu, 0)

    // When computing changes in radii and mu, we use this method everywhere since norm is preserved upon rotation
    // and all cases of stepping can be reduced to the above two vectors

    var result: RaymarchStep;
    result.radius = safeSqrt(
        step_distance * step_distance + 2.0 * start.radius * start.mu * step_distance
            + start.radius * start.radius
    );
    result.mu = (start.radius * start.mu + step_distance) / result.radius;
    result.nu = start.nu;
    result.mu_light = (start.radius * start.mu_light + step_distance * start.nu) / result.radius;

    return result;
}

// Samples a segment, given in RMu coordinates
fn sampleTransmittanceLUT_RayMarchStep(
    lut: texture_2d<f32>,
    s: sampler,
    atmosphere: ptr<function,Atmosphere>,
    start: RaymarchStep,
    step_distance: f32
) -> vec3<f32>
{
    const STEP_DISTANCE_EPSILON = 0.0000001;
    if (step_distance < STEP_DISTANCE_EPSILON)
    {
        return vec3<f32>(1.0);
    }

    let end: RaymarchStep = stepRadiusMu(start, step_distance);

    var transmittance = vec3<f32>(0.0);
    if (start.mu > 0.0)
    {
        // Oriented up into atmosphere, so we directly sample LUT
        transmittance = sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, start.radius, start.mu)
                      / sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, end.radius, end.mu);
    }
    else
    {
        // Oriented down towards planet, so direct samples would be invalid
        // Instead, we flip the direction
        transmittance = sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, end.radius, -end.mu)
                      / sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, start.radius, -start.mu);
    }

    return clamp(transmittance, vec3<f32>(0.0), vec3<f32>(1.0));
}


// See 'atmosphere_common.inc.wgsl' for sources on what this method is based on.

// Transmittance LUT
//
// This map builds a transmittance LUT, a map of the transmittance of light interacting with the atmosphere parameterized by altitude and facing direction.
// This map depends entirely on the atmosphere's parameters, and NOT on any lights, cameras, or geometry.

@compute @workgroup_size(16, 16, 1)
fn computeTransmittance(@builtin(global_invocation_id) global_id : vec3<u32>,)
{
    let texel_coord = vec2<u32>(global_id.xy);
    let size = textureDimensions(transmittance_lut);
    if(texel_coord.x >= size.x || texel_coord.y >= size.y)
    {
        return;
    }
    var atmosphere: Atmosphere = u_global.atmosphere;

    let offset = vec2<f32>(0.5, 0.5);
    let uv = (vec2<f32>(texel_coord) + offset) / vec2<f32>(size);

    let r_mu: vec2<f32> = transmittanceLUT_UV_to_RMu(&atmosphere, uv, textureDimensions(transmittance_lut));

    let radius: f32 = r_mu.x;
    let direction_cosine: f32 = r_mu.y;

    let origin: vec3<f32> = vec3<f32>(0.0, radius, 0.0);
    let direction: vec3<f32> = vec3<f32>(sqrt(1.0 - direction_cosine * direction_cosine), direction_cosine, 0.0);

    let atmosphere_hit: RaySphereHit = raySphereIntersection(origin, direction, atmosphere.atmosphere_radius_Mm);
    // Could maybe skip this check, since our parameters guarantee we start within the atmosphere
    if(!atmosphere_hit.hit)
    {
        textureStore(transmittance_lut, texel_coord, vec4<f32>(1.0, 1.0, 1.0, 1.0));
        return;
    }

    let distance: f32 = atmosphere_hit.t1;

    var transmittance: vec3<f32> = vec3<f32>(1.0);

	const SAMPLE_COUNT = 500u;
    let dt: f32 = distance / f32(SAMPLE_COUNT);
    for(var i: u32 = 0; i < SAMPLE_COUNT; i++)
    {
        let t: f32 = distance * (f32(i) + 0.5) / f32(SAMPLE_COUNT);
        let position: vec3<f32> = origin + t * direction;
        let altitude: f32 = length(position) - atmosphere.planet_radius_Mm;

        let extinction_sample: ExtinctionSample = sampleExtinction(&atmosphere, altitude);

        transmittance *= exp(-abs(dt) * extinction_sample.extinction);
    }

    textureStore(transmittance_lut, texel_coord, vec4<f32>(transmittance, 1.0));
}
`,ze="rgba32float";class Me{constructor(e,t,a){r(this,"texture"),r(this,"view"),r(this,"pipeline"),r(this,"group0"),r(this,"group1"),this.texture=e.createTexture({size:t,dimension:"2d",format:ze,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING,label:"Transmittance LUT"}),this.view=this.texture.createView({label:"Transmittance LUT"});const n=e.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{access:"write-only",format:this.texture.format}}],label:"Transmittance LUT Group 0"}),i=e.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{}}],label:"Transmittance LUT Group 1"}),o=e.createShaderModule({code:Se,label:"Transmittance LUT"});this.pipeline=e.createComputePipeline({compute:{module:o,entryPoint:"computeTransmittance"},layout:e.createPipelineLayout({bindGroupLayouts:[n,i]}),label:"Transmittance LUT"}),this.group0=e.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:this.view}],label:"Transmittance LUT Group 0"}),this.group1=e.createBindGroup({layout:this.pipeline.getBindGroupLayout(1),entries:[{binding:0,resource:{buffer:a.buffer}}],label:"Transmittance LUT Group 1"})}record(e){const t=e.beginComputePass({label:"Transmittance LUT"});t.setPipeline(this.pipeline),t.setBindGroup(0,this.group0),t.setBindGroup(1,this.group1),t.dispatchWorkgroups(Math.ceil(this.texture.width/16),Math.ceil(this.texture.height/16)),t.end()}}const Ae=`// Sizeof(Atmosphere) = 8 * 16 = 128
// Alignof(Atmosphere) = 16
struct Atmosphere
{
    scattering_rayleigh_per_Mm : vec3<f32>,
    density_scale_rayleigh_Mm : f32,
    absorption_rayleigh_per_Mm : vec3<f32>,

    planet_radius_Mm : f32,

    scattering_mie_per_Mm : vec3<f32>,
    density_scale_mie_Mm : f32,
    absorption_mie_per_Mm : vec3<f32>,

    atmosphere_radius_Mm : f32,

    ground_albedo : vec3<f32>,
    padding0 : f32,

    scattering_ozone_per_Mm : vec3<f32>,
    padding1 : f32,

    absorption_ozone_per_Mm : vec3<f32>,
    padding2 : f32,

    padding3 : vec4<f32>,
}

// Sizeof(CelestialLight) = 2 * 16 = 32
// Alignof(CelestialLight) = 16
struct CelestialLight
{
    color: vec3<f32>,
    strength: f32,

	forward: vec3<f32>,
    angular_radius: f32,
}

// Sizeof(Camera) = 4 * 64 = 256
// Alignof(Camera) = 16
struct Camera
{
    inv_proj: mat4x4<f32>,

	inv_view: mat4x4<f32>,

	proj_view: mat4x4<f32>,

    position: vec4<f32>,
	forward: vec4<f32>,
	padding0: mat2x4<f32>,
}

// Sizeof(Time) = 16
// Alignof(Time) = 16
struct Time
{
	padding0: vec2<f32>,
	time_seconds: f32,
	delta_time_seconds: f32,
}

// All of these uniform values have identical lifetimes: they update before rendering for the frame, and are constant throughout
// Thus we store everything together to simplify the bindings
// Sizeof(GlobalUBO) = 672 + 16 = 688 (as of writing)
// Alignof(GlobalUBO) = 16
struct GlobalUBO
{
	camera: Camera,           // offsets
	ocean_camera: Camera,     // 0   + 256 = 256
	atmosphere: Atmosphere,   // 256 + 256 = 512
	light: CelestialLight,    // 512 + 128 = 640
	time: Time,               // 640 + 32  = 672
}

struct RaySphereHit
{
    hit: bool,
    t0: f32,
    t1: f32,
}

// t1 > t0, values can be negative. Function returns true even if the sphere is behind the ray.
// If this returns false, t0 and t1 are unchanged.
fn raySphereIntersection(
    ray_origin: vec3<f32>,
    ray_direction_normalized: vec3<f32>,
    radius: f32
) -> RaySphereHit
{
    // Method taken from "Precision Improvements for Ray/Sphere Intersection"
    // by Eric Haines, Johannes Günther, and Tomas Akenine-Möller
    //
    // The method includes tricks to reduce float point inaccuracy errors.

    let f: vec3<f32> = ray_origin;
    let d: vec3<f32> = ray_direction_normalized;
    let b: f32 = -1.0 * dot(f, d);
    let center_to_intersection_chord: vec3<f32> = f + b * d;
    let discriminant: f32 = radius * radius - dot(center_to_intersection_chord, center_to_intersection_chord);
    let c: f32 = dot(f, f) - radius * radius;

    var output : RaySphereHit;
    output.hit = false;
    output.t0 = 0.0;
    output.t1 = 0.0;

    if (discriminant < 0.0)
    {
        return output;
    }

    var q: f32 = b;
    if (b < 0.0)
    {
        q -= sqrt(discriminant);
    }
    else
    {
        q += sqrt(discriminant);
    }

    output.hit = true;
    output.t0 = c / q;
    output.t1 = q;

    if (output.t0 > output.t1)
    {
        let temp: f32 = output.t0;
        output.t0 = output.t1;
        output.t1 = temp;
    }

    return output;
}

struct RayPlaneHit {
	hit: bool,
	t: f32,
}

fn rayPlaneIntersection(
	ray_origin: vec3<f32>,
	ray_direction: vec3<f32>,
	plane_origin: vec3<f32>,
	plane_normal: vec3<f32>
) -> RayPlaneHit
{
	var result: RayPlaneHit;

	let perp = dot(plane_normal, ray_direction);
	result.t = dot(plane_origin - ray_origin, plane_normal) / perp;
	result.hit = (abs(perp) > 0.00001) && (result.t > 0.0);

	return result;
}


@group(0) @binding(0) var multiscatter_lut: texture_storage_2d<rgba32float, write>;
@group(0) @binding(1) var lut_sampler: sampler;
@group(0) @binding(2) var transmittance_lut: texture_2d<f32>;

@group(1) @binding(0) var<uniform> u_global: GlobalUBO;

// This file contains shared methods and definitions for raymarching the atmosphere and generating the lookup tables

const PI = 3.141592653589793;
const METERS_PER_MM = 1000000;


// Based on:
// "A Scalable and Production Ready Sky and Atmosphere Rendering Technique" by Sébastien Hillaire (2020)
// https://sebh.github.io/publications/egsr2020.pdf
//
// "Precomputed Atmospheric Scattering: a New Implementation" by Eric Bruneton (2017)
// https://ebruneton.github.io/precomputed_atmospheric_scattering

const AERIAL_PERSPECTIVE_MM_PER_SLICE = 0.001;

const ISOTROPIC_PHASE = 1.0 / (4.0 * PI);

// Transmittance LUT UV mapping based on Bruneton et al. 2017 method
// https://ebruneton.github.io/precomputed_atmospheric_scattering/atmosphere/functions.glsl#transmittance_lookup

fn safeSqrt(value: f32) -> f32 { return sqrt(max(value, 0.0)); }

// Squeeze in UV values by half a texel, so the bounds of our sampled function can be stored precisely at the edge of
// the texture
fn textureCoordFromUnitRange(value: f32, length: u32) -> f32
{
    return 0.5 / f32(length) + value * (1.0 - 1.0 / f32(length));
}
fn unitRangeFromTextureCoord(coord: f32 , length: u32) -> f32
{
    return (coord - 0.5 / f32(length)) / (1.0 - 1.0 / f32(length));
}

// Radius is the distance in Mm from the center of the planet, aka length of position vector
// Mu is the cosine of the angle between the position vector and the direction vector we want to sample the
// transmittance in
fn transmittanceLUT_RMu_to_UV(
    atmosphere: ptr<function,Atmosphere>,
    radius: f32,
    mu: f32,
	dimensions: vec2<u32>,
) -> vec2<f32>
{
    let atmosphere_radius_Mm_squared: f32 = (*atmosphere).atmosphere_radius_Mm * (*atmosphere).atmosphere_radius_Mm;
    let planet_radius_Mm_squared: f32 = (*atmosphere).planet_radius_Mm * (*atmosphere).planet_radius_Mm;

    // Ground level, horizontal ray distance to atmospheric boundary
    let h: f32 = safeSqrt(atmosphere_radius_Mm_squared - planet_radius_Mm_squared);

    // Distance to horizon, which is also the exact position the previous horizontal ray starts at
    let rho: f32 = safeSqrt(radius * radius - planet_radius_Mm_squared);

    // rho + H = distance to atmosphere boundary when looking at the horizon
    // It represents the distance along the biggest angle (most negative mu) that has nonzero transmittance,
    // since any lower and we intersect the planet
    // This angle changes as the radius does, so this mapping seeks to compress a different range of mu values
    // at any given radius value

    // Distance to edge of atmosphere, with both its min and max values at this given radius.
    let d: f32 = max(-radius * mu + safeSqrt(radius * radius * (mu * mu - 1.0) + atmosphere_radius_Mm_squared), 0.0);
    let d_min: f32 = (*atmosphere).atmosphere_radius_Mm - radius;
    let d_max: f32 = rho + h;

    let x_mu: f32 = (d - d_min) / (d_max - d_min);
    let x_radius: f32 = rho / h;

    return vec2<f32>(
        textureCoordFromUnitRange(x_mu, dimensions.x),
        textureCoordFromUnitRange(x_radius, dimensions.y)
    );
}

// Inverse of transmittanceLUT_RMu_to_UV
// Allocates more texture space to interesting rays near the horizon.
fn transmittanceLUT_UV_to_RMu(
    atmosphere: ptr<function,Atmosphere>,
    uv: vec2<f32>,
	dimensions: vec2<u32>,
) -> vec2<f32>
{
    let x_mu : f32 = unitRangeFromTextureCoord(uv.x, dimensions.x);
    let x_radius : f32 = unitRangeFromTextureCoord(uv.y, dimensions.y);

    let atmosphere_radius_Mm_squared : f32 = (*atmosphere).atmosphere_radius_Mm * (*atmosphere).atmosphere_radius_Mm;
    let planet_radius_Mm_squared : f32 = (*atmosphere).planet_radius_Mm * (*atmosphere).planet_radius_Mm;

    // Ground level, horizontal ray distance to atmospheric boundary
    let h : f32 = safeSqrt(atmosphere_radius_Mm_squared - planet_radius_Mm_squared);

    let rho : f32 = h * x_radius;

    let radius : f32 = safeSqrt(rho * rho + planet_radius_Mm_squared);

    let d_min : f32 = (*atmosphere).atmosphere_radius_Mm - radius;
    let d_max : f32 = rho + h;

    let d : f32 = (d_max - d_min) * x_mu + d_min;

    // This boundary condition is important depending on floating point errors
    // We don't need to check radius since it is bounded below by planet radius, and that shouldn't be near 0
    let D_EPSILON: f32 = 0.000000001;
    if (d < D_EPSILON)
    {
        // mu is ambiguous since we are at the very edge of the atmosphere, where no angle produces valid transmittance
        // values
        return vec2<f32>(radius, 1.0);
    }

    let mu : f32 = (h * h - rho * rho - d * d) / (2.0 * radius * d);
    // Equivalently, mu = (atmosphere_radius_Mm_squared - radius * radius - d*d) / (2.0 * radius * d)
    // But atmosphere_radius_Mm_squared and radius * radius are large, so this avoids floating point errors from adding
    // these to the much smaller d * d

    // This clamp is very important
    return vec2<f32>(radius, clamp(mu, -1.0, 1.0));
}

fn multiscatterLUT_RMu_to_UV(
    atmosphere: ptr<function,Atmosphere>,
    radius: f32,
    mu_light: f32,
	dimensions: vec2<u32>,
) -> vec2<f32>
{
    let u_unit: f32 = 0.5 + 0.5 * mu_light;
    let v_unit: f32 = clamp(
        (radius - (*atmosphere).planet_radius_Mm)
            / ((*atmosphere).atmosphere_radius_Mm - (*atmosphere).planet_radius_Mm),
        0.0, 1.0
    );

    return vec2<f32>(
        textureCoordFromUnitRange(u_unit, dimensions.x),
        textureCoordFromUnitRange(v_unit, dimensions.y)
    );
}

fn multiscatterLUT_UV_to_RMu(
    atmosphere: ptr<function,Atmosphere>,
    uv: vec2<f32>,
	dimensions: vec2<u32>,
) -> vec2<f32>
{
    let u_unit: f32 = unitRangeFromTextureCoord(uv.x, dimensions.x);
    let v_unit: f32 = unitRangeFromTextureCoord(uv.y, dimensions.y);

    let mu_light: f32 = 2.0 * (u_unit - 0.5);

    // The exact radius is not too critical, and multiscattering is sensitive to being out of range, so we squeeze into
    // a slightly smaller planet radius to ensure we are valid.
    let radius: f32 = mix(
        (*atmosphere).planet_radius_Mm * (1.0002),
        (*atmosphere).atmosphere_radius_Mm * (0.9998),
        v_unit
    );

    return vec2<f32>(radius, mu_light);
}

fn sampleMultiscatterLUT(
    lut: texture_2d<f32>,
    s: sampler,
    atmosphere: ptr<function,Atmosphere>,
    radius: f32,
    mu_light: f32
) -> vec3<f32>
{
    let uv: vec2<f32> = multiscatterLUT_RMu_to_UV(
		atmosphere,
		radius,
		mu_light,
		textureDimensions(lut)
	);

    return textureSampleLevel(lut, s, uv, 0.0).xyz;
}

fn sampleTransmittanceLUT_RadiusMu(
    lut: texture_2d<f32>,
    s: sampler,
    atmosphere: ptr<function,Atmosphere>,
    radius: f32,
    mu: f32
) -> vec3<f32>
{
    let uv: vec2<f32> = transmittanceLUT_RMu_to_UV(
		atmosphere,
		radius,
		mu,
		textureDimensions(lut)
	);

    let sample = textureSampleLevel(lut, s, uv, 0.0).xyz;

    return sample;
}

fn sampleTransmittanceLUT_Ray(
    lut: texture_2d<f32>,
    s: sampler,
    atmosphere: ptr<function,Atmosphere>,
    position: vec3<f32>,
    direction: vec3<f32>
) -> vec3<f32>
{
    let radius: f32 = length(position);
    let mu: f32 = (dot(position, direction) / (length(position) * length(direction)));

    return sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, radius, mu);

}

fn sampleTransmittanceLUT_Segment(
    lut: texture_2d<f32>,
    s: sampler,
    atmosphere: ptr<function,Atmosphere>,
    r_start: f32,
    mu_start: f32,
    d: f32,
    intersects_ground: bool
) -> vec3<f32>
{
    let r_end = clamp(
        safeSqrt(d * d + 2.0 * r_start * mu_start * d + r_start * r_start),
        (*atmosphere).planet_radius_Mm, (*atmosphere).atmosphere_radius_Mm
    );
    let mu_end = clamp((r_start * mu_start + d) / r_end, -1.0, 1.0);

    if(intersects_ground)
    {
        return min(
            sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, r_end, -mu_end)
            / sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, r_start, -mu_start),
            vec3<f32>(1.0)
        );
    }
    else
    {
        return min(
            sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, r_start, mu_start)
            / sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, r_end, mu_end),
            vec3<f32>(1.0)
        );
    }
}

struct ExtinctionSample
{
    scattering_rayleigh: vec3<f32>,
    scattering_mie: vec3<f32>,
    scattering_ozone: vec3<f32>,

    absorption_rayleigh: vec3<f32>,
    absorption_mie: vec3<f32>,
    absorption_ozone: vec3<f32>,

    // This parameter is redundant, but convenient.
    // It is the sum of all scattering values.
    scattering: vec3<f32>,

    extinction: vec3<f32>,
}

// Ensure altitude and density_scale are the same units.
fn densityExponential(altitude: f32, density_scale: f32) -> f32
{ return exp(-altitude / density_scale); }

// Hardcoded with values for ozone
fn densityTent(altitude_km: f32) -> f32
{ return max(0.0, 1.0 - abs(altitude_km - 25.0) / 15.0); }

// Returned units are per Mm. Take care that this function takes in altitude, NOT radius.
// radius := altitude + planetRadius
fn sampleExtinction(atmosphere: ptr<function,Atmosphere>, altitude_Mm: f32) -> ExtinctionSample
{
    let density_rayleigh: f32 = densityExponential(altitude_Mm, (*atmosphere).density_scale_rayleigh_Mm);
    let scattering_rayleigh: vec3<f32> = (*atmosphere).scattering_rayleigh_per_Mm * density_rayleigh;
    let absorption_rayleigh: vec3<f32> = (*atmosphere).absorption_rayleigh_per_Mm * density_rayleigh;

    let density_mie: f32 = densityExponential(altitude_Mm, (*atmosphere).density_scale_mie_Mm);
    let scattering_mie: vec3<f32> = (*atmosphere).scattering_mie_per_Mm * density_mie;
    let absorption_mie: vec3<f32> = (*atmosphere).absorption_mie_per_Mm * density_mie;

    let density_ozone: f32 = densityTent(altitude_Mm * 1000.0);
    let scattering_ozone: vec3<f32> = (*atmosphere).scattering_ozone_per_Mm * density_ozone;
    let absorption_ozone: vec3<f32> = (*atmosphere).absorption_ozone_per_Mm * density_ozone;

    var extinction_sample: ExtinctionSample;
    extinction_sample.scattering_rayleigh = scattering_rayleigh;
    extinction_sample.scattering_mie = scattering_mie;
    extinction_sample.scattering_ozone = scattering_ozone;

    extinction_sample.absorption_rayleigh = absorption_rayleigh;
    extinction_sample.absorption_mie = absorption_mie;
    extinction_sample.absorption_ozone = absorption_ozone;

    extinction_sample.scattering = scattering_rayleigh + scattering_mie + scattering_ozone;
    extinction_sample.extinction = extinction_sample.scattering + absorption_rayleigh + absorption_mie + absorption_ozone;

    return extinction_sample;
}

// Input cosine is the cosine of the angle between incident and outgoing scattering directions
fn phaseRayleigh(cosine: f32) -> f32
{
    let scalar: f32 = 3.0 / (16.0 * PI);
    let numerator: f32 = (1.0 + cosine * cosine);

    return scalar * numerator;
}

// Input cosine is the cosine of the angle between incident and outgoing scattering directions
// Input g is a value from -1 to 1 that controls the concentration of back vs forward scattering.
// Note: g = 0 reduces to the case of our rayleigh phase function
fn phaseMie(cosine: f32, g: f32) -> f32
{
    let scalar: f32 = 3.0 / (8.0 * PI);
    let numerator: f32 = (1.0 - g * g) * (1.0 + cosine * cosine);
    let denominator: f32 = (2.0 + g * g) * pow(1.0 + g * g - 2.0 * g * cosine, 1.5);
    return scalar * numerator / denominator;
}

// (float, float) 2d encoding of position + direction
struct RaymarchStep
{
    // Distance from origin, represents (0, radius, 0)
    radius: f32,
    // Cosine of the angle between (0, radius, 0) and implicit direction vector
    mu: f32,
    // Cosine of the angle with the direction to the light
    mu_light: f32,
    // Cosine of travel direction vector and light direction vector
    nu: f32,
};

// Returns 'start' moved 'step_distance' units along the implicit direction vector
// nu is the dot product between normalized direction and light direction vector
fn stepRadiusMu(
    start: RaymarchStep,
    step_distance: f32,
) -> RaymarchStep
{
    // Consider starting position (0, radius, 0)
    // and step vector of d * (sqrt(1 - mu * mu), mu, 0)

    // When computing changes in radii and mu, we use this method everywhere since norm is preserved upon rotation
    // and all cases of stepping can be reduced to the above two vectors

    var result: RaymarchStep;
    result.radius = safeSqrt(
        step_distance * step_distance + 2.0 * start.radius * start.mu * step_distance
            + start.radius * start.radius
    );
    result.mu = (start.radius * start.mu + step_distance) / result.radius;
    result.nu = start.nu;
    result.mu_light = (start.radius * start.mu_light + step_distance * start.nu) / result.radius;

    return result;
}

// Samples a segment, given in RMu coordinates
fn sampleTransmittanceLUT_RayMarchStep(
    lut: texture_2d<f32>,
    s: sampler,
    atmosphere: ptr<function,Atmosphere>,
    start: RaymarchStep,
    step_distance: f32
) -> vec3<f32>
{
    const STEP_DISTANCE_EPSILON = 0.0000001;
    if (step_distance < STEP_DISTANCE_EPSILON)
    {
        return vec3<f32>(1.0);
    }

    let end: RaymarchStep = stepRadiusMu(start, step_distance);

    var transmittance = vec3<f32>(0.0);
    if (start.mu > 0.0)
    {
        // Oriented up into atmosphere, so we directly sample LUT
        transmittance = sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, start.radius, start.mu)
                      / sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, end.radius, end.mu);
    }
    else
    {
        // Oriented down towards planet, so direct samples would be invalid
        // Instead, we flip the direction
        transmittance = sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, end.radius, -end.mu)
                      / sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, start.radius, -start.mu);
    }

    return clamp(transmittance, vec3<f32>(0.0), vec3<f32>(1.0));
}

// Contains methods and overloads for raymarching the atmosphere


/*
Flags explanation:

MULTISCATTERING
- read from a multiscattering texture when computing the in-scattering path integral
- Should be disabled when calculating multiscattering, and enabled otherwise

ISOTROPIC_PHASE
- Use an isotropic phase function when calculating out-scattering at each point
- Should be enabled when calculating multiscattering, and disabled otherwise

SCATTERING_NONLINEAR_SAMPLE
- Helps with small sample counts, by concentrating more samples closer to the ray origin

LIGHT_ILLUMINANCE_IS_ONE
- When computing luminance using a light, use 1 instead of the strength.
- This converts the returned luminance into a transfer value, which can be scaled by solar illuminance whenever

HIGH_SAMPLE_COUNT
- Whether to use a much higher sample count. Useful for one time renders, like the multiscattering LUT.

SAMPLE_PATH_TRANSMITTANCE
- Instead of accumulating transmittance along the raymarched path, sample the transmittance LUT.
- This adds ~ 6 * N + 2 samples of the transmittance LUT texture, where N is the sample count
- The results are subtly different, the transmittance LUT has precision issues when trying to sample intervals due to needing to multiply and divide by nearly zero floats when near the horizon
- By default this should be left off, we're raymarching extinction samples while integrating so sampling the transmittance LUT for the main path ends up being wasteful
*/

// Make sure to include atmosphere_common first

struct AtmosphereRaycastResult
{
	// Whether or not the raycast resulted in hitting the planet
	// This is important for sampling the transmittance lut
	intersects_ground: bool,

	// The origin of the raycast can be outside the atmosphere, inside the planet, etc so we get an interval
	t_min: f32,
	t_max: f32,
}

fn raycastAtmosphere(atmosphere: ptr<function, Atmosphere>, origin: vec3<f32>, direction: vec3<f32>) -> AtmosphereRaycastResult
{
	var result: AtmosphereRaycastResult;

    let planet_hit = raySphereIntersection(origin, direction, (*atmosphere).planet_radius_Mm);
    let atmosphere_hit = raySphereIntersection(origin, direction, (*atmosphere).atmosphere_radius_Mm);

    let inside_planet = planet_hit.hit && planet_hit.t0 < 0.0 && planet_hit.t1 > 0.0;
    let intersects_atmosphere = atmosphere_hit.hit && atmosphere_hit.t1 > 0.0;
    if (!intersects_atmosphere || inside_planet)
    {
		result.intersects_ground = true;
		result.t_min = 0.0;
		result.t_max = 0.0;
        return result;
    }

	// Optimistic, assume we don't hit planet and take the atmosphere_hit interval as-is
	result.t_min = max(atmosphere_hit.t0, 0.0);
	result.t_max = atmosphere_hit.t1;

    // Assuming the planet was hit, we have atmosphere_hit.t0 < planet_hit.t0 < planet_hit.t1 < atmosphere_hit.t1
    // If this assumption ever fails (such as 0 atmosphere?), this method needs to be reworked anyway to skip some
    // calculations

    if (planet_hit.hit && planet_hit.t0 > 0.0)
    {
		result.intersects_ground = true;

		// We assume the planet, if hit, is ALWAYS closer than the further edge of the atmosphere
		// So the next line is redundant and we use the simpler, uncommented form
		// result.t_max = min(planet_hit.t0, result.t_max)

        result.t_max = planet_hit.t0;
    }

	return result;
}

struct ScatteringResult
{
    luminance: vec3<f32>,
	transmittance: vec3<f32>,
    multiscattering_transfer: vec3<f32>,
}

// TODO: should compile-time optional parameters just be accessed by the global resource introduced before this file is included?

// Returns the computed single-scattered luminance from origin to origin + direction * sample_distance
//
// include_ground: Whether to include the luminance from the planet's virtual surface
//
// intersects_ground: Whether or not the provided origin/direction intersect the planet's surface.
// 	This could just be computed internally, but often the calling code is more informed and passing this avoids redundant calculations.
//
// If include_ground is TRUE, then sample_distance is assumed to go to the planet's surface.
// If include_ground is TRUE, intersects_ground must also be true for out-scattering of surface to be included.
// A misuse of 'include_ground', 'intersects_ground', and 'sample_distance' (such as the wrong distance) will lead to incorrect results.
fn computeLuminanceScatteringIntegral(
    atmosphere: ptr<function, Atmosphere>,
    light:  ptr<function, CelestialLight>,
    lut_sampler: sampler,
    transmittance_lut: texture_2d<f32>,
    origin: vec3<f32>,
    direction: vec3<f32>,
    include_ground: bool,
	intersects_ground: bool,
	sample_distance: f32,
) -> ScatteringResult
{
    var result: ScatteringResult;
    result.luminance = vec3<f32>(0.0);
	result.transmittance = vec3<f32>(1.0);
    result.multiscattering_transfer = vec3<f32>(0.0);

	if(sample_distance <= 0.0)
	{
		result.luminance = vec3<f32>(1.0, 1.0, 0.0);
		return result;
	}

    // This is the direction of the incoming light, which is the light we are interested in computing the magnitude of.
    // This is the parameter of the phase functions
	let incident_cosine = dot((*light).forward, -direction);

    let start_radius: f32 = length(origin);
    let start_mu: f32 = dot(origin, direction) / (length(origin) * length(direction));
    let start_mu_light: f32 = dot(origin, -(*light).forward) / (length(origin) * length((*light).forward));
    let nu: f32 = dot(-(*light).forward, direction) / (length((*light).forward) * length(direction));

    let origin_step = RaymarchStep(start_radius, start_mu, start_mu_light, nu);

	var transmittance_accumulated = vec3<f32>(1.0);

    // We estimate the integral in Equation (1) of Hillaire's paper.

    const SAMPLE_COUNT = 256.0;

	const T_SUBSTEP = 0.2;

	var t: f32 = 0.0;
	var d_t: f32 = 0.0;
    for (var s = 0.0; s < SAMPLE_COUNT; s += 1.0)
    {
		{
			// linear distribution
			let t_new = sample_distance * (s + T_SUBSTEP) / SAMPLE_COUNT;
			d_t = t_new - t;
			t = t_new;
		}

        let sample_step: RaymarchStep = stepRadiusMu(origin_step, t);

        let altitude = sample_step.radius - (*atmosphere).planet_radius_Mm;
        let extinction_sample: ExtinctionSample = sampleExtinction(atmosphere, altitude);

        // Terms of Equation (3) we assume to not vary over the path segment

	    let transmittance_to_t_begin = transmittance_accumulated;
		let transmittance_along_path = exp(-extinction_sample.extinction * d_t);
		transmittance_accumulated *= transmittance_along_path;

        let phase_times_scattering = extinction_sample.scattering * ISOTROPIC_PHASE;

        let multiscatter = vec3<f32>(0.0);

        var occlusion_planet: f32 = 0.0;
        {
            let horizon_sin = (*atmosphere).planet_radius_Mm / sample_step.radius;
            let horizon_cos = -safeSqrt(1.0 - horizon_sin * horizon_sin);

            occlusion_planet = f32(sample_step.mu_light < horizon_cos);
        }

        let transmittance_to_sun = sampleTransmittanceLUT_RadiusMu(transmittance_lut, lut_sampler, atmosphere, sample_step.radius, sample_step.mu_light);
        var shadowing = vec3<f32>(transmittance_to_sun * (1.0 - f32(occlusion_planet)));

        // Integrate transmittance := e^(-extinction(x) * ||x - begin||) from begin to end
        // This is a single interval of the integral in Equation (1) from Hillaire's paper,
        // with all constant terms factored out above
        let scattering_illuminance_integral = (vec3(1.0) - transmittance_along_path) / extinction_sample.extinction;

        result.luminance +=
            (phase_times_scattering * shadowing + multiscatter * extinction_sample.scattering)
            * scattering_illuminance_integral * transmittance_to_t_begin
            * 1.0;
        result.multiscattering_transfer += extinction_sample.scattering * scattering_illuminance_integral * transmittance_to_t_begin;
    }

    if (include_ground && intersects_ground)
    {
        let sample_step: RaymarchStep = stepRadiusMu(origin_step, sample_distance);

        let transmittance_to_surface = sampleTransmittanceLUT_RayMarchStep(transmittance_lut, lut_sampler, atmosphere, origin_step, sample_distance);
        let transmittance_to_sun = sampleTransmittanceLUT_RadiusMu(transmittance_lut, lut_sampler, atmosphere, sample_step.radius, sample_step.mu_light);

        let normal_dot_light = clamp(sample_step.mu_light, 0.0, 1.0);

        let diffuse = (*atmosphere).ground_albedo / PI;

        result.luminance +=
            transmittance_to_surface * transmittance_to_sun * normal_dot_light * diffuse
            * 1.0;
    }

	result.transmittance = transmittance_accumulated;

    return result;
}


// See 'atmosphere_common.inc.wgsl' for sources on what this method is based on.

// This shader builds a 2D multiscattering LUT, where each position stores the light from second and higher order
// scattering in a large neighborhood.
//
// We can reasonably assume 2nd order scattering is the same for a sufficiently large neighborhood around a sample.
// Thus, it is reasonable to assume 2nd order scattering is globally uniform from the view of a sample point. Hillaire
// notes a correlation between 2nd order scattering and all other orders, meaning we should be able to reasonably
// estimate all scattering orders from just the 2nd with a complexity of O(1), independent of the number of orders we
// wish to estimate.
//
// So:
// 1) We compute the second order scattered luminance L_2ndOrder at a point. This is computed with the same scattering
// rendering equation ((1) from Hillaire 2020), except we use an isotropic/uniform phase function. 2) We compute a
// multiscattering transfer factor (f_ms in Hillaire 2020). It is a global and unitless measure of the fraction of
// scattered energy reaching this point, and is only useful when assuming n-th order scattering reaching each point is
// uniform.
//
// Thus, L_(n+1)thOrder = f_ms * L_nthOrder, and we compute the total multiscattering luminance:
// L_2ndOrder + L_3rdOrder + L_4thOrder + ... = L_2ndOrder(1 + f_ms + f_ms ^ 2 + ...) = L_2ndOrder / (1 - f_ms)
// Care is taken to ensure that f_ms remains in the radius of convergence.
// This value can then be sampled in later integrals, to give us a better estimate of scattered luminance.
// Compare equations (1) and (11) in Hillaire.
//
// This table needs to only be recomputed if the atmosphere parameters change:
// it is global for the planet and independent of sun direction or view position.
// Note it DOES depend on the size of the sun
//
// We are able to store the multiscattering in a 2D map because the atmospheric medium (aerosols, ozone, gasses like
// nitrogen) is distributed based only on altitude and the planet is a sphere.
//
// For a given sample position x and light direction v (v towards light, NOT incident)
// u := 0.5 + 0.5 * cos(sunZenith)
// u = 0.5 + 0.5 * x.v / (|x| * |v|)
//
// Planet radius R_bot and atmosphere radius R_top
// v := clamp((|x| - R_bot)/(R_top - R_bot), 0, 1)

@compute @workgroup_size(16, 16, 1)
fn computeMultiscattering(@builtin(global_invocation_id) global_id: vec3<u32>) {
    let texel_coord = vec2<u32>(global_id.xy);
    let size = textureDimensions(multiscatter_lut);
    if texel_coord.x >= size.x || texel_coord.y >= size.y {
        return;
    }
    var atmosphere: Atmosphere = u_global.atmosphere;

    let offset = vec2<f32>(0.5, 0.5);
    let uv = (vec2<f32>(texel_coord) + offset) / vec2<f32>(size);

    let r_mu_light = multiscatterLUT_UV_to_RMu(&atmosphere, uv, textureDimensions(multiscatter_lut));

    let origin = vec3<f32>(0.0, r_mu_light.x, 0.0);

    let cos_sun_zenith: f32 = clamp(r_mu_light.y, -1.0, 1.0);
    let sin_sun_zenith: f32 = safeSqrt(1.0 - cos_sun_zenith * cos_sun_zenith);

    // SunZenith is relative to origin
    // As established, scattering is symmetrical around up axis, so just pick an azimuth = 0 for sun
    // PORTING NOTE: should y be negative? I'm getting flipped around with the coordinates
    let sun_direction = vec3<f32>(0.0, cos_sun_zenith, sin_sun_zenith);

    // TODO: remove this
    var light: CelestialLight = u_global.light;
    light.forward = -sun_direction;

    // Unmarked units are in megameters (10^6 meters or 1000 km)

    // We evaluate scattering luminance and transfer in all directions from our sample point.
    // So we sample a finite amount of uniformly distributed directions.

    var luminance_second_order = vec3<f32>(0.0);
    var multiscattering_transfer = vec3<f32>(0.0);

    // There is an accumulated constant bias in sample directions, but it is quite small and does not matter for the
    // small sample counts we shall be using
    // TODO: mitigate the artifacts that seem to occur due to how we are sampling the directions. For some reason
    // prime/odd numbers seem to avoid bands that occur at higher altitudes, that is independent of sun angle.
    const SAMPLE_COUNT_SQRT = 5u;
    const SAMPLE_COUNT = SAMPLE_COUNT_SQRT * SAMPLE_COUNT_SQRT;
    for (var sample_index = 0u; sample_index < SAMPLE_COUNT; sample_index++) {
        // 0, 0, 0, 0, 1, 1, 1, 1, ...
        let azimuthal_index = f32(sample_index) / f32(SAMPLE_COUNT_SQRT);

        // 0, 1, 2, 3, 0, 1, 2, 3, ...
        let zenith_index = f32(sample_index % SAMPLE_COUNT_SQRT) + 0.5;
        // let zenith_index = 0;

        let azimuth = 2.0 * PI * f32(azimuthal_index) / f32(SAMPLE_COUNT_SQRT);

        let cos_azimuth = cos(azimuth);
        let sin_azimuth = sin(azimuth);

        // sin_zenith is always positive since zenith ranges from 0 to pi
        let cos_zenith = clamp(
            2.0 * f32(zenith_index) / f32(SAMPLE_COUNT_SQRT) - 1.0,
            -1.0, 1.0
        );
        let sin_zenith = sqrt(1.0 - cos_zenith * cos_zenith);

        // Uniformly distributed on unit sphere direction
        let direction = vec3<f32>(sin_azimuth * sin_zenith, cos_zenith, cos_azimuth * sin_zenith);

		let atmosphere_raycast = raycastAtmosphere(&atmosphere, origin, direction);

        let include_ground = true;
        let scattering = computeLuminanceScatteringIntegral(
            &atmosphere,
            &light,
            lut_sampler,
            transmittance_lut,
			origin + direction * atmosphere_raycast.t_min,
			direction,
			include_ground,
			atmosphere_raycast.intersects_ground,
			atmosphere_raycast.t_max - atmosphere_raycast.t_min
        );
        // let scattering = ScatteringResult(vec3<f32>(0.0), vec3<f32>(0.0));

        // dw in equations (5) and (7) in Hillaire 2020
    	const SPHERE_SOLID_ANGLE = 4.0 * PI;
        let sample_solid_angle = SPHERE_SOLID_ANGLE / f32(SAMPLE_COUNT);

        // Equations (6) and (8)
        luminance_second_order += scattering.luminance * sample_solid_angle;
        multiscattering_transfer += scattering.multiscattering_transfer * sample_solid_angle;
    }

    // Equations (5) and (7)
    let inscattering = luminance_second_order * ISOTROPIC_PHASE;
    let scattering_transfer = multiscattering_transfer * ISOTROPIC_PHASE;

    // Geometric sum with r = multiscattering_transfer
    let infinite_scattering_transfer = vec3<f32>(1.0 / (1.0 - scattering_transfer));

    // Equation (10)
    let multiscattering = infinite_scattering_transfer * inscattering;

    textureStore(multiscatter_lut, texel_coord, vec4<f32>(multiscattering, 1.0));
}
`,V="rgba32float";class De{constructor(e,t,a,n,i){r(this,"texture"),r(this,"view"),r(this,"pipeline"),r(this,"group0"),r(this,"group1");const o="Multiscatter LUT";this.texture=e.createTexture({size:t,dimension:"2d",format:V,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING,label:"Multiscatter LUT"}),this.view=this.texture.createView({label:o});const s=e.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{access:"write-only",format:V}},{binding:1,visibility:GPUShaderStage.COMPUTE,sampler:{type:n?"filtering":"non-filtering"}},{binding:2,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:n?"float":"unfilterable-float"}}],label:"Multiscatter LUT Group 0"});this.group0=e.createBindGroup({layout:s,entries:[{binding:0,resource:this.view},{binding:1,resource:e.createSampler({magFilter:n?"linear":"nearest",minFilter:n?"linear":"nearest"})},{binding:2,resource:a}],label:"Multiscatter LUT Group 0"});const u=e.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{}}],label:"Multiscatter LUT Group 1"});this.group1=e.createBindGroup({layout:u,entries:[{binding:0,resource:{buffer:i.buffer}}],label:"Multiscatter LUT Group 1"});const c=e.createShaderModule({code:Ae,label:o});this.pipeline=e.createComputePipeline({compute:{module:c,entryPoint:"computeMultiscattering"},layout:e.createPipelineLayout({bindGroupLayouts:[s,u]}),label:"Multiscatter LUT"})}record(e){const t=e.beginComputePass({label:"Multiscatter LUT"});t.setPipeline(this.pipeline),t.setBindGroup(0,this.group0),t.setBindGroup(1,this.group1),t.dispatchWorkgroups(Math.ceil(this.texture.width/16),Math.ceil(this.texture.height/16)),t.end()}}const Pe=`// Sizeof(Atmosphere) = 8 * 16 = 128
// Alignof(Atmosphere) = 16
struct Atmosphere
{
    scattering_rayleigh_per_Mm : vec3<f32>,
    density_scale_rayleigh_Mm : f32,
    absorption_rayleigh_per_Mm : vec3<f32>,

    planet_radius_Mm : f32,

    scattering_mie_per_Mm : vec3<f32>,
    density_scale_mie_Mm : f32,
    absorption_mie_per_Mm : vec3<f32>,

    atmosphere_radius_Mm : f32,

    ground_albedo : vec3<f32>,
    padding0 : f32,

    scattering_ozone_per_Mm : vec3<f32>,
    padding1 : f32,

    absorption_ozone_per_Mm : vec3<f32>,
    padding2 : f32,

    padding3 : vec4<f32>,
}

// Sizeof(CelestialLight) = 2 * 16 = 32
// Alignof(CelestialLight) = 16
struct CelestialLight
{
    color: vec3<f32>,
    strength: f32,

	forward: vec3<f32>,
    angular_radius: f32,
}

// Sizeof(Camera) = 4 * 64 = 256
// Alignof(Camera) = 16
struct Camera
{
    inv_proj: mat4x4<f32>,

	inv_view: mat4x4<f32>,

	proj_view: mat4x4<f32>,

    position: vec4<f32>,
	forward: vec4<f32>,
	padding0: mat2x4<f32>,
}

// Sizeof(Time) = 16
// Alignof(Time) = 16
struct Time
{
	padding0: vec2<f32>,
	time_seconds: f32,
	delta_time_seconds: f32,
}

// All of these uniform values have identical lifetimes: they update before rendering for the frame, and are constant throughout
// Thus we store everything together to simplify the bindings
// Sizeof(GlobalUBO) = 672 + 16 = 688 (as of writing)
// Alignof(GlobalUBO) = 16
struct GlobalUBO
{
	camera: Camera,           // offsets
	ocean_camera: Camera,     // 0   + 256 = 256
	atmosphere: Atmosphere,   // 256 + 256 = 512
	light: CelestialLight,    // 512 + 128 = 640
	time: Time,               // 640 + 32  = 672
}


@group(0) @binding(0) var skyview_lut: texture_storage_2d<rgba32float, write>;
@group(0) @binding(1) var lut_sampler: sampler;
@group(0) @binding(2) var transmittance_lut: texture_2d<f32>;
@group(0) @binding(3) var multiscatter_lut: texture_2d<f32>;

@group(1) @binding(0) var<uniform> u_global: GlobalUBO;

// This file contains shared methods and definitions for raymarching the atmosphere and generating the lookup tables

const PI = 3.141592653589793;
const METERS_PER_MM = 1000000;


// Based on:
// "A Scalable and Production Ready Sky and Atmosphere Rendering Technique" by Sébastien Hillaire (2020)
// https://sebh.github.io/publications/egsr2020.pdf
//
// "Precomputed Atmospheric Scattering: a New Implementation" by Eric Bruneton (2017)
// https://ebruneton.github.io/precomputed_atmospheric_scattering

const AERIAL_PERSPECTIVE_MM_PER_SLICE = 0.001;

const ISOTROPIC_PHASE = 1.0 / (4.0 * PI);

// Transmittance LUT UV mapping based on Bruneton et al. 2017 method
// https://ebruneton.github.io/precomputed_atmospheric_scattering/atmosphere/functions.glsl#transmittance_lookup

fn safeSqrt(value: f32) -> f32 { return sqrt(max(value, 0.0)); }

// Squeeze in UV values by half a texel, so the bounds of our sampled function can be stored precisely at the edge of
// the texture
fn textureCoordFromUnitRange(value: f32, length: u32) -> f32
{
    return 0.5 / f32(length) + value * (1.0 - 1.0 / f32(length));
}
fn unitRangeFromTextureCoord(coord: f32 , length: u32) -> f32
{
    return (coord - 0.5 / f32(length)) / (1.0 - 1.0 / f32(length));
}

// Radius is the distance in Mm from the center of the planet, aka length of position vector
// Mu is the cosine of the angle between the position vector and the direction vector we want to sample the
// transmittance in
fn transmittanceLUT_RMu_to_UV(
    atmosphere: ptr<function,Atmosphere>,
    radius: f32,
    mu: f32,
	dimensions: vec2<u32>,
) -> vec2<f32>
{
    let atmosphere_radius_Mm_squared: f32 = (*atmosphere).atmosphere_radius_Mm * (*atmosphere).atmosphere_radius_Mm;
    let planet_radius_Mm_squared: f32 = (*atmosphere).planet_radius_Mm * (*atmosphere).planet_radius_Mm;

    // Ground level, horizontal ray distance to atmospheric boundary
    let h: f32 = safeSqrt(atmosphere_radius_Mm_squared - planet_radius_Mm_squared);

    // Distance to horizon, which is also the exact position the previous horizontal ray starts at
    let rho: f32 = safeSqrt(radius * radius - planet_radius_Mm_squared);

    // rho + H = distance to atmosphere boundary when looking at the horizon
    // It represents the distance along the biggest angle (most negative mu) that has nonzero transmittance,
    // since any lower and we intersect the planet
    // This angle changes as the radius does, so this mapping seeks to compress a different range of mu values
    // at any given radius value

    // Distance to edge of atmosphere, with both its min and max values at this given radius.
    let d: f32 = max(-radius * mu + safeSqrt(radius * radius * (mu * mu - 1.0) + atmosphere_radius_Mm_squared), 0.0);
    let d_min: f32 = (*atmosphere).atmosphere_radius_Mm - radius;
    let d_max: f32 = rho + h;

    let x_mu: f32 = (d - d_min) / (d_max - d_min);
    let x_radius: f32 = rho / h;

    return vec2<f32>(
        textureCoordFromUnitRange(x_mu, dimensions.x),
        textureCoordFromUnitRange(x_radius, dimensions.y)
    );
}

// Inverse of transmittanceLUT_RMu_to_UV
// Allocates more texture space to interesting rays near the horizon.
fn transmittanceLUT_UV_to_RMu(
    atmosphere: ptr<function,Atmosphere>,
    uv: vec2<f32>,
	dimensions: vec2<u32>,
) -> vec2<f32>
{
    let x_mu : f32 = unitRangeFromTextureCoord(uv.x, dimensions.x);
    let x_radius : f32 = unitRangeFromTextureCoord(uv.y, dimensions.y);

    let atmosphere_radius_Mm_squared : f32 = (*atmosphere).atmosphere_radius_Mm * (*atmosphere).atmosphere_radius_Mm;
    let planet_radius_Mm_squared : f32 = (*atmosphere).planet_radius_Mm * (*atmosphere).planet_radius_Mm;

    // Ground level, horizontal ray distance to atmospheric boundary
    let h : f32 = safeSqrt(atmosphere_radius_Mm_squared - planet_radius_Mm_squared);

    let rho : f32 = h * x_radius;

    let radius : f32 = safeSqrt(rho * rho + planet_radius_Mm_squared);

    let d_min : f32 = (*atmosphere).atmosphere_radius_Mm - radius;
    let d_max : f32 = rho + h;

    let d : f32 = (d_max - d_min) * x_mu + d_min;

    // This boundary condition is important depending on floating point errors
    // We don't need to check radius since it is bounded below by planet radius, and that shouldn't be near 0
    let D_EPSILON: f32 = 0.000000001;
    if (d < D_EPSILON)
    {
        // mu is ambiguous since we are at the very edge of the atmosphere, where no angle produces valid transmittance
        // values
        return vec2<f32>(radius, 1.0);
    }

    let mu : f32 = (h * h - rho * rho - d * d) / (2.0 * radius * d);
    // Equivalently, mu = (atmosphere_radius_Mm_squared - radius * radius - d*d) / (2.0 * radius * d)
    // But atmosphere_radius_Mm_squared and radius * radius are large, so this avoids floating point errors from adding
    // these to the much smaller d * d

    // This clamp is very important
    return vec2<f32>(radius, clamp(mu, -1.0, 1.0));
}

fn multiscatterLUT_RMu_to_UV(
    atmosphere: ptr<function,Atmosphere>,
    radius: f32,
    mu_light: f32,
	dimensions: vec2<u32>,
) -> vec2<f32>
{
    let u_unit: f32 = 0.5 + 0.5 * mu_light;
    let v_unit: f32 = clamp(
        (radius - (*atmosphere).planet_radius_Mm)
            / ((*atmosphere).atmosphere_radius_Mm - (*atmosphere).planet_radius_Mm),
        0.0, 1.0
    );

    return vec2<f32>(
        textureCoordFromUnitRange(u_unit, dimensions.x),
        textureCoordFromUnitRange(v_unit, dimensions.y)
    );
}

fn multiscatterLUT_UV_to_RMu(
    atmosphere: ptr<function,Atmosphere>,
    uv: vec2<f32>,
	dimensions: vec2<u32>,
) -> vec2<f32>
{
    let u_unit: f32 = unitRangeFromTextureCoord(uv.x, dimensions.x);
    let v_unit: f32 = unitRangeFromTextureCoord(uv.y, dimensions.y);

    let mu_light: f32 = 2.0 * (u_unit - 0.5);

    // The exact radius is not too critical, and multiscattering is sensitive to being out of range, so we squeeze into
    // a slightly smaller planet radius to ensure we are valid.
    let radius: f32 = mix(
        (*atmosphere).planet_radius_Mm * (1.0002),
        (*atmosphere).atmosphere_radius_Mm * (0.9998),
        v_unit
    );

    return vec2<f32>(radius, mu_light);
}

fn sampleMultiscatterLUT(
    lut: texture_2d<f32>,
    s: sampler,
    atmosphere: ptr<function,Atmosphere>,
    radius: f32,
    mu_light: f32
) -> vec3<f32>
{
    let uv: vec2<f32> = multiscatterLUT_RMu_to_UV(
		atmosphere,
		radius,
		mu_light,
		textureDimensions(lut)
	);

    return textureSampleLevel(lut, s, uv, 0.0).xyz;
}

fn sampleTransmittanceLUT_RadiusMu(
    lut: texture_2d<f32>,
    s: sampler,
    atmosphere: ptr<function,Atmosphere>,
    radius: f32,
    mu: f32
) -> vec3<f32>
{
    let uv: vec2<f32> = transmittanceLUT_RMu_to_UV(
		atmosphere,
		radius,
		mu,
		textureDimensions(lut)
	);

    let sample = textureSampleLevel(lut, s, uv, 0.0).xyz;

    return sample;
}

fn sampleTransmittanceLUT_Ray(
    lut: texture_2d<f32>,
    s: sampler,
    atmosphere: ptr<function,Atmosphere>,
    position: vec3<f32>,
    direction: vec3<f32>
) -> vec3<f32>
{
    let radius: f32 = length(position);
    let mu: f32 = (dot(position, direction) / (length(position) * length(direction)));

    return sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, radius, mu);

}

fn sampleTransmittanceLUT_Segment(
    lut: texture_2d<f32>,
    s: sampler,
    atmosphere: ptr<function,Atmosphere>,
    r_start: f32,
    mu_start: f32,
    d: f32,
    intersects_ground: bool
) -> vec3<f32>
{
    let r_end = clamp(
        safeSqrt(d * d + 2.0 * r_start * mu_start * d + r_start * r_start),
        (*atmosphere).planet_radius_Mm, (*atmosphere).atmosphere_radius_Mm
    );
    let mu_end = clamp((r_start * mu_start + d) / r_end, -1.0, 1.0);

    if(intersects_ground)
    {
        return min(
            sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, r_end, -mu_end)
            / sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, r_start, -mu_start),
            vec3<f32>(1.0)
        );
    }
    else
    {
        return min(
            sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, r_start, mu_start)
            / sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, r_end, mu_end),
            vec3<f32>(1.0)
        );
    }
}

struct ExtinctionSample
{
    scattering_rayleigh: vec3<f32>,
    scattering_mie: vec3<f32>,
    scattering_ozone: vec3<f32>,

    absorption_rayleigh: vec3<f32>,
    absorption_mie: vec3<f32>,
    absorption_ozone: vec3<f32>,

    // This parameter is redundant, but convenient.
    // It is the sum of all scattering values.
    scattering: vec3<f32>,

    extinction: vec3<f32>,
}

// Ensure altitude and density_scale are the same units.
fn densityExponential(altitude: f32, density_scale: f32) -> f32
{ return exp(-altitude / density_scale); }

// Hardcoded with values for ozone
fn densityTent(altitude_km: f32) -> f32
{ return max(0.0, 1.0 - abs(altitude_km - 25.0) / 15.0); }

// Returned units are per Mm. Take care that this function takes in altitude, NOT radius.
// radius := altitude + planetRadius
fn sampleExtinction(atmosphere: ptr<function,Atmosphere>, altitude_Mm: f32) -> ExtinctionSample
{
    let density_rayleigh: f32 = densityExponential(altitude_Mm, (*atmosphere).density_scale_rayleigh_Mm);
    let scattering_rayleigh: vec3<f32> = (*atmosphere).scattering_rayleigh_per_Mm * density_rayleigh;
    let absorption_rayleigh: vec3<f32> = (*atmosphere).absorption_rayleigh_per_Mm * density_rayleigh;

    let density_mie: f32 = densityExponential(altitude_Mm, (*atmosphere).density_scale_mie_Mm);
    let scattering_mie: vec3<f32> = (*atmosphere).scattering_mie_per_Mm * density_mie;
    let absorption_mie: vec3<f32> = (*atmosphere).absorption_mie_per_Mm * density_mie;

    let density_ozone: f32 = densityTent(altitude_Mm * 1000.0);
    let scattering_ozone: vec3<f32> = (*atmosphere).scattering_ozone_per_Mm * density_ozone;
    let absorption_ozone: vec3<f32> = (*atmosphere).absorption_ozone_per_Mm * density_ozone;

    var extinction_sample: ExtinctionSample;
    extinction_sample.scattering_rayleigh = scattering_rayleigh;
    extinction_sample.scattering_mie = scattering_mie;
    extinction_sample.scattering_ozone = scattering_ozone;

    extinction_sample.absorption_rayleigh = absorption_rayleigh;
    extinction_sample.absorption_mie = absorption_mie;
    extinction_sample.absorption_ozone = absorption_ozone;

    extinction_sample.scattering = scattering_rayleigh + scattering_mie + scattering_ozone;
    extinction_sample.extinction = extinction_sample.scattering + absorption_rayleigh + absorption_mie + absorption_ozone;

    return extinction_sample;
}

// Input cosine is the cosine of the angle between incident and outgoing scattering directions
fn phaseRayleigh(cosine: f32) -> f32
{
    let scalar: f32 = 3.0 / (16.0 * PI);
    let numerator: f32 = (1.0 + cosine * cosine);

    return scalar * numerator;
}

// Input cosine is the cosine of the angle between incident and outgoing scattering directions
// Input g is a value from -1 to 1 that controls the concentration of back vs forward scattering.
// Note: g = 0 reduces to the case of our rayleigh phase function
fn phaseMie(cosine: f32, g: f32) -> f32
{
    let scalar: f32 = 3.0 / (8.0 * PI);
    let numerator: f32 = (1.0 - g * g) * (1.0 + cosine * cosine);
    let denominator: f32 = (2.0 + g * g) * pow(1.0 + g * g - 2.0 * g * cosine, 1.5);
    return scalar * numerator / denominator;
}

// (float, float) 2d encoding of position + direction
struct RaymarchStep
{
    // Distance from origin, represents (0, radius, 0)
    radius: f32,
    // Cosine of the angle between (0, radius, 0) and implicit direction vector
    mu: f32,
    // Cosine of the angle with the direction to the light
    mu_light: f32,
    // Cosine of travel direction vector and light direction vector
    nu: f32,
};

// Returns 'start' moved 'step_distance' units along the implicit direction vector
// nu is the dot product between normalized direction and light direction vector
fn stepRadiusMu(
    start: RaymarchStep,
    step_distance: f32,
) -> RaymarchStep
{
    // Consider starting position (0, radius, 0)
    // and step vector of d * (sqrt(1 - mu * mu), mu, 0)

    // When computing changes in radii and mu, we use this method everywhere since norm is preserved upon rotation
    // and all cases of stepping can be reduced to the above two vectors

    var result: RaymarchStep;
    result.radius = safeSqrt(
        step_distance * step_distance + 2.0 * start.radius * start.mu * step_distance
            + start.radius * start.radius
    );
    result.mu = (start.radius * start.mu + step_distance) / result.radius;
    result.nu = start.nu;
    result.mu_light = (start.radius * start.mu_light + step_distance * start.nu) / result.radius;

    return result;
}

// Samples a segment, given in RMu coordinates
fn sampleTransmittanceLUT_RayMarchStep(
    lut: texture_2d<f32>,
    s: sampler,
    atmosphere: ptr<function,Atmosphere>,
    start: RaymarchStep,
    step_distance: f32
) -> vec3<f32>
{
    const STEP_DISTANCE_EPSILON = 0.0000001;
    if (step_distance < STEP_DISTANCE_EPSILON)
    {
        return vec3<f32>(1.0);
    }

    let end: RaymarchStep = stepRadiusMu(start, step_distance);

    var transmittance = vec3<f32>(0.0);
    if (start.mu > 0.0)
    {
        // Oriented up into atmosphere, so we directly sample LUT
        transmittance = sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, start.radius, start.mu)
                      / sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, end.radius, end.mu);
    }
    else
    {
        // Oriented down towards planet, so direct samples would be invalid
        // Instead, we flip the direction
        transmittance = sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, end.radius, -end.mu)
                      / sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, start.radius, -start.mu);
    }

    return clamp(transmittance, vec3<f32>(0.0), vec3<f32>(1.0));
}

struct RaySphereHit
{
    hit: bool,
    t0: f32,
    t1: f32,
}

// t1 > t0, values can be negative. Function returns true even if the sphere is behind the ray.
// If this returns false, t0 and t1 are unchanged.
fn raySphereIntersection(
    ray_origin: vec3<f32>,
    ray_direction_normalized: vec3<f32>,
    radius: f32
) -> RaySphereHit
{
    // Method taken from "Precision Improvements for Ray/Sphere Intersection"
    // by Eric Haines, Johannes Günther, and Tomas Akenine-Möller
    //
    // The method includes tricks to reduce float point inaccuracy errors.

    let f: vec3<f32> = ray_origin;
    let d: vec3<f32> = ray_direction_normalized;
    let b: f32 = -1.0 * dot(f, d);
    let center_to_intersection_chord: vec3<f32> = f + b * d;
    let discriminant: f32 = radius * radius - dot(center_to_intersection_chord, center_to_intersection_chord);
    let c: f32 = dot(f, f) - radius * radius;

    var output : RaySphereHit;
    output.hit = false;
    output.t0 = 0.0;
    output.t1 = 0.0;

    if (discriminant < 0.0)
    {
        return output;
    }

    var q: f32 = b;
    if (b < 0.0)
    {
        q -= sqrt(discriminant);
    }
    else
    {
        q += sqrt(discriminant);
    }

    output.hit = true;
    output.t0 = c / q;
    output.t1 = q;

    if (output.t0 > output.t1)
    {
        let temp: f32 = output.t0;
        output.t0 = output.t1;
        output.t1 = temp;
    }

    return output;
}

struct RayPlaneHit {
	hit: bool,
	t: f32,
}

fn rayPlaneIntersection(
	ray_origin: vec3<f32>,
	ray_direction: vec3<f32>,
	plane_origin: vec3<f32>,
	plane_normal: vec3<f32>
) -> RayPlaneHit
{
	var result: RayPlaneHit;

	let perp = dot(plane_normal, ray_direction);
	result.t = dot(plane_origin - ray_origin, plane_normal) / perp;
	result.hit = (abs(perp) > 0.00001) && (result.t > 0.0);

	return result;
}

// Contains methods and overloads for raymarching the atmosphere


/*
Flags explanation:

MULTISCATTERING
- read from a multiscattering texture when computing the in-scattering path integral
- Should be disabled when calculating multiscattering, and enabled otherwise

ISOTROPIC_PHASE
- Use an isotropic phase function when calculating out-scattering at each point
- Should be enabled when calculating multiscattering, and disabled otherwise

SCATTERING_NONLINEAR_SAMPLE
- Helps with small sample counts, by concentrating more samples closer to the ray origin

LIGHT_ILLUMINANCE_IS_ONE
- When computing luminance using a light, use 1 instead of the strength.
- This converts the returned luminance into a transfer value, which can be scaled by solar illuminance whenever

HIGH_SAMPLE_COUNT
- Whether to use a much higher sample count. Useful for one time renders, like the multiscattering LUT.

SAMPLE_PATH_TRANSMITTANCE
- Instead of accumulating transmittance along the raymarched path, sample the transmittance LUT.
- This adds ~ 6 * N + 2 samples of the transmittance LUT texture, where N is the sample count
- The results are subtly different, the transmittance LUT has precision issues when trying to sample intervals due to needing to multiply and divide by nearly zero floats when near the horizon
- By default this should be left off, we're raymarching extinction samples while integrating so sampling the transmittance LUT for the main path ends up being wasteful
*/

// Make sure to include atmosphere_common first

struct AtmosphereRaycastResult
{
	// Whether or not the raycast resulted in hitting the planet
	// This is important for sampling the transmittance lut
	intersects_ground: bool,

	// The origin of the raycast can be outside the atmosphere, inside the planet, etc so we get an interval
	t_min: f32,
	t_max: f32,
}

fn raycastAtmosphere(atmosphere: ptr<function, Atmosphere>, origin: vec3<f32>, direction: vec3<f32>) -> AtmosphereRaycastResult
{
	var result: AtmosphereRaycastResult;

    let planet_hit = raySphereIntersection(origin, direction, (*atmosphere).planet_radius_Mm);
    let atmosphere_hit = raySphereIntersection(origin, direction, (*atmosphere).atmosphere_radius_Mm);

    let inside_planet = planet_hit.hit && planet_hit.t0 < 0.0 && planet_hit.t1 > 0.0;
    let intersects_atmosphere = atmosphere_hit.hit && atmosphere_hit.t1 > 0.0;
    if (!intersects_atmosphere || inside_planet)
    {
		result.intersects_ground = true;
		result.t_min = 0.0;
		result.t_max = 0.0;
        return result;
    }

	// Optimistic, assume we don't hit planet and take the atmosphere_hit interval as-is
	result.t_min = max(atmosphere_hit.t0, 0.0);
	result.t_max = atmosphere_hit.t1;

    // Assuming the planet was hit, we have atmosphere_hit.t0 < planet_hit.t0 < planet_hit.t1 < atmosphere_hit.t1
    // If this assumption ever fails (such as 0 atmosphere?), this method needs to be reworked anyway to skip some
    // calculations

    if (planet_hit.hit && planet_hit.t0 > 0.0)
    {
		result.intersects_ground = true;

		// We assume the planet, if hit, is ALWAYS closer than the further edge of the atmosphere
		// So the next line is redundant and we use the simpler, uncommented form
		// result.t_max = min(planet_hit.t0, result.t_max)

        result.t_max = planet_hit.t0;
    }

	return result;
}

struct ScatteringResult
{
    luminance: vec3<f32>,
	transmittance: vec3<f32>,
    multiscattering_transfer: vec3<f32>,
}

// TODO: should compile-time optional parameters just be accessed by the global resource introduced before this file is included?

// Returns the computed single-scattered luminance from origin to origin + direction * sample_distance
//
// include_ground: Whether to include the luminance from the planet's virtual surface
//
// intersects_ground: Whether or not the provided origin/direction intersect the planet's surface.
// 	This could just be computed internally, but often the calling code is more informed and passing this avoids redundant calculations.
//
// If include_ground is TRUE, then sample_distance is assumed to go to the planet's surface.
// If include_ground is TRUE, intersects_ground must also be true for out-scattering of surface to be included.
// A misuse of 'include_ground', 'intersects_ground', and 'sample_distance' (such as the wrong distance) will lead to incorrect results.
fn computeLuminanceScatteringIntegral(
    atmosphere: ptr<function, Atmosphere>,
    light:  ptr<function, CelestialLight>,
    lut_sampler: sampler,
    transmittance_lut: texture_2d<f32>,
    multiscatter_lut: texture_2d<f32>,
    origin: vec3<f32>,
    direction: vec3<f32>,
    include_ground: bool,
	intersects_ground: bool,
	sample_distance: f32,
) -> ScatteringResult
{
    var result: ScatteringResult;
    result.luminance = vec3<f32>(0.0);
	result.transmittance = vec3<f32>(1.0);
    result.multiscattering_transfer = vec3<f32>(0.0);

	if(sample_distance <= 0.0)
	{
		result.luminance = vec3<f32>(1.0, 1.0, 0.0);
		return result;
	}

    // This is the direction of the incoming light, which is the light we are interested in computing the magnitude of.
    // This is the parameter of the phase functions
	let incident_cosine = dot((*light).forward, -direction);

    let start_radius: f32 = length(origin);
    let start_mu: f32 = dot(origin, direction) / (length(origin) * length(direction));
    let start_mu_light: f32 = dot(origin, -(*light).forward) / (length(origin) * length((*light).forward));
    let nu: f32 = dot(-(*light).forward, direction) / (length((*light).forward) * length(direction));

    let origin_step = RaymarchStep(start_radius, start_mu, start_mu_light, nu);

	var transmittance_accumulated = vec3<f32>(1.0);

    // We estimate the integral in Equation (1) of Hillaire's paper.

    const SAMPLE_COUNT = 64.0;

	const T_SUBSTEP = 0.4;

	var t: f32 = 0.0;
	var d_t: f32 = 0.0;
    for (var s = 0.0; s < SAMPLE_COUNT; s += 1.0)
    {
		{
			// quadratic distribution
        	var t_begin = s / SAMPLE_COUNT;
        	var t_end = (s + 1.0) / SAMPLE_COUNT;
			t_begin = sample_distance * t_begin * t_begin;
			t_end = sample_distance * t_end * t_end;
			d_t = t_end - t_begin;
			t = mix(t_begin, t_end, T_SUBSTEP);
		}

        let sample_step: RaymarchStep = stepRadiusMu(origin_step, t);

        let altitude = sample_step.radius - (*atmosphere).planet_radius_Mm;
        let extinction_sample: ExtinctionSample = sampleExtinction(atmosphere, altitude);

        // Terms of Equation (3) we assume to not vary over the path segment

	    let transmittance_to_t_begin = transmittance_accumulated;
		let transmittance_along_path = exp(-extinction_sample.extinction * d_t);
		transmittance_accumulated *= transmittance_along_path;

        // Ozone does not scatter light normally, so we arbitrarily use rayleigh's phase function in case ozone's scattering
        // coefficient is nonzero
        let phase_times_scattering: vec3<f32> =
            extinction_sample.scattering_rayleigh * phaseRayleigh(incident_cosine)
            + extinction_sample.scattering_mie * phaseMie(incident_cosine, 0.8)
            + extinction_sample.scattering_ozone * phaseRayleigh(incident_cosine);

        let multiscatter = sampleMultiscatterLUT(multiscatter_lut, lut_sampler, atmosphere, sample_step.radius, sample_step.mu_light);

        var occlusion_planet: f32 = 0.0;
        {
            let horizon_sin = (*atmosphere).planet_radius_Mm / sample_step.radius;
            let horizon_cos = -safeSqrt(1.0 - horizon_sin * horizon_sin);

            occlusion_planet = f32(sample_step.mu_light < horizon_cos);
        }

        let transmittance_to_sun = sampleTransmittanceLUT_RadiusMu(transmittance_lut, lut_sampler, atmosphere, sample_step.radius, sample_step.mu_light);
        var shadowing = vec3<f32>(transmittance_to_sun * (1.0 - f32(occlusion_planet)));

        // Integrate transmittance := e^(-extinction(x) * ||x - begin||) from begin to end
        // This is a single interval of the integral in Equation (1) from Hillaire's paper,
        // with all constant terms factored out above
        let scattering_illuminance_integral = (vec3(1.0) - transmittance_along_path) / extinction_sample.extinction;

        result.luminance +=
            (phase_times_scattering * shadowing + multiscatter * extinction_sample.scattering)
            * scattering_illuminance_integral * transmittance_to_t_begin
            * 1.0;
        result.multiscattering_transfer += extinction_sample.scattering * scattering_illuminance_integral * transmittance_to_t_begin;
    }

    if (include_ground && intersects_ground)
    {
        let sample_step: RaymarchStep = stepRadiusMu(origin_step, sample_distance);

        let transmittance_to_surface = sampleTransmittanceLUT_RayMarchStep(transmittance_lut, lut_sampler, atmosphere, origin_step, sample_distance);
        let transmittance_to_sun = sampleTransmittanceLUT_RadiusMu(transmittance_lut, lut_sampler, atmosphere, sample_step.radius, sample_step.mu_light);

        let normal_dot_light = clamp(sample_step.mu_light, 0.0, 1.0);

        let diffuse = (*atmosphere).ground_albedo / PI;

        result.luminance +=
            transmittance_to_surface * transmittance_to_sun * normal_dot_light * diffuse
            * 1.0;
    }

	result.transmittance = transmittance_accumulated;

    return result;
}


// All units are Mm/megameters (10^6 meters) unless marked km/kilometers (10^3 meters)

// See 'atmosphere_common.inc.wgsl' for sources on what this method is based on.

// Skyview LUT
//
// This shader builds a 2D sky-view LUT, which is a lattitude-longitude map of the sky with only the planet's surface shadowing.
// This map contains the total luminance from in-scattering due to atmospheric effects.
//
// The purpose of this map is to provide a fast-path when rendering the sky. This texture can be sampled instead of
// performing the calculations. Calculations are (probably) still necessary when geometry intersects the view ray.
//
// This map only depends on altitude, and allows the camera to be freely rotated
// without requiring recomputation. There is even an acceptable degree of movement
// by the camera within a range of the provided altitude.
//
// Parameterized as follows:
// u := azimuth angle
// u varies from -pi to pi
//
// v := solar elevation
// v varies from -pi/2 to pi/2

fn uv_to_azimuthElevation(
    atmosphere: ptr<function, Atmosphere>,
    radius: f32,
    uv: vec2<f32>,
) -> vec2<f32>
{
    // Horizon zenith cannot be less than PI/2, so we use sin and assume it is a quadrant 2 angle
    let sin_horizon_zenith = (*atmosphere).planet_radius_Mm / radius;
    let horizon_zenith = PI - asin(sin_horizon_zenith);

    let azimuth = 2.0 * PI * (uv.x - 0.5);

    var view_zenith: f32;

    if (uv.y < 0.5)
    {
        let unnormalized_v = 2.0 * uv.y - 1.0;
        let angle_fraction = 1.0 - unnormalized_v * unnormalized_v;

        view_zenith = angle_fraction * horizon_zenith;
    }
    else
    {
        let unnormalized_v = 2.0 * uv.y - 1.0;
        let angle_fraction = unnormalized_v * unnormalized_v;

        view_zenith = (PI - horizon_zenith) * angle_fraction + horizon_zenith;
    }

    let elevation = -(view_zenith - PI / 2.0);

    return vec2<f32>(azimuth, elevation);
}

@compute @workgroup_size(16,16,1)
fn computeSkyViewLuminance(@builtin(global_invocation_id) global_id : vec3<u32>,)
{
    let texel_coord = vec2<u32>(global_id.xy);
    let size = textureDimensions(skyview_lut);
    if(texel_coord.x >= size.x || texel_coord.y >= size.y)
    {
        return;
    }
    var atmosphere: Atmosphere = u_global.atmosphere;
    var light: CelestialLight = u_global.light;

    let offset = vec2<f32>(0.5, 0.5);
    let uv = (vec2<f32>(texel_coord) + offset) / vec2<f32>(size);

    let origin = vec3<f32>(0.0, atmosphere.planet_radius_Mm, 0.0) + u_global.camera.position.xyz / METERS_PER_MM;

    let azimuth_elevation = uv_to_azimuthElevation(
        &atmosphere,
        length(origin),
        uv
    );

    let azimuth = azimuth_elevation.x;
    let elevation = azimuth_elevation.y;

    let direction = normalize(vec3(
        sin(azimuth) * cos(elevation),
        sin(elevation),
        cos(azimuth) * cos(elevation)
    ));

	let atmosphere_raycast = raycastAtmosphere(&atmosphere, origin, direction);

    let include_ground = false;
    let luminance = computeLuminanceScatteringIntegral(
        &atmosphere,
        &light,
        lut_sampler,
        transmittance_lut,
        multiscatter_lut,
        origin + direction * atmosphere_raycast.t_min,
        direction,
        include_ground,
		atmosphere_raycast.intersects_ground,
		atmosphere_raycast.t_max - atmosphere_raycast.t_min
    ).luminance;

    textureStore(skyview_lut, texel_coord, vec4(luminance, 1.0));
}
`,H="rgba32float";class Re{constructor(e,t,a,n,i,o){r(this,"texture"),r(this,"view"),r(this,"group0"),r(this,"group1"),r(this,"pipeline"),this.texture=e.createTexture({size:t,dimension:"2d",format:H,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING,label:"Skyview LUT"}),this.view=this.texture.createView({label:"Skyview LUT"});const s=e.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{access:"write-only",format:H}},{binding:1,visibility:GPUShaderStage.COMPUTE,sampler:{type:i?"filtering":"non-filtering"}},{binding:2,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:i?"float":"unfilterable-float"}},{binding:3,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:i?"float":"unfilterable-float"}}],label:"Skyview LUT"});this.group0=e.createBindGroup({layout:s,entries:[{binding:0,resource:this.view},{binding:1,resource:e.createSampler({magFilter:i?"linear":"nearest",minFilter:i?"linear":"nearest"})},{binding:2,resource:a},{binding:3,resource:n}],label:"Skyview LUT Group 0"});const u=e.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{}}],label:"Skyview LUT Group 1"});this.group1=e.createBindGroup({layout:u,entries:[{binding:0,resource:{buffer:o.buffer}}],label:"Skyview LUT Group 1"});const c=e.createShaderModule({code:Pe});this.pipeline=e.createComputePipeline({compute:{module:c,entryPoint:"computeSkyViewLuminance"},layout:e.createPipelineLayout({bindGroupLayouts:[s,u]}),label:"Skyview LUT"})}record(e,t){const a=e.beginComputePass({timestampWrites:t!==void 0?{querySet:t.querySet,beginningOfPassWriteIndex:t.beginWriteIndex,endOfPassWriteIndex:t.endWriteIndex}:void 0,label:"Skyview LUT"});a.setPipeline(this.pipeline),a.setBindGroup(0,this.group0),a.setBindGroup(1,this.group1),a.dispatchWorkgroups(Math.ceil(this.texture.width/16),Math.ceil(this.texture.height/(16*1.9))),a.end()}}const Ue=`// Sizeof(Atmosphere) = 8 * 16 = 128
// Alignof(Atmosphere) = 16
struct Atmosphere
{
    scattering_rayleigh_per_Mm : vec3<f32>,
    density_scale_rayleigh_Mm : f32,
    absorption_rayleigh_per_Mm : vec3<f32>,

    planet_radius_Mm : f32,

    scattering_mie_per_Mm : vec3<f32>,
    density_scale_mie_Mm : f32,
    absorption_mie_per_Mm : vec3<f32>,

    atmosphere_radius_Mm : f32,

    ground_albedo : vec3<f32>,
    padding0 : f32,

    scattering_ozone_per_Mm : vec3<f32>,
    padding1 : f32,

    absorption_ozone_per_Mm : vec3<f32>,
    padding2 : f32,

    padding3 : vec4<f32>,
}

// Sizeof(CelestialLight) = 2 * 16 = 32
// Alignof(CelestialLight) = 16
struct CelestialLight
{
    color: vec3<f32>,
    strength: f32,

	forward: vec3<f32>,
    angular_radius: f32,
}

// Sizeof(Camera) = 4 * 64 = 256
// Alignof(Camera) = 16
struct Camera
{
    inv_proj: mat4x4<f32>,

	inv_view: mat4x4<f32>,

	proj_view: mat4x4<f32>,

    position: vec4<f32>,
	forward: vec4<f32>,
	padding0: mat2x4<f32>,
}

// Sizeof(Time) = 16
// Alignof(Time) = 16
struct Time
{
	padding0: vec2<f32>,
	time_seconds: f32,
	delta_time_seconds: f32,
}

// All of these uniform values have identical lifetimes: they update before rendering for the frame, and are constant throughout
// Thus we store everything together to simplify the bindings
// Sizeof(GlobalUBO) = 672 + 16 = 688 (as of writing)
// Alignof(GlobalUBO) = 16
struct GlobalUBO
{
	camera: Camera,           // offsets
	ocean_camera: Camera,     // 0   + 256 = 256
	atmosphere: Atmosphere,   // 256 + 256 = 512
	light: CelestialLight,    // 512 + 128 = 640
	time: Time,               // 640 + 32  = 672
}

struct RaySphereHit
{
    hit: bool,
    t0: f32,
    t1: f32,
}

// t1 > t0, values can be negative. Function returns true even if the sphere is behind the ray.
// If this returns false, t0 and t1 are unchanged.
fn raySphereIntersection(
    ray_origin: vec3<f32>,
    ray_direction_normalized: vec3<f32>,
    radius: f32
) -> RaySphereHit
{
    // Method taken from "Precision Improvements for Ray/Sphere Intersection"
    // by Eric Haines, Johannes Günther, and Tomas Akenine-Möller
    //
    // The method includes tricks to reduce float point inaccuracy errors.

    let f: vec3<f32> = ray_origin;
    let d: vec3<f32> = ray_direction_normalized;
    let b: f32 = -1.0 * dot(f, d);
    let center_to_intersection_chord: vec3<f32> = f + b * d;
    let discriminant: f32 = radius * radius - dot(center_to_intersection_chord, center_to_intersection_chord);
    let c: f32 = dot(f, f) - radius * radius;

    var output : RaySphereHit;
    output.hit = false;
    output.t0 = 0.0;
    output.t1 = 0.0;

    if (discriminant < 0.0)
    {
        return output;
    }

    var q: f32 = b;
    if (b < 0.0)
    {
        q -= sqrt(discriminant);
    }
    else
    {
        q += sqrt(discriminant);
    }

    output.hit = true;
    output.t0 = c / q;
    output.t1 = q;

    if (output.t0 > output.t1)
    {
        let temp: f32 = output.t0;
        output.t0 = output.t1;
        output.t1 = temp;
    }

    return output;
}

struct RayPlaneHit {
	hit: bool,
	t: f32,
}

fn rayPlaneIntersection(
	ray_origin: vec3<f32>,
	ray_direction: vec3<f32>,
	plane_origin: vec3<f32>,
	plane_normal: vec3<f32>
) -> RayPlaneHit
{
	var result: RayPlaneHit;

	let perp = dot(plane_normal, ray_direction);
	result.t = dot(plane_origin - ray_origin, plane_normal) / perp;
	result.hit = (abs(perp) > 0.00001) && (result.t > 0.0);

	return result;
}


@group(0) @binding(0) var output_color: texture_storage_2d<rgba16float, write>;
@group(0) @binding(1) var lut_sampler: sampler;
@group(0) @binding(2) var transmittance_lut: texture_2d<f32>;
@group(0) @binding(3) var multiscatter_lut: texture_2d<f32>;
@group(0) @binding(4) var skyview_lut: texture_2d<f32>;
@group(0) @binding(5) var aerial_perspective_lut: texture_3d<f32>;

@group(1) @binding(0) var<uniform> u_global: GlobalUBO;

@group(2) @binding(0) var gbuffer_color_with_surface_world_depth_in_alpha: texture_2d<f32>;
@group(2) @binding(1) var gbuffer_normal_with_surface_foam_strength_in_alpha: texture_2d<f32>;

// vertex state NOT included
// Render a quad and use this as the fragment stage

// This file contains shared methods and definitions for raymarching the atmosphere and generating the lookup tables

const PI = 3.141592653589793;
const METERS_PER_MM = 1000000;


// Based on:
// "A Scalable and Production Ready Sky and Atmosphere Rendering Technique" by Sébastien Hillaire (2020)
// https://sebh.github.io/publications/egsr2020.pdf
//
// "Precomputed Atmospheric Scattering: a New Implementation" by Eric Bruneton (2017)
// https://ebruneton.github.io/precomputed_atmospheric_scattering

const AERIAL_PERSPECTIVE_MM_PER_SLICE = 0.001;

const ISOTROPIC_PHASE = 1.0 / (4.0 * PI);

// Transmittance LUT UV mapping based on Bruneton et al. 2017 method
// https://ebruneton.github.io/precomputed_atmospheric_scattering/atmosphere/functions.glsl#transmittance_lookup

fn safeSqrt(value: f32) -> f32 { return sqrt(max(value, 0.0)); }

// Squeeze in UV values by half a texel, so the bounds of our sampled function can be stored precisely at the edge of
// the texture
fn textureCoordFromUnitRange(value: f32, length: u32) -> f32
{
    return 0.5 / f32(length) + value * (1.0 - 1.0 / f32(length));
}
fn unitRangeFromTextureCoord(coord: f32 , length: u32) -> f32
{
    return (coord - 0.5 / f32(length)) / (1.0 - 1.0 / f32(length));
}

// Radius is the distance in Mm from the center of the planet, aka length of position vector
// Mu is the cosine of the angle between the position vector and the direction vector we want to sample the
// transmittance in
fn transmittanceLUT_RMu_to_UV(
    atmosphere: ptr<function,Atmosphere>,
    radius: f32,
    mu: f32,
	dimensions: vec2<u32>,
) -> vec2<f32>
{
    let atmosphere_radius_Mm_squared: f32 = (*atmosphere).atmosphere_radius_Mm * (*atmosphere).atmosphere_radius_Mm;
    let planet_radius_Mm_squared: f32 = (*atmosphere).planet_radius_Mm * (*atmosphere).planet_radius_Mm;

    // Ground level, horizontal ray distance to atmospheric boundary
    let h: f32 = safeSqrt(atmosphere_radius_Mm_squared - planet_radius_Mm_squared);

    // Distance to horizon, which is also the exact position the previous horizontal ray starts at
    let rho: f32 = safeSqrt(radius * radius - planet_radius_Mm_squared);

    // rho + H = distance to atmosphere boundary when looking at the horizon
    // It represents the distance along the biggest angle (most negative mu) that has nonzero transmittance,
    // since any lower and we intersect the planet
    // This angle changes as the radius does, so this mapping seeks to compress a different range of mu values
    // at any given radius value

    // Distance to edge of atmosphere, with both its min and max values at this given radius.
    let d: f32 = max(-radius * mu + safeSqrt(radius * radius * (mu * mu - 1.0) + atmosphere_radius_Mm_squared), 0.0);
    let d_min: f32 = (*atmosphere).atmosphere_radius_Mm - radius;
    let d_max: f32 = rho + h;

    let x_mu: f32 = (d - d_min) / (d_max - d_min);
    let x_radius: f32 = rho / h;

    return vec2<f32>(
        textureCoordFromUnitRange(x_mu, dimensions.x),
        textureCoordFromUnitRange(x_radius, dimensions.y)
    );
}

// Inverse of transmittanceLUT_RMu_to_UV
// Allocates more texture space to interesting rays near the horizon.
fn transmittanceLUT_UV_to_RMu(
    atmosphere: ptr<function,Atmosphere>,
    uv: vec2<f32>,
	dimensions: vec2<u32>,
) -> vec2<f32>
{
    let x_mu : f32 = unitRangeFromTextureCoord(uv.x, dimensions.x);
    let x_radius : f32 = unitRangeFromTextureCoord(uv.y, dimensions.y);

    let atmosphere_radius_Mm_squared : f32 = (*atmosphere).atmosphere_radius_Mm * (*atmosphere).atmosphere_radius_Mm;
    let planet_radius_Mm_squared : f32 = (*atmosphere).planet_radius_Mm * (*atmosphere).planet_radius_Mm;

    // Ground level, horizontal ray distance to atmospheric boundary
    let h : f32 = safeSqrt(atmosphere_radius_Mm_squared - planet_radius_Mm_squared);

    let rho : f32 = h * x_radius;

    let radius : f32 = safeSqrt(rho * rho + planet_radius_Mm_squared);

    let d_min : f32 = (*atmosphere).atmosphere_radius_Mm - radius;
    let d_max : f32 = rho + h;

    let d : f32 = (d_max - d_min) * x_mu + d_min;

    // This boundary condition is important depending on floating point errors
    // We don't need to check radius since it is bounded below by planet radius, and that shouldn't be near 0
    let D_EPSILON: f32 = 0.000000001;
    if (d < D_EPSILON)
    {
        // mu is ambiguous since we are at the very edge of the atmosphere, where no angle produces valid transmittance
        // values
        return vec2<f32>(radius, 1.0);
    }

    let mu : f32 = (h * h - rho * rho - d * d) / (2.0 * radius * d);
    // Equivalently, mu = (atmosphere_radius_Mm_squared - radius * radius - d*d) / (2.0 * radius * d)
    // But atmosphere_radius_Mm_squared and radius * radius are large, so this avoids floating point errors from adding
    // these to the much smaller d * d

    // This clamp is very important
    return vec2<f32>(radius, clamp(mu, -1.0, 1.0));
}

fn multiscatterLUT_RMu_to_UV(
    atmosphere: ptr<function,Atmosphere>,
    radius: f32,
    mu_light: f32,
	dimensions: vec2<u32>,
) -> vec2<f32>
{
    let u_unit: f32 = 0.5 + 0.5 * mu_light;
    let v_unit: f32 = clamp(
        (radius - (*atmosphere).planet_radius_Mm)
            / ((*atmosphere).atmosphere_radius_Mm - (*atmosphere).planet_radius_Mm),
        0.0, 1.0
    );

    return vec2<f32>(
        textureCoordFromUnitRange(u_unit, dimensions.x),
        textureCoordFromUnitRange(v_unit, dimensions.y)
    );
}

fn multiscatterLUT_UV_to_RMu(
    atmosphere: ptr<function,Atmosphere>,
    uv: vec2<f32>,
	dimensions: vec2<u32>,
) -> vec2<f32>
{
    let u_unit: f32 = unitRangeFromTextureCoord(uv.x, dimensions.x);
    let v_unit: f32 = unitRangeFromTextureCoord(uv.y, dimensions.y);

    let mu_light: f32 = 2.0 * (u_unit - 0.5);

    // The exact radius is not too critical, and multiscattering is sensitive to being out of range, so we squeeze into
    // a slightly smaller planet radius to ensure we are valid.
    let radius: f32 = mix(
        (*atmosphere).planet_radius_Mm * (1.0002),
        (*atmosphere).atmosphere_radius_Mm * (0.9998),
        v_unit
    );

    return vec2<f32>(radius, mu_light);
}

fn sampleMultiscatterLUT(
    lut: texture_2d<f32>,
    s: sampler,
    atmosphere: ptr<function,Atmosphere>,
    radius: f32,
    mu_light: f32
) -> vec3<f32>
{
    let uv: vec2<f32> = multiscatterLUT_RMu_to_UV(
		atmosphere,
		radius,
		mu_light,
		textureDimensions(lut)
	);

    return textureSampleLevel(lut, s, uv, 0.0).xyz;
}

fn sampleTransmittanceLUT_RadiusMu(
    lut: texture_2d<f32>,
    s: sampler,
    atmosphere: ptr<function,Atmosphere>,
    radius: f32,
    mu: f32
) -> vec3<f32>
{
    let uv: vec2<f32> = transmittanceLUT_RMu_to_UV(
		atmosphere,
		radius,
		mu,
		textureDimensions(lut)
	);

    let sample = textureSampleLevel(lut, s, uv, 0.0).xyz;

    return sample;
}

fn sampleTransmittanceLUT_Ray(
    lut: texture_2d<f32>,
    s: sampler,
    atmosphere: ptr<function,Atmosphere>,
    position: vec3<f32>,
    direction: vec3<f32>
) -> vec3<f32>
{
    let radius: f32 = length(position);
    let mu: f32 = (dot(position, direction) / (length(position) * length(direction)));

    return sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, radius, mu);

}

fn sampleTransmittanceLUT_Segment(
    lut: texture_2d<f32>,
    s: sampler,
    atmosphere: ptr<function,Atmosphere>,
    r_start: f32,
    mu_start: f32,
    d: f32,
    intersects_ground: bool
) -> vec3<f32>
{
    let r_end = clamp(
        safeSqrt(d * d + 2.0 * r_start * mu_start * d + r_start * r_start),
        (*atmosphere).planet_radius_Mm, (*atmosphere).atmosphere_radius_Mm
    );
    let mu_end = clamp((r_start * mu_start + d) / r_end, -1.0, 1.0);

    if(intersects_ground)
    {
        return min(
            sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, r_end, -mu_end)
            / sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, r_start, -mu_start),
            vec3<f32>(1.0)
        );
    }
    else
    {
        return min(
            sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, r_start, mu_start)
            / sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, r_end, mu_end),
            vec3<f32>(1.0)
        );
    }
}

struct ExtinctionSample
{
    scattering_rayleigh: vec3<f32>,
    scattering_mie: vec3<f32>,
    scattering_ozone: vec3<f32>,

    absorption_rayleigh: vec3<f32>,
    absorption_mie: vec3<f32>,
    absorption_ozone: vec3<f32>,

    // This parameter is redundant, but convenient.
    // It is the sum of all scattering values.
    scattering: vec3<f32>,

    extinction: vec3<f32>,
}

// Ensure altitude and density_scale are the same units.
fn densityExponential(altitude: f32, density_scale: f32) -> f32
{ return exp(-altitude / density_scale); }

// Hardcoded with values for ozone
fn densityTent(altitude_km: f32) -> f32
{ return max(0.0, 1.0 - abs(altitude_km - 25.0) / 15.0); }

// Returned units are per Mm. Take care that this function takes in altitude, NOT radius.
// radius := altitude + planetRadius
fn sampleExtinction(atmosphere: ptr<function,Atmosphere>, altitude_Mm: f32) -> ExtinctionSample
{
    let density_rayleigh: f32 = densityExponential(altitude_Mm, (*atmosphere).density_scale_rayleigh_Mm);
    let scattering_rayleigh: vec3<f32> = (*atmosphere).scattering_rayleigh_per_Mm * density_rayleigh;
    let absorption_rayleigh: vec3<f32> = (*atmosphere).absorption_rayleigh_per_Mm * density_rayleigh;

    let density_mie: f32 = densityExponential(altitude_Mm, (*atmosphere).density_scale_mie_Mm);
    let scattering_mie: vec3<f32> = (*atmosphere).scattering_mie_per_Mm * density_mie;
    let absorption_mie: vec3<f32> = (*atmosphere).absorption_mie_per_Mm * density_mie;

    let density_ozone: f32 = densityTent(altitude_Mm * 1000.0);
    let scattering_ozone: vec3<f32> = (*atmosphere).scattering_ozone_per_Mm * density_ozone;
    let absorption_ozone: vec3<f32> = (*atmosphere).absorption_ozone_per_Mm * density_ozone;

    var extinction_sample: ExtinctionSample;
    extinction_sample.scattering_rayleigh = scattering_rayleigh;
    extinction_sample.scattering_mie = scattering_mie;
    extinction_sample.scattering_ozone = scattering_ozone;

    extinction_sample.absorption_rayleigh = absorption_rayleigh;
    extinction_sample.absorption_mie = absorption_mie;
    extinction_sample.absorption_ozone = absorption_ozone;

    extinction_sample.scattering = scattering_rayleigh + scattering_mie + scattering_ozone;
    extinction_sample.extinction = extinction_sample.scattering + absorption_rayleigh + absorption_mie + absorption_ozone;

    return extinction_sample;
}

// Input cosine is the cosine of the angle between incident and outgoing scattering directions
fn phaseRayleigh(cosine: f32) -> f32
{
    let scalar: f32 = 3.0 / (16.0 * PI);
    let numerator: f32 = (1.0 + cosine * cosine);

    return scalar * numerator;
}

// Input cosine is the cosine of the angle between incident and outgoing scattering directions
// Input g is a value from -1 to 1 that controls the concentration of back vs forward scattering.
// Note: g = 0 reduces to the case of our rayleigh phase function
fn phaseMie(cosine: f32, g: f32) -> f32
{
    let scalar: f32 = 3.0 / (8.0 * PI);
    let numerator: f32 = (1.0 - g * g) * (1.0 + cosine * cosine);
    let denominator: f32 = (2.0 + g * g) * pow(1.0 + g * g - 2.0 * g * cosine, 1.5);
    return scalar * numerator / denominator;
}

// (float, float) 2d encoding of position + direction
struct RaymarchStep
{
    // Distance from origin, represents (0, radius, 0)
    radius: f32,
    // Cosine of the angle between (0, radius, 0) and implicit direction vector
    mu: f32,
    // Cosine of the angle with the direction to the light
    mu_light: f32,
    // Cosine of travel direction vector and light direction vector
    nu: f32,
};

// Returns 'start' moved 'step_distance' units along the implicit direction vector
// nu is the dot product between normalized direction and light direction vector
fn stepRadiusMu(
    start: RaymarchStep,
    step_distance: f32,
) -> RaymarchStep
{
    // Consider starting position (0, radius, 0)
    // and step vector of d * (sqrt(1 - mu * mu), mu, 0)

    // When computing changes in radii and mu, we use this method everywhere since norm is preserved upon rotation
    // and all cases of stepping can be reduced to the above two vectors

    var result: RaymarchStep;
    result.radius = safeSqrt(
        step_distance * step_distance + 2.0 * start.radius * start.mu * step_distance
            + start.radius * start.radius
    );
    result.mu = (start.radius * start.mu + step_distance) / result.radius;
    result.nu = start.nu;
    result.mu_light = (start.radius * start.mu_light + step_distance * start.nu) / result.radius;

    return result;
}

// Samples a segment, given in RMu coordinates
fn sampleTransmittanceLUT_RayMarchStep(
    lut: texture_2d<f32>,
    s: sampler,
    atmosphere: ptr<function,Atmosphere>,
    start: RaymarchStep,
    step_distance: f32
) -> vec3<f32>
{
    const STEP_DISTANCE_EPSILON = 0.0000001;
    if (step_distance < STEP_DISTANCE_EPSILON)
    {
        return vec3<f32>(1.0);
    }

    let end: RaymarchStep = stepRadiusMu(start, step_distance);

    var transmittance = vec3<f32>(0.0);
    if (start.mu > 0.0)
    {
        // Oriented up into atmosphere, so we directly sample LUT
        transmittance = sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, start.radius, start.mu)
                      / sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, end.radius, end.mu);
    }
    else
    {
        // Oriented down towards planet, so direct samples would be invalid
        // Instead, we flip the direction
        transmittance = sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, end.radius, -end.mu)
                      / sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, start.radius, -start.mu);
    }

    return clamp(transmittance, vec3<f32>(0.0), vec3<f32>(1.0));
}

// Contains methods and overloads for raymarching the atmosphere


/*
Flags explanation:

MULTISCATTERING
- read from a multiscattering texture when computing the in-scattering path integral
- Should be disabled when calculating multiscattering, and enabled otherwise

ISOTROPIC_PHASE
- Use an isotropic phase function when calculating out-scattering at each point
- Should be enabled when calculating multiscattering, and disabled otherwise

SCATTERING_NONLINEAR_SAMPLE
- Helps with small sample counts, by concentrating more samples closer to the ray origin

LIGHT_ILLUMINANCE_IS_ONE
- When computing luminance using a light, use 1 instead of the strength.
- This converts the returned luminance into a transfer value, which can be scaled by solar illuminance whenever

HIGH_SAMPLE_COUNT
- Whether to use a much higher sample count. Useful for one time renders, like the multiscattering LUT.

SAMPLE_PATH_TRANSMITTANCE
- Instead of accumulating transmittance along the raymarched path, sample the transmittance LUT.
- This adds ~ 6 * N + 2 samples of the transmittance LUT texture, where N is the sample count
- The results are subtly different, the transmittance LUT has precision issues when trying to sample intervals due to needing to multiply and divide by nearly zero floats when near the horizon
- By default this should be left off, we're raymarching extinction samples while integrating so sampling the transmittance LUT for the main path ends up being wasteful
*/

// Make sure to include atmosphere_common first

struct AtmosphereRaycastResult
{
	// Whether or not the raycast resulted in hitting the planet
	// This is important for sampling the transmittance lut
	intersects_ground: bool,

	// The origin of the raycast can be outside the atmosphere, inside the planet, etc so we get an interval
	t_min: f32,
	t_max: f32,
}

fn raycastAtmosphere(atmosphere: ptr<function, Atmosphere>, origin: vec3<f32>, direction: vec3<f32>) -> AtmosphereRaycastResult
{
	var result: AtmosphereRaycastResult;

    let planet_hit = raySphereIntersection(origin, direction, (*atmosphere).planet_radius_Mm);
    let atmosphere_hit = raySphereIntersection(origin, direction, (*atmosphere).atmosphere_radius_Mm);

    let inside_planet = planet_hit.hit && planet_hit.t0 < 0.0 && planet_hit.t1 > 0.0;
    let intersects_atmosphere = atmosphere_hit.hit && atmosphere_hit.t1 > 0.0;
    if (!intersects_atmosphere || inside_planet)
    {
		result.intersects_ground = true;
		result.t_min = 0.0;
		result.t_max = 0.0;
        return result;
    }

	// Optimistic, assume we don't hit planet and take the atmosphere_hit interval as-is
	result.t_min = max(atmosphere_hit.t0, 0.0);
	result.t_max = atmosphere_hit.t1;

    // Assuming the planet was hit, we have atmosphere_hit.t0 < planet_hit.t0 < planet_hit.t1 < atmosphere_hit.t1
    // If this assumption ever fails (such as 0 atmosphere?), this method needs to be reworked anyway to skip some
    // calculations

    if (planet_hit.hit && planet_hit.t0 > 0.0)
    {
		result.intersects_ground = true;

		// We assume the planet, if hit, is ALWAYS closer than the further edge of the atmosphere
		// So the next line is redundant and we use the simpler, uncommented form
		// result.t_max = min(planet_hit.t0, result.t_max)

        result.t_max = planet_hit.t0;
    }

	return result;
}

struct ScatteringResult
{
    luminance: vec3<f32>,
	transmittance: vec3<f32>,
    multiscattering_transfer: vec3<f32>,
}

// TODO: should compile-time optional parameters just be accessed by the global resource introduced before this file is included?

// Returns the computed single-scattered luminance from origin to origin + direction * sample_distance
//
// include_ground: Whether to include the luminance from the planet's virtual surface
//
// intersects_ground: Whether or not the provided origin/direction intersect the planet's surface.
// 	This could just be computed internally, but often the calling code is more informed and passing this avoids redundant calculations.
//
// If include_ground is TRUE, then sample_distance is assumed to go to the planet's surface.
// If include_ground is TRUE, intersects_ground must also be true for out-scattering of surface to be included.
// A misuse of 'include_ground', 'intersects_ground', and 'sample_distance' (such as the wrong distance) will lead to incorrect results.
fn computeLuminanceScatteringIntegral(
    atmosphere: ptr<function, Atmosphere>,
    light:  ptr<function, CelestialLight>,
    lut_sampler: sampler,
    transmittance_lut: texture_2d<f32>,
    multiscatter_lut: texture_2d<f32>,
    origin: vec3<f32>,
    direction: vec3<f32>,
    include_ground: bool,
	intersects_ground: bool,
	sample_distance: f32,
) -> ScatteringResult
{
    var result: ScatteringResult;
    result.luminance = vec3<f32>(0.0);
	result.transmittance = vec3<f32>(1.0);
    result.multiscattering_transfer = vec3<f32>(0.0);

	if(sample_distance <= 0.0)
	{
		result.luminance = vec3<f32>(1.0, 1.0, 0.0);
		return result;
	}

    // This is the direction of the incoming light, which is the light we are interested in computing the magnitude of.
    // This is the parameter of the phase functions
	let incident_cosine = dot((*light).forward, -direction);

    let start_radius: f32 = length(origin);
    let start_mu: f32 = dot(origin, direction) / (length(origin) * length(direction));
    let start_mu_light: f32 = dot(origin, -(*light).forward) / (length(origin) * length((*light).forward));
    let nu: f32 = dot(-(*light).forward, direction) / (length((*light).forward) * length(direction));

    let origin_step = RaymarchStep(start_radius, start_mu, start_mu_light, nu);

	var transmittance_accumulated = vec3<f32>(1.0);

    // We estimate the integral in Equation (1) of Hillaire's paper.

    const SAMPLE_COUNT = 64.0;

	const T_SUBSTEP = 0.4;

	var t: f32 = 0.0;
	var d_t: f32 = 0.0;
    for (var s = 0.0; s < SAMPLE_COUNT; s += 1.0)
    {
		{
			// quadratic distribution
        	var t_begin = s / SAMPLE_COUNT;
        	var t_end = (s + 1.0) / SAMPLE_COUNT;
			t_begin = sample_distance * t_begin * t_begin;
			t_end = sample_distance * t_end * t_end;
			d_t = t_end - t_begin;
			t = mix(t_begin, t_end, T_SUBSTEP);
		}

        let sample_step: RaymarchStep = stepRadiusMu(origin_step, t);

        let altitude = sample_step.radius - (*atmosphere).planet_radius_Mm;
        let extinction_sample: ExtinctionSample = sampleExtinction(atmosphere, altitude);

        // Terms of Equation (3) we assume to not vary over the path segment

	    let transmittance_to_t_begin = transmittance_accumulated;
		let transmittance_along_path = exp(-extinction_sample.extinction * d_t);
		transmittance_accumulated *= transmittance_along_path;

        // Ozone does not scatter light normally, so we arbitrarily use rayleigh's phase function in case ozone's scattering
        // coefficient is nonzero
        let phase_times_scattering: vec3<f32> =
            extinction_sample.scattering_rayleigh * phaseRayleigh(incident_cosine)
            + extinction_sample.scattering_mie * phaseMie(incident_cosine, 0.8)
            + extinction_sample.scattering_ozone * phaseRayleigh(incident_cosine);

        let multiscatter = sampleMultiscatterLUT(multiscatter_lut, lut_sampler, atmosphere, sample_step.radius, sample_step.mu_light);

        var occlusion_planet: f32 = 0.0;
        {
            let horizon_sin = (*atmosphere).planet_radius_Mm / sample_step.radius;
            let horizon_cos = -safeSqrt(1.0 - horizon_sin * horizon_sin);

            occlusion_planet = f32(sample_step.mu_light < horizon_cos);
        }

        let transmittance_to_sun = sampleTransmittanceLUT_RadiusMu(transmittance_lut, lut_sampler, atmosphere, sample_step.radius, sample_step.mu_light);
        var shadowing = vec3<f32>(transmittance_to_sun * (1.0 - f32(occlusion_planet)));

        // Integrate transmittance := e^(-extinction(x) * ||x - begin||) from begin to end
        // This is a single interval of the integral in Equation (1) from Hillaire's paper,
        // with all constant terms factored out above
        let scattering_illuminance_integral = (vec3(1.0) - transmittance_along_path) / extinction_sample.extinction;

        result.luminance +=
            (phase_times_scattering * shadowing + multiscatter * extinction_sample.scattering)
            * scattering_illuminance_integral * transmittance_to_t_begin
            * 1.0;
        result.multiscattering_transfer += extinction_sample.scattering * scattering_illuminance_integral * transmittance_to_t_begin;
    }

    if (include_ground && intersects_ground)
    {
        let sample_step: RaymarchStep = stepRadiusMu(origin_step, sample_distance);

        let transmittance_to_surface = sampleTransmittanceLUT_RayMarchStep(transmittance_lut, lut_sampler, atmosphere, origin_step, sample_distance);
        let transmittance_to_sun = sampleTransmittanceLUT_RadiusMu(transmittance_lut, lut_sampler, atmosphere, sample_step.radius, sample_step.mu_light);

        let normal_dot_light = clamp(sample_step.mu_light, 0.0, 1.0);

        let diffuse = (*atmosphere).ground_albedo / PI;

        result.luminance +=
            transmittance_to_surface * transmittance_to_sun * normal_dot_light * diffuse
            * 1.0;
    }

	result.transmittance = transmittance_accumulated;

    return result;
}


// Transfer implementation as defined in
// https://www.color.org/chardata/rgb/srgb.xalter

// sRGB nonlinear -> sRGB linear
fn sRGB_EOTF(color_nonlinear: vec3<f32>) -> vec3<f32>
{
    let piecewise_boundary = color_nonlinear < vec3<f32>(0.0031308 * 12.92);
    let piecewise_linear = color_nonlinear / vec3<f32>(12.92);
    let piecewise_nonlinear = pow(
        (color_nonlinear + vec3<f32>(0.055)) / vec3<f32>(1.055), vec3<f32>(2.4)
    );

    return 0.95 * select(piecewise_nonlinear, piecewise_linear, piecewise_boundary);
}

// sRGB linear -> sRGB nonlinear
fn sRGB_OETF(color_linear: vec3<f32>) -> vec3<f32>
{
    let piecewise_boundary = color_linear <= vec3<f32>(0.0031308);
    let piecewise_linear = vec3<f32>(12.92) * color_linear;
    let piecewise_nonlinear = vec3<f32>(1.055) * pow(color_linear, vec3<f32>(1 / 2.4)) - vec3<f32>(0.055);

    return select(piecewise_nonlinear, piecewise_linear, piecewise_boundary);
}

// ACES tonemap fitting constants provided by
// https://github.com/TheRealMJP/BakingLab/blob/master/BakingLab/ACES.hlsl

fn RRTAndODTFit(v: vec3<f32>) -> vec3<f32>
{
    let a = v * (v + 0.0245786) - 0.000090537;
    let b = v * (0.983729 * v + 0.4329510) + 0.238081;
    return a / b;
}

/**
* Output is nonlinear-encoded sRGB.
*/
fn HDRtoSRGB_ACES(color_hdr: vec3<f32>) -> vec3<f32>
{
	// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT
	const ACES_INPUT_MAT = mat3x3<f32>(
		vec3<f32>(0.59719, 0.07600, 0.02840),
		vec3<f32>(0.35458, 0.90834, 0.13383),
		vec3<f32>(0.04823, 0.01566, 0.83777)
	);

	// ODT_SAT => XYZ => D60_2_D65 => sRGB
	const ACES_OUTPUT_MAT = mat3x3<f32>
	(
		vec3<f32>(1.60475, -0.10208, -0.00327),
		vec3<f32>(-0.53108,  1.10813, -0.07276),
		vec3<f32>(-0.07367, -0.00605,  1.07602)
	);

    var color = ACES_INPUT_MAT * sRGB_OETF(color_hdr);
    color = RRTAndODTFit(color);
    color = ACES_OUTPUT_MAT * color;
    color = clamp(color, vec3<f32>(0.0), vec3<f32>(1.0));
    return color;
}

/**
* Implementation of https://github.com/KhronosGroup/ToneMapping/tree/main/PBR_Neutral
* Input and output are linear color in the Rec. 709 gamut (same as sRGB when linear/not encoded).
* Input components are in [0, infinity), output components are in [0,1]
*/
fn tonemapPBRNeutral(color: vec3<f32>) -> vec3<f32>
{
    let x = min(min(color.r, color.g), color.b);

    // 4% Fresnel Reflection for a standard 1.5 IoR material
    let F_normal = 0.04;

    var f = F_normal;
    if (x <= 2.0 * F_normal)
    {
        f = x - x * x / (4.0 * F_normal);
    }

    var color_minus_f = color - vec3<f32>(f);

    // Parameter that controls when highlight compression starts
    let K_s = 0.8 - F_normal;

    let p = max(max(color_minus_f.r, color_minus_f.g), color_minus_f.b);
    if (p <= K_s)
    {
        return color_minus_f;
    }

    // Speed of desaturation
    let K_d = 0.15;

    let p_n = 1.0 - (1.0 - K_s) * (1.0 - K_s) / (p + 1.0 - 2.0 * K_s);
    let g = 1.0 / (K_d * (p - p_n) + 1.0);

    return mix(vec3(p_n), color_minus_f * p_n / p, g);
}


fn max3(value: vec3<f32>) -> f32
{
    return max(max(value.x, value.y), value.z);
}

struct PBRTexel
{
//    position: vec3<f32>,
    normal: vec3<f32>,
    subscattering_albedo: vec3<f32>,
    normal_reflectance: vec3<f32>,
//    occlusion: f32,
    specular_power: f32,
    metallic: f32,
};

fn convertPBRPropertiesWater(color: vec3<f32>, normal: vec3<f32>, foam: f32) -> PBRTexel
{
    const METALLIC_WATER = 0.5;

	const SPECULAR_POWER = 160.0;
	const ROUGHNESS_WATER = 0.05;
	const ROUGHNESS_FOAM = 1.0;

    let roughness = mix(
		ROUGHNESS_WATER,
		ROUGHNESS_FOAM,
		foam
	);

	const FOAM_COLOR = vec3<f32>(1.0);
	let albedo = mix(color, FOAM_COLOR, foam);

    const DIELECTRIC_REFLECTANCE = vec3<f32>(0.04);
    const METALLIC_REFLECTANCE = vec3<f32>(0.5);

	// Foam should probably use a different shading model, but this works
	const FOAM_REFLECTANCE = vec3<f32>(0.8);

    let normal_reflectance = mix(
		mix(
			DIELECTRIC_REFLECTANCE,
			METALLIC_REFLECTANCE * color / max3(color),
			METALLIC_WATER
		),
		FOAM_REFLECTANCE,
		foam
	);

    var texel = PBRTexel();
    texel.normal = normal;
    texel.subscattering_albedo = albedo;
    texel.normal_reflectance = normal_reflectance;
    texel.specular_power = pow(SPECULAR_POWER, 1.0 - roughness);
    texel.metallic = METALLIC_WATER;

    return texel;
}

fn computeFresnelMicrofacet(material: PBRTexel, light_outgoing: vec3<f32>, view_outgoing: vec3<f32>) -> vec3<f32>
{
    let halfway_direction = normalize(light_outgoing + view_outgoing);

    // Schlick approximation of fresnel reflection
    let fresnel =
        material.normal_reflectance
        + (1.0 - material.normal_reflectance) * pow(1.0 - clamp(dot(halfway_direction, light_outgoing), 0.0, 1.0), 5.0);

    return fresnel;
}

// Non-microfacet, only valid for perfect reflections
fn computeFresnelPerfectReflection(material: PBRTexel, light_outgoing: vec3<f32>) -> vec3<f32>
{
    // Schlick approximation of fresnel reflection
    let fresnel =
        material.normal_reflectance
        + (1.0 - material.normal_reflectance) * pow(1.0 - clamp(dot(light_outgoing, material.normal), 0.0, 1.0), 5.0);

    return fresnel;
}

fn diffuseBRDF(material: PBRTexel) -> vec3<f32>
{
    // Lambertian BRDF

    return material.subscattering_albedo / 3.14159265359;
}

fn specularBRDF(material: PBRTexel, light_outgoing: vec3<f32>, view_outgoing: vec3<f32>) -> vec3<f32>
{
    let halfway_direction = normalize(light_outgoing + view_outgoing);

    let specular_power = material.specular_power;
    let microfacet_distribution = pow(clamp(dot(halfway_direction, material.normal), 0.0, 1.0), specular_power);

    // Without this term, the overall brightness decreases as roughness increases
    let normalization_term = (specular_power + 2.0) / 8.0;

    return vec3<f32>(normalization_term * microfacet_distribution);
}

fn sampleSkyViewLUT(
    atmosphere: ptr<function, Atmosphere>,
    position: vec3<f32>,
    direction: vec3<f32>
) -> vec3<f32>
{
    // Horizon zenith cannot be less than PI/2, so we use sin and assume it is a quadrant 2 angle
    let sin_horizon_zenith = clamp((*atmosphere).planet_radius_Mm / length(position), -1.0, 1.0);
    let horizon_zenith = PI - asin(sin_horizon_zenith);

    let cos_view_zenith = clamp(dot(position, direction) / (length(position) * length(direction)), -1.0, 1.0);
    let cos_horizon_zenith = -safeSqrt(1.0 - sin_horizon_zenith * sin_horizon_zenith);

    let view_zenith = acos(cos_view_zenith);

    // We still want uv.y = 0 and uv.y = 1 to the extreme zenith angles
    // But since we make the horizon a straight line through the middle, and its zenith may not be PI/2,
    // we must scale angles differently depending on if they are above or below the horizon.

    var u = 0.0;
    var v = 0.0;

    if (cos_view_zenith > cos_horizon_zenith)
    {
        // Above horizon, v shall range from 0.0 to 0.5
        // view_zenith varies from 0 to horizon_zenith

        let angle_fraction = view_zenith / horizon_zenith;

        // Increase angle density towards v = 0.5
        v = (1.0 - sqrt(1.0 - angle_fraction)) * 0.5;
    }
    else
    {
        // Below horizon, v shall range from 0.5 to 1
        // view_zenith varies from horizon_zenith to PI

        let angle_fraction = (view_zenith - horizon_zenith) / (PI - horizon_zenith);

        // Increase angle density towards v = 0.5
        v = sqrt(angle_fraction) * 0.5 + 0.5;
    }

    {
        var azimuth = 0.0;

        if (direction.z == 0.0)
        {
            azimuth = sign(direction.x) * PI / 2.0;
        }
        else
        {
            azimuth = atan2(direction.x, direction.z);
        }

        // azimuth varies -PI to PI

        u = (azimuth / (2.0 * PI)) + 0.5;
    }

	// Nudge by a couple texels to avoid artifacts
	// The artifacts are caused by aliasing in the the ray-sphere intersection with the planet
	// The horizon will be rounded, and when the edges step it reveals gaps where texels below the horizon can be sampled from the skyview LUT, leading to patches of black.
	// This offset may require tweaking depending on the various resolutions
	const V_SAFE_OFFSET = 2.5;
	let lut_height = textureDimensions(skyview_lut).y;
	let v_safe = (0.5 * f32(lut_height) - V_SAFE_OFFSET) / f32(lut_height);
	v = min(v, v_safe);

    return textureSampleLevel(skyview_lut, lut_sampler, vec2<f32>(u, v), 0.0).xyz;
}

/*
 * Wavelength independent factor of how much of the sun's radiance is visible in a given direction.
 * This varies between 0.0 and 1.0 as the sun moves above the horizon.
 */
fn sunFractionOfRadianceVisible(
    atmosphere: ptr<function, Atmosphere>,
	light: ptr<function, CelestialLight>,
	position: vec3<f32>,
    direction: vec3<f32>
) -> f32
{
    let sin_horizon: f32 = atmosphere.planet_radius_Mm / length(position);
    let cos_horizon: f32 = -safeSqrt(1.0 - sin_horizon * sin_horizon);
	let mu = dot(normalize(position), normalize(direction));
	let intersects_ground = mu < cos_horizon;

	let light_direction = normalize(-(*light).forward);

	let mu_light = dot(normalize(position), normalize(light_direction));

	let cos_light_radius = cos((*light).angular_radius);
	let sin_light_radius = safeSqrt(1.0 - cos_light_radius * cos_light_radius);

	let horizon_factor = smoothstep(-sin_light_radius, sin_light_radius, mu_light - cos_horizon);

	// theta is the angle subtended on the surface of the sun by our view direction.
	// theta varies from 0 when looking directly at light_direction, to ~90 degrees when looking at the very edge of the solar disk
	// This is an approximation, that is accurate since lights are very far away
	// Other lights like perhaps a moon should use another model
	let cos_direction_light = dot(normalize(direction), light_direction);
	let direction_factor = f32(cos_direction_light > cos_light_radius);

	return direction_factor * horizon_factor;
}

/*
 * Returns the luminance of a sun disk.
 * Due to dynamic range issues, this is not tied well to actual luminance and is meant to be composited on unobstructed views of the sky, or reflections from perfectly smooth surfaces.
 */
fn sampleSunDisk(
    atmosphere: ptr<function, Atmosphere>,
    light: ptr<function, CelestialLight>,
	position: vec3<f32>,
    direction: vec3<f32>
) -> vec3<f32>
{
	// TODO: It's tricky to anti-alias the sun disk, and also keep it physically based due to the massive ratio of luminances between direct sunlight and the light otherwise present in the scene.
	// Perhaps a more ad-hoc approach is better, where we layer and blend a smoother looking sun disk. We can still capture the limb darkening and atmospheric transmittance.

	let light_direction = normalize(-(*light).forward);

	// This is distinct from the usual mu and mu_light.
	let cos_direction_light = dot(normalize(direction), light_direction);
	let cos_light_radius = cos((*light).angular_radius);

	// theta is the angle subtended on the surface of the sun by our view direction.
	// theta varies from 0 when looking directly at light_direction, to ~90 degrees when looking at the very edge of the solar disk
	// This is an approximation, that is accurate since lights are very far away
	// Other lights like perhaps a moon should use another model
	let sin_theta = acos(cos_direction_light) / (*light).angular_radius;

	if (sin_theta > 1.0)
	{
		return vec3<f32>(0.0);
	}

	// Limb darkening parameters and formula derived from
	// https://www.physics.hmc.edu/faculty/esin/a101/limbdarkening.pdf
	// (equation 1): intensity = 1 - u * (1 - mu^alpha)
	// Let u = 1
	// Table 2 gives these values for alpha:
	// R ~ 570 nm
	// G ~ 530 nm
	// B ~ 430 nm
	let limb_darkening_intensity_exponent = vec3<f32>(0.482, 0.522, 0.643);

	let cos_theta = safeSqrt(1.0 - sin_theta * sin_theta);
	let limb_darkening_intensity = pow(vec3<f32>(cos_theta), limb_darkening_intensity_exponent);

	let radius = length(position);
	let mu_light = dot(position, light_direction) / radius;
	let transmittance_to_light = sampleTransmittanceLUT_RadiusMu(
		transmittance_lut,
		lut_sampler,
		atmosphere,
		radius,
		mu_light
	);

	// Assume light is so far away that the apparent solid angle of the light from the camera is the same as at the edge of the atmosphere
	let solid_angle_from_space = 2.0 * PI * (1.0 - cos_light_radius);

	// Keep illuminance 1, and multiply it at the end like we do with scattering
	// This is a transfer factor with units steradian inverse, that represents the transmittance of illuminance at the edge of the atmosphere with a deflection of 0 degrees
	let light_luminance_from_space = vec3<f32>(1.0) / solid_angle_from_space;

	return limb_darkening_intensity * transmittance_to_light * light_luminance_from_space;
}

fn sampleSkyLuminance(
    atmosphere: ptr<function, Atmosphere>,
    light: ptr<function, CelestialLight>,
    position: vec3<f32>,
    direction: vec3<f32>
) -> vec3<f32>
{
    var luminance = sampleSkyViewLUT(atmosphere, position, direction) + sampleSunDisk(atmosphere, light, position, direction);
    return luminance;
}

fn sampleGeometryLuminance(
    atmosphere: ptr<function, Atmosphere>,
    light: ptr<function, CelestialLight>,
	screen_texture_uv: vec2<f32>,
    material: PBRTexel,
    position: vec3<f32>,
    direction: vec3<f32>,
    distance: f32,
    intersects_ground: bool
) -> vec3<f32>
{
    let light_direction = normalize(-(*light).forward);

    var origin_step = RaymarchStep();
    origin_step.radius = length(position);
    origin_step.mu = dot(position, direction) / origin_step.radius;
    origin_step.mu_light = dot(position, light_direction) / origin_step.radius;
    origin_step.nu = dot(direction, light_direction);

    let surface_step: RaymarchStep = stepRadiusMu(origin_step, distance);

	let aerial_perspective_scale = f32(textureDimensions(aerial_perspective_lut).z)
		* AERIAL_PERSPECTIVE_MM_PER_SLICE
		* METERS_PER_MM;
	let aerial_perspective = textureSampleLevel(
		aerial_perspective_lut,
		lut_sampler,
		vec3<f32>(screen_texture_uv,clamp(distance / aerial_perspective_scale, 0.0, 1.0)),
		0.0
	);
    let transmittance_to_surface = vec3<f32>(aerial_perspective.w);

    var light_luminance_transfer = aerial_perspective.xyz;

	// TODO: Better lighting model of the water

    let surface_position = position + direction * distance;
	let sea_subscattering_factor = 0.3;
	let sea_brdf = sea_subscattering_factor * diffuseBRDF(material);

	// Specular term, use perfect reflection to best capture sky dome image
	let sky_reflection_lobe_solid_angle = (4.0 * PI) / 200;
    let reflection_direction = reflect(normalize(direction), normalize(material.normal));
	let sky_reflection_luminance = sampleSkyViewLUT(atmosphere, surface_position, reflection_direction);
	light_luminance_transfer +=
		transmittance_to_surface
		* sky_reflection_lobe_solid_angle
		* sky_reflection_luminance
		* specularBRDF(material, reflection_direction, -direction)
		* computeFresnelPerfectReflection(material, reflection_direction);

	// Diffuse scattering from sky dome
	var sky_diffuse_lobe_solid_angle = 2.0 * PI;
	let diffuse_sample_direction = normalize(light_direction + vec3<f32>(0.0,1.0,0.0));
	let sky_indirect_luminance = sampleSkyViewLUT(atmosphere, surface_position, diffuse_sample_direction);

	light_luminance_transfer +=
		transmittance_to_surface
		* sky_diffuse_lobe_solid_angle
		* sky_indirect_luminance
		* sea_brdf
		* (1.0 - computeFresnelMicrofacet(material, light_direction, -direction));

	// Reflected/scattered direct sunlight
	let surface_transmittance_to_sun = sampleTransmittanceLUT_Ray(
		transmittance_lut,
        lut_sampler,
		atmosphere,
		surface_position,
		light_direction
	);

	/*
	 * Illuminance is luminance integrated over a solid angle, but our final
	 * result is a linear "transfer factor" and the solid angle is absorbed into
	 * a sun strength factor we multiply at the end. Thus we can't multiply a
	 * solid angle here.
	 */
	let light_illuminance = surface_transmittance_to_sun
		* sunFractionOfRadianceVisible(atmosphere, light, surface_position, light_direction);
	light_luminance_transfer +=
		transmittance_to_surface
		* light_illuminance
		* mix(
			sea_brdf,
			specularBRDF(material, light_direction, -direction),
			computeFresnelMicrofacet(material, light_direction, -direction)
		);

    return light_luminance_transfer;
}

@compute @workgroup_size(16,16,1)
fn renderCompositedAtmosphere(@builtin(global_invocation_id) global_id : vec3<u32>)
{
    let texel_coord = vec2<u32>(global_id.xy);
    let size = textureDimensions(gbuffer_color_with_surface_world_depth_in_alpha);
    if(texel_coord.x >= size.x || texel_coord.y >= size.y)
    {
        return;
    }

    var atmosphere = u_global.atmosphere;
    var light = u_global.light;
	var camera = u_global.camera;

    let offset = vec2<f32>(0.5, 0.5);
    let uv = (vec2<f32>(texel_coord) + offset) / vec2<f32>(size);

    let origin = vec3<f32>(0.0, atmosphere.planet_radius_Mm, 0.0) + camera.position.xyz / METERS_PER_MM;

    let ndc_space_coord = (uv - vec2<f32>(0.5)) * 2.0 * vec2<f32>(1.0, -1.0);
    let near_plane_depth = 1.0;
    let direction_view_space = camera.inv_proj * vec4(ndc_space_coord, near_plane_depth, 1.0);
    let direction_world = normalize((camera.inv_view * vec4<f32>(direction_view_space.xyz, 0.0)).xyz);

    let color_with_surface_world_depth_in_alpha = textureLoad(gbuffer_color_with_surface_world_depth_in_alpha, texel_coord, 0);
    let normal_with_surface_foam_strength_in_alpha = textureLoad(gbuffer_normal_with_surface_foam_strength_in_alpha, texel_coord, 0);
	var normal = normal_with_surface_foam_strength_in_alpha.xyz;
	if(dot(normal, -direction_world) < 0.0)
	{
		// Hack to construct a plausible normal from a back-facing normal
		normal -= 2.0 * dot(normal, -direction_world) * (-direction_world);
	}

	let foam_strength = normal_with_surface_foam_strength_in_alpha.w;

    let depth = color_with_surface_world_depth_in_alpha.a / METERS_PER_MM;

    var luminance_transfer = vec3<f32>(0.0);

    let sin_horizon: f32 = atmosphere.planet_radius_Mm / length(origin);
    let cos_horizon: f32 = -safeSqrt(1.0 - sin_horizon * sin_horizon);
	let mu = dot(normalize(origin), normalize(direction_world));
	let intersects_ground = mu < cos_horizon;

    if (depth <= 0.0)
    {
		/*

		/*
		 * Our ocean surface *should* cover the entire planet, so taking this
		 * path might lead to floating point errors and visible gaps at the
		 * horizon.
		 */

        if (intersects_ground)
        {
            let material: PBRTexel = convertPBRPropertiesWater(
				vec3<f32>(1.0),
				vec3<f32>(0.0,1.0,0.0),
				1.0
			);
            luminance_transfer = sampleGeometryLuminance(
				&atmosphere,
				&light,
				uv,
				material,
				origin,
				direction_world,
				depth,
				intersects_ground
			);
        }
        else
        {
            luminance_transfer = sampleSkyLuminance(&atmosphere, &light, origin, direction_world);
        }
		*/

		luminance_transfer = sampleSkyLuminance(&atmosphere, &light, origin, direction_world);
    }
    else
    {
        // View of geometry in gbuffer
		let color = color_with_surface_world_depth_in_alpha.xyz;
        let material: PBRTexel = convertPBRPropertiesWater(
			color,
			normal.xyz,
			foam_strength
		);
		luminance_transfer = sampleGeometryLuminance(
			&atmosphere,
			&light,
			uv,
			material,
			origin,
			direction_world,
			depth,
			true
		);
    }

    let luminance = light.strength * light.color * luminance_transfer;

    let output = vec4<f32>(sRGB_EOTF(HDRtoSRGB_ACES(luminance)),1.0);
    textureStore(output_color, texel_coord, output);
}
`,j="rgba16float";class Ee{constructor(e,t,a,n,i,o,s,u){r(this,"group0Layout"),r(this,"group1Layout"),r(this,"lutSampler"),r(this,"group0"),r(this,"group1"),r(this,"outputColor"),r(this,"outputColorView"),r(this,"pipeline"),this.group0Layout=e.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:j}},{binding:1,visibility:GPUShaderStage.COMPUTE,sampler:{type:s?"filtering":"non-filtering"}},{binding:2,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:s?"float":"unfilterable-float",viewDimension:"2d"}},{binding:3,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:s?"float":"unfilterable-float",viewDimension:"2d"}},{binding:4,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:s?"float":"unfilterable-float",viewDimension:"2d"}},{binding:5,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:"float",viewDimension:"3d"}}],label:"Atmosphere Camera Group 0"}),this.group1Layout=e.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{}}],label:"Atmosphere Camera Group 1"}),this.outputColor=e.createTexture({format:j,size:{width:1,height:1},usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING,label:"Atmosphere Camera Output Color"}),this.outputColorView=this.outputColor.createView(),this.lutSampler=e.createSampler({label:"Atmosphere Camera LUT Sampler",magFilter:s?"linear":"nearest",minFilter:s?"linear":"nearest"}),this.group0=e.createBindGroup({layout:this.group0Layout,entries:[{binding:0,resource:this.outputColorView},{binding:1,resource:this.lutSampler},{binding:2,resource:a},{binding:3,resource:n},{binding:4,resource:i},{binding:5,resource:o}],label:"Atmosphere Camera Group 0"}),this.group1=e.createBindGroup({layout:this.group1Layout,entries:[{binding:0,resource:{buffer:u.buffer}}],label:"Atmosphere Camera Group 1"});const c=e.createShaderModule({code:Ue,label:"Atmosphere Camera"});this.pipeline=e.createComputePipeline({compute:{module:c,entryPoint:"renderCompositedAtmosphere"},layout:e.createPipelineLayout({bindGroupLayouts:[this.group0Layout,this.group1Layout,t]}),label:"Atmosphere Camera"})}resize(e,t,a,n,i,o){this.outputColor=t.createTexture({format:this.outputColor.format,size:e,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING}),this.outputColorView=this.outputColor.createView(),this.group0=t.createBindGroup({layout:this.group0Layout,entries:[{binding:0,resource:this.outputColorView},{binding:1,resource:this.lutSampler},{binding:2,resource:a},{binding:3,resource:n},{binding:4,resource:i},{binding:5,resource:o}],label:"Atmosphere Camera Group 0 Resized"})}record(e,t,a){const n=e.beginComputePass({timestampWrites:t!==void 0?{querySet:t.querySet,beginningOfPassWriteIndex:t.beginWriteIndex,endOfPassWriteIndex:t.endWriteIndex}:void 0,label:"Atmosphere Camera"});n.setPipeline(this.pipeline),n.setBindGroup(0,this.group0),n.setBindGroup(1,this.group1),n.setBindGroup(2,a.readGroup),n.dispatchWorkgroups(Math.ceil(this.outputColor.width/16),Math.ceil(this.outputColor.height/16)),n.end()}}const Le=`const PI = 3.141592653589793;
const METERS_PER_MM = 1000000;

// Sizeof(Atmosphere) = 8 * 16 = 128
// Alignof(Atmosphere) = 16
struct Atmosphere
{
    scattering_rayleigh_per_Mm : vec3<f32>,
    density_scale_rayleigh_Mm : f32,
    absorption_rayleigh_per_Mm : vec3<f32>,

    planet_radius_Mm : f32,

    scattering_mie_per_Mm : vec3<f32>,
    density_scale_mie_Mm : f32,
    absorption_mie_per_Mm : vec3<f32>,

    atmosphere_radius_Mm : f32,

    ground_albedo : vec3<f32>,
    padding0 : f32,

    scattering_ozone_per_Mm : vec3<f32>,
    padding1 : f32,

    absorption_ozone_per_Mm : vec3<f32>,
    padding2 : f32,

    padding3 : vec4<f32>,
}

// Sizeof(CelestialLight) = 2 * 16 = 32
// Alignof(CelestialLight) = 16
struct CelestialLight
{
    color: vec3<f32>,
    strength: f32,

	forward: vec3<f32>,
    angular_radius: f32,
}

// Sizeof(Camera) = 4 * 64 = 256
// Alignof(Camera) = 16
struct Camera
{
    inv_proj: mat4x4<f32>,

	inv_view: mat4x4<f32>,

	proj_view: mat4x4<f32>,

    position: vec4<f32>,
	forward: vec4<f32>,
	padding0: mat2x4<f32>,
}

// Sizeof(Time) = 16
// Alignof(Time) = 16
struct Time
{
	padding0: vec2<f32>,
	time_seconds: f32,
	delta_time_seconds: f32,
}

// All of these uniform values have identical lifetimes: they update before rendering for the frame, and are constant throughout
// Thus we store everything together to simplify the bindings
// Sizeof(GlobalUBO) = 672 + 16 = 688 (as of writing)
// Alignof(GlobalUBO) = 16
struct GlobalUBO
{
	camera: Camera,           // offsets
	ocean_camera: Camera,     // 0   + 256 = 256
	atmosphere: Atmosphere,   // 256 + 256 = 512
	light: CelestialLight,    // 512 + 128 = 640
	time: Time,               // 640 + 32  = 672
}

struct RaySphereHit
{
    hit: bool,
    t0: f32,
    t1: f32,
}

// t1 > t0, values can be negative. Function returns true even if the sphere is behind the ray.
// If this returns false, t0 and t1 are unchanged.
fn raySphereIntersection(
    ray_origin: vec3<f32>,
    ray_direction_normalized: vec3<f32>,
    radius: f32
) -> RaySphereHit
{
    // Method taken from "Precision Improvements for Ray/Sphere Intersection"
    // by Eric Haines, Johannes Günther, and Tomas Akenine-Möller
    //
    // The method includes tricks to reduce float point inaccuracy errors.

    let f: vec3<f32> = ray_origin;
    let d: vec3<f32> = ray_direction_normalized;
    let b: f32 = -1.0 * dot(f, d);
    let center_to_intersection_chord: vec3<f32> = f + b * d;
    let discriminant: f32 = radius * radius - dot(center_to_intersection_chord, center_to_intersection_chord);
    let c: f32 = dot(f, f) - radius * radius;

    var output : RaySphereHit;
    output.hit = false;
    output.t0 = 0.0;
    output.t1 = 0.0;

    if (discriminant < 0.0)
    {
        return output;
    }

    var q: f32 = b;
    if (b < 0.0)
    {
        q -= sqrt(discriminant);
    }
    else
    {
        q += sqrt(discriminant);
    }

    output.hit = true;
    output.t0 = c / q;
    output.t1 = q;

    if (output.t0 > output.t1)
    {
        let temp: f32 = output.t0;
        output.t0 = output.t1;
        output.t1 = temp;
    }

    return output;
}

struct RayPlaneHit {
	hit: bool,
	t: f32,
}

fn rayPlaneIntersection(
	ray_origin: vec3<f32>,
	ray_direction: vec3<f32>,
	plane_origin: vec3<f32>,
	plane_normal: vec3<f32>
) -> RayPlaneHit
{
	var result: RayPlaneHit;

	let perp = dot(plane_normal, ray_direction);
	result.t = dot(plane_origin - ray_origin, plane_normal) / perp;
	result.hit = (abs(perp) > 0.00001) && (result.t > 0.0);

	return result;
}


@group(0) @binding(0) var aerial_perspective_lut: texture_storage_3d<rgba16float, write>;
@group(0) @binding(1) var lut_sampler: sampler;
@group(0) @binding(2) var transmittance_lut: texture_2d<f32>;
@group(0) @binding(3) var multiscatter_lut: texture_2d<f32>;

@group(1) @binding(0) var<uniform> u_global: GlobalUBO;

// This file contains shared methods and definitions for raymarching the atmosphere and generating the lookup tables


// Based on:
// "A Scalable and Production Ready Sky and Atmosphere Rendering Technique" by Sébastien Hillaire (2020)
// https://sebh.github.io/publications/egsr2020.pdf
//
// "Precomputed Atmospheric Scattering: a New Implementation" by Eric Bruneton (2017)
// https://ebruneton.github.io/precomputed_atmospheric_scattering

const AERIAL_PERSPECTIVE_MM_PER_SLICE = 0.001;

const ISOTROPIC_PHASE = 1.0 / (4.0 * PI);

// Transmittance LUT UV mapping based on Bruneton et al. 2017 method
// https://ebruneton.github.io/precomputed_atmospheric_scattering/atmosphere/functions.glsl#transmittance_lookup

fn safeSqrt(value: f32) -> f32 { return sqrt(max(value, 0.0)); }

// Squeeze in UV values by half a texel, so the bounds of our sampled function can be stored precisely at the edge of
// the texture
fn textureCoordFromUnitRange(value: f32, length: u32) -> f32
{
    return 0.5 / f32(length) + value * (1.0 - 1.0 / f32(length));
}
fn unitRangeFromTextureCoord(coord: f32 , length: u32) -> f32
{
    return (coord - 0.5 / f32(length)) / (1.0 - 1.0 / f32(length));
}

// Radius is the distance in Mm from the center of the planet, aka length of position vector
// Mu is the cosine of the angle between the position vector and the direction vector we want to sample the
// transmittance in
fn transmittanceLUT_RMu_to_UV(
    atmosphere: ptr<function,Atmosphere>,
    radius: f32,
    mu: f32,
	dimensions: vec2<u32>,
) -> vec2<f32>
{
    let atmosphere_radius_Mm_squared: f32 = (*atmosphere).atmosphere_radius_Mm * (*atmosphere).atmosphere_radius_Mm;
    let planet_radius_Mm_squared: f32 = (*atmosphere).planet_radius_Mm * (*atmosphere).planet_radius_Mm;

    // Ground level, horizontal ray distance to atmospheric boundary
    let h: f32 = safeSqrt(atmosphere_radius_Mm_squared - planet_radius_Mm_squared);

    // Distance to horizon, which is also the exact position the previous horizontal ray starts at
    let rho: f32 = safeSqrt(radius * radius - planet_radius_Mm_squared);

    // rho + H = distance to atmosphere boundary when looking at the horizon
    // It represents the distance along the biggest angle (most negative mu) that has nonzero transmittance,
    // since any lower and we intersect the planet
    // This angle changes as the radius does, so this mapping seeks to compress a different range of mu values
    // at any given radius value

    // Distance to edge of atmosphere, with both its min and max values at this given radius.
    let d: f32 = max(-radius * mu + safeSqrt(radius * radius * (mu * mu - 1.0) + atmosphere_radius_Mm_squared), 0.0);
    let d_min: f32 = (*atmosphere).atmosphere_radius_Mm - radius;
    let d_max: f32 = rho + h;

    let x_mu: f32 = (d - d_min) / (d_max - d_min);
    let x_radius: f32 = rho / h;

    return vec2<f32>(
        textureCoordFromUnitRange(x_mu, dimensions.x),
        textureCoordFromUnitRange(x_radius, dimensions.y)
    );
}

// Inverse of transmittanceLUT_RMu_to_UV
// Allocates more texture space to interesting rays near the horizon.
fn transmittanceLUT_UV_to_RMu(
    atmosphere: ptr<function,Atmosphere>,
    uv: vec2<f32>,
	dimensions: vec2<u32>,
) -> vec2<f32>
{
    let x_mu : f32 = unitRangeFromTextureCoord(uv.x, dimensions.x);
    let x_radius : f32 = unitRangeFromTextureCoord(uv.y, dimensions.y);

    let atmosphere_radius_Mm_squared : f32 = (*atmosphere).atmosphere_radius_Mm * (*atmosphere).atmosphere_radius_Mm;
    let planet_radius_Mm_squared : f32 = (*atmosphere).planet_radius_Mm * (*atmosphere).planet_radius_Mm;

    // Ground level, horizontal ray distance to atmospheric boundary
    let h : f32 = safeSqrt(atmosphere_radius_Mm_squared - planet_radius_Mm_squared);

    let rho : f32 = h * x_radius;

    let radius : f32 = safeSqrt(rho * rho + planet_radius_Mm_squared);

    let d_min : f32 = (*atmosphere).atmosphere_radius_Mm - radius;
    let d_max : f32 = rho + h;

    let d : f32 = (d_max - d_min) * x_mu + d_min;

    // This boundary condition is important depending on floating point errors
    // We don't need to check radius since it is bounded below by planet radius, and that shouldn't be near 0
    let D_EPSILON: f32 = 0.000000001;
    if (d < D_EPSILON)
    {
        // mu is ambiguous since we are at the very edge of the atmosphere, where no angle produces valid transmittance
        // values
        return vec2<f32>(radius, 1.0);
    }

    let mu : f32 = (h * h - rho * rho - d * d) / (2.0 * radius * d);
    // Equivalently, mu = (atmosphere_radius_Mm_squared - radius * radius - d*d) / (2.0 * radius * d)
    // But atmosphere_radius_Mm_squared and radius * radius are large, so this avoids floating point errors from adding
    // these to the much smaller d * d

    // This clamp is very important
    return vec2<f32>(radius, clamp(mu, -1.0, 1.0));
}

fn multiscatterLUT_RMu_to_UV(
    atmosphere: ptr<function,Atmosphere>,
    radius: f32,
    mu_light: f32,
	dimensions: vec2<u32>,
) -> vec2<f32>
{
    let u_unit: f32 = 0.5 + 0.5 * mu_light;
    let v_unit: f32 = clamp(
        (radius - (*atmosphere).planet_radius_Mm)
            / ((*atmosphere).atmosphere_radius_Mm - (*atmosphere).planet_radius_Mm),
        0.0, 1.0
    );

    return vec2<f32>(
        textureCoordFromUnitRange(u_unit, dimensions.x),
        textureCoordFromUnitRange(v_unit, dimensions.y)
    );
}

fn multiscatterLUT_UV_to_RMu(
    atmosphere: ptr<function,Atmosphere>,
    uv: vec2<f32>,
	dimensions: vec2<u32>,
) -> vec2<f32>
{
    let u_unit: f32 = unitRangeFromTextureCoord(uv.x, dimensions.x);
    let v_unit: f32 = unitRangeFromTextureCoord(uv.y, dimensions.y);

    let mu_light: f32 = 2.0 * (u_unit - 0.5);

    // The exact radius is not too critical, and multiscattering is sensitive to being out of range, so we squeeze into
    // a slightly smaller planet radius to ensure we are valid.
    let radius: f32 = mix(
        (*atmosphere).planet_radius_Mm * (1.0002),
        (*atmosphere).atmosphere_radius_Mm * (0.9998),
        v_unit
    );

    return vec2<f32>(radius, mu_light);
}

fn sampleMultiscatterLUT(
    lut: texture_2d<f32>,
    s: sampler,
    atmosphere: ptr<function,Atmosphere>,
    radius: f32,
    mu_light: f32
) -> vec3<f32>
{
    let uv: vec2<f32> = multiscatterLUT_RMu_to_UV(
		atmosphere,
		radius,
		mu_light,
		textureDimensions(lut)
	);

    return textureSampleLevel(lut, s, uv, 0.0).xyz;
}

fn sampleTransmittanceLUT_RadiusMu(
    lut: texture_2d<f32>,
    s: sampler,
    atmosphere: ptr<function,Atmosphere>,
    radius: f32,
    mu: f32
) -> vec3<f32>
{
    let uv: vec2<f32> = transmittanceLUT_RMu_to_UV(
		atmosphere,
		radius,
		mu,
		textureDimensions(lut)
	);

    let sample = textureSampleLevel(lut, s, uv, 0.0).xyz;

    return sample;
}

fn sampleTransmittanceLUT_Ray(
    lut: texture_2d<f32>,
    s: sampler,
    atmosphere: ptr<function,Atmosphere>,
    position: vec3<f32>,
    direction: vec3<f32>
) -> vec3<f32>
{
    let radius: f32 = length(position);
    let mu: f32 = (dot(position, direction) / (length(position) * length(direction)));

    return sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, radius, mu);

}

fn sampleTransmittanceLUT_Segment(
    lut: texture_2d<f32>,
    s: sampler,
    atmosphere: ptr<function,Atmosphere>,
    r_start: f32,
    mu_start: f32,
    d: f32,
    intersects_ground: bool
) -> vec3<f32>
{
    let r_end = clamp(
        safeSqrt(d * d + 2.0 * r_start * mu_start * d + r_start * r_start),
        (*atmosphere).planet_radius_Mm, (*atmosphere).atmosphere_radius_Mm
    );
    let mu_end = clamp((r_start * mu_start + d) / r_end, -1.0, 1.0);

    if(intersects_ground)
    {
        return min(
            sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, r_end, -mu_end)
            / sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, r_start, -mu_start),
            vec3<f32>(1.0)
        );
    }
    else
    {
        return min(
            sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, r_start, mu_start)
            / sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, r_end, mu_end),
            vec3<f32>(1.0)
        );
    }
}

struct ExtinctionSample
{
    scattering_rayleigh: vec3<f32>,
    scattering_mie: vec3<f32>,
    scattering_ozone: vec3<f32>,

    absorption_rayleigh: vec3<f32>,
    absorption_mie: vec3<f32>,
    absorption_ozone: vec3<f32>,

    // This parameter is redundant, but convenient.
    // It is the sum of all scattering values.
    scattering: vec3<f32>,

    extinction: vec3<f32>,
}

// Ensure altitude and density_scale are the same units.
fn densityExponential(altitude: f32, density_scale: f32) -> f32
{ return exp(-altitude / density_scale); }

// Hardcoded with values for ozone
fn densityTent(altitude_km: f32) -> f32
{ return max(0.0, 1.0 - abs(altitude_km - 25.0) / 15.0); }

// Returned units are per Mm. Take care that this function takes in altitude, NOT radius.
// radius := altitude + planetRadius
fn sampleExtinction(atmosphere: ptr<function,Atmosphere>, altitude_Mm: f32) -> ExtinctionSample
{
    let density_rayleigh: f32 = densityExponential(altitude_Mm, (*atmosphere).density_scale_rayleigh_Mm);
    let scattering_rayleigh: vec3<f32> = (*atmosphere).scattering_rayleigh_per_Mm * density_rayleigh;
    let absorption_rayleigh: vec3<f32> = (*atmosphere).absorption_rayleigh_per_Mm * density_rayleigh;

    let density_mie: f32 = densityExponential(altitude_Mm, (*atmosphere).density_scale_mie_Mm);
    let scattering_mie: vec3<f32> = (*atmosphere).scattering_mie_per_Mm * density_mie;
    let absorption_mie: vec3<f32> = (*atmosphere).absorption_mie_per_Mm * density_mie;

    let density_ozone: f32 = densityTent(altitude_Mm * 1000.0);
    let scattering_ozone: vec3<f32> = (*atmosphere).scattering_ozone_per_Mm * density_ozone;
    let absorption_ozone: vec3<f32> = (*atmosphere).absorption_ozone_per_Mm * density_ozone;

    var extinction_sample: ExtinctionSample;
    extinction_sample.scattering_rayleigh = scattering_rayleigh;
    extinction_sample.scattering_mie = scattering_mie;
    extinction_sample.scattering_ozone = scattering_ozone;

    extinction_sample.absorption_rayleigh = absorption_rayleigh;
    extinction_sample.absorption_mie = absorption_mie;
    extinction_sample.absorption_ozone = absorption_ozone;

    extinction_sample.scattering = scattering_rayleigh + scattering_mie + scattering_ozone;
    extinction_sample.extinction = extinction_sample.scattering + absorption_rayleigh + absorption_mie + absorption_ozone;

    return extinction_sample;
}

// Input cosine is the cosine of the angle between incident and outgoing scattering directions
fn phaseRayleigh(cosine: f32) -> f32
{
    let scalar: f32 = 3.0 / (16.0 * PI);
    let numerator: f32 = (1.0 + cosine * cosine);

    return scalar * numerator;
}

// Input cosine is the cosine of the angle between incident and outgoing scattering directions
// Input g is a value from -1 to 1 that controls the concentration of back vs forward scattering.
// Note: g = 0 reduces to the case of our rayleigh phase function
fn phaseMie(cosine: f32, g: f32) -> f32
{
    let scalar: f32 = 3.0 / (8.0 * PI);
    let numerator: f32 = (1.0 - g * g) * (1.0 + cosine * cosine);
    let denominator: f32 = (2.0 + g * g) * pow(1.0 + g * g - 2.0 * g * cosine, 1.5);
    return scalar * numerator / denominator;
}

// (float, float) 2d encoding of position + direction
struct RaymarchStep
{
    // Distance from origin, represents (0, radius, 0)
    radius: f32,
    // Cosine of the angle between (0, radius, 0) and implicit direction vector
    mu: f32,
    // Cosine of the angle with the direction to the light
    mu_light: f32,
    // Cosine of travel direction vector and light direction vector
    nu: f32,
};

// Returns 'start' moved 'step_distance' units along the implicit direction vector
// nu is the dot product between normalized direction and light direction vector
fn stepRadiusMu(
    start: RaymarchStep,
    step_distance: f32,
) -> RaymarchStep
{
    // Consider starting position (0, radius, 0)
    // and step vector of d * (sqrt(1 - mu * mu), mu, 0)

    // When computing changes in radii and mu, we use this method everywhere since norm is preserved upon rotation
    // and all cases of stepping can be reduced to the above two vectors

    var result: RaymarchStep;
    result.radius = safeSqrt(
        step_distance * step_distance + 2.0 * start.radius * start.mu * step_distance
            + start.radius * start.radius
    );
    result.mu = (start.radius * start.mu + step_distance) / result.radius;
    result.nu = start.nu;
    result.mu_light = (start.radius * start.mu_light + step_distance * start.nu) / result.radius;

    return result;
}

// Samples a segment, given in RMu coordinates
fn sampleTransmittanceLUT_RayMarchStep(
    lut: texture_2d<f32>,
    s: sampler,
    atmosphere: ptr<function,Atmosphere>,
    start: RaymarchStep,
    step_distance: f32
) -> vec3<f32>
{
    const STEP_DISTANCE_EPSILON = 0.0000001;
    if (step_distance < STEP_DISTANCE_EPSILON)
    {
        return vec3<f32>(1.0);
    }

    let end: RaymarchStep = stepRadiusMu(start, step_distance);

    var transmittance = vec3<f32>(0.0);
    if (start.mu > 0.0)
    {
        // Oriented up into atmosphere, so we directly sample LUT
        transmittance = sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, start.radius, start.mu)
                      / sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, end.radius, end.mu);
    }
    else
    {
        // Oriented down towards planet, so direct samples would be invalid
        // Instead, we flip the direction
        transmittance = sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, end.radius, -end.mu)
                      / sampleTransmittanceLUT_RadiusMu(lut, s, atmosphere, start.radius, -start.mu);
    }

    return clamp(transmittance, vec3<f32>(0.0), vec3<f32>(1.0));
}

// Contains methods and overloads for raymarching the atmosphere


/*
Flags explanation:

MULTISCATTERING
- read from a multiscattering texture when computing the in-scattering path integral
- Should be disabled when calculating multiscattering, and enabled otherwise

ISOTROPIC_PHASE
- Use an isotropic phase function when calculating out-scattering at each point
- Should be enabled when calculating multiscattering, and disabled otherwise

SCATTERING_NONLINEAR_SAMPLE
- Helps with small sample counts, by concentrating more samples closer to the ray origin

LIGHT_ILLUMINANCE_IS_ONE
- When computing luminance using a light, use 1 instead of the strength.
- This converts the returned luminance into a transfer value, which can be scaled by solar illuminance whenever

HIGH_SAMPLE_COUNT
- Whether to use a much higher sample count. Useful for one time renders, like the multiscattering LUT.

SAMPLE_PATH_TRANSMITTANCE
- Instead of accumulating transmittance along the raymarched path, sample the transmittance LUT.
- This adds ~ 6 * N + 2 samples of the transmittance LUT texture, where N is the sample count
- The results are subtly different, the transmittance LUT has precision issues when trying to sample intervals due to needing to multiply and divide by nearly zero floats when near the horizon
- By default this should be left off, we're raymarching extinction samples while integrating so sampling the transmittance LUT for the main path ends up being wasteful
*/

// Make sure to include atmosphere_common first

struct AtmosphereRaycastResult
{
	// Whether or not the raycast resulted in hitting the planet
	// This is important for sampling the transmittance lut
	intersects_ground: bool,

	// The origin of the raycast can be outside the atmosphere, inside the planet, etc so we get an interval
	t_min: f32,
	t_max: f32,
}

fn raycastAtmosphere(atmosphere: ptr<function, Atmosphere>, origin: vec3<f32>, direction: vec3<f32>) -> AtmosphereRaycastResult
{
	var result: AtmosphereRaycastResult;

    let planet_hit = raySphereIntersection(origin, direction, (*atmosphere).planet_radius_Mm);
    let atmosphere_hit = raySphereIntersection(origin, direction, (*atmosphere).atmosphere_radius_Mm);

    let inside_planet = planet_hit.hit && planet_hit.t0 < 0.0 && planet_hit.t1 > 0.0;
    let intersects_atmosphere = atmosphere_hit.hit && atmosphere_hit.t1 > 0.0;
    if (!intersects_atmosphere || inside_planet)
    {
		result.intersects_ground = true;
		result.t_min = 0.0;
		result.t_max = 0.0;
        return result;
    }

	// Optimistic, assume we don't hit planet and take the atmosphere_hit interval as-is
	result.t_min = max(atmosphere_hit.t0, 0.0);
	result.t_max = atmosphere_hit.t1;

    // Assuming the planet was hit, we have atmosphere_hit.t0 < planet_hit.t0 < planet_hit.t1 < atmosphere_hit.t1
    // If this assumption ever fails (such as 0 atmosphere?), this method needs to be reworked anyway to skip some
    // calculations

    if (planet_hit.hit && planet_hit.t0 > 0.0)
    {
		result.intersects_ground = true;

		// We assume the planet, if hit, is ALWAYS closer than the further edge of the atmosphere
		// So the next line is redundant and we use the simpler, uncommented form
		// result.t_max = min(planet_hit.t0, result.t_max)

        result.t_max = planet_hit.t0;
    }

	return result;
}

struct ScatteringResult
{
    luminance: vec3<f32>,
	transmittance: vec3<f32>,
    multiscattering_transfer: vec3<f32>,
}

// TODO: should compile-time optional parameters just be accessed by the global resource introduced before this file is included?

// Returns the computed single-scattered luminance from origin to origin + direction * sample_distance
//
// include_ground: Whether to include the luminance from the planet's virtual surface
//
// intersects_ground: Whether or not the provided origin/direction intersect the planet's surface.
// 	This could just be computed internally, but often the calling code is more informed and passing this avoids redundant calculations.
//
// If include_ground is TRUE, then sample_distance is assumed to go to the planet's surface.
// If include_ground is TRUE, intersects_ground must also be true for out-scattering of surface to be included.
// A misuse of 'include_ground', 'intersects_ground', and 'sample_distance' (such as the wrong distance) will lead to incorrect results.
fn computeLuminanceScatteringIntegral(
    atmosphere: ptr<function, Atmosphere>,
    light:  ptr<function, CelestialLight>,
    lut_sampler: sampler,
    transmittance_lut: texture_2d<f32>,
    multiscatter_lut: texture_2d<f32>,
    origin: vec3<f32>,
    direction: vec3<f32>,
    include_ground: bool,
	intersects_ground: bool,
	sample_distance: f32,
) -> ScatteringResult
{
    var result: ScatteringResult;
    result.luminance = vec3<f32>(0.0);
	result.transmittance = vec3<f32>(1.0);
    result.multiscattering_transfer = vec3<f32>(0.0);

	if(sample_distance <= 0.0)
	{
		result.luminance = vec3<f32>(1.0, 1.0, 0.0);
		return result;
	}

    // This is the direction of the incoming light, which is the light we are interested in computing the magnitude of.
    // This is the parameter of the phase functions
	let incident_cosine = dot((*light).forward, -direction);

    let start_radius: f32 = length(origin);
    let start_mu: f32 = dot(origin, direction) / (length(origin) * length(direction));
    let start_mu_light: f32 = dot(origin, -(*light).forward) / (length(origin) * length((*light).forward));
    let nu: f32 = dot(-(*light).forward, direction) / (length((*light).forward) * length(direction));

    let origin_step = RaymarchStep(start_radius, start_mu, start_mu_light, nu);

	var transmittance_accumulated = vec3<f32>(1.0);

    // We estimate the integral in Equation (1) of Hillaire's paper.

    const SAMPLE_COUNT = 64.0;

	const T_SUBSTEP = 0.4;

	var t: f32 = 0.0;
	var d_t: f32 = 0.0;
    for (var s = 0.0; s < SAMPLE_COUNT; s += 1.0)
    {
		{
			// quadratic distribution
        	var t_begin = s / SAMPLE_COUNT;
        	var t_end = (s + 1.0) / SAMPLE_COUNT;
			t_begin = sample_distance * t_begin * t_begin;
			t_end = sample_distance * t_end * t_end;
			d_t = t_end - t_begin;
			t = mix(t_begin, t_end, T_SUBSTEP);
		}

        let sample_step: RaymarchStep = stepRadiusMu(origin_step, t);

        let altitude = sample_step.radius - (*atmosphere).planet_radius_Mm;
        let extinction_sample: ExtinctionSample = sampleExtinction(atmosphere, altitude);

        // Terms of Equation (3) we assume to not vary over the path segment

	    let transmittance_to_t_begin = transmittance_accumulated;
		let transmittance_along_path = exp(-extinction_sample.extinction * d_t);
		transmittance_accumulated *= transmittance_along_path;

        // Ozone does not scatter light normally, so we arbitrarily use rayleigh's phase function in case ozone's scattering
        // coefficient is nonzero
        let phase_times_scattering: vec3<f32> =
            extinction_sample.scattering_rayleigh * phaseRayleigh(incident_cosine)
            + extinction_sample.scattering_mie * phaseMie(incident_cosine, 0.8)
            + extinction_sample.scattering_ozone * phaseRayleigh(incident_cosine);

        let multiscatter = sampleMultiscatterLUT(multiscatter_lut, lut_sampler, atmosphere, sample_step.radius, sample_step.mu_light);

        var occlusion_planet: f32 = 0.0;
        {
            let horizon_sin = (*atmosphere).planet_radius_Mm / sample_step.radius;
            let horizon_cos = -safeSqrt(1.0 - horizon_sin * horizon_sin);

            occlusion_planet = f32(sample_step.mu_light < horizon_cos);
        }

        let transmittance_to_sun = sampleTransmittanceLUT_RadiusMu(transmittance_lut, lut_sampler, atmosphere, sample_step.radius, sample_step.mu_light);
        var shadowing = vec3<f32>(transmittance_to_sun * (1.0 - f32(occlusion_planet)));

        // Integrate transmittance := e^(-extinction(x) * ||x - begin||) from begin to end
        // This is a single interval of the integral in Equation (1) from Hillaire's paper,
        // with all constant terms factored out above
        let scattering_illuminance_integral = (vec3(1.0) - transmittance_along_path) / extinction_sample.extinction;

        result.luminance +=
            (phase_times_scattering * shadowing + multiscatter * extinction_sample.scattering)
            * scattering_illuminance_integral * transmittance_to_t_begin
            * 1.0;
        result.multiscattering_transfer += extinction_sample.scattering * scattering_illuminance_integral * transmittance_to_t_begin;
    }

    if (include_ground && intersects_ground)
    {
        let sample_step: RaymarchStep = stepRadiusMu(origin_step, sample_distance);

        let transmittance_to_surface = sampleTransmittanceLUT_RayMarchStep(transmittance_lut, lut_sampler, atmosphere, origin_step, sample_distance);
        let transmittance_to_sun = sampleTransmittanceLUT_RadiusMu(transmittance_lut, lut_sampler, atmosphere, sample_step.radius, sample_step.mu_light);

        let normal_dot_light = clamp(sample_step.mu_light, 0.0, 1.0);

        let diffuse = (*atmosphere).ground_albedo / PI;

        result.luminance +=
            transmittance_to_surface * transmittance_to_sun * normal_dot_light * diffuse
            * 1.0;
    }

	result.transmittance = transmittance_accumulated;

    return result;
}


// See 'atmosphere_common.inc.wgsl' for sources on what this method is based on.

// Aerial Perspective LUT
//
// This map is very similar to the Skyview LUT (see skyview_LUT.wgsl), in that it stores camera in-scattering to be sampled later
// However, the aerial perspective LUT is 3D and represents slices of in-scattering
// This makes it possible to sample the in-scattering at various distances to be applied on top of geometry
//
// The LUT is mapped to the camera frustum and must be generated each time the camera/atmosphere parameters change
//
// The dimensions of the LUT can be very low (32 x 32 x 32 texels) due to the low variance of the atmosphere over the cameras FOV

@compute @workgroup_size(16,16,1)
fn computeAerialPerspective(@builtin(global_invocation_id) global_id : vec3<u32>,)
{
    let texel_coord = vec3<u32>(global_id.xyz);
    let size = textureDimensions(aerial_perspective_lut);
    if(texel_coord.x >= size.x || texel_coord.y >= size.y || texel_coord.z >= size.z)
    {
        return;
    }

    var atmosphere = u_global.atmosphere;
    var light = u_global.light;
	var camera = u_global.camera;

    let offset = vec2<f32>(0.5, 0.5);
    let uv = (vec2<f32>(texel_coord.xy) + offset) / vec2<f32>(size.xy);

    let origin = vec3<f32>(0.0, atmosphere.planet_radius_Mm, 0.0) + camera.position.xyz / METERS_PER_MM;

    let ndc_space_coord = (uv - vec2<f32>(0.5)) * 2.0 * vec2<f32>(1.0, -1.0);
    let near_plane_depth = 1.0;
    let direction_view_space = camera.inv_proj * vec4(ndc_space_coord, near_plane_depth, 1.0);
    let direction_world = normalize((camera.inv_view * vec4<f32>(direction_view_space.xyz, 0.0)).xyz);

	let atmosphere_raycast = raycastAtmosphere(&atmosphere, origin, direction_world);

	let sample_distance = min(
		atmosphere_raycast.t_max - atmosphere_raycast.t_min,
		f32(texel_coord.z + 1u) * AERIAL_PERSPECTIVE_MM_PER_SLICE
	);

    let include_ground = false;
    let result = computeLuminanceScatteringIntegral(
        &atmosphere,
        &light,
        lut_sampler,
        transmittance_lut,
        multiscatter_lut,
        origin + direction_world * atmosphere_raycast.t_min,
        direction_world,
        include_ground,
		atmosphere_raycast.intersects_ground,
		sample_distance
    );

	let in_scattering = result.luminance;
	let mean_transmittance = dot(result.transmittance, vec3<f32>(1.0)) / 3.0;
    textureStore(aerial_perspective_lut, texel_coord, vec4(in_scattering, mean_transmittance));
}
`,Y="rgba16float";class Ce{constructor(e,t,a,n,i,o){r(this,"texture"),r(this,"view"),r(this,"group0"),r(this,"group1"),r(this,"pipeline"),this.texture=e.createTexture({size:t,dimension:"3d",format:Y,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING,label:"Aerial Perspective LUT"}),this.view=this.texture.createView({label:this.texture.label,dimension:"3d"});const s=e.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{access:"write-only",viewDimension:"3d",format:Y}},{binding:1,visibility:GPUShaderStage.COMPUTE,sampler:{type:i?"filtering":"non-filtering"}},{binding:2,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:i?"float":"unfilterable-float"}},{binding:3,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:i?"float":"unfilterable-float"}}],label:"Aerial Perspective LUT"});this.group0=e.createBindGroup({layout:s,entries:[{binding:0,resource:this.view},{binding:1,resource:e.createSampler({magFilter:i?"linear":"nearest",minFilter:i?"linear":"nearest"})},{binding:2,resource:a},{binding:3,resource:n}],label:"Aerial Perspective LUT Group 0"});const u=e.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{}}],label:"Aerial Perspective LUT Group 1"});this.group1=e.createBindGroup({layout:u,entries:[{binding:0,resource:{buffer:o.buffer}}],label:"Aerial Perspective LUT Group 1"});const c=e.createShaderModule({code:Le});this.pipeline=e.createComputePipeline({compute:{module:c,entryPoint:"computeAerialPerspective"},layout:e.createPipelineLayout({bindGroupLayouts:[s,u]}),label:"Aerial Perspective LUT"})}record(e,t){const a=e.beginComputePass({timestampWrites:t!==void 0?{querySet:t.querySet,beginningOfPassWriteIndex:t.beginWriteIndex,endOfPassWriteIndex:t.endWriteIndex}:void 0,label:"Aerial Perspective LUT"});a.setPipeline(this.pipeline),a.setBindGroup(0,this.group0),a.setBindGroup(1,this.group1),a.dispatchWorkgroups(Math.ceil(this.texture.width/16),Math.ceil(this.texture.height/16),Math.ceil(this.texture.depthOrArrayLayers/1)),a.end()}}const Ge=["Scene","GBufferColor","GBufferNormal","AtmosphereTransmittanceLUT","AtmosphereMultiscatterLUT","AtmosphereSkyviewLUT","AtmosphereAerialPerspectiveLUT","FFTWaveSpectrumGaussianNoise","FFTWaveInitialAmplitude","FFTWaveDx_plus_iDy_Dz_iDxdz_Amplitude","FFTWaveDydx_plus_iDydz_Dxdx_plus_iDzdz_Amplitude","FFTWaveTurbulenceJacobian","FFTWaveDx_Dy_Dz_Dxdz_Spatial","FFTWaveDydx_Dydz_Dxdx_Dzdz_Spatial"];class S{constructor(e){r(this,"texture"),r(this,"view"),r(this,"viewDimension"),this.texture=e;let t=1,a=this.texture.dimension;this.texture.dimension=="2d"&&this.texture.depthOrArrayLayers>1&&(t=this.texture.depthOrArrayLayers,a="2d-array"),this.viewDimension=a,this.view=e.createView({label:`Render Output View for '${e.label}'`,dimension:this.viewDimension,arrayLayerCount:t,baseArrayLayer:0})}get mipLevelCount(){return this.texture.mipLevelCount}get extent(){return{width:this.texture.width,height:this.texture.height,depthOrArrayLayers:this.texture.depthOrArrayLayers}}}class Fe{constructor(){r(this,"flip",!1),r(this,"colorGain",{r:1,g:1,b:1}),r(this,"channelMasks",{r:!0,g:!0,b:!0}),r(this,"swapBARG",!1),r(this,"mipLevel",0),r(this,"arrayLayer",0)}}const Ie=[{id:"AtmosphereTransmittanceLUT",flip:!0},{id:"AtmosphereMultiscatterLUT",flip:!0,colorGain:{r:20,g:20,b:20}},{id:"AtmosphereSkyviewLUT",colorGain:{r:8,g:8,b:8}},{id:"AtmosphereAerialPerspectiveLUT",colorGain:{r:8,g:8,b:8}},{id:"FFTWaveInitialAmplitude",colorGain:{r:100,g:100,b:100}},{id:"FFTWaveDx_plus_iDy_Dz_iDxdz_Amplitude",colorGain:{r:100,g:100,b:100}},{id:"FFTWaveDydx_plus_iDydz_Dxdx_plus_iDzdz_Amplitude",colorGain:{r:100,g:100,b:100}}];class Oe{constructor(){r(this,"options"),r(this,"textureProperties"),r(this,"controllers"),this.options={outputTexture:"Scene",renderOutputTransforms:new Map(Ge.map(e=>[e,new Fe]))},Ie.forEach(({id:e,...t})=>{const a=this.options.renderOutputTransforms.get(e);this.options.renderOutputTransforms.set(e,{...a,...t})}),this.textureProperties=new Map}current(){return{tag:this.options.outputTexture,transform:structuredClone(this.options.renderOutputTransforms.get(this.options.outputTexture))}}updateVariableControllerBounds(){if(this.controllers===void 0)return;const e=this.textureProperties.get(this.options.outputTexture);e!==void 0&&(this.controllers.mipLevel.max(e.mipLevelCount-1),this.controllers.mipLevel.disable(e.mipLevelCount==1),e.mipLevelCount==1&&this.controllers.mipLevel.setValue(0),this.controllers.mipLevel.updateDisplay(),this.controllers.arrayLayer.max(e.depthOrArrayLayerCount-1),this.controllers.arrayLayer.disable(e.depthOrArrayLayerCount==1),e.depthOrArrayLayerCount==1&&this.controllers.arrayLayer.setValue(0),this.controllers.arrayLayer.updateDisplay())}setTextureProperties(e){this.textureProperties.set(e.tag,{mipLevelCount:e.mipLevelCount,depthOrArrayLayerCount:e.depthOrArrayLayerCount}),e.tag==this.options.outputTexture&&this.updateVariableControllerBounds()}setOutput(e){if(this.controllers===void 0)return;this.options.outputTexture=e;const t=this.options.renderOutputTransforms.get(this.options.outputTexture);this.controllers.flip.object=t,this.controllers.colorGain.r.object=t.colorGain,this.controllers.colorGain.g.object=t.colorGain,this.controllers.colorGain.b.object=t.colorGain,this.controllers.channelMasks.r.object=t.channelMasks,this.controllers.channelMasks.g.object=t.channelMasks,this.controllers.channelMasks.b.object=t.channelMasks,this.controllers.swapBARG.object=t,this.controllers.mipLevel.object=t,this.controllers.arrayLayer.object=t,this.updateVariableControllerBounds()}setUniformColorScale(e){const t=this.options.renderOutputTransforms.get(this.options.outputTexture);t.colorGain.r=e,t.colorGain.g=e,t.colorGain.b=e}setupUI(e){const t=e.addFolder("Render Output").close();t.add({outputTexture:"Scene"},"outputTexture",{"Final Scene":"Scene","[GBuffer] Color":"GBufferColor","[GBuffer] Normal":"GBufferNormal","[Atmosphere] Transmittance LUT":"AtmosphereTransmittanceLUT","[Atmosphere] Multiscatter LUT":"AtmosphereMultiscatterLUT","[Atmosphere] Skyview LUT":"AtmosphereSkyviewLUT","[Atmosphere] Aerial Perspective LUT":"AtmosphereAerialPerspectiveLUT","[FFT Waves] Gaussian Noise":"FFTWaveSpectrumGaussianNoise","[FFT Waves] Initial Amplitude":"FFTWaveInitialAmplitude","[FFT Waves] Frequency Domain (Dx + i * Dy, Dz + i * Dxdz)":"FFTWaveDx_plus_iDy_Dz_iDxdz_Amplitude","[FFT Waves] Frequency Domain (Dydx + i * Dydz, Dxdx + i * Dzdz)":"FFTWaveDydx_plus_iDydz_Dxdx_plus_iDzdz_Amplitude","[FFT Waves] (Turbulence, Jacobian)":"FFTWaveTurbulenceJacobian","[FFT Waves] Spatial Domain (Dx, Dy, Dz, Dxdz)":"FFTWaveDx_Dy_Dz_Dxdz_Spatial","[FFT Waves] Spatial Domain (Dydx, Dydz, Dxdx, Dzdz)":"FFTWaveDydx_Dydz_Dxdx_Dzdz_Spatial"}).name("Render Output").listen().onFinishChange(g=>{this.setOutput(g)});const a=this.options.renderOutputTransforms.get(this.options.outputTexture),n=t.add(a,"flip").name("Flip Image").listen(),i=t.add(a,"mipLevel").min(0).max(0).step(1).name("Mip Level").listen(),o=t.add(a,"arrayLayer").min(0).max(0).step(1).name("Array Layer").listen(),s=-1e4,u=1e4;t.add({scale:0},"scale").name("Uniform Scale").min(s).max(u).onChange(g=>{this.setUniformColorScale(g)});const c=t.add(a.channelMasks,"r").name("R").listen(),d=t.add(a.colorGain,"r").name("").min(s).max(u).listen(),_=t.add(a.channelMasks,"g").name("G").listen(),m=t.add(a.colorGain,"g").name("").min(s).max(u).listen(),y=t.add(a.channelMasks,"b").name("B").listen(),v=t.add(a.colorGain,"b").name("").min(s).max(u).listen(),p=t.add(a,"swapBARG").name("Swap Blue-Alpha and Red-Green Pairs").listen();this.controllers={flip:n,colorGain:{r:d,g:m,b:v},channelMasks:{r:c,g:_,b:y},swapBARG:p,mipLevel:i,arrayLayer:o}}}const Q="rgba16float",Be="float",qe="depth32float",X="rgba16float",ke="float";class ne{constructor(e,t,a){r(this,"colorWithSurfaceWorldDepthInAlpha"),r(this,"colorWithSurfaceWorldDepthInAlphaView"),r(this,"normalWithSurfaceFoamStrengthInAlpha"),r(this,"normalWithSurfaceFoamStrengthInAlphaView"),r(this,"depth"),r(this,"depthView"),r(this,"readGroupLayout"),r(this,"readGroup"),r(this,"writeGroupLayout"),r(this,"writeGroup"),this.colorWithSurfaceWorldDepthInAlpha=e.createTexture({size:t,dimension:"2d",format:Q,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,label:"GBuffer ColorWithSurfaceWorldDepthInAlpha"}),this.colorWithSurfaceWorldDepthInAlphaView=this.colorWithSurfaceWorldDepthInAlpha.createView({label:"GBuffer ColorWithSurfaceWorldDepthInAlpha"}),this.normalWithSurfaceFoamStrengthInAlpha=e.createTexture({size:t,dimension:"2d",format:X,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,label:"GBuffer Normal"}),this.normalWithSurfaceFoamStrengthInAlphaView=this.normalWithSurfaceFoamStrengthInAlpha.createView({label:"GBuffer Normal"}),this.readGroupLayout=(a==null?void 0:a.readGroupLayout)??e.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE|GPUShaderStage.FRAGMENT,texture:{sampleType:Be}},{binding:1,visibility:GPUShaderStage.COMPUTE|GPUShaderStage.FRAGMENT,texture:{sampleType:ke}}],label:"GBuffer Read Group Layout"}),this.readGroup=e.createBindGroup({layout:this.readGroupLayout,entries:[{binding:0,resource:this.colorWithSurfaceWorldDepthInAlphaView},{binding:1,resource:this.normalWithSurfaceFoamStrengthInAlphaView}],label:"GBuffer Read Group"}),this.writeGroupLayout=(a==null?void 0:a.writeGroupLayout)??e.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE|GPUShaderStage.FRAGMENT,storageTexture:{access:"write-only",format:Q}},{binding:1,visibility:GPUShaderStage.COMPUTE|GPUShaderStage.FRAGMENT,storageTexture:{access:"write-only",format:X}}],label:"GBuffer Write Group Layout"}),this.writeGroup=e.createBindGroup({layout:this.writeGroupLayout,entries:[{binding:0,resource:this.colorWithSurfaceWorldDepthInAlphaView},{binding:1,resource:this.normalWithSurfaceFoamStrengthInAlphaView}],label:"GBuffer Write Group"}),this.depth=e.createTexture({size:t,dimension:"2d",format:qe,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,label:"GBuffer Depth"}),this.depthView=this.depth.createView({label:"GBuffer Depth"})}get extent(){return{width:this.colorWithSurfaceWorldDepthInAlpha.width,height:this.colorWithSurfaceWorldDepthInAlpha.height}}get formats(){return{colorWithSurfaceWorldDepthInAlpha:this.colorWithSurfaceWorldDepthInAlpha.format,normalWithSurfaceFoamStrengthInAlpha:this.normalWithSurfaceFoamStrengthInAlpha.format,depth:this.depth.format}}colorRenderables(){return{colorWithSurfaceWorldDepthInAlpha:new S(this.colorWithSurfaceWorldDepthInAlpha),normalWithSurfaceFoamStrengthInAlpha:new S(this.normalWithSurfaceFoamStrengthInAlpha)}}}const Ne=`// Textures must have the same dimension

const PI = 3.141592653589793;
const METERS_PER_MM = 1000000;

// Sizeof(Atmosphere) = 8 * 16 = 128
// Alignof(Atmosphere) = 16
struct Atmosphere
{
    scattering_rayleigh_per_Mm : vec3<f32>,
    density_scale_rayleigh_Mm : f32,
    absorption_rayleigh_per_Mm : vec3<f32>,

    planet_radius_Mm : f32,

    scattering_mie_per_Mm : vec3<f32>,
    density_scale_mie_Mm : f32,
    absorption_mie_per_Mm : vec3<f32>,

    atmosphere_radius_Mm : f32,

    ground_albedo : vec3<f32>,
    padding0 : f32,

    scattering_ozone_per_Mm : vec3<f32>,
    padding1 : f32,

    absorption_ozone_per_Mm : vec3<f32>,
    padding2 : f32,

    padding3 : vec4<f32>,
}

// Sizeof(CelestialLight) = 2 * 16 = 32
// Alignof(CelestialLight) = 16
struct CelestialLight
{
    color: vec3<f32>,
    strength: f32,

	forward: vec3<f32>,
    angular_radius: f32,
}

// Sizeof(Camera) = 4 * 64 = 256
// Alignof(Camera) = 16
struct Camera
{
    inv_proj: mat4x4<f32>,

	inv_view: mat4x4<f32>,

	proj_view: mat4x4<f32>,

    position: vec4<f32>,
	forward: vec4<f32>,
	padding0: mat2x4<f32>,
}

// Sizeof(Time) = 16
// Alignof(Time) = 16
struct Time
{
	padding0: vec2<f32>,
	time_seconds: f32,
	delta_time_seconds: f32,
}

// All of these uniform values have identical lifetimes: they update before rendering for the frame, and are constant throughout
// Thus we store everything together to simplify the bindings
// Sizeof(GlobalUBO) = 672 + 16 = 688 (as of writing)
// Alignof(GlobalUBO) = 16
struct GlobalUBO
{
	camera: Camera,           // offsets
	ocean_camera: Camera,     // 0   + 256 = 256
	atmosphere: Atmosphere,   // 256 + 256 = 512
	light: CelestialLight,    // 512 + 128 = 640
	time: Time,               // 640 + 32  = 672
}


const CASCADE_CAPACITY = 4u;

struct CascadeUBO
{
	wave_number_min_max: vec2<f32>,
	wave_patch_extent_meters: f32,
	padding0: f32,
}
struct FourierWavesUBO
{
	fourier_grid_size: u32,
	gravity: f32,
	padding0: f32,
	wave_period_seconds: f32,

	wind_speed_meters_per_second: f32,
	wind_fetch_meters: f32,
	wave_swell: f32,
	padding1: f32,

	cascades: array<CascadeUBO, CASCADE_CAPACITY>,
}

// Implementation derived from:
// Nicolas Lutz, Arnaud Schoentgen, and Guillaume Gilet. 2024. Fast orientable aperiodic ocean synthesis using tiling and blending. Proc. ACM Comput. Graph. Interact. Tech. 7, 3, Article 49 (August 2024), 22 pages. https://doi.org/10.1145/3675388

// Deterministic wave parameters derived from texture coordinate
struct WaveParameters
{
	// Ranges from -fourier_grid_size / 2 to fourier_grid_size / 2
	wave_coord: vec2<i32>,

	wave_vector: vec2<f32>,
	wave_number: f32,
	delta_wave_number: f32,
	frequency: f32,
	d_frequency_d_wave_number: f32,
	wind_angle: f32,
}

fn quantizeFrequency(frequency: f32, fundamental_frequency: f32) -> f32
{
	let multiple = frequency / fundamental_frequency;
	return (multiple - fract(multiple)) * fundamental_frequency;
}

fn waveParameters(
	settings: FourierWavesUBO,
	patch_extent_meters: f32,
	texel_coord: vec2<u32>
) -> WaveParameters
{
	var result: WaveParameters;

	let wave_coord_offset = i32(settings.fourier_grid_size / 2u);
	let g = settings.gravity;

	result.wave_coord = vec2<i32>(i32(texel_coord.x), i32(texel_coord.y)) - vec2<i32>(wave_coord_offset);

	const QUANTIZED_FREQUENCIES = true;
	if (QUANTIZED_FREQUENCIES)
	{
		let frequency_quantization_step = 2.0 * PI / settings.wave_period_seconds;
		let non_quantized_fundamental_wave_number = 2.0 * PI / patch_extent_meters;
		let fundamental_frequency = quantizeFrequency(
			sqrt(g * non_quantized_fundamental_wave_number),
			frequency_quantization_step
		);
		let fundamental_wave_number = fundamental_frequency * fundamental_frequency / g;
		result.delta_wave_number = fundamental_wave_number;

		let wave_number_non_quantized = length(fundamental_wave_number * vec2<f32>(result.wave_coord));

		result.frequency = quantizeFrequency(sqrt(g * wave_number_non_quantized), frequency_quantization_step);
		// d/dk (sqrt(gk)) = g / (2 * sqrt(g * k))
		result.d_frequency_d_wave_number = 0.5 * g / result.frequency;

		result.wave_number = result.frequency * result.frequency / g;

		result.wave_vector = result.wave_number * normalize(vec2<f32>(result.wave_coord));
	}
	else
	{
		let fundamental_wave_number = 2.0 * PI / patch_extent_meters;
		let fundamental_frequency = sqrt(g * fundamental_wave_number);
		result.delta_wave_number = fundamental_wave_number;

		result.wave_vector = fundamental_wave_number * vec2<f32>(result.wave_coord);
		result.wave_number = length(result.wave_vector);

		result.frequency = sqrt(g * result.wave_number);
		// d/dk (sqrt(gk)) = g / (2 * sqrt(g * k))
		result.d_frequency_d_wave_number = 0.5 * g * inverseSqrt(g * result.wave_number);
	}

	result.wind_angle = atan2(result.wave_vector.y, result.wave_vector.x);

	return result;
}

fn waveSpectrumJONSWAP(settings: FourierWavesUBO, frequency: f32, peak_frequency: f32) -> f32
{
	let wind_speed = settings.wind_speed_meters_per_second;
	let wind_fetch = settings.wind_fetch_meters;
	let g = settings.gravity;

	let alpha = 0.076 * pow(wind_speed * wind_speed / (wind_fetch * g), 0.22);
	let gamma = 3.3;
	var sigma = 0.07;
	if (frequency > peak_frequency)
	{
		sigma = 0.09;
	}
	let r = exp(-(frequency-peak_frequency)*(frequency-peak_frequency)/(2 * sigma * sigma * peak_frequency * peak_frequency));

	let f_ratio = peak_frequency / frequency;

	let numerator =
		alpha
		* g * g
		* exp(-1.25 * f_ratio * f_ratio * f_ratio * f_ratio)
		* pow(gamma, r);

	let denominator = frequency * frequency * frequency * frequency * frequency;

	return numerator / denominator;
}

// This fit is valid for positive reals greater than or equal to 1.0, tested up to z = 141.0
// Note, gamma(z) = (z-1)! for integral z
fn gammaApprox(z: f32) -> f32
{
	// Values computed from Lanczos approximation, see webgpu/sky-sea/scripts/lanczos.py
	// Generated with n = 2 and r = 2.603209
	// r choice is not arbitrary, it is determined from the largest zero of an error function (see script for details)
	// For this strategy for choosing r, c_0 will just be 1 due to float precision
	const c_0 = 1.000000000267524225;
	const c_1 = 4.739837024840160673;
	const c_2 = -1.393160104839919367;
	const r = 2.603209;

	let s = c_0 + c_1 / (z+1.0) + c_2 / (z+2.0);
	return sqrt(2.0 * PI) * pow(z + r + 0.5, z + 0.5) * exp(-(z + r + 0.5)) * s;
}

fn waveDirectionalSpreading(settings: FourierWavesUBO, frequency: f32, peak_frequency: f32, angle: f32) -> f32
{
	let f_ratio = peak_frequency / frequency;
	let swell = settings.wave_swell;

	let s = 16.0 * tanh(f_ratio) * swell * swell;

	let gamma_0 = gammaApprox(s + 1.0);
	let gamma_1 = gammaApprox(2.0 * s + 1.0);

	let q = (pow(2.0, 2.0 * s - 1.0) / PI) * (gamma_0 * gamma_0 / gamma_1);

	return q * pow(abs(cos(angle / 2.0)), 2.0 * s);
}

@group(0) @binding(0) var out_initial_amplitude: texture_storage_2d_array<rg32float, write>;
@group(0) @binding(1) var in_gaussian_random_pairs: texture_2d_array<f32>;

@group(1) @binding(0) var<uniform> u_global: GlobalUBO;
@group(1) @binding(1) var<uniform> u_fourier_waves: FourierWavesUBO;

@compute @workgroup_size(16, 16, 1)
fn computeInitialAmplitude(@builtin(global_invocation_id) global_id: vec3<u32>)
{
    let texel_coord: vec2<u32> = global_id.xy;
	let array_layer: u32 = global_id.z;
    let size: vec2<u32> = textureDimensions(out_initial_amplitude);
    if texel_coord.x >= size.x
		|| texel_coord.y >= size.y
	{
        return;
    }

	let gaussian_pair = textureLoad(in_gaussian_random_pairs, texel_coord, array_layer, 0).xy;
	let wave = waveParameters(u_fourier_waves, u_fourier_waves.cascades[array_layer].wave_patch_extent_meters, texel_coord);
	let wave_number_min_max = u_fourier_waves.cascades[array_layer].wave_number_min_max;

	if (abs(wave.wave_number) < wave.delta_wave_number
		|| abs(wave.wave_number) < wave_number_min_max.x
		|| abs(wave.wave_number) > wave_number_min_max.y
	)
	{
		let amplitude = vec2<f32>(0.0, 0.0);
		textureStore(
			out_initial_amplitude,
			texel_coord,
			array_layer,
			vec4<f32>(amplitude, 0.0, 0.0)
		);
		return;
	}

	let g = u_fourier_waves.gravity;
	let wind_speed = u_fourier_waves.wind_speed_meters_per_second;
	let wind_fetch = u_fourier_waves.wind_fetch_meters;

	let peak_frequency = 22.0 * pow(g * g / (wind_speed * wind_fetch), 1.0 / 3.0);

	let spectrum = waveSpectrumJONSWAP(u_fourier_waves, wave.frequency, peak_frequency)
		* waveDirectionalSpreading(u_fourier_waves, wave.frequency, peak_frequency, wave.wind_angle);

	let magnitude = sqrt(
		2.0
		* spectrum
		* (wave.d_frequency_d_wave_number / wave.wave_number)
		* wave.delta_wave_number * wave.delta_wave_number
	);

	let amplitude = inverseSqrt(2.0)
		* gaussian_pair
		* magnitude;

	textureStore(
		out_initial_amplitude,
		texel_coord,
		array_layer,
		vec4<f32>(amplitude, 0.0, 0.0)
	);
}


/*
 * Capital D refers to displacement of the water surface
 * Lowercase d refers to partial derivative
 *
 * In order to halve the total FFT's we have to perform, we can do the following trick
 * If we have the following results from the FT:
 * 		complex f(n) -> purely real a
 * 		complex g(n) -> purely real b
 *
 * Then, by the linearity of the FT over linear combinations of the input function, we have that:
 *		 complex f(n) + i * g(n) -> a + i * b
 *
 * Thus, we can pack two sets of inputs for the FFT into the same two input channels, and avoid a wasted output channel.
 */
@group(0) @binding(2) var out_packed_Dx_plus_iDy_Dz_iDxdz_amplitudeArray: texture_storage_2d_array<rgba32float, write>;
@group(0) @binding(3) var out_packed_Dydx_plus_iDydz_Dxdx_plus_iDzdz_amplitudeArray: texture_storage_2d_array<rgba32float, write>;
@group(0) @binding(4) var in_initial_amplitude: texture_2d_array<f32>;

/* Commented to avoid re-declaration
@group(1) @binding(0) var<uniform> u_global: GlobalUBO;
@group(1) @binding(1) var<uniform> u_fourier_waves: FourierWavesUBO;
*/
fn complexMult(a: vec2<f32>, b: vec2<f32>) -> vec2<f32>
{
	return vec2<f32>(a.x*b.x - a.y*b.y, a.x*b.y + a.y*b.x);
}

@compute @workgroup_size(16, 16, 1)
fn computeTimeDependentAmplitude(@builtin(global_invocation_id) global_id: vec3<u32>)
{
    let texel_coord: vec2<u32> = global_id.xy;
	let array_layer: u32 = global_id.z;
    let size = textureDimensions(in_initial_amplitude);
    if texel_coord.x >= size.x
		|| texel_coord.y >= size.y
	{
        return;
    }

	let wave = waveParameters(u_fourier_waves, u_fourier_waves.cascades[array_layer].wave_patch_extent_meters, texel_coord);
	let wave_number_min_max = u_fourier_waves.cascades[array_layer].wave_number_min_max;

	if (abs(wave.wave_number) < wave.delta_wave_number
		|| abs(wave.wave_number) < wave_number_min_max.x
		|| abs(wave.wave_number) > wave_number_min_max.y
	)
	{
		textureStore(
			out_packed_Dx_plus_iDy_Dz_iDxdz_amplitudeArray,
			texel_coord,
			array_layer,
			vec4<f32>(0.0)
		);
		textureStore(
			out_packed_Dydx_plus_iDydz_Dxdx_plus_iDzdz_amplitudeArray,
			texel_coord,
			array_layer,
			vec4<f32>(0.0)
		);
		return;
	}

	let k_amplitude = textureLoad(in_initial_amplitude, texel_coord, array_layer, 0).xy;

	let k_minus_coord = vec2<u32>(
		(u_fourier_waves.fourier_grid_size - texel_coord.x) % u_fourier_waves.fourier_grid_size,
		(u_fourier_waves.fourier_grid_size - texel_coord.y) % u_fourier_waves.fourier_grid_size
	);
	let k_minus_amplitude = textureLoad(in_initial_amplitude, k_minus_coord, array_layer, 0).xy;
	let k_minus_amplitude_conjugate = vec2<f32>(k_minus_amplitude.x, -k_minus_amplitude.y);

	let phase = wave.frequency * u_global.time.time_seconds;
	let exponential = vec2<f32>(cos(phase), sin(phase));
	let exponential_conjugate = vec2<f32>(exponential.x, -exponential.y);

	let Dy_amplitude = complexMult(exponential, k_amplitude)
		+ complexMult(exponential_conjugate, k_minus_amplitude_conjugate);

	/*
	 * For gerstner waves, displacement in x/z directions is based on the
	 * gradient (x,z)-Displacement of:
	 *
	 * h(k,t) * exp(i * dot(k,x))
	 * 	= i * k(k,t)/k * h(k,t) * exp(i * dot(k,x))
	 *
	 * Where i is the imaginary number sqrt(-1)
	 *
	 * We're going to be doing a few derivatives.
	 * h(k,t) is independent of (x,z) when performing the fourier transform sum,
	 * since we sum over all fixed k and k is not a function of position at this
	 * point. So in general taking the derivative brings down a factor of
	 * i * k_x or i * k_z from the exponential
	 */

	let iDy_amplitude = vec2<f32>(-Dy_amplitude.y, Dy_amplitude.x);

	var one_over_wave_number = 1.0 / wave.wave_number;

	// wave.wave_vector.y here actually refers to the wave-vector's z component, since it is two-channel
	let k_x = wave.wave_vector.x;
	let k_z = wave.wave_vector.y;

	let Dx_amplitude = iDy_amplitude * k_x * one_over_wave_number;
	let Dz_amplitude = iDy_amplitude * k_z * one_over_wave_number;

	let Dxdx_amplitude = -Dy_amplitude * k_x * k_x * one_over_wave_number;
	let Dydx_amplitude = iDy_amplitude * k_x;
	// Mixed derivative is redundant, since Dxdz = Dzdx, so we do not keep it
	// let Dzdx_amplitude = -Dy_amplitude * k_x * k_z / wave.wave_number;

	let Dxdz_amplitude = -Dy_amplitude * k_x * k_z * one_over_wave_number;
	let Dydz_amplitude = iDy_amplitude * k_z;
	let Dzdz_amplitude = -Dy_amplitude * k_z * k_z * one_over_wave_number;

	let iDxdz_amplitude = vec2<f32>(-Dxdz_amplitude.y, Dxdz_amplitude.x);
	let iDydz_amplitude = vec2<f32>(-Dydz_amplitude.y, Dydz_amplitude.x);
	let iDzdz_amplitude = vec2<f32>(-Dzdz_amplitude.y, Dzdz_amplitude.x);

	textureStore(
		out_packed_Dx_plus_iDy_Dz_iDxdz_amplitudeArray,
		texel_coord,
		array_layer,
		vec4<f32>(Dx_amplitude + iDy_amplitude, Dz_amplitude + iDxdz_amplitude)
	);
	textureStore(
		out_packed_Dydx_plus_iDydz_Dxdx_plus_iDzdz_amplitudeArray,
		texel_coord,
		array_layer,
		vec4<f32>(Dydx_amplitude + iDydz_amplitude, Dxdx_amplitude + iDzdz_amplitude)
	);
}

@group(0) @binding(5) var out_turbulence_jacobian_array: texture_storage_2d_array<rgba16float, write>;
@group(0) @binding(6) var in_turbulence_jacobian_array: texture_2d_array<f32>;
@group(0) @binding(7) var in_Dx_Dy_Dz_Dxdz_spatial_array: texture_2d_array<f32>;
@group(0) @binding(8) var in_Dydx_Dydz_Dxdx_Dzdz_spatial_array: texture_2d_array<f32>;

/* Commented to avoid re-declaration
@group(1) @binding(0) var<uniform> u_global: GlobalUBO;
*/

@compute @workgroup_size(16, 16, 1)
fn accumulateTurbulence(@builtin(global_invocation_id) global_id: vec3<u32>)
{
	let texel_coord = vec2<u32>(global_id.xy);
	let array_layer: u32 = global_id.z;
    let size = textureDimensions(out_turbulence_jacobian_array);
    if texel_coord.x >= size.x || texel_coord.y >= size.y {
        return;
    }

	// TODO: support for mipmapping and lambda scaling factor present in wave_surface_displacement.wgsl
	const mip = 0u;

	let Dx_Dy_Dz_Dxdz = textureLoad(in_Dx_Dy_Dz_Dxdz_spatial_array, texel_coord, array_layer, mip);
	let Dydx_Dydz_Dxdx_Dzdz = textureLoad(in_Dydx_Dydz_Dxdx_Dzdz_spatial_array, texel_coord, array_layer, mip);

	let Dydx = Dydx_Dydz_Dxdx_Dzdz.x;
	let Dydz = Dydx_Dydz_Dxdx_Dzdz.y;

	let Dxdz = Dx_Dy_Dz_Dxdz.w;
	let Dzdx = Dxdz;

	var Dxdx = Dydx_Dydz_Dxdx_Dzdz.z;
	var Dzdz = Dydx_Dydz_Dxdx_Dzdz.w;

	var jacobian_xx = 1.0;
	var jacobian_zz = 1.0;
	var jacobian_xz = 0.0;
	var jacobian_zx = 0.0;

	jacobian_xx += Dxdx;
	jacobian_zz += Dzdz;

	jacobian_xz += Dxdz;
	jacobian_zx += Dzdx;

	let jacobian = jacobian_xx * jacobian_zz - jacobian_xz * jacobian_zx;
	let turbulence_previous = textureLoad(in_turbulence_jacobian_array, texel_coord, array_layer, mip).x;

	/*
	 * Function that causes foam to linger.
	 *
	 * Note this is not actually the turbulence of the displacement as a
	 * field, but instead an ad-hoc visually appealing approximation.
	 *
	 * This creates foam even when jacobian is nonnegative, but visually
	 * this does not look too strange. Utilizing this value takes a lot of
	 * tweaking with scaling/bias factors anyway.
	 *
	 * I found this on a few examples on github, and I'd like to know where
	 * it originates since I struggled to come up with my own function that
	 * works well.
	 */
	let turbulence = min(
		turbulence_previous + u_global.time.delta_time_seconds * 0.5 / max(jacobian, 0.5),
		jacobian
	);

	textureStore(out_turbulence_jacobian_array, texel_coord, array_layer,
		vec4<f32>(turbulence, jacobian, 0.0, 0.0)
	);
}
`,We=`const TWO_PI = 6.28318530717958647693;

/*
 * Terminology
 *  - DFT  - Discrete Fourier Transform
 *  - FFT  - Fast Fourier Transform
 *  - DFFT - Discrete Fast Fourier Transform
 */

/*
 * Decimation-in-time Inverse Discrete Fast Fourier Transform
 * Performed on a Square 2D Grid
 */

struct DFFTParameters
{
	log_2_size: u32,
	size: u32,
	b_inverse: f32,
}

/*
 * A two-point DFT, used as the atomic step in the recursive DFFT algorithm. A
 * single twist in the so-called "butterfly" diagram of an FFT.
 * Butterfly indices are generated with the Stockham formulation, meaning that
 * no permutation step is required before performing the actual algorithm.
 */
struct TwoPointButterfly
{
	twiddle: vec2<f32>,

	// The un-twiddled index
	lower_index: u32,

	// The twiddled index
	upper_index: u32,
}

/*
 * out_butterflies_log2n_by_n:
 *
 * 	2d array of dimension log2(N) by N, where N is the size of the input grid
 * 	Each row represents a step in the 1D DFFT
 * 	step 0 is the first step performed, and represents the initial N/2 2-point DFTs
 * 	step log2(N) - 1 is the last step performed, and represents the final N-point DFT
 *
 * 	Each element is the source indices for a 2-point DFT plus twiddle factor
 */

@group(0) @binding(0) var<uniform> u_parameters: DFFTParameters;
@group(0) @binding(1) var<storage, read_write> out_butterflies_log2n_by_n: array<TwoPointButterfly>;

fn butterflyIndex(step: u32, major_index: u32) -> u32
{
	return step * u_parameters.size + major_index;
}

// Only imaginary argument since that's what is needed
fn complexExp(imaginary_arg: f32) -> vec2<f32>
{
	return vec2<f32>(cos(imaginary_arg),sin(imaginary_arg));
}

// Dispatch should have (N / 2, 1) invocations, where N is the grid size.
@compute @workgroup_size(2, 1)
fn precomputeDFFTInstructions(@builtin(global_invocation_id) global_id: vec3<u32>)
{
	var major_index = global_id.x;

	let grid_size = u_parameters.size;

	for(var step = 0u; step < u_parameters.log_2_size; step += 1u)
	{
		let dft_size = 1u << (step + 1u);
		let dft_count = u32(grid_size / dft_size);

		let dft = u32(major_index / u32(dft_size / 2u));
		let n = major_index % u32(dft_size / 2u);

		var lower_twiddle: TwoPointButterfly;
		lower_twiddle.twiddle = complexExp(-TWO_PI * f32(n) / f32(dft_size));
		lower_twiddle.lower_index = dft + n * 2u * dft_count;
		lower_twiddle.upper_index = lower_twiddle.lower_index + dft_count;

		var upper_twiddle = lower_twiddle;
		upper_twiddle.twiddle *= -1.0;

		let instruction_index = n * dft_count + dft;

		out_butterflies_log2n_by_n[butterflyIndex(step, instruction_index)] = lower_twiddle;
		out_butterflies_log2n_by_n[butterflyIndex(step, instruction_index + (grid_size / 2u))] = upper_twiddle;
	}
}

// Avoid redeclare
// @group(0) @binding(0) var<uniform> u_parameters: DFFTParameters;
@group(0) @binding(2) var<storage, read> butterflies_log2n_by_n: array<TwoPointButterfly>;
@group(0) @binding(3) var<storage, read_write> buffer_0: array<vec4<f32>>;
@group(0) @binding(4) var<storage, read_write> buffer_1: array<vec4<f32>>;
@group(0) @binding(5) var<uniform> step_counter: u32;
@group(0) @binding(6) var out_texture: texture_storage_2d_array<rgba16float, write>;

fn complexMult(a: vec2<f32>, b: vec2<f32>) -> vec2<f32>
{
	return vec2<f32>(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
}

fn complexMult2(a: vec4<f32>, b: vec4<f32>) -> vec4<f32>
{
	return vec4<f32>(complexMult(a.xy, b.xy), complexMult(a.zw, b.zw));
}

fn bufferIndex(x: u32, y: u32, z: u32) -> u32
{
	let size = u_parameters.size;
	return x + y * size + z * size * size;
}

fn loadButterfly(major_index: u32) -> TwoPointButterfly
{
	var result = butterflies_log2n_by_n[butterflyIndex(step_counter % u_parameters.log_2_size, major_index)];
	result.twiddle.y *= (1.0 - 2.0 * u_parameters.b_inverse);

	return result;
}

/*
* buffer_0 needs to have the initial data
* buffer_1's state does not matter, it will be overwritten
* The final output will be in buffer_0 (since vertical + horizontal guarantees an even amount of ping-pongs)
* Make sure step_counter is updated between steps, incrementing by one until 2 * log2(N)
*/
@compute @workgroup_size(16, 16, 1)
fn performDFFTStep(@builtin(global_invocation_id) global_id: vec3<u32>)
{
	// We need to bounce between buffers since each cell in each step relies on multiple cells from the previous step
	let ping_pong = (step_counter % 2u) == 1u;

	// step_counter ranges from [ 0, 2 * log2(N) ), with the second half representing the vertical pass
	// We do this to avoid needing to pass duplicate data with an extra vertical flag, or needing to split up the function into two kernels

	if (step_counter < u_parameters.log_2_size)
	{
		// Horizontal Pass
		let two_point_dft = loadButterfly(global_id.x);
		if(ping_pong)
		{
			let lower_input = buffer_1[bufferIndex(two_point_dft.lower_index, global_id.y, global_id.z)];
			let upper_input = buffer_1[bufferIndex(two_point_dft.upper_index, global_id.y, global_id.z)];

			let result = lower_input + complexMult2(vec4<f32>(two_point_dft.twiddle, two_point_dft.twiddle), upper_input);

			buffer_0[bufferIndex(global_id.x, global_id.y, global_id.z)] = result;
		}
		else
		{
			let lower_input = buffer_0[bufferIndex(two_point_dft.lower_index, global_id.y, global_id.z)];
			let upper_input = buffer_0[bufferIndex(two_point_dft.upper_index, global_id.y, global_id.z)];

			let result = lower_input + complexMult2(vec4<f32>(two_point_dft.twiddle, two_point_dft.twiddle), upper_input);

			buffer_1[bufferIndex(global_id.x, global_id.y, global_id.z)] = result;
		}
	}
	else
	{
		// Vertical Pass
		let two_point_dft = loadButterfly(global_id.y);
		if(ping_pong)
		{
			let lower_input = buffer_1[bufferIndex(global_id.x, two_point_dft.lower_index, global_id.z)];
			let upper_input = buffer_1[bufferIndex(global_id.x, two_point_dft.upper_index, global_id.z)];

			let result = lower_input + complexMult2(vec4<f32>(two_point_dft.twiddle, two_point_dft.twiddle), upper_input);

			buffer_0[bufferIndex(global_id.x, global_id.y, global_id.z)] = result;
		}
		else
		{
			let lower_input = buffer_0[bufferIndex(global_id.x, two_point_dft.lower_index, global_id.z)];
			let upper_input = buffer_0[bufferIndex(global_id.x, two_point_dft.upper_index, global_id.z)];

			let result = lower_input + complexMult2(vec4<f32>(two_point_dft.twiddle, two_point_dft.twiddle), upper_input);

			buffer_1[bufferIndex(global_id.x, global_id.y, global_id.z)] = result;
		}
	}
}

/*
 * Flips the sign of even numbered cells in the fourier grid. A cell at (x,y) is
 * even when (x + y) is even.
 *
 * step_counter should be left as it was for the last step performed.
 *
 * Why you might do this:
 *
 * When an DFT's input data has its energy clustered around the middle
 * around (grid_size / 2), the result will have alternating sign flips from the
 * desired result. This is since a frequency of (grid_size)/2 will show up as a
 * wave with wavelength 2 texels.
 *
 * This sort of clustering occurs with how we process ocean waves, since our
 * wave "origin" with the longest wavelength, highest frequency/energy waves is
 * at (grid_size/2, grid_size/2)
 */
@compute @workgroup_size(16, 16, 1)
fn performSwapEvenSignsAndCopyToHalfPrecisionOutput(@builtin(global_invocation_id) global_id: vec3<u32>)
{
	let ping_pong = (step_counter % 2u) == 1u;

	let factor = 1.0 - 2.0 * f32((global_id.x + global_id.y) % 2);

	if(ping_pong)
	{
		textureStore(
			out_texture,
			global_id.xy,
			global_id.z,
			buffer_0[bufferIndex(global_id.x, global_id.y, global_id.z)] * factor
		);
	}
	else
	{
		textureStore(
			out_texture,
			global_id.xy,
			global_id.z,
			buffer_1[bufferIndex(global_id.x, global_id.y, global_id.z)] * factor
		);
	}
}

@group(0) @binding(7) var<storage, read_write> out_step_counter: u32;

@compute @workgroup_size(1)
fn incrementStepCounter(@builtin(global_invocation_id) global_id: vec3<u32>)
{
	if(global_id.x == 0)
	{
		out_step_counter = out_step_counter + 1;
	}
}
@compute @workgroup_size(1)
fn resetStepCounter(@builtin(global_invocation_id) global_id: vec3<u32>)
{
	if(global_id.x == 0)
	{
		out_step_counter = 0;
	}
}
`;class Ve extends R{constructor(e){super(e,3,"DFFT Parameters UBO"),r(this,"data",{log_2_size:1,size:2,b_inverse:!1})}packed(){const e=new ArrayBuffer(this.buffer.size),t=new DataView(e);return t.setUint32(0,this.data.log_2_size,!0),t.setUint32(4,this.data.size,!0),t.setFloat32(8,this.data.b_inverse?1:0,!0),e}}const K=16,C="rgba16float";class He{constructor(e,t,a){if(r(this,"parametersUBO"),r(this,"butterfliesBuffer"),r(this,"gridSize3D"),r(this,"complexBuffer0"),r(this,"complexBuffer1"),r(this,"stepCounterBuffer"),r(this,"outputTexture"),r(this,"butterfliesBindGroup"),r(this,"computeButterfliesKernel"),r(this,"performBindGroup"),r(this,"performKernel"),r(this,"performSwapEvenSignsAndCopyToHalfPrecisionOutputKernel"),r(this,"stepCounterBindGroup"),r(this,"incrementStepCounterKernel"),r(this,"resetStepCounterKernel"),t<5)throw new RangeError("gridSizeExponent must be greater than 4.");if(!Number.isFinite(a)||a<1)throw new RangeError(`layerCount of ${a} is invalid`);const n=Math.pow(2,t);this.gridSize3D={width:n,height:n,depthOrArrayLayers:a};const i=this.gridSize3D.width*this.gridSize3D.height*this.gridSize3D.depthOrArrayLayers;this.parametersUBO=new Ve(e),this.parametersUBO.data.log_2_size=t,this.parametersUBO.data.size=n,this.parametersUBO.data.b_inverse=!1,this.parametersUBO.writeToGPU(e.queue);const o=16;this.butterfliesBuffer=e.createBuffer({label:"DFFT Precompute Stage Steps",size:t*n*o,usage:GPUBufferUsage.STORAGE});const s=e.createShaderModule({label:"DFFT Precompute Stage",code:We}),u=e.createBindGroupLayout({label:"DFFT Precompute Stage Group 0",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]});this.butterfliesBindGroup=e.createBindGroup({label:"DFFT Precompute Stage Group 0",layout:u,entries:[{binding:0,resource:{buffer:this.parametersUBO.buffer}},{binding:1,resource:{buffer:this.butterfliesBuffer}}]});const c=e.createPipelineLayout({label:"DFFT Precompute Steps Kernel",bindGroupLayouts:[u]});this.computeButterfliesKernel=e.createComputePipeline({label:"DFFT Precompute Stage",compute:{module:s,entryPoint:"precomputeDFFTInstructions"},layout:c});const d=e.createBindGroupLayout({label:"DFFT Perform Group 0",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:6,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:C,viewDimension:"2d-array",access:"write-only"}}]});this.complexBuffer0=e.createBuffer({label:"DFFT Buffer 0",size:i*K,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.complexBuffer1=e.createBuffer({label:"DFFT Buffer 1",size:this.complexBuffer0.size,usage:this.complexBuffer0.usage});const _=4;this.stepCounterBuffer=e.createBuffer({label:"DFFT Step Counter",size:_,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE|GPUBufferUsage.UNIFORM});const m=new Uint32Array(1);m[0]=0,e.queue.writeBuffer(this.stepCounterBuffer,0,m),this.outputTexture=e.createTexture({label:"DFFT Output Texture",format:C,size:this.gridSize3D,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.COPY_SRC}),this.performBindGroup=e.createBindGroup({label:"DFFT Perform Group 0",layout:d,entries:[{binding:0,resource:{buffer:this.parametersUBO.buffer}},{binding:2,resource:{buffer:this.butterfliesBuffer}},{binding:3,resource:{buffer:this.complexBuffer0}},{binding:4,resource:{buffer:this.complexBuffer1}},{binding:5,resource:{buffer:this.stepCounterBuffer}},{binding:6,resource:this.outputTexture.createView()}]});const y=e.createPipelineLayout({label:"DFFT Perform",bindGroupLayouts:[d]});this.performKernel=e.createComputePipeline({label:"DFFT Perform DFFT Step",compute:{module:s,entryPoint:"performDFFTStep"},layout:y}),this.performSwapEvenSignsAndCopyToHalfPrecisionOutputKernel=e.createComputePipeline({label:"DFFT Perform Swap Even Signs",compute:{module:s,entryPoint:"performSwapEvenSignsAndCopyToHalfPrecisionOutput"},layout:y});const v=e.createBindGroupLayout({label:"DFFT Step Counter Bind Group 0",entries:[{binding:7,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]});this.stepCounterBindGroup=e.createBindGroup({label:"DFFT Step Counter Bind Group 0",layout:v,entries:[{binding:7,resource:{buffer:this.stepCounterBuffer}}]});const p=e.createPipelineLayout({label:"DFFT Step Counter",bindGroupLayouts:[v]});this.incrementStepCounterKernel=e.createComputePipeline({label:"DFFT Increment Step Counter Kernel",layout:p,compute:{module:s,entryPoint:"incrementStepCounter"}}),this.resetStepCounterKernel=e.createComputePipeline({label:"DFFT Reset Step Counter Kernel",layout:p,compute:{module:s,entryPoint:"resetStepCounter"}}),this.parametersUBO.data.b_inverse=!0,this.parametersUBO.writeToGPU(e.queue);const g=e.createCommandEncoder({label:"DFFT Precompute"}),h=g.beginComputePass({label:"DFFT Precompute Steps"});h.setPipeline(this.computeButterfliesKernel),h.setBindGroup(0,this.butterfliesBindGroup),h.dispatchWorkgroups(n/2/2,1),h.end(),e.queue.submit([g.finish()])}recordPerformOnBuffer0(e,t){const a=2*this.parametersUBO.data.log_2_size,n=e.beginComputePass({label:"DFFT Perform",timestampWrites:t});for(let i=0;i<a;i++)i===0?(n.setPipeline(this.resetStepCounterKernel),n.setBindGroup(0,this.stepCounterBindGroup),n.dispatchWorkgroups(1)):(n.setPipeline(this.incrementStepCounterKernel),n.setBindGroup(0,this.stepCounterBindGroup),n.dispatchWorkgroups(1)),n.setPipeline(this.performKernel),n.setBindGroup(0,this.performBindGroup),n.dispatchWorkgroups(this.gridSize3D.width/16,this.gridSize3D.height/16,this.gridSize3D.depthOrArrayLayers/1);n.setPipeline(this.performSwapEvenSignsAndCopyToHalfPrecisionOutputKernel),n.setBindGroup(0,this.performBindGroup),n.dispatchWorkgroups(this.gridSize3D.width/16,this.gridSize3D.height/16,this.gridSize3D.depthOrArrayLayers/1),n.end()}recordPerform(e,t,a,n,i,o){const s="rgba32float";if(a.format!=s)throw RangeError(`sourceTexture (format ${a.format}) must be ${s}`);if(n.format!=C)throw RangeError(`destinationArray (format ${a.format}) must be ${s}`);if(a.width!=n.width||a.height!=n.height||a.depthOrArrayLayers!=n.depthOrArrayLayers)throw RangeError(`SourceTexture ${a.label} does not match destination texture ${n.label} extent`);this.parametersUBO.data.b_inverse=i,this.parametersUBO.writeToGPU(e.queue),t.copyTextureToBuffer({texture:a},{buffer:this.complexBuffer0,bytesPerRow:this.gridSize3D.width*K,rowsPerImage:this.gridSize3D.height},this.gridSize3D),this.recordPerformOnBuffer0(t,o),t.copyTextureToTexture({texture:this.outputTexture},{texture:n},this.gridSize3D)}}const je=`@group(0) @binding(0) var out_next_mip_level: texture_storage_2d_array<rgba16float, write>;
@group(0) @binding(1) var in_previous_mip_level: texture_2d_array<f32>;

@compute @workgroup_size(16, 16, 1)
fn fillMipMap(@builtin(global_invocation_id) global_id: vec3<u32>)
{
	// Each mip level halves the resolution

	let array_level = global_id.z;

	let color = 0.25 * (
		  textureLoad(in_previous_mip_level, 2 * global_id.xy + vec2<u32>(0,0), array_level, 0)
		+ textureLoad(in_previous_mip_level, 2 * global_id.xy + vec2<u32>(0,1), array_level, 0)
		+ textureLoad(in_previous_mip_level, 2 * global_id.xy + vec2<u32>(1,0), array_level, 0)
		+ textureLoad(in_previous_mip_level, 2 * global_id.xy + vec2<u32>(1,1), array_level, 0)
	);
	textureStore(out_next_mip_level, global_id.xy, array_level, color);
}

// A separate kernel for generating mips smaller than 16 by 16
@compute @workgroup_size(1, 1, 1)
fn fillMipMapSmaller(@builtin(global_invocation_id) global_id: vec3<u32>)
{
	// Each mip level halves the resolution

	let array_level = global_id.z;

	let color = 0.25 * (
		  textureLoad(in_previous_mip_level, 2 * global_id.xy + vec2<u32>(0,0), array_level, 0)
		+ textureLoad(in_previous_mip_level, 2 * global_id.xy + vec2<u32>(0,1), array_level, 0)
		+ textureLoad(in_previous_mip_level, 2 * global_id.xy + vec2<u32>(1,0), array_level, 0)
		+ textureLoad(in_previous_mip_level, 2 * global_id.xy + vec2<u32>(1,1), array_level, 0)
	);
	textureStore(out_next_mip_level, global_id.xy, array_level, color);
}
`,G="rgba16float";class Ye{constructor(e){r(this,"fillMipMapTextureInOutLayout"),r(this,"fillMipMapKernel"),r(this,"fillMipMapSmallerKernel"),this.fillMipMapTextureInOutLayout=e.createBindGroupLayout({label:"MipMap Generation fillMipMap Texture In-Out",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:G,viewDimension:"2d-array"}},{binding:1,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:"unfilterable-float",viewDimension:"2d-array"}}]});const t=e.createShaderModule({label:"sky-sea/mipmap.wgsl",code:je}),a=e.createPipelineLayout({label:"MipMap Generation fillMipMap Kernel",bindGroupLayouts:[this.fillMipMapTextureInOutLayout]});this.fillMipMapKernel=e.createComputePipeline({label:"MipMap Generation fillMipMap Kernel",layout:a,compute:{module:t,entryPoint:"fillMipMap"}}),this.fillMipMapSmallerKernel=e.createComputePipeline({label:"MipMap Generation fillMipMapSmaller Kernel",layout:a,compute:{module:t,entryPoint:"fillMipMapSmaller"}})}createBindGroups(e,t){if(t.format!=G)throw new RangeError(`Invalid source texture (label ${t.label}) for MipMap generation`,{cause:`Source format is ${t.format} when expected ${G}`});if(t.dimension!="2d")throw new RangeError(`Invalid source texture (label ${t.label}) for MipMap generation`,{cause:"Source texture is not 2d"});if(!(t.usage&GPUTextureUsage.COPY_SRC))throw new RangeError(`Invalid source texture (label ${t.label}) for MipMap generation`,{cause:"Source usage is missing required flag COPY_SRC"});if(t.width!=t.height||!Number.isInteger(Math.log2(t.width)))throw new RangeError(`Invalid source texture (label ${t.label}) for MipMap generation`,{cause:`Source dimensions of (${t.width},${t.height}) are invalid, texture must be square and power-of-2.`});const a=Math.log2(t.width);return{level0Size:{width:t.width,height:t.height},bindGroupsByMipLevel:[...new Array(Math.min(a,t.mipLevelCount)-1).keys()].map((n,i)=>{const o=i+1,s=i;return e.createBindGroup({label:`MipMap Generation for '${t.label}' IO Bind Group '${s} => ${o}'`,layout:this.fillMipMapTextureInOutLayout,entries:[{binding:0,resource:t.createView({dimension:"2d-array",baseMipLevel:o,mipLevelCount:1})},{binding:1,resource:t.createView({dimension:"2d-array",baseMipLevel:s,mipLevelCount:1})}]})}),arrayLevelCount:t.depthOrArrayLayers}}recordUpdateMipMaps(e,t){t.bindGroupsByMipLevel.forEach((a,n)=>{e.setBindGroup(0,a);const i=1<<n,o=t.level0Size.width/i,s=t.level0Size.height/i;o>=16&&s>=16?(e.setPipeline(this.fillMipMapKernel),e.dispatchWorkgroups(o/16,s/16,t.arrayLevelCount)):(e.setPipeline(this.fillMipMapSmallerKernel),e.dispatchWorkgroups(o,s,t.arrayLevelCount))})}}const Qe=9.8,Xe=100,Ke="rg32float",J="rg32float",Je="rgba16float",$="rgba16float",F="rgba32float",$e=4,Z=4;class Ze extends R{constructor(e){super(e,8+$e*Z,"Fourier Waves UBO"),r(this,"data",{fourier_grid_size:1,gravity:Qe,padding0:0,wave_period_seconds:Xe,wind_speed_meters_per_second:10,wind_fetch_meters:10*1e3,wave_swell:.3,padding1:0,cascades:new Array(4)})}packed(){const e=new ArrayBuffer(this.buffer.size),t=new DataView(e),a=new Float32Array(e);t.setUint32(0,this.data.fourier_grid_size,!0),t.setFloat32(4,this.data.gravity,!0),t.setFloat32(8,this.data.padding0,!0),t.setFloat32(12,this.data.wave_period_seconds,!0),t.setFloat32(16,this.data.wind_speed_meters_per_second,!0),t.setFloat32(20,this.data.wind_fetch_meters,!0),t.setFloat32(24,this.data.wave_swell,!0),t.setFloat32(28,this.data.padding1,!0);const n=8;return this.data.cascades.forEach((i,o)=>{const s=n+o*Z;a.set(i.wave_number_min_max,s),a[s+2]=i.wave_patch_extent_meters,a[s+3]=0}),e}}function et(){const l=Math.random(),e=Math.random(),t=Math.sqrt(-2*Math.log(l)),a=2*Math.PI*e,n=t*Math.cos(a),i=t*Math.sin(a);return[n,i]}class tt{constructor(e,t,a){r(this,"Dx_Dy_Dz_Dxdz_Spatial"),r(this,"Dydx_Dydz_Dxdx_Dzdz_Spatial"),r(this,"turbulenceJacobian"),r(this,"Dx_Dy_Dz_Dxdz_SpatialAllMips"),r(this,"Dydx_Dydz_Dxdx_Dzdz_SpatialAllMips"),r(this,"turbulenceJacobianOneMip"),e.mipLevelCount!=t.mipLevelCount&&console.warn(`FFT Wave Displacement maps do not have identical mip levels. ${e.mipLevelCount} vs ${t.mipLevelCount}`),this.Dx_Dy_Dz_Dxdz_Spatial=e,this.Dydx_Dydz_Dxdx_Dzdz_Spatial=t,this.turbulenceJacobian=a,this.Dx_Dy_Dz_Dxdz_SpatialAllMips=this.Dx_Dy_Dz_Dxdz_Spatial.createView({label:`FFT Wave DisplacementMaps for ${this.Dx_Dy_Dz_Dxdz_Spatial.label}`}),this.Dydx_Dydz_Dxdx_Dzdz_SpatialAllMips=this.Dydx_Dydz_Dxdx_Dzdz_Spatial.createView({label:`FFT Wave DisplacementMaps for ${this.Dydx_Dydz_Dxdx_Dzdz_Spatial.label}`}),this.turbulenceJacobianOneMip=this.turbulenceJacobian.map((n,i)=>n.createView({label:`FFT Wave DisplacementMaps for ${this.turbulenceJacobian[i].label} index ${i}`}))}get mipLevelCount(){return this.Dx_Dy_Dz_Dxdz_Spatial.mipLevelCount}}class at{constructor(e,t,a){r(this,"gridSize"),r(this,"cascadeCount"),r(this,"initialAmplitudeKernel"),r(this,"timeDependentAmplitudeKernel"),r(this,"accumulateTurbulenceKernel"),r(this,"dfftResources"),r(this,"mipMapGenerator"),r(this,"cascades"),r(this,"Dx_Dy_Dz_Dxdz_SpatialArray"),r(this,"Dydx_Dydz_Dxdx_Dzdz_SpatialArray"),r(this,"turbulenceJacobianArrays"),r(this,"turbulenceJacobianGroup1"),r(this,"turbulenceJacobianIndex",0),r(this,"Dx_Dy_Dz_Dxdz_SpatialArray_MipMapBindings"),r(this,"Dydx_Dydz_Dxdx_Dzdz_SpatialArray_MipMapBindings"),r(this,"waveSettings"),this.gridSize=Math.pow(2,a);const n=e.createBindGroupLayout({label:"FFT Wave Initial Amplitude h_0(k) Group 0",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:J,viewDimension:"2d-array",access:"write-only"}},{binding:1,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:"unfilterable-float",viewDimension:"2d-array"}}]}),i=e.createBindGroupLayout({label:"FFT Wave Initial Amplitude h_0(k) Group 1",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]}),o=e.createShaderModule({label:"FFT Wave",code:Ne});this.initialAmplitudeKernel=e.createComputePipeline({label:"FFT Wave Initial Amplitude h_0(k)",layout:e.createPipelineLayout({label:"FFT Wave Initial Amplitude h_0(k)",bindGroupLayouts:[n,i]}),compute:{module:o,entryPoint:"computeInitialAmplitude"}}),this.mipMapGenerator=new Ye(e);const s=e.createBindGroupLayout({label:"FFT Wave Time Dependent Fourier Amplitude h(k,t) Group 0",entries:[{binding:2,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:F,viewDimension:"2d-array",access:"write-only"}},{binding:3,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:F,viewDimension:"2d-array",access:"write-only"}},{binding:4,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:"unfilterable-float",viewDimension:"2d-array"}}]}),u=e.createBindGroupLayout({label:"FFT Wave Time Dependent Fourier Amplitude h(k,t) Group 1",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});this.timeDependentAmplitudeKernel=e.createComputePipeline({label:"FFT Wave Time Dependent Fourier Amplitude h(k,t)",layout:e.createPipelineLayout({label:"FFT Wave Time Dependent Fourier Amplitude h(k,t)",bindGroupLayouts:[s,u]}),compute:{module:o,entryPoint:"computeTimeDependentAmplitude"}});const c=e.createBindGroupLayout({label:"FFT Wave Accumulate Turbulence Group 0",entries:[{binding:5,visibility:GPUShaderStage.COMPUTE,storageTexture:{viewDimension:"2d-array",format:$}},{binding:6,visibility:GPUShaderStage.COMPUTE,texture:{viewDimension:"2d-array",sampleType:"unfilterable-float"}},{binding:7,visibility:GPUShaderStage.COMPUTE,texture:{viewDimension:"2d-array",sampleType:"unfilterable-float"}},{binding:8,visibility:GPUShaderStage.COMPUTE,texture:{viewDimension:"2d-array",sampleType:"unfilterable-float"}}]}),d=e.createBindGroupLayout({label:"FFT Wave Accumulate Turbulence Group 1",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});this.accumulateTurbulenceKernel=e.createComputePipeline({label:"FFT Wave Accumulate Turbulence",layout:e.createPipelineLayout({label:"FFT Wave Accumulate Turbulence",bindGroupLayouts:[c,d]}),compute:{module:o,entryPoint:"accumulateTurbulence"}});function _(x){const f=2*x;return 2*Math.PI/f}const m=[200,50,10],y=[.001,...m.map(x=>_(x/this.gridSize)),1e3],v=m.map((x,f)=>({patchExtentMeters:x,waveNumberMinMax:[y[f],y[f+1]]}));this.cascadeCount=v.length,this.dfftResources=new He(e,a,this.cascadeCount),this.Dx_Dy_Dz_Dxdz_SpatialArray=e.createTexture({label:"FFT Wave Final Displacement Array",format:Je,dimension:"2d",size:this.textureGridSize,mipLevelCount:a,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC|GPUTextureUsage.COPY_DST}),this.Dydx_Dydz_Dxdx_Dzdz_SpatialArray=e.createTexture({label:"FFT Wave Final Derivatives Array",format:this.Dx_Dy_Dz_Dxdz_SpatialArray.format,size:this.textureGridSize,mipLevelCount:this.Dx_Dy_Dz_Dxdz_SpatialArray.mipLevelCount,usage:this.Dx_Dy_Dz_Dxdz_SpatialArray.usage}),this.cascades=this.createCascades(e,t,this.gridSize,v);const p=15360,g=this.textureGridSize.width*this.textureGridSize.height*this.textureGridSize.depthOrArrayLayers,h=new Uint16Array(g*4).fill(p);this.turbulenceJacobianArrays=[0,0].map((x,f)=>e.createTexture({label:`FFT Wave (Turbulence,Jacobian) Array ${f}`,format:$,size:this.textureGridSize,mipLevelCount:a,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC|GPUTextureUsage.COPY_DST})).reduce((x,f,z,D)=>{e.queue.writeTexture({texture:f},h,{bytesPerRow:this.Dx_Dy_Dz_Dxdz_SpatialArray.width*8,rowsPerImage:this.Dx_Dy_Dz_Dxdz_SpatialArray.height},this.textureGridSize);const U=e.createBindGroup({layout:this.accumulateTurbulenceKernel.getBindGroupLayout(0),entries:[{binding:5,resource:f.createView({mipLevelCount:1})},{binding:6,resource:D[(z+1)%D.length].createView({})},{binding:7,resource:this.Dx_Dy_Dz_Dxdz_SpatialArray.createView({})},{binding:8,resource:this.Dydx_Dydz_Dxdx_Dzdz_SpatialArray.createView({})}]});return x.concat({textureArray:f,bindGroup:U,mipMapBindings:this.mipMapGenerator.createBindGroups(e,f)})},[]),this.turbulenceJacobianGroup1=e.createBindGroup({label:"FFT Wave Accumulate Turbulence Group 1",layout:this.accumulateTurbulenceKernel.getBindGroupLayout(1),entries:[{binding:0,resource:{buffer:t.buffer}}]}),this.Dx_Dy_Dz_Dxdz_SpatialArray_MipMapBindings=this.mipMapGenerator.createBindGroups(e,this.Dx_Dy_Dz_Dxdz_SpatialArray),this.Dydx_Dydz_Dxdx_Dzdz_SpatialArray_MipMapBindings=this.mipMapGenerator.createBindGroups(e,this.Dydx_Dydz_Dxdx_Dzdz_SpatialArray),this.waveSettings={gravity:0,waveSwell:0,windFetchMeters:0,windSpeedMetersPerSeconds:0}}get textureGridSize(){return{width:this.gridSize,height:this.gridSize,depthOrArrayLayers:this.cascadeCount}}get turbulenceMapIndex(){return this.turbulenceJacobianIndex}createCascades(e,t,a,n){const i=this.textureGridSize,o=i.width*i.height*i.depthOrArrayLayers,s=e.createTexture({label:"FFT Wave Gaussian Noise",format:Ke,size:i,usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING}),u=2,c=8,d=new Float32Array(o*u);for(let f=0;f<d.length;f++)d[f]=et()[0];e.queue.writeTexture({texture:s},d,{bytesPerRow:c*i.width,rowsPerImage:i.height},i);const _=new Ze(e);_.data.fourier_grid_size=a,n.forEach((f,z)=>{_.data.cascades[z]={wave_number_min_max:T.create(...f.waveNumberMinMax),wave_patch_extent_meters:f.patchExtentMeters,padding0:0}}),_.writeToGPU(e.queue);const m=e.createTexture({label:"FFT Wave Fourier Amplitude h_0(k)",format:J,size:i,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING}),y=e.createBindGroup({label:"FFT Wave Initial Amplitude h_0(k) Group 0",layout:this.initialAmplitudeKernel.getBindGroupLayout(0),entries:[{binding:0,resource:m.createView()},{binding:1,resource:s.createView()}]}),v=e.createBindGroup({label:"FFT Wave Initial Amplitude h_0(k) Group 1",layout:this.initialAmplitudeKernel.getBindGroupLayout(1),entries:[{binding:0,resource:{buffer:t.buffer}},{binding:1,resource:{buffer:_.buffer}}]}),p=e.createTexture({label:"FFT Wave Packed (Dx + iDy, Dz + iDxdz) Amplitude",format:F,size:i,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC}),g=e.createTexture({label:"FFT Wave Packed (Dydx + iDydz, Dxdx + iDzdz) Amplitude",format:p.format,size:i,usage:p.usage}),h=e.createBindGroup({label:"FFT Wave Time Dependent Fourier Amplitude h(k,t) Group 0",layout:this.timeDependentAmplitudeKernel.getBindGroupLayout(0),entries:[{binding:2,resource:p.createView()},{binding:3,resource:g.createView()},{binding:4,resource:m.createView()}]}),x=e.createBindGroup({label:"FFT Wave Time Dependent Fourier Amplitude h(k,t) Group 1",layout:this.timeDependentAmplitudeKernel.getBindGroupLayout(1),entries:[{binding:0,resource:{buffer:t.buffer}},{binding:1,resource:{buffer:_.buffer}}]});return{gaussianNoiseArray:s,initialAmplitudeArray:m,waveSettings:_,initialAmplitudeGroup0:y,initialAmplitudeGroup1:v,packed_Dx_plus_iDy_Dz_iDxdz_AmplitudeArray:p,packed_Dydx_plus_iDydz_Dxdx_plus_iDzdz_AmplitudeArray:g,timeDependentAmplitudeGroup0:h,timeDependentAmplitudeGroup1:x}}views(){return{gaussianNoise:new S(this.cascades.gaussianNoiseArray),initialAmplitude:new S(this.cascades.initialAmplitudeArray),packed_Dx_plus_iDy_Dz_iDxdz_Amplitude:new S(this.cascades.packed_Dx_plus_iDy_Dz_iDxdz_AmplitudeArray),packed_Dydx_plus_iDydz_Dxdx_plus_iDzdz_Amplitude:new S(this.cascades.packed_Dydx_plus_iDydz_Dxdx_plus_iDzdz_AmplitudeArray),turbulenceJacobian:new S(this.turbulenceJacobianArrays[0].textureArray),Dx_Dy_Dz_Dxdz_Spatial:new S(this.Dx_Dy_Dz_Dxdz_SpatialArray),Dydx_Dydz_Dxdx_Dzdz_Spatial:new S(this.Dydx_Dydz_Dxdx_Dzdz_SpatialArray)}}displacementMaps(){return new tt(this.Dx_Dy_Dz_Dxdz_SpatialArray,this.Dydx_Dydz_Dxdx_Dzdz_SpatialArray,this.turbulenceJacobianArrays.map(e=>e.textureArray))}record(e,t,a,n){if(a.gravity!=this.waveSettings.gravity||a.waveSwell!=this.waveSettings.waveSwell||a.windSpeedMetersPerSeconds!=this.waveSettings.windSpeedMetersPerSeconds||a.windFetchMeters!=this.waveSettings.windFetchMeters){this.waveSettings=structuredClone(a);const u=t.beginComputePass({label:"FFT Wave Initial Amplitude"}),c=this.cascades.waveSettings;c.data.wave_swell=this.waveSettings.waveSwell,c.data.wind_fetch_meters=this.waveSettings.windFetchMeters,c.data.wind_speed_meters_per_second=this.waveSettings.windSpeedMetersPerSeconds,c.data.gravity=this.waveSettings.gravity,c.writeToGPU(e.queue),u.setPipeline(this.initialAmplitudeKernel),u.setBindGroup(0,this.cascades.initialAmplitudeGroup0),u.setBindGroup(1,this.cascades.initialAmplitudeGroup1);const d=this.textureGridSize;u.dispatchWorkgroups(d.width/16,d.height/16,d.depthOrArrayLayers/1),u.end()}{const u=t.beginComputePass({label:"FFT Wave Fourier Amplitude Realization",timestampWrites:n!==void 0?{querySet:n.querySet,beginningOfPassWriteIndex:n.beginWriteIndex}:void 0});u.setPipeline(this.timeDependentAmplitudeKernel),u.setBindGroup(0,this.cascades.timeDependentAmplitudeGroup0),u.setBindGroup(1,this.cascades.timeDependentAmplitudeGroup1);const c=this.textureGridSize;u.dispatchWorkgroups(c.width/16,c.height/16,c.depthOrArrayLayers/1),u.end()}this.dfftResources.recordPerform(e,t,this.cascades.packed_Dx_plus_iDy_Dz_iDxdz_AmplitudeArray,this.Dx_Dy_Dz_Dxdz_SpatialArray,!0,void 0),this.dfftResources.recordPerform(e,t,this.cascades.packed_Dydx_plus_iDydz_Dxdx_plus_iDzdz_AmplitudeArray,this.Dydx_Dydz_Dxdx_Dzdz_SpatialArray,!0,void 0);const o=t.beginComputePass({label:"Turbulence Accumulation"});o.setPipeline(this.accumulateTurbulenceKernel),o.setBindGroup(0,this.turbulenceJacobianArrays[this.turbulenceJacobianIndex].bindGroup),o.setBindGroup(1,this.turbulenceJacobianGroup1),o.dispatchWorkgroups(this.gridSize/16,this.gridSize/16,this.cascadeCount/1),o.end();const s=t.beginComputePass({label:"MipMap Generation",timestampWrites:n!==void 0?{querySet:n.querySet,endOfPassWriteIndex:n.endWriteIndex}:void 0});this.mipMapGenerator.recordUpdateMipMaps(s,this.Dx_Dy_Dz_Dxdz_SpatialArray_MipMapBindings),this.mipMapGenerator.recordUpdateMipMaps(s,this.Dydx_Dydz_Dxdx_Dzdz_SpatialArray_MipMapBindings),this.mipMapGenerator.recordUpdateMipMaps(s,this.turbulenceJacobianArrays[this.turbulenceJacobianIndex].mipMapBindings),this.turbulenceJacobianIndex+=1,this.turbulenceJacobianIndex%=this.turbulenceJacobianArrays.length,s.end()}}const rt=`// Displace a grid of vertices representing the ocean surface, then rasterize into the gbuffer with a graphics pass

const PI = 3.141592653589793;
const METERS_PER_MM = 1000000;

// Sizeof(Atmosphere) = 8 * 16 = 128
// Alignof(Atmosphere) = 16
struct Atmosphere
{
    scattering_rayleigh_per_Mm : vec3<f32>,
    density_scale_rayleigh_Mm : f32,
    absorption_rayleigh_per_Mm : vec3<f32>,

    planet_radius_Mm : f32,

    scattering_mie_per_Mm : vec3<f32>,
    density_scale_mie_Mm : f32,
    absorption_mie_per_Mm : vec3<f32>,

    atmosphere_radius_Mm : f32,

    ground_albedo : vec3<f32>,
    padding0 : f32,

    scattering_ozone_per_Mm : vec3<f32>,
    padding1 : f32,

    absorption_ozone_per_Mm : vec3<f32>,
    padding2 : f32,

    padding3 : vec4<f32>,
}

// Sizeof(CelestialLight) = 2 * 16 = 32
// Alignof(CelestialLight) = 16
struct CelestialLight
{
    color: vec3<f32>,
    strength: f32,

	forward: vec3<f32>,
    angular_radius: f32,
}

// Sizeof(Camera) = 4 * 64 = 256
// Alignof(Camera) = 16
struct Camera
{
    inv_proj: mat4x4<f32>,

	inv_view: mat4x4<f32>,

	proj_view: mat4x4<f32>,

    position: vec4<f32>,
	forward: vec4<f32>,
	padding0: mat2x4<f32>,
}

// Sizeof(Time) = 16
// Alignof(Time) = 16
struct Time
{
	padding0: vec2<f32>,
	time_seconds: f32,
	delta_time_seconds: f32,
}

// All of these uniform values have identical lifetimes: they update before rendering for the frame, and are constant throughout
// Thus we store everything together to simplify the bindings
// Sizeof(GlobalUBO) = 672 + 16 = 688 (as of writing)
// Alignof(GlobalUBO) = 16
struct GlobalUBO
{
	camera: Camera,           // offsets
	ocean_camera: Camera,     // 0   + 256 = 256
	atmosphere: Atmosphere,   // 256 + 256 = 512
	light: CelestialLight,    // 512 + 128 = 640
	time: Time,               // 640 + 32  = 672
}

struct RaySphereHit
{
    hit: bool,
    t0: f32,
    t1: f32,
}

// t1 > t0, values can be negative. Function returns true even if the sphere is behind the ray.
// If this returns false, t0 and t1 are unchanged.
fn raySphereIntersection(
    ray_origin: vec3<f32>,
    ray_direction_normalized: vec3<f32>,
    radius: f32
) -> RaySphereHit
{
    // Method taken from "Precision Improvements for Ray/Sphere Intersection"
    // by Eric Haines, Johannes Günther, and Tomas Akenine-Möller
    //
    // The method includes tricks to reduce float point inaccuracy errors.

    let f: vec3<f32> = ray_origin;
    let d: vec3<f32> = ray_direction_normalized;
    let b: f32 = -1.0 * dot(f, d);
    let center_to_intersection_chord: vec3<f32> = f + b * d;
    let discriminant: f32 = radius * radius - dot(center_to_intersection_chord, center_to_intersection_chord);
    let c: f32 = dot(f, f) - radius * radius;

    var output : RaySphereHit;
    output.hit = false;
    output.t0 = 0.0;
    output.t1 = 0.0;

    if (discriminant < 0.0)
    {
        return output;
    }

    var q: f32 = b;
    if (b < 0.0)
    {
        q -= sqrt(discriminant);
    }
    else
    {
        q += sqrt(discriminant);
    }

    output.hit = true;
    output.t0 = c / q;
    output.t1 = q;

    if (output.t0 > output.t1)
    {
        let temp: f32 = output.t0;
        output.t0 = output.t1;
        output.t1 = temp;
    }

    return output;
}

struct RayPlaneHit {
	hit: bool,
	t: f32,
}

fn rayPlaneIntersection(
	ray_origin: vec3<f32>,
	ray_direction: vec3<f32>,
	plane_origin: vec3<f32>,
	plane_normal: vec3<f32>
) -> RayPlaneHit
{
	var result: RayPlaneHit;

	let perp = dot(plane_normal, ray_direction);
	result.t = dot(plane_origin - ray_origin, plane_normal) / perp;
	result.hit = (abs(perp) > 0.00001) && (result.t > 0.0);

	return result;
}


const CASCADE_CAPACITY = 4u;

struct PlaneWave
{
    direction: vec2<f32>,
    amplitude: f32,
    wavelength: f32,
}

struct WaveCascade
{
	padding0: vec3<f32>,
	patch_size_meters: f32,
}

struct WaveSurfaceDisplacementUBO
{
	patch_world_half_extent: f32,
	b_gerstner: u32,
	b_displacement_map: u32,
	vertex_size: u32,

	gbuffer_extent: vec2<f32>,
	foam_scale: f32,
	foam_bias: f32,

	padding_0: vec3<f32>,
	procedural_wave_count: u32,

	cascades: array<WaveCascade, CASCADE_CAPACITY>,
}

@group(0) @binding(0) var<uniform> u_settings: WaveSurfaceDisplacementUBO;
@group(0) @binding(1) var<uniform> u_global: GlobalUBO;

@group(1) @binding(0) var displacement_map_sampler: sampler;
@group(1) @binding(1) var Dx_Dy_Dz_Dxdz_spatial: texture_2d_array<f32>;
@group(1) @binding(2) var Dydx_Dydz_Dxdx_Dzdz_spatial: texture_2d_array<f32>;
@group(1) @binding(3) var<storage> u_waves: array<PlaneWave>;

@group(2) @binding(0) var turbulence_jacobian: texture_2d_array<f32>;

struct OceanSurfaceDisplacement
{
	displacement: vec3<f32>,
}

fn sampleOceanSurfaceDisplacementFromMap(
	global_uv: vec2<f32>,
	cascade_position_weights: array<f32,CASCADE_CAPACITY>,
	gerstner: bool,
) -> OceanSurfaceDisplacement
{
    var result: OceanSurfaceDisplacement;
	result.displacement = vec3<f32>(0.0);

	for(var array_layer = 0u; array_layer <= 3u; array_layer++)
	{
		let position_lambda = cascade_position_weights[array_layer];

		let patch_uv = global_uv / u_settings.cascades[array_layer].patch_size_meters;

		let Dx_Dy_Dz_Dxdz = textureSampleLevel(
			Dx_Dy_Dz_Dxdz_spatial,
			displacement_map_sampler,
			patch_uv,
			array_layer,
			0.0
		);

		var delta_displacement = Dx_Dy_Dz_Dxdz.xyz;
		if(!gerstner)
		{
			delta_displacement.x = 0.0;
			delta_displacement.z = 0.0;
		}

		result.displacement += position_lambda * delta_displacement;
	}

	return result;
}

fn sampleOceanSurfaceDisplacementFromWave(
	wave: PlaneWave,
	time: f32,
	coords: vec2<f32>,
	falloff_distance: f32
) -> OceanSurfaceDisplacement
{
	let falloff_factor = (1.0 - smoothstep(0.0, falloff_distance, length(coords)));
    let wave_amplitude = falloff_factor * wave.amplitude;
    let wave_direction = normalize(wave.direction);
    let wavelength = wave.wavelength;

    let wave_number = 2.0 * 3.141592653589793 / wavelength;

    let gravity = 9.8;

    // Dispersion relationship for deep ocean waves
    // wave_speed = sqrt(gravity / wave_number)
    // angular_frequency = wave_speed * wave_number
    let angular_frequency = sqrt(gravity * wave_number);

    let wave_vector = wave_direction * wave_number;

    let theta = dot(coords, wave_vector) - angular_frequency * time;
    let sin_theta = sin(theta);
    let cos_theta = cos(theta);

    var result: OceanSurfaceDisplacement;

    let result_xz = -wave_direction * wave_amplitude * sin_theta;
    let result_y = wave_amplitude * cos_theta;
    result.displacement = vec3<f32>(result_xz.x, result_y, result_xz.y);

    return result;
}

fn getOceanSurfaceDisplacement(
	global_uv: vec2<f32>,
	cascade_position_weights: array<f32,CASCADE_CAPACITY>,
) -> OceanSurfaceDisplacement
{
	var result: OceanSurfaceDisplacement;
	result.displacement = vec3<f32>(0.0);

	if(u_settings.b_displacement_map == 1u)
	{
    	let uv = (global_uv + vec2<f32>(0.5,0.5));
		let gerstner = u_settings.b_gerstner == 1u;
		let sample = sampleOceanSurfaceDisplacementFromMap(uv, cascade_position_weights, gerstner);

		result.displacement += sample.displacement;
	}
	else
	{
		var sample: OceanSurfaceDisplacement;

		for (var i = 0u; i < u_settings.procedural_wave_count; i++)
		{
			sample = sampleOceanSurfaceDisplacementFromWave(
				u_waves[i],
				u_global.time.time_seconds,
				global_uv,
				u_settings.patch_world_half_extent
			);

			result.displacement += sample.displacement;
		}
	}

	return result;
}

fn projectNDCToOceanSurface(
	ndc: vec2<f32>,
	horizon_distance: f32,
	camera: Camera,
) -> vec3<f32>
{
	let near_plane = 1.0;
	let direction_view_space = camera.inv_proj * vec4<f32>(
		ndc,
		near_plane,
		1.0
	);

	let direction_world = normalize((camera.inv_view * vec4<f32>(direction_view_space.xyz, 0.0)).xyz);

	let ocean_hit = raySphereIntersection(
		camera.position.xyz + vec3<f32>(0.0, u_global.atmosphere.planet_radius_Mm * METERS_PER_MM, 0.0),
		direction_world,
		u_global.atmosphere.planet_radius_Mm * METERS_PER_MM
	);

	if(!ocean_hit.hit)
	{
		// Let these vertices get depth culled, it's hard to salvage them
		return vec3<f32>(0.0, -100000.0, 0.0);
	}

	// Hacky way to snap to horizon, since raycasting can be very inaccurate at the edge
	let t = mix(
		ocean_hit.t0,
		horizon_distance,
		smoothstep(0.2, 1.0, ocean_hit.t0 / horizon_distance)
	);
	let flat_position = camera.position.xyz + t * direction_world;
	let planet_radius = u_global.atmosphere.planet_radius_Mm * METERS_PER_MM;
	return planet_radius * normalize(flat_position + vec3<f32>(0.0, planet_radius, 0.0))
		- vec3<f32>(0.0, planet_radius, 0.0);
}
fn projectNDCToOceanSurfaceWithPivot(
	ndc: vec2<f32>,
	horizon_distance: f32,
	camera: Camera,
	pivot: vec3<f32>,
) -> vec3<f32>
{
	let world_position = projectNDCToOceanSurface(ndc,horizon_distance,camera);
	let pivot_offset = world_position - pivot;
	let pivot_distance = length(pivot_offset);

	/*
	 * Stretch all points away from a pivot, which should be some sort of
	 * "center" of the projected ocean surface. This covers gaps at the
	 * edges when waves grow too large, while being reactive to the overall
	 * shape of the ocean surface.
	 *
	 * Some other solutions that might work, but weren't chosen over this due
	 * to being too complicated or difficult to make work nicely:
	 * 		- stretch input NDC-space coordinates before projecting. This ends
	 *		  up wasting many vertices in the distance, and compensating for
	 *		  world space distance in ndc-space requires lots of back and forth
	 * 		  conversions.
	 *		- Some sort of offset based on the camera forward. This quickly
	 *		  falls apart when the camera forward is close to the unperturbed
	 *		  ocean surface normal/world-up, and handling that case separately
	 *		  is messy since it is predicated on camera FOV, aspect ratio,
	 *		  position, etc.
	 */
	const STRETCH_THRESHOLDS = vec2<f32>(2.0,20.0);
	// Avoid the singularity near the pivot, and drop out when this fix is less necessary
	if(pivot_distance < STRETCH_THRESHOLDS.x || camera.position.y > 100.0)
	{
		return world_position;
	}
	let stretch_parameter = smoothstep(
		STRETCH_THRESHOLDS.x,
		STRETCH_THRESHOLDS.y,
		pivot_distance
	);
	const STRETCH_ABSOLUTE_BIAS = 80.0;
	let stretch = ((pivot_distance + stretch_parameter * STRETCH_ABSOLUTE_BIAS) / pivot_distance);
	return pivot + pivot_offset * stretch;
}

struct VertexOut {
    @builtin(position) position             : vec4<f32>,
	@location(0) surface_normal             : vec3<f32>,
    @location(1) color                      : vec3<f32>,
    @location(2) camera_distance            : f32,
	@location(3) cascade_1234_normal_weights: vec4<f32>,
	@location(5) global_uv                  : vec2<f32>,
}

/*
 * Projects a grid of vertices with evenly distributed screen space coordinates
 */
@vertex
fn screenSpaceWarped(@builtin(vertex_index) index : u32) -> VertexOut
{
	var output : VertexOut;

	/*
	 * Note the usage of a separate camera. The camera for ocean surface
	 * generation is decoupled from the final rendering POV camera. In normal
	 * use it's the same, but for debugging and illustration it helps to render
	 * the ocean surface from anywhere.
	 */
	let ocean_camera = u_global.ocean_camera;

	let vert_coord = vec2<f32>(
		f32(index % u_settings.vertex_size),
		f32(index / u_settings.vertex_size)
	) / f32(u_settings.vertex_size - 1u);

	let overlap = vec2<f32>(1.05);

	let ndc_horizon_forward =
		ocean_camera.proj_view
		* vec4<f32>(
			ocean_camera.forward.x,
			0.0,
			ocean_camera.forward.z,
			0.0
		);

	let ndc_min = vec2<f32>(-overlap.x, -overlap.y);
	let ndc_max = vec2<f32>(overlap.x, min(ndc_horizon_forward.y / ndc_horizon_forward.w, overlap.y));

	let ndc_space_coord = mix(ndc_min, ndc_max, vert_coord);

	let planet_radius = u_global.atmosphere.planet_radius_Mm * METERS_PER_MM;
	let camera_radius = length(ocean_camera.position.xyz + vec3<f32>(0.0, planet_radius, 0.0));
	let horizon_distance = sqrt(camera_radius * camera_radius - planet_radius * planet_radius);

	let center_position = projectNDCToOceanSurface(
		mix(ndc_min, ndc_max, 0.5),
		horizon_distance,
		ocean_camera,
	);

	let cell_world_position = projectNDCToOceanSurfaceWithPivot(
		ndc_space_coord,
		horizon_distance,
		ocean_camera,
		center_position
	);

	/*
	 * Weight further vertices so they displace less and don't disrupt the
	 * horizon. It's hard to guarantee this with distances alone. Pretty hacky.
	 */
	let fraction_to_horizon = distance(cell_world_position, ocean_camera.position.xyz) / horizon_distance;
	let weight = 1.0 - smoothstep(0.3, 0.5, fraction_to_horizon);

	let cascade_position_weights = array<f32, CASCADE_CAPACITY>(weight,weight,weight,weight);
	let cascade_normal_weights = array<f32, CASCADE_CAPACITY>(weight,weight,weight,weight);

	let global_uv = cell_world_position.xz;
	let displacement_result = getOceanSurfaceDisplacement(
		global_uv,
		cascade_position_weights
	);
	let world_position = cell_world_position + displacement_result.displacement;

	output.global_uv = global_uv;

    output.position = u_global.camera.proj_view * vec4<f32>(world_position, 1.0);
    output.camera_distance = distance(u_global.camera.position.xyz, world_position);

	// Unclipped depth didn't work (and requires a feature) so this is a workaround
	output.position.z /= 1.001;

	output.color = 0.3 * vec3<f32>(16.0 / 255.0, 97.0 / 255.0, 171.0 / 255.0);

	// Test screen-space density of vertices
	// output.color = vec3<f32>(step(fract(50 * ndc_space_coord), vec2<f32>(0.1)),0.0);
 	// output.color = vec3<f32>(step(fract(1.0 * world_position.x), 0.05),0.0,0.0);

	output.surface_normal = normalize(
		world_position
		+ vec3<f32>(0.0, u_global.atmosphere.planet_radius_Mm * METERS_PER_MM, 0.0)
	);

	output.cascade_1234_normal_weights = vec4<f32>(
		cascade_normal_weights[0],
		cascade_normal_weights[1],
		cascade_normal_weights[2],
		cascade_normal_weights[3],
	);

    return output;
}

struct FragmentOut
{
    @location(0) color_with_surface_world_depth_in_alpha: vec4<f32>,
    @location(1) world_normal_with_surface_foam_strength_in_alpha: vec4<f32>,
}

struct OceanSurfaceTangents
{
	tangent: vec3<f32>,
	bitangent: vec3<f32>,
	foam_strength: f32,
}

fn sampleOceanSurfaceTangentDifferentialFromMap(
	global_uv: vec2<f32>,
	cascade_normal_weights: array<f32,CASCADE_CAPACITY>,
	gerstner: bool,
) -> OceanSurfaceTangents
{
    var result: OceanSurfaceTangents;
	result.tangent = vec3<f32>(0.0);
	result.bitangent = vec3<f32>(0.0);

	var turbulence_accumulated = 0.0;
	var turbulence_max = 0.0;
	for(var array_layer = 0u; array_layer < textureNumLayers(Dx_Dy_Dz_Dxdz_spatial); array_layer++)
	{
		let normal_lambda = cascade_normal_weights[array_layer];

		let patch_uv = global_uv / u_settings.cascades[array_layer].patch_size_meters;

		let Dx_Dy_Dz_Dxdz = textureSample(
			Dx_Dy_Dz_Dxdz_spatial,
			displacement_map_sampler,
			patch_uv,
			array_layer
		);

		let Dydx_Dydz_Dxdx_Dzdz = textureSample(
			Dydx_Dydz_Dxdx_Dzdz_spatial,
			displacement_map_sampler,
			patch_uv,
			array_layer
		);

		let Dydx = Dydx_Dydz_Dxdx_Dzdz.x;
		let Dydz = Dydx_Dydz_Dxdx_Dzdz.y;

		let Dxdz = Dx_Dy_Dz_Dxdz.w * f32(gerstner);
		let Dzdx = Dxdz;

		var Dxdx = Dydx_Dydz_Dxdx_Dzdz.z * f32(gerstner);
		var Dzdz = Dydx_Dydz_Dxdx_Dzdz.w * f32(gerstner);

		result.tangent += normal_lambda * vec3<f32>(Dxdx, Dydx, Dzdx);
		result.bitangent += normal_lambda * vec3<f32>(Dxdz, Dydz, Dzdz);

		let turbulence = textureSample(
			turbulence_jacobian,
			displacement_map_sampler,
			patch_uv,
			array_layer
		).x;
		turbulence_accumulated += normal_lambda * clamp(1.0 - turbulence, 0.0, 1.0);
		turbulence_max += max(normal_lambda, 0.1);
	}

	// TODO: this could use more rigour
	result.foam_strength = clamp(
		u_settings.foam_scale * (turbulence_accumulated / turbulence_max - u_settings.foam_bias),
		0.0,
		1.0
	);

	return result;
}

fn sampleOceanSurfaceTangentDifferentialFromWave(
	global_uv: vec2<f32>,
	wave: PlaneWave,
	time: f32,
	falloff_distance: f32,
	gerstner: bool,
) -> OceanSurfaceTangents
{
	let falloff_factor = (1.0 - smoothstep(0.0, falloff_distance, length(global_uv)));
    let wave_amplitude = falloff_factor * wave.amplitude;
    let wave_direction = normalize(wave.direction);
    let wavelength = wave.wavelength;

    let wave_number = 2.0 * PI / wavelength;

	// TODO: parameterize this in ubo (like how the FFT waves do it)
    let gravity = 9.8;

    // Dispersion relationship for deep ocean waves
    // wave_speed = sqrt(gravity / wave_number)
    // angular_frequency = wave_speed * wave_number
    let angular_frequency = sqrt(gravity * wave_number);

    let wave_vector = wave_direction * wave_number;

    let theta = dot(global_uv, wave_vector) - angular_frequency * time;
    let sin_theta = sin(theta);
    let cos_theta = cos(theta);

    var result: OceanSurfaceTangents;

    // partial derivatives computed exactly via the above formula
    // Note these vectors are parallel, since wave only displaces in travel direction
    result.tangent = vec3<f32>(
        - wave_amplitude * wave_direction.x * cos_theta * wave_vector.x,
        - wave_amplitude * sin_theta * wave_vector.x,
        - wave_amplitude * wave_direction.y * cos_theta * wave_vector.x,
    );
    result.bitangent = vec3<f32>(
        - wave_amplitude * wave_direction.x * cos_theta * wave_vector.y,
        - wave_amplitude * sin_theta * wave_vector.y,
        - wave_amplitude * wave_direction.y * cos_theta * wave_vector.y,
    );
	result.foam_strength = 0.0;

	if(!gerstner)
	{
		result.tangent.x = 0.0;
		result.tangent.z = 0.0;

		result.bitangent.x = 0.0;
		result.bitangent.z = 0.0;
	}

    return result;
}

fn getOceanSurfaceTangents(
	global_uv: vec2<f32>,
	cascade_normal_weights: array<f32,CASCADE_CAPACITY>,
) -> OceanSurfaceTangents
{
	var result: OceanSurfaceTangents;
	/*
	 * The derivative of the sum of all waves is the sum of the derivatives.
	 * Thus, the unperturbed tangent T=(1,0,0) (which comes from d/dx(x,y,z))
	 * is summed with the tangent differentials dT=d/dx(Dx,Dy,Dz) for each
	 * contribution, where (Dx,Dy,Dz) is the displacement due to the wave as a
	 * function of (x,y,z).
	 * Same for bitangent, just replace d/dx with d/dz
	 */
    result.tangent = vec3<f32>(1.0, 0.0, 0.0);
    result.bitangent = vec3<f32>(0.0, 0.0, 1.0);
	result.foam_strength = 0.0;

	let gerstner = u_settings.b_gerstner == 1u;
	if(u_settings.b_displacement_map == 1u)
	{
		let sample: OceanSurfaceTangents = sampleOceanSurfaceTangentDifferentialFromMap(
			global_uv,
			cascade_normal_weights,
			gerstner
		);

		result.tangent += sample.tangent;
		result.bitangent += sample.bitangent;
		result.foam_strength += sample.foam_strength;
	}
	else
	{
		var sample: OceanSurfaceTangents;

		for (var i = 0u; i < u_settings.procedural_wave_count; i++)
		{
			sample = sampleOceanSurfaceTangentDifferentialFromWave(
				global_uv,
				u_waves[i],
				u_global.time.time_seconds,
				u_settings.patch_world_half_extent,
				gerstner
			);

			result.tangent += sample.tangent;
			result.bitangent += sample.bitangent;
			result.foam_strength += sample.foam_strength
				/ f32(u_settings.procedural_wave_count);
		}
	}

	result.tangent = normalize(result.tangent);
	result.bitangent = normalize(result.bitangent);

	return result;
}

@fragment
fn rasterizationFragment(frag_interpolated: VertexOut) -> FragmentOut
{
    var output : FragmentOut;

    output.color_with_surface_world_depth_in_alpha = vec4<f32>(
		frag_interpolated.color,
		frag_interpolated.camera_distance
	);

	var cascade_normal_weights = array<f32, CASCADE_CAPACITY>();
	cascade_normal_weights[0] = frag_interpolated.cascade_1234_normal_weights.x;
	cascade_normal_weights[1] = frag_interpolated.cascade_1234_normal_weights.y;
	cascade_normal_weights[2] = frag_interpolated.cascade_1234_normal_weights.z;
	cascade_normal_weights[3] = frag_interpolated.cascade_1234_normal_weights.w;

	let surface = getOceanSurfaceTangents(
		frag_interpolated.global_uv,
		cascade_normal_weights,
	);
	// reverse left-handed WGSL coordinates
	let normal = normalize(-cross(surface.tangent, surface.bitangent));

	// This probably falls apart in the general case, but the distance surface
	// should be near flat anyway, with the surface normal close to planet
	// normal
	let surface_normal = normalize(frag_interpolated.surface_normal);
	let tangent = normalize(-cross(vec3<f32>(0.0,0.0,1.0), surface_normal));
	let bitangent = normalize(-cross(surface_normal, tangent));
	let perturbed_normal = normal.x * tangent + normal.y * surface_normal + normal.z * bitangent;

	//output.world_normal_with_surface_foam_strength_in_alpha = vec4<f32>(normal, surface.foam_strength);
	output.world_normal_with_surface_foam_strength_in_alpha = vec4<f32>(
		normalize(perturbed_normal),
		surface.foam_strength
	);

    return output;
}
`,ee=4;class it extends R{constructor(e){const t=12+4*ee;super(e,t,"Wave Surface Displacement Patch World Half Extent UBO"),r(this,"data",{patch_world_half_extent:50,b_gerstner:!0,b_displacement_map:!0,vertex_size:1e3,gbuffer_extent:T.create(1,1),foam_scale:1,foam_bias:0,padding0:w.create(0,0,0),procedural_wave_count:12,cascades:[{patch_size_meters:200},{patch_size_meters:50},{patch_size_meters:10},{patch_size_meters:0}]})}packed(){const e=new ArrayBuffer(this.buffer.size),t=new DataView(e),a=new Float32Array(e);t.setFloat32(0,this.data.patch_world_half_extent,!0),t.setUint32(4,this.data.b_gerstner?1:0,!0),t.setUint32(8,this.data.b_displacement_map?1:0,!0),t.setUint32(12,this.data.vertex_size,!0),a.set(this.data.gbuffer_extent,4),t.setFloat32(24,this.data.foam_scale,!0),t.setFloat32(28,this.data.foam_bias,!0),a.set(this.data.padding0,8),t.setUint32(44,this.data.procedural_wave_count,!0);const n=w.create(0,0,0);for(let i=0;i<ee;i++){const o=12+i*4;a.set(n,o),t.setFloat32((o+3)*4,this.data.cascades[i].patch_size_meters,!0)}return e}}class nt{constructor(e,t,a,n){r(this,"oceanSurfaceRasterizationPipeline"),r(this,"group0"),r(this,"group1"),r(this,"group2ByTurbulenceMapIndex"),r(this,"settingsUBO"),r(this,"baseIndexCount"),r(this,"indices");const i=1024,o=4,u=3*(2*(i-1)*(i-1));this.baseIndexCount=u,this.indices=e.createBuffer({size:u*o,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.INDEX,label:"Wave Surface Displacement Indices"});const c=new Uint32Array(u);let d=0;for(let A=0;A<i-1;A++)for(let P=0;P<i-1;P++){const E=P+A*i,k=E+1,L=E+i,oe=L+1,N=new Uint32Array([E,L,k,k,L,oe]);c.set(N,d),d+=N.length}e.queue.writeBuffer(this.indices,0,c);const _=12,m=4,y=4*m,v=e.createBuffer({size:_*y,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE,label:"Wave Surface Displacement Waves"}),p=9.8,g=60,h=g*g*p/(2*Math.PI),x=new Array({direction:T.create(.4,2),amplitude:.25,wavelength:h/(12*12)},{direction:T.create(.6,2),amplitude:.3,wavelength:h/(14*14)},{direction:T.create(.8,2),amplitude:.35,wavelength:h/(12*12)},{direction:T.create(1,2),amplitude:.4,wavelength:h/(16*16)},{direction:T.create(1.2,2),amplitude:.45,wavelength:h/(12*12)},{direction:T.create(1.4,2),amplitude:.4,wavelength:h/(14*14)},{direction:T.create(1.6,2),amplitude:.35,wavelength:h/(12*12)},{direction:T.create(1.8,2),amplitude:.3,wavelength:h/(16*16)},{direction:T.create(.8,1.5),amplitude:.02,wavelength:h/(30*30)},{direction:T.create(1.1,1.5),amplitude:.02,wavelength:h/(30*30)},{direction:T.create(1.2,1.5),amplitude:.02,wavelength:h/(30*30)},{direction:T.create(1.3,1.5),amplitude:.02,wavelength:h/(30*30)}),f=new Float32Array(_*m);let z=0;x.forEach(A=>{f.set(A.direction,z),f[z+2]=A.amplitude,f[z+3]=A.wavelength,z+=4}),e.queue.writeBuffer(v,0,f),this.settingsUBO=new it(e),this.settingsUBO.data.vertex_size=i,this.settingsUBO.data.procedural_wave_count=x.length;const D=e.createBindGroupLayout({label:"Wave Surface Displacement Group 1 Compute (Displacement Map)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:1,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array"}},{binding:2,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array"}},{binding:3,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"read-only-storage"}}]});this.group1=e.createBindGroup({label:"Wave Surface Displacement Group 1 Compute (Displacement Map)",layout:D,entries:[{binding:0,resource:e.createSampler({label:"Wave Surface Displacement Group 1 Sampler",minFilter:"linear",magFilter:"linear",mipmapFilter:"linear",addressModeU:"repeat",addressModeV:"repeat",maxAnisotropy:10})},{binding:1,resource:n.Dx_Dy_Dz_Dxdz_SpatialAllMips},{binding:2,resource:n.Dydx_Dydz_Dxdx_Dzdz_SpatialAllMips},{binding:3,resource:{buffer:v}}]});const U=e.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array"}}]});this.group2ByTurbulenceMapIndex=n.turbulenceJacobianOneMip.map((A,P)=>e.createBindGroup({label:`Wave Surface Displacement Group 2 Compute (Turbulence) index ${P}`,layout:U,entries:[{binding:0,resource:A}]}));const B=e.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}],label:"Wave Surface Displacement Group 0"});this.group0=e.createBindGroup({layout:B,entries:[{binding:0,resource:{buffer:this.settingsUBO.buffer}},{binding:1,resource:{buffer:t.buffer}}],label:"Wave Surface Displacement Group 0"});const q=e.createShaderModule({code:rt,label:"Wave Surface Displacement"});this.oceanSurfaceRasterizationPipeline=e.createRenderPipeline({layout:e.createPipelineLayout({bindGroupLayouts:[B,D,U]}),vertex:{module:q,entryPoint:"screenSpaceWarped"},fragment:{module:q,entryPoint:"rasterizationFragment",targets:[{format:a.colorWithSurfaceWorldDepthInAlpha},{format:a.normalWithSurfaceFoamStrengthInAlpha}]},primitive:{topology:"triangle-list",cullMode:"back",frontFace:"cw"},depthStencil:{format:a.depth,depthWriteEnabled:!0,depthCompare:"less"},label:"Wave Surface Displacement Surface Rasterization"})}record(e,t,a,n,i,o){this.settingsUBO.data.patch_world_half_extent=i.fft?100:300,this.settingsUBO.data.b_gerstner=i.gerstner,this.settingsUBO.data.b_displacement_map=i.fft,this.settingsUBO.data.foam_bias=i.foamBias,this.settingsUBO.data.gbuffer_extent=T.create(o.extent.width,o.extent.height),this.settingsUBO.data.foam_scale=i.foamScale,this.settingsUBO.writeToGPU(e.queue);const s=t.beginRenderPass({label:"Wave Surface Rasterization",colorAttachments:[{clearValue:{r:0,g:0,b:0,a:0},loadOp:"clear",storeOp:"store",view:o.colorWithSurfaceWorldDepthInAlphaView},{clearValue:{r:0,g:0,b:0,a:0},loadOp:"clear",storeOp:"store",view:o.normalWithSurfaceFoamStrengthInAlphaView}],depthStencilAttachment:{view:o.depthView,depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"},timestampWrites:a!==void 0?{querySet:a.querySet,beginningOfPassWriteIndex:a.beginWriteIndex,endOfPassWriteIndex:a.endWriteIndex}:void 0});s.setPipeline(this.oceanSurfaceRasterizationPipeline),s.setBindGroup(0,this.group0),s.setBindGroup(1,this.group1),s.setBindGroup(2,this.group2ByTurbulenceMapIndex[n]),s.setIndexBuffer(this.indices,"uint32"),s.drawIndexed(this.baseIndexCount,1),s.end()}}const st=`// Call this in a render pass, passing in an index buffer [0, 1, 2, 0, 2, 3]

@group(0) @binding(0) var b_texture: texture_2d<f32>;
@group(0) @binding(0) var b_texture_array: texture_2d_array<f32>;
@group(0) @binding(0) var b_texture_3d: texture_3d<f32>;
@group(0) @binding(1) var b_sampler: sampler;

struct FullscreenQuadUBO
{
    color_gain: vec4<f32>,
    vertex_scale: vec4<f32>,
	swap_ba_rg: u32,
	channel_mask: u32,
	depth_or_array_layer: f32,
	mip_level: u32,
}

@group(1) @binding(0) var<uniform> u_fullscreen_quad: FullscreenQuadUBO;

const QUAD_VERTICES: array<vec4<f32>, 4> = array<vec4<f32>,4>(
    vec4<f32>(-1.0, -1.0, 0.0, 1.0),
    vec4<f32>(1.0, -1.0, 0.0, 1.0),
    vec4<f32>(1.0, 1.0, 0.0, 1.0),
    vec4<f32>(-1.0, 1.0, 0.0, 1.0),
);
const QUAD_UVS: array<vec2<f32>,4> = array<vec2<f32>,4>(
    vec2<f32>(0.0, 1.0),
    vec2<f32>(1.0, 1.0),
    vec2<f32>(1.0, 0.0),
    vec2<f32>(0.0, 0.0),
);

struct VertexOut {
    @builtin(position) position : vec4<f32>,
    @location(0) uv : vec2<f32>
}

@vertex
fn vertexMain(@builtin(vertex_index) index : u32) -> VertexOut
{
    var output : VertexOut;
    output.position = u_fullscreen_quad.vertex_scale * QUAD_VERTICES[index];
    output.uv = QUAD_UVS[index];
    return output;
}

struct FragmentOut {
	@location(0) color: vec4<f32>
}

fn doFragment(rgba: vec4<f32>) -> FragmentOut
{
	var result: FragmentOut;
	result.color = rgba;

	if(u_fullscreen_quad.swap_ba_rg == 1)
	{
		result.color = result.color.barg;
	}

	result.color.r *= f32((u_fullscreen_quad.channel_mask & 1) > 0);
	result.color.g *= f32((u_fullscreen_quad.channel_mask & 2) > 0);
	result.color.b *= f32((u_fullscreen_quad.channel_mask & 4) > 0);

	result.color *= u_fullscreen_quad.color_gain;

	result.color.a = 1.0;

	return result;
}

@fragment
fn fragmentMain(frag_interpolated: VertexOut) -> FragmentOut
{
    return doFragment(
		textureSampleLevel(
			b_texture,
			b_sampler,
			frag_interpolated.uv,
			f32(u_fullscreen_quad.mip_level)
		)
	);
}

@fragment
fn fragmentMainArray(frag_interpolated: VertexOut) -> FragmentOut
{
	return doFragment(
		textureSampleLevel(
			b_texture_array,
			b_sampler,
			frag_interpolated.uv,
			u32(u_fullscreen_quad.depth_or_array_layer),
			f32(u_fullscreen_quad.mip_level)
		)
	);
}

@fragment
fn fragmentMain3D(frag_interpolated: VertexOut) -> FragmentOut
{
	let coord = vec3<f32>(frag_interpolated.uv, u_fullscreen_quad.depth_or_array_layer / f32(textureDimensions(b_texture_3d).z));
	return doFragment(
		textureSampleLevel(
			b_texture_3d,
			b_sampler,
			coord,
			f32(u_fullscreen_quad.mip_level)
		)
	);
}
`;class ot{constructor(){r(this,"color_gain",M.create(1,1,1,1)),r(this,"vertex_scale",M.create(1,1,1,1)),r(this,"swap_ba_rg",!1),r(this,"channel_mask",7),r(this,"depth_or_array_layer",0),r(this,"mip_level_u32",0)}}class lt extends R{constructor(e){super(e,12,"Fullscreen Quad UBO"),r(this,"data",new ot)}packed(){const e=new ArrayBuffer(this.buffer.size),t=new DataView(e);return new Float32Array(e).set(this.data.color_gain,0/4),new Float32Array(e).set(this.data.vertex_scale,16/4),t.setUint32(32,this.data.swap_ba_rg?1:0,!0),t.setUint32(36,this.data.channel_mask,!0),t.setFloat32(40,this.data.depth_or_array_layer,!0),t.setUint32(44,this.data.mip_level_u32,!0),e}}class ut{constructor(e,t){r(this,"group0Layout"),r(this,"group0LayoutArray"),r(this,"group0Layout3D"),r(this,"group0ByOutputTexture"),r(this,"group0Sampler"),r(this,"ubo"),r(this,"fullscreenQuadIndexBuffer"),r(this,"group1"),r(this,"pipeline"),r(this,"pipelineArray"),r(this,"pipeline3D"),r(this,"attachmentFormat"),this.attachmentFormat=t;const a=new Uint32Array([0,1,2,0,2,3]);this.fullscreenQuadIndexBuffer=e.createBuffer({size:a.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),e.queue.writeBuffer(this.fullscreenQuadIndexBuffer,0,a,0,a.length),this.group0Layout=e.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"non-filtering"}}],label:"Fullscreen Quad Group 0"}),this.group0LayoutArray=e.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{viewDimension:"2d-array",sampleType:"unfilterable-float"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"non-filtering"}}],label:"Fullscreen Quad Group 0 Array"}),this.group0Layout3D=e.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{viewDimension:"3d",sampleType:"unfilterable-float"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"non-filtering"}}],label:"Fullscreen Quad Group 0 3D"}),this.group0ByOutputTexture=new Map,this.group0Sampler=e.createSampler({magFilter:"nearest",minFilter:"nearest"}),this.ubo=new lt(e);const n=e.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT|GPUShaderStage.VERTEX,buffer:{type:"uniform"}}],label:"Fullscreen Quad Group 1"});this.group1=e.createBindGroup({layout:n,entries:[{binding:0,resource:{buffer:this.ubo.buffer}}]});const i=e.createShaderModule({code:st,label:"Fullscreen Quad"});this.pipeline=e.createRenderPipeline({vertex:{module:i,entryPoint:"vertexMain"},fragment:{module:i,entryPoint:"fragmentMain",targets:[{format:this.attachmentFormat}]},primitive:{topology:"triangle-list",cullMode:"none",frontFace:"ccw"},layout:e.createPipelineLayout({bindGroupLayouts:[this.group0Layout,n]}),label:"Fullscreen Quad 2D"}),this.pipelineArray=e.createRenderPipeline({vertex:{module:i,entryPoint:"vertexMain"},fragment:{module:i,entryPoint:"fragmentMainArray",targets:[{format:this.attachmentFormat}]},primitive:{topology:"triangle-list",cullMode:"none",frontFace:"ccw"},layout:e.createPipelineLayout({bindGroupLayouts:[this.group0LayoutArray,n]}),label:"Fullscreen Quad 2D Array"}),this.pipeline3D=e.createRenderPipeline({vertex:{module:i,entryPoint:"vertexMain"},fragment:{module:i,entryPoint:"fragmentMain3D",targets:[{format:this.attachmentFormat}]},primitive:{topology:"triangle-list",cullMode:"none",frontFace:"ccw"},layout:e.createPipelineLayout({bindGroupLayouts:[this.group0Layout3D,n]}),label:"Fullscreen Quad 3D"})}setOutput(e,t,a){let n=this.group0Layout;switch(a.viewDimension){case"2d":{n=this.group0Layout;break}case"2d-array":{n=this.group0LayoutArray;break}case"3d":{n=this.group0Layout3D;break}default:throw new RangeError(`Unsupported texture dimension '${a.viewDimension}'`)}this.group0ByOutputTexture.set(t,{texture:a,bindGroup:e.createBindGroup({layout:n,entries:[{binding:0,resource:a.view},{binding:1,resource:this.group0Sampler}],label:`Fullscreen Quad Group 0 Texture '${a.view.label}'`})})}getAllTextureProperties(){return[...this.group0ByOutputTexture.entries()].map(([e,{texture:t}])=>({tag:e,mipLevelCount:t.mipLevelCount,depthOrArrayLayerCount:t.extent.depthOrArrayLayers}))}record(e,t,a,n,i,o){const s={r:0,g:0,b:0,a:1},u=this.group0ByOutputTexture.get(n);if(u===void 0){console.warn("FullscreenQuadPass: No texture to output.");return}const c=t.beginRenderPass({colorAttachments:[{clearValue:s,loadOp:"clear",storeOp:"store",view:a}],timestampWrites:o!==void 0?{querySet:o.querySet,beginningOfPassWriteIndex:o.beginWriteIndex,endOfPassWriteIndex:o.endWriteIndex}:void 0,label:"Fullscreen Pass"});switch(this.ubo.data.color_gain=M.create(i.colorGain.r,i.colorGain.g,i.colorGain.b,1),this.ubo.data.vertex_scale=M.create(1,i.flip?-1:1,1,1),this.ubo.data.mip_level_u32=Math.round(i.mipLevel),this.ubo.data.depth_or_array_layer=i.arrayLayer,this.ubo.data.channel_mask=(i.channelMasks.r?1:0)+(i.channelMasks.g?2:0)+(i.channelMasks.b?4:0),this.ubo.data.swap_ba_rg=i.swapBARG,this.ubo.writeToGPU(e.queue),c.setIndexBuffer(this.fullscreenQuadIndexBuffer,"uint32",0,this.fullscreenQuadIndexBuffer.size),c.setBindGroup(1,this.group1),u.texture.viewDimension){case"2d":{c.setPipeline(this.pipeline);break}case"2d-array":{c.setPipeline(this.pipelineArray);break}case"3d":{c.setPipeline(this.pipeline3D);break}default:throw new Error(`Unsupported texture dimension '${u.texture.viewDimension}'`)}c.setBindGroup(0,u.bindGroup),c.drawIndexed(6,1,0,0,0),c.end()}}const O=["SkyviewLUT","AerialPerspectiveLUT","FFTWaves","OceanSurface","AtmosphereCamera","FullscreenQuad"],te=["DrawToDraw",...O];class ae{constructor(e){r(this,"values"),r(this,"sum",0),r(this,"average_",0),r(this,"count",0),r(this,"index",0),this.values=new Array(e).fill(0)}get average(){return this.average_}push(e){this.index>=this.values.length&&(this.index=0),this.index<this.count&&(this.sum-=this.values[this.index]),this.values[this.index]=e,this.sum+=e,this.count=Math.min(this.values.length,this.count+1),this.average_=this.sum/this.count,this.index+=1}}class ct{constructor(e){r(this,"queryBuffers"),r(this,"frametimeAverages"),r(this,"timestampIndexMapping",new Map),r(this,"timestampQueryIndex",0),r(this,"uiDisplay"),r(this,"initialized");const t=400;if(this.frametimeAverages=new Map([["DrawToDraw",new ae(t)]]),this.uiDisplay={averageFPS:0,frametimeControllers:new Map},!e.features.has("timestamp-query")){console.warn("WebGPU feature 'timestamp-query' is not supported. Continuing, but without performance information about specific stages."),this.initialized=!0;return}const a=8,n=2*O.length;this.queryBuffers={querySet:e.createQuerySet({type:"timestamp",count:n}),writeBuffer:e.createBuffer({size:a*n,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE}),readBuffer:e.createBuffer({size:a*n,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})},O.forEach(i=>{this.frametimeAverages.set(i,new ae(t))}),this.initialized=!0}get averageFPS(){return this.uiDisplay.averageFPS}destroy(){var e,t,a;(e=this.queryBuffers)==null||e.querySet.destroy(),(t=this.queryBuffers)==null||t.writeBuffer.destroy(),(a=this.queryBuffers)==null||a.readBuffer.destroy(),this.initialized=!1}setupUI(e){const t=e.addFolder("Performance").close();t.add(this.uiDisplay,"averageFPS").decimals(1).disable().name("Average FPS").listen(),te.forEach(a=>{this.uiDisplay.frametimeControllers.set(a,t.add({value:0},"value").name(`${a} (ms)`).decimals(6).disable())})}beginFrame(e){var t;(t=this.frametimeAverages.get("DrawToDraw"))==null||t.push(e),this.timestampQueryIndex=0,this.timestampIndexMapping.clear()}queueTimestampInterval(e){if(this.queryBuffers===void 0)return;this.timestampIndexMapping.set(e,this.timestampQueryIndex);const t=this.timestampQueryIndex,a=t+1;return this.timestampQueryIndex+=2,{querySet:this.queryBuffers.querySet,beginWriteIndex:t,endWriteIndex:a}}preSubmitCommands(e){this.queryBuffers==null||this.queryBuffers.readBuffer.mapState!=="unmapped"||(e.resolveQuerySet(this.queryBuffers.querySet,0,this.timestampQueryIndex,this.queryBuffers.writeBuffer,0),e.copyBufferToBuffer(this.queryBuffers.writeBuffer,0,this.queryBuffers.readBuffer,0,this.queryBuffers.readBuffer.size))}postSubmitCommands(){var e;if(this.uiDisplay.averageFPS=1e3/(((e=this.frametimeAverages.get("DrawToDraw"))==null?void 0:e.average)??1e3),this.queryBuffers==null||this.queryBuffers.readBuffer.mapState!=="unmapped")return;const t=this.queryBuffers.readBuffer;t.mapAsync(GPUMapMode.READ,0,t.size).then(()=>{const a=new BigInt64Array(t.getMappedRange(0,t.size));this.timestampIndexMapping.forEach((n,i)=>{var o;const u=Number(a.at(n+1)-a.at(n))/1e6;(o=this.frametimeAverages.get(i))==null||o.push(u)}),te.forEach(n=>{var i,o;const s=(i=this.frametimeAverages.get(n))==null?void 0:i.average;s!==void 0&&((o=this.uiDisplay.frametimeControllers.get(n))==null||o.setValue(s))}),t.unmap()}).catch(a=>{this.initialized&&console.error(new Error("Failed while retrieving frametime values from GPU:",{cause:a}))})}}const dt={width:2048,height:1024},_t={width:1024,height:1024},mt={width:1024,height:512},pt={width:32,height:32,depthOrArrayLayers:32},se=[.25,.3333,.5,.75,1,1.5,2,4],I=new Map([["bad",{renderScale:.5,fftGridSizeLog2:5,oceanSurfaceVertexSize:128}],["good",{renderScale:1,fftGridSizeLog2:9,oceanSurfaceVertexSize:1024}]]);function ht(l,e,t){l.add(e,"renderScale",se).name("Render Resolution Scale").decimals(1).onFinishChange(c=>{t()}).listen();const a=l.addFolder("Camera").open();a.add(e.oceanCamera,"translationX").name("Camera X").min(-100).max(100),a.add(e.oceanCamera,"translationY").name("Camera Y").min(10).max(2e3),a.add(e.oceanCamera,"translationZ").name("Camera Z").min(-100).max(100);const n=.01;a.add(e.oceanCamera,"eulerAnglesX").name("Camera Pitch").min(-Math.PI/2+n).max(Math.PI/2-n),a.add(e.oceanCamera,"eulerAnglesY").name("Camera Yaw").min(-Math.PI).max(Math.PI);const i=l.addFolder("Sun").open();i.add(e.orbit,"timeHours").min(0).max(24).name("Time in Hours").listen(),i.add(e.orbit,"timeSpeedupFactor").min(1).max(5e4).step(1).name("Time Multiplier"),i.add(e.orbit,"paused").name("Pause Sun"),i.add({fn:()=>{e.orbit.timeHours=e.orbit.reversed?18+.5:6-.5}},"fn").name("Skip to Sunrise"),i.add({fn:()=>{e.orbit.timeHours=e.orbit.reversed?6+.5:18-.5}},"fn").name("Skip to Sunset"),i.add(e.orbit,"reversed").name("Reverse Sun"),i.add(e.orbit,"sunsetAzimuthRadians").name("Sun Azimuth").min(0).max(2*Math.PI),i.add(e.orbit,"inclinationRadians").name("Sun Inclination").min(0).max(Math.PI);const o=l.addFolder("Ocean").close();o.add(e.oceanSurfaceSettings,"gerstner").name("Gerstner Waves"),o.add(e.oceanSurfaceSettings,"fft").name("FFT Accelerated Waves"),o.add(e.time,"pause").name("Pause Waves"),o.add(e.oceanSurfaceSettings,"foamScale").name("Foam Scale").min(-30).max(30),o.add(e.oceanSurfaceSettings,"foamBias").name("Foam Bias").min(-1).max(1),o.add(e.fourierWavesSettings,"gravity").name("Gravity (m / s^2)").min(.01).max(20),o.add(e.fourierWavesSettings,"waveSwell").name("Wave Swell").min(.01).max(1),o.add(e.fourierWavesSettings,"windFetchMeters").name("Wind Fetch (m)").min(10*1e3).max(100*1e3),o.add(e.fourierWavesSettings,"windSpeedMetersPerSeconds").name("Wind Speed (m/s)").min(.01).max(50);const s=l.addFolder("Debug").close(),u=[];s.add(e,"renderFromOceanPOV").name("Render from Ocean POV").onFinishChange(c=>{u.forEach(d=>{d.enable(!c)})}),u.push(s.add(e.debugCamera,"translationX").name("Camera X").min(-5e3).max(5e3),s.add(e.debugCamera,"translationY").name("Camera Y").min(10).max(5e3),s.add(e.debugCamera,"translationZ").name("Camera Z").min(-5e3).max(5e3),s.add(e.debugCamera,"eulerAnglesX").name("Camera Pitch").min(-Math.PI/2+n).max(Math.PI/2-n),s.add(e.debugCamera,"eulerAnglesY").name("Camera Yaw").min(-Math.PI).max(Math.PI),s.add({fn:()=>{Object.assign(e.debugCamera,structuredClone(e.oceanCamera)),s.controllers.forEach(c=>{c.updateDisplay()})}},"fn").name("Reset to match main camera")),u.forEach(c=>c.enable(!1))}function re(l,e,t){const a=new ne(l,{width:1,height:1}),n=new Te(l);n.writeToGPU(l.queue);const i=new Me(l,dt,n),o=l.features.has("float32-filterable"),s=new De(l,_t,i.view,o,n),u=new Re(l,mt,i.view,s.view,o,n),c=new Ce(l,pt,i.view,s.view,o,n),d=new at(l,n,e.fftGridSizeLog2),_=d.views(),m=new nt(l,n,a.formats,d.displacementMaps()),y=new Ee(l,a.readGroupLayout,i.view,s.view,u.view,c.view,o,n),v=new ut(l,t),p=a.colorRenderables();[["Scene",new S(y.outputColor)],["GBufferColor",p.colorWithSurfaceWorldDepthInAlpha],["GBufferNormal",p.normalWithSurfaceFoamStrengthInAlpha],["AtmosphereTransmittanceLUT",new S(i.texture)],["AtmosphereMultiscatterLUT",new S(s.texture)],["AtmosphereSkyviewLUT",new S(u.texture)],["AtmosphereAerialPerspectiveLUT",new S(c.texture)],["FFTWaveSpectrumGaussianNoise",_.gaussianNoise],["FFTWaveInitialAmplitude",_.initialAmplitude],["FFTWaveDx_plus_iDy_Dz_iDxdz_Amplitude",_.packed_Dx_plus_iDy_Dz_iDxdz_Amplitude],["FFTWaveDydx_plus_iDydz_Dxdx_plus_iDzdz_Amplitude",_.packed_Dydx_plus_iDydz_Dxdx_plus_iDzdz_Amplitude],["FFTWaveTurbulenceJacobian",_.turbulenceJacobian],["FFTWaveDx_Dy_Dz_Dxdz_Spatial",_.Dx_Dy_Dz_Dxdz_Spatial],["FFTWaveDydx_Dydz_Dxdx_Dzdz_Spatial",_.Dydx_Dydz_Dxdx_Dzdz_Spatial]].forEach(([h,x])=>{v.setOutput(l,h,x)});const g=l.createCommandEncoder({label:"Atmosphere LUT Initialization"});return i.record(g),s.record(g),l.queue.submit([g.finish()]),{aerialPerspectiveLUTPassResources:c,atmosphereCameraPassResources:y,fftWaveSpectrumResources:d,fullscreenQuadPassResources:v,gbuffer:a,globalUBO:n,multiscatterLUTPassResources:s,skyviewLUTPassResources:u,transmittanceLUTPassResources:i,waveSurfaceDisplacementPassResources:m}}function ie(l){switch(l){case"bgra8unorm":return"bgra8unorm-srgb";case"rgba8unorm":return"rgba8unorm-srgb";default:return console.warn(`Using unsupported canvas format "${l}", color encoding will be off.`),l}}function ft(l,e,t,a){e.data.time.deltaTimeSeconds=t.time.deltaTimeSeconds,e.data.time.timeSeconds=t.time.timeSeconds;const n=2*Math.PI/24,i=(12-t.orbit.timeHours)*n,o=w.create(-Math.sin(t.orbit.sunsetAzimuthRadians),0,Math.cos(t.orbit.sunsetAzimuthRadians)),s=w.create(Math.cos(t.orbit.sunsetAzimuthRadians)*Math.cos(t.orbit.inclinationRadians),Math.sin(t.orbit.inclinationRadians),Math.sin(t.orbit.sunsetAzimuthRadians)*Math.cos(t.orbit.inclinationRadians)),u=w.add(w.scale(o,Math.sin(i)),w.scale(s,Math.cos(i)));w.scale(u,-1,e.data.light.forward);const c=60*Math.PI/180,m=b.perspective(c,a,.1,1e3),y=(v,p)=>{const g=[p.translationX,p.translationY,p.translationZ,1],h=b.rotationX(p.eulerAnglesX),x=b.rotationY(p.eulerAnglesY),f=b.rotationZ(p.eulerAnglesZ),z=b.mul(b.translation(M.create(...g)),b.mul(x,b.mul(h,f))),D=b.inverse(z);Object.assign(v,{invProj:b.inverse(m),invView:z,projView:b.mul(m,D),position:M.create(...g),forward:M.create(...b.multiply(z,M.create(0,0,-1,0)))})};y(e.data.ocean_camera,t.oceanCamera),y(e.data.camera,t.renderFromOceanPOV?t.oceanCamera:t.debugCamera),e.writeToGPU(l)}class gt{constructor(e,t){r(this,"resources"),r(this,"unscaledResolution"),r(this,"renderOutputController"),r(this,"parameters"),r(this,"performance"),r(this,"performanceConfig"),r(this,"device"),r(this,"quit",!1),r(this,"dummyFrameCounter"),r(this,"canvasTextureFormat"),this.device=e,this.canvasTextureFormat=t,this.performanceConfig=I.get("good"),this.renderOutputController=new Oe,this.parameters={oceanSurfaceSettings:{gerstner:!0,fft:!0,foamScale:15,foamBias:.25},renderFromOceanPOV:!0,oceanCamera:{translationX:0,translationY:20,translationZ:0,eulerAnglesX:-.2,eulerAnglesY:0,eulerAnglesZ:0},debugCamera:{translationX:0,translationY:40,translationZ:-20,eulerAnglesX:-.4,eulerAnglesY:0,eulerAnglesZ:0},fourierWavesSettings:{gravity:9.8,windSpeedMetersPerSeconds:15,windFetchMeters:40*1e3,waveSwell:.3},time:{pause:!1,timeSeconds:0,deltaTimeSeconds:0},orbit:{timeHours:5.6,timeSpeedupFactor:200,paused:!1,reversed:!1,inclinationRadians:Math.PI/2,sunsetAzimuthRadians:Math.PI},renderScale:1},this.resources=re(this.device,this.performanceConfig,ie(t));for(const a of this.resources.fullscreenQuadPassResources.getAllTextureProperties())this.renderOutputController.setTextureProperties(a);this.unscaledResolution={width:128,height:128},this.performance=new ct(this.device),this.dummyFrameCounter=10}destroy(){this.performance.destroy(),this.device.destroy()}presentationInterface(){return{device:this.device,format:this.canvasTextureFormat,viewFormats:[this.resources.fullscreenQuadPassResources.attachmentFormat]}}setupUI(e){ht(e,this.parameters,()=>{this.updateResizableResources()}),this.renderOutputController.setupUI(e),this.performance.setupUI(e)}setPerformanceConfig(e){const t=I.get(e)??I.get("bad");if(t.fftGridSizeLog2!==this.performanceConfig.fftGridSizeLog2||t.oceanSurfaceVertexSize!==this.performanceConfig.oceanSurfaceVertexSize||t.renderScale!==this.performanceConfig.renderScale){this.performanceConfig=t,this.resources=re(this.device,this.performanceConfig,ie(this.canvasTextureFormat)),this.parameters.renderScale=this.performanceConfig.renderScale,this.updateResizableResources();for(const n of this.resources.fullscreenQuadPassResources.getAllTextureProperties())this.renderOutputController.setTextureProperties(n)}}setLowPerformanceMode(e){const t=e?"bad":"good";this.setPerformanceConfig(t)}tickTime(e){const n=this.parameters.oceanSurfaceSettings.fft?100:60,i=this.parameters.time;i.pause?i.deltaTimeSeconds=0:(i.deltaTimeSeconds=e/1e3,i.timeSeconds+=i.deltaTimeSeconds),i.timeSeconds-=Math.floor(i.timeSeconds/n)*n;const o=this.parameters.orbit;o.paused||(o.timeHours+=(o.reversed?-1:1)*o.timeSpeedupFactor*e/36e5,o.timeHours=o.timeHours-Math.floor(o.timeHours/24)*24)}draw(e,t,a,n){if(this.resources===void 0)return;if(this.dummyFrameCounter>0){this.dummyFrameCounter-=1;return}const i=e.createView({format:"bgra8unorm-srgb"});this.performance.beginFrame(n),this.tickTime(n),ft(this.device.queue,this.resources.globalUBO,this.parameters,t);const o=this.device.createCommandEncoder({label:"Main"});this.resources.fftWaveSpectrumResources.record(this.device,o,this.parameters.fourierWavesSettings,this.performance.queueTimestampInterval("FFTWaves")),this.resources.waveSurfaceDisplacementPassResources.record(this.device,o,this.performance.queueTimestampInterval("OceanSurface"),this.resources.fftWaveSpectrumResources.turbulenceMapIndex,{gerstner:this.parameters.oceanSurfaceSettings.gerstner,fft:this.parameters.oceanSurfaceSettings.fft,foamBias:this.parameters.oceanSurfaceSettings.foamBias,foamScale:this.parameters.oceanSurfaceSettings.foamScale},this.resources.gbuffer),this.resources.skyviewLUTPassResources.record(o,this.performance.queueTimestampInterval("SkyviewLUT")),this.resources.aerialPerspectiveLUTPassResources.record(o,this.performance.queueTimestampInterval("AerialPerspectiveLUT")),this.resources.atmosphereCameraPassResources.record(o,this.performance.queueTimestampInterval("AtmosphereCamera"),this.resources.gbuffer);const s=this.renderOutputController.current();this.resources.fullscreenQuadPassResources.record(this.device,o,i,s.tag,s.transform,this.performance.queueTimestampInterval("FullscreenQuad")),this.performance.preSubmitCommands(o),this.device.queue.submit([o.finish()]),this.performance.postSubmitCommands()}updateResizableResources(){if(this.resources===void 0)return;const e=s=>({width:Math.floor(this.unscaledResolution.width*s),height:Math.floor(this.unscaledResolution.height*s)}),t=s=>s.width<8192&&s.height<8192&&s.width*s.height*16<268435456;let a=this.parameters.renderScale;const n=e(a);t(n)||(se.slice().reverse().some(s=>{if(t(e(s)))return a=s,!0}),console.warn(`During resize: Texture size (${n.width},${n.height}) exceeds WebGPU guaranteed limit (8192, 8192).
					Defaulting to highest possible render scale of ${a}`)),this.parameters.renderScale=a;const i=e(this.parameters.renderScale);console.log(`Resizing to (${i.width},${i.height})`),this.resources.gbuffer=new ne(this.device,i,this.resources.gbuffer);const o=this.resources.gbuffer.colorRenderables();this.resources.fullscreenQuadPassResources.setOutput(this.device,"GBufferColor",o.colorWithSurfaceWorldDepthInAlpha),this.resources.fullscreenQuadPassResources.setOutput(this.device,"GBufferNormal",o.normalWithSurfaceFoamStrengthInAlpha),this.resources.atmosphereCameraPassResources.resize(i,this.device,this.resources.transmittanceLUTPassResources.view,this.resources.multiscatterLUTPassResources.view,this.resources.skyviewLUTPassResources.view,this.resources.aerialPerspectiveLUTPassResources.view),this.resources.fullscreenQuadPassResources.setOutput(this.device,"Scene",new S(this.resources.atmosphereCameraPassResources.outputColor));for(const s of this.resources.fullscreenQuadPassResources.getAllTextureProperties())this.renderOutputController.setTextureProperties(s)}handleResize(e,t){this.unscaledResolution.width===e&&this.unscaledResolution.height===t||(this.unscaledResolution.width=e,this.unscaledResolution.height=t,this.updateResizableResources())}}const yt=(l,e)=>new gt(l,e);export{yt as SkySeaAppConstructor};
