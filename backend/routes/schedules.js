//schedules routes
const router = require("express").Router();
const {
  getSchedule,
  generateSchedule,
  saveSchedule,
  deleteSchedule,
} = require("../db/queries/schedules");

router
  .route("/")
  //route for getting schedule
  .get(async (req, res) => {
    let user_id = req.query.user_id;
    if (user_id) {
      try {
        const jsonObject = await getSchedule(user_id);
        //console.log("json Object: ", jsonObject);
        res.send(jsonObject);
      } catch (error) {
        console.log(error);
        res.sendStatus(401);
      }
    } else {
      res.sendStatus(418);
    }
  })

  //route for saving modified schedule
  .put(async (req, res) => {
    let success = false;
    //generate the scheduleObj with API data

    //query to save the users schedule
    if (req.cookies["user_id"]) {
      try {
        await SaveUserSchedule(req.cookies["user_id"], req.scheduleObj);
      } catch (err) {
        return console.error(err);
      }
      success = true;
    }
    res.send(success);
  });

router
  .route("/create")
  //route for generating a new schedule and returning it
  .post(async (req, res) => {
    try {
      await deleteSchedule(req.body.user_id);
      const schedule = await generateSchedule(req.body);
      await saveSchedule(schedule, req.body.user_id);
      res.send(schedule);
    } catch (err) {
      res.sendStatus(501);
      return console.error(err);
    }
  });

module.exports = router;
