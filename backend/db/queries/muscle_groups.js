const db = require("../connection");

const insertGroups = async (groups, difficulty, id) => {
  data = db.query(
    "INSERT INTO muscle_groups(muscles, difficulty, user_id) VALUES ($1, $2, $3);",
    [groups, difficulty, id]
  );
  return Promise.resolve(data);
};

const updateGroups = async (groups, difficulty, id) => {
  data = db.query(
    "UPDATE muscle_groups SET muscles=$1, difficulty=$2 WHERE user_id=$3",
    [groups, difficulty, id]
  );
  return Promise.resolve(data);
};

const getAllGroups = async (id) => {
  data = await db.query("SELECT * FROM muscle_groups WHERE user_id=$1", [id]);
  return Promise.resolve(data);
};

module.exports = { insertGroups, getAllGroups, updateGroups };
