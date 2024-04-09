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
  const { _id } = req.params; // Destructure _id from params
  const county = await County.findById(_id).exec(); // Use _id instead of id
  if (!county) {
    return res.status(404).json({ message: "County not found" });
  } else {
    res.json(county);
  }
}

module.exports = {
  index,
  show,
};
