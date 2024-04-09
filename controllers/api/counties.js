const County = require("../../models/county");

async function index(req, res) {
  try {
    const counties = await County.find({}).exec();
    res.status(200).json(counties);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function show(req, res) {
  try {
    const county = County.findById(req.params._id);
    res.status(200).json(county);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = {
  index,
  show,
};
