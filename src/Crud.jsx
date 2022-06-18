import { useState, useEffect } from 'react'
import Form from './components/Form'
import axios from 'axios'
import CardUser from './components/CardUser'

function App() {
 
  const [users, setUsers] = useState()

  const getUsers = () => {

    axios.get('https://users-crud1.herokuapp.com/users/')
    .then((res)=> setUsers(res.data))
    .catch(error => console.log(error))

  }

  useEffect(() => {
    
    getUsers();

  }, [])
  
  return (

    <div className="App">
      <header>
      </header>
      <div className='container-buttonshow'>
        <button className='showbutton'>Crear Usuarios</button>
      </div>
      
      <Form/>
      <div className='container-cards'>
        {
          users?.map(user => (
            <CardUser
        user= {user}
        />
          ))
        }
        
      </div>
    </div>
  )
}

export default App
