import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

const Tarjeta = (props) => {

  const { darkTheme } = useContext(ThemeContext)

  return (
    <>
      <div className={`card ${darkTheme && "dark-theme"}`}>
        {props.children}
      </div>
    </>
  )
}

export { Tarjeta }