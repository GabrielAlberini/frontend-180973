const container = document.querySelector("div")
const input = document.querySelector("input")
const button = document.querySelector("button")
// const body = document.querySelector("body")
const body = document.body

// botón → click → addEventListener

button.addEventListener("click", () => {
  body.classList.toggle("dark")
})

container.addEventListener("click", () => {
  alert("Hiciste click!")
})

// container.addEventListener("mouseenter", () => {
//   alert("Ingreso el mouse...")
// })

// container.addEventListener("mouseleave", () => {
//   alert("Se fue el mouse...")
// })

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    alert("Apretaste el Enter...")
  }
})