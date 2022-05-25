const createError = require("http-errors");
const pool = require("../../db");

exports.create = (user) => {
  if (!user) {
    return new createError.BadRequest("Something went wrong");
  }
  console.log(user);
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

exports.getAll = () => {};

exports.updateById = (_id, updatedUser) => {};
