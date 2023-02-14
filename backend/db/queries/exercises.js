const db = require("../connection");

const getExercises = async () => {
  const data = await db.query("SELECT * FROM exercises;");
  return Promise.resolve(data.rows);
};

const getExercisesForCardio = async (difficulty) => {
  try {
    const data = await db.query(
      "SELECT * FROM exercises WHERE type='cardio' AND difficulty=$1;",
      [difficulty]
    );
    return data.rows;
  } catch (error) {
    return error;
  }
};

const getExercisesForArms = async (difficulty) => {
  try {
    const data = await db.query(
      "SELECT * FROM exercises WHERE difficulty= $1 AND (muscle='biceps' OR muscle='forearms' OR muscle='triceps');",
      [difficulty]
    );
    return data.rows;
  } catch (error) {
    return error;
  }
};

const getExercisesForLegs = async (difficulty) => {
  try {
    const data = await db.query(
      "SELECT * FROM exercises WHERE difficulty=$1 AND (muscle='calves' OR muscle='glutes' OR muscle='hamstrings');",
      [difficulty]
    );
    return data.rows;
  } catch (error) {
    return error;
  }
};

const getExercisesForBack = async (difficulty) => {
  try {
    const data = await db.query(
      "SELECT * FROM exercises WHERE difficulty=$1 AND (muscle='lower_back' OR muscle='middle_back' OR muscle='traps');",
      [difficulty]
    );
    return data.rows;
  } catch (error) {
    return error;
  }
};

const getExercisesForAbs = async (difficulty) => {
  try {
    const data = await db.query(
      "SELECT * FROM exercises WHERE difficulty=$1 AND muscle='abdominals';",
      [difficulty]
    );
    return data.rows;
  } catch (error) {
    return error;
  }
};

const getExercisesForChest = async (difficulty) => {
  try {
    const data = await db.query(
      "SELECT * FROM exercises WHERE muscle='chest' AND difficulty=$1;",
      [difficulty]
    );
    return data.rows;
  } catch (error) {
    return error;
  }
};

const clearExercises = async () => {
  try {
    const data = await db.query("DELETE FROM exercises;");
    return data.rows;
  } catch (error) {
    return error;
  }
};

const insertExercise = async (exerciseObj) => {
  try {
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
    return data.rows;
  } catch (error) {
    return error;
  }
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
