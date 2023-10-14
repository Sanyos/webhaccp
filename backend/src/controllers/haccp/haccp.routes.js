const express = require("express");
const routes = express.Router();
const haccpController = require("./haccp.controller");

routes.post("/", (req, res, next) => {
  return haccpController.createNewHaccp(req, res, next);
});

routes.get("/all/:companyId", (req, res, next) => {
  return haccpController.getAllHaccp(req, res, next);
});

routes.get("/:haccpId", (req, res, next) => {
  return haccpController.getHaccpById(req, res, next);
});

routes.put("/:haccpId", (req, res, next) => {
  return haccpController.updateHaccpById(req, res, next);
});

module.exports = Object.freeze(routes);
