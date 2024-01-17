const express = require("express");
const router = express.Router();

const sboRatingController = require("../controllers/sboRatingController");

router.get("/", sboRatingController.getAllSboRatings);

router.post("/", sboRatingController.addSboRating);

router.get("/:id", sboRatingController.getOneSboRating);

router.post("/:id", sboRatingController.modifySboRating);

module.exports = router;
