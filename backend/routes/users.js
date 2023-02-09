/////////// catsRoutes.js [EXAMPLE ROUTER ROUTE]
const router = require("express").Router();
const { insertUser, loginUser, getUserId } = require("../db/queries/users");
const { insertGroups } = require("../db/queries/muscle_groups");

router.post("/create", async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;

  try {
    await insertUser(firstName, lastName, email, password);
    const user = await getUserId(email);
    res.cookie("user_id", user.rows[0].id);
    res.send(200);
  } catch (e) {
    res.send(500);
  }
});

router.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    if (await loginUser(email, password)) {
      const user = await getUserId(email);
      res.cookie("user_id", user.rows[0].id);
      res.sendStatus(200);
    } else {
      return Error("Incorrect creditials");
    }
  } catch (e) {
    res.sendStatus(500);
  }
});

router.post("/groups", async (req, res) => {
  const groups = req.body.groups;
  console.log(groups);
  const id = req.cookies["user_id"];
  await insertGroups(groups, id);
  res.sendStatus(200);
});

module.exports = router;
