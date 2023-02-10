import React, { useEffect, useState } from "react";
import "../styles/SignedIn.css";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

export default function SignedIn() {
  const [muscles, setMuscles] = useState([]);
  const [difficulty, setDifficulty] = useState("");

  useEffect(() => {
    const arr = [];
    const ops = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
      mode: "cors",
      credentials: "include",
    };
    fetch("http://localhost:8080/user/groups", ops)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        for (const item in data[0].muscles) {
          arr.push(data[0].muscles[item]);
        }
        setMuscles(arr);
        setDifficulty(data[0].difficulty);
      });
  }, []);

  return (
    <div className="broad-container">
      <div class="image-container">
        <img
          className="main-image"
          src="https://www.muscleandfitness.com/wp-content/uploads/2020/01/DEADLIFT.jpg?quality=86&strip=all"
          alt=""
        />
        <Link style={{ marginBottom: "25px" }} to="/create">
          <button className="btn btn-primary">Create Workout</button>
        </Link>
      </div>

      <div className="general-container">
        <br />
        <h3>My Quick Workouts </h3>
        <h4>Difficulty: {difficulty}</h4>
        <div className="my-workouts-grid">
          {/* add grid-container-view */}
          {muscles.includes("Arms") && (
            <>
              <div className="my-workouts-card">
                <img
                  className="my-workouts-card-image"
                  src="body_images/arms.jpg"
                  alt="arms"
                />
                <div className="workout-pic-info">
                  <button className="btn-btn-primary"> My Arm Day</button>
                </div>
              </div>
            </>
          )}
          {muscles.includes("Legs") && (
            <>
              <div className="my-workouts-card">
                <img
                  className="my-workouts-card-image"
                  src="body_images/legs.jpg"
                  alt="legs"
                />
                <div className="workout-pic-info">
                  <button className="btn-btn-primary"> My Leg Day</button>
                </div>
              </div>
            </>
          )}
          {muscles.includes("Chest") && (
            <>
              <div className="my-workouts-card">
                <img
                  className="my-workouts-card-image"
                  src="body_images/chest.jpg"
                  alt="chest"
                />
                <div className="workout-pic-info">
                  <button className="btn-btn-primary"> My Chest Day</button>
                </div>
              </div>
            </>
          )}
          {muscles.includes("Abs") && (
            <>
              <div className="my-workouts-card">
                <img
                  className="my-workouts-card-image"
                  src="body_images/abs.jpg"
                  alt="abs"
                />
                <div className="workout-pic-info">
                  <button className="btn-btn-primary"> My Abs Day</button>
                </div>
              </div>
            </>
          )}
          {muscles.includes("Back") && (
            <>
              <div className="my-workouts-card">
                <img
                  className="my-workouts-card-image"
                  src="body_images/back.jpg"
                />
                <div className="workout-pic-info">
                  <button className="btn-btn-primary"> My Abs Day</button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="schedule-container"></div>
    </div>
  );
}
