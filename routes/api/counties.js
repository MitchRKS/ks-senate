const express = require("express");
const router = express.Router();
const countiesController = require("../../controllers/api/counties.js");

// GET /api/counties
router.get("/", countiesController.index);

module.exports = router;
