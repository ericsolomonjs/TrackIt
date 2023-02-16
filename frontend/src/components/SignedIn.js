import React, { useState } from "react";
import "../styles/SignedIn.css";
import "../styles/main.css";
import Row from "react-bootstrap/Row";
import Axios from "axios";
import Exercise from "./Exercise";

export default function SignedIn(props) {
  const [difficulty, setDifficulty] = useState("beginner");
  const [quickWorkout, setQuickWorkout] = useState(null);

  function getQuickWorkout(muscleGroup, difficulty) {
    Axios.get("schedule/quickworkout", {
      params: {
        muscleGroup: muscleGroup ? muscleGroup : "beginner",
        difficulty: difficulty,
      },
    }).then((res) => {
      const data = res.data;
      setQuickWorkout(data);
    });
  }
  
  function handleChange(value) {
    setDifficulty(value);
  }
  function goBack(){
    setQuickWorkout(null);
  }

  return (
    <div className="broad-container">
      <div className="img-container">
        <img
          className="main-image"
          src="https://images.pexels.com/photos/5327534/pexels-photo-5327534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <br/>
        <p className="heading-comment" margin="10px">
          Find what drives you.
        </p>
      </div>

      {quickWorkout && (
        <div>
          <br/>
          <div className="daysworkout-back container-fluid">
            <button className="btn btn-primary centre" onClick={() => goBack()}>
              Back
            </button>
          </div>
          <div className="main-workout-container container">
            <Row >
              {quickWorkout.map((exercise) => (
                <Exercise exercise={exercise} key={Math.random()*100}/>
              ))}
            </Row>
          </div>
        </div>
      )}

      {!quickWorkout && (
        <div className="general-container container">

          <h3>Pick a Quick Workout!</h3>
          <h4>Select difficulty first...</h4>
          <select
            className="custom-select mr-sm-2"
            id="difficultySelect"
            onChange={(e) => handleChange(e.target.value)}
          >
            <option defaultValue disabled>
              Select difficulty
            </option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>
          <div className="my-workouts-grid">
            <div className="my-workouts-card">
              <img
                className="my-workouts-card-image"
                src="body_images/arms.jpg"
                alt="arm workouts"
              />
              <div className="workout-pic-info col-md-12 text-center">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => getQuickWorkout("arms", difficulty)}
                >
                  {" "}
                  Quick Arms Workout
                </button>
              </div>
            </div>
            <div className="my-workouts-card">
              <img
                className="my-workouts-card-image"
                src="body_images/legs.jpg"
                alt="leg workouts"
              />
              <div className="workout-pic-info col-md-12 text-center">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => getQuickWorkout("legs", difficulty)}
                >
                  Quick Legs Workout
                </button>
              </div>
            </div>
            <div className="my-workouts-card">
              <img
                className="my-workouts-card-image"
                src="body_images/chest.jpg"
                alt="chest workouts"
              />
              <div className="workout-pic-info col-md-12 text-center">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => getQuickWorkout("chest", difficulty)}
                >
                  Quick Chest Workout
                </button>
              </div>
            </div>
            <div className="my-workouts-card">
              <img
                className="my-workouts-card-image"
                src="body_images/abs.jpg"
                alt="abs workouts"
              />
              <div className="workout-pic-info col-md-12 text-center">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => getQuickWorkout("abs", difficulty)}
                >
                  Quick Back Workout
                </button>
              </div>
            </div>
            <div className="my-workouts-card">
              <img
                className="my-workouts-card-image"
                src="body_images/back.jpg"
                alt="back workouts"
              />
              <div className="workout-pic-info col-md-12 text-center">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => getQuickWorkout("back", difficulty)}
                >
                  Quick Back Workout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <br/>
    </div>
  );
}
