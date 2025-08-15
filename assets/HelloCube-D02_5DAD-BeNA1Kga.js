import{d as n}from"./wgpu-matrix.module-aHNSNER6-BoKif5DB.js";import{y as m}from"./index-CR_DlOrO.js";const g=`struct VertexOut {
  @builtin(position) position : vec4f,
  @location(0) color : vec4f
}
@group(0) @binding(0)
var<uniform> projViewModel: mat4x4<f32>;
@vertex
fn vertex_main(@location(0) position: vec4f,
               @location(1) color: vec4f) -> VertexOut
{
  var output : VertexOut;
  output.position = projViewModel * position;
  output.color = color;
  return output;
}
@fragment
fn fragment_main(fragData: VertexOut) -> @location(0) vec4f
{
  return fragData.color;
}
`;class x{quit=!1;device;pipeline;presentFormat;vertexBuffer;indexBuffer;indexCount;projViewModelBuffer;projViewModelBindGroup;supportedFeatures;destroy(){this.device.destroy()}presentationInterface(){return{device:this.device,format:this.presentFormat}}constructor(e,t){this.device=e,this.presentFormat=t,this.supportedFeatures=e.features;const r=this.device.createShaderModule({code:g}),s=new Float32Array([-1,-1,-1,1,0,0,0,1,1,-1,-1,1,1,0,0,1,1,1,-1,1,1,1,0,1,-1,1,-1,1,0,1,0,1,-1,-1,1,1,0,0,1,1,1,-1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,0,1,1,1]),i=new Uint32Array([0,1,2,0,2,3,1,5,6,1,6,2,2,6,7,2,7,3,4,7,6,4,6,5,0,3,7,0,7,4,0,4,5,0,5,1]);this.indexCount=i.length,this.vertexBuffer=this.device.createBuffer({size:s.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.vertexBuffer,0,s,0,s.length);const u=[{attributes:[{shaderLocation:0,offset:0,format:"float32x4"},{shaderLocation:1,offset:16,format:"float32x4"}],arrayStride:32,stepMode:"vertex"}];this.indexBuffer=this.device.createBuffer({size:i.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),this.device.queue.writeBuffer(this.indexBuffer,0,i,0,i.length);const f=64;this.projViewModelBuffer=this.device.createBuffer({size:f,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const a=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]});this.projViewModelBindGroup=this.device.createBindGroup({layout:a,entries:[{binding:0,resource:{buffer:this.projViewModelBuffer}}]});const d={vertex:{module:r,entryPoint:"vertex_main",buffers:u},fragment:{module:r,entryPoint:"fragment_main",targets:[{format:t}]},primitive:{topology:"triangle-list",cullMode:"back",frontFace:"cw"},layout:this.device.createPipelineLayout({bindGroupLayouts:[a]})};this.pipeline=this.device.createRenderPipeline(d)}setupUI(e){m.forEach(t=>{const r=this.supportedFeatures.has(t);e.add({enabled:r},"enabled").name(t).disable(!0)})}draw(e,t,r){const s=e.createView(),i=60*Math.PI/180,u=n.perspective(i,t,.1,1e3),f=[3,5,10],a=[0,0,0],d=[0,1,0],h=n.lookAt(f,a,d),v=n.axisRotation([1,1,0],r/1e3),c=n.mul(u,n.mul(h,v));this.device.queue.writeBuffer(this.projViewModelBuffer,0,c.buffer,c.byteOffset,c.byteLength);const l=this.device.createCommandEncoder(),B={r:.5,g:.5,b:.5,a:0},o=l.beginRenderPass({colorAttachments:[{clearValue:B,loadOp:"clear",storeOp:"store",view:s}]});o.setPipeline(this.pipeline),o.setVertexBuffer(0,this.vertexBuffer),o.setIndexBuffer(this.indexBuffer,"uint32",0,this.indexBuffer.size),o.setBindGroup(0,this.projViewModelBindGroup),o.drawIndexed(this.indexCount,1,0,0,0),o.end(),this.device.queue.submit([l.finish()])}}const y=(p,e)=>new x(p,e);export{y as HelloCubeAppConstructor};
