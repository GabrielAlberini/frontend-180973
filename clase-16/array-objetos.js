const nombre1 = "Pedro"
const nombre2 = "María"
const nombre3 = "Juan"
const nombre4 = "Ana"
const nombre5 = "Luis"

// datos compuestos / complejos

const nombres = ["Mario", "Gabriel", "Julia", "Marisa"]

const nombres2 = [nombre1, nombre2, nombre3]

console.log(nombres)

// const nombres = ["Mario", "Gabriel", "Julia", "Marisa"]
// 4 elementos
// Marisa → posición 3

// Acceder por posición
// Julia
console.log(nombres[2])
// console.log(nombres[prompt("Ingrese su ID")])

const datos = ["Arandela", true, 1, () => { }, undefined, null]

console.log(datos)

const productos = ["Pc", "Lapices", "Carpeta", "Lapicera", "Celular"]

console.log(productos)

// Modificar elemento en array
productos[0] = "Escritorio"

console.log(productos)

// Longitud de array
console.log("Cantidad de productos en el carrito:", productos.length)

console.log(productos[4])

const colores = ["rojo", "azul", "amarillo", "violeta", "rosado", "gris"]

console.log(colores[colores.length - 1])

// Agregar elemento
colores.push("plateado")
colores.push("lila")

console.log(colores)

colores.pop()

console.log(colores)

colores.unshift("blanco")

console.log(colores)

colores.splice(1, 2)

console.log(colores)

console.log(colores.includes("violeta"))

// ¿Cuál es el indica del rosado?
console.log(colores.indexOf("lalala"))

const color = "azul"

if (colores.indexOf(color) === -1) {
  console.log("No se encuentra en la lista.")
} else {
  console.log(`Se encuentra en la posición ${colores.indexOf(color)}`)
}

// un array es una lista → elementos indexados
// objeto es una colección de datos

// un objeto → propiedades y valores
const celular = {
  color: "Negro",
  empresa: "Personal",
  camaras: 3,
  contactos: ["Mama", "Amigo 1", "amigo 2"],
  nfc: true,
  encender: function () {
    console.log("Bienvenido :)")
  },
  propiedad: "test"
}

// Acceder al valor
// Notación de punto
// console.log(celular.nfc)

// Nocación de corchetes
// const propiedad = prompt("Ingrese el nombre de la propiedad:")
// console.log(celular[propiedad])

// ----------------------------------------

const alumnos = [
  {
    id: 1,
    nombre: "Thiago",
    curso: "Frontend"
  },
  {
    id: 2,
    nombre: "Jorge Nicolas",
    curso: "Java"
  },
  {
    id: 3,
    nombre: "Juan",
    curso: "Base de datos"
  }
]

alumnos.forEach((alumno) => {
  console.log(`Hola ${alumno.nombre}`)
})