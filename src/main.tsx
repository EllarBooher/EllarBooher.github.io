import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, HashRouter } from 'react-router'
import './index.css'
import App from './App.tsx'
import { RendererComponent } from './webgpu/Shared.tsx'
import { NavigationHeader } from './NavigateLink.tsx'
import { HelloCubeApp } from './webgpu/HelloCube.ts'
import { SkySeaApp } from './webgpu/SkySea.ts'

const root = document.getElementById('root')!;

createRoot(root).render(
  <StrictMode>
    <HashRouter>
      <div style={{display:"flex", flexDirection:"column", height: '100vh'}}>
        <div style={{flex: '0 1 auto'}}>  
          <NavigationHeader/>
        </div>
          <Routes>
            <Route index element={<App />} />
            <Route path="hello-cube" element={
              <div style={{flex: 1, overflow: 'hidden'}}>
                <RendererComponent app={HelloCubeApp}/>        
              </div>
            }/>
            <Route path="sky-sea" element={
              <div style={{flex: 1, overflow: 'hidden'}}>
                <RendererComponent app={SkySeaApp}/>        
              </div>
            }/>
          </Routes>

      </div>
    </HashRouter>
  </StrictMode>,
)
