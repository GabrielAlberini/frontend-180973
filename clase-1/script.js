const button = document.querySelector("button")

button.addEventListener("click", () => {
  const body = document.body

  if (body.style.backgroundColor === "green") {
    document.body.style.backgroundColor = "white"
  } else {
    document.body.style.backgroundColor = "green"
  }
})