const form = document.querySelector("form")
const message = document.querySelector("#message")
const input = document.querySelector("#taskInput")
const listTitle = document.querySelector("#listTitle")
const listOfTasks = document.querySelector("ul")

// Manejo el evento del submit del form
form.addEventListener("submit", (event) => {
  event.preventDefault()

  message.textContent = ""
  if (input.value.trim() === "") {
    message.textContent = "Debes ingresar una tarea."
    return
  }

  const task = input.value.trim()

  listOfTasks.innerHTML += `<li>${task}</li>`

  form.reset()
})
