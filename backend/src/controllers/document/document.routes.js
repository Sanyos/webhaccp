const express = require("express");
const routes = express.Router();
const documentController = require("./document.controller");

routes.get("/:companyId", (req, res, next) => {
  return documentController.getAllDocuments(req, res, next);
});

routes.get("id/:documentId", (req, res, next) => {
  return documentController.getDocumentById(req, res, next);
});

module.exports = Object.freeze(routes);
