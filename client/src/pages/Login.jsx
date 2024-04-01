import styled from "styled-components";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate hook
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role2, setRole] = useState(""); // State for role
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
        role2,
      });
      console.log(response.data);
      alert("Login successful");

      // Extract the role from the response and log it
      const { role } = response.data;
      console.log("Role from response:", role);

      switch (role) {
        case "admin":
          navigate("/admindashboard");
          break;
        case "Business Owner":
          navigate("/businessownerdashboard");
          break;
        default:
          navigate("/userdashboard");
      }
    } catch (error) {
      console.error("Error Logging in", error);
      setError("An error occurred while logging in");
    } finally {
      setLoading(false);
    }
  };
  return (
    <StyledLoginForm>
      <div>
        <h2>Login </h2>
        {error && <ErrorMessage style={{ color: "red" }}>{error}</ErrorMessage>}
        <form onSubmit={handleLogin}>
          <InputLabel htmlFor="email">Enter Email Address</InputLabel>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            title="Please enter a valid email address"
            required
          />
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.*\s).{8,}"
            title="Password should contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long"
            required
          />
          {/* Role selection */}
          <InputLabel htmlFor="role">Select Role</InputLabel>
          <Select
            name="role"
            value={role2}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select Role</option>
            <option value="user">User</option>
            <option value="Business Owner">Business Owner</option>
            <option value="admin">Admin</option>
          </Select>
          <Button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </StyledLoginForm>
  );
};

// Styled components and export remain unchanged

const StyledLoginForm = styled.div`
  width: 100%;
  max-width: 400px;
  // margin: 0 auto;
  margin: 5rem auto;
  padding: 20px;
  background-color: #ddd0e4;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 20px;
    color: #333;
    text-transform: uppercase;
    text-align: center;
  }

  div {
    padding: 0 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    // align-items: center;
  }

  p {
    color: #333;
    text-align: center;
    margin-top: 20px;
  }
`;

const InputLabel = styled.label`
  color: #333;
  margin-bottom: 6px;
  font-weight: bold;
  text-align: left;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  box-sizing: border-box;

  &:focus {
    border-color: #007bff;
  }
`;
const Select = styled.select`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  box-sizing: border-box;

  &:focus {
    border-color: #007bff;
  }
`;
const Button = styled.button`
  margin: 10px;
  padding: 8px;
  background-color: blueviolet;
  color: white;
  border-radius: 5px;
  font-weight: 500;
  font-size: 18px;

  &:hover {
    background-color: rgb(87, 7, 161);
    box-shadow: 5px 5px 3px #bb87bb;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: -10px;
  margin-bottom: 10px;
  font-size: 14px;
  text-align: center;
`;

export default Login;
