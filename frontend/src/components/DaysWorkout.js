import React from "react";
import "../styles/DaysWorkout.css";
import { firstLetterCapitalize } from "../helpers/CapitalizeFirst";
import Exercise from "./Exercise";

export default function DaysWorkout(props) {
  const schedule = props.schedule ? props.schedule : null;
  const todayInt = props.day;
  const thisDaysFocus = schedule ? schedule[todayInt].daysFocus : "";
  let thisDaysExercises = schedule ? schedule[todayInt].exercises : [];

  function goBack() {
    window.history.go(-1);
    return false;
  }

  window.scrollTo(0, 0);
  return (
    <div>
      <div className="header-image-container">
        <img
          className="main-header-image"
          src="https://images.unsplash.com/photo-1637666062717-1c6bcfa4a4df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt=""
        />
      </div>
      <p className="todays-workout"> Today's Workout</p>
      <div className="container">
        <p className="workout-name">
          {" "}
          {firstLetterCapitalize(thisDaysFocus)} Day
        </p>
      </div>
      <div className="daysworkout-back container-fluid w-25">
        <button className="btn btn-primary centre" onClick={() => goBack()}>
          Back
        </button>
      </div>
      {thisDaysExercises.map((exercise) => <Exercise exercise={exercise} key={Math.random()*100}/>)}
    </div>
  );
}
