import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, HashRouter, Navigate } from 'react-router'
import './index.css'
import App from './App.tsx'
import { RendererComponent } from './webgpu/Shared.tsx'
import { NavigationHeader } from './NavigateLink.tsx'

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
            <Route path="webgpu-samples" element={
              <div style={{flex: 1, overflow: 'hidden'}}>
                <RendererComponent/>        
              </div>
            }/>
            <Route path="*" element={<Navigate to="/" replace/>}/>
          </Routes>

      </div>
    </HashRouter>
  </StrictMode>,
)
