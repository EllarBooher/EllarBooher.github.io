@group(0) @binding(0) var transmittance_LUT: texture_storage_2d<rgba16float, write>;

const SAMPLE_COUNT: u32 = 500;
const TRANSMITTANCE_LUT_HEIGHT: u32 = 256;
const TRANSMITTANCE_LUT_WIDTH: u32 = 512;

//// INCLUDE atmosphere.wgsli

const ATMOSPHERE_GLOBAL: Atmosphere = Atmosphere(
    vec3<f32>(5.802, 13.558, 33.1),
    0.008, // 8.0 km
    vec3<f32>(0.0), 

    6.360,

    vec3<f32>(3.996),
    0.0012, // 1.2 km
    vec3<f32>(4.40),

    6.420,

    vec3<f32>(1.0),
    0.0,

    vec3<f32>(0.0),
    0.0,

    vec3<f32>(0.650, 1.881, 0.085),
    0.0,
    vec4<f32>(0.0),
);

fn unitRangeFromTextureCoord(coord: f32 , length: u32) -> f32
{
    return (coord - 0.5 / f32(length)) / (1.0 - 1.0 / f32(length));
}

// Inverse of transmittanceLUT_RMu_to_UV
// Allocates more texture space to interesting rays near the horizon.
fn transmittanceLUT_UV_to_RMu(
    atmosphere: Atmosphere, 
    uv: vec2<f32>
) -> vec2<f32>
{
    let x_mu : f32 = unitRangeFromTextureCoord(uv.x, TRANSMITTANCE_LUT_WIDTH);
    let x_radius : f32 = unitRangeFromTextureCoord(uv.y, TRANSMITTANCE_LUT_HEIGHT);

    let atmospherRadiusMmSquared : f32 = atmosphere.atmosphereRadiusMm * atmosphere.atmosphereRadiusMm;
    let planetRadiusMmSquared : f32 = atmosphere.planetRadiusMm * atmosphere.planetRadiusMm;

    // Ground level, horizontal ray distance to atmospheric boundary
    let h : f32 = sqrt(atmospherRadiusMmSquared - planetRadiusMmSquared);

    let rho : f32 = h * x_radius;

    let radius : f32 = sqrt(rho * rho + planetRadiusMmSquared);

    let d_min : f32 = atmosphere.atmosphereRadiusMm - radius;
    let d_max : f32 = rho + h;

    let d : f32 = (d_max - d_min) * x_mu + d_min;

    // This boundary condition is important depending on floating point errors
    // We don't need to check radius since it is bounded below by planet radius, and that shouldn't be near 0
    if (d < 0.000000001)
    {
        // mu is ambiguous since we are at the very edge of the atmosphere, where no angle produces valid transmittance
        // values
        return vec2(radius, 1.0);
    }

    let mu : f32 = (h * h - rho * rho - d * d) / (2.0 * radius * d);
    // Equivalenty, mu = (atmospherRadiusMmSquared - radius * radius - d*d) / (2.0 * radius * d)
    // But atmospherRadiusMmSquared and radius * radius are large, so this avoids floating point errors from adding
    // these to the much smaller d * d

    // This clamp is very important
    return vec2<f32>(radius, clamp(mu, -1.0, 1.0));
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
    let centerToIntersectionChord: vec3<f32> = f + b * d;
    let discriminant: f32 = radius * radius - dot(centerToIntersectionChord, centerToIntersectionChord);
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

struct ExtinctionSample
{
    scatteringRayleigh: vec3<f32>,
    scatteringMie: vec3<f32>,
    scatteringOzone: vec3<f32>,

    absorptionRayleigh: vec3<f32>,
    absorptionMie: vec3<f32>,
    absorptionOzone: vec3<f32>,

    // This parameter is redundant, but convenient.
    // It is the sum of all scattering values.
    scattering: vec3<f32>,

    extinction: vec3<f32>,
}

// Ensure altitude and densityScale are the same units.
fn densityExponential(altitude: f32, densityScale: f32) -> f32
{ return exp(-altitude / densityScale); }

// Hardcoded with values for ozone
fn densityTent(altitude_km: f32) -> f32
{ return max(0.0, 1.0 - abs(altitude_km - 25.0) / 15.0); }

// Returned units are per Mm. Take care that this function takes in altitude, NOT radius.
// radius := altitude + planetRadius
fn sampleExtinction(atmosphere: Atmosphere, altitude_Mm: f32) -> ExtinctionSample
{
    let densityRayleigh: f32 = densityExponential(altitude_Mm, atmosphere.densityScaleRayleighMm);
    let scatteringRayleigh: vec3<f32> = atmosphere.scatteringRayleighPerMm * densityRayleigh;
    let absorptionRayleigh: vec3<f32> = atmosphere.absorptionRayleighPerMm * densityRayleigh;

    let densityMie: f32 = densityExponential(altitude_Mm, atmosphere.densityScaleMieMm);
    let scatteringMie: vec3<f32> = atmosphere.scatteringMiePerMm * densityMie;
    let absorptionMie: vec3<f32> = atmosphere.absorptionMiePerMm * densityMie;

    let densityOzone: f32 = densityTent(altitude_Mm * 1000.0);
    let scatteringOzone: vec3<f32> = atmosphere.scatteringOzonePerMm * densityOzone;
    let absorptionOzone: vec3<f32> = atmosphere.absorptionOzonePerMm * densityOzone;

    var extinctionSample: ExtinctionSample;
    extinctionSample.scatteringRayleigh = scatteringRayleigh;
    extinctionSample.scatteringMie = scatteringMie;
    extinctionSample.scatteringOzone = scatteringOzone;

    extinctionSample.absorptionRayleigh = absorptionRayleigh;
    extinctionSample.absorptionMie = absorptionMie;
    extinctionSample.absorptionOzone = absorptionOzone;

    extinctionSample.scattering = scatteringRayleigh + scatteringMie + scatteringOzone;
    extinctionSample.extinction = extinctionSample.scattering + absorptionRayleigh + absorptionMie + absorptionOzone;

    return extinctionSample;
}

@compute @workgroup_size(16, 16, 1) 
fn computeTransmittance(@builtin(global_invocation_id) global_id : vec3<u32>,)
{
    let texel_coord = vec2<u32>(global_id.xy);
    let size = textureDimensions(transmittance_LUT);
    if(texel_coord.x >= size.x || texel_coord.y >= size.y)
    {
        return;
    }
    let uv = vec2<f32>(texel_coord) / vec2<f32>(size);

    let r_mu: vec2<f32> = transmittanceLUT_UV_to_RMu(ATMOSPHERE_GLOBAL, uv);

    let radius: f32 = r_mu.x;
    let direction_cosine: f32 = r_mu.y;

    let origin: vec3<f32> = vec3<f32>(0.0, radius, 0.0);
    let direction: vec3<f32> = vec3<f32>(sqrt(1.0 - direction_cosine * direction_cosine), direction_cosine, 0.0);

    let atmosphereHit: RaySphereHit = raySphereIntersection(origin, direction, ATMOSPHERE_GLOBAL.atmosphereRadiusMm);
    // Could maybe skip this check, since our parameters guarantee we start within the atmosphere
    if(!atmosphereHit.hit)
    {
        textureStore(transmittance_LUT, texel_coord, vec4<f32>(1.0, 0.0, 0.0, 1.0));
        return;
    }

    let distance: f32 = atmosphereHit.t1;

    var transmittance: vec3<f32> = vec3<f32>(1.0);

    let dt: f32 = distance / f32(SAMPLE_COUNT);
    for(var i: u32 = 0; i < SAMPLE_COUNT; i++)
    {
        let t: f32 = distance * (f32(i) + 0.5) / f32(SAMPLE_COUNT);
        let position: vec3<f32> = origin + t * direction;
        let altitude: f32 = length(position) - ATMOSPHERE_GLOBAL.planetRadiusMm;

        let extinction_sample: ExtinctionSample = sampleExtinction(ATMOSPHERE_GLOBAL, altitude);

        transmittance *= exp(-abs(dt) * extinction_sample.extinction);
    }

    textureStore(transmittance_LUT, texel_coord, vec4<f32>(transmittance, 1.0));
}