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

const loginUser = async (email, password) => {
  // check if users email is in the db
  try {
    const user = await db.query("SELECT * FROM users WHERE email=$1", [email]);
    // compare hash with password
    const compare = bcrypt.compareSync(password, user.rows[0].password);
    if (compare) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    return e;
  }
};

module.exports = { getUsers, insertUser, loginUser };
