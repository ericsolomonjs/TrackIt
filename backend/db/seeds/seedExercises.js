const {
  insertExercise,
  getExercises,
  clearExercises,
} = require("../queries/exercises");
require("dotenv").config();
const Axios = require("axios");

async function saveExerciseBatch(exercises) {
  try {
    for (let exercise of exercises) {
      await insertExercise(exercise);
    }
    return;
  } catch (e) {
    return e;
  }
}

async function initExercises() {
  // const muscleGroupsArr = [
  //   "abdominals",
  //   "abductors",
  //   "adductors",
  //   "biceps",
  //   "calves",
  //   "chest",
  //   "forearms",
  //   "glutes",
  //   "hamstrings",
  //   "lats",
  //   "lower_back",
  //   "middle_back",
  //   "neck",
  //   "quadriceps",
  //   "traps",
  //   "triceps",
  // ];

  // for (let muscleGroup of muscleGroupsArr) {
  //   console.log("muscleGroup = : ", muscleGroup)
  //   const moreExercises = await Axios.get(`https://api.api-ninjas.com/v1/exercises?muscle=${muscleGroup}`, { headers: { "X-Api-Key": process.env.ENVApiKey } })
  //   await saveExerciseBatch(moreExercises.data);
  // }
  try {
    for (let i = 0; i < 5000; i = i + 10) {
      console.log("i = : ", i);
      const moreExercises = await Axios.get(
        `https://api.api-ninjas.com/v1/exercises?offset=${i}`,
        { headers: { "X-Api-Key": process.env.ENVApiKey }}
      );
      await new Promise(resolve => setTimeout(resolve, 1000))

      await saveExerciseBatch(moreExercises.data);
    }
    return;
  } catch (e) {
    return e;
  }
}

clearExercises();
initExercises().then(() => {
  getExercises()
    .then((data) => {
      console.log(data.length + " exercise rows created");
    })
    .catch((error) => {
      console.error(error);
    });
});
