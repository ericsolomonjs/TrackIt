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
app.use(cors({ origin: true, credentials: true }));

//route paths
const userRoutes = require("./routes/users");
app.use("/user", userRoutes);
const scheduleRoutes = require("./routes/schedules");
app.use("/schedule", scheduleRoutes);


app.listen(process.env.PORT, () =>
  console.log(`Server is listening on port ${process.env.PORT}`)
);
