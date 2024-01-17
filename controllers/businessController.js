const Business = require("../models/businessDetails");
const SboRating = require("../models/sboRating");

exports.addBusiness = (req, res, next) => {
  let sboRatingValue = null;

  if (req.body.cac && req.body.nin && Number(req.body.yearsOfOperation) >= 1) {
    sboRatingValue = "A+";
  } else if (
    req.body.cac &&
    req.body.nin &&
    Number(req.body.yearsOfOperation * 12) >= 6
  ) {
    sboRatingValue = "B+";
  } else if (
    req.body.cac &&
    req.body.nin &&
    Number(req.body.yearsOfOperation * 12) <= 6
  ) {
    sboRatingValue = "C+";
  }

  const business = new Business({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    businessName: req.body.businessName,
    nin: req.body.nin,
    cac: req.body.cac,
    yearsOfOperation: req.body.yearsOfOperation,
    address: req.body.address,
    warrantyAvailable: req.body.warrantyAvailable,
    telephone: req.body.telephone,
  });

  const sboRating = new SboRating({
    businessID: req.body.businessID,
    businessName: req.body.businessName,
    businessCAC: req.body.cac,
    sboRating: sboRatingValue,
  });

  business
    .save()
    .then(() => {
      sboRating.save().then(() => {
        res.status(201).json({
          business,
          message: "Business and sbo rating added successfully!",
        });
      });
    })
    .catch((error) => {
      res.status(500).json({
        error: error.message,
      });
    });
};

exports.getOneBusiness = (req, res, next) => {
  Business.findOne({ _id: req.params.id })
    .then((business) => res.status(200).json(business))
    .catch((error) => res.status(404).json({ error: error }));
};

exports.getAllBusiness = (req, res, next) => {
  //fetching all items from the database
  Business.find()
    .then((businesses) => {
      res.status(200).json(businesses);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
