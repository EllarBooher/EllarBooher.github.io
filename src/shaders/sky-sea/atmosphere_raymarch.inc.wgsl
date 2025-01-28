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
//// IF MULTISCATTERING
    multiscatter_lut: texture_2d<f32>,
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

    // We estimate the integral in Equation (1) of Hillaire's paper.

    const ISOTROPIC_PHASE: f32 = 1.0 / (4.0 * PI);

//// IF HIGH_SAMPLE_COUNT
    const SAMPLE_COUNT = 256.0;
//// ELSE
    const SAMPLE_COUNT = 64.0;
//// ENDIF

	var t: f32 = 0.0;
	var d_t: f32 = 0.0;
    for (var s = 0.0; s < SAMPLE_COUNT; s += 1.0)
    {
//// IF SCATTERING_NONLINEAR_SAMPLE
		{
			// quadratic distribution
        	var t_begin = s / SAMPLE_COUNT;
        	var t_end = (s + 1.0) / SAMPLE_COUNT;
			t_begin = sample_distance * t_begin * t_begin;
			t_end = sample_distance * t_end * t_end;
			d_t = t_end - t_begin;
			t = mix(t_begin, t_end, T_SUBSTEP_NONLINEAR);
		}
//// ELSE
		{
			// linear distribution
			let t_new = sample_distance * (s + T_SUBSTEP_LINEAR) / SAMPLE_COUNT;
			d_t = t_new - t;
			t = t_new;
		}
//// ENDIF

        let sample_step: RaymarchStep = stepRadiusMu(origin_step, t);

        let altitude = sample_step.radius - (*atmosphere).planet_radius_Mm;
        let extinction_sample: ExtinctionSample = sampleExtinction(atmosphere, altitude);

        // Terms of Equation (3) we assume to not vary over the path segment

        // We could accumulate samples across loops like:
        //
        // const vec3 sampleTransmittance = exp(-dSampleDistance * extinction_sample.extinction);
        // ... compute luminance using transmittance ...
        // transmittance *= sampleTransmittance;
        //
        // But at the cost of performance, resampling the transmittance LUT is more accurate for larger step sizes

        let transmittance_to_t_begin = sampleTransmittanceLUT_RayMarchStep(transmittance_lut, lut_sampler, atmosphere, origin_step, t);

//// IF ISOTROPIC_PHASE
        let phase_times_scattering = extinction_sample.scattering * ISOTROPIC_PHASE;
//// ELSE
        // Ozone does not scatter light normally, so we arbitrarily use rayleigh's phase function in case ozone's scattering
        // coefficient is nonzero
        let phase_times_scattering: vec3<f32> =
            extinction_sample.scattering_rayleigh * phaseRayleigh(incident_cosine)
            + extinction_sample.scattering_mie * phaseMie(incident_cosine, 0.8)
            + extinction_sample.scattering_ozone * phaseRayleigh(incident_cosine);
//// ENDIF

//// IF MULTISCATTERING
        let multiscatter = sampleMultiscatterLUT(multiscatter_lut, lut_sampler, atmosphere, sample_step.radius, sample_step.mu_light);
//// ELSE
        let multiscatter = vec3<f32>(0.0);
//// ENDIF

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
        let transmittance_along_path = sampleTransmittanceLUT_Segment(transmittance_lut, lut_sampler, atmosphere, sample_step.radius, sample_step.mu, d_t, intersects_ground);
        let scattering_illuminance_integral = (vec3(1.0) - transmittance_along_path) / extinction_sample.extinction;

        result.luminance +=
            (phase_times_scattering * shadowing + multiscatter * extinction_sample.scattering)
            * scattering_illuminance_integral * transmittance_to_t_begin
//// IF LIGHT_ILLUMINANCE_IS_ONE
            * 1.0;
//// ELSE
            * (*light).color.rgb * (*light).strength;
//// ENDIF
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
//// IF LIGHT_ILLUMINANCE_IS_ONE
            * 1.0;
//// ELSE
            * (*light).color.rgb * (*light).strength;
//// ENDIF
    }

    return result;
}
