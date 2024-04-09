// routes/countyRoutes.js
const express = require("express");
const router = express.Router();
const countyController = require("../../controllers/api/counties");

// GET all counties
router.get("/", countyController.index);

// GET a single county by ID
router.get("/allen", countyController.show);

module.exports = router;
