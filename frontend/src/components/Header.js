import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="img-container">
        <img className="home-img" src="workout1.jpeg" alt="Snow" />
        <p className="heading-comment">
          Track It! Where you can find the best workouts!
        </p>
        <Link to="/signup">
          <button className="btn btn-primary">GET STARTED!</button>
        </Link>
      </div>
    </header>
  );
}
