const db = require("../connection");
const { getExercisesForCardio,
  getExercisesForArms,
  getExercisesForLegs,
  getExercisesForBack,
  getExercisesForAbs,
  getExercisesForChest } = require("./exercises");

const shuffleArray = async (array) => {
  let index = array.length;
  let randomIndex;
  while (index != 0) {
    randomIndex = Math.floor(Math.random() * index);
    index--;
    [array[index], array[randomIndex]] = [
      array[randomIndex], array[index]];
  }
  return Promise.resolve(array);
}


const getSchedule = async (user) => {
  const data = await db.query("SELECT * FROM schedules WHERE user_id = \"$1\";", user.id)
  if (data.rows.length > 0) {
    return Promise.resolve(data.rows);
  }
  return Promise.reject();
};

const saveSchedule = async (schedule, user) => {
  await db.query("INSERT INTO schedules (schedule, user_id) VALUES ($1,$2);", [schedule, user.id]);
  return Promise.resolve();
};

const generateSchedule = async (params) => {
  const scheduleObj = {
    "time": params.time,
    "0": {
      exercises: [],
      daysFocus: ""
    },
    "1": {
      exercises: [],
      daysFocus: ""
    },
    "2": {
      exercises: [],
      daysFocus: ""
    },
    "3": {
      exercises: [],
      daysFocus: ""
    },
    "4": {
      exercises: [],
      daysFocus: ""
    },
    "5": {
      exercises: [],
      daysFocus: "rest"
    },
    "6": {
      exercises: [],
      daysFocus: "rest"
    }
  }

  while (
    scheduleObj["0"].daysFocus === ""
    || scheduleObj["1"].daysFocus === ""
    || scheduleObj["2"].daysFocus === ""
    || scheduleObj["3"].daysFocus === ""
    || scheduleObj["4"].daysFocus === ""
    || scheduleObj["5"].daysFocus === ""
    || scheduleObj["6"].daysFocus === ""
  ) {
    if (params.cardio) {
      for (let i = 0; i < 7; i++) {
        if (scheduleObj[`${i}`].daysFocus === "") {
          scheduleObj[`${i}`].push(await getExercisesForCardio());
          scheduleObj[`${i}`].daysFocus = "cardio";
          break;
        }
      }
    }
    if (params.arms) {
      for (let i = 0; i < 7; i++) {
        if (scheduleObj[`${i}`].daysFocus === "") {
          scheduleObj[`${i}`].exercises.push(await getExercisesForArms());
          scheduleObj[`${i}`].daysFocus = "arms";
          break;
        }
      }
    }
    if (params.legs) {
      for (let i = 0; i < 7; i++) {
        if (scheduleObj[`${i}`].daysFocus === "") {
          scheduleObj[`${i}`].push(await getExercisesForLegs());
          scheduleObj[`${i}`].daysFocus = "legs";
          break;
        }
      }
    }
    if (params.chest) {
      for (let i = 0; i < 7; i++) {
        if (scheduleObj[`${i}`].daysFocus === "") {
          scheduleObj[`${i}`].push(await getExercisesForChest());
          scheduleObj[`${i}`].daysFocus = "chest";
          break;
        }
      }
    }
    if (params.abs) {
      for (let i = 0; i < 7; i++) {
        if (scheduleObj[`${i}`].daysFocus === "") {
          scheduleObj[`${i}`].push(await getExercisesForAbs());
          scheduleObj[`${i}`].daysFocus = "abs";
          break;
        }
      }
    }
    if (params.back) {
      for (let i = 0; i < 7; i++) {
        if (scheduleObj[`${i}`].daysFocus === "") {
          scheduleObj[`${i}`].push(await getExercisesForBack());
          scheduleObj[`${i}`].daysFocus = "back";
          break;
        }
      }
    }
  }

  //shuffle the exercises
  for (let i = 0; i < 7; i++) {
    scheduleObj[`${i}`].exercises = await shuffleArray(scheduleObj[`${i}`].exercises);
  }
  //truncate the exercises for time
  //truncate fn
  for (let i = 0; i < 7; i++) {
    scheduleObj[`${i}`].exercises = scheduleObj[`${i}`].exercises.slice(0, 9); //10 items for a 15 minutes schedule incl rest breaks
  }
  //return promise with scheduleObj completed
  return Promise.resolve(scheduleObj);
}

module.exports = {
  getSchedule,
  generateSchedule,
  saveSchedule
};