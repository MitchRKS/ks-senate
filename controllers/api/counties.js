const County = require("../../models/county");

async function index(req, res) {
  try {
    const counties = await County.find({}).exec();
    res.status(200).json(counties);
    counties.sort((a, b) => a._id.localeCompare(b._id));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function show(req, res) {
  const { id } = req.params;

  try {
    const query = await County.findOne({ _id: id });
    return res.json(query);
  } catch (error) {
    res.status(404).json({ message: "county not found" });
  }
}

module.exports = {
  index,
  show,
};
