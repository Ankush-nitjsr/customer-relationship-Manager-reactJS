import React, { useState } from "react";
import Header from "../components/Common/Header";
import Input from "../components/Common/Input";
import Button from "../components/Common/Button";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const { token, login } = useAuth();
  const [flag, setFlag] = useState(false);
  const [loading, setLoading] = useState(false);
  const [admin, setAdmin] = useState({ username: "", password: "" });
  const handleLogIn = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/auth/login",
        admin
      );
      const data = response.data;
      console.log(data);

      // token is available in data
      const token = data;

      // Use the login function to set the token in the context
      login(token);
      console.log(login);

      // set the page to logout page
      setFlag(!flag);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const handleLogOut = () => {
    setFlag(!flag);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdmin((prevAdmin) => ({ ...prevAdmin, [name]: value }));
  };

  return (
    <>
      <Header />

      {!flag ? (
        <div className="input-wrapper">
          <h1>Login Page</h1>
          <input
            name="username"
            type="text"
            value={admin.username}
            onChange={handleChange}
            placeholder="User Name"
            className="custom-input"
          />
          <input
            name="password"
            type="password"
            value={admin.password}
            onChange={handleChange}
            placeholder="Password"
            className="custom-input"
          />
          <Button
            text={loading ? "Loading..." : "Login"}
            disabled={loading}
            onClick={handleLogIn}
          />
        </div>
      ) : (
        <div className="input-wrapper">
          <h1>Login Page</h1>
          <h2 style={{ color: "red" }}>Admin is already Logged In</h2>
          <p>{`Bearer Token ${token}`}</p>
          <p>Click on below button to LogOut</p>
          <Button
            text={loading ? "Loading..." : "LogOut"}
            disabled={loading}
            onClick={handleLogOut}
          />
        </div>
      )}
    </>
  );
}

export default LoginPage;
