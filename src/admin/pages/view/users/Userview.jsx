import axios from 'axios';
import  { useEffect, useState } from 'react';

const AdminView = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [editingUser, setEditingUser] = useState(null); // Track which user is being edited

  // Fetch all users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://backendproject-8m9r.onrender.com/users');
      setUsers(response.data); // Directly use response.data to set users
    } catch (err) {
      console.error(err.message);
      setError(err.message);
    }
  };

  // Delete user by ID
  const deleteUser = async (id) => {
    try {
      // Use axios.delete instead of axios.get and remove the method property
      await axios.delete(`https://backendproject-8m9r.onrender.com/users/${id}`);
      
      // Remove the deleted user from the local state
      setUsers(users.filter(user => user.id !== id));
    } catch (err) {
      console.error(err.message);
      setError(err.message);
    }
  };
  

  // Start editing a user by setting the user as the "editingUser"
  const startEditing = (user) => {
    setEditingUser({ ...user }); // Clone the user to edit
  };

  // Handle changes to the editable user fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingUser({ ...editingUser, [name]: value });
  };

  // Save edited user information
  const saveUser = async () => {
    try {
      // Use axios.put instead of axios.get and pass editingUser as data
      await axios.put(`https://fake-json-api.mock.beeceptor.com/users/${editingUser.id}`, editingUser, {
        headers: { 'Content-Type': 'application/json' },
      });
      
      // Update the user in the state
      setUsers(users.map(user => (user.id === editingUser.id ? editingUser : user)));
      setEditingUser(null); // Exit edit mode
    } catch (err) {
      console.error(err.message);
      setError(err.message);
    }
  };
  

  // Cancel editing
  const cancelEdit = () => {
    setEditingUser(null);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Admin View - User Management</h1>
      <ul>
      {Array.isArray(users) && users.map((user) => (
          <li key={user.id}>
            {editingUser && editingUser.id === user.id ? (
              // Edit mode: show input fields for editing
              <div>
                <input
                  type="text"
                  name="name"
                  className='p-3'
                  value={editingUser.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  className='p-3'
                  value={editingUser.email}
                  onChange={handleChange}
                />
                <button className='w-20 p-3 bg-green-400' onClick={saveUser}>Save</button>
                <button className='w-20 p-3 bg-slate-100' onClick={cancelEdit}>Cancel</button>
              </div>
            ) : (
              // View mode: show user information
              <div>
                <table className="table bg-white border-spacing-2">
                  <thead className='text-black'>
                  <th>ID</th>
                  <th>NAMES</th>
                  <th>EMAIL</th>
                  <th colSpan={2}>ACTION</th>
                  </thead>
                  <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td> <button className='w-20 bg-blue-500' onClick={() => startEditing(user)}>Edit</button></td>
                    <td><button className='w-20 bg-red-500' onClick={() => deleteUser(user.id)}>Delete</button></td>
                  </tr>
                </table>

                
               
                
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminView;
