const { insertExercise, getExercises, clearExercises } = require("../queries/exercises")
require("dotenv").config();
const Axios = require("axios");

async function saveExerciseBatch(exercises) {
  for (let exercise of exercises) {
    await insertExercise(exercise)
  }
  return Promise.resolve();
}

async function initExercises() {
  const muscleGroupsArr = [
    "abdominals",
    "abductors",
    "adductors",
    "biceps",
    "calves",
    "chest",
    "forearms",
    "glutes",
    "hamstrings",
    "lats",
    "lower_back",
    "middle_back",
    "neck",
    "quadriceps",
    "traps",
    "triceps",
  ]
  for (let i = 0; i < 1000; i = i + 10) {
    console.log("i = : ", i)
    const exercises = await Axios.get(`https://api.api-ninjas.com/v1/exercises?offset=${i}`, { headers: { "X-Api-Key": process.env.ENVApiKey } })
    await saveExerciseBatch(exercises.data);
    // for (let muscleGroup of muscleGroupsArr) {
    // }
  }
  // const cardioExercises = await Axios.get(`https://api.api-ninjas.com/v1/exercises?type=cardio`, { headers: { "X-Api-Key": process.env.ENVApiKey } })
  // await saveExerciseBatch(cardioExercises.data);

  return Promise.resolve()
};

clearExercises();
initExercises()
  .then(() => {
    getExercises()
      .then((data) => {
        console.log(data.length + " exercise rows created");
        console.log(data)
      })
      .catch((error) => {
        console.error(error);
      })
  })


