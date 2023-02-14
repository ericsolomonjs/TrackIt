import { useState } from "react";
import "../styles/Admin.css";
import { useNavigate } from "react-router-dom";

export default function Admin(props) {
  let admin = true;
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState("beginner");
  const [muscleGroup, setMuscleGroup] = useState("");
  const [equipment, setEquipment] = useState("");
  const [instructions, setInstructions] = useState("");
  const [exercise, setExercise] = useState("strength");

  const submitExercise = () => {
    const ops = {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        difficulty,
        muscleGroup,
        equipment,
        instructions,
        exercise,
      }),
    };

    fetch("http://localhost:8080/exercises/create", ops)
      .then((res) => {
        console.log("fetch success");
        alert("Successfully saved the new exercise")
        window.location.reload();
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="admin-container container-fluid">
      {admin ? (
        <>
          <h1>Create a new exercise</h1>
          <form>
            <label>Exercise Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label>Exercise Difficulty</label>
            <div onChange={(e) => setDifficulty(e.target.value)}>
              <input
                type="radio"
                id="difficultyChoice1"
                name="difficulty"
                value="beginner"
              />
              <label htmlFor="difficultyChoice1">Beginner</label>
              <input
                type="radio"
                id="difficultyChoice2"
                name="difficulty"
                value="intermediate"
              />
              <label htmlFor="difficultyChoice2">Intermediate</label>
              <input
                type="radio"
                id="difficultyChoice3"
                name="difficulty"
                value="expert"
              />
              <label htmlFor="difficultyChoice3">Expert</label>
            </div>
            <label>Exercise Muscle Group</label>
            <input
              type="text"
              value={muscleGroup}
              onChange={(e) => setMuscleGroup(e.target.value)}
              required
            />
            <label>
              Exercise Equipment (Type none if no equipment required)
            </label>
            <input
              type="text"
              value={equipment}
              onChange={(e) => setEquipment(e.target.value)}
              required
            />
            <label>Exercise Instructions</label>
            <textarea
              type="text"
              name="instructions"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              rows="4"
              cols="45"
              required
            />
            <label>Exercise Type</label>
            <div onChange={(e) => setExercise(e.target.value)}>
              <input
                type="radio"
                id="typeChoice1"
                name="type"
                value="strength"
              />
              <label htmlFor="typeChoice1">Strength</label>
              <input type="radio" id="typeChoice2" name="type" value="cardio" />
              <label htmlFor="typeChoice2">Cardio</label>
              <input
                type="radio"
                id="typeChoice3"
                name="type"
                value="stretching"
              />
              <label htmlFor="typeChoice3">Stretching</label>
            </div>
            <br />
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => submitExercise()}
            >
              Submit
            </button>
          </form>
        </>
      ) : (
        <h2>Must be Admin to view this page.</h2>
      )}
    </div>
  );
}
