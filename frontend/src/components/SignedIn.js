import React, { useEffect, useState } from "react";
import "../styles/SignedIn.css";
import "../styles/main.css";
import { Link } from "react-router-dom";
import Axios from "axios";
import Cookies from "js-cookie";

export default function SignedIn(props) {
  const [muscles, setMuscles] = useState([]);
  const [difficulty, setDifficulty] = useState();
  const [schedule, setSchedule] = useState(null);
  //simpler init data

  function getSchedule(id) {
    if (id) {
      Axios.get("/schedule/", {
        params: {
          user_id: id,
        },
        withCredentials: true,
      })
        .then((res) => {
          setSchedule(res.data[0].schedule);
        })
        .catch((error) => {
          console.error("get schedule error", error);
        });
    }
  }

  useEffect(() => {
    const userId = Cookies.get("user_id");
    getSchedule(userId);
    const arr = [];
    try {
      Axios.get("/user/groups", { withCredentials: true }).then((res) => {
        if (res.data[0].muscles) {
          for (const item in res.data[0].muscles) {
            arr.push(res.data[0].muscles[item]);
          }
          setMuscles(arr);
          setDifficulty(res.data[0].difficulty);
        }
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  function getDaysWorkoutLink(muscleGroup) {
    if (schedule) {
      if (muscles.includes(muscleGroup)) {
        for (let i = 0; i < 7; i++) {
          if (schedule[`${i}`].daysFocus === muscleGroup.toLowerCase()) {
            const url = `/days/${i}`;
            return (
              <Link to={url} className="btn btn-primary">
                My {muscleGroup} Day
              </Link>
            );
          }
        }
      }
    }
  }

  return (
    <div className="broad-container">
      <div className="img-container">
        <img
          className="main-image"
          src="https://www.muscleandfitness.com/wp-content/uploads/2020/01/DEADLIFT.jpg?quality=86&strip=all"
          alt=""
        />
        <p className="heading-comment">
          Track It. Where you can find the best workouts.
        </p>
        <Link style={{ marginBottom: "25px" }} to="/create">
          <button className="btn btn-primary">Create Workouts</button>
        </Link>
      </div>

      <div className="general-container">
        <br />
        <h3>My Quick Workouts </h3>
        {difficulty && <h4>Difficulty: {difficulty}</h4>}
        <div className="my-workouts-grid">
          {/* add grid-container-view */}
          {muscles.includes("Arms") && (
            <>
              <div className="my-workouts-card">
                <img
                  className="my-workouts-card-image"
                  src="body_images/arms.jpg"
                  alt="arm workouts"
                />
                <div className="workout-pic-info col-md-12 text-center">
                  {getDaysWorkoutLink("Arms")}
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
                  alt="leg workouts"
                />
                <div className="workout-pic-info col-md-12 text-center">
                  {getDaysWorkoutLink("Legs")}
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
                  alt="chest workouts"
                />
                <div className="workout-pic-info col-md-12 text-center">
                  {getDaysWorkoutLink("Chest")}
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
                  alt="ab workouts"
                />
                <div className="workout-pic-info col-md-12 text-center">
                  {getDaysWorkoutLink("Abs")}
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
                  alt="back workouts"
                />
                <div className="workout-pic-info col-md-12 text-center">
                  {getDaysWorkoutLink("Back")}
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
