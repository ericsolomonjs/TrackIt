/////////// catsRoutes.js [EXAMPLE ROUTER ROUTE]
const router = require("express").Router();

router.post("/new", (req, res) => {
  console.log(req.headers);
  console.log(req.body);
});

module.exports = router;
