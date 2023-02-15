const router = require("express").Router();
const {
  insertUser,
  loginUser,
  getUserId,
  getUserById,
  insertNote,
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
    res.sendStatus(200);
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

router.post("/groups", (req, res) => {
  const groups = req.body.groups;
  console.log(req.body.groups);
  const difficulty = req.body.difficulty;
  const id = req.cookies["user_id"];
  let promise;

  getAllGroups(id)
    .then((user) => {
      if (user.length === 0) {
        promise = insertGroups(groups, difficulty, id);
      } else {
        promise = updateGroups(groups, difficulty, id);
      }
      promise.then((result) => res.send(result)).catch((e) => res.send(e));
    })
    .catch((e) => {
      console.log("##ERROR", e);
      res.status(500).send("");
    });
});

router.get("/groups", async (req, res) => {
  const id = req.cookies["user_id"];
  console.log("id", id);
  const muscles = await getAllGroups(id);
  if (muscles.length > 0) {
    res.send(muscles);
  } else {
    res.status(404).send("User not found");
  }
});

router.post("/notes", async (res, res) => {
  const id = req.cookies["user_id"];
  const title = req.body.title;
  const description = "";
  const note = await insertNote(id, title, description);
  res.send(note);
});

router.get("/logout", (req, res) => {
  res.clearCookie("user_id").end();
});

module.exports = router;
