const Tarjeta = (props) => {
  return (
    <>
      <div className="card">
        {props.children}
      </div>
    </>
  )
}

export { Tarjeta }