const express = require("express");
const router = express.Router();

const businessController = require("../controllers/businessController");

router.get("/", businessController.getAllBusiness);

router.post("/", businessController.addBusiness);

router.get("/:id", businessController.getOneBusiness);

module.exports = router;
