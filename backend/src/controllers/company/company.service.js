const createError = require("http-errors");
const { companies } = require("../../mock_data/companies-data");

exports.create = (company) => {
  if (!company) {
    return new createError.BadRequest("Something went wrong");
  }
  return;
};

exports.getAll = () => {
  return;
};

exports.getById = (id) => {
  return;
};

exports.getProductIds = () => {
  return;
};

exports.updateById = (id, updatedCompany) => {
  return;
};
