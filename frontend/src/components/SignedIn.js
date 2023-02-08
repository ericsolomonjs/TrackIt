import React from 'react';
import "../styles/SignedIn.css";


export default function SignedIn() {
  return <div className='general-container'>
    <br></br>
      <h3>Main Logged in </h3>
    <div className="my-workouts-grid">
      {/* add grid-container-view */}
      <div className="my-workouts-card">
        <img className="my-workouts-card-image" src="https://thumbs.dreamstime.com/b/highlighted-biceps-d-rendered-illustration-30721898.jpg" />
        <div className="workout-pic-info">
        <button className="btn-btn-primary"> My Arm Day</button>
        </div>
      </div>
      <div className="my-workouts-card">
        <img className="my-workouts-card-image" src="https://thumbs.dreamstime.com/b/highlighted-biceps-d-rendered-illustration-30721898.jpg" />
        <div className="workout-pic-info">
        <button className="btn-btn-primary"> My Arm Day</button>
        </div>
      </div>
      <div className="my-workouts-card">
        <img className="my-workouts-card-image" src="https://thumbs.dreamstime.com/b/highlighted-biceps-d-rendered-illustration-30721898.jpg" />
        <div className="workout-pic-info">
          <button className="btn-btn-primary"> My Arm Day</button>
        </div>
      </div>
    </div>
    <div className="schedule-container">
      <a href="/myworkouts" className="go-to-schedule"> Go to my full schedule </a>
      <img className='my-schedule-image' src="https://t4.ftcdn.net/jpg/01/99/89/99/360_F_199899900_gy5JdpRH5iXzlVsyw08uCidWS4tpjVYF.jpg"/>
    </div>
  </div>
}