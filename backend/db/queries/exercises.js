const db = require("../connection");

const getExercises = () => {
  return db.query("SELECT * FROM exercises;").then((data) => {
    return data.rows;
  });
};

const insertExercise = (exerciseObj) => {
  return db.query(
    "INSERT INTO exercises(name, type, muscle, equipment, difficulty, instructions) VALUES ($1, $2, $3, $4, $5, $6);",
    [
      exerciseObj.name,
      exerciseObj.type,
      exerciseObj.muscle,
      exerciseObj.equipment,
      exerciseObj.difficulty,
      exerciseObj.instructions
    ]
  )  
};

module.exports = { getExercises, insertExercise };
