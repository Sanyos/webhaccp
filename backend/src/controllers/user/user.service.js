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
    user.user_reg_active,
  ];
  let sqlString = `
  INSERT INTO users(user_name, user_password, user_email, user_phone, user_role, user_archived, user_reg_active) 
  VALUES ($1, $2, $3, $4, $5, $6, $7)
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

exports.getByEmail = (email) => {
  const selectQuery = ` 
  SELECT * 
  FROM users 
  WHERE user_email = $1`;
  return pool.query(selectQuery, [email]);
};

exports.updateById = (id, user) => {
  if (!user) {
    return new createError.BadRequest("Something went wrong");
  }
  const values = [
    id,
    user.user_name,
    user.user_email,
    user.user_password,
    user.user_phone,
    user.user_archived,
    user.user_reg_active,
    user.user_new_pw_exp_date,
  ];
  const sqlQuery = `
  UPDATE users
  SET user_name = COALESCE (NULLIF($2, ''), user_name), user_email = COALESCE (NULLIF($3, ''), user_email), user_password = COALESCE (NULLIF($4, ''), user_password), user_phone = COALESCE (NULLIF($5, ''), user_phone), user_archived = COALESCE (NULLIF($6, false), user_archived), user_reg_active = $7, user_new_pw_exp_date = $8
  WHERE user_id = $1
  RETURNING *;`;
  return pool.query(sqlQuery, values);
};

exports.updateUserExpDate = (id, expDate) => {
  if (!expDate) {
    return new createError.BadRequest("Something went wrong");
  }
  const values = [id, expDate];
  const sqlQuery = `
  UPDATE users
  SET user_new_pw_exp_date = $2
  WHERE user_id = $1
  RETURNING *;`;
  return pool.query(sqlQuery, values);
};

exports.updateUserArchived = (id, archived) => {
  if (!archived) {
    return new createError.BadRequest("Something went wrong");
  }
  const values = [id, archived];
  const sqlQuery = `
  UPDATE users
  SET user_archived = $2
  WHERE user_id = $1
  RETURNING *;`;
  return pool.query(sqlQuery, values);
};

exports.updateUserRegActive = (id, regActive) => {
  if (!regActive) {
    return new createError.BadRequest("Something went wrong");
  }
  const values = [id, regActive];
  const sqlQuery = `
  UPDATE users
  SET user_reg_active = $2
  WHERE user_id = $1
  RETURNING *;`;
  return pool.query(sqlQuery, values);
};
