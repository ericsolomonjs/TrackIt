const db = require("../connection");

const insertGroups = (groups, id) => {
  return db.query(
    "INSERT INTO muscle_groups(muscles, user_id) VALUES ($1, $2);",
    [groups, id]
  );
};

module.exports = { insertGroups };
