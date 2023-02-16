import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="img-container">
        <img className="home-img" src="https://www.muscleandfitness.com/wp-content/uploads/2020/01/DEADLIFT.jpg?quality=86&strip=all" alt="Snow" />
        <p className="heading-comment">
          Track-It
        </p>
        <Link to="/signup">
          <button className="btn btn-primary">Sign up</button>
        </Link>
      </div>
    </header>
  );
}
