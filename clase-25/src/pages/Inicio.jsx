import { useState } from "react"
import { Biografia } from "../components/Biografia.jsx"
import { ListaHobbies } from "../components/ListaHobbies.jsx"
import { ListaTecnologias } from "../components/ListaTecnologias.jsx"
import { Tarjeta } from "../components/Tarjeta.jsx"
import { persona } from "../data/persona.js"

const { nombre, edad, ciudad, descripcion, foto, hobbies, tecnologias } = persona

const Inicio = () => {
  const [hobby, setHobby] = useState()
  const [listHobbies, setListHobbies] = useState(hobbies)

  const dataBio = { nombre, edad, ciudad, descripcion, foto }

  const handleSubmit = (event) => {
    event.preventDefault()
    // estado hobby → nuevo hobby
    // hobbies → array de pasatiempos de persona
    // const persona = {hobbies: []}

    if (hobby.trim() === "") {
      alert("Debes ingresar un hobby valido")
      return
    }

    setListHobbies([...listHobbies, hobby])
    setHobby("")
  }

  return (
    <>
      <Tarjeta>
        <Biografia data={dataBio} />
        <ListaHobbies hobbies={listHobbies} />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ingrese nuevo hobby"
            onChange={(event) => setHobby(event.target.value)}
            value={hobby}
          />
          <button>Agregar</button>
        </form>
        <ListaTecnologias tecnologias={tecnologias} />
        <form>
          <input type="text" placeholder="Ingrese nueva tecnología" />
          <button>Agregar</button>
        </form>
      </Tarjeta>
    </>
  )
}

export { Inicio }