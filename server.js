require("dotenv").config();

/* Requirements */
const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const County = require("./models/county");
const SenateDistrict = require("./models/SenateDistrict");

const app = express();

require("./config/database");

app.use(logger("dev"));
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

app.get("/counties", async (req, res) => {
  try {
    const data = await County.find({});
    res.json(data);
  } catch (error) {
    console.error("error fetching data", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/senatedistricts", async (req, res) => {
  try {
    const districts = await SenateDistrict.find({});
    res.json(districts);
  } catch (error) {
    console.error("error fetching data", error);
    res.status(500).send("internal server error");
  }
});

app.use((req, res, next) => {
  res.locals.data = {};
  next();
});

// Controllers go here

// API Route
app.get("/api", (req, res) => {
  res.json({ message: "The API is Alive!" });
});

app.get("/api/counties", (req, res) => {
  res.json({ message: "The counties API is alive." });
});

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
