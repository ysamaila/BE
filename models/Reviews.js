const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

//defining business details schema
const reviewSchema = mongoose.Schema(
  {
    businessID: { type: String, required: true },
    businessName: { type: String, required: true },
    businessCAC: { type: String, required: true },
    reviewText: { type: String, required: true },
    starRating: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);
