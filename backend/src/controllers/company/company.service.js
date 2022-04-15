const createError = require("http-errors");

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
