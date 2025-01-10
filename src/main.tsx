import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Comp from './components/comp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Comp/>
  </StrictMode>,
)
