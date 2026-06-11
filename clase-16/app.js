const menu = prepararComida()
console.log(menu)

function prepararComida(comida) {
  let respuesta

  if (!comida) {
    respuesta = "Debes ingresar una comida."
  } else {
    respuesta = `Cocinando ${comida}.`
  }

  return respuesta
}

// hoisting !== hosting

// arrow function
const validarMayorDeEdad = (edad) => edad >= 18

const validacionJuan = validarMayorDeEdad(1)
console.log(validacionJuan)

let a = 1
let b = 1

//parametros → n1 y n2
const sumar = (n1, n2) => n1 + n2

// argumentos → a y b
const resultado = sumar(a, b)
console.log(resultado)

const crearIdentificadorUnico = () => crypto.randomUUID()

// uuid 
const id = crearIdentificadorUnico()
console.log(id)

// Versión 1
const saludarGritando = nombre => `Hola ${nombre}!`.toUpperCase()

// Versión 2
const saludarGritando2 = (nombre) => {
  const saludoCreado = `Hola ${nombre}!`.toUpperCase()
  return saludoCreado
}

const saludo = saludarGritando("juan")
console.log(saludo)

// const nombreParaSaludar = prompt("Ingrese su nombre:")
// const saludoCreado = saludarGritando(nombreParaSaludar)
// alert(saludoCreado)

// -------------------------------------------------

const number = Number("123")
console.log(number)

const random = Math.random() * 10

const redondeo = Math.round(random)

console.log(redondeo)

console.log(Math.max(10, 1, 55, 23, 333, 23))

// -------------------------------------------

let texto = "Me GustA La COca COLa."
console.log(texto.toUpperCase())
console.log(texto.toLowerCase())

const texto2 = "           hola     "

console.log(texto2.trim())

const frase = "Hola mundo"

console.log(frase.replace("Hola", ""))

const fraseConError = "El cuchillo tiene pato filo"

const fraseModificado = fraseConError.slice(18, 22)

console.log(fraseModificado)
