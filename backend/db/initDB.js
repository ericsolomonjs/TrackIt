const db = require("./connection");
const fs = require("fs");

const muscle_groups_sql = fs
  .readFileSync("db/schema/muscle_groups.sql", "utf8")
  .replace(/(\r\n|\n|\r)/gm, " ")
  .replace(/\s+/g, " ")
  .split(";")
  .map(Function.prototype.call, String.prototype.trim)
  .filter(function (el) {
    return el.length != 0;
  });
const schedules_sql = fs
  .readFileSync("db/schema/schedules.sql", "utf8")
  .replace(/(\r\n|\n|\r)/gm, " ")
  .replace(/\s+/g, " ")
  .split(";")
  .map(Function.prototype.call, String.prototype.trim)
  .filter(function (el) {
    return el.length != 0;
  });
const users_sql = fs
  .readFileSync("db/schema/users.sql", "utf8")
  .replace(/(\r\n|\n|\r)/gm, " ")
  .replace(/\s+/g, " ")
  .split(";")
  .map(Function.prototype.call, String.prototype.trim)
  .filter(function (el) {
    return el.length != 0;
  });

const users_seed = fs
  .readFileSync("db/seeds/users.sql", "utf8")
  .replace(/(\r\n|\n|\r)/gm, " ")
  .replace(/\s+/g, " ")
  .split(";")
  .map(Function.prototype.call, String.prototype.trim)
  .filter(function (el) {
    return el.length != 0;
  });

const exercises_sql = fs
  .readFileSync("db/schema/exercises.sql", "utf8")
  .replace(/(\r\n|\n|\r)/gm, " ")
  .replace(/\s+/g, " ")
  .split(";")
  .map(Function.prototype.call, String.prototype.trim)
  .filter(function (el) {
    return el.length != 0;
  });
  const notes_sql = fs
  .readFileSync("db/schema/notes.sql", "utf8")
  .replace(/(\r\n|\n|\r)/gm, " ")
  .replace(/\s+/g, " ")
  .split(";")
  .map(Function.prototype.call, String.prototype.trim)
  .filter(function (el) {
    return el.length != 0;
  });

async function runQueries() {
  for (let query of exercises_sql) {
    try {
      await db.query(query + ";");
    } catch (error) {
      return console.error(error);
    }
  }
  for (let query of users_sql) {
    try {
      await db.query(query + ";");
    } catch (error) {
      return console.error(error);
    }
  }
  for (let query of users_seed) {
    try {
      await db.query(query + ";");
    } catch (error) {
      return console.error(error);
    }
  }
  for (let query of muscle_groups_sql) {
    try {
      await db.query(query + ";");
    } catch (error) {
      return console.error(error);
    }
  }
  for (let query of schedules_sql) {
    try {
      await db.query(query + ";");
    } catch (error) {
      return console.error(error);
    }
  }
  for (let query of notes_sql) {
    try {
      await db.query(query + ";");
    } catch (error) {
      return console.error(error);
    }
  }
  return;
}

runQueries().then(() => {
  console.log("queries run successfully");
  process.exitCode = 0;
});
