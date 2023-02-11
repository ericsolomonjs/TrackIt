const db = require("../connection");

const getExercises = async () => {
  const data = await db.query("SELECT * FROM exercises;");
  return Promise.resolve(data.rows);
};

const getExercisesForCardio = async (difficulty) => {
  const data = await db.query(
    "SELECT * FROM exercises WHERE type='cardio' AND difficulty=$1;",
    [difficulty]
  );
  return Promise.resolve(data.rows);
};

const getExercisesForArms = async (difficulty) => {
  const data = await db.query(
    "SELECT * FROM exercises WHERE difficulty= $1 AND (muscle='biceps' OR muscle='forearms' OR muscle='triceps');",
    [difficulty]
  );
  return Promise.resolve(data.rows);
};

const getExercisesForLegs = async (difficulty) => {
  const data = await db.query(
    "SELECT * FROM exercises WHERE difficulty=$1 AND (muscle='calves' OR muscle='glutes' OR muscle='hamstrings');",
    [difficulty]
  );
  return Promise.resolve(data.rows);
};

const getExercisesForBack = async (difficulty) => {
  const data = await db.query(
    "SELECT * FROM exercises WHERE difficulty=$1 AND (muscle='lower_back' OR muscle='middle_back' OR muscle='traps');",
    [difficulty]
  );
  return Promise.resolve(data.rows);
};

const getExercisesForAbs = async (difficulty) => {
  const data = await db.query(
    "SELECT * FROM exercises WHERE difficulty=$1 AND muscle='abdominals';",
    [difficulty]
  );
  return Promise.resolve(data.rows);
};

const getExercisesForChest = async (difficulty) => {
  const data = await db.query(
    "SELECT * FROM exercises WHERE muscle='chest' AND difficulty=$1;",
    [difficulty]
  );
  return Promise.resolve(data.rows);
};

const clearExercises = async () => {
  const data = await db.query("DELETE FROM exercises;");
  return Promise.resolve(data.rows);
};

const insertExercise = async (exerciseObj) => {
  const data = await db.query(
    "INSERT INTO exercises(name, type, muscle, equipment, difficulty, instructions) VALUES ($1, $2, $3, $4, $5, $6);",
    [
      exerciseObj.name,
      exerciseObj.type,
      exerciseObj.muscle,
      exerciseObj.equipment,
      exerciseObj.difficulty,
      exerciseObj.instructions,
    ]
  );
  return Promise.resolve(data.rows);
};

module.exports = {
  getExercises,
  insertExercise,
  clearExercises,
  getExercisesForCardio,
  getExercisesForArms,
  getExercisesForLegs,
  getExercisesForBack,
  getExercisesForAbs,
  getExercisesForChest,
};
