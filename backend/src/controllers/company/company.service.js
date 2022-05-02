const createError = require("http-errors");

exports.create = (company) => {
  if (!company) {
    return new createError.BadRequest("Something went wrong");
  }
  console.log("create company");
  return;
};

exports.getAll = () => {
  console.log("get companies");
  return;
};

exports.getById = (id) => {
  console.log("get company by id ", id);
  return;
};

exports.updateById = (id, updatedCompany) => {
  console.log("update company with id ", id);
  return;
};
