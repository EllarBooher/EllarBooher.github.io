// This file contains shared methods and definitions for raymarching the atmosphere and generating the lookup tables

// Based on:
// "A Scalable and Production Ready Sky and Atmosphere Rendering Technique" by Sébastien Hillaire (2020)
// https://sebh.github.io/publications/egsr2020.pdf
//
// "Precomputed Atmospheric Scattering: a New Implementation" by Eric Bruneton (2017)
// https://ebruneton.github.io/precomputed_atmospheric_scattering

const TRANSMITTANCE_LUT_WIDTH: u32 = 512;
const TRANSMITTANCE_LUT_HEIGHT: u32 = 256;

const MULTISCATTER_LUT_WIDTH: u32 = 512;
const MULTISCATTER_LUT_HEIGHT: u32 = 512;

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
    let atmosphereRadiusMmSquared: f32 = (*atmosphere).atmosphereRadiusMm * (*atmosphere).atmosphereRadiusMm;
    let planetRadiusMmSquared: f32 = (*atmosphere).planetRadiusMm * (*atmosphere).planetRadiusMm;

    // Ground level, horizontal ray distance to atmospheric boundary
    let h: f32 = safeSqrt(atmosphereRadiusMmSquared - planetRadiusMmSquared);

    // Distance to horizon, which is also the exact position the previous horizontal ray starts at
    let rho: f32 = safeSqrt(radius * radius - planetRadiusMmSquared);

    // rho + H = distance to atmosphere boundary when looking at the horizon
    // It represents the distance along the biggest angle (most negative mu) that has nonzero transmittance,
    // since any lower and we intersect the planet
    // This angle changes as the radius does, so this mapping seeks to compress a different range of mu values
    // at any given radius value

    // Distance to edge of atmosphere, with both its min and max values at this given radius.
    let d: f32 = max(-radius * mu + safeSqrt(radius * radius * (mu * mu - 1.0) + atmosphereRadiusMmSquared), 0.0);
    let d_min: f32 = (*atmosphere).atmosphereRadiusMm - radius;
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

    let atmospherRadiusMmSquared : f32 = (*atmosphere).atmosphereRadiusMm * (*atmosphere).atmosphereRadiusMm;
    let planetRadiusMmSquared : f32 = (*atmosphere).planetRadiusMm * (*atmosphere).planetRadiusMm;

    // Ground level, horizontal ray distance to atmospheric boundary
    let h : f32 = safeSqrt(atmospherRadiusMmSquared - planetRadiusMmSquared);

    let rho : f32 = h * x_radius;

    let radius : f32 = safeSqrt(rho * rho + planetRadiusMmSquared);

    let d_min : f32 = (*atmosphere).atmosphereRadiusMm - radius;
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
    // Equivalenty, mu = (atmospherRadiusMmSquared - radius * radius - d*d) / (2.0 * radius * d)
    // But atmospherRadiusMmSquared and radius * radius are large, so this avoids floating point errors from adding
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
        (radius - (*atmosphere).planetRadiusMm) 
            / ((*atmosphere).atmosphereRadiusMm - (*atmosphere).planetRadiusMm), 
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
        (*atmosphere).planetRadiusMm * (1.0002), 
        (*atmosphere).atmosphereRadiusMm * (0.9998), 
        v_unit
    );

    return vec2<f32>(radius, mu_light);
}

fn sampleMultiscatterLUT(
    lut: texture_2d<f32>,
    s: sampler,
    atmosphere: ptr<function,Atmosphere>,
    position: vec3<f32>,
    incidentDirectionLight: vec3<f32>
) -> vec3<f32>
{
    let radius: f32 = length(position);
    let mu_light: f32 = dot(position, -incidentDirectionLight) 
        / (length(position) * length(incidentDirectionLight));

    let uv: vec2<f32> = multiscatterLUT_RMu_to_UV(atmosphere, radius, mu_light);


    return textureSampleLevel(lut, s, uv, 0.0).xyz;
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

    let uv: vec2<f32> = transmittanceLUT_RMu_to_UV(atmosphere, radius, mu);


    return textureSampleLevel(lut, s, uv, 0.0).xyz;
}

