# Práctica inicial de CSS

## Contexto real

Un cliente local quiere una página básica para su emprendimiento: una **panadería de barrio**.  
Necesita algo muy simple: mostrar productos, una breve descripción y un botón de contacto.

Ya tienen el HTML. Ahora el siguiente paso es **hacerlo visualmente atractivo con CSS**.

---

## HTML base (sin estilos)

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Panadería La Espiga</title>
</head>
<body>

  <header>
    <h1>Panadería La Espiga</h1>
    <p>Productos caseros, frescos todos los días</p>
  </header>

  <main>
    <section>
      <h2>Nuestros productos</h2>

      <article>
        <h3>Facturas</h3>
        <p>Medialunas, vigilantes y más.</p>
      </article>

      <article>
        <h3>Pan casero</h3>
        <p>Hecho con recetas tradicionales.</p>
      </article>

      <article>
        <h3>Tortas</h3>
        <p>Ideales para cumpleaños y eventos.</p>
      </article>
    </section>
  </main>

  <footer>
    <p>Contacto: 3498-000000</p>
    <button>Hacer pedido</button>
  </footer>

</body>
</html>
```

---

## Consigna

Aplicar estilos CSS al HTML anterior cumpliendo con los siguientes puntos:

1. **Color y tipografía**
   - Cambiar el color de fondo de toda la página.
   - Elegir una fuente distinta a la predeterminada.
   - Cambiar colores de títulos (`h1`, `h2`, `h3`).

2. **Header**
   - Centrar el texto del encabezado.
   - Agregar un color de fondo distinto al resto de la página.

3. **Sección de productos**
   - Separar visualmente cada producto (por ejemplo con bordes, márgenes o fondos).
   - Agregar espacio entre los elementos.

4. **Botón**
   - Cambiar el color de fondo.
   - Modificar el cursor al pasar el mouse.
   - Agregar un pequeño efecto hover (ej: cambiar color).

5. **Footer**
   - Alinear el contenido al centro.
   - Diferenciarlo del resto con otro color de fondo.

---

## Objetivo pedagógico

Que practiquen:
- Selectores básicos (`body`, `h1`, `section`, `article`, `button`)
- Propiedades comunes (`color`, `background-color`, `margin`, `padding`, `border`)
- Primer acercamiento a `:hover`
- Separación de estructura (HTML) y presentación (CSS)
