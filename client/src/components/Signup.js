import react, { useState, useEffect } from "react";
import Axios from "axios";

async function submitRegistrationForm (stateObj) {
  //submit the new user to the api server to be saved with an axios request
  //Axios.put("")
  const res = await Axios.put('user/new', {...stateObj})
  .then(() => {return res;})
  .catch((err) => {return err;})

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
    setState(change)
  };

  useEffect(() => {
    //check for user session in local, then compare to remote and rectify variances on load 
    //before the registration form loads
  }, [])

  return (
    <body>
      <form>
        <div className="form-group">
          <h1>Sign Up Form</h1>
          <hr />
          <label onChange={handleChange} value={state.firstName}><b>First Name</b></label>
          <input type="text" placeholder="Enter first name" name="firstName" required />
          <label onChange={handleChange} value={state.lastName}><b>Last Name</b></label>
          <input type="text" placeholder="Enter last name" name="lastName" required />
          <label onChange={handleChange} value={state.email}><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" required />
          <label onChange={handleChange} value={state.password}><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" required suggested="new-password"/>
          <label onChange={handleChange} value={state.passwordConf}><b>Repeat Password</b></label>
          <input type="password" placeholder="Repeat Password" name="passwordConf" required suggested="new-password"/>
          <br/>
          <div>
            <button type="button" className="cancel btn-primary">Cancel</button>
            <button type="submit" className="signup btn-danger" onClick={() => submitRegistrationForm(state)}>Sign Up</button>
          </div>
        </div>
      </form>
    </body>
  )
}

