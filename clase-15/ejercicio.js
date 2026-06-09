const cantidadDeParticipantes = Number(prompt("¿Cuantos participantes desea registrar?"))
let participantesValidados = 0
let participantesRechazados = 0

const registrarParticipantes = (cantidad) => {
  if (isNaN(cantidad)) {
    alert("Debes incluir un número valido como cantidad de participantes.")
    return
  }

  for (let i = 0; i < cantidad; i++) {
    // Sanitización
    const nombre = prompt("Ingrese su nombre:").trim().toUpperCase()
    const edad = Number(prompt("Ingrese su edad:"))
    const email = prompt("Ingrese su correo electrónico:")

    if (nombre.length < 3) {
      console.log("❌ Nombre invalido")
    }

    if (edad < 18 || edad > 40) {
      console.log("❌ Edad invalido")
    }

    if (!email.includes("@")) {
      console.log("❌ Email invalido")
    }

    if (nombre.length < 3 || edad < 18 || edad > 40 || !email.includes("@")) {
      participantesRechazados++
    } else {
      participantesValidados++
    }
  }

  console.log("Participantes rechazados", participantesRechazados)
  console.log("Participante registrado:", participantesValidados)
}

registrarParticipantes(cantidadDeParticipantes)