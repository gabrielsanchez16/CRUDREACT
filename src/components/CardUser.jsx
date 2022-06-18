import { FaBirthdayCake, FaPencilAlt } from "react-icons/fa";
import {BsTrashFill} from 'react-icons/bs'

const CardUser = ({user}) => {
    console.log(user)
  return (
    <article className="card">
        <h2>{user.first_name} {user.last_name}</h2>
        <ul>
            <li className="email">{user.email}</li>
            <li className="birthday"><FaBirthdayCake/> {user.birthday}</li>
        </ul>
        <div className="container-buttons">
            <button className="delete"><BsTrashFill/></button>
            <button className="update"><FaPencilAlt/></button>
        </div>
        
    </article>
  )
}

export default CardUser