/////////// catsRoutes.js [EXAMPLE ROUTER ROUTE]
const router = require("express").Router();
const {
  insertUser,
  loginUser,
  getUserId,
  getUserById,
} = require("../db/queries/users");
const {
  insertGroups,
  getAllGroups,
  updateGroups,
} = require("../db/queries/muscle_groups");

router.get("/", async (req, res) => {
  const id = req.cookies["user_id"];
  const user = await getUserById(id);
  if (user.rows.length === 0) {
    res.send(null);
  } else {
    res.send(200);
  }
});

router.post("/create", async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;

  await insertUser(firstName, lastName, email, password);
  const user = await getUserId(email);
  res.cookie("user_id", user.rows[0].id);
  res.send(200);
});

router.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  if (await loginUser(email, password)) {
    const user = await getUserId(email);
    res.cookie("user_id", user.rows[0].id);
    res.sendStatus(200);
  } else {
    res.sendStatus(401);
  }
});

router.post("/groups", async (req, res) => {
  const groups = req.query.groups;
  const difficulty = req.query.difficulty;
  const id = req.query.user_id;
  try { const user = await getAllGroups(id);}
  catch (error) {res.sendStatus(404); return;}
  if (user && user.rows.length === 0) {
    await insertGroups(groups, difficulty, id);
    res.sendStatus(200);
  } else {
    await updateGroups(groups, difficulty, id);
    res.sendStatus(200);
  }
});

router.get("/groups", async (req, res) => {
  const id = req.cookies["user_id"];
  const user = await getAllGroups(id);
  console.log("got user")
  if (user.rows.length > 0) {
    res.send(user.rows[0]);
  } else {
    res.sendStatus(401);
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie("user_id").end();
});

module.exports = router;
