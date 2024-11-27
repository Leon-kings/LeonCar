import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Example from '../request/component/ExampleSide';

const PostsTable = () => {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    price: "",
    category: "",
    capacity: "",
    type: "",
    url: "",
  });

  // Fetch posts from API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("https://backendproject-8m9r.onrender.com/posts"); // Replace with your API URL
        setPosts(response.data.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
        alert("Error fetching posts:", error)
      }
    };

    fetchPosts();
  }, []);

  // Delete post
  const handleDelete = async (postId) => {
    try {
      await axios.delete(`https://backendproject-8m9r.onrender.com/posts/${postId}`);
      setPosts(posts.filter((post) => post._id !== postId));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  // Handle edit
  const handleEdit = (post) => {
    setEditingPost(post.id);
    setFormData({
      name: post.name,
      email: post.email,
      price: post.price,
      category: post.category,
      capacity: post.capacity,
      type: post.type,
      url: post.url,
    });
  };

  // Update post
  const handleUpdate = async (postId) => {
    try {
      await axios.put(`https://backendproject-8m9r.onrender.com/posts/${postId}`, formData);
      setPosts(
        posts.map((post) =>
          post._id === postId ? { ...post, ...formData } : post
        )
      );
      setEditingPost(null);
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
    <div className="container ">
 
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
      <h1>Posts</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left py-2 px-4 border">ID</th>
              <th className="text-left py-2 px-4 border">Name</th>
              <th className="text-left py-2 px-4 border">Email</th>
              <th className="text-left py-2 px-4 border">Price</th>
              <th className="text-left py-2 px-4 border">Category</th>
              <th className="text-left py-2 px-4 border">Capacity</th>
              <th className="text-left py-2 px-4 border">Type</th>
              <th className="text-left py-2 px-4 border">URL</th>
              <th className="text-center py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post._id} className="border-t">
                {editingPost === post._id ? (
                  <>
                    <td className="py-2 px-4 border">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
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
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        className="w-full border p-1"
                      />
                    </td>
                    <td className="py-2 px-4 border">
                      <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full border p-1"
                      />
                    </td>
                    <td className="py-2 px-4 border">
                      <input
                        type="number"
                        name="capacity"
                        value={formData.capacity}
                        onChange={handleInputChange}
                        className="w-full border p-1"
                      />
                    </td>
                    <td className="py-2 px-4 border">
                      <input
                        type="text"
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                        className="w-full border p-1"
                      />
                    </td>
                    <td className="py-2 px-4 border">
                      <input
                        type="url"
                        name="url"
                        value={formData.url}
                        onChange={handleInputChange}
                        className="w-full border p-1"
                      />
                    </td>
                    <td className="py-2 px-4 border text-center">
                      <button
                        className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                        onClick={() => handleUpdate(post._id)}
                      >
                        Save
                      </button>
                      <button
                        className="bg-gray-500 text-white px-2 py-1 rounded"
                        onClick={() => setEditingPost(null)}
                      >
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="py-2 px-4 border">{post._id}</td>
                    <td className="py-2 px-4 border">{post.name}</td>
                    <td className="py-2 px-4 border">{post.email}</td>
                    <td className="py-2 px-4 border">${post.price}</td>
                    <td className="py-2 px-4 border">{post.category}</td>
                    <td className="py-2 px-4 border">{post.capacity}</td>
                    <td className="py-2 px-4 border">{post.type}</td>
                    <td className="py-2 px-4 border">
                      <a href={post.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                        View
                      </a>
                    </td>
                    <td className="py-2 px-4 border text-center">
                      <button
                        className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                        onClick={() => handleEdit(post)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 text-white px-2 py-1 rounded"
                        onClick={() => handleDelete(post._id)}
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
      </div>

      <div className="container">
        <Example/>
      </div>
    </div>
    </div>
    </>
  );
};

export default PostsTable;