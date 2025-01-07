import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css'
import App from './App.tsx'
import HelloTriangle from './webgpu/HelloTriangle.tsx'

const root = document.getElementById('root')!;

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="hello-triangle" element={<HelloTriangle/>}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
