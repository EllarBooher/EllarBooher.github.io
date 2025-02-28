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
