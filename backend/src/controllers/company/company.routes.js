const express = require("express");
const routes = express.Router();
const companyController = require("./company.controller");
const adminOnly = require("../../auth/adminOnly");

routes.post("/", (req, res, next) => {
  return companyController.createNewCompany(req, res, next);
});

routes.get("/", (req, res, next) => {
  return companyController.getAllCompanies(req, res, next);
});

routes.get("/:id", (req, res, next) => {
  return companyController.getCompanyById(req, res, next);
});

routes.put("/:id", (req, res, next) => {
  return companyController.updateCompanyById(req, res, next);
});

module.exports = routes;
