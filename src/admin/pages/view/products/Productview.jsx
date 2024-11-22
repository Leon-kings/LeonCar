import { useState, useEffect } from 'react';
import axios from 'axios';

const PostsTable = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  // Error handling for API requests
  const handleError = (error) => {
    console.error('Error:', error);
    // You can also display user-friendly error messages here
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://backendproject-8m9r.onrender.com/posts');
        setPosts(response.data);
      } catch (error) {
        handleError(error);
      }
    };

    fetchPosts();
  }, []);

  const handleDelete = async (postId) => {
    try {
      await axios.delete(`https://backendproject-8m9r.onrender.com/posts/${postId}`);
      setPosts(posts.filter((post) => post._id !== postId)); // Update local state
    } catch (error) {
      handleError(error);
    }
  };

  const handleUpdate = async (updatedPost) => {
    try {
      const response = await axios.put(`https://backendproject-8m9r.onrender.com/posts/${updatedPost._id}`, updatedPost);
      const updatedPosts = posts.map((post) => (post._id === updatedPost._id ? response.data : post));
      setPosts(updatedPosts);
      setSelectedPost(null); // Clear selected post after update
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <div className="container mx-auto">
      <h1>Posts</h1>
      {posts.length > 0 ? (
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Content</th>
              {/* Add more post property headers as needed */}
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post._id}>
                <td className="px-4 py-2">{post.title}</td>
                <td className="px-4 py-2">{post.content.substring(0, 50)}...</td> {/* Truncate content for table display */}
                {/* Add more post property data cells as needed */}
                <td className="px-4 py-2">
                  <button className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded" onClick={() => handleDelete(post._id)}>
                    Delete
                  </button>
                  <button className="bg-green-500 hover:bg-green-700 text-white px-2 py-1 rounded ml-2" onClick={() => setSelectedPost(post)}>
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No posts found.</p>
      )}

      {selectedPost && (
        <div className="mt-4">
          <h2>Update Post</h2>
          {/* Form for updating post details goes here */}
          <form onSubmit={(e) => {
            e.preventDefault();
            // Extract updated post data from form fields
            const updatedPost = {
              // ... updated post data
            };
            handleUpdate(updatedPost);
          }}>
            {/* Update form fields for title, content, etc. */}
            <button type="submit" className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded">
              Update
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PostsTable;