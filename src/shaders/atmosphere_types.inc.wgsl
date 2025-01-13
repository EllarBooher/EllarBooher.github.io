struct Atmosphere
{
    scatteringRayleighPerMm : vec3<f32>,
    densityScaleRayleighMm : f32,
    absorptionRayleighPerMm : vec3<f32>,

    planetRadiusMm : f32,

    scatteringMiePerMm : vec3<f32>,
    densityScaleMieMm : f32,
    absorptionMiePerMm : vec3<f32>,

    atmosphereRadiusMm : f32,

    groundAlbedo : vec3<f32>,

    padding0 : f32,

    scatteringOzonePerMm : vec3<f32>,

    padding1 : f32,

    absorptionOzonePerMm : vec3<f32>,

    padding2 : f32,

    padding3 : vec4<f32>,
}

const ATMOSPHERE_GLOBAL: Atmosphere = Atmosphere(
    vec3<f32>(5.802, 13.558, 33.1),
    0.008, // 8.0 km
    vec3<f32>(0.0), 

    6.360,

    vec3<f32>(3.996),
    0.0012, // 1.2 km
    vec3<f32>(4.40),

    6.420,

    0.3 * vec3<f32>(1.0, 0.75, 0.4),
    0.0,

    vec3<f32>(0.0),
    0.0,

    vec3<f32>(0.650, 1.881, 0.085),
    0.0,
    vec4<f32>(0.0),
);

struct CelestialLight
{
    color: vec3<f32>,
    strength: f32,
    forward: vec3<f32>,
    angularRadius: f32,
}

struct CelestialLightUBO
{
    light: CelestialLight,
}

const LIGHT_GLOBAL = CelestialLight(
    vec3<f32>(1.0),
    6.0,
    vec3<f32>(0.0, -0.1961, 0.98058),
    16.0 / 60.0 * (3.141592653589793 / 180.0),
);