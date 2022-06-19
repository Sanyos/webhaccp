const express = require("express");
const routes = express.Router();
const downloadController = require("./download.controller");

routes.post("/haccp/:name", (req, res, next) => {
  return downloadController.downloadHaccp(req, res, next);
});

routes.post("/haccp-certificate/:name", (req, res, next) => {
  return downloadController.downloadHaccpCertificate(req, res, next);
});

routes.post("/document/:name", (req, res, next) => {
  return downloadController.downloadDocument(req, res, next);
});

module.exports = Object.freeze(routes);
