import axios from "axios";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OwnerDashboard = () => {
  const location = useLocation();
  const user = location.state.user.user;
  // const ownerId = location.state.user.user.id;
  // console.log(ownerId);
  const navigate = useNavigate();

  const myPost = () => {
    navigate("/businessownerdashboard");
  };

  const createPost = () => {
    navigate("/businesspost", { state: { ownerId: user.id } });
  };

  return (
    <div className="admin-con">
      <nav className="navbar navbar-light bg">
        <div className="container-fluid">
          <h5 className="navbar-brand te">Business Dashboard</h5>
          <h4>Welcome {user.username}</h4>
          <div className="d-flex busNav">
            <button onClick={myPost}>My Posts</button>
            <button onClick={createPost}> + Create Post </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default OwnerDashboard;
