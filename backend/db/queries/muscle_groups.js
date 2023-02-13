const db = require("../connection");

const insertGroups = (groups, difficulty, id) => {
  return db.query(
    "INSERT INTO muscle_groups(muscles, difficulty, user_id) VALUES ($1, $2, $3);",
    [groups, difficulty, id]
  );
};

const updateGroups = (groups, difficulty, id) => {
  return db.query(
    "UPDATE muscle_groups SET muscles=$1, difficulty=$2 WHERE user_id=$3",
    [groups, difficulty, id]
  );
};

const getAllGroups = (id) => {
  return db.query("SELECT * FROM muscle_groups WHERE user_id=$1", [id]);
};

module.exports = { insertGroups, getAllGroups, updateGroups };
