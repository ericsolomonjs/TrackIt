const db = require("../connection");
const { insertExercise } = require("../queries/exercises")
require("dotenv").config();

const saveExerciseBatch = async (exercises) => {
  for (let exerciseKey in exercises) {
    await insertExercise(res[exerciseKey]);
  }
}

const initExercises = async () => {
  for (let paginationCounter = 0; paginationCounter < 1000; paginationCounter = paginationCounter + 10)
    await Axios.get(`https://api.api-ninjas.com/v1/exercises?offset=${paginationCounter}`, {
      headers: {
        "X-Api-Key": ENVApiKey
      }.then((res) => {
        //query to save exercises to the database
        saveExerciseBatch(res)
      })
      .catch((err) => {
        return console.error('Request failed:', err)
      })
    });
}



initExercises();