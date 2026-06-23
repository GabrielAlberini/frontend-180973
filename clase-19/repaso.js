const alumnos = [
  {
    id: 1,
    name: "Germán",
    note: 8
  },
  {
    id: 2,
    name: "Gervasio",
    note: 10,
  },
  {
    id: 3,
    name: "Claudia",
    note: 1
  }
]

// Encontrar el primer alumno que comience con "G" aprobado
const alumnosAprobados = alumnos.filter(alumno => alumno.note > 6)

const primerAprobado = alumnosAprobados.find((alumno) => alumno.name.startsWith("G"))

console.log(primerAprobado)

// ------------- REPASO FUNCIONES -----------------

function sumar(a, b) {
  return a + b
}

console.log(sumar(1, 2))

const sumar2 = (a, b) => a + b

console.log(sumar2(2, 3))

const saludar = (nombre, apellido) => `Hola ${nombre} ${apellido}!`

console.log(saludar("Pepe", "Perez"))








