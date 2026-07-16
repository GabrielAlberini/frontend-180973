import { useState } from "react"
import { Biografia } from "../components/Biografia.jsx"
import { ListaHobbies } from "../components/ListaHobbies.jsx"
import { ListaTecnologias } from "../components/ListaTecnologias.jsx"
import { Tarjeta } from "../components/Tarjeta.jsx"
import { persona } from "../data/persona.js"
import { Titulo } from "../components/Titulo.jsx"

const { nombre, edad, ciudad, descripcion, foto, hobbies, tecnologias } = persona

const Inicio = () => {
  const [hobby, setHobby] = useState("")
  const [listHobbies, setListHobbies] = useState(hobbies)
  const [user, setUser] = useState(false)
  const [updating, setUpdating] = useState(false)
  const [hobbyToUpdate, setHobbyToUpdate] = useState(null)

  const dataBio = { nombre, edad, ciudad, descripcion, foto }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (hobby.trim() === "") {
      alert("Debes ingresar un hobby valido")
      return
    }

    if (hobby.length < 2) {
      alert("El hobby tiene que ser mayor a 2 caracteres")
      return
    }

    if (listHobbies.find(nameHobby => nameHobby.toLowerCase() === hobby.toLowerCase())) {
      alert("No puedes tener 2 hobbies iguales xd")
      return
    }

    if (!updating) {
      setListHobbies([...listHobbies, hobby])
      setHobby("")
    } else {
      setListHobbies(listHobbies.map(nameHobby => nameHobby === hobbyToUpdate ? hobby : nameHobby))
      setHobby("")
      setUpdating(false)
    }
  }

  const deleteHobby = (name) => {
    setListHobbies(listHobbies.filter(hobby => hobby != name))
  }

  const updateHobby = (nameHobbyToUpdate) => {
    setUpdating(true)
    setHobby(nameHobbyToUpdate)
    setHobbyToUpdate(nameHobbyToUpdate)
  }

  return (
    <>
      <Tarjeta>
        <Biografia data={dataBio} />
        <Titulo contenido={"Hobbies"} color={"green"} />
        {
          user && <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Ingrese nuevo hobby"
              onChange={(event) => setHobby(event.target.value)}
              value={hobby}
            />
            <button>{updating ? "Actualizar" : "Agregar"}</button>
          </form>
        }
        <ListaHobbies
          hobbies={listHobbies}
          user={user}
          deleteHobby={deleteHobby}
          updateHobby={updateHobby}
        />
        <Titulo contenido="Tecnologias" />
        {user && <form>
          <input type="text" placeholder="Ingrese nueva tecnología" />
          <button>Agregar</button>
        </form>}
        <ListaTecnologias tecnologias={tecnologias} />
      </Tarjeta>
    </>
  )
}

export { Inicio }




