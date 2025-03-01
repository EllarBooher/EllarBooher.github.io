var _e=Object.defineProperty;var me=(l,e,t)=>e in l?_e(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t;var a=(l,e,t)=>me(l,typeof e!="symbol"?e+"":e,t);import{m as M,v as A,a as x,b}from"./wgpu-matrix.module-BO3i1RYM.js";const oe=4;class E{constructor(e,t,r){a(this,"buffer");this.buffer=e.createBuffer({size:t*oe,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM,label:r})}writeToGPU(e){const t=this.packed();t.byteLength!=this.buffer.size&&console.warn(`GPUBuffer label: '${this.buffer.label}' uploaded with improper size. Expected: ${this.buffer.size} bytes, got ${t.byteLength} bytes.`),e.writeBuffer(this.buffer,0,t)}}function pe(){return{rayleighMm:{scattering:x.create(5.802,13.558,33.1),absorption:x.create(0,0,0),densityScale:.008},mieMm:{scattering:x.create(3.996,3.996,3.996),absorption:x.create(4.4,4.4,4.4),densityScale:.0012},ozoneMm:{scattering:x.create(0,0,0),absorption:x.create(.65,1.881,.085)},planetRadiusMm:6.36,atmosphereRadiusMm:6.42,groundAlbedo:x.create(.3*1,.3*.75,.3*.4)}}function he(){return{color:x.create(1,1,1),strength:60,forward:x.create(0,-1,0),angularRadius:16/60*(3.141592653589793/180)}}const fe=16,ge=128,ve=16,ye=32,be=16,Te=256,xe=16,we=16;function Se(l,e){return Math.ceil(e/l)*l}const ze=Math.max(fe,ve,be,xe),De=Se(ze,ge+ye+Te+we);class Me extends E{constructor(t){super(t,De/oe,"Global UBO");a(this,"data",{atmosphere:pe(),light:he(),camera:{invProj:M.identity(),invView:M.identity(),projView:M.identity(),position:A.create(0,0,0,1),forward:A.create(0,0,-1,0)},time:{timeSeconds:0,deltaTimeSeconds:0}})}packed(){const t=new Float32Array(2).fill(0),r=new Float32Array(4).fill(0),s=new Float32Array(4*2).fill(0),i=this.data.atmosphere,n=i.rayleighMm,o=i.mieMm,u=new Float32Array([...n.scattering,n.densityScale,...n.absorption,i.planetRadiusMm,...o.scattering,o.densityScale,...o.absorption,i.atmosphereRadiusMm,...i.groundAlbedo,0,...i.ozoneMm.scattering,0,...i.ozoneMm.absorption,0,...r]),c=this.data.light,_=new Float32Array([...c.color,c.strength,...c.forward,c.angularRadius]),d=this.data.camera,p=new Float32Array([...d.invProj,...d.invView,...d.projView,...d.position,...d.forward,...s]),h=this.data.time,g=new Float32Array([...t,h.timeSeconds,h.deltaTimeSeconds]);return new Float32Array([...p,...u,..._,...g])}}var m=(l=>(l[l.SkyviewLUT=0]="SkyviewLUT",l[l.TransmittanceLUT=1]="TransmittanceLUT",l[l.MultiscatterLUT=2]="MultiscatterLUT",l[l.Scene=3]="Scene",l[l.GBufferColor=4]="GBufferColor",l[l.GBufferNormal=5]="GBufferNormal",l[l.FFTWaveSpectrumGaussianNoise=6]="FFTWaveSpectrumGaussianNoise",l[l.FFTWaveInitialAmplitude=7]="FFTWaveInitialAmplitude",l[l.FFTWaveDx_plus_iDy_Dz_iDxdz_Amplitude=8]="FFTWaveDx_plus_iDy_Dz_iDxdz_Amplitude",l[l.FFTWaveDydx_plus_iDydz_Dxdx_plus_iDzdz_Amplitude=9]="FFTWaveDydx_plus_iDydz_Dxdx_plus_iDzdz_Amplitude",l[l.FFTWaveTurbulenceJacobian=10]="FFTWaveTurbulenceJacobian",l[l.FFTWaveDx_Dy_Dz_Dxdz_Spatial=11]="FFTWaveDx_Dy_Dz_Dxdz_Spatial",l[l.FFTWaveDydx_Dydz_Dxdx_Dzdz_Spatial=12]="FFTWaveDydx_Dydz_Dxdx_Dzdz_Spatial",l))(m||{});class T{constructor(e){a(this,"texture");a(this,"view");this.texture=e,this.view=e.createView({label:`Render Output View for '${e.label}'`,dimension:this.depthOrArrayLayerCount>1?"2d-array":"2d",arrayLayerCount:this.depthOrArrayLayerCount,baseArrayLayer:0})}get mipLevelCount(){return this.texture.mipLevelCount}get depthOrArrayLayerCount(){return this.texture.depthOrArrayLayers}}const $="rgba16float",Ae="float",Ue="depth32float",Z="rgba16float",Ee="float";class ee{constructor(e,t,r){a(this,"colorWithSurfaceWorldDepthInAlpha");a(this,"colorWithSurfaceWorldDepthInAlphaView");a(this,"normalWithSurfaceFoamStrengthInAlpha");a(this,"normalWithSurfaceFoamStrengthInAlphaView");a(this,"depth");a(this,"depthView");a(this,"readGroupLayout");a(this,"readGroup");a(this,"writeGroupLayout");a(this,"writeGroup");this.colorWithSurfaceWorldDepthInAlpha=e.createTexture({size:t,dimension:"2d",format:$,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,label:"GBuffer ColorWithSurfaceWorldDepthInAlpha"}),this.colorWithSurfaceWorldDepthInAlphaView=this.colorWithSurfaceWorldDepthInAlpha.createView({label:"GBuffer ColorWithSurfaceWorldDepthInAlpha"}),this.normalWithSurfaceFoamStrengthInAlpha=e.createTexture({size:t,dimension:"2d",format:Z,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,label:"GBuffer Normal"}),this.normalWithSurfaceFoamStrengthInAlphaView=this.normalWithSurfaceFoamStrengthInAlpha.createView({label:"GBuffer Normal"}),this.readGroupLayout=(r==null?void 0:r.readGroupLayout)??e.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE|GPUShaderStage.FRAGMENT,texture:{sampleType:Ae}},{binding:1,visibility:GPUShaderStage.COMPUTE|GPUShaderStage.FRAGMENT,texture:{sampleType:Ee}}],label:"GBuffer Read Group Layout"}),this.readGroup=e.createBindGroup({layout:this.readGroupLayout,entries:[{binding:0,resource:this.colorWithSurfaceWorldDepthInAlphaView},{binding:1,resource:this.normalWithSurfaceFoamStrengthInAlphaView}],label:"GBuffer Read Group"}),this.writeGroupLayout=(r==null?void 0:r.writeGroupLayout)??e.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE|GPUShaderStage.FRAGMENT,storageTexture:{access:"write-only",format:$}},{binding:1,visibility:GPUShaderStage.COMPUTE|GPUShaderStage.FRAGMENT,storageTexture:{access:"write-only",format:Z}}],label:"GBuffer Write Group Layout"}),this.writeGroup=e.createBindGroup({layout:this.writeGroupLayout,entries:[{binding:0,resource:this.colorWithSurfaceWorldDepthInAlphaView},{binding:1,resource:this.normalWithSurfaceFoamStrengthInAlphaView}],label:"GBuffer Write Group"}),this.depth=e.createTexture({size:t,dimension:"2d",format:Ue,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,label:"GBuffer Depth"}),this.depthView=this.depth.createView({label:"GBuffer Depth"})}}const Re=`// Sizeof(Atmosphere) = 8 * 16 = 128
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
// Sizeof(GlobalUBO) = 128 + 32 + 256 + 16 = 432 (as of writing)
// Alignof(GlobalUBO) = 16
struct GlobalUBO
{
	camera: Camera, // offset 128 + 32
	atmosphere: Atmosphere, // offset 0
	light: CelestialLight, // offset 128
	time: Time, // offset 128 + 32 + 256
}


@group(0) @binding(0) var transmittance_lut: texture_storage_2d<rgba32float, write>;

@group(1) @binding(0) var<uniform> u_global: GlobalUBO;

// This file contains shared methods and definitions for raymarching the atmosphere and generating the lookup tables

// Based on:
// "A Scalable and Production Ready Sky and Atmosphere Rendering Technique" by Sébastien Hillaire (2020)
// https://sebh.github.io/publications/egsr2020.pdf
//
// "Precomputed Atmospheric Scattering: a New Implementation" by Eric Bruneton (2017)
// https://ebruneton.github.io/precomputed_atmospheric_scattering

const TRANSMITTANCE_LUT_WIDTH = 2048u;
const TRANSMITTANCE_LUT_HEIGHT = 1024u;

const MULTISCATTER_LUT_WIDTH = 1024u;
const MULTISCATTER_LUT_HEIGHT = 1024u;

const SKYVIEW_LUT_WIDTH = 1024u;
const SKYVIEW_LUT_HEIGHT = 512u;

const METERS_PER_MM: f32 = 1000000;
const PI: f32 = 3.141592653589793;

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
    mu: f32
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
        textureCoordFromUnitRange(x_mu, TRANSMITTANCE_LUT_WIDTH),
        textureCoordFromUnitRange(x_radius, TRANSMITTANCE_LUT_HEIGHT)
    );
}

// Inverse of transmittanceLUT_RMu_to_UV
// Allocates more texture space to interesting rays near the horizon.
fn transmittanceLUT_UV_to_RMu(
    atmosphere: ptr<function,Atmosphere>,
    uv: vec2<f32>
) -> vec2<f32>
{
    let x_mu : f32 = unitRangeFromTextureCoord(uv.x, TRANSMITTANCE_LUT_WIDTH);
    let x_radius : f32 = unitRangeFromTextureCoord(uv.y, TRANSMITTANCE_LUT_HEIGHT);

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
    mu_light: f32
) -> vec2<f32>
{
    let u_unit: f32 = 0.5 + 0.5 * mu_light;
    let v_unit: f32 = clamp(
        (radius - (*atmosphere).planet_radius_Mm)
            / ((*atmosphere).atmosphere_radius_Mm - (*atmosphere).planet_radius_Mm),
        0.0, 1.0
    );

    return vec2<f32>(
        textureCoordFromUnitRange(u_unit, MULTISCATTER_LUT_WIDTH),
        textureCoordFromUnitRange(v_unit, MULTISCATTER_LUT_HEIGHT)
    );
}

fn multiscatterLUT_UV_to_RMu(
    atmosphere: ptr<function,Atmosphere>,
    uv: vec2<f32>,
) -> vec2<f32>
{
    let u_unit: f32 = unitRangeFromTextureCoord(uv.x, MULTISCATTER_LUT_WIDTH);
    let v_unit: f32 = unitRangeFromTextureCoord(uv.y, MULTISCATTER_LUT_HEIGHT);

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
    let uv: vec2<f32> = multiscatterLUT_RMu_to_UV(atmosphere, radius, mu_light);

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
    let uv: vec2<f32> = transmittanceLUT_RMu_to_UV(atmosphere, radius, mu);

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

const SAMPLE_COUNT: u32 = 500;

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

    let r_mu: vec2<f32> = transmittanceLUT_UV_to_RMu(&atmosphere, uv);

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
`,Le="rgba32float";class Pe{constructor(e,t,r){a(this,"texture");a(this,"view");a(this,"group0");a(this,"group1");a(this,"pipeline");this.texture=e.createTexture({size:t,dimension:"2d",format:Le,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING,label:"Transmittance LUT"}),this.view=this.texture.createView({label:"Transmittance LUT"});const s=e.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{access:"write-only",format:this.texture.format}}],label:"Transmittance LUT Group 0"});this.group0=e.createBindGroup({layout:s,entries:[{binding:0,resource:this.view}],label:"Transmittance LUT Group 0"});const i=e.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{}}],label:"Transmittance LUT Group 1"});this.group1=e.createBindGroup({layout:i,entries:[{binding:0,resource:{buffer:r.buffer}}],label:"Transmittance LUT Group 1"});const n=e.createShaderModule({code:Re,label:"Transmittance LUT"});this.pipeline=e.createComputePipeline({compute:{module:n,entryPoint:"computeTransmittance"},layout:e.createPipelineLayout({bindGroupLayouts:[s,i]}),label:"Transmittance LUT"})}}const Ie=`// Sizeof(Atmosphere) = 8 * 16 = 128
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
// Sizeof(GlobalUBO) = 128 + 32 + 256 + 16 = 432 (as of writing)
// Alignof(GlobalUBO) = 16
struct GlobalUBO
{
	camera: Camera, // offset 128 + 32
	atmosphere: Atmosphere, // offset 0
	light: CelestialLight, // offset 128
	time: Time, // offset 128 + 32 + 256
}


@group(0) @binding(0) var multiscatter_lut: texture_storage_2d<rgba32float, write>;
@group(0) @binding(1) var lut_sampler: sampler;
@group(0) @binding(2) var transmittance_lut: texture_2d<f32>;

@group(1) @binding(0) var<uniform> u_global: GlobalUBO;

// This file contains shared methods and definitions for raymarching the atmosphere and generating the lookup tables

// Based on:
// "A Scalable and Production Ready Sky and Atmosphere Rendering Technique" by Sébastien Hillaire (2020)
// https://sebh.github.io/publications/egsr2020.pdf
//
// "Precomputed Atmospheric Scattering: a New Implementation" by Eric Bruneton (2017)
// https://ebruneton.github.io/precomputed_atmospheric_scattering

const TRANSMITTANCE_LUT_WIDTH = 2048u;
const TRANSMITTANCE_LUT_HEIGHT = 1024u;

const MULTISCATTER_LUT_WIDTH = 1024u;
const MULTISCATTER_LUT_HEIGHT = 1024u;

const SKYVIEW_LUT_WIDTH = 1024u;
const SKYVIEW_LUT_HEIGHT = 512u;

const METERS_PER_MM: f32 = 1000000;
const PI: f32 = 3.141592653589793;

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
    mu: f32
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
        textureCoordFromUnitRange(x_mu, TRANSMITTANCE_LUT_WIDTH),
        textureCoordFromUnitRange(x_radius, TRANSMITTANCE_LUT_HEIGHT)
    );
}

// Inverse of transmittanceLUT_RMu_to_UV
// Allocates more texture space to interesting rays near the horizon.
fn transmittanceLUT_UV_to_RMu(
    atmosphere: ptr<function,Atmosphere>,
    uv: vec2<f32>
) -> vec2<f32>
{
    let x_mu : f32 = unitRangeFromTextureCoord(uv.x, TRANSMITTANCE_LUT_WIDTH);
    let x_radius : f32 = unitRangeFromTextureCoord(uv.y, TRANSMITTANCE_LUT_HEIGHT);

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
    mu_light: f32
) -> vec2<f32>
{
    let u_unit: f32 = 0.5 + 0.5 * mu_light;
    let v_unit: f32 = clamp(
        (radius - (*atmosphere).planet_radius_Mm)
            / ((*atmosphere).atmosphere_radius_Mm - (*atmosphere).planet_radius_Mm),
        0.0, 1.0
    );

    return vec2<f32>(
        textureCoordFromUnitRange(u_unit, MULTISCATTER_LUT_WIDTH),
        textureCoordFromUnitRange(v_unit, MULTISCATTER_LUT_HEIGHT)
    );
}

fn multiscatterLUT_UV_to_RMu(
    atmosphere: ptr<function,Atmosphere>,
    uv: vec2<f32>,
) -> vec2<f32>
{
    let u_unit: f32 = unitRangeFromTextureCoord(uv.x, MULTISCATTER_LUT_WIDTH);
    let v_unit: f32 = unitRangeFromTextureCoord(uv.y, MULTISCATTER_LUT_HEIGHT);

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
    let uv: vec2<f32> = multiscatterLUT_RMu_to_UV(atmosphere, radius, mu_light);

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
    let uv: vec2<f32> = transmittanceLUT_RMu_to_UV(atmosphere, radius, mu);

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

//// FLAGS MULTISCATTERING ISOTROPIC_PHASE SCATTERING_NONLINEAR_SAMPLE LIGHT_ILLUMINANCE_IS_ONE HIGH_SAMPLE_COUNT SAMPLE_PATH_TRANSMITTANCE

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

const T_SUBSTEP_NONLINEAR = 0.4;
const T_SUBSTEP_LINEAR = 0.2;

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
    result.multiscattering_transfer = vec3<f32>(0.0);

	if(sample_distance <= 0.0)
	{
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

    const ISOTROPIC_PHASE: f32 = 1.0 / (4.0 * PI);

    const SAMPLE_COUNT = 256.0;

	var t: f32 = 0.0;
	var d_t: f32 = 0.0;
    for (var s = 0.0; s < SAMPLE_COUNT; s += 1.0)
    {
		{
			// linear distribution
			let t_new = sample_distance * (s + T_SUBSTEP_LINEAR) / SAMPLE_COUNT;
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

    let r_mu_light = multiscatterLUT_UV_to_RMu(&atmosphere, uv);

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

    const SPHERE_SOLID_ANGLE = 4.0 * PI;
    const ISOTROPIC_PHASE = 1.0 / (4.0 * PI);

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
`,te="rgba32float";class Ce{constructor(e,t,r,s,i){a(this,"texture");a(this,"view");a(this,"group0");a(this,"group1");a(this,"pipeline");const n="Multiscatter LUT";this.texture=e.createTexture({size:t,dimension:"2d",format:te,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING,label:"Multiscatter LUT"}),this.view=this.texture.createView({label:n});const o=e.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{access:"write-only",format:te}},{binding:1,visibility:GPUShaderStage.COMPUTE,sampler:{type:s?"filtering":"non-filtering"}},{binding:2,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:s?"float":"unfilterable-float"}}],label:"Multiscatter LUT Group 0"});this.group0=e.createBindGroup({layout:o,entries:[{binding:0,resource:this.view},{binding:1,resource:e.createSampler({magFilter:s?"linear":"nearest",minFilter:s?"linear":"nearest"})},{binding:2,resource:r}],label:"Multiscatter LUT Group 0"});const u=e.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{}}],label:"Multiscatter LUT Group 1"});this.group1=e.createBindGroup({layout:u,entries:[{binding:0,resource:{buffer:i.buffer}}],label:"Multiscatter LUT Group 1"});const c=e.createShaderModule({code:Ie,label:n});this.pipeline=e.createComputePipeline({compute:{module:c,entryPoint:"computeMultiscattering"},layout:e.createPipelineLayout({bindGroupLayouts:[o,u]}),label:"Multiscatter LUT"})}}const Ge=`// Sizeof(Atmosphere) = 8 * 16 = 128
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
// Sizeof(GlobalUBO) = 128 + 32 + 256 + 16 = 432 (as of writing)
// Alignof(GlobalUBO) = 16
struct GlobalUBO
{
	camera: Camera, // offset 128 + 32
	atmosphere: Atmosphere, // offset 0
	light: CelestialLight, // offset 128
	time: Time, // offset 128 + 32 + 256
}


@group(0) @binding(0) var skyview_lut: texture_storage_2d<rgba32float, write>;
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

const TRANSMITTANCE_LUT_WIDTH = 2048u;
const TRANSMITTANCE_LUT_HEIGHT = 1024u;

const MULTISCATTER_LUT_WIDTH = 1024u;
const MULTISCATTER_LUT_HEIGHT = 1024u;

const SKYVIEW_LUT_WIDTH = 1024u;
const SKYVIEW_LUT_HEIGHT = 512u;

const METERS_PER_MM: f32 = 1000000;
const PI: f32 = 3.141592653589793;

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
    mu: f32
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
        textureCoordFromUnitRange(x_mu, TRANSMITTANCE_LUT_WIDTH),
        textureCoordFromUnitRange(x_radius, TRANSMITTANCE_LUT_HEIGHT)
    );
}

// Inverse of transmittanceLUT_RMu_to_UV
// Allocates more texture space to interesting rays near the horizon.
fn transmittanceLUT_UV_to_RMu(
    atmosphere: ptr<function,Atmosphere>,
    uv: vec2<f32>
) -> vec2<f32>
{
    let x_mu : f32 = unitRangeFromTextureCoord(uv.x, TRANSMITTANCE_LUT_WIDTH);
    let x_radius : f32 = unitRangeFromTextureCoord(uv.y, TRANSMITTANCE_LUT_HEIGHT);

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
    mu_light: f32
) -> vec2<f32>
{
    let u_unit: f32 = 0.5 + 0.5 * mu_light;
    let v_unit: f32 = clamp(
        (radius - (*atmosphere).planet_radius_Mm)
            / ((*atmosphere).atmosphere_radius_Mm - (*atmosphere).planet_radius_Mm),
        0.0, 1.0
    );

    return vec2<f32>(
        textureCoordFromUnitRange(u_unit, MULTISCATTER_LUT_WIDTH),
        textureCoordFromUnitRange(v_unit, MULTISCATTER_LUT_HEIGHT)
    );
}

fn multiscatterLUT_UV_to_RMu(
    atmosphere: ptr<function,Atmosphere>,
    uv: vec2<f32>,
) -> vec2<f32>
{
    let u_unit: f32 = unitRangeFromTextureCoord(uv.x, MULTISCATTER_LUT_WIDTH);
    let v_unit: f32 = unitRangeFromTextureCoord(uv.y, MULTISCATTER_LUT_HEIGHT);

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
    let uv: vec2<f32> = multiscatterLUT_RMu_to_UV(atmosphere, radius, mu_light);

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
    let uv: vec2<f32> = transmittanceLUT_RMu_to_UV(atmosphere, radius, mu);

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

//// FLAGS MULTISCATTERING ISOTROPIC_PHASE SCATTERING_NONLINEAR_SAMPLE LIGHT_ILLUMINANCE_IS_ONE HIGH_SAMPLE_COUNT SAMPLE_PATH_TRANSMITTANCE

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

const T_SUBSTEP_NONLINEAR = 0.4;
const T_SUBSTEP_LINEAR = 0.2;

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
    result.multiscattering_transfer = vec3<f32>(0.0);

	if(sample_distance <= 0.0)
	{
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

    const ISOTROPIC_PHASE: f32 = 1.0 / (4.0 * PI);

    const SAMPLE_COUNT = 64.0;

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
			t = mix(t_begin, t_end, T_SUBSTEP_NONLINEAR);
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
`,ae="rgba32float";class Oe{constructor(e,t,r,s,i,n){a(this,"texture");a(this,"view");a(this,"group0");a(this,"group1");a(this,"pipeline");this.texture=e.createTexture({size:t,dimension:"2d",format:ae,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING,label:"Skyview LUT"}),this.view=this.texture.createView({label:"Skyview LUT"});const o=e.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{access:"write-only",format:ae}},{binding:1,visibility:GPUShaderStage.COMPUTE,sampler:{type:i?"filtering":"non-filtering"}},{binding:2,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:i?"float":"unfilterable-float"}},{binding:3,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:i?"float":"unfilterable-float"}}],label:"Skyview LUT"});this.group0=e.createBindGroup({layout:o,entries:[{binding:0,resource:this.view},{binding:1,resource:e.createSampler({magFilter:i?"linear":"nearest",minFilter:i?"linear":"nearest"})},{binding:2,resource:r},{binding:3,resource:s}],label:"Skyview LUT Group 0"});const u=e.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{}}],label:"Skyview LUT Group 1"});this.group1=e.createBindGroup({layout:u,entries:[{binding:0,resource:{buffer:n.buffer}}],label:"Skyview LUT Group 1"});const c=e.createShaderModule({code:Ge});this.pipeline=e.createComputePipeline({compute:{module:c,entryPoint:"computeSkyViewLuminance"},layout:e.createPipelineLayout({bindGroupLayouts:[o,u]}),label:"Skyview LUT"})}}const Fe=`// Textures must have the same dimension
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
// Sizeof(GlobalUBO) = 128 + 32 + 256 + 16 = 432 (as of writing)
// Alignof(GlobalUBO) = 16
struct GlobalUBO
{
	camera: Camera, // offset 128 + 32
	atmosphere: Atmosphere, // offset 0
	light: CelestialLight, // offset 128
	time: Time, // offset 128 + 32 + 256
}


const PI = 3.141592653589793;

struct FourierWavesUBO
{
	fourier_grid_size: u32,
	gravity: f32,
	wave_patch_extent_meters: f32,
	wave_period_seconds: f32,

	wind_speed_meters_per_second: f32,
	wind_fetch_meters: f32,
	wave_swell: f32,
	padding0: f32,

	wave_number_min_max: vec2<f32>,
	padding1: vec2<f32>,
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

fn waveParameters(settings: ptr<uniform, FourierWavesUBO>, texel_coord: vec2<u32>) -> WaveParameters
{
	var result: WaveParameters;

	let wave_coord_offset = i32((*settings).fourier_grid_size / 2u);
	let g = (*settings).gravity;

	result.wave_coord = vec2<i32>(i32(texel_coord.x), i32(texel_coord.y)) - vec2<i32>(wave_coord_offset);

	const QUANTIZED_FREQUENCIES = true;
	if (QUANTIZED_FREQUENCIES)
	{
		let frequency_quantization_step = 2.0 * PI / (*settings).wave_period_seconds;
		let fundamental_frequency = quantizeFrequency(
			sqrt(g * 2.0 * PI / (*settings).wave_patch_extent_meters),
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
		let fundamental_wave_number = 2.0 * PI / (*settings).wave_patch_extent_meters;
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

fn waveSpectrumJONSWAP(settings: ptr<uniform, FourierWavesUBO>, frequency: f32, peak_frequency: f32) -> f32
{
	let wind_speed = (*settings).wind_speed_meters_per_second;
	let wind_fetch = (*settings).wind_fetch_meters;
	let g = (*settings).gravity;

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

fn waveDirectionalSpreading(settings: ptr<uniform, FourierWavesUBO>, frequency: f32, peak_frequency: f32, angle: f32) -> f32
{
	let f_ratio = peak_frequency / frequency;
	let swell = (*settings).wave_swell;

	let s = 16.0 * tanh(f_ratio) * swell * swell;

	let gamma_0 = gammaApprox(s + 1.0);
	let gamma_1 = gammaApprox(2.0 * s + 1.0);

	let q = (pow(2.0, 2.0 * s - 1.0) / PI) * (gamma_0 * gamma_0 / gamma_1);

	return q * pow(abs(cos(angle / 2.0)), 2.0 * s);
}

@group(0) @binding(0) var out_initial_amplitude: texture_storage_2d<rg32float, write>;
@group(0) @binding(1) var in_gaussian_random_pairs: texture_storage_2d<rg32float, read>;

@group(1) @binding(0) var<uniform> u_global: GlobalUBO;
@group(1) @binding(1) var<uniform> u_fourier_waves: FourierWavesUBO;

@compute @workgroup_size(16, 16)
fn computeInitialAmplitude(@builtin(global_invocation_id) global_id: vec3<u32>)
{
    let texel_coord = vec2<u32>(global_id.xy);
    let size = textureDimensions(out_initial_amplitude);
    if texel_coord.x >= size.x || texel_coord.y >= size.y {
        return;
    }

	let gaussian_pair = textureLoad(in_gaussian_random_pairs, texel_coord).xy;
	let wave = waveParameters(&u_fourier_waves, texel_coord);

	if (abs(wave.wave_number) < wave.delta_wave_number
		|| abs(wave.wave_number) < u_fourier_waves.wave_number_min_max.x
		|| abs(wave.wave_number) > u_fourier_waves.wave_number_min_max.y
	)
	{
		let amplitude = vec2<f32>(0.0, 0.0);
		textureStore(out_initial_amplitude, texel_coord, vec4<f32>(amplitude, 0.0, 0.0));
		return;
	}

	let g = u_fourier_waves.gravity;
	let wind_speed = u_fourier_waves.wind_speed_meters_per_second;
	let wind_fetch = u_fourier_waves.wind_fetch_meters;

	let peak_frequency = 22.0 * pow(g * g / (wind_speed * wind_fetch), 1.0 / 3.0);

	let spectrum = waveSpectrumJONSWAP(&u_fourier_waves, wave.frequency, peak_frequency)
		* waveDirectionalSpreading(&u_fourier_waves, wave.frequency, peak_frequency, wave.wind_angle);

	let magnitude = sqrt(
		2.0
		* spectrum
		* (wave.d_frequency_d_wave_number / wave.wave_number)
		* wave.delta_wave_number * wave.delta_wave_number
	);

	let amplitude = inverseSqrt(2.0)
		* gaussian_pair
		* magnitude;

	textureStore(out_initial_amplitude, texel_coord, vec4<f32>(amplitude, 0.0, 0.0));
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
@group(0) @binding(0) var out_packed_Dx_plus_iDy_Dz_iDxdz_amplitude: texture_storage_2d<rgba32float, write>;
@group(0) @binding(1) var out_packed_Dydx_plus_iDydz_Dxdx_plus_iDzdz_amplitude: texture_storage_2d<rgba32float, write>;
@group(0) @binding(2) var in_initial_amplitude: texture_storage_2d<rg32float, read>;

/* Commented to avoid re-declaration
@group(1) @binding(0) var<uniform> u_global: GlobalUBO;
@group(1) @binding(1) var<uniform> u_fourier_waves: FourierWavesUBO;
*/
fn complexMult(a: vec2<f32>, b: vec2<f32>) -> vec2<f32>
{
	return vec2<f32>(a.x*b.x - a.y*b.y, a.x*b.y + a.y*b.x);
}

@compute @workgroup_size(16, 16)
fn computeRealizedAmplitude(@builtin(global_invocation_id) global_id: vec3<u32>)
{
	let texel_coord = vec2<u32>(global_id.xy);
    let size = textureDimensions(out_packed_Dx_plus_iDy_Dz_iDxdz_amplitude);
    if texel_coord.x >= size.x || texel_coord.y >= size.y {
        return;
    }

	let wave = waveParameters(&u_fourier_waves, texel_coord);

	if (abs(wave.wave_number) < wave.delta_wave_number
		|| abs(wave.wave_number) < u_fourier_waves.wave_number_min_max.x
		|| abs(wave.wave_number) > u_fourier_waves.wave_number_min_max.y)
	{
		textureStore(
			out_packed_Dx_plus_iDy_Dz_iDxdz_amplitude,
			texel_coord,
			vec4<f32>(0.0)
		);
		textureStore(
			out_packed_Dydx_plus_iDydz_Dxdx_plus_iDzdz_amplitude,
			texel_coord,
			vec4<f32>(0.0)
		);
		return;
	}

	let k_amplitude = textureLoad(in_initial_amplitude, texel_coord).xy;

	let k_minus_coord = vec2<u32>(
		(u_fourier_waves.fourier_grid_size - texel_coord.x) % u_fourier_waves.fourier_grid_size,
		(u_fourier_waves.fourier_grid_size - texel_coord.y) % u_fourier_waves.fourier_grid_size
	);
	let k_minus_amplitude = textureLoad(in_initial_amplitude, k_minus_coord).xy;
	let k_minus_amplitude_conjugate = vec2<f32>(k_minus_amplitude.x, -k_minus_amplitude.y);

	let phase = wave.frequency * u_global.time.time_seconds;
	let exponential = vec2<f32>(cos(phase), sin(phase));
	let exponential_conjugate = vec2<f32>(exponential.x, -exponential.y);

	let Dy_amplitude = complexMult(exponential, k_amplitude) + complexMult(exponential_conjugate, k_minus_amplitude_conjugate);

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
		out_packed_Dx_plus_iDy_Dz_iDxdz_amplitude,
		texel_coord,
		vec4<f32>(Dx_amplitude + iDy_amplitude, Dz_amplitude + iDxdz_amplitude)
	);
	textureStore(
		out_packed_Dydx_plus_iDydz_Dxdx_plus_iDzdz_amplitude,
		texel_coord,
		vec4<f32>(Dydx_amplitude + iDydz_amplitude, Dxdx_amplitude + iDzdz_amplitude)
	);
}

@group(0) @binding(0) var out_turbulence_jacobian_array: texture_storage_2d_array<rgba16float, write>;
@group(0) @binding(1) var in_turbulence_jacobian_array: texture_2d_array<f32>;
@group(0) @binding(2) var in_Dx_Dy_Dz_Dxdz_spatial_array: texture_2d_array<f32>;
@group(0) @binding(3) var in_Dydx_Dydz_Dxdx_Dzdz_spatial_array: texture_2d_array<f32>;
@group(0) @binding(4) var<uniform> u_global_0: GlobalUBO;

@compute @workgroup_size(16, 16)
fn accumulateTurbulence(@builtin(global_invocation_id) global_id: vec3<u32>)
{
	let texel_coord = vec2<u32>(global_id.xy);
    let size = textureDimensions(out_turbulence_jacobian_array);
    if texel_coord.x >= size.x || texel_coord.y >= size.y {
        return;
    }

	// TODO: support for mipmapping and lambda scaling factor present in wave_surface_displacement.wgsl

	const mip = 0u;

	for(var array_layer = 0u; array_layer <= textureNumLayers(out_turbulence_jacobian_array); array_layer++)
	{
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
			turbulence_previous + u_global_0.time.delta_time_seconds * 0.5 / max(jacobian, 0.5),
			jacobian
		);

		textureStore(out_turbulence_jacobian_array, texel_coord, array_layer,
			vec4<f32>(turbulence, jacobian, 0.0, 0.0)
		);
	}
}
`,Ne=`const PI = 3.141592653589793;

/*
* Decimation-in-time Cooley-Tukey Inverse Discrete Fast Fourier Transform
* Performed on a Square 2D Grid
*/

struct DFFTParameters
{
	log_2_size: u32,
	size: u32,
	b_inverse: f32,
}

struct TwoPointDFT
{
	twiddle: vec2<f32>,

	// The un-twiddled index
	lower_index: u32,

	// The twiddled index
	upper_index: u32,
}

/*
* out_intermediate_dfts_log2n_by_n:
*
* 	2d array of dimension log2(N) by N, where N is the size of the input grid
* 	Each row represents a step in the 1D DFFT
* 	step 0 is the first step performed, and represents the initial N/2 2-point DFTs
* 	step log2(N) - 1 is the last step performed, and represents the final N-point DFT
*
* 	Each element is the source indices for a 2-point DFT plus twiddle factor
*/

@group(0) @binding(0) var<uniform> u_parameters: DFFTParameters;
@group(0) @binding(1) var<storage, read_write> out_intermediate_dfts_log2n_by_n: array<TwoPointDFT>;

fn twoPointDFTIndex(step: u32, major_index: u32) -> u32
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

		var lower_twiddle: TwoPointDFT;
		lower_twiddle.twiddle = complexExp(-2.0 * PI * f32(n) / f32(dft_size));
		lower_twiddle.lower_index = dft + n * 2u * dft_count;
		lower_twiddle.upper_index = lower_twiddle.lower_index + dft_count;

		var upper_twiddle = lower_twiddle;
		upper_twiddle.twiddle *= -1.0;

		let instruction_index = n * dft_count + dft;

		out_intermediate_dfts_log2n_by_n[twoPointDFTIndex(step, instruction_index)] = lower_twiddle;
		out_intermediate_dfts_log2n_by_n[twoPointDFTIndex(step, instruction_index + (grid_size / 2u))] = upper_twiddle;
	}
}

// Avoid redeclare
// @group(0) @binding(0) var<uniform> u_parameters: DFFTParameters;
@group(0) @binding(1) var<storage, read> intermediate_dfts_log2n_by_n: array<TwoPointDFT>;
@group(0) @binding(2) var<storage, read_write> buffer_0: array<vec4<f32>>;
@group(0) @binding(3) var<storage, read_write> buffer_1: array<vec4<f32>>;
@group(0) @binding(4) var<uniform> step_counter: u32;
@group(0) @binding(5) var out_texture: texture_storage_2d<rgba16float, write>;

fn complexMult(a: vec2<f32>, b: vec2<f32>) -> vec2<f32>
{
	return vec2<f32>(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
}

fn complexMult2(a: vec4<f32>, b: vec4<f32>) -> vec4<f32>
{
	return vec4<f32>(complexMult(a.xy, b.xy), complexMult(a.zw, b.zw));
}

fn bufferIndex(x: u32, y: u32) -> u32
{
	return x + y * u_parameters.size;
}

fn loadTwoPointDFT(major_index: u32) -> TwoPointDFT
{
	var result = intermediate_dfts_log2n_by_n[twoPointDFTIndex(step_counter % u_parameters.log_2_size, major_index)];
	result.twiddle.y *= (1.0 - 2.0 * u_parameters.b_inverse);

	return result;
}

/*
* buffer_0 needs to have the initial data
* buffer_1's state does not matter, it will be overwritten
* The final output will be in buffer_0 (since vertical + horizontal guarantees an even amount of ping-pongs)
* Make sure step_counter is updated between steps, incrementing by one until 2 * log2(N)
*/
@compute @workgroup_size(16, 16)
fn performDFFTStep(@builtin(global_invocation_id) global_id: vec3<u32>)
{
	// We need to bounce between buffers since each cell in each step relies on multiple cells from the previous step
	let ping_pong = (step_counter % 2u) == 1u;

	// step_counter ranges from [ 0, 2 * log2(N) ), with the second half representing the vertical pass
	// We do this to avoid needing to pass duplicate data with an extra vertical flag, or needing to split up the function into two kernels

	if (step_counter < u_parameters.log_2_size)
	{
		// Horizontal Pass
		let two_point_dft = loadTwoPointDFT(global_id.x);
		if(ping_pong)
		{
			let lower_input = buffer_1[bufferIndex(two_point_dft.lower_index, global_id.y)];
			let upper_input = buffer_1[bufferIndex(two_point_dft.upper_index, global_id.y)];

			let result = lower_input + complexMult2(vec4<f32>(two_point_dft.twiddle, two_point_dft.twiddle), upper_input);

			buffer_0[bufferIndex(global_id.x, global_id.y)] = result;
		}
		else
		{
			let lower_input = buffer_0[bufferIndex(two_point_dft.lower_index, global_id.y)];
			let upper_input = buffer_0[bufferIndex(two_point_dft.upper_index, global_id.y)];

			let result = lower_input + complexMult2(vec4<f32>(two_point_dft.twiddle, two_point_dft.twiddle), upper_input);

			buffer_1[bufferIndex(global_id.x, global_id.y)] = result;
		}
	}
	else
	{
		// Vertical Pass
		let two_point_dft = loadTwoPointDFT(global_id.y);
		if(ping_pong)
		{
			let lower_input = buffer_1[bufferIndex(global_id.x, two_point_dft.lower_index)];
			let upper_input = buffer_1[bufferIndex(global_id.x, two_point_dft.upper_index)];

			let result = lower_input + complexMult2(vec4<f32>(two_point_dft.twiddle, two_point_dft.twiddle), upper_input);

			buffer_0[bufferIndex(global_id.x, global_id.y)] = result;
		}
		else
		{
			let lower_input = buffer_0[bufferIndex(global_id.x, two_point_dft.lower_index)];
			let upper_input = buffer_0[bufferIndex(global_id.x, two_point_dft.upper_index)];

			let result = lower_input + complexMult2(vec4<f32>(two_point_dft.twiddle, two_point_dft.twiddle), upper_input);

			buffer_1[bufferIndex(global_id.x, global_id.y)] = result;
		}
	}
}

/*
 * Flips the sign of even numbered cells in the fourier grid. A cell at (x,y) is even when (x + y) is even.
 * step_counter should be left as it was for the last step performed.
 *
 * Why you might do this:
 * When an DFT's input data has its energy clustered around the middle (grid_size / 2), the result will have alternating sign flips from the desired result.
 * This is since a frequency of (grid_size)/2 will show up as a wave with wavelength 2.
 *
 * This sort of clustering occurs with how we process ocean waves, since our wave "origin" with the longest wavelength, highest frequency/energy waves is at (grid_size/2, grid_size/2)
 */
@compute @workgroup_size(16, 16)
fn performSwapEvenSignsAndCopyToHalfPrecisionOutput(@builtin(global_invocation_id) global_id: vec3<u32>)
{
	let ping_pong = (step_counter % 2u) == 1u;

	let factor = 1.0 - 2.0 * f32((global_id.x + global_id.y) % 2);

	if(ping_pong)
	{
		textureStore(out_texture, global_id.xy, buffer_0[bufferIndex(global_id.x, global_id.y)] * factor);
	}
	else
	{
		textureStore(out_texture, global_id.xy, buffer_1[bufferIndex(global_id.x, global_id.y)] * factor);
	}
}

@group(0) @binding(0) var<storage, read_write> out_step_counter: u32;

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
`;class Be extends E{constructor(t){super(t,3,"DFFT Parameters UBO");a(this,"data",{log_2_size:1,size:2,b_inverse:!1})}packed(){const t=new ArrayBuffer(this.buffer.size),r=new DataView(t);return r.setUint32(0,this.data.log_2_size,!0),r.setUint32(4,this.data.size,!0),r.setFloat32(8,this.data.b_inverse?1:0,!0),t}}const O="rgba16float";class We{constructor(e,t){a(this,"parametersUBO");a(this,"intermediateDFTs");a(this,"complexBuffer0");a(this,"complexBuffer1");a(this,"stepCounterBuffer");a(this,"outputTexture");a(this,"intermediateDFTsBindGroup");a(this,"intermediateDFTsKernel");a(this,"performBindGroup");a(this,"performKernel");a(this,"performSwapEvenSignsAndCopyToHalfPrecisionOutputKernel");a(this,"stepCounterBindGroup");a(this,"incrementStepCounterKernel");a(this,"resetStepCounterKernel");a(this,"debugBuffersCopied",!1);if(t<5)throw new RangeError("gridSizeExponent must be greater than 4.");const r=Math.pow(2,t);this.parametersUBO=new Be(e),this.parametersUBO.data.log_2_size=t,this.parametersUBO.data.size=r,this.parametersUBO.data.b_inverse=!1,this.parametersUBO.writeToGPU(e.queue);const s=16;this.intermediateDFTs=e.createBuffer({label:"DFFT Precompute Stage Steps",size:t*r*s,usage:GPUBufferUsage.STORAGE});const i=e.createShaderModule({label:"DFFT Precompute Stage",code:Ne}),n=e.createBindGroupLayout({label:"DFFT Precompute Stage Group 0",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]});this.intermediateDFTsBindGroup=e.createBindGroup({label:"DFFT Precompute Stage Group 0",layout:n,entries:[{binding:0,resource:{buffer:this.parametersUBO.buffer}},{binding:1,resource:{buffer:this.intermediateDFTs}}]});const o=e.createPipelineLayout({label:"DFFT Precompute Steps Kernel",bindGroupLayouts:[n]});this.intermediateDFTsKernel=e.createComputePipeline({label:"DFFT Precompute Stage",compute:{module:i,entryPoint:"precomputeDFFTInstructions"},layout:o});const u=e.createBindGroupLayout({label:"DFFT Perform Group 0",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:5,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:O,access:"write-only"}}]}),c=16;this.complexBuffer0=e.createBuffer({label:"DFFT Buffer 0",size:r*r*c,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),this.complexBuffer1=e.createBuffer({label:"DFFT Buffer 1",size:this.complexBuffer0.size,usage:this.complexBuffer0.usage}),this.stepCounterBuffer=e.createBuffer({label:"DFFT Step Counter",size:4,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE|GPUBufferUsage.UNIFORM});const _=new Uint32Array(1);_[0]=0,e.queue.writeBuffer(this.stepCounterBuffer,0,_),this.outputTexture=e.createTexture({label:"DFFT Output Texture",format:O,size:{width:r,height:r,depthOrArrayLayers:1},usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.COPY_SRC}),this.performBindGroup=e.createBindGroup({label:"DFFT Perform Group 0",layout:u,entries:[{binding:0,resource:{buffer:this.parametersUBO.buffer}},{binding:1,resource:{buffer:this.intermediateDFTs}},{binding:2,resource:{buffer:this.complexBuffer0}},{binding:3,resource:{buffer:this.complexBuffer1}},{binding:4,resource:{buffer:this.stepCounterBuffer}},{binding:5,resource:this.outputTexture.createView()}]});const d=e.createPipelineLayout({label:"DFFT Perform",bindGroupLayouts:[u]});this.performKernel=e.createComputePipeline({label:"DFFT Perform DFFT Step",compute:{module:i,entryPoint:"performDFFTStep"},layout:d}),this.performSwapEvenSignsAndCopyToHalfPrecisionOutputKernel=e.createComputePipeline({label:"DFFT Perform Swap Even Signs",compute:{module:i,entryPoint:"performSwapEvenSignsAndCopyToHalfPrecisionOutput"},layout:d});const p=e.createBindGroupLayout({label:"DFFT Step Counter Bind Group 0",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]});this.stepCounterBindGroup=e.createBindGroup({label:"DFFT Step Counter Bind Group 0",layout:p,entries:[{binding:0,resource:{buffer:this.stepCounterBuffer}}]});const h=e.createPipelineLayout({label:"DFFT Step Counter",bindGroupLayouts:[p]});this.incrementStepCounterKernel=e.createComputePipeline({label:"DFFT Increment Step Counter Kernel",layout:h,compute:{module:i,entryPoint:"incrementStepCounter"}}),this.resetStepCounterKernel=e.createComputePipeline({label:"DFFT Reset Step Counter Kernel",layout:h,compute:{module:i,entryPoint:"resetStepCounter"}}),this.parametersUBO.data.b_inverse=!0,this.parametersUBO.writeToGPU(e.queue);const g=e.createCommandEncoder({label:"DFFT Precompute"}),f=g.beginComputePass({label:"DFFT Precompute Steps"});f.setPipeline(this.intermediateDFTsKernel),f.setBindGroup(0,this.intermediateDFTsBindGroup),f.dispatchWorkgroups(r/2/2,1),f.end(),e.queue.submit([g.finish()])}recordPerformOnBuffer0(e,t){const r=this.parametersUBO.data.size,s=this.parametersUBO.data.log_2_size,i=e.beginComputePass({label:"DFFT Perform",timestampWrites:t});for(let n=0;n<2*s;n++)n===0?(i.setPipeline(this.resetStepCounterKernel),i.setBindGroup(0,this.stepCounterBindGroup),i.dispatchWorkgroups(1)):(i.setPipeline(this.incrementStepCounterKernel),i.setBindGroup(0,this.stepCounterBindGroup),i.dispatchWorkgroups(1)),i.setPipeline(this.performKernel),i.setBindGroup(0,this.performBindGroup),i.dispatchWorkgroups(r/16,r/16);i.setPipeline(this.performSwapEvenSignsAndCopyToHalfPrecisionOutputKernel),i.setBindGroup(0,this.performBindGroup),i.dispatchWorkgroups(r/16,r/16),i.end()}recordPerform(e,t,r,s,i,n,o){const u="rgba32float";if(r.format!=u)throw RangeError(`sourceTexture (format ${r.format}) must be ${u}`);if(s.format!=O)throw RangeError(`destinationArray (format ${r.format}) must be ${u}`);r.depthOrArrayLayers!==1&&console.warn(`Source Texture '${r.label}' DepthOrArrayLayers > 1 - will only use the first layer.`),this.parametersUBO.data.b_inverse=n,this.parametersUBO.writeToGPU(e.queue);const c=this.parametersUBO.data.size;t.copyTextureToBuffer({texture:r},{buffer:this.complexBuffer0,bytesPerRow:this.complexBuffer0.size/c},{width:r.width,height:r.height,depthOrArrayLayers:1}),this.recordPerformOnBuffer0(t,o),t.copyTextureToTexture({texture:this.outputTexture},{texture:s,origin:{x:0,y:0,z:i}},{width:s.width,height:s.height,depthOrArrayLayers:1})}}const ke=`@group(0) @binding(0) var out_next_mip_level: texture_storage_2d_array<rgba16float, write>;
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
`,F="rgba16float";class qe{constructor(e){a(this,"fillMipMapTextureInOutLayout");a(this,"fillMipMapKernel");a(this,"fillMipMapSmallerKernel");this.fillMipMapTextureInOutLayout=e.createBindGroupLayout({label:"MipMap Generation fillMipMap Texture In-Out",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:F,viewDimension:"2d-array"}},{binding:1,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:"unfilterable-float",viewDimension:"2d-array"}}]});const t=e.createShaderModule({label:"sky-sea/mipmap.wgsl",code:ke}),r=e.createPipelineLayout({label:"MipMap Generation fillMipMap Kernel",bindGroupLayouts:[this.fillMipMapTextureInOutLayout]});this.fillMipMapKernel=e.createComputePipeline({label:"MipMap Generation fillMipMap Kernel",layout:r,compute:{module:t,entryPoint:"fillMipMap"}}),this.fillMipMapSmallerKernel=e.createComputePipeline({label:"MipMap Generation fillMipMapSmaller Kernel",layout:r,compute:{module:t,entryPoint:"fillMipMapSmaller"}})}createBindGroups(e,t){if(t.format!=F)throw new RangeError(`Invalid source texture (label ${t.label}) for MipMap generation`,{cause:`Source format is ${t.format} when expected ${F}`});if(t.dimension!="2d")throw new RangeError(`Invalid source texture (label ${t.label}) for MipMap generation`,{cause:"Source texture is not 2d"});if(!(t.usage&GPUTextureUsage.COPY_SRC))throw new RangeError(`Invalid source texture (label ${t.label}) for MipMap generation`,{cause:"Source usage is missing required flag COPY_SRC"});if(t.width!=t.height||!Number.isInteger(Math.log2(t.width)))throw new RangeError(`Invalid source texture (label ${t.label}) for MipMap generation`,{cause:`Source dimensions of (${t.width},${t.height}) are invalid, texture must be square and power-of-2.`});const r=Math.log2(t.width);return{level0Size:{width:t.width,height:t.height},bindGroupsByMipLevel:[...new Array(Math.min(r,t.mipLevelCount)-1).keys()].map((s,i)=>{const n=i+1,o=i;return e.createBindGroup({label:`MipMap Generation for '${t.label}' IO Bind Group '${o} => ${n}'`,layout:this.fillMipMapTextureInOutLayout,entries:[{binding:0,resource:t.createView({dimension:"2d-array",baseMipLevel:n,mipLevelCount:1})},{binding:1,resource:t.createView({dimension:"2d-array",baseMipLevel:o,mipLevelCount:1})}]})}),arrayLevelCount:t.depthOrArrayLayers}}updateMipMaps(e,t){t.bindGroupsByMipLevel.forEach((r,s)=>{e.setBindGroup(0,r);const i=1<<s,n=t.level0Size.width/i,o=t.level0Size.height/i;n>=16&&o>=16?(e.setPipeline(this.fillMipMapKernel),e.dispatchWorkgroups(n/16,o/16,t.arrayLevelCount)):(e.setPipeline(this.fillMipMapSmallerKernel),e.dispatchWorkgroups(n,o,t.arrayLevelCount))})}}const le=512,N=9,Ve=9.8,He=100,re="rg32float",B="rg32float",je="rgba16float",ie="rgba16float",W="rgba32float";class Qe extends E{constructor(t){super(t,12,"Fourier Waves UBO");a(this,"data",{fourier_grid_size:le,gravity:Ve,wave_patch_extent_meters:50,wave_period_seconds:He,wind_speed_meters_per_second:10,wind_fetch_meters:10*1e3,wave_swell:.3,padding0:0,wave_number_min_max:b.create(0,1e3),padding1:b.create(0,0)})}packed(){const t=new ArrayBuffer(this.buffer.size),r=new DataView(t),s=new Float32Array(t);return r.setUint32(0,this.data.fourier_grid_size,!0),r.setFloat32(4,this.data.gravity,!0),r.setFloat32(8,this.data.wave_patch_extent_meters,!0),r.setFloat32(12,this.data.wave_period_seconds,!0),r.setFloat32(16,this.data.wind_speed_meters_per_second,!0),r.setFloat32(20,this.data.wind_fetch_meters,!0),r.setFloat32(24,this.data.wave_swell,!0),r.setFloat32(28,this.data.padding0,!0),s.set(this.data.wave_number_min_max,8),s.set(this.data.padding1,10),t}}function Ye(){const l=Math.random(),e=Math.random(),t=Math.sqrt(-2*Math.log(l)),r=2*Math.PI*e,s=t*Math.cos(r),i=t*Math.sin(r);return[s,i]}class Ke{constructor(e,t,r){a(this,"Dx_Dy_Dz_Dxdz_Spatial");a(this,"Dydx_Dydz_Dxdx_Dzdz_Spatial");a(this,"turbulenceJacobian");a(this,"Dx_Dy_Dz_Dxdz_SpatialAllMips");a(this,"Dydx_Dydz_Dxdx_Dzdz_SpatialAllMips");a(this,"turbulenceJacobianOneMip");e.mipLevelCount!=t.mipLevelCount&&console.warn(`FFT Wave Displacement maps do not have identical mip levels. ${e.mipLevelCount} vs ${t.mipLevelCount}`),this.Dx_Dy_Dz_Dxdz_Spatial=e,this.Dydx_Dydz_Dxdx_Dzdz_Spatial=t,this.turbulenceJacobian=r,this.Dx_Dy_Dz_Dxdz_SpatialAllMips=this.Dx_Dy_Dz_Dxdz_Spatial.createView({label:`FFT Wave DisplacementMaps for ${this.Dx_Dy_Dz_Dxdz_Spatial.label}`}),this.Dydx_Dydz_Dxdx_Dzdz_SpatialAllMips=this.Dydx_Dydz_Dxdx_Dzdz_Spatial.createView({label:`FFT Wave DisplacementMaps for ${this.Dydx_Dydz_Dxdx_Dzdz_Spatial.label}`}),this.turbulenceJacobianOneMip=this.turbulenceJacobian.map((s,i)=>s.createView({label:`FFT Wave DisplacementMaps for ${this.turbulenceJacobian[i].label} index ${i}`}))}get mipLevelCount(){return this.Dx_Dy_Dz_Dxdz_Spatial.mipLevelCount}}class Xe{constructor(e,t){a(this,"gridSize");a(this,"initialAmplitudeKernel");a(this,"realizedAmplitudeKernel");a(this,"accumulateTurbulenceKernel");a(this,"dfftResources");a(this,"mipMapGenerator");a(this,"cascades");a(this,"Dx_Dy_Dz_Dxdz_SpatialArray");a(this,"Dydx_Dydz_Dxdx_Dzdz_SpatialArray");a(this,"turbulenceJacobianArrays");a(this,"turbulenceJacobianIndex",0);a(this,"Dx_Dy_Dz_Dxdz_SpatialArray_MipMapBindings");a(this,"Dydx_Dydz_Dxdx_Dzdz_SpatialArray_MipMapBindings");a(this,"waveSettings");this.gridSize=le;const r=e.createBindGroupLayout({label:"FFT Wave Initial Amplitude h_0(k) Group 0",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:B,access:"write-only"}},{binding:1,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:re,access:"read-only"}}]}),s=e.createBindGroupLayout({label:"FFT Wave Initial Amplitude h_0(k) Group 1",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});this.dfftResources=new We(e,N);const i=e.createShaderModule({label:"FFT Wave",code:Fe});this.initialAmplitudeKernel=e.createComputePipeline({label:"FFT Wave Initial Amplitude h_0(k)",layout:e.createPipelineLayout({label:"FFT Wave Initial Amplitude h_0(k)",bindGroupLayouts:[r,s]}),compute:{module:i,entryPoint:"computeInitialAmplitude"}}),this.mipMapGenerator=new qe(e);const n=e.createBindGroupLayout({label:"FFT Wave Realized Fourier Amplitude h(k,t) Group 0",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:W,access:"write-only"}},{binding:1,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:W,access:"write-only"}},{binding:2,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:B,access:"read-only"}}]}),o=e.createBindGroupLayout({label:"FFT Wave Realized Fourier Amplitude h(k,t) Group 1",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});this.realizedAmplitudeKernel=e.createComputePipeline({label:"FFT Wave Realized Fourier Amplitude h(k,t)",layout:e.createPipelineLayout({label:"FFT Wave Realized Fourier Amplitude h(k,t)",bindGroupLayouts:[n,o]}),compute:{module:i,entryPoint:"computeRealizedAmplitude"}});const u=e.createBindGroupLayout({label:"FFT Wave Accumulate Turbulence Group 0",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{viewDimension:"2d-array",format:ie}},{binding:1,visibility:GPUShaderStage.COMPUTE,texture:{viewDimension:"2d-array",sampleType:"unfilterable-float"}},{binding:2,visibility:GPUShaderStage.COMPUTE,texture:{viewDimension:"2d-array",sampleType:"unfilterable-float"}},{binding:3,visibility:GPUShaderStage.COMPUTE,texture:{viewDimension:"2d-array",sampleType:"unfilterable-float"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});this.accumulateTurbulenceKernel=e.createComputePipeline({label:"FFT Wave Accumulate Turbulence",layout:e.createPipelineLayout({label:"FFT Wave Accumulate Turbulence",bindGroupLayouts:[u]}),compute:{module:i,entryPoint:"accumulateTurbulence"}});function c(y){const v=2*y;return 2*Math.PI/v}const _=[200,50,10],d=[.001,..._.map(y=>c(y/this.gridSize)),1e3],p=_.map((y,v)=>({patchExtentMeters:y,waveNumberMinMax:[d[v],d[v+1]]})),h=p.length;this.Dx_Dy_Dz_Dxdz_SpatialArray=e.createTexture({label:"FFT Wave Final Displacement Array",format:je,dimension:"2d",size:{width:this.gridSize,height:this.gridSize,depthOrArrayLayers:h},mipLevelCount:N,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC|GPUTextureUsage.COPY_DST}),this.Dydx_Dydz_Dxdx_Dzdz_SpatialArray=e.createTexture({label:"FFT Wave Final Derivatives Array",format:this.Dx_Dy_Dz_Dxdz_SpatialArray.format,size:{width:this.Dx_Dy_Dz_Dxdz_SpatialArray.width,height:this.Dx_Dy_Dz_Dxdz_SpatialArray.height,depthOrArrayLayers:this.Dx_Dy_Dz_Dxdz_SpatialArray.depthOrArrayLayers},mipLevelCount:this.Dx_Dy_Dz_Dxdz_SpatialArray.mipLevelCount,usage:this.Dx_Dy_Dz_Dxdz_SpatialArray.usage}),this.cascades=p.map(y=>this.createCascade(e,t,y.patchExtentMeters,y.waveNumberMinMax));const f=new Uint16Array(this.Dx_Dy_Dz_Dxdz_SpatialArray.width*this.Dx_Dy_Dz_Dxdz_SpatialArray.height*this.Dx_Dy_Dz_Dxdz_SpatialArray.depthOrArrayLayers*4).fill(15360);this.turbulenceJacobianArrays=[0,0].map((y,v)=>e.createTexture({label:`FFT Wave (Turbulence,Jacobian) Array ${v}`,format:ie,size:{width:this.Dx_Dy_Dz_Dxdz_SpatialArray.width,height:this.Dx_Dy_Dz_Dxdz_SpatialArray.height,depthOrArrayLayers:this.Dx_Dy_Dz_Dxdz_SpatialArray.depthOrArrayLayers},mipLevelCount:N,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC|GPUTextureUsage.COPY_DST})).reduce((y,v,D,S)=>{e.queue.writeTexture({texture:v},f,{bytesPerRow:this.Dx_Dy_Dz_Dxdz_SpatialArray.width*8,rowsPerImage:this.Dx_Dy_Dz_Dxdz_SpatialArray.height},{width:this.Dx_Dy_Dz_Dxdz_SpatialArray.width,height:this.Dx_Dy_Dz_Dxdz_SpatialArray.height,depthOrArrayLayers:this.Dx_Dy_Dz_Dxdz_SpatialArray.depthOrArrayLayers});const w=e.createBindGroup({layout:this.accumulateTurbulenceKernel.getBindGroupLayout(0),entries:[{binding:0,resource:v.createView({mipLevelCount:1})},{binding:1,resource:S[(D+1)%S.length].createView({})},{binding:2,resource:this.Dx_Dy_Dz_Dxdz_SpatialArray.createView({})},{binding:3,resource:this.Dydx_Dydz_Dxdx_Dzdz_SpatialArray.createView({})},{binding:4,resource:{buffer:t.buffer}}]});return y.concat({textureArray:v,bindGroup:w,mipMapBindings:this.mipMapGenerator.createBindGroups(e,v)})},[]),this.Dx_Dy_Dz_Dxdz_SpatialArray_MipMapBindings=this.mipMapGenerator.createBindGroups(e,this.Dx_Dy_Dz_Dxdz_SpatialArray),this.Dydx_Dydz_Dxdx_Dzdz_SpatialArray_MipMapBindings=this.mipMapGenerator.createBindGroups(e,this.Dydx_Dydz_Dxdx_Dzdz_SpatialArray),this.waveSettings={gravity:0,waveSwell:0,windFetchMeters:0,windSpeedMetersPerSeconds:0}}get turbulenceMapIndex(){return this.turbulenceJacobianIndex}createCascade(e,t,r,s){const i={width:this.gridSize,height:this.gridSize},n=e.createTexture({label:"FFT Wave Gaussian Noise",format:re,size:i,usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING}),o=2,c=8*this.gridSize,_=new Float32Array(this.gridSize*this.gridSize*o);for(let S=0;S<_.length;S++)_[S]=Ye()[0];e.queue.writeTexture({texture:n},_,{bytesPerRow:c},{width:n.width,height:n.height});const d=new Qe(e);d.data.wave_patch_extent_meters=r,b.set(s[0],s[1],d.data.wave_number_min_max),d.writeToGPU(e.queue);const p=e.createTexture({label:"FFT Wave Fourier Amplitude h_0(k)",format:B,size:i,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING}),h=e.createBindGroup({label:"FFT Wave Initial Amplitude h_0(k) Group 0",layout:this.initialAmplitudeKernel.getBindGroupLayout(0),entries:[{binding:0,resource:p.createView()},{binding:1,resource:n.createView()}]}),g=e.createBindGroup({label:"FFT Wave Initial Amplitude h_0(k) Group 1",layout:this.initialAmplitudeKernel.getBindGroupLayout(1),entries:[{binding:0,resource:{buffer:t.buffer}},{binding:1,resource:{buffer:d.buffer}}]}),f=e.createTexture({label:"FFT Wave Packed (Dx + iDy, Dz + iDxdz) Amplitude",format:W,size:i,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC}),y=e.createTexture({label:"FFT Wave Packed (Dydx + iDydz, Dxdx + iDzdz) Amplitude",format:f.format,size:i,usage:f.usage}),v=e.createBindGroup({label:"FFT Wave Realized Fourier Amplitude h(k,t) Group 0",layout:this.realizedAmplitudeKernel.getBindGroupLayout(0),entries:[{binding:0,resource:f.createView()},{binding:1,resource:y.createView()},{binding:2,resource:p.createView()}]}),D=e.createBindGroup({label:"FFT Wave Realized Fourier Amplitude h(k,t) Group 1",layout:this.realizedAmplitudeKernel.getBindGroupLayout(1),entries:[{binding:0,resource:{buffer:t.buffer}},{binding:1,resource:{buffer:d.buffer}}]});return{gaussianNoise:n,initialAmplitude:p,waveSettings:d,initialAmplitudeGroup0:h,initialAmplitudeGroup1:g,packed_Dx_plus_iDy_Dz_iDxdz_Amplitude:f,packed_Dydx_plus_iDydz_Dxdx_plus_iDzdz_Amplitude:y,realizedAmplitudeGroup0:v,realizedAmplitudeGroup1:D}}views(){const e=this.cascades[0];return{gaussianNoise:new T(e.gaussianNoise),initialAmplitude:new T(e.initialAmplitude),packed_Dx_plus_iDy_Dz_iDxdz_Amplitude:new T(e.packed_Dx_plus_iDy_Dz_iDxdz_Amplitude),packed_Dydx_plus_iDydz_Dxdx_plus_iDzdz_Amplitude:new T(e.packed_Dydx_plus_iDydz_Dxdx_plus_iDzdz_Amplitude),turbulenceJacobian:new T(this.turbulenceJacobianArrays[0].textureArray),Dx_Dy_Dz_Dxdz_Spatial:new T(this.Dx_Dy_Dz_Dxdz_SpatialArray),Dydx_Dydz_Dxdx_Dzdz_Spatial:new T(this.Dydx_Dydz_Dxdx_Dzdz_SpatialArray)}}displacementMaps(){return new Ke(this.Dx_Dy_Dz_Dxdz_SpatialArray,this.Dydx_Dydz_Dxdx_Dzdz_SpatialArray,this.turbulenceJacobianArrays.map(e=>e.textureArray))}record(e,t,r,s){if(r.gravity!=this.waveSettings.gravity||r.waveSwell!=this.waveSettings.waveSwell||r.windSpeedMetersPerSeconds!=this.waveSettings.windSpeedMetersPerSeconds||r.windFetchMeters!=this.waveSettings.windFetchMeters){this.waveSettings=structuredClone(r);const c=t.beginComputePass({label:"FFT Wave Initial Amplitude"});this.cascades.forEach(_=>{_.waveSettings.data.wave_swell=this.waveSettings.waveSwell,_.waveSettings.data.wind_fetch_meters=this.waveSettings.windFetchMeters,_.waveSettings.data.wind_speed_meters_per_second=this.waveSettings.windSpeedMetersPerSeconds,_.waveSettings.data.gravity=this.waveSettings.gravity,_.waveSettings.writeToGPU(e.queue),c.setPipeline(this.initialAmplitudeKernel),c.setBindGroup(0,_.initialAmplitudeGroup0),c.setBindGroup(1,_.initialAmplitudeGroup1);const d={width:_.initialAmplitude.width,height:_.initialAmplitude.height,depth:_.initialAmplitude.depthOrArrayLayers};c.dispatchWorkgroups(d.width/16,d.height/16,d.depth/1)}),c.end()}const n=t.beginComputePass({label:"FFT Wave Fourier Amplitude Realization",timestampWrites:s!==void 0?{querySet:s.querySet,beginningOfPassWriteIndex:s.beginWriteIndex}:void 0});this.cascades.forEach(c=>{n.setPipeline(this.realizedAmplitudeKernel),n.setBindGroup(0,c.realizedAmplitudeGroup0),n.setBindGroup(1,c.realizedAmplitudeGroup1);const _={width:c.packed_Dx_plus_iDy_Dz_iDxdz_Amplitude.width,height:c.packed_Dx_plus_iDy_Dz_iDxdz_Amplitude.height,depth:1};n.dispatchWorkgroups(_.width/16,_.height/16,_.depth/1)}),n.end(),this.cascades.forEach((c,_)=>{this.dfftResources.recordPerform(e,t,c.packed_Dx_plus_iDy_Dz_iDxdz_Amplitude,this.Dx_Dy_Dz_Dxdz_SpatialArray,_,!0,void 0),this.dfftResources.recordPerform(e,t,c.packed_Dydx_plus_iDydz_Dxdx_plus_iDzdz_Amplitude,this.Dydx_Dydz_Dxdx_Dzdz_SpatialArray,_,!0,void 0)});const o=t.beginComputePass({label:"Turbulence Accumulation"});o.setPipeline(this.accumulateTurbulenceKernel),o.setBindGroup(0,this.turbulenceJacobianArrays[this.turbulenceJacobianIndex].bindGroup),o.dispatchWorkgroups(this.gridSize/16,this.gridSize/16),o.end();const u=t.beginComputePass({label:"MipMap Generation",timestampWrites:s!==void 0?{querySet:s.querySet,endOfPassWriteIndex:s.endWriteIndex}:void 0});this.mipMapGenerator.updateMipMaps(u,this.Dx_Dy_Dz_Dxdz_SpatialArray_MipMapBindings),this.mipMapGenerator.updateMipMaps(u,this.Dydx_Dydz_Dxdx_Dzdz_SpatialArray_MipMapBindings),this.mipMapGenerator.updateMipMaps(u,this.turbulenceJacobianArrays[this.turbulenceJacobianIndex].mipMapBindings),this.turbulenceJacobianIndex+=1,this.turbulenceJacobianIndex%=this.turbulenceJacobianArrays.length,u.end()}}const Je=`// Displace a grid of vertices representing the ocean surface, then rasterize into the gbuffer with a graphics pass

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
// Sizeof(GlobalUBO) = 128 + 32 + 256 + 16 = 432 (as of writing)
// Alignof(GlobalUBO) = 16
struct GlobalUBO
{
	camera: Camera, // offset 128 + 32
	atmosphere: Atmosphere, // offset 0
	light: CelestialLight, // offset 128
	time: Time, // offset 128 + 32 + 256
}


struct PlaneWave
{
    direction: vec2<f32>,
    amplitude: f32,
    wavelength: f32,
}

struct WaveSurfaceDisplacementUBO
{
	patch_world_half_extent: f32,
	b_gerstner: u32,
	b_displacement_map: u32,
	padding0: f32,

	gbuffer_extent: vec2<f32>,
	foam_scale: f32,
	foam_bias: f32,
}

@group(0) @binding(0) var<uniform> u_settings: WaveSurfaceDisplacementUBO;
@group(0) @binding(1) var<uniform> u_global: GlobalUBO;

@group(1) @binding(0) var displacement_map_sampler: sampler;
@group(1) @binding(1) var Dx_Dy_Dz_Dxdz_spatial: texture_2d_array<f32>;
@group(1) @binding(2) var Dydx_Dydz_Dxdx_Dzdz_spatial: texture_2d_array<f32>;
@group(1) @binding(3) var<uniform> u_waves: array<PlaneWave, WAVE_COUNT>;

@group(2) @binding(0) var turbulence_jacobian: texture_2d_array<f32>;

const PI = 3.141592653589793;

const VERTEX_DIMENSION = 1000u;
const VERTEX_COUNT = VERTEX_DIMENSION * VERTEX_DIMENSION;
// const TRIANGLE_COUNT = 2u * (VERTEX_DIMENSION - 1u) * (VERTEX_DIMENSION - 1u);
// const INDEX_COUNT = 3u * TRIANGLE_COUNT;

const WAVE_COUNT = 12u;

const WATER_COLOR = 0.3 * vec3<f32>(16.0 / 255.0, 97.0 / 255.0, 171.0 / 255.0);
const WAVE_NEUTRAL_PLANE = 1.0;

const CASCADE_CAPACITY = 4u;
const WAVE_CASCADE_SIZES = array<f32,3>(200.0, 50.0, 10.0);

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

		let patch_uv = global_uv / WAVE_CASCADE_SIZES[array_layer];

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

		for (var i = 0u; i < WAVE_COUNT; i++)
		{
			sample = sampleOceanSurfaceDisplacementFromWave(
				u_waves[i],
				u_global.time.time_seconds,
				global_uv,
				u_settings.patch_world_half_extent
			);

			result.displacement += result.displacement;
		}
	}

	return result;
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

fn projectNDCToOceanSurface(
	ndc: vec2<f32>,
	ndc_offset: vec2<f32>,
	camera: Camera,
	height: f32,
) -> vec3<f32>
{
	let near_plane = 1.0;
	let direction_view_space = camera.inv_proj * vec4<f32>(
		ndc + ndc_offset,
		near_plane,
		1.0
	);

	let direction_world = normalize((camera.inv_view * vec4<f32>(direction_view_space.xyz, 0.0)).xyz);

	let ocean_origin = vec3<f32>(0.0, height, 0.0);
	let ocean_normal = vec3<f32>(0.0, 1.0, 0.0);

	let ocean_plane_hit = rayPlaneIntersection(camera.position.xyz, direction_world, ocean_origin, ocean_normal);
	let t = mix(1000.0, ocean_plane_hit.t, f32(ocean_plane_hit.hit));
	var world_position = camera.position.xyz + t * direction_world;
	world_position.y = ocean_origin.y;

	return world_position;
}

struct VertexOut {
    @builtin(position) position : vec4<f32>,
    @location(1) color : vec3<f32>,
    @location(2) camera_distance : f32,
	@location(3) cascade_1234_normal_weights: vec4<f32>,
	@location(5) global_uv: vec2<f32>,
}

/*
 * Projects a grid of vertices with evenly distributed screen space coordinates
 */
@vertex
fn screenSpaceWarped(@builtin(vertex_index) index : u32) -> VertexOut
{
	var output : VertexOut;

	let camera = u_global.camera;

	let vert_coord = vec2<f32>(
		f32(index % VERTEX_DIMENSION),
		f32(index / VERTEX_DIMENSION)
	) / f32(VERTEX_DIMENSION - 1u);

	let overlap = vec2<f32>(1.5);

	/*
	 * This assumes:
	 *  - the camera has no roll, so the horizon is flat in NDC space and extends to y=-1
	 *  - the horizon is visible
	 */

	/* Enable this when camera moves too high, and horizon drops more than a pixel or two
	const METERS_PER_MM = 1000000.0;
	let atmosphere = u_global.atmosphere;

    let origin = vec3<f32>(0.0, atmosphere.planet_radius_Mm, 0.0) + camera.position.xyz / METERS_PER_MM;
    let sin_horizon: f32 = atmosphere.planet_radius_Mm / length(origin);
    let cos_horizon: f32 = -safeSqrt(1.0 - sin_horizon * sin_horizon);
	let ndc_horizon_forward = (camera.proj_view * vec4<f32>(camera.forward.x, 0.0, camera.forward.z, 0.0));
	*/

	let ndc_horizon_forward = (camera.proj_view * vec4<f32>(camera.forward.x, 0.0, camera.forward.z, 0.0));

	let ndc_min = vec2<f32>(-overlap.x, -overlap.y);
	let ndc_max = vec2<f32>(overlap.x, ndc_horizon_forward.y / ndc_horizon_forward.w);

	let ndc_space_coord = mix(ndc_min, ndc_max, vert_coord);

	let ocean_origin = vec3<f32>(0.0, WAVE_NEUTRAL_PLANE, 0.0);
	let ocean_normal = vec3<f32>(0.0,1.0,0.0);

	let cell_world_position = projectNDCToOceanSurface(
		ndc_space_coord,
		vec2<f32>(0.0,0.0),
		camera,
		WAVE_NEUTRAL_PLANE
	);
	let neighbor_world_position = projectNDCToOceanSurface(
		ndc_space_coord,
		vec2<f32>(1.0) / f32(VERTEX_DIMENSION - 1u),
		camera,
		WAVE_NEUTRAL_PLANE
	);
	let pixel_neighbor_world_position = projectNDCToOceanSurface(
		ndc_space_coord,
		vec2<f32>(1.0) / u_settings.gbuffer_extent,
		camera,
		WAVE_NEUTRAL_PLANE
	);

	var cascade_position_weights = array<f32, CASCADE_CAPACITY>(1,1,1,1);
	var cascade_normal_weights = array<f32, CASCADE_CAPACITY>(1,1,1,1);

	/*
	 * Disable this since mipmapping is good enough.
	 * The eventual goal to enable this would be to transition to a
	 * distant ocean BRDF in order to replace the normal perturbations we filter
	 * out.
	 */
	const WITH_NYQUIST_FILTERING = false;
	if(WITH_NYQUIST_FILTERING)
	{
		/*
		* When projecting this grid of screen-space triangles to the ocean, each
		* vertex and fragment is a sample of our ocean wave data. We don't want to
		* sample waves outside the nyquist limit for a given cell/pixel.
		*
		* We filter cascades' effect on POSITION by the sample rate of the entire
		* triangle/cell, i.e. per vertex.
		*
		* We filter cascades' effect on NORMAL by the sample rate of each pixel,
		* i.e. per fragment.
		*
		* These criteria are distinct since normals are per pixel, while
		* displacement visually relies on triangle rasterization and visible
		* feature detail is bounded by the final distance of vertices.
		*/

		// TODO: this is hardcoded right now, but should be updated as wave initial amplitudes are changed
		const WAVE_NUMBER_FENCE_POSTS = array<f32, 5>(
			0.001,
			8.042477193189871,
			32.169908772759484,
			160.8495438637974,
			1000
		);

		// Any wave with wavenumber greater than this should NOT be sampled
		let cell_nyquist_wavenumber = (2.0 * PI) / (distance(neighbor_world_position, cell_world_position) * 2.0);
		let pixel_nyquist_wavenumber = (2.0 * PI) / (distance(pixel_neighbor_world_position, cell_world_position) * 2.0);

		for(var cascade = 0u; cascade < textureNumLayers(Dx_Dy_Dz_Dxdz_spatial); cascade++)
		{
			let wave_number_min = WAVE_NUMBER_FENCE_POSTS[cascade];
			let wave_number_max = WAVE_NUMBER_FENCE_POSTS[cascade + 1u];

			let wave_number_concentration = mix(wave_number_min, wave_number_max, 0.15);

			let position_weight = 1.0 - smoothstep(
				cell_nyquist_wavenumber * 1.0,
				cell_nyquist_wavenumber * 2.5,
				wave_number_concentration
			);
			let normal_weight = 1.0 - smoothstep(
				pixel_nyquist_wavenumber * 1.0,
				pixel_nyquist_wavenumber * 3.0,
				wave_number_concentration
			);

			cascade_position_weights[cascade] = position_weight;
			cascade_normal_weights[cascade] = normal_weight;
		}
	}

	let global_uv = cell_world_position.xz;
	let displacement_result = getOceanSurfaceDisplacement(
		global_uv,
		cascade_position_weights
	);
	let world_position = cell_world_position + displacement_result.displacement;

	output.global_uv = global_uv;
    output.position = u_global.camera.proj_view * vec4<f32>(world_position, 1.0);
	// Unclipped depth didn't work (and requires a feature) so this is a workaround
	output.position.z /= 1.001;

	output.color = vec3<f32>(WATER_COLOR);

	// Test screen-space density of vertices
	// output.color = vec3<f32>(step(fract(50 * ndc_space_coord), vec2<f32>(0.1)),0.0);
 	// output.color = vec3<f32>(step(fract(1.0 * world_position.x), 0.05),0.0,0.0);

    output.camera_distance = distance(u_global.camera.position.xyz, world_position);

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

		let patch_uv = global_uv / WAVE_CASCADE_SIZES[array_layer];

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

    let wave_number = 2.0 * 3.141592653589793 / wavelength;

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

		for (var i = 0u; i < WAVE_COUNT; i++)
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
			result.foam_strength += sample.foam_strength / f32(WAVE_COUNT);
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

    output.world_normal_with_surface_foam_strength_in_alpha = vec4<f32>(normal, surface.foam_strength);
    return output;
}
`;class $e extends E{constructor(t){super(t,8,"Wave Surface Displacement Patch World Half Extent UBO");a(this,"data",{patch_world_half_extent:50,b_gerstner:!0,b_fft:!0,gbuffer_extent:b.create(1,1),foam_scale:1,foam_bias:0})}packed(){const t=new ArrayBuffer(this.buffer.size),r=new DataView(t),s=new Float32Array(t);return r.setFloat32(0,this.data.patch_world_half_extent,!0),r.setUint32(4,this.data.b_gerstner?1:0,!0),r.setUint32(8,this.data.b_fft?1:0,!0),r.setFloat32(12,0,!0),s.set(this.data.gbuffer_extent,4),r.setFloat32(24,this.data.foam_scale,!0),r.setFloat32(28,this.data.foam_bias,!0),t}}class Ze{constructor(e,t,r,s,i,n){a(this,"group0");a(this,"group1");a(this,"group2ByTurbulenceMapIndex");a(this,"settingsUBO");a(this,"vertexDimension");a(this,"lodCount");a(this,"baseIndexCount");a(this,"mipLevelCount");a(this,"indices");a(this,"oceanSurfaceRasterizationPipeline");this.vertexDimension=1e3;const u=4,_=3*(2*999*999);this.baseIndexCount=_;const d=10;this.lodCount=d,this.indices=e.createBuffer({size:_*u,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.INDEX,label:"Wave Surface Displacement Indices"});const p=new Uint32Array(_);let h=0;for(let z=0;z<999;z++)for(let U=0;U<999;U++){const C=U+z*1e3,X=C+1,G=C+1e3,de=G+1,J=new Uint32Array([C,G,X,X,G,de]);p.set(J,h),h+=J.length}e.queue.writeBuffer(this.indices,0,p);const g=12,f=4,y=4*f,v=e.createBuffer({size:g*y,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM,label:"Wave Surface Displacement Waves"}),D=9.8,S=60,w=S*S*D/(2*Math.PI),ce=new Array({direction:b.create(.4,2),amplitude:.25,wavelength:w/(12*12)},{direction:b.create(.6,2),amplitude:.3,wavelength:w/(14*14)},{direction:b.create(.8,2),amplitude:.35,wavelength:w/(12*12)},{direction:b.create(1,2),amplitude:.4,wavelength:w/(16*16)},{direction:b.create(1.2,2),amplitude:.45,wavelength:w/(12*12)},{direction:b.create(1.4,2),amplitude:.4,wavelength:w/(14*14)},{direction:b.create(1.6,2),amplitude:.35,wavelength:w/(12*12)},{direction:b.create(1.8,2),amplitude:.3,wavelength:w/(16*16)},{direction:b.create(.8,1.5),amplitude:.02,wavelength:w/(30*30)},{direction:b.create(1.1,1.5),amplitude:.02,wavelength:w/(30*30)},{direction:b.create(1.2,1.5),amplitude:.02,wavelength:w/(30*30)},{direction:b.create(1.3,1.5),amplitude:.02,wavelength:w/(30*30)}),R=new Float32Array(g*f);let L=0;ce.forEach(z=>{R.set(z.direction,L),R[L+2]=z.amplitude,R[L+3]=z.wavelength,L+=4}),e.queue.writeBuffer(v,0,R),this.settingsUBO=new $e(e);const j=e.createBindGroupLayout({label:"Wave Surface Displacement Group 1 Compute (Displacement Map)",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:1,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array"}},{binding:2,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array"}},{binding:3,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]});this.group1=e.createBindGroup({label:"Wave Surface Displacement Group 1 Compute (Displacement Map)",layout:j,entries:[{binding:0,resource:e.createSampler({label:"Wave Surface Displacement Group 1 Sampler",minFilter:"linear",magFilter:"linear",addressModeU:"repeat",addressModeV:"repeat"})},{binding:1,resource:n.Dx_Dy_Dz_Dxdz_SpatialAllMips},{binding:2,resource:n.Dydx_Dydz_Dxdx_Dzdz_SpatialAllMips},{binding:3,resource:{buffer:v}}]}),this.mipLevelCount=n.mipLevelCount;const Q=e.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array"}}]});this.group2ByTurbulenceMapIndex=n.turbulenceJacobianOneMip.map((z,U)=>e.createBindGroup({label:`Wave Surface Displacement Group 2 Compute (Turbulence) index ${U}`,layout:Q,entries:[{binding:0,resource:z}]}));const Y=e.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}],label:"Wave Surface Displacement Group 0"});this.group0=e.createBindGroup({layout:Y,entries:[{binding:0,resource:{buffer:this.settingsUBO.buffer}},{binding:1,resource:{buffer:t.buffer}}],label:"Wave Surface Displacement Group 0"});const K=e.createShaderModule({code:Je,label:"Wave Surface Displacement"});this.oceanSurfaceRasterizationPipeline=e.createRenderPipeline({layout:e.createPipelineLayout({bindGroupLayouts:[Y,j,Q]}),vertex:{module:K,entryPoint:"screenSpaceWarped"},fragment:{module:K,entryPoint:"rasterizationFragment",targets:[{format:r},{format:s}]},primitive:{topology:"triangle-list",cullMode:"back",frontFace:"cw"},depthStencil:{format:i,depthWriteEnabled:!0,depthCompare:"less"},label:"Wave Surface Displacement Surface Rasterization"})}record(e,t,r,s,i,n){this.settingsUBO.data.patch_world_half_extent=i.fft?100:300,this.settingsUBO.data.b_gerstner=i.gerstner,this.settingsUBO.data.b_fft=i.fft,this.settingsUBO.data.foam_bias=i.foamBias,this.settingsUBO.data.gbuffer_extent=n.extent,this.settingsUBO.data.foam_scale=i.foamScale,this.settingsUBO.writeToGPU(e.queue);const o=t.beginRenderPass({label:"Wave Surface Rasterization",colorAttachments:[{clearValue:{r:0,g:0,b:0,a:0},loadOp:"clear",storeOp:"store",view:n.colorWithSurfaceWorldDepthInAlpha},{clearValue:{r:0,g:0,b:0,a:0},loadOp:"clear",storeOp:"store",view:n.normalWithSurfaceFoamInAlpha}],depthStencilAttachment:{view:n.depth,depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"},timestampWrites:r!==void 0?{querySet:r.querySet,beginningOfPassWriteIndex:r.beginWriteIndex,endOfPassWriteIndex:r.endWriteIndex}:void 0});o.setPipeline(this.oceanSurfaceRasterizationPipeline),o.setBindGroup(0,this.group0),o.setBindGroup(1,this.group1),o.setBindGroup(2,this.group2ByTurbulenceMapIndex[s]),o.setIndexBuffer(this.indices,"uint32"),o.drawIndexed(this.baseIndexCount,1),o.end()}}const et=`// Sizeof(Atmosphere) = 8 * 16 = 128
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
// Sizeof(GlobalUBO) = 128 + 32 + 256 + 16 = 432 (as of writing)
// Alignof(GlobalUBO) = 16
struct GlobalUBO
{
	camera: Camera, // offset 128 + 32
	atmosphere: Atmosphere, // offset 0
	light: CelestialLight, // offset 128
	time: Time, // offset 128 + 32 + 256
}


@group(0) @binding(0) var output_color: texture_storage_2d<rgba16float, write>;
@group(0) @binding(1) var lut_sampler: sampler;
@group(0) @binding(2) var transmittance_lut: texture_2d<f32>;
@group(0) @binding(3) var multiscatter_lut: texture_2d<f32>;
@group(0) @binding(4) var skyview_lut: texture_2d<f32>;

@group(1) @binding(0) var<uniform> u_global: GlobalUBO;

@group(2) @binding(0) var gbuffer_color_with_surface_world_depth_in_alpha: texture_2d<f32>;
@group(2) @binding(1) var gbuffer_normal_with_surface_foam_strength_in_alpha: texture_2d<f32>;

// vertex state NOT included
// Render a quad and use this as the fragment stage

// This file contains shared methods and definitions for raymarching the atmosphere and generating the lookup tables

// Based on:
// "A Scalable and Production Ready Sky and Atmosphere Rendering Technique" by Sébastien Hillaire (2020)
// https://sebh.github.io/publications/egsr2020.pdf
//
// "Precomputed Atmospheric Scattering: a New Implementation" by Eric Bruneton (2017)
// https://ebruneton.github.io/precomputed_atmospheric_scattering

const TRANSMITTANCE_LUT_WIDTH = 2048u;
const TRANSMITTANCE_LUT_HEIGHT = 1024u;

const MULTISCATTER_LUT_WIDTH = 1024u;
const MULTISCATTER_LUT_HEIGHT = 1024u;

const SKYVIEW_LUT_WIDTH = 1024u;
const SKYVIEW_LUT_HEIGHT = 512u;

const METERS_PER_MM: f32 = 1000000;
const PI: f32 = 3.141592653589793;

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
    mu: f32
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
        textureCoordFromUnitRange(x_mu, TRANSMITTANCE_LUT_WIDTH),
        textureCoordFromUnitRange(x_radius, TRANSMITTANCE_LUT_HEIGHT)
    );
}

// Inverse of transmittanceLUT_RMu_to_UV
// Allocates more texture space to interesting rays near the horizon.
fn transmittanceLUT_UV_to_RMu(
    atmosphere: ptr<function,Atmosphere>,
    uv: vec2<f32>
) -> vec2<f32>
{
    let x_mu : f32 = unitRangeFromTextureCoord(uv.x, TRANSMITTANCE_LUT_WIDTH);
    let x_radius : f32 = unitRangeFromTextureCoord(uv.y, TRANSMITTANCE_LUT_HEIGHT);

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
    mu_light: f32
) -> vec2<f32>
{
    let u_unit: f32 = 0.5 + 0.5 * mu_light;
    let v_unit: f32 = clamp(
        (radius - (*atmosphere).planet_radius_Mm)
            / ((*atmosphere).atmosphere_radius_Mm - (*atmosphere).planet_radius_Mm),
        0.0, 1.0
    );

    return vec2<f32>(
        textureCoordFromUnitRange(u_unit, MULTISCATTER_LUT_WIDTH),
        textureCoordFromUnitRange(v_unit, MULTISCATTER_LUT_HEIGHT)
    );
}

fn multiscatterLUT_UV_to_RMu(
    atmosphere: ptr<function,Atmosphere>,
    uv: vec2<f32>,
) -> vec2<f32>
{
    let u_unit: f32 = unitRangeFromTextureCoord(uv.x, MULTISCATTER_LUT_WIDTH);
    let v_unit: f32 = unitRangeFromTextureCoord(uv.y, MULTISCATTER_LUT_HEIGHT);

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
    let uv: vec2<f32> = multiscatterLUT_RMu_to_UV(atmosphere, radius, mu_light);

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
    let uv: vec2<f32> = transmittanceLUT_RMu_to_UV(atmosphere, radius, mu);

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

//// FLAGS MULTISCATTERING ISOTROPIC_PHASE SCATTERING_NONLINEAR_SAMPLE LIGHT_ILLUMINANCE_IS_ONE HIGH_SAMPLE_COUNT SAMPLE_PATH_TRANSMITTANCE

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

const T_SUBSTEP_NONLINEAR = 0.4;
const T_SUBSTEP_LINEAR = 0.2;

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
    result.multiscattering_transfer = vec3<f32>(0.0);

	if(sample_distance <= 0.0)
	{
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

    const ISOTROPIC_PHASE: f32 = 1.0 / (4.0 * PI);

    const SAMPLE_COUNT = 64.0;

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
			t = mix(t_begin, t_end, T_SUBSTEP_NONLINEAR);
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

    return result;
}


// ACES tonemap fitting constants provided by 
// https://github.com/TheRealMJP/BakingLab/blob/master/BakingLab/ACES.hlsl

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

fn RRTAndODTFit(v: vec3<f32>) -> vec3<f32>
{
    let a = v * (v + 0.0245786) - 0.000090537;
    let b = v * (0.983729 * v + 0.4329510) + 0.238081;
    return a / b;
}

// Transfer implementation as defined in
// https://www.color.org/chardata/rgb/srgb.xalter

// nonlinear sRGB -> linear
fn SRGBtoLinear(color_srgb: vec3<f32>) -> vec3<f32>
{
    let piecewise_boundary = color_srgb < vec3<f32>(0.0031308 * 12.92);
    let piecewise_linear = color_srgb / vec3<f32>(12.92);
    let piecewise_nonlinear = pow(
        (color_srgb + vec3<f32>(0.055)) / vec3<f32>(1.055), vec3<f32>(2.4)
    );

    return 0.95 * select(piecewise_nonlinear, piecewise_linear, piecewise_boundary);
}

// linear -> nonlinear sRGB
fn linearToSRGB(color_linear: vec3<f32>) -> vec3<f32>
{
    let piecewise_boundary = color_linear <= vec3<f32>(0.0031308);
    let piecewise_linear = vec3<f32>(12.92) * color_linear;
    let piecewise_nonlinear = vec3<f32>(1.055) * pow(color_linear, vec3<f32>(1 / 2.4)) - vec3<f32>(0.055);

    return select(piecewise_nonlinear, piecewise_linear, piecewise_boundary);
}

fn tonemapACES(color_hdr: vec3<f32>) -> vec3<f32>
{
    var color = ACES_INPUT_MAT * linearToSRGB(color_hdr);
    color = RRTAndODTFit(color);
    color = ACES_OUTPUT_MAT * color;
    color = clamp(color, vec3<f32>(0.0), vec3<f32>(1.0));
    color = SRGBtoLinear(color);
    return color;
}

fn tonemapPBRNeutral(color: vec3<f32>) -> vec3<f32>
{
    // Implementation of https://github.com/KhronosGroup/ToneMapping/tree/main/PBR_Neutral
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
    const METALLIC_WATER = 0.8;

	const SPECULAR_POWER = 160.0;
	const ROUGHNESS_WATER = 0.05;
	const ROUGHNESS_FOAM = 0.3;

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
	const V_SAFE_OFFSET = 1.5;
	let v_safe = (0.5 * f32(SKYVIEW_LUT_HEIGHT) - V_SAFE_OFFSET) / f32(SKYVIEW_LUT_HEIGHT);
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
    let transmittance_to_surface = sampleTransmittanceLUT_Segment(
        transmittance_lut,
        lut_sampler,
        atmosphere,
        origin_step.radius,
        origin_step.mu,
        distance,
        intersects_ground
    );

    var light_luminance_transfer = vec3<f32>(0.0);

	// TODO: Better lighting model of the water

    // Model water as perfect reflections with some diffuse scattering to emulate light coming up from underwater

    let surface_position = position + direction * distance;

	// reflection image on ocean surface
	//
    // shift reflection vector up to make up for the lack of secondary bounces
    // Otherwise, the environmental luminance will be 0 and we get random black patches
    let reflection_direction = reflect(normalize(direction), normalize(material.normal));

	let surface_transmittance_to_sun = sampleTransmittanceLUT_Ray(
		transmittance_lut,
        lut_sampler,
		atmosphere,
		surface_position,
		light_direction
	);

	// Reflected luminance from the sky
	let sky_luminance = sampleSkyViewLUT(atmosphere, surface_position, reflection_direction);
	light_luminance_transfer +=
		transmittance_to_surface
		* sky_luminance
		* computeFresnelPerfectReflection(material, reflection_direction);

	// Reflected and scattered luminance directly from light
	let light_luminance = surface_transmittance_to_sun
		* sunFractionOfRadianceVisible(atmosphere, light, surface_position, light_direction);
	light_luminance_transfer +=
		transmittance_to_surface
		* light_luminance
		* mix(
			specularBRDF(material, light_direction, -direction),
			diffuseBRDF(material),
			computeFresnelMicrofacet(material, light_direction, -direction)
		);

	// Scattered luminance from below the sea (mostly near-surface interactions)
	let sky_visible_solid_angle = mix(0.0, 2.0 * PI, 0.5 * dot(vec3<f32>(0.0, 1.0, 0.0), material.normal) + 0.5);
	let sky_indirect_luminance = sampleSkyViewLUT(atmosphere, surface_position, reflect(-light_direction, vec3<f32>(0.0,1.0,0.0)));
	let sea_luminance = diffuseBRDF(material) * sky_visible_solid_angle * sky_indirect_luminance;
	light_luminance_transfer += transmittance_to_surface * sea_luminance;

	/*
    {
        // Aerial perspective, the light scattered by air between viewer and the surface
		// Has very little effect while we have no geometry in the distance, and the camera is low to the ground.
        // TODO: aerial perspective LUT
        let include_ground = false;
        light_luminance_transfer += computeLuminanceScatteringIntegral(
            atmosphere,
            light,
            lut_sampler,
            transmittance_lut,
            multiscatter_lut,
            position,
            direction,
            include_ground,
			intersects_ground,
			distance
        ).luminance;
    }
	*/

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

    const METERS_PER_MM = 1000000.0;
    let origin = vec3<f32>(0.0, atmosphere.planet_radius_Mm, 0.0) + camera.position.xyz / METERS_PER_MM;

    let ndc_space_coord = (uv - vec2<f32>(0.5)) * 2.0 * vec2<f32>(1.0, -1.0);
    let near_plane_depth = 1.0;
    let direction_view_space = camera.inv_proj * vec4(ndc_space_coord, near_plane_depth, 1.0);
    let direction_world = normalize((camera.inv_view * vec4<f32>(direction_view_space.xyz, 0.0)).xyz);

    let color_with_surface_world_depth_in_alpha = textureLoad(gbuffer_color_with_surface_world_depth_in_alpha, texel_coord, 0);
    let normal_with_surface_foam_strength_in_alpha = textureLoad(gbuffer_normal_with_surface_foam_strength_in_alpha, texel_coord, 0);
	let normal = normal_with_surface_foam_strength_in_alpha.xyz;
	let foam_strength = normal_with_surface_foam_strength_in_alpha.w;

    let depth = color_with_surface_world_depth_in_alpha.a / METERS_PER_MM;

    var luminance_transfer = vec3<f32>(0.0);

    let sin_horizon: f32 = atmosphere.planet_radius_Mm / length(origin);
    let cos_horizon: f32 = -safeSqrt(1.0 - sin_horizon * sin_horizon);
	let mu = dot(normalize(origin), normalize(direction_world));
	let intersects_ground = mu < cos_horizon;

    if (depth <= 0.0)
    {
        // View of virtual environment: either the sky, or the floor
        if (intersects_ground)
        {
            let material: PBRTexel = convertPBRPropertiesWater(
				vec3<f32>(1.0),
				vec3<f32>(0.0,1.0,0.0),
				1.0
			);
            luminance_transfer = sampleGeometryLuminance(&atmosphere, &light, material, origin, direction_world, depth, intersects_ground);
        }
        else
        {
            luminance_transfer = sampleSkyLuminance(&atmosphere, &light, origin, direction_world);
        }
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
        luminance_transfer = sampleGeometryLuminance(&atmosphere, &light, material, origin, direction_world, depth, true);
    }

    let luminance = light.strength * light.color * luminance_transfer;

    let output = vec4<f32>(tonemapACES(luminance),1.0);

    textureStore(output_color, texel_coord, output);
}
`,ne="rgba16float";class tt{constructor(e,t,r,s,i,n,o){a(this,"group0Layout");a(this,"group1Layout");a(this,"lutSampler");a(this,"group0");a(this,"group1");a(this,"outputColor");a(this,"outputColorView");a(this,"pipeline");this.group0Layout=e.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,storageTexture:{format:ne}},{binding:1,visibility:GPUShaderStage.COMPUTE,sampler:{type:n?"filtering":"non-filtering"}},{binding:2,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:n?"float":"unfilterable-float",viewDimension:"2d"}},{binding:3,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:n?"float":"unfilterable-float",viewDimension:"2d"}},{binding:4,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:n?"float":"unfilterable-float",viewDimension:"2d"}}],label:"Atmosphere Camera Group 0"}),this.group1Layout=e.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{}}],label:"Atmosphere Camera Group 1"}),this.outputColor=e.createTexture({format:ne,size:{width:1,height:1},usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING,label:"Atmosphere Camera Output Color"}),this.outputColorView=this.outputColor.createView(),this.lutSampler=e.createSampler({label:"Atmosphere Camera LUT Sampler",magFilter:n?"linear":"nearest",minFilter:n?"linear":"nearest"}),this.group0=e.createBindGroup({layout:this.group0Layout,entries:[{binding:0,resource:this.outputColorView},{binding:1,resource:this.lutSampler},{binding:2,resource:r},{binding:3,resource:s},{binding:4,resource:i}],label:"Atmosphere Camera Group 0"}),this.group1=e.createBindGroup({layout:this.group1Layout,entries:[{binding:0,resource:{buffer:o.buffer}}],label:"Atmosphere Camera Group 1"});const u=e.createShaderModule({code:et,label:"Atmosphere Camera"});this.pipeline=e.createComputePipeline({compute:{module:u,entryPoint:"renderCompositedAtmosphere"},layout:e.createPipelineLayout({bindGroupLayouts:[this.group0Layout,this.group1Layout,t]}),label:"Atmosphere Camera"})}}const at=`// Call this in a render pass, passing in an index buffer [0, 1, 2, 0, 2, 3]

@group(0) @binding(0) var b_texture: texture_2d<f32>;
@group(0) @binding(0) var b_texture_array: texture_2d_array<f32>;
@group(0) @binding(1) var b_sampler: sampler;

struct FullscreenQuadUBO
{
    color_gain: vec4<f32>,
    vertex_scale: vec4<f32>,
	padding0: vec2<f32>,
	array_layer: u32,
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

@fragment
fn fragmentMain(fragData: VertexOut) -> @location(0) vec4<f32>
{
    let color = u_fullscreen_quad.color_gain * textureSampleLevel(b_texture, b_sampler, fragData.uv, f32(u_fullscreen_quad.mip_level));
    return vec4<f32>(color.xyz, 1.0);
}

@fragment
fn fragmentMainArray(fragData: VertexOut) -> @location(0) vec4<f32>
{
    let color = u_fullscreen_quad.color_gain * textureSampleLevel(b_texture_array, b_sampler, fragData.uv, u_fullscreen_quad.array_layer, f32(u_fullscreen_quad.mip_level));
    return vec4<f32>(color.xyz, 1.0);
}
`;class ue{constructor(){a(this,"color_gain",A.create(1,1,1,1));a(this,"vertex_scale",A.create(1,1,1,1));a(this,"padding0",b.create());a(this,"array_layer_u32",0);a(this,"mip_level_u32",0)}}class rt extends E{constructor(t){super(t,12,"Fullscreen Quad UBO");a(this,"data",new ue)}packed(){const t=new ArrayBuffer(this.buffer.size),r=new DataView(t);return new Float32Array(t).set(this.data.color_gain,0/4),new Float32Array(t).set(this.data.vertex_scale,16/4),r.setUint32(40,this.data.array_layer_u32,!0),r.setUint32(44,this.data.mip_level_u32,!0),t}}class it{constructor(e,t){a(this,"group0Layout");a(this,"group0LayoutArray");a(this,"group0ByOutputTexture");a(this,"group0Sampler");a(this,"ubo");a(this,"fullscreenQuadIndexBuffer");a(this,"group1");a(this,"pipeline");a(this,"arrayPipeline");const r=new Uint32Array([0,1,2,0,2,3]);this.fullscreenQuadIndexBuffer=e.createBuffer({size:r.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),e.queue.writeBuffer(this.fullscreenQuadIndexBuffer,0,r,0,r.length),this.group0Layout=e.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"non-filtering"}}],label:"Fullscreen Quad Group 0"}),this.group0LayoutArray=e.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{viewDimension:"2d-array",sampleType:"unfilterable-float"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"non-filtering"}}],label:"Fullscreen Quad Group 0 Array"}),this.group0ByOutputTexture=new Map,this.group0Sampler=e.createSampler({magFilter:"nearest",minFilter:"nearest"}),this.ubo=new rt(e);const s=e.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT|GPUShaderStage.VERTEX,buffer:{type:"uniform"}}],label:"Fullscreen Quad Group 1"});this.group1=e.createBindGroup({layout:s,entries:[{binding:0,resource:{buffer:this.ubo.buffer}}]});const i=e.createShaderModule({code:at,label:"Fullscreen Quad"});this.pipeline=e.createRenderPipeline({vertex:{module:i,entryPoint:"vertexMain"},fragment:{module:i,entryPoint:"fragmentMain",targets:[{format:t}]},primitive:{topology:"triangle-list",cullMode:"none",frontFace:"ccw"},layout:e.createPipelineLayout({bindGroupLayouts:[this.group0Layout,s]}),label:"Fullscreen Quad"}),this.arrayPipeline=e.createRenderPipeline({vertex:{module:i,entryPoint:"vertexMain"},fragment:{module:i,entryPoint:"fragmentMainArray",targets:[{format:t}]},primitive:{topology:"triangle-list",cullMode:"none",frontFace:"ccw"},layout:e.createPipelineLayout({bindGroupLayouts:[this.group0LayoutArray,s]}),label:"Fullscreen Quad"})}setView(e,t,r,s){this.group0ByOutputTexture.set(t,{array:s,bindGroup:e.createBindGroup({layout:s?this.group0LayoutArray:this.group0Layout,entries:[{binding:0,resource:r},{binding:1,resource:this.group0Sampler}],label:`Fullscreen Quad Group 0 Texture '${r.label}'`})})}recordPresent(e,t,r,s,i,n){const o={r:0,g:0,b:0,a:1},u=this.group0ByOutputTexture.get(s);if(u===void 0){console.warn("FullscreenQuadPass: No texture to output.");return}const c=t.beginRenderPass({colorAttachments:[{clearValue:o,loadOp:"clear",storeOp:"store",view:r}],timestampWrites:n!==void 0?{querySet:n.querySet,beginningOfPassWriteIndex:n.beginWriteIndex,endOfPassWriteIndex:n.endWriteIndex}:void 0,label:"Fullscreen Pass"});this.ubo.data=i,this.ubo.writeToGPU(e.queue),c.setIndexBuffer(this.fullscreenQuadIndexBuffer,"uint32",0,this.fullscreenQuadIndexBuffer.size),c.setBindGroup(1,this.group1),c.setPipeline(u.array?this.arrayPipeline:this.pipeline),c.setBindGroup(0,u.bindGroup),c.drawIndexed(6,1,0,0,0),c.end()}}const k={width:2048,height:1024},q={width:1024,height:1024},V={width:1024,height:512};class H{constructor(){a(this,"flip",!1);a(this,"colorGain",{r:1,g:1,b:1});a(this,"mipLevel",0);a(this,"arrayLayer",0)}}const nt=[{id:m.Scene},{id:m.TransmittanceLUT,flip:!0},{id:m.MultiscatterLUT,flip:!0},{id:m.SkyviewLUT,colorGain:{r:8,g:8,b:8}},{id:m.GBufferColor},{id:m.GBufferNormal},{id:m.FFTWaveSpectrumGaussianNoise},{id:m.FFTWaveInitialAmplitude,colorGain:{r:100,g:100,b:100}},{id:m.FFTWaveDx_plus_iDy_Dz_iDxdz_Amplitude,colorGain:{r:100,g:100,b:100}},{id:m.FFTWaveDydx_plus_iDydz_Dxdx_plus_iDzdz_Amplitude,colorGain:{r:100,g:100,b:100}},{id:m.FFTWaveDx_Dy_Dz_Dxdz_Spatial},{id:m.FFTWaveDydx_Dydz_Dxdx_Dzdz_Spatial}],P=[.25,.3333,.5,.75,1,1.5,2,4];var I=(l=>(l[l.DrawToDraw=0]="DrawToDraw",l[l.SkyviewLUT=1]="SkyviewLUT",l[l.FFTWaves=2]="FFTWaves",l[l.OceanSurface=3]="OceanSurface",l[l.AtmosphereCamera=4]="AtmosphereCamera",l[l.FullscreenQuad=5]="FullscreenQuad",l))(I||{});class se{constructor(e){a(this,"values");a(this,"sum",0);a(this,"average_",0);a(this,"count",0);a(this,"index",0);this.values=new Array(e).fill(0)}get average(){return this.average_}push(e){this.index>=this.values.length&&(this.index=0),this.index<this.count&&(this.sum-=this.values[this.index]),this.values[this.index]=e,this.sum+=e,this.count=Math.min(this.values.length,this.count+1),this.average_=this.sum/this.count,this.index+=1}}class st{constructor(e,t,r){a(this,"transmittanceLUTPassResources");a(this,"multiscatterLUTPassResources");a(this,"skyviewLUTPassResources");a(this,"fftWaveSpectrumResources");a(this,"waveSurfaceDisplacementPassResources");a(this,"atmosphereCameraPassResources");a(this,"fullscreenQuadPassResources");a(this,"gbuffer");a(this,"scaledSize");a(this,"rawSize");a(this,"renderOutputs");a(this,"settings");a(this,"uiReadonly");a(this,"globalUBO");a(this,"device");a(this,"presentFormat");a(this,"quit",!1);a(this,"frametimeQuery");a(this,"frametimeAverages");a(this,"startTime");a(this,"dummyFrameCounter");a(this,"probationFrameCounter");a(this,"targetFPS",0);a(this,"float32Filterable");if(this.device=e,this.float32Filterable=e.features.has("float32-filterable"),this.presentFormat=t,this.startTime=r,this.settings={outputTexture:m.Scene,oceanSurfaceSettings:{gerstner:!0,fft:!0,foamScale:15,foamBias:.25},fourierWavesSettings:{gravity:9.8,windSpeedMetersPerSeconds:15,windFetchMeters:40*1e3,waveSwell:.3},renderOutputTransforms:new Map,pauseGlobalTime:!1,currentRenderOutputTransform:new H,orbit:{timeHours:5.7,timeSpeedupFactor:400,paused:!1,reversed:!1,inclinationRadians:Math.PI/2,sunsetAzimuthRadians:0},renderScale:1.5},this.uiReadonly={averageFPS:0,frametimeControllers:new Map},this.scaledSize={width:1,height:1},this.rawSize={width:1,height:1},nt.reduce((o,{id:u,...c})=>(o.set(u,{...new H,...c}),o),this.settings.renderOutputTransforms),this.settings.renderOutputTransforms.has(this.settings.outputTexture)){const o=this.settings.renderOutputTransforms.get(this.settings.outputTexture);this.settings.currentRenderOutputTransform.flip=o.flip,this.settings.currentRenderOutputTransform.colorGain.r=o.colorGain.r,this.settings.currentRenderOutputTransform.colorGain.g=o.colorGain.g,this.settings.currentRenderOutputTransform.colorGain.b=o.colorGain.b}if(this.frametimeAverages=new Map,e.features.has("timestamp-query")){const u=2*Object.keys(I).map(c=>Number(c)).filter(isNaN).length;this.frametimeQuery={mappingLock:!1,querySet:e.createQuerySet({type:"timestamp",count:u}),writeBuffer:e.createBuffer({size:8*u,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE}),readBuffer:e.createBuffer({size:8*u,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})},Object.keys(I).map(c=>Number(c)).filter(c=>!isNaN(c)).forEach(c=>{const _=c;this.frametimeAverages.set(_,new se(400)),Object.assign(this.uiReadonly,String(_),0)})}else console.warn("WebGPU feature 'timestamp-query' is not supported. Continuing, but without performance information about specific stages."),this.frametimeAverages.set(0,new se(400));this.dummyFrameCounter=10,this.probationFrameCounter=100,this.globalUBO=new Me(this.device),this.globalUBO.writeToGPU(this.device.queue),this.gbuffer=new ee(e,{width:1,height:1}),this.transmittanceLUTPassResources=new Pe(this.device,k,this.globalUBO),this.multiscatterLUTPassResources=new Ce(this.device,q,this.transmittanceLUTPassResources.view,this.float32Filterable,this.globalUBO),this.skyviewLUTPassResources=new Oe(this.device,V,this.transmittanceLUTPassResources.view,this.multiscatterLUTPassResources.view,this.float32Filterable,this.globalUBO),this.fftWaveSpectrumResources=new Xe(this.device,this.globalUBO);const s=this.fftWaveSpectrumResources.views();this.waveSurfaceDisplacementPassResources=new Ze(this.device,this.globalUBO,this.gbuffer.colorWithSurfaceWorldDepthInAlpha.format,this.gbuffer.normalWithSurfaceFoamStrengthInAlpha.format,this.gbuffer.depth.format,this.fftWaveSpectrumResources.displacementMaps()),this.atmosphereCameraPassResources=new tt(this.device,this.gbuffer.readGroupLayout,this.transmittanceLUTPassResources.view,this.multiscatterLUTPassResources.view,this.skyviewLUTPassResources.view,this.float32Filterable,this.globalUBO),this.fullscreenQuadPassResources=new it(this.device,this.presentFormat),this.renderOutputs=new Map([[m.Scene,new T(this.atmosphereCameraPassResources.outputColor)],[m.TransmittanceLUT,new T(this.transmittanceLUTPassResources.texture)],[m.MultiscatterLUT,new T(this.multiscatterLUTPassResources.texture)],[m.SkyviewLUT,new T(this.skyviewLUTPassResources.texture)],[m.GBufferColor,new T(this.gbuffer.colorWithSurfaceWorldDepthInAlpha)],[m.GBufferNormal,new T(this.gbuffer.normalWithSurfaceFoamStrengthInAlpha)],[m.FFTWaveSpectrumGaussianNoise,s.gaussianNoise],[m.FFTWaveInitialAmplitude,s.initialAmplitude],[m.FFTWaveDx_plus_iDy_Dz_iDxdz_Amplitude,s.packed_Dx_plus_iDy_Dz_iDxdz_Amplitude],[m.FFTWaveDydx_plus_iDydz_Dxdx_plus_iDzdz_Amplitude,s.packed_Dydx_plus_iDydz_Dxdx_plus_iDzdz_Amplitude],[m.FFTWaveTurbulenceJacobian,s.turbulenceJacobian],[m.FFTWaveDx_Dy_Dz_Dxdz_Spatial,s.Dx_Dy_Dz_Dxdz_Spatial],[m.FFTWaveDydx_Dydz_Dxdx_Dzdz_Spatial,s.Dydx_Dydz_Dxdx_Dzdz_Spatial]]);for(const[o,u]of this.renderOutputs)this.fullscreenQuadPassResources.setView(e,o,u.view,u.depthOrArrayLayerCount>1);const i=e.createCommandEncoder();let n=i.beginComputePass();n.setPipeline(this.transmittanceLUTPassResources.pipeline),n.setBindGroup(0,this.transmittanceLUTPassResources.group0),n.setBindGroup(1,this.transmittanceLUTPassResources.group1),n.dispatchWorkgroups(Math.ceil(k.width/16),Math.ceil(k.height/16)),n.end(),n=i.beginComputePass(),n.setPipeline(this.multiscatterLUTPassResources.pipeline),n.setBindGroup(0,this.multiscatterLUTPassResources.group0),n.setBindGroup(1,this.multiscatterLUTPassResources.group1),n.dispatchWorkgroups(Math.ceil(q.width/16),Math.ceil(q.height/16)),n.end(),e.queue.submit([i.finish()])}setupUI(e){const t=e.add(this.settings,"outputTexture",{Scene:m.Scene,"Transmittance LUT":m.TransmittanceLUT,"Multiscatter LUT":m.MultiscatterLUT,"Skyview LUT":m.SkyviewLUT,"GBuffer Color":m.GBufferColor,"GBuffer Normal":m.GBufferNormal,"FFT Wave Gaussian Noise":m.FFTWaveSpectrumGaussianNoise,"FFT Wave Initial Amplitude":m.FFTWaveInitialAmplitude,"FFT Wave Frequency Domain (Dx + i * Dy, Dz + i * Dxdz)":m.FFTWaveDx_plus_iDy_Dz_iDxdz_Amplitude,"FFT Wave Frequency Domain (Dydx + i * Dydz, Dxdx + i * Dzdz)":m.FFTWaveDydx_plus_iDydz_Dxdx_plus_iDzdz_Amplitude,"FFT Wave (Turbulence, Jacobian)":m.FFTWaveTurbulenceJacobian,"FFT Wave Spatial Domain (Dx, Dy, Dz, Dxdz)":m.FFTWaveDx_Dy_Dz_Dxdz_Spatial,"FFT Wave Spatial Domain (Dydx, Dydz, Dxdx, Dzdx)":m.FFTWaveDydx_Dydz_Dxdx_Dzdz_Spatial}).name("Render Output").listen();e.add(this.settings,"renderScale",P).name("Render Resolution Scale").decimals(1).onFinishChange(h=>{this.handleResize(this.rawSize.width,this.rawSize.height)}).listen(),e.add(this.uiReadonly,"averageFPS").decimals(1).disable().name("Average FPS").listen();const r=e.addFolder("Ocean Parameters").open();r.add(this.settings.oceanSurfaceSettings,"gerstner").name("Gerstner Waves"),r.add(this.settings.oceanSurfaceSettings,"fft").name("FFT Accelerated Waves"),r.add(this.settings,"pauseGlobalTime").name("Pause Waves"),r.add(this.settings.oceanSurfaceSettings,"foamScale").name("Foam Scale").min(-30).max(30),r.add(this.settings.oceanSurfaceSettings,"foamBias").name("Foam Bias").min(-1).max(1),r.add(this.settings.fourierWavesSettings,"gravity").name("Gravity (m / s^2)").min(.01).max(20),r.add(this.settings.fourierWavesSettings,"waveSwell").name("Wave Swell").min(.01).max(1),r.add(this.settings.fourierWavesSettings,"windFetchMeters").name("Wind Fetch (m)").min(1e3).max(100*1e3),r.add(this.settings.fourierWavesSettings,"windSpeedMetersPerSeconds").name("Wind Speed (m/s)").min(.01).max(100);const s=e.addFolder("Sun Parameters").open();s.add(this.settings.orbit,"timeHours").min(0).max(24).name("Time in Hours").listen(),s.add(this.settings.orbit,"timeSpeedupFactor").min(1).max(5e4).step(1).name("Time Multiplier"),s.add(this.settings.orbit,"paused").name("Pause Sun"),s.add({fn:()=>{this.settings.orbit.timeHours=this.settings.orbit.reversed?18+.5:6-.5}},"fn").name("Skip to Sunrise"),s.add({fn:()=>{this.settings.orbit.timeHours=this.settings.orbit.reversed?6+.5:18-.5}},"fn").name("Skip to Sunset"),s.add(this.settings.orbit,"reversed").name("Reverse Sun"),s.add(this.settings.orbit,"sunsetAzimuthRadians").name("Sun Azimuth").min(0).max(2*Math.PI),s.add(this.settings.orbit,"inclinationRadians").name("Sun Inclination").min(0).max(Math.PI);const i=e.addFolder("Output Transform").close();i.add(this.settings.currentRenderOutputTransform,"flip").name("Flip Image").listen();const n=i.add(this.settings.currentRenderOutputTransform,"mipLevel").min(0).max(0).step(1).name("Mip Level").listen(),o=i.add(this.settings.currentRenderOutputTransform,"arrayLayer").min(0).max(0).step(1).name("Array Layer").listen();i.add({gain:0},"gain").name("RGB").min(0).max(100).onChange(h=>{this.settings.currentRenderOutputTransform.colorGain.r=h,this.settings.currentRenderOutputTransform.colorGain.g=h,this.settings.currentRenderOutputTransform.colorGain.b=h});const u=i.add(this.settings.currentRenderOutputTransform.colorGain,"r").name("R").min(0).max(100).listen(),c=i.add(this.settings.currentRenderOutputTransform.colorGain,"g").name("G").min(0).max(100).listen(),_=i.add(this.settings.currentRenderOutputTransform.colorGain,"b").name("B").min(0).max(100).listen();t.onChange(h=>{const g=t._listenPrevValue;this.settings.renderOutputTransforms.set(g,structuredClone(this.settings.currentRenderOutputTransform)),Object.assign(this.settings.currentRenderOutputTransform,structuredClone(this.settings.renderOutputTransforms.get(h)??new H));const f=this.renderOutputs.get(h);f!==void 0&&(n.max(f.mipLevelCount-1),n.disable(f.mipLevelCount==1),f.mipLevelCount==1&&n.setValue(0),n.updateDisplay(),o.max(f.depthOrArrayLayerCount-1),o.disable(f.depthOrArrayLayerCount==1),f.depthOrArrayLayerCount==1&&o.setValue(0),o.updateDisplay()),u.object=this.settings.currentRenderOutputTransform.colorGain,c.object=this.settings.currentRenderOutputTransform.colorGain,_.object=this.settings.currentRenderOutputTransform.colorGain});const d=this.renderOutputs.get(t.getValue());d!==void 0&&(n.max(d.mipLevelCount-1),n.disable(d.mipLevelCount==1),d.mipLevelCount==1&&n.setValue(0),n.updateDisplay(),o.max(d.depthOrArrayLayerCount-1),o.disable(d.depthOrArrayLayerCount==1),d.depthOrArrayLayerCount==1&&o.setValue(0),o.updateDisplay());const p=e.addFolder("Performance").close();this.frametimeAverages.forEach((h,g)=>{this.uiReadonly.frametimeControllers.set(g,p.add({value:0},"value").name(`${I[g]} (ms)`).decimals(6).disable())})}updateOrbit(e){const t=this.settings.orbit;this.settings.orbit.paused||(t.timeHours+=(t.reversed?-1:1)*t.timeSpeedupFactor*e/36e5,t.timeHours=t.timeHours-Math.floor(t.timeHours/24)*24);const r=2*Math.PI/24,s=(12-t.timeHours)*r,i=x.create(-Math.sin(t.sunsetAzimuthRadians),0,Math.cos(t.sunsetAzimuthRadians)),n=x.create(Math.cos(t.sunsetAzimuthRadians)*Math.cos(t.inclinationRadians),Math.sin(t.inclinationRadians),Math.sin(t.sunsetAzimuthRadians)*Math.cos(t.inclinationRadians)),o=x.add(x.scale(i,Math.sin(s)),x.scale(n,Math.cos(s)));x.scale(o,-1,this.globalUBO.data.light.forward)}updateFPSValues(e){var t,r,s,i;e>.01&&((t=this.frametimeAverages.get(0))==null||t.push(e),this.uiReadonly.averageFPS=1e3/(((r=this.frametimeAverages.get(0))==null?void 0:r.average)??1e3),(i=this.uiReadonly.frametimeControllers.get(0))==null||i.setValue(((s=this.frametimeAverages.get(0))==null?void 0:s.average)??-1))}updateCamera(e){const t=60*Math.PI/180,i=M.perspective(t,e,.1,1e3),n=[0,10,-20],o=M.lookAt(n,[0,0,400],[0,1,0]);Object.assign(this.globalUBO.data.camera,{invProj:M.inverse(i),invView:M.inverse(o),projView:M.mul(i,o),position:A.create(n[0],n[1],n[2],1)})}updateTime(e){const t=this.globalUBO.data.time;this.settings.pauseGlobalTime?t.deltaTimeSeconds=0:(t.deltaTimeSeconds=e/1e3,t.timeSeconds+=t.deltaTimeSeconds);const i=this.settings.oceanSurfaceSettings.fft?100:60;t.timeSeconds-=Math.floor(t.timeSeconds/i)*i}draw(e,t,r,s){if(this.dummyFrameCounter>0){this.dummyFrameCounter-=1;return}const i=e.createView();if(this.updateFPSValues(s),this.probationFrameCounter>49){this.probationFrameCounter-=1,this.probationFrameCounter<50&&(console.log(`Average FPS without load is ${this.uiReadonly.averageFPS}`),this.targetFPS=this.uiReadonly.averageFPS);return}if(this.probationFrameCounter>0&&(this.probationFrameCounter-=1,this.probationFrameCounter<1)){console.log(`Average FPS with load is ${this.uiReadonly.averageFPS}`);const d=this.uiReadonly.averageFPS/this.targetFPS;this.settings.renderScale=P[0],P.forEach(p=>{Math.abs(p-d)<Math.abs(this.settings.renderScale-d)&&(this.settings.renderScale=p)}),this.handleResize(this.rawSize.width,this.rawSize.height)}this.updateCamera(t),this.updateTime(s),this.updateOrbit(s),this.globalUBO.writeToGPU(this.device.queue);const n=this.device.createCommandEncoder({label:"Main"}),o=new Map;let u=0;o.set(2,u),this.fftWaveSpectrumResources.record(this.device,n,this.settings.fourierWavesSettings,this.frametimeQuery!==void 0?{querySet:this.frametimeQuery.querySet,beginWriteIndex:u++,endWriteIndex:u++}:void 0),o.set(3,u),this.waveSurfaceDisplacementPassResources.record(this.device,n,this.frametimeQuery!==void 0?{querySet:this.frametimeQuery.querySet,beginWriteIndex:u++,endWriteIndex:u++}:void 0,this.fftWaveSpectrumResources.turbulenceMapIndex,{gerstner:this.settings.oceanSurfaceSettings.gerstner,fft:this.settings.oceanSurfaceSettings.fft,foamBias:this.settings.oceanSurfaceSettings.foamBias,foamScale:this.settings.oceanSurfaceSettings.foamScale},{extent:b.create(this.gbuffer.colorWithSurfaceWorldDepthInAlpha.width,this.gbuffer.colorWithSurfaceWorldDepthInAlpha.height),colorWithSurfaceWorldDepthInAlpha:this.gbuffer.colorWithSurfaceWorldDepthInAlphaView,normalWithSurfaceFoamInAlpha:this.gbuffer.normalWithSurfaceFoamStrengthInAlphaView,depth:this.gbuffer.depthView}),o.set(1,u);const c=n.beginComputePass({timestampWrites:this.frametimeQuery!==void 0?{querySet:this.frametimeQuery.querySet,beginningOfPassWriteIndex:u++,endOfPassWriteIndex:u++}:void 0,label:"Skyview LUT"});c.setPipeline(this.skyviewLUTPassResources.pipeline),c.setBindGroup(0,this.skyviewLUTPassResources.group0),c.setBindGroup(1,this.skyviewLUTPassResources.group1),c.dispatchWorkgroups(Math.ceil(V.width/16),Math.ceil(V.height/(16*1.9))),c.end(),o.set(4,u);const _=n.beginComputePass({timestampWrites:this.frametimeQuery!==void 0?{querySet:this.frametimeQuery.querySet,beginningOfPassWriteIndex:u++,endOfPassWriteIndex:u++}:void 0,label:"Atmosphere Camera"});_.setPipeline(this.atmosphereCameraPassResources.pipeline),_.setBindGroup(0,this.atmosphereCameraPassResources.group0),_.setBindGroup(1,this.atmosphereCameraPassResources.group1),_.setBindGroup(2,this.gbuffer.readGroup),_.dispatchWorkgroups(Math.ceil(this.atmosphereCameraPassResources.outputColor.width/16),Math.ceil(this.atmosphereCameraPassResources.outputColor.height/16)),_.end();{const d=this.settings.currentRenderOutputTransform,p=new ue;p.color_gain=A.create(d.colorGain.r,d.colorGain.g,d.colorGain.b,1),p.vertex_scale=A.create(1,d.flip?-1:1,1,1),p.mip_level_u32=Math.round(d.mipLevel),p.array_layer_u32=Math.round(d.arrayLayer),o.set(5,u),this.fullscreenQuadPassResources.recordPresent(this.device,n,i,this.settings.outputTexture,p,this.frametimeQuery!==void 0?{querySet:this.frametimeQuery.querySet,beginWriteIndex:u++,endWriteIndex:u++}:void 0)}if(this.frametimeQuery!=null&&!this.frametimeQuery.mappingLock&&(n.resolveQuerySet(this.frametimeQuery.querySet,0,2*o.size,this.frametimeQuery.writeBuffer,0),n.copyBufferToBuffer(this.frametimeQuery.writeBuffer,0,this.frametimeQuery.readBuffer,0,this.frametimeQuery.readBuffer.size)),this.device.queue.submit([n.finish()]),this.frametimeQuery!==void 0&&!this.frametimeQuery.mappingLock){const d=this.frametimeQuery;this.frametimeQuery.mappingLock=!0,this.frametimeQuery.readBuffer.mapAsync(GPUMapMode.READ,0,this.frametimeQuery.readBuffer.size).then(()=>{const p=new BigInt64Array(d.readBuffer.getMappedRange(0,d.readBuffer.size));o.forEach((h,g)=>{var v,D,S;const y=Number(p.at(h+1)-p.at(h))/1e6;(v=this.frametimeAverages.get(g))==null||v.push(y),(S=this.uiReadonly.frametimeControllers.get(g))==null||S.setValue(((D=this.frametimeAverages.get(g))==null?void 0:D.average)??-1)}),d.readBuffer.unmap(),d.mappingLock=!1}).catch(p=>{console.error("Failed while retrieving frametime values from GPU:"),console.error(p)})}}handleResize(e,t){const r={width:e*this.settings.renderScale,height:t*this.settings.renderScale},s=8192,i=268435456,n=16,o=(u,c)=>u<s&&c<s&&u*c*n<i;o(r.width,r.height)?this.scaledSize=r:(P.slice().reverse().some(u=>{if(o(e*u,t*u))return this.settings.renderScale=u,!0}),console.warn(`During resize: Texture size (${r.width},${r.height}) exceeds WebGPU guaranteed limit (8192, 8192).
								Defaulting to highest possible render scale of ${this.settings.renderScale}`),this.scaledSize={width:e*this.settings.renderScale,height:t*this.settings.renderScale}),console.log(`Resizing to (${this.scaledSize.width},${this.scaledSize.height})`),this.rawSize={width:e,height:t},this.gbuffer=new ee(this.device,this.scaledSize,this.gbuffer),this.renderOutputs.set(m.GBufferColor,new T(this.gbuffer.colorWithSurfaceWorldDepthInAlpha)),this.renderOutputs.set(m.GBufferNormal,new T(this.gbuffer.normalWithSurfaceFoamStrengthInAlpha)),this.atmosphereCameraPassResources.outputColor=this.device.createTexture({format:this.atmosphereCameraPassResources.outputColor.format,size:this.scaledSize,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING}),this.atmosphereCameraPassResources.outputColorView=this.atmosphereCameraPassResources.outputColor.createView(),this.renderOutputs.set(m.Scene,new T(this.atmosphereCameraPassResources.outputColor)),this.atmosphereCameraPassResources.group0=this.device.createBindGroup({layout:this.atmosphereCameraPassResources.group0Layout,entries:[{binding:0,resource:this.atmosphereCameraPassResources.outputColorView},{binding:1,resource:this.atmosphereCameraPassResources.lutSampler},{binding:2,resource:this.transmittanceLUTPassResources.view},{binding:3,resource:this.multiscatterLUTPassResources.view},{binding:4,resource:this.skyviewLUTPassResources.view}],label:"Atmosphere Camera Group 0"}),this.renderOutputs.forEach((u,c)=>{this.fullscreenQuadPassResources.setView(this.device,c,u.view,u.depthOrArrayLayerCount>1)})}}const ut=(l,e,t)=>new st(l,e,t);export{ut as SkySeaAppConstructor};
