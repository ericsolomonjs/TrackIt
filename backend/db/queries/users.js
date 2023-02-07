const db = require("../connection");

const getUsers = () => {
  return db.query("SELECT * FROM users;").then((data) => {
    return data.rows;
  });
};

const insertUser = (firstName, lastName, email, password) => {
  return db.query(
    "INSERT INTO users(firstName, lastName, email, password) VALUES ($1, $2, $3, $4)",
    []
  );
};

module.exports = { getUsers };
