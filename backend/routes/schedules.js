//schedules routes
const router = require("express").Router();
const ENVApiKey = process.env.ENVApiKey;

router.route("/")
  .get(async (req, res) => {
    //query to get the users schedule
    const jsonObject = {}
    //send object 
    res.send(jsonObject)
  })

  .post(async (req, res) => {
    let success = false;
    const exercises = {};
    //generate the scheduleObj with API data


    //query to save the users schedule
    if (req.user_id) {
      try { await SaveUserSchedule(req.user_id, scheduleObj) }
      catch (err) { return console.error(err) };
      success = true;
    }


    res.send(success)
  })

module.exports = router;