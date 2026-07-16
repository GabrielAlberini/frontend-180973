import { useState } from "react"
import { Contador } from "./Contador.jsx"

const PI = Math.PI

const Estado = () => {
  const [heladoFavorito, setHeladoFavorito] = useState("Kinoto al whisky")
  const [contador, setContador] = useState(0)

  // Mostrar una actualización en la UI

  const handleClick = () => {
    setHeladoFavorito("Dulce de leche")
  }

  const handleClickContador = () => {
    setContador(contador + 1)
  }

  // ¿Cuándo se rerenderiza un componente?

  // cuando recibe una prop
  // cuando se actualiza un estado
  // ❌ cuando se actualiza una variable
  return (
    <>
      <h1>Aguante el {heladoFavorito}</h1>
      <h2>Número PI: {PI}</h2>
      <button onClick={handleClick}>Actualizar variable</button>
      <Contador contador={contador} funcionQueActualizaContador={handleClickContador} />
    </>
  )
}

export { Estado }