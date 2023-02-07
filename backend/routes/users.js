/////////// catsRoutes.js [EXAMPLE ROUTER ROUTE]
const router = require("express").Router();
const { insertUser, loginUser } = require("../db/queries/users");

router.post("/create", async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;

  try {
    await insertUser(firstName, lastName, email, password);
    res.send("Success!");
  } catch (e) {
    console.log(e);
  }
});

router.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    if (await loginUser(email, password)) {
    }
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;
