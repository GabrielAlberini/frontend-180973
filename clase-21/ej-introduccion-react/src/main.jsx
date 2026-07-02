import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Aplicacion } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Aplicacion />
  </StrictMode>,
)
