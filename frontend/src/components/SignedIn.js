import React, { useEffect } from "react";
import "../styles/SignedIn.css";
import Cookies from "js-cookie";

export default function SignedIn() {
  useEffect(() => {
    const id = Cookies.get("user_id");
    console.log(id);
  }, []);

  return (
    <div className="broad-container">
      <div class="image-container">
        <img
          className="main-image"
          src="https://www.muscleandfitness.com/wp-content/uploads/2020/01/DEADLIFT.jpg?quality=86&strip=all"
          alt=""
        />
        <a href="/create">
          <button class="btn btn-primary">Create New Workout</button>
        </a>
      </div>

      <div className="general-container">
        <h3>Main Logged in </h3>
        <div className="my-workouts-grid">
          {/* add grid-container-view */}
          <div className="my-workouts-card">
            <img
              className="my-workouts-card-image"
              src="https://thumbs.dreamstime.com/b/highlighted-biceps-d-rendered-illustration-30721898.jpg"
            />
            <div className="workout-pic-info">
              <button className="btn-btn-primary"> My Arm Day</button>
            </div>
          </div>
          <div className="my-workouts-card">
            <img
              className="my-workouts-card-image"
              src="https://thumbs.dreamstime.com/b/highlighted-biceps-d-rendered-illustration-30721898.jpg"
            />
            <div className="workout-pic-info">
              <button className="btn-btn-primary"> My Leg Day</button>
            </div>
          </div>
          <div className="my-workouts-card">
            <img
              className="my-workouts-card-image"
              src="https://thumbs.dreamstime.com/b/highlighted-biceps-d-rendered-illustration-30721898.jpg"
            />
            <div className="workout-pic-info">
              <button className="btn-btn-primary"> My Chest Day</button>
            </div>
          </div>
          <div className="my-workouts-card">
            <img
              className="my-workouts-card-image"
              src="https://thumbs.dreamstime.com/b/highlighted-biceps-d-rendered-illustration-30721898.jpg"
            />
            <div className="workout-pic-info">
              <button className="btn-btn-primary"> My Abs Day</button>
            </div>
          </div>
        </div>
      </div>
      <div className="schedule-container">
        <a href="/schedule" className="go-to-schedule">
          {" "}
          Go to my full schedule{" "}
        </a>
        <img
          className="my-schedule-image"
          src="https://images.unsplash.com/photo-1603077492579-39ff927823db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        />
      </div>
    </div>
  );
}
