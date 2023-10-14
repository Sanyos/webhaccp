const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");
const pool = require("../db");

module.exports.login = async (req, res) => {
  const email = req.body.user_email;
  const password = req.body.user_password;
  const selectQuery = `SELECT * FROM users WHERE user_email = $1`;
  pool.query(selectQuery, [email]).then(async (user) => {
    const loggedInUser = user.rows[0];
    if (!loggedInUser) return res.status(400).send("invalid-password");
    const validPass = await bcrypt.compare(
      password,
      loggedInUser.user_password
    );
    const regActive = loggedInUser.user_reg_active;
    if (!regActive) return res.status(400).send("reg-not-active");
    if (!validPass) return res.status(400).send("invalid-password");
    if (loggedInUser && !loggedInUser.user_archived) {
      const accessToken = jwt.sign(
        { name: loggedInUser.user_name, role: loggedInUser.user_role },
        process.env.ACCESS_TOKEN_SECRET
      );
      res.json({
        accessToken: accessToken,
        user_id: loggedInUser.user_id,
        user_phone: loggedInUser.user_phone,
        user_role: loggedInUser.user_role,
        user_email: loggedInUser.user_email,
        user_name: loggedInUser.user_name,
        user_archived: loggedInUser.user_archived,
      });
    } else {
      res.send("invalid-password");
    }
  });
};
