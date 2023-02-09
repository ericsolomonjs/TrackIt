const db = require("../connection");

const insertGroups = (groups, id) => {
  return db.query("INSERT INTO muscle_groups VALUES (muscle_groups, user_id)", [
    JSON.stringify(groups),
    id,
  ]);
};

module.exports = { insertGroups };
