// props siempre es un parametro del componente que es un objeto

const Biografia = ({ data }) => {

  const { nombre, edad, descripcion, foto, ciudad } = data

  return (
    <div>
      <h2>{nombre}</h2>
      <img src={foto} alt={`Foto de perfil de ${nombre}`} />
      <p><span>Ciudad:</span> {ciudad}</p>
      <p><span>Edad:</span> {edad}</p>
      <p><span>Descripción:</span> {descripcion}</p>
    </div>
  )
}

export { Biografia }