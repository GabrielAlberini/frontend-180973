import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </header>
  )
}

export { Header }