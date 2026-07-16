const Hobby = ({ name, user, deleteHobby, updateHobby }) => {
  return (
    <li>
      {name}
      {user &&
        <span>
          <button className="btn-delete" onClick={() => deleteHobby(name)}>❌</button>
          <button className="btn-update" onClick={() => updateHobby(name)}>🔃</button>
        </span>
      }
    </li>
  )
}

export { Hobby }