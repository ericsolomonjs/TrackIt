const db = require("../connection");

const getExercises = async () => {
  const data = await db.query("SELECT * FROM exercises;")
  return Promise.resolve(data.rows);
};

const getExercisesByType = async (type) => {
  const data = await db.query("SELECT * FROM exercises WHERE type=\"$1\" ; ", type)
  return Promise.resolve(data.rows);
};


const clearExercises = async () => {
  const data = await db.query("DELETE FROM exercises;");
  return Promise.resolve(data.rows)
}

const insertExercise = async (exerciseObj) => {
  const data = await db.query(
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
  return Promise.resolve(data.rows)
};

module.exports = { getExercises, insertExercise, clearExercises, getExercisesByType };
