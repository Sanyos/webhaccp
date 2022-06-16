const pool = require("../../db");

exports.getAllByCompanyId = (companyId) => {
  const selectQuery = `
  SELECT * 
  FROM documents 
  WHERE document_company_id = $1`;
  return pool.query(selectQuery, [companyId]);
};

exports.getById = (id) => {
  const selectQuery = `
  SELECT * 
  FROM documents
  WHERE document_id = $1`;
  return pool.query(selectQuery, [id]);
};
