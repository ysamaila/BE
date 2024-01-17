const Review = require("../models/Reviews");

/*ADD ONE REVIEW*/
exports.addReview = (req, res, next) => {
  review = new Review({
    businessID: req.body.businessID,
    businessName: req.body.businessName,
    businessCAC: req.body.businessCAC,
    reviewText: req.body.reviewText,
    starRating: req.body.starRating,
  });

  review
    .save()
    .then(() => {
      res.status(201).json({
        review,
        message: "Review added successfully!",
      });
    })
    .catch((error) => {
      res.status(500).json({
        error: error.message,
      });
    });
};

/*GET ONE REVIEW WITH ID*/
exports.getOneReview = (req, res, next) => {
  Review.findOne({ _id: req.params.id })
    .then((business) => res.status(200).json(business))
    .catch((error) => res.status(404).json({ error: error }));
};

/*UPDATE A REVIEW*/
exports.modifyReview = (req, res, next) => {
  const review = new Review({
    _id: req.params.id,
    businessID: req.body.review,
    businessName: req.body.businessName,
    businessCAC: req.body.businessCAC,
    starRating: req.body.starRating,
    reviewText: req.body.reviewText,
  });
  Review.updateOne({ _id: req.params.id }, review)
    .then(() => {
      res.status(201).json({
        message: "Review updated successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.getAllReviews = (req, res, next) => {
  //fetching all items from the database
  Review.find()
    .then((reviews) => {
      res.status(200).json(reviews);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
