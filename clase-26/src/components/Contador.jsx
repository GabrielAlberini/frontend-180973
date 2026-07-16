
const Contador = ({ contador, funcionQueActualizaContador }) => {
  return (
    <>
      <p>Contador:{contador}</p>
      <button onClick={funcionQueActualizaContador}>Sumar contador</button>
    </>
  )
}

export { Contador }