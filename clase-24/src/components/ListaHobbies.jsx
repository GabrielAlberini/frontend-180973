import { Hobby } from "./Hobby.jsx"
import { Titulo } from "./Titulo.jsx"

const ListaHobbies = ({ hobbies }) => {
  return (
    <>
      <Titulo contenido={"Hobbies"} color={"green"} />
      <ul>
        {
          hobbies.map((hobby) => <Hobby nombre={hobby} />)
        }
      </ul>
    </>
  )
}

export { ListaHobbies }