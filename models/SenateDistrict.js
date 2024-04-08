const mongoose = require("mongoose");

const senateDistrictSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  Incumbent: { type: String, required: true },
  COH: { type: Number, required: true },
  MOD: { type: String, required: false },
  CON: { type: String, required: false },
  MAGA: { type: String, required: false },
  Target: { type: Number, required: true },
  RV: { type: Number, required: true },
  GOP: { type: Number, required: true },
  IND: { type: Number, required: true },
  DEM: { type: Number, required: true },
  VTBY: { type: Number, required: true },
  VTBN: { type: Number, required: true },
  PTO22: { type: Number, required: true },
  Margin22: { type: String, required: true },
  MOD20: { type: Number, required: true },
  CON20: { type: Number, required: true },
  PTO20: { type: Number, required: true },
  Margin20: { type: String, required: true },
  MOD16: { type: Number, required: true },
  CON16: { type: Number, required: true },
  PTO16: { type: Number, required: true },
  Margin16: { type: String, required: true },
  MOD12: { type: Number, required: true },
  CON12: { type: Number, required: true },
  PTO12: { type: Number, required: true },
  Margin12: { type: String, required: true },
});

const SenateDistrict = mongoose.model("SenateDistrict", senateDistrictSchema);

module.exports = SenateDistrict;
