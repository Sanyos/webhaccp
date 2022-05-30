const createError = require("http-errors");
const userService = require("./user.service");
const bcrypt = require("bcrypt");
const pool = require("../../db");

exports.createNewUser = async (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return next(new createError.BadRequest("Invalid request body"));
  }
  const {
    user_name,
    user_email,
    user_phone,
    user_password,
    rePassword,
    user_role,
    user_archived,
  } = req.body;
  if (user_password === rePassword) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user_password, salt);
    const newUser = {
      user_name,
      user_email,
      user_phone,
      hashedPassword,
      user_role,
      user_archived,
    };

    return userService
      .create(newUser)
      .then((resUser) => {
        const user = resUser.rows[0];
        let responseUser = {
          user_name: user.user_name,
          user_role: user.user_role,
          user_archived: user.user_archived,
          user_email: user.user_email,
          user_phone: user.user_phone,
          user_id: user.user_id,
        };
        res.status(200).json(responseUser);
      })
      .catch((err) => {
        return next(new createError[500](`Could not save user Error: ${err}`));
      });
  }
};

exports.getAllUser = (req, res, next) => {
  return userService
    .getAll()
    .then((users) => {
      console.log("users: ", users.rows);
      let responseUsers = [];
      users.rows.forEach((user) => {
        let responseUser = {
          user_name: user.user_name,
          user_role: user.user_role,
          user_archived: user.user_archived,
          user_email: user.user_email,
          user_phone: user.user_phone,
          user_id: user.user_id,
        };
        responseUsers.push(responseUser);
      });
      res.status(200).json(responseUsers);
    })
    .catch((err) => {
      return next(new createError[500](`Could not find users Error: ${err}`));
    });
};

exports.getUserById = (req, res, next) => {
  const id = req.params.id;
  return userService
    .getById(id)
    .then((resUser) => {
      console.log("user by id: ", resUser.rows[0]);
      const user = resUser.rows[0];
      let responseUser = {
        user_name: user.user_name,
        user_role: user.user_role,
        user_archived: user.user_archived,
        user_email: user.user_email,
        user_phone: user.user_phone,
        user_id: user.user_id,
      };
      res.status(200).json(responseUser);
    })
    .catch((err) => {
      return next(
        new createError[500](
          `Could not find user whith this id: ${id} Error: ${err}`
        )
      );
    });
};

exports.archivingById = (req, res, next) => {
  const id = req.params.id;
  return userService
    .updateById(id, req.body)
    .then((user) => {
      console.log(user.rows[0]);
      res.status(200).json(user.rows[0]);
    })
    .catch((err) => {
      return next(new createError[500](`Could not update user Error: ${err}`));
    });
};

exports.userUpdate = async (req, res, next) => {
  let {
    oldPassword,
    user_password,
    rePassword,
    user_email,
    user_phone,
    user_name,
    user_archived,
  } = req.body;

  console.log("req.body", req.body);
  const id = req.params.id;

  userService.getById(id).then(async (userById) => {
    console.log("get user by id", userById.rows[0]);
    const user = userById.rows[0];

    if (!user) {
      return new createError.BadRequest("Something went wrong");
    }

    const validPass = await bcrypt.compare(oldPassword, user.user_password);
    if (!validPass) {
      return res.send("passwordIsWrong");
    } else {
      console.log(user_password);
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(
        user_password !== "" && user_password === rePassword
          ? user_password
          : oldPassword,
        salt
      );

      let updatedUser = {
        user_name: user_name,
        user_password: hashedPassword,
        user_phone: user_phone,
        user_archived: user_archived,
        user_email: user_email,
      };

      /*   if (user.user_email !== user_email) {
        updatedUser.user_email = user_email;
      } */

      return userService
        .updateById(id, updatedUser)
        .then((user) => {
          console.log("user updated: ", user.rows[0]);
          res.status(200).json(user.rows[0]);
        })
        .catch((err) => {
          return next(
            new createError[500](`Could not update user Error: ${err}`)
          );
        });
    }
  });
};
