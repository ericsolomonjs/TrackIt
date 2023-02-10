const db = require("../connection");

const insertGroups = (groups, id) => {
  return db.query(
    "INSERT INTO muscle_groups(muscles, user_id) VALUES ($1, $2);",
    [groups, id]
  );
};

const getGroups = (id) => {
  return db.query("SELECT muslces FROM muscle_groups WHERE id=$1", [id]);
};

module.exports = { insertGroups };
