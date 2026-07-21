import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterApp } from './router/RouterApp.jsx'
import { Inicio } from './pages/Inicio.jsx'
import { Estado } from './components/Estado.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import "./styles/index.css"
import { ThemeProvider } from './context/ThemeContext.jsx'

// Provedores
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterApp />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
