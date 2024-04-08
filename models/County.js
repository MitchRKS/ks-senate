const mongoose = require("mongoose");

const countySchema = require("./countySchema");

module.exports = mongoose.model("County", countySchema);
