import { useState, createContext, useContext } from "react"
import { persona } from "../data/persona.js"

const { email, password } = persona

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("loginState")) || null)

  const loginUser = (dataUser) => {
    // los datos que ingresa el user coinciden con los que persisten en la db
    if (dataUser.email === email && dataUser.password === password) {
      setUser(true)
      localStorage.setItem("loginState", JSON.stringify(true))
      return true
    } else {
      return false
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("loginState")
    return true
  }

  return (
    <AuthContext.Provider value={{ loginUser, logout, user }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }