import { Link } from "react-router-dom"

const NoSeEncuentra = () => {
  return (
    <>
      <h1>Página de not found - 404</h1>
      <Link to="/">Volver al inicio</Link>
    </>
  )
}

export { NoSeEncuentra }