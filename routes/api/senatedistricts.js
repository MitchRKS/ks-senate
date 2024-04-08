const express = require("express");
const router = express.Router();
const senateDistrictsController = require("../../controllers/api/senatedistricts.js");

// GET /api/counties
router.get("/senatedistricts", senateDistrictsController.index);

module.exports = router;
