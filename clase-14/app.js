const altura = 2
const permiso = false

// Forma 1 → anidando if
// if (altura >= 1.4) {
//   console.log("Puedes ingresar, que te diviertas!!")
// } else if (permiso) {
//   console.log("Puedes pasar porque cuentas con el permiso")
// } else {
//   console.log("No puedes ingresar, no tienes la altura minima ni cuentas con el permiso.")
// }

// Forma 2 → operador OR → ||
// if (altura >= 1.4 || permiso) {
//   console.log("Puedes ingresar, que te diviertas!!")
// } else {
//   console.log("No puedes ingresar, no tienes la altura minima ni cuentas con el permiso.")
// }

// String 
// const texto1 = "Hola 'mundo'"
// const texto2 = 'Hola "mundo"'
// Template string → interpolar datos
// let nombre = "Gabriel"
// const texto3 = `Hola ${nombre}`

// console.log(texto1)
// console.log(texto2)
// console.log(texto3)

// const descuento = 20
// const precioTotal = 100

// const precioFinal = precioTotal - descuento

// const frase = `El precio final es de: $${precioFinal}.`

// const fraseLarga = `Me 
// gusta 
// salir
// a 
// pasear`
// console.log(fraseLarga)

console.log("-------------------------")

// Bucle
// Es una estructura de control que repite una secuencia
// Todos los bucles tienen un INDICE

// 1- Inicia el blucle en el índice 0
// let i = 0

// 2 - Condición
// i < 10

// 3 - Ejecutar algo
// console.log("HOLA :)")

// 4 - Incrementar o modificar el índice
// i = i + 1

// for (let i = 0; i < 10; i = i + 1) {

//   console.log(i, "<- valor de i en cada vuelta")

//   console.log("HOLA :)")
// }

// const db = [
//   "Computadora",
//   "PRUEBA"
// ]

// for (let i = 0; i < db.length; i = i + 1) {
//   console.log(`El producto número: ${i + 1} es ${db[i]}.`)
// }

// // console.log(`El producto número 1 es computadora.`)
// // console.log(`El producto número 2 es remera.`)
// // console.log(`El producto número 3 es pantalon.`)

// for (let i = 1; i < 11; i = i + 1) {
//   console.log(`Estoy en la vuelta ${i}`)
// }

// for (let i = 12; i > 0; i = i - 3) {
//   console.log(`Estoy en la vuelta ${i}`)
// }

// db.forEach((producto, i) => console.log(`El producto número: ${i + 1} es ${db[i]}.`)) 

console.log("---------------------------------------------------------")


// tomarAgua
// declaración
function tomarAgua() {
  console.log("----------")
  console.log("1 - agarrar el vaso")
  console.log("2 - hechar agua")
  console.log("3 - tomar agua")
}

// invocación
tomarAgua()

// parametro → datos que utiliza una función
function cocinarTorta(sabor) {
  console.log(`🍰 Haciendo una torta de ${sabor}!`)
}

cocinarTorta("vainilla")
cocinarTorta("chocolate")

function bailar(musica) {
  console.log(`🕺 Estoy bailando ${musica}`)
}


function calcularArea(radio) {
  const area = Math.PI * radio ** 2
  return area
}

// Guardar en una variable el area del ciculo
const areaFinal = calcularArea(4)
console.log(areaFinal)

function calcularNumeroAleatorio() {
  const numeroAleatorio = Math.round((Math.random() * 2)) + 1
  return numeroAleatorio
}

const jugadaPc = calcularNumeroAleatorio()
const jugadaHumano = Number(prompt("PAPEL: 1, PIEDRA: 2, TIJERA: 3"))

if (jugadaHumano === jugadaPc) {
  console.log("Empate")
}