import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "../assets/css/OwnerDashboard.css";

const OwnerDashboard = () => {
  const location = useLocation();
  const user = location.state.user.user;
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  const myPost = () => {
    navigate("/businessownerdashboard", { state: { ownerId: user._id } });
  };

  const createPost = () => {
    navigate("/businesspost", { state: { ownerId: user._id } });
  };

  axios.get("http://localhost:5000/api/viewpost").then((response) => {
    setPosts(response.data);
  });

  return (
    <div className="admin-con">
      <nav className="navbar navbar-light">
        <div className="container-fluid">
          <h6 className="navbar-brand">Business Dashboard</h6>
          <h4>Welcome {user.username}</h4>
          <div className="d-flex busNav">
            <button className="button" onClick={myPost}>
              workers
            </button>
            <button className="button" onClick={myPost}>
              My Posts
            </button>
            <button className="button" onClick={createPost}>
              + Create Post
            </button>
          </div>
        </div>
      </nav>
      <hr />
      <div className="container mt-4">
        <div className="row">
          {posts.map((data) => (
            <div className="col-12 mb-5" key={data._id}>
              <div className="row">
                <div className="col-8">
                  <img
                    className="img"
                    src={data.image}
                    alt="image"
                    style={{
                      width: "100%",
                      height: "350px",
                      objectFit: "cover",
                      borderRadius: "5px",
                      margintTop: "10px",
                    }}
                  />
                </div>
                <div className="col">
                  <br />
                  <h2> businessName : {data.businessName}</h2>
                  <br />
                  <h4>businessType : {data.businessType}</h4>
                  {/* <br /> */}
                  <br />
                  <p>
                    <b>Description</b>: {data.description}
                  </p>
                  <br />
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OwnerDashboard;
