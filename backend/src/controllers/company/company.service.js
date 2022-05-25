const createError = require("http-errors");
const pool = require("../../db");

exports.create = (company) => {
  if (!company) {
    return new createError.BadRequest("Something went wrong");
  }

  const values = [
    company.company_category,
    company.company_name,
    company.company_address,
    company.company_location,
    company.company_phone,
    company.company_headquarters,
    company.company_billing_address,
    company.company_registration_number,
    company.company_vat_number,
    company.company_archived,
    company.company_user_id,
  ];
  let sqlString = `
  INSERT INTO companies(company_category, company_name, company_address, company_location, company_phone, company_headquarters, company_billing_address, company_registration_number, company_vat_number, company_archived, company_user_id) 
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
  RETURNING *`;
  return pool.query(sqlString, values);
};

exports.getAll = (companyUserId) => {
  const selectQuery = `
  SELECT * 
  FROM companies 
  WHERE company_user_id = $1`;
  return pool.query(selectQuery, [companyUserId]);
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
    company.company_address,
    company.company_location,
    company.company_phone,
    company.company_headquarters,
    company.company_billing_address,
    company.company_registration_number,
    company.company_vat_number,
    company.company_archived,
  ];
  const sqlQuery = `
  UPDATE companies 
  SET company_category = $2, company_name = $3, company_address = $4, company_location = $5, company_phone = $6, company_headquarters = $7, company_billing_address = $8, company_registration_number = $9, company_vat_number = $10, company_archived = $11
  WHERE company_id = $1
  RETURNING *;`;
  return pool.query(sqlQuery, values);
};
