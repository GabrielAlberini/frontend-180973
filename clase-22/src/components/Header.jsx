const Header = (props) => {
  console.log(props, "<- props de header")
  return (
    <header>
      <h1>Mis peliculas favoritas</h1>
      <p>Lista de {props.nombre} {props.apellido}</p>
    </header>
  )
}

export { Header }