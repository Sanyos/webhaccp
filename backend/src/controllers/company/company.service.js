const createError = require("http-errors");
const pool = require("../../db");

exports.create = (company) => {
  console.log(company);
  if (!company) {
    return new createError.BadRequest("Something went wrong");
  }

  const values = [
    company.company_name,
    company.company_address,
    company.company_phone,
  ];
  let sqlString = `INSERT INTO companies(company_name, company_address, company_phone) VALUES ($1, $2, $3)`;
  return pool.query(sqlString, values);
};

exports.getAll = (companyUserId) => {
  const selectQuery = `SELECT * FROM companies WHERE company_user_id = $1`;
  return pool.query(selectQuery, [companyUserId]);
};

exports.getById = (id) => {
  const selectQuery = `SELECT * FROM companies WHERE company_id = $1`;
  return pool.query(selectQuery, [id]);
};

exports.updateById = (id, company) => {
  const values = [
    id,
    company.company_name,
    company.company_address,
    company.company_phone,
  ];
  const sqlQuery = `UPDATE companies SET company_name = $2 WHERE company_id = $1;`;
  return pool.query(sqlQuery, values);
};
