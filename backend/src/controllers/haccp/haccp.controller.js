const haccpService = require("./haccp.service");
const createError = require("http-errors");

exports.createNewHaccp = (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return next(new createError.BadRequest("Invalid req body"));
  }
  const newHaccp = req.body;
  return haccpService
    .create(newHaccp)
    .then((haccp) => {
      res.status(201).json(haccp.rows[0]);
    })
    .catch((err) => {
      return next(new createError[500](`Could not saved haccp Error: ${err}`));
    });
};

exports.getAllHaccp = (req, res, next) => {
  const companyId = req.params.companyId;
  if (companyId !== "all") {
    return haccpService
      .getAllByCompanyId(companyId)
      .then((haccp) => {
        if (haccp.rows) {
          res.status(200).json(haccp.rows);
        }
      })
      .catch((err) => {
        return next(
          new createError[500](`Could not find haccp documents Error: ${err}`)
        );
      });
  } else {
    return haccpService.getAll().then((haccp) => {
      if (haccp.rows) {
        res.status(200).json(haccp.rows);
      }
    });
  }
};

exports.getHaccpById = (req, res, next) => {
  const id = req.params.haccpId;
  return haccpService
    .getById(id)
    .then((haccp) => {
      res.status(200).json(haccp.rows[0]);
    })
    .catch((err) => {
      return next(
        new createError[500](
          `Could not find haccp whith this id: ${id} Error: ${err}`
        )
      );
    });
};

exports.updateHaccpById = (req, res, next) => {
  const id = req.params.haccpId;
  return haccpService
    .updateById(id, req.body)
    .then((updatedHaccp) => {
      res.status(200).json(updatedHaccp.rows[0]);
    })
    .catch((err) => {
      return next(
        new createError.BadRequest(
          `Could not update haccp with id: ${id} Error:${err}`
        )
      );
    });
};
