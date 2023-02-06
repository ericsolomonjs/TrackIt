/////////// catsRoutes.js [EXAMPLE ROUTER ROUTE]
const router = require('express').Router();

const ENVApiKey = require('../.env') 

router.get('/exercises/', (req, res) => {
  const exercises = Axios.get("https://api.api-ninjas.com/v1/exercises",
  {
    headers: {
      'X-Api-Key': ENVApiKey,
    }
  })
  .then(() => {
    res.json(exercises);
  })
});
  

module.exports = router;
