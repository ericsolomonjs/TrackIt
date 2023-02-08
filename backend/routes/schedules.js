//schedules routes
const router = require("express").Router();
const { getSchedule, generateSchedule } = require("../db/queries/schedules");

router.route("/")
  //route for getting schedule
  .get(async (req, res) => {
    const jsonObject = {};

    if (req.user) {
      try {
        jsonObject = await getSchedule()
        res.send(jsonObject)
      }
      catch (error) {
        console.error(error)
        res.sendStatus(404)
      };
    }
    else {
      res.sendStatus(418);
    }
  })

  //route for saving modified schedule
  .put(async (req, res) => {
    let success = false;
    //generate the scheduleObj with API data

    //query to save the users schedule
    if (req.user_id) {
      try { await SaveUserSchedule(req.user_id, req.scheduleObj) }
      catch (err) { return console.error(err) };
      success = true;
    }
    res.send(success)
  })

router.route("/new/")
  //route for generating a new schedule and returning it
  .get(async (req, res) => {
    const schedule = await generateSchedule(req.params);
    res.send(schedule);
  })

module.exports = router;