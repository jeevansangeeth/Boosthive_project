import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "../assets/css/BusinessPost.css";

const BusinessPost = () => {
  const [formData, setFormData] = useState({
    image: null,
    businessName: "",
    businessType: "",
    location: "",
    description: "",
    flag: "pending",
  });
  const location = useLocation();
  const ownerId = location.state.ownerId;
  console.log(location.state.ownerId);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64Data = reader.result;
          setFormData({ ...formData, [name]: base64Data });
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const postData = {
        ...formData,
        ownerId,
      };

      const response = await axios.post(
        "http://localhost:5000/api/posts",
        postData
      );
      console.log("Response:", response.data);
      setFormData({
        ...formData,
        image: null,
        businessName: "",
        businessType: "",
        location: "",
        description: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="card-container">
          <div className="image-container">
            <img
              src="https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGJ1c2luZXNzJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D"
              alt="Business"
            />
          </div>
          <form onSubmit={handleSubmit} className="form-container">
            <h4>
              <b>Post Your Business Details</b>
            </h4>
            <label htmlFor="image">
              <b> Business Image:</b>
            </label>
            <input
              type="file"
              accept="image/*"
              id="image"
              name="image"
              onChange={handleChange}
              required
            />
            <label htmlFor="businessName">
              <b>Business Name:</b>
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              required
            />
            <label htmlFor="businessType">
              <b>Business Type:</b>
            </label>
            <input
              type="text"
              id="businessType"
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              required
            />
            <label htmlFor="location">
              <b>Location:</b>
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
            <label htmlFor="description">
              <b>Description:</b>
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BusinessPost;
