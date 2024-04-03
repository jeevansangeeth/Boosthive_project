import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "../assets/css/BusinessPost.css";

const BusinessPost = () => {
  const [formData, setFormData] = useState({
    image: "",
    businessName: "",
    businessType: "",
    description: "",
  });
  const location = useLocation();
  const ownerId = location.state.user.ownerId;
  console.log(ownerId);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/posts",
        formData
      );
      console.log("Response:", response.data);
      setFormData({
        image: "",
        businessName: "",
        businessType: "",
        description: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="container">
      <div className="card-container">
        <div className="image-container">
          <img
            src="https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGJ1c2luZXNzJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D"
            alt="Business"
          />
        </div>
        <form onSubmit={handleSubmit} className="form-container">
          <h3>Post Your Business Details</h3>
          <label htmlFor="image">Business Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
          <label htmlFor="businessName">Business Name:</label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            required
          />
          <label htmlFor="businessType">Business Type:</label>
          <input
            type="text"
            id="businessType"
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            required
          />
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default BusinessPost;
