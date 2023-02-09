import React from "react";

export default function Header() {
  return (
    <header>
      <div className="img-container">
        <img className="home-img" src="workout1.jpeg" alt="Snow" />
        <p className="heading-comment">
          Track It! Where you can find the best workouts!
        </p>
        <button className="btn btn-primary">GET STARTED!</button>
      </div>
    </header>
  );
}
