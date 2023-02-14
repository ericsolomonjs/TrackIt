const db = require("../connection");

const getExercises = async () => {
  try {
    const data = await db.query("SELECT * FROM exercises;");
    return data.rows;
  } catch (error) {
    return error;
  }
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

const insertExerciseRandomDiff = async (exerciseObj) => {
  const randomInt = Math.floor((Math.random() * 3));
  let difficulty;
  if (randomInt === 0) {
    difficulty = "beginner"
  } else if (randomInt === 1) {
    difficulty = "intermediate"
  } else if (randomInt === 2) {
    difficulty = "expert"
  } else difficulty = "expert"
  try { 
    const data = await db.query(
      "INSERT INTO exercises(name, type, muscle, equipment, difficulty, instructions) VALUES ($1, $2, $3, $4, $5, $6);",
      [
        exerciseObj.name,
        exerciseObj.type,
        exerciseObj.muscle,
        exerciseObj.equipment,
        difficulty,
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
  insertExerciseRandomDiff
};
