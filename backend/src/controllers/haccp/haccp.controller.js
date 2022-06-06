const haccpService = require("./haccp.service");
const createError = require("http-errors");

exports.createNewHaccp = (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return next(new createError.BadRequest("Invalid req body"));
  }
  const newHaccp = req.body;
  console.log(newHaccp);
  return haccpService
    .create(newHaccp)
    .then((haccp) => {
      console.log("new compny created: ", haccp.rows[0]);
      res.status(201).json(haccp.rows[0]);
    })
    .catch((err) => {
      return next(new createError[500](`Could not saved haccp Error: ${err}`));
    });
};

exports.getAllHaccp = (req, res, next) => {
  const companyId = req.params.companyId;
  return haccpService
    .getAll(companyId)
    .then((haccp) => {
      console.log("all haccp: ", haccp.rows);
      if (haccp.rows) {
        res.status(200).json(haccp.rows);
      }
    })
    .catch((err) => {
      return next(
        new createError[500](`Could not find haccp documents Error: ${err}`)
      );
    });
};

exports.getHaccpById = (req, res, next) => {
  const id = req.params.haccpId;
  return haccpService
    .getById(id)
    .then((haccp) => {
      console.log("haccp by id: ", haccp.rows[0]);
      res.status(200).json(haccp.rows[0]);
    })
    .catch((err) => {
      return next(
        new createError[500](
          `Could not find company whith this id: ${id} Error: ${err}`
        )
      );
    });
};
