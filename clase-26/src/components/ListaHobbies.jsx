import { Hobby } from "./Hobby.jsx"

const ListaHobbies = ({ hobbies, user, deleteHobby, updateHobby }) => {
  return (
    <ul>
      {
        hobbies.map((hobby) => (
          <Hobby
            key={hobby}
            name={hobby}
            user={user}
            deleteHobby={deleteHobby}
            updateHobby={updateHobby}
          />
        ))
      }
    </ul>
  )
}

export { ListaHobbies }