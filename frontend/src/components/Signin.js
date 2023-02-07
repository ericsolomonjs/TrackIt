import React, { useState } from "react";
import "../styles/Signin.css";
import { Link } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const ops = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    };

    fetch("http://localhost:8080/user/login", ops)
      .then((res) => res.json())
      .catch((err) => alert(err, "Server Error"))
      .then((res) => console.log(res));
  };

  return (
    <div className="main-container">
      <h1>Sign Up</h1>
      <div className="signup-container">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="signup-form"
        >
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>
          <p style={{ color: "red" }} id="errorMsg"></p>
          <div className="button-container">
            <button className="submit-button btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
        <div className="right-panel">
          <h1>Track It</h1>
          <p>Don't have an account?</p>
          <Link to="/">
            <button className="btn btn-primary">Sign up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
