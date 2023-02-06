import { Container } from "react-bootstrap";
import Workout from "./Workout";

export default function WorkoutList(props) {
  const workoutsArray = [
    {
      name: "Incline Hammer Curls",
      type: "strength",
      muscle: "biceps",
      equipment: "dumbbell",
      difficulty: "beginner",
      instructions: "Seat yourself on an incline bench with a dumbbell in each hand. You should pressed firmly against he back with your feet together. Allow the dumbbells to hang straight down at your side, holding them with a neutral grip. This will be your starting position. Initiate the movement by flexing at the elbow, attempting to keep the upper arm stationary. Continue to the top of the movement and pause, then slowly return to the start position."
    },
    {
      name: "Incline Hammer Curls",
      type: "strength",
      muscle: "biceps",
      equipment: "dumbbell",
      difficulty: "beginner",
      instructions: "Seat yourself on an incline bench with a dumbbell in each hand. You should pressed firmly against he back with your feet together. Allow the dumbbells to hang straight down at your side, holding them with a neutral grip. This will be your starting position. Initiate the movement by flexing at the elbow, attempting to keep the upper arm stationary. Continue to the top of the movement and pause, then slowly return to the start position."
    }
  ];

  let counter=-1;
  const workoutListItems = workoutsArray.map((workout) => {
    counter++;
    return <Workout 
      {...workout} key = {counter}
    />
  })

  return (
    <Container className="workout-list container-md">
      {workoutListItems}
    </Container>
  )
}