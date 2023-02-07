//  ---------------------------- server/app.js
// declarations
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const enviroment = "dev";

//route paths
const catRoutes = require("./routes/catRoutes");

const app = express();

// middleware setup
app.use(morgan(enviroment));
app.use(bodyParser.json());
app.use(cors());

//routes
app.use("/cats", catRoutes);

app.get("/", (req, res) => {
  res.json({ greetings: "hello world" });
});

app.post("/user/new", (req, res) => {
  console.log(req.headers);
  console.log(req.body);
});

app.listen(process.env.PORT, () =>
  console.log(`Server is listening on port ${process.env.PORT}`)
);
