import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Example from '../../request/component/ExampleSide';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [editingTestimonial, setEditingTestimonial] = useState(null);
  const [updatedText, setUpdatedText] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  // Fetch all testimonials
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get('https://backendproject-8m9r.onrender.com/testimony');
        setTestimonials(response.data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  // Delete a testimonial
  const deleteTestimonial = async (id) => {
    try {
      await axios.delete(`https://backendproject-8m9r.onrender.com/testimony/${id}`);
      setTestimonials(testimonials.filter((t) => t.id !== id));
    } catch (error) {
      console.error('Error deleting testimonial:', error);
    }
  };

  // Start editing a testimonial
  const startEditing = (testimonial) => {
    setEditingTestimonial(testimonial);
    setUpdatedText(testimonial.text);
  };

  // Update a testimonial
  const updateTestimonial = async () => {
    try {
      const updatedTestimonial = {
        ...editingTestimonial,
        text: updatedText,
      };
      await axios.put(`https://backendproject-8m9r.onrender.com/testimony/${editingTestimonial.id}`, updatedTestimonial);
      setTestimonials(
        testimonials.map((t) =>
          t.id === editingTestimonial.id ? updatedTestimonial : t
        )
      );
      setEditingTestimonial(null);
      setUpdatedText('');
    } catch (error) {
      console.error('Error updating testimonial:', error);
    }
  };

  return (
    <div>
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
      <h1>Testimonials</h1>
      {testimonials.length > 0 ? (
        <ul>
          {testimonials.map((testimonial) => (
            <li key={testimonial.id}>
              {editingTestimonial?.id === testimonial.id ? (
                <div>
                  <textarea
                    value={updatedText}
                    onChange={(e) => setUpdatedText(e.target.value)}
                  />
                  <button onClick={updateTestimonial}>Save</button>
                  <button onClick={() => setEditingTestimonial(null)}>
                    Cancel
                  </button>
                </div>
              ) : (
                <div>
                  <p>{testimonial.text}</p>
                  <button onClick={() => startEditing(testimonial)}>Edit</button>
                  <button onClick={() => deleteTestimonial(testimonial.id)}>
                    Delete
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No testimonials found.</p>
      )}
        <div className="container">
      <Example/>
    </div>
    </div>
  
    </div>
    </div>
  );
};

export default Testimonials;
