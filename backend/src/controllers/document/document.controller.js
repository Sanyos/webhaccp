const documentService = require("./document.service");
const createError = require("http-errors");

exports.getAllDocuments = (req, res, next) => {
  return documentService
    .getAll()
    .then((documents) => {
      if (documents) {
        console.log("all documents: ", documents.rows);
        res.status(200).json(documents.rows);
      }
    })
    .catch((err) => {
      return next(
        new createError[500](`Could not find documents Error: ${err}`)
      );
    });
};

exports.getDocumentById = (req, res, next) => {
  const documentId = req.params.documentId;
  return documentService
    .getById(documentId)
    .then((document) => {
      console.log("document by id: ", document);
      res.status(200).json(document.rows[0]);
    })
    .catch((err) => {
      return next(
        new createError[500](
          `Could not find document whith this id: ${id} Error: ${err}`
        )
      );
    });
};
