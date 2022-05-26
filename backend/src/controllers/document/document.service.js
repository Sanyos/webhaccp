const createError = require("http-errors");
const pool = require("../../db");

exports.create = (document) => {
  if (!document) {
    return new createError.BadRequest("Something went wrong");
  }

  const values = [
    document.document_name,
    document.document_date,
    document.document_user_id,
    document.document_company_id,
  ];

  let sqlString = `
  INSERT INTO documents(document_name, document_date, document_user_id, document_company_id) 
  VALUES ($1, $2, $3, $4)
  RETURNING *`;
  return pool.query(sqlString, values);
};

exports.getAllByCompanyId = (companyId) => {
  const selectQuery = `
  SELECT * 
  FROM documents 
  WHERE document_company_id = $1`;
  return pool.query(selectQuery, [companyId]);
};

exports.getAll = () => {
  const selectQuery = `
  SELECT * 
  FROM users 
  JOIN documents 
  ON users.user_id = documents.document_user_id `;
  return pool.query(selectQuery, []);
};

exports.getById = (id) => {
  const selectQuery = `
  SELECT * 
  FROM documents
  WHERE document_id = $1`;
  return pool.query(selectQuery, [id]);
};
