const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

//defining business details schema
const sboRatingSchema = mongoose.Schema(
  {
    businessName: { type: String, required: true },
    businessCAC: { type: String, required: true },
    sboRating: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("sboRating", sboRatingSchema);
