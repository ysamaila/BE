const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

//defining business details schema
const businessSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    businessName: { type: String, required: true },
    nin: { type: String, required: true },
    cac: { type: String },
    yearsOfOperation: { type: Number, required: true },
    address: { type: String },
    warrantyAvailable: { type: Boolean, required: true },
    averageStarrating: { type: Number, required: false },
    telephone: { type: String, required: true },
  },
  { timestamps: true }
);

//plugging unique validator to user schema
businessSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Business", businessSchema);
