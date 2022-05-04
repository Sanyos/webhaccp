const createError = require("http-errors");
const userService = require("./user.service");
const bcrypt = require("bcrypt");
const users = require("../../mock_data/users-data");

exports.createNewUser = (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return next(new createError.BadRequest("Invalid request body"));
  }

  const { username, email, phone, password, rePassword, role } = req.body;
  if (password === rePassword) {
    const newUser = { username, email, phone, password, role };
    res.status(201).send(newUser);
    /*  return userService
      .create(newUser)
      .then((user) => {
        res.status(201).json(user);
      })
      .catch((err) => {
        return next(new createError[500](`Could not saved user Error: ${err}`));
      });*/
  }
};

exports.getAllUser = (req, res, next) => {
  let responseUsers = users;
  res.json(responseUsers);
  /*  return userService
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
    }); */
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
    name: "Admin",
    phone: "06304446656",
    email: "admin@test.com",
    _id: "1",
    role: "admin",
    password: "Test1234",
  };

  const id = req.params.id;
  let { role, oldPassword, password, rePassword, email, phone, name } =
    req.body;
  let updatedUser = {};

  // const validPass = await bcrypt.compare(oldPassword, user.password);
  if (oldPassword === user.password) {
    if (email !== user.email /* && TODO CHECK IF EMAIL IS TAKEN */) {
      return res.send("emailIsAlreadyTaken");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(
      password && password === rePassword ? password : oldPassword,
      salt
    );
    updatedUser = {
      name: name,
      role: role,
      password: hashedPassword,
      email: email,
      phone: phone,
    };
    res.status(200).send(updatedUser);
  } else {
    return res.send("passwordIsWrong");
  }

  /*  return userService
    .updateById(id, updatedUser)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      return next(new createError[500](`Could not updated user Error: ${err}`));
    }); */
};
