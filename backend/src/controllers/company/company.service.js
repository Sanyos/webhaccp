const createError = require("http-errors");
const pool = require("../../db");

exports.create = (company) => {
  if (!company) {
    return new createError.BadRequest("Something went wrong");
  }

  const values = [
    company.company_category,
    company.company_name,
    company.company_location,
    company.company_phone,
    company.company_headquarters,
    company.company_billing_address,
    company.company_registration_number,
    company.company_vat_number,
    company.company_archived,
    company.company_user_id,
    company.company_billing_name,
    company.company_unit_name,
  ];
  let sqlString = `
  INSERT INTO companies(company_category, company_name, company_location, company_phone, company_headquarters, company_billing_address, company_registration_number, company_vat_number, company_archived, company_user_id, company_billing_name, company_unit_name) 
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
  RETURNING *`;
  return pool.query(sqlString, values);
};

exports.getAllByUserId = (companyUserId) => {
  const selectQuery = `
  SELECT * 
  FROM companies 
  JOIN users 
  ON users.user_id = companies.company_user_id
  WHERE company_user_id = $1`;
  return pool.query(selectQuery, [companyUserId]);
};

exports.getAll = () => {
  const selectQuery = `
  SELECT * 
  FROM users 
  JOIN companies 
  ON users.user_id = companies.company_user_id `;
  return pool.query(selectQuery, []);
};

exports.getById = (id) => {
  const selectQuery = `
  SELECT * 
  FROM users 
  JOIN companies 
  ON users.user_id = companies.company_user_id 
  WHERE company_id = $1`;
  return pool.query(selectQuery, [id]);
};

exports.updateById = (id, company) => {
  if (!company || !id) {
    return new createError.BadRequest("Something went wrong");
  }
  const values = [
    id,
    company.company_category,
    company.company_name,
    company.company_location,
    company.company_phone,
    company.company_headquarters,
    company.company_billing_address,
    company.company_registration_number,
    company.company_vat_number,
    company.company_archived,
    company.company_billing_name,
    company.company_unit_name,
  ];
  const sqlQuery = `
  UPDATE companies 
  SET company_category = $2, company_name = $3, company_location = $4, company_phone = $5, company_headquarters = $6, company_billing_address = $7, company_registration_number = $8, company_vat_number = $9, company_archived = $10, company_billing_name = $11, company_unit_name = $11
  WHERE company_id = $1
  RETURNING *;`;
  return pool.query(sqlQuery, values);
};
