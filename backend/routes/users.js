/////////// catsRoutes.js [EXAMPLE ROUTER ROUTE]
const router = require("express").Router();
const { insertUser } = require("../db/queries/users");

router.post("/new", async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;

  try {
    await insertUser(firstName, lastName, email, password);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
