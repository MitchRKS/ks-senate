const County = require("../../models/county");

async function index(req, res) {
  try {
    const counties = await County.find({}).exec();
    counties.sort((a, b) => a.name.localeCompare(b.name)).exec();

    res.status(200).json(counties);
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
