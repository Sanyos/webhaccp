const express = require("express");
const routes = express.Router();
const otpController = require("./otp.controller.js");

routes.post("/start", (req, res, next) => {
  return otpController.startTransaction(req, res, next);
});

routes.post("/finish", (req, res, next) => {
  return otpController.finishTransaction(req, res, next);
});

routes.post("/ipn", (req, res, next) => {
  return otpController.ipn(req, res, next);
});

module.exports = Object.freeze(routes);
