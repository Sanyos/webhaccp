const createError = require("http-errors");
const userService = require("./user.service");
const bcrypt = require("bcrypt");

const emailSender = require("../../service/email-sender");
const confirmRegEmail = require("../../mail/reg-confirm-mail-contents");
const forgotPasswordEmail = require("../../mail/forgot-password-mail-content");

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
          user_reg_active: false,
        };

        emailSender.sendEmail(
          responseUser.user_email,
          confirmRegEmail.confirmRegEmail(user.user_id)
        );
        res.status(200).json(responseUser);
      })

      .catch((err) => {
        return next(
          new createError[500](`Could not save user - Error: ${err}`)
        );
      });
  }
};

exports.getAllUser = (req, res, next) => {
  return userService
    .getAll()
    .then((users) => {
      let responseUsers = [];
      users.rows.forEach((user) => {
        let responseUser = {
          user_name: user.user_name,
          user_role: user.user_role,
          user_archived: user.user_archived,
          user_email: user.user_email,
          user_phone: user.user_phone,
          user_id: user.user_id,
          user_reg_active: user.user_reg_active,
        };
        responseUsers.push(responseUser);
      });
      res.status(200).json(responseUsers);
    })
    .catch((err) => {
      return next(new createError[500](`Could not find users - Error: ${err}`));
    });
};

exports.getUserById = (req, res, next) => {
  const id = req.params.id;
  return userService
    .getById(id)
    .then((resUser) => {
      const user = resUser.rows[0];
      let responseUser = {
        user_name: user.user_name,
        user_role: user.user_role,
        user_archived: user.user_archived,
        user_email: user.user_email,
        user_phone: user.user_phone,
        user_id: user.user_id,
        user_reg_active: user.user_reg_active,
      };
      res.status(200).json(responseUser);
    })
    .catch((err) => {
      return next(
        new createError[500](
          `Could not find user whith this id: ${id} - Error: ${err}`
        )
      );
    });
};

exports.userUpdate = async (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return next(new createError.BadRequest("Invalid request body"));
  }

  const {
    oldPassword,
    user_password,
    rePassword,
    user_email,
    user_phone,
    user_name,
    user_archived,
    user_reg_active,
  } = req.body;

  const id = req.params.id;

  userService.getById(id).then(async (userById) => {
    const user = userById.rows[0];

    if (!user) {
      return new createError.BadRequest("Something went wrong");
    }

    const validPass = await bcrypt.compare(oldPassword, user.user_password);
    if (!validPass) {
      return res.send("password-is-wrong");
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(
        user_password !== "" && user_password === rePassword
          ? user_password
          : oldPassword,
        salt
      );

      const updatedUser = {
        user_name: user_name,
        user_password: hashedPassword,
        user_phone: user_phone,
        user_email: user_email,
        user_archived: user_archived,
        user_reg_active: user_reg_active,
      };

      return userService
        .updateById(id, updatedUser)
        .then((user) => {
          res.status(200).json(user.rows[0]);
        })
        .catch((err) => {
          return next(
            new createError[500](`Could not update user - Error: ${err}`)
          );
        });
    }
  });
};

exports.archivingById = (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return next(new createError.BadRequest("Invalid request body"));
  }
  const id = req.params.id;
  const { user_archived } = req.body;
  return userService
    .updateUserArchived(id, user_archived)
    .then((user) => {
      res.status(200).json(user.rows[0]);
    })
    .catch((err) => {
      return next(
        new createError[500](`Could not update user - Error: ${err}`)
      );
    });
};

exports.confirmRegistration = (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return next(new createError.BadRequest("Invalid request body"));
  }
  const id = req.params.id;
  const { user_reg_active } = req.body;
  return userService
    .updateUserRegActive(id, user_reg_active)
    .then((updatedUser) => {
      res.status(200).json(updatedUser.rows[0]);
    })
    .catch((err) => {
      return next(
        new createError[500](`Could not update user - Error: ${err}`)
      );
    });
};

exports.sendPasswordResetMail = (req, res, next) => {
  const email = req.params.email;

  userService.getByEmail(email).then(async (userByEmail) => {
    const user = userByEmail.rows[0];
    const id = user?.user_id;

    if (id) {
      let datePlusTenMinute = new Date();
      datePlusTenMinute.setMinutes(datePlusTenMinute.getMinutes() + 10);

      return userService
        .updateUserExpDate(id, datePlusTenMinute)
        .then((updatedUser) => {
          res.status(200).json(updatedUser.rows[0]);
          emailSender.sendEmail(
            email,
            forgotPasswordEmail.forgotPasswordEmail(id)
          );
        })
        .catch((err) => {
          return next(
            new createError[500](`Could not update user - Error: ${err}`)
          );
        });
    } else {
      res.status(400).send("email-not-exists");
    }
  });
};

exports.changePassword = async (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return next(new createError.BadRequest("Invalid request body"));
  }
  const id = req.params.id;
  const newPassword = req.body.user_password;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(newPassword, salt);

  userService.getById(id).then((userById) => {
    const user = userById.rows[0];
    if (!user) {
      return new createError.BadRequest("Could not find user by id");
    }

    const updatedUser = {
      user_name: user.user_name,
      user_password: hashedPassword,
      user_phone: user.user_phone,
      user_email: user.user_email,
      user_archived: user.user_archived,
      user_reg_active: user.user_reg_active,
      user_new_pw_exp_date: null,
    };
    const passwordResetExpDate = new Date(user.user_new_pw_exp_date);
    const dateNow = new Date();

    if (
      passwordResetExpDate &&
      passwordResetExpDate.getTime() > dateNow.getTime()
    ) {
      return userService
        .updateById(id, updatedUser)
        .then((updatedUser) => {
          res.status(200).json(updatedUser.rows[0]);
        })
        .catch((err) => {
          return next(
            new createError[500](`Could not update user - Error: ${err}`)
          );
        });
    } else {
      return res.status(400).send("expired");
    }
  });
};
