import React from 'react';
import "../styles/SignedIn.css";


export default function SignedIn() {
  return <div>
      <div class="image-container">
        <img className="main-image" src="https://www.muscleandfitness.com/wp-content/uploads/2020/01/DEADLIFT.jpg?quality=86&strip=all" alt="" />
        <button class="btn btn-primary">Create New Workout</button>
      </div>

    <div className='general-container'>
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
        <a href="/schedule" className="go-to-schedule"> Go to my full schedule </a>
        <img className='my-schedule-image' src="https://t4.ftcdn.net/jpg/01/99/89/99/360_F_199899900_gy5JdpRH5iXzlVsyw08uCidWS4tpjVYF.jpg" />
      </div>
    </div>
  </div>
}