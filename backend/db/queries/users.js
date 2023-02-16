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

const getAllNotes = (id) => {
  return db.query("SELECT * FROM notes WHERE user_id=$1", [id]);
};

const insertNoteDescription = (id, description) => {
  return db.query(
    "UPDATE notes SET description=$1 WHERE id=$2 RETURNING description",
    [description, id]
  );
};

const insertNote = (id, title, description) => {
  return db.query(
    "INSERT INTO notes(title, description, user_id) VALUES ($1, $2, $3) RETURNING *",
    [title, description, id]
  );
};

const getNoteById = (id) => {
  return db.query("SELECT * FROM notes WHERE id=$1", [id]);
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

module.exports = {
  getUsers,
  getUserId,
  insertUser,
  loginUser,
  getUserById,
  insertNote,
  getNoteById,
  getAllNotes,
  insertNoteDescription,
};
