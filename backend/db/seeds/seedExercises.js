const {
  insertExerciseRandomDiff,
  getExercises,
  clearExercises,
} = require("../queries/exercises");
require("dotenv").config();
const Axios = require("axios");

async function saveExerciseBatch(exercises) {
  try {
    for (let exercise of exercises) {
      await insertExerciseRandomDiff(exercise);
    }
    return;
  } catch (e) {
    return e;
  }
}

async function initExercises() {
  try {
    for (let i = 0; i < 500; i = i + 10) {
      console.log("i = : ", i);
      const moreExercises = await Axios.get(
        `https://api.api-ninjas.com/v1/exercises?offset=${i}`,
        { headers: { "X-Api-Key": process.env.ENVApiKey } }
      );
      await new Promise((resolve) => setTimeout(resolve, 400));
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
