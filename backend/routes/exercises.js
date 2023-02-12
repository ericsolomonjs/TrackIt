const {
  getExercises,
  getExercisesByType,
  insertExercise,
} = require("../db/queries/exercises");

const router = require("express").Router();

router.get("/getByType/:type", async (req, res) => {
  const json = await getExercisesByType(type);
  res.send(json);
});

router.get("/", async (req, res) => {
  const json = await getExercises();
  res.send(json);
});

router.post("/create", async (req, res) => {
  const body = req.body;
  console.log(body);
  res.sendStatus(201);
});

module.exports = router;
