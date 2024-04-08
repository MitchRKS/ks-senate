const express = require("express");
const router = express.router();
const senateDistrictsController = require("../../controllers/api/senatedistricts.js");

// GET /api/counties
router.get("/senatedistricts", (req, res) => {
  res.json({ message: "The senate district API is Alive!" });
});

module.exports = router;
