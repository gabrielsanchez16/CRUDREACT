

const CardUser = ({user}) => {
    console.log(user)
  return (
    <article className="card">
        <h2>{user.first_name} {user.last_name}</h2>
        <ul>
            <li className="email">{user.email}</li>
            <li className="birthday">{user.birthday}</li>
        </ul>
        <div className="container-buttons">
            <button className="delete">Actualizar</button>
            <button className="update">Delete</button>
        </div>
        
    </article>
  )
}

export default CardUser