import styled from "styled-components";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom"; // Import useNavigate hook
import axios from "axios";


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      setToken(response.data.token);
      console.log(response.data);
      alert("Login successful");
      navigate("/"); // Navigate to the home page ("/") after successful login
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
        {error && <p style={{color: "red"}}>{error}</p>}
        <form onSubmit={handleLogin}>
          <InputLabel htmlFor="email">Enter Email Address</InputLabel>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <InputLabel htmlFor="password">Create a Password</InputLabel>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </StyledLoginForm>
  );
};

const StyledLoginForm = styled.div`
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
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    width: calc(100% - 20px);
    padding: 12px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 16px;
    transition: border-color 0.3s ease;
    align-items: center;
  }

  input:focus {
    border-color: #007bff;
  }

  button {
    width: calc(100% - 20px);
    padding: 12px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  button:hover {
    background-color: #0056b3;
  }

  p {
    color: red;
    margin-top: -10px;
    margin-bottom: 10px;
    font-size: 14px;
    text-align: center;
  }
`;
const InputLabel = styled.label`
  color: #333;
  margin-bottom: 6px;
  font-weight: bold;
  text-align: left;
`;

const Login = () => {
  return <div>Login</div>;
};
export default Login;

