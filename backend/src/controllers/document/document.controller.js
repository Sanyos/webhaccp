const documentService = require("./document.service");
const createError = require("http-errors");
const documentsData = require("../../mock_data/documents-data");

exports.createNewDOcument = (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return next(new createError.BadRequest("Invalid req body"));
  }
  const newDocument = {};
  return documentService
    .create(newDocument)
    .then((document) => {
      res.status(201).json(document);
    })
    .catch((err) => {
      return next(
        new createError[500](`Could not saved document Error: ${err}`)
      );
    });
};

exports.getAllDocuments = (req, res, next) => {
  const companyId = req.params.companyId;
  console.log("companyId", companyId);
  res.send(documentsData);
  /* return documentService
    .getAll()
    .then((documents) => {
      if (documents) {
        res.status(200).json(documents);
      }
    })
    .catch((err) => {
      return next(
        new createError[500](`Could not find documents Error: ${err}`)
      );
    }); */
};

exports.getDocumentById = (req, res, next) => {
  const companyId = req.params.companyId;
  const documentId = req.params.documentId;
};
