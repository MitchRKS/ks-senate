const mongoose = require("mongoose");

const senateDistrictSchema = require("./senateDistrictSchema");

module.exports = mongoose.model("SenateDistrict", senateDistrictSchema);
