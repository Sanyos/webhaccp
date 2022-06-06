const documentService = require("./document.service");
const createError = require("http-errors");

exports.createNewDocument = (req, res, next) => {
  console.log("company for new doc: ", req.body);
  const newDocument = {};
  // doksi generálás - letöltés - file törlése
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
          docs.map(
            ({
              document_name,
              document_date,
              document_user_id,
              document_id,
            }) => ({
              document_name,
              document_date,
              document_user_id,
              document_id,
            })
          );
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

exports.download = (req, res, next) => {
  const fileName = req.params.name;
  const directoryPath = __basedir + "/files/";
  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
};
