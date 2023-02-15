import React, { useEffect, useState } from "react";
import "../styles/SignedIn.css";
import "../styles/main.css";
import { Navigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Axios from "axios";
import { firstLetterCapitalize } from "../helpers/CapitalizeFirst";

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
          src="https://www.muscleandfitness.com/wp-content/uploads/2020/01/DEADLIFT.jpg?quality=86&strip=all"
          alt=""
        />
        <p className="heading-comment" margin="10px">
          Track It. Where you can find the best workouts.
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
          <div className="main-workout-container">
            <Row xs={1} md={2} className="g-5 row-days">
              {quickWorkout.map((exercise) => (
                <Col key={Math.random(1000)}>
                  <Card>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                      <Card.Title>{exercise.name}</Card.Title>
                      <br />
                      <Card.Subtitle className="mb-2 text-muted">
                        Duration
                      </Card.Subtitle>
                      <Card.Text>60 Seconds</Card.Text>
                      <br />
                      <Card.Subtitle className="mb-2 text-muted">
                        Difficulty
                      </Card.Subtitle>
                      <Card.Text>
                        {firstLetterCapitalize(exercise.difficulty)}
                      </Card.Text>
                      <br />
                      <Card.Subtitle className="mb-2 text-muted">
                        Equipment
                      </Card.Subtitle>
                      <Card.Text>
                        {firstLetterCapitalize(exercise.equipment)}
                      </Card.Text>
                      <br />
                      <Card.Subtitle className="mb-2 text-muted">
                        Instructions
                      </Card.Subtitle>
                      <Card.Text className="exer-info">
                        {exercise.instructions}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      )}

      {!quickWorkout && (
        <div className="general-container container">
          <br />
          <h3>Create a Quick Workout!</h3>
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
      <div className="schedule-container"></div>
    </div>
  );
}
