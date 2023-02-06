import { Container } from "react-bootstrap"

const workout = [
  {
    "name": "Incline Hammer Curls",
    "type": "strength",
    "muscle": "biceps",
    "equipment": "dumbbell",
    "difficulty": "beginner",
    "instructions": "Seat yourself on an incline bench with a dumbbell in each hand. You should pressed firmly against he back with your feet together. Allow the dumbbells to hang straight down at your side, holding them with a neutral grip. This will be your starting position. Initiate the movement by flexing at the elbow, attempting to keep the upper arm stationary. Continue to the top of the movement and pause, then slowly return to the start position."
  }
]
export default function Workout(props) {
  return (
    <Container className="workout-item">
      <h1>{props.name}</h1>
      <h3>{props.equipment}</h3>
      <h3>{props.difficulty}</h3>
      <p>{props.instructions}</p>
    </Container>
  )
}