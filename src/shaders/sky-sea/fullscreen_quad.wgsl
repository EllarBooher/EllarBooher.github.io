// Call this in a render pass, passing in an index buffer [0, 1, 2, 0, 2, 3]

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
