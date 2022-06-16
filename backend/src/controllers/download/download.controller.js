const express = require("express");
const routes = express.Router();
const takaritasi_utasitas = require("../../html/takaritasi_utasitas_html");

routes.post("/:name", (req, res, next) => {
  const data = req.body;
  console.log("body: ", data);
  const fileName = req.params.name;
  res.pdfFromHTML({
    fileName: fileName,
    htmlContent: takaritasi_utasitas.html,
  });
});

module.exports = routes;
