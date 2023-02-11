//schedules routes
const router = require("express").Router();
const { getSchedule, generateSchedule, saveSchedule } = require("../db/queries/schedules");

router.route("/")
  //route for getting schedule
  .get(async (req, res) => {
    if (req.user) {
      try {
        const jsonObject = await getSchedule(req.user)
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

router.route("/create/")
  //route for generating a new schedule and returning it
  .post(async (req, res) => {
    try {
      const schedule = await generateSchedule(req.body);
      console.log("schedule ", schedule)
      //await saveSchedule(schedule, req.body.user_id);
      res.sendStatus(201);
    } catch (err) {
      res.sendStatus(501)
      return console.error(err);
    }
    res.send(schedule);
  })

module.exports = router;