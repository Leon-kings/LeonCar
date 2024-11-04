import { useEffect, useState } from "react"
import {NavbarWith} from "./NavBar"

const Productview = () => {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
    <div className="container">
        <div className="head">
        <NavbarWith/>
      </div>
<div className="body">
      {/* body part */}
      <div className="main">
        <div className="body">
<table className="table">
  <thead>
    <tr>
      <th className="head bg-green-200 text-blue-600">ID</th>
      <th className="head bg-green-200 text-blue-600">Names</th>
      <th className="head bg-green-200 text-blue-600">Email</th>
      <th className="head bg-green-200 text-blue-600">Telephone</th>
      <th className="head bg-green-200 text-blue-600">Password</th>
      <th className="head bg-green-200 text-black" colSpan={2}>ACTION</th>
    </tr>
  </thead>
  <tbody>
    {/* user view */}
      {users.length > 0 && (
        <tr>
          {users.map(user => (
            <td key={user.id}>{user.name}</td>
          ))}
        </tr>
      )}
  </tbody>
</table>
        </div>

    </div> 
    </div>
    </div>
    </>
  )
}

export default Productview