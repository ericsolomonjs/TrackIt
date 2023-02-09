/////////// catsRoutes.js [EXAMPLE ROUTER ROUTE]
const router = require("express").Router();
const { insertUser, loginUser, getUserId } = require("../db/queries/users");

router.post("/create", async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;

  try {
    await insertUser(firstName, lastName, email, password);
    const user = await getUserId(email);
    console.log(user);
    //res.cookie("user_id", user.rows[0].id);
  } catch (e) {
    res.send(404);
  }
});

router.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    if (await loginUser(email, password)) {
      const user = await getUserId(email);
      res.cookie("user_id", user.rows[0].id);
      res.send(200);
    } else {
      return Error("Incorrect creditials");
    }
  } catch (e) {
    res.sendStatus(404);
  }
});

router.post("/groups", async (req, res) => {
  const groups = req.body.groups;
  console.log(groups);
});

module.exports = router;
