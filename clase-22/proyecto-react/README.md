# Ejercicio: Mi Biografía con React

## Objetivo

Crear una pequeña aplicación en React donde se muestre la biografía de una persona utilizando únicamente los siguientes conceptos:

- Componentes.
- Props.
- `map()`.
- Renderizado de listas.

> **No utilizar:** `useState`, eventos, formularios ni llamadas a APIs.

---

# Resultado esperado

La página debe mostrar:

- Nombre.
- Edad.
- Ciudad.
- Una foto.
- Una breve descripción.
- Una lista de hobbies.
- Una lista de tecnologías favoritas.

---

# Estructura sugerida

```text
src/
│
├── components/
│   ├── Biografia.jsx
│   ├── Hobby.jsx
│   ├── ListaHobbies.jsx
│   ├── Tecnologia.jsx
│   └── ListaTecnologias.jsx
│
├── data/
│   └── persona.js
│
├── App.jsx
└── main.jsx
```

---

# Datos

## `persona.js`

```javascript
const persona = {
  nombre: "Juan Pérez",
  edad: 24,
  ciudad: "Santa Fe",
  descripcion:
    "Soy estudiante de programación y me gusta aprender nuevas tecnologías.",

  foto:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300",

  hobbies: [
    "Leer",
    "Jugar videojuegos",
    "Escuchar música",
    "Viajar",
    "Cocinar"
  ],

  tecnologias: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js"
  ]
};

export { persona };
```

---

# Consignas

## Parte 1

Crear un componente llamado `Biografia`.

Debe recibir por **props**:

- `nombre`
- `edad`
- `ciudad`
- `descripcion`
- `foto`

y mostrarlos en pantalla.

---

## Parte 2

Crear un componente llamado `ListaHobbies`.

Debe recibir un arreglo mediante **props**.

Dentro del componente utilizar `map()` para recorrer el arreglo y renderizar un componente llamado `Hobby`.

El componente `Hobby` solamente mostrará el nombre del hobby.

---

## Parte 3

Crear un componente llamado `ListaTecnologias`.

Debe recibir un arreglo mediante **props** y recorrerlo utilizando `map()`.

Cada elemento debe renderizar un componente llamado `Tecnologia`, que mostrará el nombre de la tecnología.

---

## Parte 4

En `App.jsx`:

1. Importar los datos desde `persona.js`.
2. Renderizar el componente `Biografia`, enviando toda la información mediante **props**.
3. Renderizar el componente `ListaHobbies`, enviando el arreglo de hobbies.
4. Renderizar el componente `ListaTecnologias`, enviando el arreglo de tecnologías.

---

# Ejemplo visual

```text
----------------------------------------

            Juan Pérez

📍 Santa Fe
🎂 24 años

[ FOTO ]

Soy estudiante de programación y me gusta
aprender nuevas tecnologías.

Hobbies

• Leer
• Jugar videojuegos
• Escuchar música
• Viajar
• Cocinar

Tecnologías favoritas

• HTML
• CSS
• JavaScript
• React
• Node.js

----------------------------------------
```

---

# Desafío extra (Opcional)

Si terminan antes, pueden agregar:

- Un componente `Titulo` reutilizable que reciba el texto mediante props.
- Un componente `Tarjeta` que envuelva toda la biografía y las listas.
- Estilos con CSS para mejorar la presentación.

---

# Conceptos trabajados

Al finalizar el ejercicio deberán haber practicado:

- Creación de componentes reutilizables.
- Uso de **props**.
- Componentización de una aplicación React.
- Renderizado de listas mediante `map()`.
- Organización de un proyecto React en carpetas.
