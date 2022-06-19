import { useState, useEffect } from 'react'
import Form from './components/Form'
import axios from 'axios'
import CardUser from './components/CardUser'
import { useForm } from "react-hook-form";

function App() {
 
  const [users, setUsers] = useState()
  const [isShow, setIsShow] = useState(false)
  const [objectUpdate, setObjectUpdate] = useState()
  const { register, handleSubmit, reset } = useForm();
  const getUsers = () => {

    axios.get('https://users-crud1.herokuapp.com/users/')
    .then((res)=> setUsers(res.data))
    .catch(error => console.log(error))

  }

  useEffect(() => {
    
    getUsers();

  }, [getUsers])

  const deleteUsers = id => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
    .then((res) => console.log(res.data)
    ,getUsers())
    .catch(error => console.log(error))
  }

  const createUsers = newUser => {
    axios.post('https://users-crud1.herokuapp.com/users/', newUser)
    .then(res=> console.log(res.data),
          getUsers())
    .catch(error => console.log(error))
  }

  const update = (id,updateUser) =>{

      axios.patch(`https://users-crud1.herokuapp.com/users/${id}/`,updateUser)
      .then((res)=>console.log(res.data), getUsers(),setIsShow(false))
      .catch(error=>console.log(error))
  }

  const showForm = ()=> {
    const obj = {
      first_name: "",
    last_name: "",
    email: "",
    password: "",
    birthday: "",
    }
    reset(obj)
    setIsShow(!isShow)
  
  }
  
  return (

    <div className="App">
      <header>
      </header>
      <div className='container-buttonshow'>
        <button onClick={showForm} className='showbutton'>{isShow ? "Ocultar Formulario" : "Crear Usuario"}</button>
      </div>
      <div className='container-form'>
      {
        isShow && <Form 
        createUsers={createUsers} 
        getUsers={getUsers} 
        update={update}
        setIsShow={setIsShow}
        objectUpdate={objectUpdate}
        setObjectUpdate={setObjectUpdate}
        register={register}
        handleSubmit={handleSubmit}
        reset={reset}
        />
      }
      </div>
     
      
      <div className='container-cards'>
        {
          users?.map(user => (
            <CardUser
        key={user.id}
        user= {user}
        deleteUsers={deleteUsers}
        setObjectUpdate={setObjectUpdate}
        setIsShow={setIsShow}
        reset={reset}
        />
          ))
        }
        
      </div>
    </div>
  )
}

export default App
