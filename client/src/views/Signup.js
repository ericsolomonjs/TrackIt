import React from "react";
import "../styles/Signup.css";

export default function Signup() {
  return (
    <div className="main-container">
      <h1>Sign Up</h1>
      <div className="signup-container">
        <form className="signup-form" action="">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="First Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="First Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">First Name</label>
            <input
              type="passord"
              className="form-control"
              id="password"
              placeholder="Passowir"
            />
          </div>
          <div className="form-group">
            <label htmlFor="passwordConfirmation">First Name</label>
            <input
              type="password"
              className="form-control"
              id="passwordConfirmation"
              placeholder="Password Confirmation"
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
