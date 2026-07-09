import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Inicio } from "../pages/Inicio.jsx"
import { Contacto } from "../pages/Contacto.jsx"
import { NoSeEncuentra } from "../pages/NoSeEncuentra.jsx"
import { Header } from "../components/Header.jsx"

// El router app va a controlar condicionalmente que componente renderizar basado en la ruta de navegación


// "/" → <Inicio />
// "/contacto" → <Contacto />

// componentes granulares → ListaHobbies, Titulo, Tecnologia
// compoenente de página → App

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NoSeEncuentra />} />
      </Routes>
    </BrowserRouter>
  )
}

export { RouterApp }