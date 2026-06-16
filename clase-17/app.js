// array → una lista de elementos → cada elemento ocupa una posición
// object → es una colección de propiedades y métodos

const mascota = {
  nombre: "Arandela",
  ladrar: function () {
    console.log("Guau guau!")
  }
}

const persona = {
  nombre: "Juan",
  edad: 30,
  saludar: function () {
    console.log("Hola, mi nombre es " + this.nombre)
  },
  comer: function (comida) {
    console.log(this.nombre + " está comiendo " + comida)
  },
  hablar: function (mensaje) {
    console.log(this.nombre + " dice: " + mensaje)
  }
}
// console.log(persona) // Juan

// Notación de punto → se utiliza para acceder a las propiedades o métodos de un objeto utilizando el nombre de la propiedad o método después del punto (.) → persona.nombre → "Juan" → persona.saludar() → "Hola, mi nombre es Juan"

console.log(persona.edad) // Juan

// Notación de corchetes
// se utiliza para acceder a las propiedades de forma dinámica utilizando una cadena de texto entre corchetes ([]) → persona["nombre"] → "Juan" → persona["saludar"]() → "Hola, mi nombre es Juan"

// const nombreDePropiedad = prompt("¿Qué propiedad quieres acceder?") // "nombre"
// console.log(persona[nombreDePropiedad]) // Juan

const nombre = "Gabriel"

console.log(nombre.toUpperCase())
console.log(nombre.toLowerCase())

const notas = [
  {
    id: 1,
    nombre: "Pepe",
    nota: 8
  },
  {
    id: 2,
    nombre: "Andrea",
    nota: 10
  },
  {
    id: 3,
    nombre: "Juan",
    nota: 6
  }
]

const aprobados = notas.filter(alumno => alumno.nota >= 6)
console.log(aprobados)

// array → []
// objetos → {}

const student = {
  id: 1,
  firstName: "Gabriel",
  lastName: "Alberini",
  age: 31,
  email: "gabriel@example.com",
  address: {
    street: "San Martín 123",
    city: "San Justo",
    province: "Santa Fe",
    country: "Argentina"
  },
  courses: [
    {
      id: 101,
      name: "JavaScript",
      progress: 85
    },
    {
      id: 102,
      name: "React",
      progress: 60
    }
  ],
  contact: {
    phone: {
      mobile: "+54 3498 123456",
      emergency: "+54 3498 654321"
    },
    socialMedia: {
      github: "gabrieldev",
      linkedin: "gabriel-alberini"
    }
  },
  isActive: true
}

const character = {
  id: 6,
  name: "Abadango Cluster Princess",
  status: "Alive",
  species: "Alien",
  type: "",
  gender: "Female",
  origin: {
    name: "Abadango",
    url: "https://rickandmortyapi.com/api/location/2"
  },
  location: {
    name: "Abadango",
    url: "https://rickandmortyapi.com/api/location/2"
  },
  image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
  episode: [
    "https://rickandmortyapi.com/api/episode/27"
  ],
  url: "https://rickandmortyapi.com/api/character/6",
  created: "2017-11-04T19:50:28.250Z"
};

console.log(character.episode[0])

// --------------

// API → Application Programming Interface → es un conjunto de reglas y protocolos que permiten la comunicación entre diferentes aplicaciones o sistemas. Las APIs permiten a los desarrolladores acceder a funcionalidades o datos específicos de una aplicación o servicio sin necesidad de conocer su implementación interna. Las APIs pueden ser utilizadas para integrar servicios de terceros, acceder a bases de datos, realizar operaciones en la nube, entre otras cosas. Las APIs pueden ser RESTful, SOAP, GraphQL, etc.

// endpoint → https://wizard-world-api.herokuapp.com/spells

const traerPoderes = async () => {
  const respuesta = await fetch("https://wizard-world-api.herokuapp.com/spells")

  if (respuesta.ok) {
    const poderes = await respuesta.json()

    poderes.forEach((poder) => {
      console.log(`El poder: ${poder.name} fue creado por ${poder.creator ? poder.creator : "desconocido"}.`)
    })
  }
}

traerPoderes()
