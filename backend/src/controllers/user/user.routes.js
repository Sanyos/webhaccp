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

routes.put("/edit/:id", (req, res, next) => {
  return userController.userUpdate(req, res, next);
});

routes.put("/archiving/:id", adminOnly, (req, res, next) => {
  return userController.archivingById(req, res, next);
});

routes.put("/confirm-reg/:id", (req, res, next) => {
  return userController.confirmRegistration(req, res, next);
});

routes.put("/change-password/:id", (req, res, next) => {
  return userController.changePassword(req, res, next);
});

routes.get("/forgot-password/:email", (req, res, next) => {
  return userController.sendPasswordResetMail(req, res, next);
});

module.exports = Object.freeze(routes);
