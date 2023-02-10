import React from "react";
import "../styles/WeeklySchedule.css";
import { Link } from "react-router-dom";

export default function WeeklySchedule() {
  return (
    <div>
       <div class="image-container">
      <img className="main-image" src="https://images.unsplash.com/photo-1614928228253-dc09cbc3b11c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />
      <Link to="/create">
      <button class="btn btn-primary">Add New Workout</button>
      </Link>
    </div>
      <br />
      <di className="caption-header"> Here's Your Weekly Workout Schedule!</di>
      <br />
      <p className="info-note">
        {" "}
        Click on a day to open up that day's workout plan
      </p>
      <br />
      <div className="main-container-alpha">
        <div className="row">
          <div className="column">
            <Link to="/days" className="card-click">
              <div className="card">
                <h3>Monday</h3>
                <p>Biceps</p>
              </div>
            </Link>
            <Link to="/days" className="card-click">
              <div class="card">
                <h3>Tuesday</h3>
                <p>Back</p>
              </div>
            </Link>
            <Link to="/days" className="card-click">
              <div class="card">
                <h3>Wednesday</h3>
                <p>Chest</p>
              </div>
            </Link>
            <Link to="/days" className="card-click">
              <div class="card">
                <h3>Thursday</h3>
                <p>Cardio</p>
              </div>
            </Link>
            <Link to="/days" className="card-click">
              <div class="card">
                <h3>Friday</h3>
                <p>Rest</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
