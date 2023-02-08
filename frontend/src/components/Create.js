import React from "react";
import "../styles/Create.css";
import "../styles/main.css";
import Footer from "./Footer";
import Header from "./Header";

export default function Create() {
  return (
    <div>
      <Header />
      <h1>Select Muslce Groups</h1>
      <div className="create-container">
        <div className="create-workout">
          <div>
            <form action="">
              <h3>Select groups</h3>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Open this select menu</option>
                <option value="Arms">One</option>
                <option value="Legs">Two</option>
                <option value="Abs">Three</option>
                <option value="Chest">Three</option>
              </select>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
