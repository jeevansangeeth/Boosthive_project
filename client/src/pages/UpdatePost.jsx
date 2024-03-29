import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/css/UpdatePost.css";

function UpdatePost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({
    businessName: "",
    businessType: "",
    description: "",
  });

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/postdata/${id}`
        );
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };
    fetchPost();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/postdata/update/${id}`, post);
      navigate("/businessownerdashboard");
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  return (
    <div className="update-post-container">
      <h2 className="heading">Update Post</h2>
      <form onSubmit={handleSubmit}>
        <label>BusinessName:</label>
        <input
          type="text"
          name="businessName"
          value={post.businessName}
          onChange={handleChange}
          placeholder="Business Name"
          className="input"
        />
        <label>BusinessType:</label>
        <input
          type="text"
          name="businessType"
          value={post.businessType}
          onChange={handleChange}
          placeholder="Business Type"
          className="input"
        />
        <label>Description:</label>
        <textarea
          name="description"
          value={post.description}
          onChange={handleChange}
          placeholder="Description"
          className="textarea"
        />
        <button type="submit" className="button">
          Update Post
        </button>
      </form>
    </div>
  );
}

export default UpdatePost;
