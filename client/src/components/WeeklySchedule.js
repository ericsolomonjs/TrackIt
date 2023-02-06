import React from "react";
import "../styles/WeeklySchedule.css";

export default function WeeklySchedule() {


  return <div>
    <br />
    <di className="caption-header"> Here's Your Weekly Workout Schedule!</di>
    <br />
    <div className="main-container">
      <div className="row">
        <div className="column">
          <div className="card">
            <h3>Monday</h3>
            <p>Biceps</p>
          </div>

          <div class="card">
            <h3>Tuesday</h3>
            <p>Back</p>
          </div>

          <div class="card">
            <h3>Wednesday</h3>
            <p>Chest</p>
          </div>
          <div class="card">
            <h3>Thursday</h3>
            <p>Cardio</p>
          </div>
          <div class="card">
            <h3>Friday</h3>
            <p>Rest</p>
          </div>
          <div class="card">
            <h3>Saturday</h3>
            <p>Legs</p>
          </div>
          <div class="card">
            <h3>Sunday</h3>
            <p>Rest</p>
          </div>
        </div>
      </div>
    </div>
  </div>

}