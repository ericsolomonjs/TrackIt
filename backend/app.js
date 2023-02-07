//  ---------------------------- server/app.js
// declarations
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const enviroment = "dev";
const app = express();

// middleware setup
app.use(morgan(enviroment));
app.use(bodyParser.json());
app.use(cors());

//route paths
const userRoutes = require("./routes/users");
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.json({ greetings: "hello world" });
});

app.listen(process.env.PORT, () =>
  console.log(`Server is listening on port ${process.env.PORT}`)
);
