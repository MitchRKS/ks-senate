const express = require("express");
const router = express.router();
const countiesController = require("../../controllers/api/counties.js");

// GET /api/counties
router.get("/county", (req, res) => {
  res.json({ message: "The county API is Alive!" });
});

module.exports = router;
