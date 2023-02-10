import React, { useState } from "react";
import "../styles/Signup.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Signup(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const setLoggedIn = props.setLoggedIn;

  const navigate = useNavigate();

  const onChange = () => {
    console.log("here");
    document.getElementById("errorMsg").innerHTML = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirmation) {
      document.getElementById("errorMsg").innerHTML =
        "Passwords must be the same.";
      return;
    }

    const ops = {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        passwordConfirmation,
      }),
    };

    console.log("Options", ops);

    fetch("http://localhost:8080/user/create", ops)
      .then((res) => {
        setLoggedIn(true);
        navigate("/home");
      })
      .catch((err) => alert(err, "Server Error"));
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
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                onChange();
              }}
              required
              minLength={3}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
                onChange();
              }}
              required
              minLength={3}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => {
                setEmail(e.target.value);
                onChange();
              }}
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
              required
              minLength={6}
              onChange={(e) => {
                setPassword(e.target.value);
                onChange();
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="passwordConfirmation">Password Confirmation</label>
            <input
              type="password"
              className="form-control"
              id="passwordConfirmation"
              placeholder="Password Confirmation"
              value={passwordConfirmation}
              required
              onChange={(e) => {
                setPasswordConfirmation(e.target.value);
                onChange();
              }}
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
