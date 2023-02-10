const db = require("../connection");

const insertGroups = (groups, id) => {
  return db.query(
    "INSERT INTO muscle_groups(muscles, user_id) VALUES ($1, $2);",
    [groups, id]
  );
};

const getAllGroups = (id) => {
  return db.query("SELECT muscles FROM muscle_groups WHERE user_id=$1", [id]);
};

module.exports = { insertGroups, getAllGroups };
