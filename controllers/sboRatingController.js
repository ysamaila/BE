const SboRating = require("../models/sboRating");

/*ADD ONE REVIEW*/
exports.addSboRating = (req, res, next) => {
  sboRating = new SboRating({
    businessID: req.body.businessID,
    businessName: req.body.businessName,
    businessCAC: req.body.businessCAC,
    sboRating: req.body.sboRating,
  });

  sboRating
    .save()
    .then(() => {
      res.status(201).json({
        message: "SBO rating added successfully!",
      });
    })
    .catch((error) => {
      res.status(500).json({
        error: error.message,
      });
    });
};

/*GET ONE REVIEW WITH ID*/
exports.getOneSboRating = (req, res, next) => {
  SboRating.findOne({ businessCAC: req.params.cac })
    .then((business) => res.status(200).json(business))
    .catch((error) => res.status(404).json({ error: error }));
};

/*UPDATE A REVIEW*/
exports.modifySboRating = (req, res, next) => {
  //updating one item in the collection usiing the ID
  const sboRating = new SboRating({
    businessCAC: req.params.cac,
    businessName: req.body.businessName,
    sboRating: req.body.sboRating,
  });
  SboRating.updateOne({ _id: req.params.id }, sboRating)
    .then(() => {
      res.status(201).json({
        message: "SBO Rating updated successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
