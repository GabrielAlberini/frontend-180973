import { listaDePeliculas } from "../data/peliculas.js"
import { Header } from "../components/Header.jsx"
import { Footer } from "../components/Footer.jsx"

const Home = (props) => {
  console.log(props, "<- props de home")
  return (
    <>
      <Header nombre="Pepe" apellido="Alberini" />
      <main>
        <h2>Lista de peliculas</h2>
        <section>
          {
            listaDePeliculas.map((pelicula) => <div key={pelicula.id}>
              <p>ID: {pelicula.id}</p>
              <p>Nombre: {pelicula.nombre}</p>
              <p>Director: {pelicula.director}</p>
            </div>)
          }
        </section>
      </main>
      <Footer />
    </>
  )
}

export { Home }