// const mensaje = "Bienvenido a la clase JS"

// console.log(mensaje)

// DOM
// Document Object Model
// Modelo de Objetos del Documento

const html = document

// Modificar textos.
// Cambiar estilos.
// Crear elementos.
// Eliminar elementos.
// Escuchar eventos.

// Referencia
// const titulo = document.querySelector("#titulo-principal")
// const contenedor = document.querySelector("div")
// const edad = Number(prompt("Ingrese su edad"))

// if (edad > 17) {
//   titulo.textContent = "Puedes pasar"
//   titulo.style.color = "green"
//   contenedor.innerHTML = "<p>Está abierto hasta las 18hs.</p>"
// } else {
//   titulo.textContent = "No puedes pasar"
//   titulo.style.color = "red"
//   contenedor.innerHTML = "<p>Para ingresar debes tener más de 18 años.</p>"
// }

const titulo = document.querySelector("h2")
const resultado = document.querySelector("p")
const input = document.querySelector("input")
const formulario = document.querySelector("form")
const passInDb = "pepe123"

console.log(input.value, "<- valor del input al mandar form")

// Evento → una acción real del cliente en el nav
formulario.addEventListener("submit", evento => {
  evento.preventDefault()
  console.log(input.value, "<- valor del input al mandar form")

  resultado.textContent = ""

  if (input.value === passInDb) {
    // formulario.style.display = "none"
    formulario.remove()
    titulo.classList.remove("hide")
  } else {
    resultado.textContent = "❌ Acceso denegado, vuelva a intentarlo."
    // Limpieza de valor de input singular
    // input.value = ""
    formulario.reset()
  }
})