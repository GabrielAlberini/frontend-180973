import { Biografia } from "./components/Biografia.jsx"
import { ListaHobbies } from "./components/ListaHobbies.jsx"
import { ListaTecnologias } from "./components/ListaTecnologias.jsx"
import { Tarjeta } from "./components/Tarjeta.jsx"
import { persona } from "./data/persona.js"

const App = () => {
  const { nombre, edad, ciudad, descripcion, foto, hobbies, tecnologias } = persona

  const dataBio = { nombre, edad, ciudad, descripcion, foto }

  return (
    <>
      <Tarjeta>
        <Biografia data={dataBio} />
        <ListaHobbies hobbies={hobbies} />
        <ListaTecnologias tecnologias={tecnologias} />
      </Tarjeta>
    </>
  )
}

export { App }