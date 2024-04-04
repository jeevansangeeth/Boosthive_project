import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/BusinessOwnerDashboard.css";

function BusinessOwnerDashboard() {
  const [posts, setPosts] = useState([]);
  const location = useLocation();
  const ownerId = location.state.ownerId;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/mypost/${ownerId}`
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error here
      }
    };
    fetchPosts();
  }, [ownerId]); // Added ownerId to dependency array

  const handleDelete = async (post_id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/postdata/delete/${post_id}`
      );
      setPosts((prevPosts) => prevPosts.filter((post) => post._id !== post_id));
    } catch (error) {
      console.error("Error deleting post:", error);
      // Handle error here
    }
  };

  return (
    <div className="App">
      {/* <OwnerDashboard /> */}
      <div
        className="post-container"
        style={{
          display: "flex",
        }}
      >
        {posts.map((post) => (
          <div key={post._id} className="post-card">
            <div className="post-image">
              {/* <img src={post.image} alt="not image" /> */}
              <img
                // src="https://media.timeout.com/images/102190005/750/562/image.jpg"
                src={post.image}
                alt="not image"
                style={{
                  width: "90%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "5px",
                  margintTop: "10px",
                  // display: "flex",
                }}
              />
            </div>
            <div className="post-content">
              <h4>{post.businessName}</h4>
              <h3>{post.businessType}</h3>
              <p>{post.description}</p>
              <div className="button-group">
                <Link to={`/update/${post._id}`}>
                  <button className="button">Edit</button>
                </Link>
                <button
                  className="button"
                  onClick={() => handleDelete(post._id)}
                >
                  Delete
                </button>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BusinessOwnerDashboard;
