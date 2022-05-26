const createError = require("http-errors");
const pool = require("../../db");

exports.create = (user) => {
  if (!user) {
    return new createError.BadRequest("Something went wrong");
  }
  const values = [
    user.user_name,
    user.hashedPassword,
    user.user_email,
    user.user_phone,
    user.user_role,
    user.user_archived,
  ];
  let sqlString = `
  INSERT INTO users(user_name, user_password, user_email, user_phone, user_role, user_archived) 
  VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING *`;
  return pool.query(sqlString, values);
};

exports.getAll = () => {
  const selectQuery = `SELECT * FROM users`;
  return pool.query(selectQuery, []);
};

exports.getById = (id) => {
  const selectQuery = ` 
  SELECT * 
  FROM users 
  WHERE user_id = $1`;
  return pool.query(selectQuery, [id]);
};

exports.updateById = (id, user) => {
  if (!user) {
    return new createError.BadRequest("Something went wrong");
  }
  console.log("uservalues: ", user);
  const values = [
    id,
    user.user_name,
    user.user_password,
    user.user_email,
    user.user_phone,
    user.user_archived,
  ];
  const sqlQuery = `
  UPDATE users
  SET user_name = $2, user_password = $3, user_email = $4, user_phone = $5, user_archived = $6
  WHERE user_id = $1
  RETURNING *;`;
  return pool.query(sqlQuery, values);
};
