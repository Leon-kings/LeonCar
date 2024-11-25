import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Example from '../request/component/ExampleSide';

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://backendproject-8m9r.onrender.com/users');
        setUsers(response.data.data);
        console.log('users are:',response.data.data)
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
    <>
    <div className="container mx-auto">
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`top-0 left-0 h-full bg-gray-800 text-white w-64 z-50 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 lg:translate-x-0`}
      >
        <div className="p-4 text-lg font-bold">LD</div>
        <nav className="mt-4">
          <ul>
            <li>
              <Link
                to="/5Eqi3pEyTJliNa7ANd9GcQN"
                className="block px-4 py-2 text-black hover:bg-gray-700 rounded"
              > <button>Dashboard</button>
              </Link>
            </li>
            <br />
            <li>
              <Link
                to="/admin/profile"
                className="block px-4 py-2 text-black hover:bg-gray-700 rounded"
              >
                <button>Profile</button>
              </Link>
            </li>
            <br />
            <hr />
            <br />
            <li>
              <Link
                to="/Userview"
                className="block px-4 py-2 text-black hover:bg-gray-700 rounded"
              >
                <button>Users</button>
              </Link>
            </li>
            <br />
            <li>
              <Link
                to="/Productview"
                className="block px-4 py-2 text-black hover:bg-gray-700 rounded"
              >
                <button>Products</button>
              </Link>
            </li>
            <br />
            <hr />
            <p>CREATES</p>
            <br />
            <li>
              <Link
                to="/admin/create/user"
                className="block px-4 py-2 text-black hover:bg-gray-700 rounded"
              >
                <button>Create User</button>
              </Link>
            </li>
            <br />
            <li>
              <Link
                to="/admin/create/post"
                className="block px-4 py-2 text-black hover:bg-gray-700 rounded"
              >
                <button>Create Posts</button>
              </Link>
            </li>
            <br />
            <hr />
            <p>NOTIFY</p>
            <br />
            <li>
              <Link
                to="/Request"
                className="block px-4 py-2 text-black hover:bg-gray-700 rounded"
              >
                <button>Requests</button>
              </Link>
            </li>
            <br />
            <li>
              <Link
                to="/Testimony"
                className="block px-4 py-2 text-black hover:bg-gray-700 rounded"
              >
                <button>Testimony</button>
              </Link>
            </li>
            <br />
            <hr />
            <p>VIEW</p>
            <br />
            <li>
              <Link
                to="/View/Booking"
                className="block px-4 py-2 text-black hover:bg-gray-700 rounded"
              >
                <button>Request</button>
              </Link>
            </li>
            <br />
            <li>
              <Link
                to="/View/Testimony"
                className="block px-4 py-2 text-black hover:bg-gray-700 rounded"
              >
                <button>Testimony</button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 bg-gray-800 text-white rounded"
      >
        ☰
      </button>

      {/* Main Content */}
      <div className="flex-grow bg-gray-100 min-h-screen ">


      <h1>Users</h1>
      {users.length > 0 ? (
  <table className="table-auto w-full border border-collapse striped">
    <thead className="bg-gray-100">
      <tr>
        <th className="px-4 py-2 font-bold">Name</th>
        <th className="px-4 py-2 font-bold">Email</th>
        <th className="px-4 py-2 font-bold">Actions</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user) => (
        <tr key={user._id}>
          <td className="px-4 py-2">{user.name}</td>
          <td className="px-4 py-2">{user.email}</td>
          <td className="px-4 py-2">
            <button
              className="bg-red-500 1    
 1. 
github.com
github.com
 hover:bg-red-700 text-white px-2 py-1 rounded mr-2"
              onClick={() => handleDelete(user._id)}
            >
              <i className="far fa-trash-alt"></i> Delete
            </button>
            <button
              className="bg-green-500 hover:bg-green-700 text-white px-2 py-1 rounded"
              onClick={() => setSelectedUser(user)}
            >
              <i className="far fa-edit"></i> Update
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
      <div className="container">
        <Example/>
      </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default UsersTable;