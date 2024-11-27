import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Example from '../request/component/ExampleSide';

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    phone: "",
  });

  // Fetch users from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://backendproject-8m9r.onrender.com/users"
        );
        setUsers(response.data.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  // Delete user
  const handleDelete = async (userId) => {
    try {
      await axios.delete(`https://backendproject-8m9r.onrender.com/users/${userId}`);
      setUsers(users.filter((user) => user._id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // Handle edit
  const handleEdit = (user) => {
    setEditingUser(user._id);
    setFormData({ fullnamename: user.fullnamename, email: user.email, password:user.password, phone: user.phone });
  };

  // Update user
  const handleUpdate = async (userId) => {
    try {
      await axios.put(`https://backendproject-8m9r.onrender.com/users/${userId}`, formData);
      setUsers(
        users.map((user) =>
          user._id === userId ? { ...user, ...formData } : user
        )
      );
      setEditingUser(null);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead>
            <tr className="bg-gray-100">
              <th className="text-left py-2 px-4 border">ID</th>
              <th className="text-left py-2 px-4 border">Name</th>
              <th className="text-left py-2 px-4 border">Email</th>
              <th className="text-left py-2 px-4 border">Password</th>
              <th className="text-left py-2 px-4 border">Tel</th>
              <th className="text-center py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="border-t">
                {editingUser === user._id ? (
                  <>
                    <td className="py-2 px-4 border">
                      <input
                        type="text"
                        name="fullname"
                        value={formData.fullname}
                        onChange={handleInputChange}
                        className="w-full border p-1"
                      />
                    </td>
                    <td className="py-2 px-4 border">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full border p-1"
                      />
                    </td>
                    <td className="py-2 px-4 border">
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full border p-1"
                      />
                    </td>
                    <td className="py-2 px-4 border">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full border p-1"
                      />
                    </td>
                    <td className="py-2 px-4 border text-center">
                      <button
                        className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                        onClick={() => handleUpdate(user._id)}
                      >
                        Save
                      </button>
                      <button
                        className="bg-gray-500 text-white px-2 py-1 rounded"
                        onClick={() => setEditingUser(null)}
                      >
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="py-2 px-4 border">{user._id}</td>
                    <td className="py-2 px-4 border">{user.fullname}</td>
                    <td className="py-2 px-4 border">{user.email}</td>
                    <td className="py-2 px-4 border">******</td>
                    <td className="py-2 px-4 border">{user.phone}</td>
                    <td className="py-2 px-4 border text-center">
                      <button
                        className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                        onClick={() => handleEdit(user)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 text-white px-2 py-1 rounded"
                        onClick={() => handleDelete(user._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
  </table>
) : (
        <p className='text-red-500'>No users found.</p>
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