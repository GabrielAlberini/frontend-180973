import "./App.css"

// componente
const Aplicacion = () => {

  const nombre = ""

  const listaDePeliculas = [
    {
      id: 1,
      nombre: "ET",
      estreno: 1982
    },
    {
      id: 2,
      nombre: "Pulp Fiction",
      estreno: 1994
    }
  ]

  const estilosDelTexto = {
    color: nombre ? "green" : "red",
    backgroundColor: "blue"
  }

  return (
    <>
      {nombre && <button>Cerrar sesión</button>}
      <h1 style={estilosDelTexto}>Mis peliculas favoritas</h1>
      {listaDePeliculas.length > 0
        ? <p className="introduccion">Las mejores peliculas según {nombre}</p>
        : <p className="introduccion">No tienes peliculas agregadas.</p>}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora id impedit quidem repellat molestias ipsum voluptas, error quisquam, animi ullam eius aperiam iure recusandae asperiores officia ad. Eum, est quae.</p>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjzw0XHmCMW8q9yfDE_LETIBF6m-xu3QHk8g&s" alt="" />
      {
        listaDePeliculas.map(pelicula => <div>
          <p>ID: {pelicula.id}</p>
          <h2>{pelicula.nombre}</h2>
          <p>Estreno: {pelicula.estreno}</p>
        </div>)
      }
    </>
  )
}

// Export por defecto
// export default App

// Export nombrado
export { Aplicacion }
