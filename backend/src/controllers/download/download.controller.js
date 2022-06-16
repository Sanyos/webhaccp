const express = require("express");
const routes = express.Router();

routes.post("/:name", (req, res, next) => {
  const data = req.body;
  console.log("body: ", data);
  // TODO GENERATE PDF
  const fileName = req.params.name;
  const directoryPath = __basedir + "/files/";
  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
});

module.exports = routes;
