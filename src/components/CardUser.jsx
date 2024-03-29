import { FaBirthdayCake, FaPencilAlt } from "react-icons/fa";
import {BsTrashFill} from 'react-icons/bs'

const CardUser = ({user, setObjectUpdate, deleteUsers,setIsShow, reset}) => {
    console.log(user)

    const updateUser = ()=> {
      setIsShow(true)
      const obj = {
        password: user.password,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        birthday: user.birthday,
      };
      reset(obj)
      setObjectUpdate(user)
    }
  return (
    <article className="card">
        <h2>{user.first_name} {user.last_name}</h2>
        <ul>
            <li className="email">{user.email}</li>
            <li className="birthday"><FaBirthdayCake/> {user.birthday}</li>
        </ul>
        <div className="container-buttons">
            <button onClick={()=>deleteUsers(user.id)} className="delete"><BsTrashFill/></button>
            <button onClick={updateUser} className="update"><FaPencilAlt/></button>
        </div>
        
    </article>
  )
}

export default CardUser