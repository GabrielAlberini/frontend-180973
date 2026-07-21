import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ThemeContext } from "../context/ThemeContext"
import { AuthContext } from "../context/AuthContext"

const Header = () => {

  const { darkTheme, toggleTheme } = useContext(ThemeContext)

  const { user, logout } = useContext(AuthContext)

  const navigate = useNavigate()

  const handleLogout = () => {
    const validate = confirm("Está seguro que quieres cerrar sesión?")

    if (validate) {
      const respuesta = logout()
      if (respuesta) {
        navigate("/login")
      }
    }
  }

  return (
    <header className={darkTheme && "dark-theme"}>
      <nav>
        <ul>
          {!user && <li><Link to="/login">Login</Link></li>}
          {user && <li><button onClick={handleLogout}>Cerrar sesión</button></li>}
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
          <li><button onClick={toggleTheme}>{darkTheme ? "🌞" : "🌚"}</button></li>
          <p>{darkTheme ? "tema oscuro" : "tema claro"}</p>
        </ul>
      </nav>
    </header>
  )
}

export { Header }