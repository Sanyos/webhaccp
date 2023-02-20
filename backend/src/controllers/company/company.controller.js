const companyService = require("./company.service");
const createError = require("http-errors");

exports.createNewCompany = (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return next(new createError.BadRequest("Invalid req body"));
  }
  const newCompany = req.body;
  return companyService
    .create(newCompany)
    .then((company) => {
      res.status(201).json(company.rows[0]);
    })
    .catch((err) => {
      return next(
        new createError[500](`Could not saved company Error: ${err}`)
      );
    });
};

exports.getAllCompanies = (req, res, next) => {
  const companyUserId = req.params.userId;
  if (companyUserId !== "all") {
    return companyService
      .getAllByUserId(companyUserId)
      .then((companies) => {
        if (companies.rows) {
          const filteredCompanies = companies.rows
            .filter((company) => company.company_archived === false)
            .map(
              ({
                company_id,
                company_category,
                company_name,
                company_billing_name,
                company_location,
                company_phone,
                company_headquarters,
                company_billing_address,
                company_registration_number,
                company_vat_number,
                company_archived,
                user_name,
                user_phone,
                user_email,
                company_unit_name,
              }) => ({
                company_id,
                company_category,
                company_name,
                company_billing_name,
                company_location,
                company_phone,
                company_headquarters,
                company_billing_address,
                company_registration_number,
                company_vat_number,
                company_archived,
                user_name,
                user_phone,
                user_email,
                company_unit_name,
              })
            );
          res.status(200).json(filteredCompanies);
        }
      })
      .catch((err) => {
        return next(
          new createError[500](`Could not find companies Error: ${err}`)
        );
      });
  } else {
    return companyService
      .getAll()
      .then((companies) => {
        if (companies.rows) {
          const filteredCompanies = companies.rows
            .filter((company) => company.company_archived === false)
            .map(
              ({
                company_id,
                company_category,
                company_name,
                company_billing_name,
                company_location,
                company_phone,
                company_headquarters,
                company_billing_address,
                company_registration_number,
                company_vat_number,
                company_archived,
                user_name,
                company_unit_name,
              }) => ({
                company_id,
                company_category,
                company_name,
                company_billing_name,
                company_location,
                company_phone,
                company_headquarters,
                company_billing_address,
                company_registration_number,
                company_vat_number,
                company_archived,
                user_name,
                company_unit_name,
              })
            );
          res.status(200).json(filteredCompanies);
        }
      })
      .catch((err) => {
        return next(
          new createError[500](`Could not find companies Error: ${err}`)
        );
      });
  }
};

exports.getCompanyById = (req, res, next) => {
  const id = req.params.companyId;
  return companyService
    .getById(id)
    .then((company) => {
      res.status(200).json(company.rows[0]);
    })
    .catch((err) => {
      return next(
        new createError[500](
          `Could not find company whith this id: ${id} Error: ${err}`
        )
      );
    });
};

exports.updateCompanyById = (req, res, next) => {
  const id = req.params.companyId;
  console.log(req.body);
  return companyService
    .updateById(id, req.body)
    .then((updatedCompany) => {
      res.status(200).json(updatedCompany.rows[0]);
    })
    .catch((err) => {
      return next(
        new createError.BadRequest(
          `Could not update company with id: ${id} Error:${err}`
        )
      );
    });
};
