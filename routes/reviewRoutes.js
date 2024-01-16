const express = require("express");
const router = express.Router();

const reviewController = require("../controllers/reviewController");

router.post("/", reviewController.addReview);

router.get("/:id", reviewController.getOneReview);

router.post("/:id", reviewController.modifyReview);

module.exports = router;
