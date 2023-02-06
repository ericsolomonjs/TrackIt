import React, { useState, useEffect } from "react";
import Axios from "axios";

async function submitRegistrationForm(stateObj) {
  //submit the new user to the api server to be saved with an axios request
  //Axios.put("")
  const res = await Axios.put('user/new', { ...stateObj })
    .then(() => { return res; })
    .catch((err) => { return err; })

}

export default function Signup() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConf: ""
  })

  const handleChange = (e) => {
    let change = {}
    change[e.target.name] = e.target.value

    setState((prev) => {
      return {
        ...prev,
        ...change
      }
    });
  }

  useEffect(() => {
    //check for user session in local, then compare to remote and rectify variances on load 
    //before the registration form loads
  }, [])

  return (

    <form>
      <div className="form-group">
        <br />
        <h1>Sign Up</h1>

        <label><b>First Name</b></label>
        <input onChange={handleChange} value={state.firstName} type="text" placeholder="Enter first name" name="firstName" required />
        <label  ><b>Last Name</b></label>
        <input onChange={handleChange} value={state.lastName} type="text" placeholder="Enter last name" name="lastName" required />
        <label ><b>Email</b></label>
        <input onChange={handleChange} value={state.email} type="text" placeholder="Enter Email" name="email" required />
        <label ><b>Password</b></label>
        <input onChange={handleChange} value={state.password} type="password" placeholder="Enter Password" name="password" required suggested="new-password" />
        <label ><b>Repeat Password</b></label>
        <input onChange={handleChange} value={state.passwordConf} type="password" placeholder="Repeat Password" name="passwordConf" required suggested="new-password" />
        <br />
        <div>
          <button type="button" className="cancel btn btn-secondary">Cancel</button>
          <div></div>
          <button type="submit" className="signup btn btn-primary" onClick={() => submitRegistrationForm(state)}>Sign Up</button>
        </div>
      </div>
    </form>

  )
}

