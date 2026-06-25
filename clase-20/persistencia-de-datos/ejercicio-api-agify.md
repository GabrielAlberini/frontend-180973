# Ejercicio: Historial de predicción de edades

## Objetivo

Crear una aplicación que permita consultar la edad estimada de una persona según su nombre utilizando una API pública y guardar un historial de búsquedas en `localStorage`.

---

## API a utilizar

```text
https://api.agify.io/?name=nombre
```

Ejemplo:

```text
https://api.agify.io/?name=gabriel
```

Respuesta:

```json
{
  "count": 12345,
  "name": "gabriel",
  "age": 42
}
```

---

## Requisitos

1. Crear un formulario que contenga:
   - Un `input` para ingresar un nombre.
   - Un botón **Buscar**.

2. Al enviar el formulario:

   - Consumir la API utilizando `fetch`.
   - Mostrar en pantalla el nombre consultado y la edad estimada.

Ejemplo:

```text
Nombre: Gabriel
Edad estimada: 42 años
```

3. Guardar cada consulta en `localStorage`.

4. Al recargar la página, el historial de consultas debe seguir apareciendo.

5. Mostrar el historial en una lista con el siguiente formato:

```text
Gabriel → 42 años
María → 31 años
Pedro → 57 años
```

6. Agregar un botón **Borrar historial** que elimine todos los registros guardados.

---

## Estructura sugerida para almacenar los datos

```javascript
[
  {
    nombre: "Gabriel",
    edad: 42
  },
  {
    nombre: "María",
    edad: 31
  }
]
```

---

## Desafíos adicionales (opcionales)

- No permitir nombres repetidos.
- Mostrar la cantidad total de consultas realizadas.
- Ordenar el historial alfabéticamente.
- Agregar un botón para eliminar una búsqueda individual.
- Mostrar un mensaje si la API no devuelve una edad estimada.

---

## Conceptos que se practican

- `fetch`
- `async` / `await`
- Manejo de APIs REST
- `localStorage`
- `JSON.parse`
- `JSON.stringify`
- Arrays de objetos
- `push`
- `find`
- `forEach`
- Validaciones
- Manipulación del DOM
- Eventos de formularios
