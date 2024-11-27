import { useState, useEffect } from "react";
import axios from "axios";

function Posts() {
  const [posts, setPosts] = useState([]); // Ensure default state is an empty array
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("https://backendproject-8m9r.onrender.com/posts"); // Replace with your API endpoint
        console.log("API Response:", response.data.data); // Debug API response

        // Ensure the response is an array
        if (Array.isArray(response.data.data)) {
          setPosts(response.data.data);
        } else {
          console.error("API returned non-array data:", response.data.data);
          setPosts([]); // Fallback to an empty array
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPosts([]); // Fallback to an empty array on error
      }
    };

    fetchPosts();
  }, []);

  const handleDelete = async (postId) => {
    try {
      await axios.delete(`https://backendproject-8m9r.onrender.com/posts/${postId}`);
      setPosts(posts.filter((post) => post.id !== postId));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const handleEdit = (post) => {
    setEditingPost(post);
  };

  const handleUpdate = async (updatedPost) => {
    try {
      await axios.put(`https://backendproject-8m9r.onrender.com/posts/${updatedPost.id}`, updatedPost);
      const updatedPosts = posts.map((post) =>
        post.id === updatedPost.id ? updatedPost : post
      );
      setPosts(updatedPosts);
      setEditingPost(null);
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const handleCancelEdit = () => {
    setEditingPost(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">All Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Array.isArray(posts) && posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="bg-white shadow-md rounded-lg p-6">
              {editingPost && editingPost.id === post.id ? (
                <form onSubmit={(e) => e.preventDefault()}>
                  <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleUpdate(editingPost)}
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                    onClick={handleCancelEdit}
                  >
                    Cancel
                  </button>
                </form>
              ) : (
                <>
                  <h2 className="text-xl font-bold mb-2">{post.name}</h2>
                  <p className="text-gray-700 mb-2">Price: ${post.price}</p>
                  <p className="text-gray-700 mb-2">Category: {post.category}</p>
                  <p className="text-gray-700 mb-2">Type: {post.type}</p>
                  <p className="text-gray-700">{post.details}</p>
                  <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleEdit(post)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                    onClick={() => handleDelete(post.id)}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          ))
        ) : (
          <p className="text-2xl text-center">No posts available.</p>
        )}
      </div>
    </div>
  );
}

export default Posts;
