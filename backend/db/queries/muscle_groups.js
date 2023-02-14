const db = require("../connection");

const insertGroups = async (groups, difficulty, id) => {
  try {
    return await db.query(
      "INSERT INTO muscle_groups(muscles, difficulty, user_id) VALUES ($1, $2, $3);",
      [groups, difficulty, id]
    );
  } catch (error) {
    return error;
  }
};

const updateGroups = async (groups, difficulty, id) => {
  try {
    return await db.query(
      "UPDATE muscle_groups SET muscles=$1, difficulty=$2 WHERE user_id=$3",
      [groups, difficulty, id]
    );
  } catch (error) {
    return error;
  }
};

const getAllGroups = async (id) => {
  try {
    return await db
      .query("SELECT * FROM muscle_groups WHERE user_id=$1", [id])
      .then((res) => res.rows);
  } catch (error) {
    return error;
  }
};

module.exports = { insertGroups, getAllGroups, updateGroups };
