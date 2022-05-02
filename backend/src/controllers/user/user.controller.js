const createError = require("http-errors");
const userService = require("./user.service");
const bcrypt = require("bcrypt");

exports.createNewUser = (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return next(new createError.BadRequest("Invalid request body"));
  }

  const { username, email, phone, password, rePassword, role } = req.body;
  if (password === rePassword) {
    const newUser = { username, email, phone, password, role };
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
          phone: user.phoneNumber,
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
  // TODO USER LEKÉRDEZÉS
  const user = {
    name: "TestUser",
    phone: "06304446656",
    email: "test@gmail.com",
    _id: "1",
    role: "admin",
    password: "Test1234",
  };

  const id = req.params.id;
  let { role, oldPassword, password, rePassword, email, phone } = req.body;
  let paramObj = {};
  if (oldPassword === user.password || (password && password === rePassword)) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(
      password ? password : oldPassword,
      salt
    );
    paramObj = {
      role: role,
      password: hashedPassword,
      email: email,
      phone: phone,
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
