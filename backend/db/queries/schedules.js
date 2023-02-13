const db = require("../connection");
const {
  getExercisesForCardio,
  getExercisesForArms,
  getExercisesForLegs,
  getExercisesForBack,
  getExercisesForAbs,
  getExercisesForChest,
} = require("./exercises");

const shuffleArray = async (array) => {
  let index = array.length;
  let randomIndex;
  while (index != 0) {
    randomIndex = Math.floor(Math.random() * index);
    index--;
    [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
  }
  return Promise.resolve(array);
};

const getSchedule = async (userId) => {
  const data = await db.query(
    "SELECT schedule FROM schedules WHERE user_id = $1 LIMIT 1;",
    [userId]
  );
  if (data.rows.length > 0) {
    return Promise.resolve(data.rows);
  }
  return Promise.reject();
};

const deleteSchedule = async (userId) => {
  await db.query("DELETE FROM schedules WHERE user_id = $1;", [user_id]);
  return Promise.resolve();
};

const saveSchedule = async (schedule, user_id) => {
  await db.query("INSERT INTO schedules (schedule, user_id) VALUES ($1,$2);", [
    schedule,
    user_id,
  ]);
  return Promise.resolve();
};

const generateSchedule = async (params) => {
  console.log("params: ", params);
  const difficulty = params.difficulty;
  const scheduleObj = {
    time: params.time,
    difficulty: difficulty,
    0: {
      exercises: [],
      daysFocus: "",
    },
    1: {
      exercises: [],
      daysFocus: "",
    },
    2: {
      exercises: [],
      daysFocus: "",
    },
    3: {
      exercises: [],
      daysFocus: "",
    },
    4: {
      exercises: [],
      daysFocus: "",
    },
    5: {
      exercises: [],
      daysFocus: "rest",
    },
    6: {
      exercises: [],
      daysFocus: "rest",
    },
  };

  while (
    scheduleObj["0"].daysFocus === "" ||
    scheduleObj["1"].daysFocus === "" ||
    scheduleObj["2"].daysFocus === "" ||
    scheduleObj["3"].daysFocus === "" ||
    scheduleObj["4"].daysFocus === "" ||
    scheduleObj["5"].daysFocus === "" ||
    scheduleObj["6"].daysFocus === ""
  ) {
    if (params.arms) {
      for (let i = 0; i < 7; i++) {
        if (scheduleObj[`${i}`].daysFocus === "") {
          exercises = await getExercisesForArms(difficulty);
          for (let exercise of exercises)
            scheduleObj[`${i}`].exercises.push(exercise);
          scheduleObj[`${i}`].daysFocus = "arms";
          break;
        }
      }
    }

    if (params.legs) {
      for (let i = 0; i < 7; i++) {
        if (scheduleObj[`${i}`].daysFocus === "") {
          exercises = await getExercisesForLegs(difficulty);
          for (let exercise of exercises)
            scheduleObj[`${i}`].exercises.push(exercise);
          scheduleObj[`${i}`].daysFocus = "legs";
          break;
        }
      }
    }
    if (params.chest) {
      for (let i = 0; i < 7; i++) {
        if (scheduleObj[`${i}`].daysFocus === "") {
          exercises = await getExercisesForChest(difficulty);
          for (let exercise of exercises)
            scheduleObj[`${i}`].exercises.push(exercise);
          scheduleObj[`${i}`].daysFocus = "chest";
          break;
        }
      }
    }
    if (params.abs) {
      for (let i = 0; i < 7; i++) {
        if (scheduleObj[`${i}`].daysFocus === "") {
          exercises = await getExercisesForAbs(difficulty);
          for (let exercise of exercises)
            scheduleObj[`${i}`].exercises.push(exercise);
          scheduleObj[`${i}`].daysFocus = "abs";
          break;
        }
      }
    }
    if (params.back) {
      for (let i = 0; i < 7; i++) {
        if (scheduleObj[`${i}`].daysFocus === "") {
          exercises = await getExercisesForBack(difficulty);
          for (let exercise of exercises)
            scheduleObj[`${i}`].exercises.push(exercise);
          scheduleObj[`${i}`].daysFocus = "back";
          break;
        }
      }
    }
  }

  //shuffle the exercises
  for (let i = 0; i < 7; i++) {
    scheduleObj[`${i}`].exercises = await shuffleArray(
      scheduleObj[`${i}`].exercises
    );
  }
  //truncate the exercises for time
  //truncate fn
  for (let i = 0; i < 7; i++) {
    scheduleObj[`${i}`].exercises = scheduleObj[`${i}`].exercises.slice(0, 10); //10 items for a 15 minutes schedule incl rest breaks
  }
  //return promise with scheduleObj completed
  return Promise.resolve(scheduleObj);
};

module.exports = {
  getSchedule,
  generateSchedule,
  saveSchedule,
  deleteSchedule
};
