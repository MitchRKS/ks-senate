const express = require("express");
const router = express.Router();
const countiesController = require("../../controllers/api/counties.js");

// GET /api/counties
router.get("/", countiesController.index);

// GET /api/counties/id
router.get("/_id", countiesController.show);
module.exports = router;
