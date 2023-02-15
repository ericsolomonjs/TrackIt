import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import React, {useState} from "react";
import "../styles/DaysWorkout.css";
import { firstLetterCapitalize } from "../helpers/CapitalizeFirst";


export default function Exercise(props) {
  const exercise = props.exercise ;
  const [open, setOpen] = useState(false);

  return (
    <div className="main-workout-container">
      <Row xs={1} md={2} className="g-5 row-days">
        
          <Col key={Math.random(1000)}>
            <Card>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>{exercise.name}</Card.Title>
                <br></br>
                <div
                  xs={1}
                  md={2}
                  className="exercise-property-row d-flex flex-row justify-content-around"
                >
                  <div className="d-flex flex-column">
                    <Card.Subtitle className="mb-2 text-muted">
                      Duration
                    </Card.Subtitle>
                    <Card.Text>60 Seconds</Card.Text>
                  </div>

                  <div className="d-flex flex-column">
                    <Card.Subtitle className="mb-2 text-muted">
                      Difficulty
                    </Card.Subtitle>
                    <Card.Text>
                      {firstLetterCapitalize(exercise.difficulty)}
                    </Card.Text>
                  </div>
                  <div className="d-flex flex-column">
                    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">
                      Equipment
                    </Card.Subtitle>
                    <Card.Text>
                      {firstLetterCapitalize(exercise.equipment)}
                    </Card.Text>
                  </div>
                </div>
                <br></br>
                <Card.Subtitle className="mb-2 text-muted">
                  Instructions
                </Card.Subtitle>
                <Collapse in={!open}>
                  <div id="example-collapse-text">{exercise.instructions.slice(0,300)+"..."}</div>
                </Collapse>
                <Collapse in={open}>
                  <div id="example-collapse-text">{exercise.instructions}</div>
                </Collapse>
                <br/>
                <Button className="btn btn-primary"
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                >Read more</Button>
              </Card.Body>
            </Card>
          </Col>
      </Row>
    </div>
  );
}
