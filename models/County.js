const mongoose = require("mongoose");

const countySchema = new mongoose.Schema({
  _id: { type: String, required: true },
  GOP: { type: String, required: true },
  IND: { type: String, required: true },
  DEM: { type: String, required: true },
  POP: { type: String, required: true },
  VTBY: { type: String, required: true },
});

const County = mongoose.model("County", countySchema);

module.exports = County;
