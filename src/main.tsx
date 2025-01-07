import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, HashRouter } from 'react-router';
import './index.css'
import App from './App.tsx'
import { HelloCube } from './webgpu/HelloCube.tsx'

const root = document.getElementById('root')!;

createRoot(root).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="hello-cube" element={<HelloCube/>}/>
      </Routes>
    </HashRouter>
  </StrictMode>,
)
