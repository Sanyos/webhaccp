const haccpService = require("./review.service");
const createError = require("http-errors");

exports.createNewReview = (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return next(new createError.BadRequest("Invalid req body"));
  }
  const newReview = req.body;
  return haccpService
    .create(newReview)
    .then((haccp) => {
      res.status(201).json(haccp.rows[0]);
    })
    .catch((err) => {
      return next(new createError[500](`Could not saved haccp Error: ${err}`));
    });
};


exports.getReviewById = (req, res, next) => {
  const id = req.params.reviewId;
  return haccpService
    .getById(id)
    .then((haccp) => {
      res.status(200).json(haccp.rows[0]);
    })
    .catch((err) => {
      return next(
        new createError[500](
          `Could not find haccp whith this id: ${id} Error: ${err}`
        )
      );
    });
};