fn sampleTransmittanceLUT_Segment(
    lut: texture_2d<f32>,
    s: sampler, 
    atmosphere: ptr<function,Atmosphere>, 
    start: vec3<f32>, 
    end: vec3<f32>
) -> vec3<f32>
{
    // Floats do not have enough range to store the very low transmittance of a ray crossing the longest distances.
    // Thus, a sliver of the transmittance LUT near the horizon is zero when it should be a very small value.
    // Also, rays that point at the planet return a transmittance of exactly 0 making it impossible to use such samples.
    // Thus, we sometimes swap the rays depending on how they are oriented.

    var transmittance = vec3<f32>(0.0);
    let direction: vec3<f32> = normalize(end - start);

    // Proxy for hitting the ground.
    // This check does not necessarily mean the ray hits the ground, but it is safe to flip anyway.
    if (dot(end, direction) < 0.0)
    {
        transmittance = sampleTransmittanceLUT_Ray(lut, s, atmosphere, end, -direction)
                      / sampleTransmittanceLUT_Ray(lut, s, atmosphere, start, -direction);
    }
    else
    {
        transmittance = sampleTransmittanceLUT_Ray(lut, s, atmosphere, start, direction)
                      / sampleTransmittanceLUT_Ray(lut, s, atmosphere, end, direction);
    }

    return clamp(transmittance, vec3<f32>(0.0), vec3<f32>(1.0));
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


    return textureSampleLevel(lut, s, uv, 0.0).xyz;
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
fn sampleExtinction(atmosphere: ptr<function,Atmosphere>, altitude_Mm: f32) -> ExtinctionSample
{
    let densityRayleigh: f32 = densityExponential(altitude_Mm, (*atmosphere).densityScaleRayleighMm);
    let scatteringRayleigh: vec3<f32> = (*atmosphere).scatteringRayleighPerMm * densityRayleigh;
    let absorptionRayleigh: vec3<f32> = (*atmosphere).absorptionRayleighPerMm * densityRayleigh;

    let densityMie: f32 = densityExponential(altitude_Mm, (*atmosphere).densityScaleMieMm);
    let scatteringMie: vec3<f32> = (*atmosphere).scatteringMiePerMm * densityMie;
    let absorptionMie: vec3<f32> = (*atmosphere).absorptionMiePerMm * densityMie;

    let densityOzone: f32 = densityTent(altitude_Mm * 1000.0);
    let scatteringOzone: vec3<f32> = (*atmosphere).scatteringOzonePerMm * densityOzone;
    let absorptionOzone: vec3<f32> = (*atmosphere).absorptionOzonePerMm * densityOzone;

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

// Returns true if the ray hits the sphere with radius in the direction indicated.
// Returns false if the sphere is not hit or if the sphere is behind the ray.
fn raySphereTest(
    rayOrigin: vec3<f32>, 
    rayDirectionNormalized: vec3<f32>, 
    radius: f32
) -> bool
{
    var result: RaySphereHit = raySphereIntersection(rayOrigin, rayDirectionNormalized, radius);
    return result.hit && result.t1 > 0.0;
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

// Compute the distance a ray travels through the atmosphere, stopped by the planet
// Returns 0.0 if origin is outside the atmosphere 
fn rayAtmosphereIntersectionLength(
    atmosphere: ptr<function,Atmosphere>,                   
    origin: vec3<f32>,
    direction: vec3<f32>) -> f32
{
    let hitAtmosphere: RaySphereHit = raySphereIntersection(origin, direction, (*atmosphere).atmosphereRadiusMm);
    
    if (!hitAtmosphere.hit || hitAtmosphere.t1 <= 0.0)
    {
        return 0.0;
    }
    
    let hitPlanet: RaySphereHit = raySphereIntersection(origin, direction, (*atmosphere).planetRadiusMm);

    // If starting outside of atmosphere, move forward
    let t0: f32 = max(0.0, hitAtmosphere.t0);

    var t1: f32 = hitAtmosphere.t1;
    // TODO: Figure out what to do when inside the planet
    if (hitPlanet.hit && hitPlanet.t0 > 0.0)
    {
        // Planet is in front of us
        t1 = min(hitPlanet.t0, t1);
    }

    return t1 - t0;
}

// (float, float) 2d encoding of position + direction
struct RaymarchStep
{
    // Distance from origin, represents (0, radius, 0)
    radius: f32,
    // Cosine of the angle between (0, radius, 0) and implicit direction vector
    mu: f32,
};

// Returns 'start' moved 'stepDistance' units along the implicit direction vector 
fn stepRadiusMu(
    start: RaymarchStep, 
    stepDistance: f32
) -> RaymarchStep
{
    // Consider starting position (0, radius, 0)
    // and step vector of d * (sqrt(1 - mu * mu), mu, 0)

    // When computing changes in radii and mu, we use this method everywhere since norm is preserved upon rotation
    // and all cases of stepping can be reduced to the above two vectors

    var result: RaymarchStep;
    result.radius = safeSqrt(
        stepDistance * stepDistance + 2.0 * start.radius * start.mu * stepDistance
            + start.radius * start.radius
    );
    result.mu = (start.radius * start.mu + stepDistance) / result.radius;

    return result;
}

// Samples a segment, given in RMu coordinates
fn sampleTransmittanceLUT_RayMarchStep(
    lut: texture_2d<f32>,
    s: sampler,
    atmosphere: ptr<function,Atmosphere>,
    start: RaymarchStep,
    stepDistance: f32
) -> vec3<f32>
{
    const STEP_DISTANCE_EPSILON = 0.0000001;
    if (stepDistance < STEP_DISTANCE_EPSILON)
    {
        return vec3<f32>(1.0);
    }

    let end: RaymarchStep = stepRadiusMu(start, stepDistance);

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

fn sampleTransmittanceLUT_Sun(
    transmittance_lut: texture_2d<f32>,
    lut_sampler: sampler,
    atmosphere: ptr<function,Atmosphere>,
    sun: ptr<function,CelestialLight>,
    radius: f32,
    cos_sunZenith: f32) -> vec3<f32>
{
    let sin_sunRadius: f32 = sin((*sun).angularRadius);
    let cos_sunRadius: f32 = cos((*sun).angularRadius);

    /*
    Possible small angle approximation
    const float sin_sunRadius = SUN_ANGULAR_RADIUS_RADIANS;
    const float cos_sunRadius = 1.0;
    */

    // Cos is negative since the horizon zenith varies from PI/2 to PI
    let sin_horizonZenith: f32 = (*atmosphere).planetRadiusMm / radius;
    let cos_horizonZenith: f32 = -safeSqrt(1.0 - sin_horizonZenith * sin_horizonZenith);

    // This sample makes no assumption about ground intersection
    let transmittanceThroughAtmosphere: vec3<f32> = sampleTransmittanceLUT_RadiusMu(
        transmittance_lut, 
        lut_sampler,
        atmosphere, 
        radius, 
        cos_sunZenith
    );

    // angularFactor goes from 1 to 0 as sunZenith varies from horizonZenith - sunRadius to horizonZenith + sunRadius
    // Or as cos(sunZenith) varies from cos(horizonZenith - sunRadius) to cos(horizonZenith + sunRadius)
    // Using angle sum identity, we get that:
    // cos(horizonZenith - sunRadius) = cos(horizonZenith)cos(sunRadius) + sin(sunRadius)sin(horizonZenith)
    // cos(horizonZenith + sunRadius) = cos(horizonZenith)cos(sunRadius) - sin(sunRadius)sin(horizonZenith)

    let angularFactor: f32 = smoothstep(
        -sin_horizonZenith * sin_sunRadius,
        sin_horizonZenith * sin_sunRadius,
        cos_sunZenith - cos_horizonZenith * cos_sunRadius
    );

    return transmittanceThroughAtmosphere * angularFactor;
}