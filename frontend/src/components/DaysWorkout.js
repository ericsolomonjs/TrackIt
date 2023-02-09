import React from "react";
import "../styles/DaysWorkout.css";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function DaysWorkout() {


  return <div>
    <div class="header-image-container">
      <img className="main-header-image" src="https://images.unsplash.com/photo-1637666062717-1c6bcfa4a4df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />
    </div>
    <p className="todays-workout"> Today's Workout</p>
    <p className="workout-name"> Chest Day</p>
    <div className="main-workout-container">
  
    <Row xs={1} md={2} className="g-5 row-days">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col >
          <Card>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Pushups</Card.Title>
              <br />
              <Card.Subtitle className="mb-2 text-muted">Duration</Card.Subtitle>
              <Card.Text>
                15 minutes
              </Card.Text>
              <br />
              <Card.Subtitle className="mb-2 text-muted">Difficulty</Card.Subtitle>
              <Card.Text>
                Beginner / Easy
              </Card.Text>
              <br />
              <Card.Subtitle className="mb-2 text-muted">How-To</Card.Subtitle>
              <Card.Text>
               How to do a pushup is simple, just get into the plant position with your legs together and arms shoulder width apart. With your back straight bend your arms along your torso untill your chest is about 6 inches from the floor and then press yourself back up to plank position.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>

  </div>

}