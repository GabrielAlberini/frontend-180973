import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterApp } from './router/RouterApp.jsx'
import "./styles/index.css"
import { Inicio } from './pages/Inicio.jsx'
import { Estado } from './components/Estado.jsx'

// Provedores
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterApp />
  </StrictMode>,
)
