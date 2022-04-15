const express = require("express");
const routes = express.Router();
const userController = require("./user.controller");
const adminOnly = require("../../auth/adminOnly");

routes.post("/register", adminOnly, (req, res, next) => {
  return userController.createNewUser(req, res, next);
});

routes.get("/", adminOnly, (req, res, next) => {
  return userController.getAllUser(req, res, next);
});

routes.put("/archiving/:id", adminOnly, (req, res, next) => {
  return userController.archivingById(req, res, next);
});

routes.put("/edit/:id", adminOnly, (req, res, next) => {
  return userController.userUpdate(req, res, next);
});

module.exports = routes;