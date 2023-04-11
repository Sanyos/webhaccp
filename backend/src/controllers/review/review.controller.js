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

