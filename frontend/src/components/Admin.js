import React, { useEffect } from "react";
import "../styles/Admin.css";
import Axios from "axios";
export default function Admin(props) {
  const user = props.user ? props.user : null;
  let admin = true;
  //check if admin on load and set admin in local const
  useEffect(() => {
    if (user) {
      Axios.get("user/isAdmin", { user_id: user.id }).then((res) => {
        admin = res.data;
      });
    }
  }, []);

  function submitExercise(object) {
    Axios.post("exercises/create", object).then(() => {
      console.log("successfully created exercise");
    });
  }

  return (
    <div className="admin-container container-fluid">
      {admin ? (
        <>
          <h1>Create a new exercise</h1>
          <form action="/exercises/create/" method="POST">
            <label>Exercise Name</label>
            <input type="text" name="name" required />
            <label>Exercise Difficulty</label>
            <div>
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
            <input type="text" name="muscle" required />
            <label>
              Exercise Equipment (Type none if no equipment required)
            </label>
            <input type="text" name="equipment" required />
            <label>Exercise Instructions</label>
            <textarea
              type="text"
              name="instructions"
              rows="4"
              cols="45"
              required
            />
            <label>Exercise Type</label>
            <div>
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
              type="submit"
              className="btn btn-primary"
              onClick={() => submitExercise(props)}
            >
              Submit
            </button>
          </form>
          <br />
          <div className="admin-analytics "></div>
          <h1>Website Analytics</h1>
          <p>Website Users : </p>
          <p>{props.userCount ? props.userCount : "Error. No Props"}</p>
          <p>Exercise count : </p>
          <p>{props.exerciseCount ? props.exerciseCount : "Error. No Props"}</p>
        </>
      ) : (
        <h2>Must be Admin to view this page.</h2>
      )}
    </div>
  );
}
