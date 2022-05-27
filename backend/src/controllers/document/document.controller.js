const documentService = require("./document.service");
const createError = require("http-errors");

exports.createNewDocument = (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return next(new createError.BadRequest("Invalid req body"));
  }
  const newDocument = {};
  return documentService
    .create(newDocument)
    .then((document) => {
      res.status(201).json(document.rows);
    })
    .catch((err) => {
      return next(
        new createError[500](`Could not saved document Error: ${err}`)
      );
    });
};

exports.getAllDocuments = (req, res, next) => {
  console.log(req.params);
  const companyId = req.params.companyId;
  if (companyId !== "all") {
    return documentService
      .getAllByCompanyId(companyId)
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
  } else {
    return documentService
      .getAll()
      .then((documents) => {
        if (documents) {
          console.log("all documents: ", documents.rows);
          let docs = documents.rows;
          docs.map(({ document_name, document_date, document_user_id }) => ({
            document_name,
            document_date,
            document_user_id,
          }));
          res.status(200).json(docs);
        }
      })
      .catch((err) => {
        return next(
          new createError[500](`Could not find documents Error: ${err}`)
        );
      });
  }
};

exports.getDocumentById = (req, res, next) => {
  const companyId = req.params.companyId;
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
