import React, { useState } from "react";
import "../styles/Signup.css";
import { Outlet, Link } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
            <label htmlFor="email">First Name</label>
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
            <label htmlFor="password">First Name</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setEmail(e.target.value);
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
          <p>Already have an account?</p>
          <Link to="/signin">
            <button className="btn btn-primary">Sign in</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
