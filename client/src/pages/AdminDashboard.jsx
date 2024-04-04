import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css/AdminDashboard.css";

const AdminDashboard = () => {
  const [postedData, setPostedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/postedData")
      .then((response) => {
        setPostedData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const filtered = postedData.filter(
      (data) =>
        data.businessName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        data.businessType.toLowerCase().includes(searchQuery.toLowerCase()) ||
        data.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  }, [postedData, searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const ApprovedClick = (id) => {
    axios.put(`http://localhost:5000/api/approveData/${id}`);
  };
  const RejectedClick = (id) => {
    axios.put(`http://localhost:5000/api/rejectedData/${id}`);
  };

  return (
    <div className="admin-con">
      <nav className="navbar navbar-light bg-light sticky-top">
        <div className="container-fluid">
          <h5 className="navbar-brand te">Admin Dashboard</h5>
          <form className="d-flex">
            <input
              className="form-control mt-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button className="sbutton" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>

      <div className="container mt-4">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="row">
            {filteredData.map((data) => (
              <div className="col-12 mb-5" key={data._id}>
                <div className="row">
                  <div className="col-3">
                    <img
                      className="img"
                      src={data.image}
                      alt="image"
                      style={{
                        width: "100%",
                        height: "250px",
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
                    <button
                      className="button"
                      onClick={() => ApprovedClick(data._id)}
                    >
                      Approve
                    </button>
                    <button
                      className="button"
                      onClick={() => RejectedClick(data._id)}
                    >
                      Reject
                    </button>
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
