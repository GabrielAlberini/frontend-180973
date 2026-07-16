import { Tecnologia } from "./Tecnologia"

const ListaTecnologias = ({ tecnologias }) => {
  return (
    <ul>
      {
        tecnologias.map((tecnologia) => <Tecnologia key={tecnologia} nombre={tecnologia} />)
      }
    </ul>
  )
}

export { ListaTecnologias }