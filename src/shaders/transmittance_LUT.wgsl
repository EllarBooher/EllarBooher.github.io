@group(0) @binding(0) var transmittance_LUT: texture_storage_2d<rgba32float, write>;

@compute @workgroup_size(32, 32, 1) 
fn computeTransmittance(@builtin(global_invocation_id) global_id : vec3<u32>,)
{
    let texelCoord = vec2<u32>(global_id.xy);
    let size = textureDimensions(transmittance_LUT);
    if(texelCoord.x >= size.x || texelCoord.y >= size.y)
    {
        return;
    }
    let uv = vec2<f32>(size) / texelCoord;
    textureStore(transmittance_LUT, texelCoord, vec4<f32>(uv, 0.0, 1.0));
}