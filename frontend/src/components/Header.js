import React from "react";

export default function Header() {
  return (
    <header>
      <div class="img-container">
        <img className="home-img" src="workout1.jpeg" alt="Snow" />
        <p className="heading-comment">
          Track It! Where you can find the best workouts!
        </p>
        <button class="btn btn-primary">GET STARTED!</button>
      </div>
    </header>
  );
}
