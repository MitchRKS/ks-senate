const SenateDistrict = require("../../models/senateDistrictSchema");

async function index(req, res) {
  try {
    const districts = await SenateDistrict.find({}).exec();
    res.status(200).json(districts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = {
  index,
};
