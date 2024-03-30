import React, {useState} from "react";
import axios from "axios";
import styled from "styled-components";
import {Link, useNavigate} from "react-router-dom";


export const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name, value} = e.target;
    if (name === "username") setUsername(value);
    else if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
    else if (name === "confirmPassword") setConfirmPassword(value);
    else if (name === "role") setRole(value);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Check if password and confirm password match
      if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }

      const response = await axios.post("http://localhost:5000/api/register", {
        username,
        email,
        password,
        role,
      });
      console.log(response.data);
      alert("User registered successfully");
      // Clear form fields after successful registration
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setRole("");
      setError("");
      // Navigate to the login page
      navigate("/login");
    } catch (error) {
      console.error("Error registering user", error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred during registration");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledRegistrationForm>
      <div>
        <h2>Register</h2>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <form onSubmit={handleRegister}>
          <InputLabel htmlFor="username">Enter Your Name</InputLabel>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            value={username}
            onChange={handleChange}
            required
          />
          <InputLabel htmlFor="email">Enter Email Address</InputLabel>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
            required
          />
          <InputLabel htmlFor="password">Create a Password</InputLabel>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            required
          />
          <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
          <Input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleChange}
            required
          />

          <InputLabel htmlFor="role">Select</InputLabel>
          <Select name="role" value={role} onChange={handleChange} required>
            <option value="">----Select----</option>
            <option value="user">User</option>
            <option value="Business Owner">Business Owner</option>
            <option value="admin">Admin</option>
          </Select>

          <Button type="submit" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </Button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </StyledRegistrationForm>
  );
};
const StyledRegistrationForm = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ddd0e4;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 20px;
    color: #333;
    text-transform: uppercase;
    // text-align: center;
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
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: -10px;
  margin-bottom: 10px;
  font-size: 14px;
  text-align: center;
`;

const Register = () => {
  return <div>Register</div>;
};
export default Register;

