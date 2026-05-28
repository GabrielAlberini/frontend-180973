// Variables
// Una variable es un espacio donde almacenamos información

const nombre = "Gabriel"
let edad = 31
const dni = 123456789

// let o const
// let → puede cambiar en el futuro
// const → el valor es constante para siempre

let gustoDeHeladoFav = "banana split"

console.log(gustoDeHeladoFav)

gustoDeHeladoFav = "vainilla"

console.log(gustoDeHeladoFav)

console.log(nombre)

// nombre = "Pepe"

console.log(nombre)

// dni = 11111111

// Declaración → cuando se crea la variable con let o const

// Reasignación cuando le damos un nuevo valor (sin usar let o const)

let diaDelMes = 28
diaDelMes = 29

console.log(diaDelMes)

const PI = Math.PI
console.log(PI)

console.log("----------------")

// Tipos de datos primitivos

// String → cadena de caracteres → ""
let string1 = "me gusta caminar"
let string2 = "Pepe123!"
let string3 = "+5434541111111"

// Number → JS incluye a todos los tipos de numero en un solo tipo de dato → number
let dato1 = 1
let informacionNumerica2 = -1
let cajita3 = 1.1

// Boolean → representa verdadero o falso
let valorBooleano1 = true
let valorBooleano2 = false

// undefined → sin valor definido
let mascota
console.log(mascota)

// null → ausencia de valor
let marcaAuto = null
console.log(marcaAuto)

// array y objeto

console.log("-----------------------")

const informacion = "lalala"
const talle = "XXL"
const numeroDeTurno = 54
const precio = 100.43
const voto = false
const tienePermisoParaConducir = null

console.log(typeof voto)
console.log(typeof numeroDeTurno)
console.log(typeof tienePermisoParaConducir)

// Operadores aritmeticos
console.log(1 / 1)
console.log(1 + 1)
console.log(1 - 1)
console.log(1 * 1)
// potencia **
console.log(2 ** 3)

// Operadores de comparación → todos se resuelven con un booleano
let contraseña = "pepe123"
let contraseñaEnBaseDeDatos = "pepe123"

// iguadad estricta
console.log(contraseña === contraseñaEnBaseDeDatos)

// mayor o igual que
const edadConductor = 18
console.log(edadConductor >= 18)

// estrictamente diferente
let contraseña2 = "peperulo"
console.log(contraseña2 !== "arandelaperrito")

// pedir datos al usuario
const cancionFav = prompt("Cuál es tu cancion fav?")
const nombreHermano = prompt("Como se llama tu hermano?")

console.log(cancionFav)
console.log(nombreHermano)

