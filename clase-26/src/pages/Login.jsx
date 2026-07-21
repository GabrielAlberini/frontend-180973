import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { loginUser } = useContext(AuthContext)

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const respuesta = loginUser({ email, password })

    if (respuesta) {
      navigate("/")
      setEmail("")
      setPassword("")
    } else {
      alert("Credenciales incorrectas ❌")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Ingrese su correo electrónico"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="password"
        placeholder="Ingrese su contraseña"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button>Ingresar</button>
    </form>
  )
}

export { Login }