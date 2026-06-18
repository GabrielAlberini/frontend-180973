const API_URL = "https://api.open-meteo.com/v1/forecast?latitude=-30.78&longitude=-60.58&timezone=GMT-0300&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"

const traerDatos = async () => {
  const respuesta = await fetch(API_URL)

  if (respuesta.ok) {
    const data = await respuesta.json()

    const climaActual = data.current
    const intervaloEnMin = climaActual.interval / 60
    const temperatura = climaActual.temperature_2m
    const velocidadViento = climaActual.wind_speed_10m
    const fechaYHora = new Date(climaActual.time).toLocaleString("es-AR", { hour12: false })

    console.log(`En San Justo, Santa Fe en el dia ${fechaYHora} la temeperatura es de ${temperatura}°, el viento va a ${velocidadViento}km/h. Estos datos se actualizan cada ${intervaloEnMin} minutos.`)
  } else {
    alert("Error al obtener la data")
  }
}

traerDatos()

console.log("Hola a todos")