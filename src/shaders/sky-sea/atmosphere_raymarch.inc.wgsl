// Contains methods and overloads for raymarching the atmosphere

//// FLAGS MULTISCATTERING ISOTROPIC_PHASE SCATTERING_NONLINEAR_SAMPLE LIGHT_ILLUMINANCE_IS_ONE HIGH_SAMPLE_COUNT

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

    let planet_hit = raySphereIntersection(origin, direction, (*atmosphere).planetRadiusMm);
    let atmosphere_hit = raySphereIntersection(origin, direction, (*atmosphere).atmosphereRadiusMm);

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
    multiScattTransfer: vec3<f32>,
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
    transmittanceLUT: texture_2d<f32>,
//// IF MULTISCATTERING
    multiscatterLUT: texture_2d<f32>,
//// ENDIF
    origin: vec3<f32>,
    direction: vec3<f32>,
    include_ground: bool,
	intersects_ground: bool,
	sample_distance: f32,
) -> ScatteringResult
{
    var result: ScatteringResult;
    result.luminance = vec3<f32>(0.0);
    result.multiScattTransfer = vec3<f32>(0.0);

	if(sample_distance == 0.0)
	{
		return result;
	}

    // This is the direction of the incoming light, which is the light we are interested in computing the magnitude of.
    // For the purposes of calculating phase functions, this is the direction we want to use.
    let scatteringDir = -direction;

    let start_radius: f32 = length(origin);
    let start_mu: f32 = dot(origin, direction) / (length(origin) * length(direction));
    let start_mu_light: f32 = dot(origin, -(*light).forward) / (length(origin) * length((*light).forward));
    let nu: f32 = dot(-(*light).forward, direction) / (length((*light).forward) * length(direction));

    let originStep = RaymarchStep(start_radius, start_mu, start_mu_light, nu);

    // We estimate the integral in Equation (1) of Hillaire's paper.

    const ISOTROPIC_PHASE: f32 = 1.0 / (4.0 * PI);

//// IF HIGH_SAMPLE_COUNT
    const SAMPLE_COUNT = 256.0;
//// ELSE
    const SAMPLE_COUNT = 16.0;
//// ENDIF

    let dT: f32 = 1.0 / SAMPLE_COUNT;
    let d_sample_distance: f32 = sample_distance * dT;
    for (var i = 0u; f32(i) < SAMPLE_COUNT; i++)
    {
        var tBegin: f32 = f32(i) * dT;
        var tEnd: f32 = f32(i + 1) * dT;

//// IF SCATTERING_NONLINEAR_SAMPLE
        tBegin = tBegin * tBegin;
        tEnd = tEnd * tEnd;
//// ENDIF

        tBegin = tBegin * sample_distance;
        tEnd = min(tEnd * sample_distance, sample_distance);

        let t: f32 = mix(tBegin, tEnd, 0.5);

        let sampleStep: RaymarchStep = stepRadiusMu(originStep, tBegin);
        let midwayStep: RaymarchStep = stepRadiusMu(originStep, tEnd);

        let altitude = sampleStep.radius - (*atmosphere).planetRadiusMm;
        let extinctionSample: ExtinctionSample = sampleExtinction(atmosphere, altitude);

        // Terms of Equation (3) we assume to not vary over the path segment

        // We could accumulate samples across loops like:
        //
        // const vec3 sampleTransmittance = exp(-dSampleDistance * extinctionSample.extinction);
        // ... compute luminance using transmittance ...
        // transmittance *= sampleTransmittance;
        //
        // But at the cost of performance, resampling the transmittance LUT is more accurate for larger step sizes

        let transmittanceToBegin = sampleTransmittanceLUT_RayMarchStep(transmittanceLUT, lut_sampler, atmosphere, originStep, t);
        let incidentCosine = dot((*light).forward, scatteringDir);

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
        let multiscatter = sampleMultiscatterLUT(multiscatterLUT, lut_sampler, atmosphere, sampleStep.radius, sampleStep.mu_light);
//// ELSE
        let multiscatter = vec3<f32>(0.0);
//// ENDIF

        var shadow_count: f32 = 0;
        {
            let horizon_sin = (*atmosphere).planetRadiusMm / sampleStep.radius;
            let horizon_mu = -safeSqrt(1.0 - horizon_sin * horizon_sin);

            shadow_count += f32(sampleStep.mu_light < horizon_mu);
        }
        {
            let horizon_sin = (*atmosphere).planetRadiusMm / midwayStep.radius;
            let horizon_mu = -safeSqrt(1.0 - horizon_sin * horizon_sin);

            shadow_count += f32(midwayStep.mu_light < horizon_mu);
        }

        let transmittance_to_sun = sampleTransmittanceLUT_Sun(transmittanceLUT, lut_sampler, atmosphere, light, sampleStep.radius, sampleStep.mu_light);
        var shadowing = vec3<f32>(transmittance_to_sun * (1.0 - 0.5 * f32(shadow_count)));

        // Integrate transmittance := e^(-extinction(x) * ||x - begin||) from begin to end
        // This is a single interval of the integral in Equation (1) from Hillaire's paper,
        // with all constant terms factored out above
        let transmittanceAlongPath = sampleTransmittanceLUT_Segment(transmittanceLUT, lut_sampler, atmosphere, sampleStep.radius, sampleStep.mu, d_sample_distance, intersects_ground);
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

    if (include_ground && intersects_ground)
    {
        let sampleStep: RaymarchStep = stepRadiusMu(originStep, sample_distance);

        let transmittanceToSurface = sampleTransmittanceLUT_RayMarchStep(transmittanceLUT, lut_sampler, atmosphere, originStep, sample_distance);
        let transmittance_to_sun = sampleTransmittanceLUT_Sun(transmittanceLUT, lut_sampler, atmosphere, light, sampleStep.radius, sampleStep.mu_light);

        let normalDotLight = clamp(sampleStep.mu_light, 0.0, 1.0);

        let diffuse = (*atmosphere).groundAlbedo / PI;

        result.luminance +=
            transmittanceToSurface * transmittance_to_sun * normalDotLight * diffuse
//// IF LIGHT_ILLUMINANCE_IS_ONE
            * 1.0;
//// ELSE
            * (*light).color.rgb * (*light).strength;
//// ENDIF
    }

    return result;
}
