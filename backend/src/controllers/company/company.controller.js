const companyService = require("./company.service");
const createError = require("http-errors");

exports.createNewCompany = (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return next(new createError.BadRequest("Invalid req body"));
  }

  const {
    category,
    companyName,
    address,
    location,
    companyPhoneNumber,
    headquarters,
    billingAddress,
    registrationNumber,
    vatNumber,
    archived,
  } = req.body;

  const newCompany = {
    category,
    companyName,
    address,
    location,
    companyPhoneNumber,
    headquarters,
    billingAddress,
    registrationNumber,
    vatNumber,
    archived,
  };

  return companyService
    .create(newCompany)
    .then((company) => {
      res.status(201).json(company);
    })
    .catch((err) => {
      return next(
        new createError[500](`Could not saved company Error: ${err}`)
      );
    });
};

exports.getAllCompanies = (req, res, next) => {
  return companyService
    .getAll()
    .then((companies) => {
      if (companies) {
        res.status(200).json(companies);
      }
    })
    .catch((err) => {
      return next(
        new createError[500](`Could not find companies Error: ${err}`)
      );
    });
};

exports.getCompanyById = (req, res, next) => {
  const id = req.params.id;
  return companyService
    .getById(id)
    .then((company) => {
      res.status(200).json(company);
    })
    .catch((err) => {
      return next(
        new createError[500](
          `Could not find company whit this id: ${id} Error: ${err}`
        )
      );
    });
};

exports.updateCompanyById = (req, res, next) => {
  const id = req.params.id;
  return companyService
    .updateById(id, req.body)
    .then((updatedCompany) => {
      res.status(200).json(updatedCompany);
    })
    .catch((err) => {
      return next(
        new createError.BadRequest(
          `Could not update company with id: ${id} Error:${err}`
        )
      );
    });
};
