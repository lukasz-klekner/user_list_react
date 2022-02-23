import { useState } from 'react'
import AddUser from './components/Users/AddUser'
import UserList from './components/Users/UserList'

function App() {
  const [users, setUsers] = useState([])

  const addUserHandeler = (name, age) => {
    const newUser = {
      name,
      age,
      id: Date.now().toString(),
    }

    setUsers((prevUserList) => [...prevUserList, newUser])
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandeler} />
      <UserList users={users} />
    </div>
  )
}

export default App
