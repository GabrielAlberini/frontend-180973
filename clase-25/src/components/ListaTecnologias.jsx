import { Tecnologia } from "./Tecnologia"
import { Titulo } from "./Titulo"

const ListaTecnologias = ({ tecnologias }) => {
  return (
    <>
      <Titulo contenido={"Tecnologias favoritas"} color={"yellowgreen"} />
      <ul>
        {
          tecnologias.map((tecnologia) => <Tecnologia key={tecnologia} nombre={tecnologia} />)
        }
      </ul>
    </>
  )
}

export { ListaTecnologias }