import React, { useState } from "react";
import "../styles/Signup.css";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className="main-container">
      <h1>Sign Up</h1>
      <div className="signup-container">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
            console.log("here");
          }}
          className="signup-form"
        >
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">First Name</label>
            <input
              type="passord"
              className="form-control"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="passwordConfirmation">First Name</label>
            <input
              type="password"
              className="form-control"
              id="passwordConfirmation"
              placeholder="Password Confirmation"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </div>
          <div className="button-container">
            <button className="submit-button btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
        <div className="right-panel">
          <h1>Track It</h1>
          <p>Already have an account?</p>
          <button className="btn btn-primary">Sign in</button>
        </div>
      </div>
    </div>
  );
}
