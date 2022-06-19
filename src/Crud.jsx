import { useState, useEffect } from 'react'
import Form from './components/Form'
import axios from 'axios'
import CardUser from './components/CardUser'

function App() {
 
  const [users, setUsers] = useState()
  const [isShow, setIsShow] = useState(true)
  const getUsers = () => {

    axios.get('https://users-crud1.herokuapp.com/users/')
    .then((res)=> setUsers(res.data))
    .catch(error => console.log(error))

  }

  useEffect(() => {
    
    getUsers();

  }, [])

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
      .then((res)=>console.log(res.data), getUsers())
      .catch(error=>console.log(error))
  }

  const showForm = ()=> setIsShow(!isShow)
  
  return (

    <div className="App">
      <header>
      </header>
      <div className='container-buttonshow'>
        <button onClick={showForm} className='showbutton'>{isShow ? "Ocultar Formulario" : "Crear Usuario"}</button>
      </div>
      {
        isShow && <Form createUsers={createUsers} getUsers={getUsers}/>
      }
      
      <div className='container-cards'>
        {
          users?.map(user => (
            <CardUser
        user= {user}
        deleteUsers={deleteUsers}
        />
          ))
        }
        
      </div>
    </div>
  )
}

export default App
