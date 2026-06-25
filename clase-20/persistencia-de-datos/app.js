// Crear un formulario con un input de texto tarea 1y un botón "Agregar". Al hacer submit, tomar el valor del input y crear un nuevo elemento <li> dentro de un <ul> con ese texto. Si el input está vacío, mostrar un mensaje de advertencia y no agregar nada. Después de agregar una tarea, limpiar el input automáticamente. dame las resoluciones en js no mas

const form = document.querySelector("form")
const input = document.querySelector("input")
const list = document.querySelector("ul")
const tasks = JSON.parse(localStorage.getItem("tasks")) || []

tasks.forEach((task) => {
  console.log(task)
  list.innerHTML += `<li><input type="checkbox"/>${task} <button>Borrar</button></li>`
})

// callback → función que se ejecuta despues de que sucede algo...
form.addEventListener("submit", (infoEvent) => {
  infoEvent.preventDefault()

  const task = input.value.trim()

  if (task === "") {
    alert("Debes ingresar una tarea.")
    return
  }

  tasks.push(task)

  localStorage.setItem("tasks", JSON.stringify(tasks))

  list.innerHTML += `<li><input type="checkbox"/>${task} <button>Borrar</button></li>`

  form.reset()
})





