const pool = require("../../db");

exports.getAll = () => {
  const selectQuery = `
  SELECT * 
  FROM documents 
  `;
  return pool.query(selectQuery, []);
};

exports.getById = (id) => {
  const selectQuery = `
  SELECT * 
  FROM documents
  WHERE document_id = $1`;
  return pool.query(selectQuery, [id]);
};
