import { useState, useEffect } from 'react';
import axios from 'axios';

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://backendproject-8m9r.onrender.com/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`https://backendproject-8m9r.onrender.com/users/${userId}`);
      setUsers(users.filter((user) => user._id !== userId)); // Update local state
    } catch (error) {
      console.error('Error deleting user:', error);
      // Handle deletion error (e.g., display an error message)
    }
  };

  const handleUpdate = async (updatedUser) => {
    try {
      const response = await axios.put(`https://backendproject-8m9r.onrender.com/users/${updatedUser._id}`, updatedUser);
      const updatedUsers = users.map((user) => (user._id === updatedUser._id ? response.data : user));
      setUsers(updatedUsers);
      setSelectedUser(null); // Clear selected user after update
    } catch (error) {
      console.error('Error updating user:', error);
      // Handle update error (e.g., display an error message)
    }
  };

  return (
    <div className="container mx-auto">
      <h1>Users</h1>
      {users.length > 0 ? (
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              {/* Add more user property headers as needed */}
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                {/* Add more user property data cells as needed */}
                <td className="px-4 py-2">
                  <button className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded" onClick={() => handleDelete(user._id)}>
                    Delete
                  </button>
                  <button className="bg-green-500 hover:bg-green-700 text-white px-2 py-1 rounded ml-2" onClick={() => setSelectedUser(user)}>
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className='text-red-500'>No users found.</p>
      )}

      {selectedUser && (
        <div className="mt-4">
          <h2>Update User</h2>
          {/* Form for updating user details goes here */}
          <form onSubmit={(e) => {
            e.preventDefault();
            // Extract updated user data from form fields
            const updatedUser = {
              // ... updated user data
            };
            handleUpdate(updatedUser);
          }}>
            {/* Update form fields for name, email, etc. */}
            <button type="submit" className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded">
              Update
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UsersTable;