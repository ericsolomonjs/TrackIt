const db = require("../connection");
const bcrypt = require("bcrypt");

const getUsers = () => {
  return db.query("SELECT * FROM users;").then((data) => {
    return data.rows;
  });
};

const insertUser = (firstName, lastName, email, password) => {
  const hash = bcrypt.hashSync(password, 10);
  return db.query(
    "INSERT INTO users(firstname, lastname, email, password) VALUES ($1, $2, $3, $4)",
    [firstName, lastName, email, hash]
  );
};

module.exports = { getUsers, insertUser };
