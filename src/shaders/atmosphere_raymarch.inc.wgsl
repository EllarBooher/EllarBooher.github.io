// Contains methods and overloads for raymarching the atmosphere

//// FLAGS MULTISCATTERING ISOTROPIC_PHASE SCATTERING_NONLINEAR_SAMPLE LIGHT_ILLUMINANCE_IS_ONE

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
*/

// Make sure to include atmosphere_common first

struct CelestialLight
{
    color: vec3<f32>,
    forward: vec3<f32>,
    strength: f32,
    angularRadius: f32,
}

const LIGHT_GLOBAL = CelestialLight(
    vec3<f32>(1.0),
    vec3<f32>(0.0, -0.1961, 0.98058),
    6.0,
    16.0 / 60.0 * (3.141592653589793 / 180.0),
);

fn sampleTransmittanceLUT_Sun(
    transmittance_lut: texture_2d<f32>,
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

struct ScatteringResult
{
    luminance: vec3<f32>,
    multiScattTransfer: vec3<f32>,
}

// TODO: should compile-time optional parameters just be accessed by the global resource introduced before this file is included?
fn computeLuminanceScatteringIntegral(
    atmosphere: ptr<function, Atmosphere>,
    light:  ptr<function, CelestialLight>,                                                
    transmittanceLUT: texture_2d<f32>,
//// IF MULTISCATTERING
    multiscatterLUT: texture_2d<f32>,
//// ENDIF
    inOrigin: vec3<f32>,
    inDirection: vec3<f32>,
    includeGround: bool,
) -> ScatteringResult
{
    var result: ScatteringResult;
    result.luminance = vec3<f32>(0.0);
    result.multiScattTransfer = vec3<f32>(0.0);

    let direction = normalize(inDirection);

    // This is the direction of the incoming light, which is the light we are interested in computing the magnitude of.
    // For the purposes of calculating phase functions, this is the direction we want to use.
    let scatteringDir = -direction;

    let hitPlanet = raySphereIntersection(inOrigin, direction, (*atmosphere).planetRadiusMm);
    let hitAtmosphere = raySphereIntersection(inOrigin, direction, (*atmosphere).atmosphereRadiusMm);

    if (!hitAtmosphere.hit || (hitPlanet.hit && (hitPlanet.t0 < 0.0 && hitPlanet.t1 > 0.0)))
    {
        return result;
    }

    var sampleDistance: f32 = 0.0;

    // Assuming the planet was hit, we have hitAtmosphere.t0 < hitPlanet.t0 < hitPlanet.t1 < hitAtmosphere.t1
    // If this assumption ever fails (such as 0 atmosphere?), this method needs to be reworked anyway to skip some
    // calculations

    if (hitPlanet.hit && hitPlanet.t0 > 0.0)
    {
        sampleDistance = hitPlanet.t0;
    }
    else
    {
        sampleDistance = hitAtmosphere.t1;
    }

    var origin = inOrigin;
    if (hitAtmosphere.t0 > 0.0)
    {
        origin += hitAtmosphere.t0 * direction;
        sampleDistance -= hitAtmosphere.t0;
    }

    let radius: f32 = length(origin);
    let mu: f32 = dot(origin, direction) / (length(origin) * length(direction));

    let originStep = RaymarchStep(radius, mu);

    // We estimate the integral in Equation (1) of Hillaire's paper.

    const ISOTROPIC_PHASE: f32 = 1.0 / (4.0 * PI);

    const SAMPLE_COUNT: u32 = 32;

    let dSampleDistance: f32 = sampleDistance / f32(SAMPLE_COUNT);
    for (var i = 0u; i < SAMPLE_COUNT; i++)
    {
        var tBegin: f32 = f32(i) / f32(SAMPLE_COUNT);
        var tEnd: f32 = f32(i + 1) / f32(SAMPLE_COUNT);

//// IF SCATTERING_NONLINEAR_SAMPLE
        tBegin = tBegin * tBegin;
        tEnd *= tEnd * tEnd;
//// ENDIF

        tBegin = tBegin * sampleDistance;
        tEnd = min(tEnd * sampleDistance, sampleDistance);
        tBegin = f32(i) * dSampleDistance;
        tEnd = f32(i + 1) * dSampleDistance;

        let t: f32 = mix(tBegin, tEnd, 0.5);
        let begin = origin - tBegin * scatteringDir;
        let samplePosition = origin - t * scatteringDir;
        let end = origin - tEnd * scatteringDir;

        let sampleStep: RaymarchStep = stepRadiusMu(originStep, t);

        let altitude = length(begin) - (*atmosphere).planetRadiusMm;

        let extinctionSample: ExtinctionSample = sampleExtinction(atmosphere, altitude);

        // Terms of Equation (3) we assume to not vary over the path segment

        // We could accumulate samples across loops like:
        //
        // const vec3 sampleTransmittance = exp(-dSampleDistance * extinctionSample.extinction);
        // ... compute luminance using transmittance ...
        // transmittance *= sampleTransmittance;
        //
        // But at the cost of performance, resampling the transmittance LUT is more accurate for larger step sizes

        let transmittanceToBegin = sampleTransmittanceLUT_RayMarchStep(transmittanceLUT, atmosphere, originStep, t);

        {
            let incidentCosine = dot((*light).forward, scatteringDir);
            let mu_light = dot(samplePosition, -(*light).forward) / length(samplePosition);

//// IF ISOTROPIC_PHASE
            let phaseTimesScattering = extinctionSample.scattering * ISOTROPIC_PHASE;
//// ELSE
            // Ozone does not scatter light normally, so we arbitrarily use rayleigh's phase function in case ozone's scattering
            // coefficient is nonzero
            let phaseTimesScattering: vec3<f32> = 
                extinctionSample.scatteringRayleigh * phaseRayleigh(incidentCosine)
                + extinctionSample.scatteringMie * phaseMie(incidentCosine, 0.8)
                 + extinctionSample.scatteringOzone * phaseRayleigh(incidentCosine);
//// ENDIF

//// IF MULTISCATTERING
            let multiscatter = sampleMultiscatterLUT(multiscatterLUT, atmosphere, samplePosition, (*light).forward);
//// ELSE
            let multiscatter = vec3<f32>(0.0);
//// ENDIF

            let transmittanceToSun = sampleTransmittanceLUT_Sun(transmittanceLUT, atmosphere, light, sampleStep.radius, mu_light);

            let shadowBegin = f32(raySphereTest(begin, -(*light).forward, (*atmosphere).planetRadiusMm));
            let shadowMiddle = f32(raySphereTest(0.5 * (begin + end), -(*light).forward, (*atmosphere).planetRadiusMm));
            let shadowEnd = f32(raySphereTest(end, -(*light).forward, (*atmosphere).planetRadiusMm));
            let shadowing = transmittanceToSun * (1.0 - 0.25 * (shadowBegin + 2.0 * shadowMiddle + shadowEnd));

            // Integrate transmittance := e^(-extinction(x) * ||x - begin||) from begin to end
            // This is a single interval of the integral in Equation (1) from Hillaire's paper,
            // with all constant terms factored out above
            let transmittanceAlongPath = sampleTransmittanceLUT_Segment(transmittanceLUT, atmosphere, begin, end);
            let scatteringIlluminanceIntegral = (vec3(1.0) - transmittanceAlongPath) / extinctionSample.extinction;

            result.luminance += 
                (phaseTimesScattering * shadowing + multiscatter * extinctionSample.scattering)
                * scatteringIlluminanceIntegral * transmittanceToBegin 
//// IF LIGHT_ILLUMINANCE_IS_ONE
                * 1.0;
//// ELSE
                * (*light).color.rgb * (*light).strength;
//// ENDIF
            result.multiScattTransfer += extinctionSample.scattering * scatteringIlluminanceIntegral * transmittanceToBegin;
        }
    }

    if (includeGround && hitPlanet.hit && hitPlanet.t0 > 0.0)
    {
        let sampleStep: RaymarchStep = stepRadiusMu(originStep, sampleDistance);

        let samplePosition = origin + hitPlanet.t0 * direction;
        let mu_light = dot(samplePosition, -(*light).forward) / length(samplePosition);

        let transmittanceToSurface = sampleTransmittanceLUT_RayMarchStep(transmittanceLUT, atmosphere, originStep, hitPlanet.t0);
        let transmittanceToSun = sampleTransmittanceLUT_Sun(transmittanceLUT, atmosphere, light, sampleStep.radius, mu_light);

        let normalDotLight = clamp(mu_light, 0.0, 1.0);

        let diffuse = (*atmosphere).groundAlbedo / PI;

        result.luminance += 
            transmittanceToSurface * transmittanceToSun * normalDotLight * diffuse
//// IF LIGHT_ILLUMINANCE_IS_ONE
            * 1.0;
//// ELSE
            * (*light).color.rgb * (*light).strength;
//// ENDIF
    }

    return result;
}