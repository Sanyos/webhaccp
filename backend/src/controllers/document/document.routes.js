const express = require("express");
const routes = express.Router();
const documentController = require("./document.controller");
const adminOnly = require("../../auth/adminOnly");

routes.post("/", (req, res, next) => {
  return documentController.createNewDocument(req, res, next);
});

routes.get("/:companyId", (req, res, next) => {
  return documentController.getAllDocuments(req, res, next);
});

routes.get(":companyId/:documentId", (req, res, next) => {
  return documentController.getDocumentById(req, res, next);
});

module.exports = routes;
