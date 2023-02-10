/////////// catsRoutes.js [EXAMPLE ROUTER ROUTE]
const router = require("express").Router();
const { insertUser, loginUser, getUserId } = require("../db/queries/users");
const { insertGroups, getAllGroups } = require("../db/queries/muscle_groups");

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
  const groups = req.body.groups;
  const id = req.cookies["user_id"];
  const user = await getAllGroups(id);
  console.log(user);
  if (user.rows.length === 0) {
    await insertGroups(groups, id);
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

router.get("/groups", async (req, res) => {
  const id = req.cookies["user_id"];
  const user = await getAllGroups(id);
  console.log(user);
  if (user.rows.length > 0) {
    res.send(user.rows[0].muscles);
  } else {
    res.sendStatus(401);
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie("user_id").end();
});

module.exports = router;
