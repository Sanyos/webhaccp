const express = require("express");
const routes = express.Router();
const reviewController = require("./review.controller");

routes.post("/", (req, res, next) => {
  return reviewController.createNewReview(req, res, next);
});


module.exports = Object.freeze(routes);
