import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, HashRouter } from 'react-router';
import './index.css'
import App from './App.tsx'
import { HelloCube } from './webgpu/HelloCube.tsx'
import { NavigationHeader } from './NavigateLink.tsx';

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
                <HelloCube/>        
              </div>
            }/>
          </Routes>

      </div>
    </HashRouter>
  </StrictMode>,
)
