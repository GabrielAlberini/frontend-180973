const alumnos = ["Juan", "Ana", "Pedro"]

for (let i = 0; i < alumnos.length; i++) {
  console.log(alumnos[i])
}

alumnos.push("Mariano")

console.log(alumnos)

const telefonos = ["+541234123123", "+5412342345345", "+341234234234"]

// callbackfn → función
telefonos.forEach((telefono) => {
  if (telefono.startsWith("+34")) {
    console.log(`Este número es de ESP: ${telefono}`)
  }
})

const listaAlumnos = [
  {
    id: 1,
    nombre: "Mariana",
    nota: 10
  },
  {
    id: 2,
    nombre: "Jacinto",
    nota: 3
  },
  {
    id: 3,
    nombre: "Matias",
    nota: 7
  }
]

// const aprobados = []

// listaAlumnos.forEach((alumno) => {
//   if (alumno.nota >= 7) {
//     aprobados.push(alumno)
//   }
// })

// console.log(aprobados)

// FILTER ES UN BUCLE
// filter() → método de array que CREA un nuevo array con los elementos filtrados
const listaAprobados = listaAlumnos.filter((alumno) => alumno.nota >= 7)

const colores = ["rojo", "azul", "amarillo", "plateado"]

const coloresFiltrados = colores.filter((color) => color.startsWith("a") && color.endsWith("o"))

console.log(coloresFiltrados)

// FIND ES UN BUCLE
// find() → método de array que RETORNA el primer elemento encontrado (es el original)

const usuarios = [
  { id: 1, nombre: "Juan", apellido: "Pérez" },
  { id: 2, nombre: "María", apellido: "Gómez" },
  { id: 3, nombre: "Carlos", apellido: "Rodríguez" },
  { id: 4, nombre: "Ana", apellido: "Fernández" },
  { id: 5, nombre: "Luis", apellido: "Martínez" },
  { id: 6, nombre: "Sofía", apellido: "López" },
  { id: 7, nombre: "Diego", apellido: "Sánchez" },
  { id: 8, nombre: "Valentina", apellido: "Ramírez" },
  { id: 9, nombre: "Martín", apellido: "Torres" },
  { id: 10, nombre: "Lucía", apellido: "Flores" },
  { id: 11, nombre: "Javier", apellido: "Acosta" },
  { id: 12, nombre: "Camila", apellido: "Morales" },
  { id: 13, nombre: "Andrés", apellido: "Rojas" },
  { id: 14, nombre: "Paula", apellido: "Silva" },
  { id: 15, nombre: "Federico", apellido: "Herrera" },
  { id: 16, nombre: "Julieta", apellido: "Castro" },
  { id: 17, nombre: "Nicolás", apellido: "Ortega" },
  { id: 18, nombre: "Florencia", apellido: "Vega" },
  { id: 19, nombre: "Tomás", apellido: "Reyes" },
  { id: 20, nombre: "Agustina", apellido: "Navarro" },
  { id: 21, nombre: "Matías", apellido: "Molina" },
  { id: 22, nombre: "Carla", apellido: "Suárez" },
  { id: 23, nombre: "Leandro", apellido: "Benítez" },
  { id: 24, nombre: "Micaela", apellido: "Cabrera" },
  { id: 25, nombre: "Gabriel", apellido: "Gutiérrez" },
  { id: 26, nombre: "Milagros", apellido: "Peralta" },
  { id: 27, nombre: "Ezequiel", apellido: "Ponce" },
  { id: 28, nombre: "Rocío", apellido: "Campos" },
  { id: 29, nombre: "Franco", apellido: "Ibarra" },
  { id: 30, nombre: "Martina", apellido: "Aguirre" },
  { id: 31, nombre: "Cristian", apellido: "Medina" },
  { id: 32, nombre: "Belén", apellido: "Nuñez" },
  { id: 33, nombre: "Alan", apellido: "Farías" },
  { id: 34, nombre: "Victoria", apellido: "Quiroga" },
  { id: 35, nombre: "Bruno", apellido: "Godoy" },
  { id: 36, nombre: "Josefina", apellido: "Correa" },
  { id: 37, nombre: "Facundo", apellido: "Mansilla" },
  { id: 38, nombre: "Candela", apellido: "Luna" },
  { id: 39, nombre: "Nahuel", apellido: "Ríos" },
  { id: 40, nombre: "Abril", apellido: "Paz" },
  { id: 41, nombre: "Santiago", apellido: "Varela" },
  { id: 42, nombre: "Malena", apellido: "Vargas" },
  { id: 43, nombre: "Kevin", apellido: "Méndez" },
  { id: 44, nombre: "Antonella", apellido: "Delgado" },
  { id: 45, nombre: "Lucas", apellido: "Escobar" },
  { id: 46, nombre: "Bianca", apellido: "Ojeda" },
  { id: 47, nombre: "Iván", apellido: "Ferreyra" },
  { id: 48, nombre: "Renata", apellido: "Almirón" },
  { id: 49, nombre: "Benjamín", apellido: "Sosa" },
  { id: 50, nombre: "Emilia", apellido: "Villalba" },
  { id: 51, nombre: "Claudia", apellido: "Gutiérrez" }
]
// { id: 1, nombre: "Juan", apellido: "Pérez" }
// el obj del usuario con apellido Gutierrez

// const apellidoABuscar = prompt("Ingrese el apellido a buscar").toLowerCase()

// usuario.apellido === "Gutíerrez"
// const usuarioEncontrado = usuarios.find((usuario) => usuario.apellido.toLowerCase() === apellidoABuscar)

const gustosDeHeladosFav = ["Kinoto al whisky", "Banana con dulce de leche", "Coco"]

// MAP ES UN BUCLE
// Mapear es la acción de representar visualmente un conjunto de datos
// "Coco" → {id: 3, nombre: "Coco", heladeria: "Grido"}
const conversion = gustosDeHeladosFav.map((helado, index) => ({ id: index + 1, nombre: helado, heladeria: "Grido" }))
console.log(gustosDeHeladosFav)
console.log(conversion)