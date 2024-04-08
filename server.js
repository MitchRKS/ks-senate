require("dotenv").config();

/* Requirements */
const mongoose = require("mongoose");
const express = require("express");
const app = express();

const County = require("./models/county");
const SenateDistrict = require("./models/SenateDistrict");

// include the method-override package
const methodOverride = require("method-override");

// Controllers go here

//Mongoose Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

//Middleware

app.use(express.static("public"));

app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// Controllers go here

//Index route

app.get("/", (req, res) => {
  res.send("home page");
});

app.get("/counties", async (req, res) => {
  try {
    const data = await County.find({});
    res.render("CountyIndex", { data });
  } catch (error) {
    console.error("error fetching data", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/senatedistricts", async (req, res) => {
  try {
    const data = await SenateDistrict.find({});
    res.render("SDIndex", { data });
  } catch (error) {
    console.error("error fetching data", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/counties/:id", async (req, res) => {
  try {
    const data = await County.findOne({ _id: req.params.id });
    if (!data) {
      return res.status(404).send("County not found");
    }
    res.render("CountyShow", { data });
  } catch (error) {
    console.error("Error fetching data", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/senatedistricts/:id", async (req, res) => {
  try {
    const data = await SenateDistrict.findOne({ _id: req.params.id });
    if (!data) {
      return res.status(404).send("Senate District not found");
    }
    res.render("SDShow", { data });
  } catch (error) {
    console.error("Error fetching data", error);
    res.status(500).send("Internal Server Error");
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
