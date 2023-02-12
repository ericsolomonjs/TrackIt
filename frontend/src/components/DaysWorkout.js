import React, { useEffect } from "react";
import "../styles/DaysWorkout.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {firstLetterCapitalize} from '../helpers/CapitalizeFirst'

export default function DaysWorkout(props) {
  const schedule = props.schedule ? props.schedule : null;
  const todayInt = props.day;
  let thisDaysExercises = schedule
    ? schedule[0].schedule[todayInt].exercises
    : [];
  const thisDaysFocus = schedule
    ? schedule[0].schedule[todayInt].daysFocus
    : "";

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
      <p className="workout-name">
        {" "}
        {firstLetterCapitalize(thisDaysFocus)} Day
      </p>
      <div className="main-workout-container">
        <Row xs={1} md={2} className="g-5 row-days">
          {thisDaysExercises.map((exercise) => (
            <Col>
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
                  <Card.Text>{exercise.instructions}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
