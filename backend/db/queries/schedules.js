const db = require("../connection");
const { getExercisesForArms } = require("./exercises");

const getSchedule = async (user) => {
  const data = await db.query("SELECT * FROM schedules WHERE user_id = \"$1\";", user.id)
  if (data.rows.length > 0) {
    return Promise.resolve(data.rows);
  }
  return Promise.reject();
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
      daysFocus: ""
    },
    "6": {
      exercises: [],
      daysFocus: ""
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
        if (scheduleObj[`${i}`].length === 0) {
          scheduleObj[`${i}`].push(await getExercisesForCardio());
          scheduleObj[`${i}`].daysFocus = "cardio";
          break;
        }
      }
    }
    if (params.arms) {
      for (let i = 0; i < 7; i++) {
        if (scheduleObj[`${i}`].length === 0) {
          scheduleObj[`${i}`].exercises.push(await getExercisesForArms());
          scheduleObj[`${i}`].daysFocus = "arms";
          break;
        }
      }
    }
    if (params.legs) {
      for (let i = 0; i < 7; i++) {
        if (scheduleObj[`${i}`].length === 0) {
          scheduleObj[`${i}`].push(await getExercisesForLegs());
          scheduleObj[`${i}`].daysFocus = "legs";
          break;
        }
      }
    }
    if (params.chest) {
      for (let i = 0; i < 7; i++) {
        if (scheduleObj[`${i}`].length === 0) {
          scheduleObj[`${i}`].push(await getExercisesForChest());
          scheduleObj[`${i}`].daysFocus = "chest";
          break;
        }
      }
    }
    if (params.abs) {
      for (let i = 0; i < 7; i++) {
        if (scheduleObj[`${i}`].length === 0) {
          scheduleObj[`${i}`].push(await getExercisesForAbs());
          scheduleObj[`${i}`].daysFocus = "abs";
          break;
        }
      }
    }
    if (params.back) {
      for (let i = 0; i < 7; i++) {
        if (scheduleObj[`${i}`].length === 0) {
          scheduleObj[`${i}`].push(await getExercisesForBack());
          scheduleObj[`${i}`].daysFocus = "back";
          break;
        }
      }
    }
  }

  return Promise.resolve(scheduleObj);
}

module.exports = {
  getSchedule,
  generateSchedule
};