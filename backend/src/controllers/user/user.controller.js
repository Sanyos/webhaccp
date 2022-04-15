const createError = require("http-errors");
const userService = require("./user.service");
const bcrypt = require("bcrypt");

exports.createNewUser = (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return next(new createError.BadRequest("Invalid request body"));
  }

  const { username, email, password, rePassword, role } = req.body;
  if (password === rePassword) {
    const newUser = { username, email, password, role };
    return userService
      .create(newUser)
      .then((user) => {
        res.status(201).json(user);
      })
      .catch((err) => {
        return next(new createError[500](`Could not saved user Error: ${err}`));
      });
  }
};

exports.getAllUser = (req, res, next) => {
  return userService
    .getAll()
    .then((users) => {
      let responseUsers = [];
      users.forEach((user) => {
        let responseUser = {
          username: user.username,
          role: user.role,
          archived: user.archived,
          email: user.email,
          _id: user._id,
        };
        responseUsers.push(responseUser);
      });
      res.status(200).json(responseUsers);
    })
    .catch((err) => {
      return next(new createError[500](`Could not find users Error: ${err}`));
    });
};

exports.archivingById = (req, res, next) => {
  const _id = req.params.id;
  return userService
    .updateById(_id, req.body)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      return next(new createError[500](`Could not updated user Error: ${err}`));
    });
};

exports.userUpdate = async (req, res, next) => {
  const id = req.params.id;
  let { role, password, rePassword, email } = req.body;
  let paramObj = {};
  if (password && password === rePassword) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    paramObj = {
      role: role,
      password: hashedPassword,
      email: email,
    };
  } else {
    paramObj = {
      role: role,
      email: email,
    };
  }
  return userService
    .updateById(id, paramObj)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      return next(new createError[500](`Could not updated user Error: ${err}`));
    });
};