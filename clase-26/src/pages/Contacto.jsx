import { use, useState } from "react"

const Contacto = () => {
  const [email, setEmail] = useState("")
  const [mensaje, setMensaje] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(false)

    if (email.endsWith("@yahoo.com")) {
      setError(true)
      return
    }

    const nuevoMensaje = {
      email: email,
      mensaje: mensaje
    }

    console.log(nuevoMensaje)
    setEmail("")
    setMensaje("")
  }

  return (
    <section className="contacto">
      <h2>Contactame</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Ingrese el correo electrónico:
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        {error && <span>Email invalido</span>}

        <label>
          Ingrese su mensaje:
          <textarea
            onChange={(e) => setMensaje(e.target.value)}
            value={mensaje}
          ></textarea>
        </label>

        <button>Enviar</button>
      </form>
    </section>
  )
}

export { Contacto }