const db = require("../connection");
const bcrypt = require("bcryptjs");

const getUsers = () => {
  return db.query("SELECT * FROM users;").then((data) => {
    return data.rows;
  });
};

const getUserId = (email) => {
  return db.query("SELECT id FROM users WHERE email=$1", [email]);
};

const getUserById = (id) => {
  return db.query("SELECT * FROM users WHERE id=$1", [id]);
};

const insertUser = (firstName, lastName, email, password) => {
  const hash = bcrypt.hashSync(password, 10);
  return db.query(
    "INSERT INTO users(first_name, last_name, email, password) VALUES ($1, $2, $3, $4)",
    [firstName, lastName, email, hash]
  );
};

const loginUser = async (email, password) => {
  // check if users email is in the db

  const user = await db.query("SELECT * FROM users WHERE email=$1", [email]);
  // compare hash with password
  if (user.rows.length !== 0) {
    const compare = bcrypt.compareSync(password, user.rows[0].password);
    if (compare) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

module.exports = { getUsers, getUserId, insertUser, loginUser, getUserById };
