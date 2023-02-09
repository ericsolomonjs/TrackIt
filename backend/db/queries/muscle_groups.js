const db = require("../connection");

const insertGroups = (groups, id) => {
  return db.query("INSERT INTO muscle_groups VALUES (muscles, user_id)", [
    JSON.stringify(groups),
    id,
  ]);
};

module.exports = { insertGroups };
