import React, { useEffect } from "react";
import "../styles/WeeklySchedule.css";
import { Link } from "react-router-dom";
import { firstLetterCapitalize } from "../helpers/CapitalizeFirst";

export default function WeeklySchedule(props) {
  const focusArray = [];
  let schedule = props.schedule;
  const refreshCounter = Number(sessionStorage.getItem('refreshCount')) || 0;
  if (schedule) {
    for (let i = 0; i < 7; i++) {
      focusArray.push(props.schedule[i].daysFocus);
    }
  }

  useEffect(() => {
    //get schedule
    schedule = props.schedule;
    //limits refreshes of page to break infinite reload loop
    if (refreshCounter < 1 && !props.schedule) {
      sessionStorage.setItem('refreshCount', String(refreshCounter+1));
      window.location.reload();
    } else {
      sessionStorage.removeItem('refreshCount')
    }
  }, []);

  return (
    <div>
      <div className="image-container">
        <img
          className="main-image"
          src="https://images.unsplash.com/photo-1614928228253-dc09cbc3b11c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt=""
        />
        <Link to="/home">
          <button className="btn btn-primary">See Quick Workouts</button>
        </Link>
      </div>
      {props.schedule && (
        <>
          <br />
          <div className="caption-header">
            {" "}
            Here's Your Weekly Workout Schedule!
          </div>
          <br />
          <p className="info-note">
            {" "}
            Click on a day to open up that day's workout plan
          </p>
          <br />
          <div className="main-container-alpha container">
            <div className="row">
              <div className="column">
                <Link to="/days/0" className="card-click">
                  <div className="card">
                    <h3>Monday</h3>
                    <p>{firstLetterCapitalize(focusArray[0])}</p>
                  </div>
                </Link>
                <Link to="/days/1" className="card-click">
                  <div className="card">
                    <h3>Tuesday</h3>
                    <p>{firstLetterCapitalize(focusArray[1])}</p>
                  </div>
                </Link>
                <Link to="/days/2" className="card-click">
                  <div className="card">
                    <h3>Wednesday</h3>
                    <p>{firstLetterCapitalize(focusArray[2])}</p>
                  </div>
                </Link>
                <Link to="/days/3" className="card-click">
                  <div className="card">
                    <h3>Thursday</h3>
                    <p>{firstLetterCapitalize(focusArray[3])}</p>
                  </div>
                </Link>
                <Link to="/days/4" className="card-click">
                  <div className="card">
                    <h3>Friday</h3>
                    <p>{firstLetterCapitalize(focusArray[4])}</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
      {!props.schedule && (
        <>
          <div>
            <br />
            <div className="container-centre">
              <h2>You currently have no workouts scheduled!</h2>
              <h2>Click below to create a new workout</h2>
            </div>
            <Link to="/create" className="card-click">
              <div className="card-two">
                <h3>Create New Workout</h3>
              </div>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
