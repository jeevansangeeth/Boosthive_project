import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../assets/css/BusinessOwnerDashboard.css";

function BusinessOwnerDashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/postdata");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchPosts();
  }, []);

  const handleDelete = async (post_id) => {
    try {
      await axios.delete(`http://localhost:5000/postdata/delete/${post_id}`);
      setPosts((prevPosts) => prevPosts.filter((post) => post._id !== post_id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="App">
      <div className="post-container">
        {posts.map((post) => (
          <div key={post._id} className="post-card">
            <img src={post.image} alt="not image" />
            <h2>{post.businessName}</h2>
            <p>{post.businessType}</p>
            <p>{post.description}</p>
            <Link to={`/update/${post._id}`}>
              <button>Edit</button>
            </Link>
            <button onClick={() => handleDelete(post._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BusinessOwnerDashboard;
