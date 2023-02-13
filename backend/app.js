//  ---------------------------- server/app.js
// declarations
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const enviroment = "dev";
const app = express();
const cookieParser = require("cookie-parser");

// middleware setup
app.use(morgan(enviroment));
app.use(bodyParser.json());
app.use(cookieParser());
//app.use(cors({ origin: true, credentials: true }));

var whitelist = ["http://localhost/", "http://localhost:3000"];
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true, credentials: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};
app.use(cors(corsOptionsDelegate));

//route paths
const userRoutes = require("./routes/users");
app.use("/user", userRoutes);
const scheduleRoutes = require("./routes/schedules");
app.use("/schedule", scheduleRoutes);
const exerciseRoutes = require("./routes/exercises");
app.use("/exercises", exerciseRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server is listening on port ${process.env.PORT}`)
);
