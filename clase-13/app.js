// Operadores aritmeticos
// + - / * **1231231

// Operadores de comparación
// SIEMPRE se resuelve de forma lógica
// Dan como resultado un valor booleano
// < > >= <= === !==

// Conversor de edad perruna a humana
// const edad = prompt("Cuantos años tiene tu mascota?")
// console.log(edad * 7)
// console.log(edad)

// console.log("Hola 1")
// setTimeout(function () { console.log("Hola 1.5") }, 5000)
// console.log("Hola 2")
// console.log("Hola 3")
// console.log("Hola 4")

// Estructuras de control
// Si afuera llueve, llevar paraguas, si no, no.

// Condicionales

// console.log("Llevar paraguas")
// console.log("No llevar paraguas")

// const clima = prompt("Como esta afuera?")

// // palabra reservada - pregunta - scope
// if (clima === "feo") {
//   console.log("Llevar paraguas")
// } else if (clima === "soleado") {
//   console.log("Sali tranqui, esta soleado")
// } else if (clima === "pedroso") {
//   console.log("No salgas!! 😯")
// } else {
//   console.log("Ingresa un clima valido: feo, soleado, pedroso")
// }

// let saldo = "1"

// if (saldo >= 500) {
//   console.log("Compra aprobada ✅")
// } else {
//   console.log("Saldo insuficiente ❌")
// }

const usuario = ""

if (usuario) {
  console.log("Logueado ✅")
}

// let ahorro = 123123

// if (ahorro) {
//   console.log("Podes comprar un alfajor")
// }

// Falsy y Truthy

// const userPass = prompt("Ingrese contraseña:")
// const dbPass = "pepe123"

// if (userPass === dbPass) {
//   console.log("Bienvenido a mi página web :)")
// } else {
//   console.log("No tienes permitido el ingreso al sistema.")
// }

// Evaluar que los invitados tengan +18 años y además cuenten con una entrada

// let edadInvitado = 20
// let invitacion = false

// if (edadInvitado >= 18) {
//   if (invitacion) {
//     console.log("Podes pasar")
//   } else {
//     console.log("No podes pasar 1")
//   }
// } else {
//   console.log("No podes pasar 2")
// }

// operadores lógicos
// OR → ||
// AND → &&

// operador or, multiples opciones
// operador and, todos debe correcto
let edadInvitado = 20
let invitacion = false

// if (edadInvitado >= 18 && invitacion) {
//   console.log("Podes pasar")
// } else {
//   console.log("No podes pasar")
// }

const carnet = false
const multas = false
const edadConductor = 40

if (carnet && !multas && edadConductor >= 18) {
  console.log("Podes conducir")
}

const user = null

if (!user) {
  console.log("No podes ingresar, debes iniciar sesión")
} else {
  // logica para usuario logueado
  // logica para mostrar el perfil del usuario
  // logica para mostrar el carrito de compras del usuario
  // logica para mostrar las recomendaciones personalizadas del usuario
  // logica para mostrar las ofertas exclusivas para el usuario
  // logica para mostrar el historial de compras del usuario
}

let montoCompra = "sdlkfhsjkdfj"

if (montoCompra >= 50000) {
  console.log("Descuento del 20%")
  console.log("El precio final sería:", `$${montoCompra - (montoCompra * 0.2)}`)
} else if (montoCompra >= 20000 && montoCompra < 50000) {
  console.log("Descuento del 10%")
  console.log("El precio final sería:", `$${montoCompra - (montoCompra * 0.1)}`)
} else {
  console.log("Sin descuento")
} 