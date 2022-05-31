const express = require("express");
const routes = express.Router();
const userController = require("./user.controller");
const adminOnly = require("../../auth/adminOnly");

routes.post("/register", (req, res, next) => {
  return userController.createNewUser(req, res, next);
});

routes.get("/", adminOnly, (req, res, next) => {
  return userController.getAllUser(req, res, next);
});

routes.get("/id/:id", (req, res, next) => {
  return userController.getUserById(req, res, next);
});

routes.put("/archiving/:id", adminOnly, (req, res, next) => {
  return userController.archivingById(req, res, next);
});

routes.put("/edit/:id", (req, res, next) => {
  return userController.userUpdate(req, res, next);
});

module.exports = routes;
