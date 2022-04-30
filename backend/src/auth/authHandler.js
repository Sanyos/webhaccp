const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");

module.exports.login = async (req, res) => {
  console.log(req.body);
  const user = {
    name: "TestUser",
    phone: "06304446656",
    email: "test@gmail.com",
    _id: "1",
    role: "admin",
    password: "Test1234",
  };

  if (!user) return res.status(400).send("Email or password is wrong");

  // const validPass = await bcrypt.compare(req.body.password, user.password);
  const validPass = req.body.password === user.password;
  if (!validPass) return res.status(400).send("Invalid password");

  if (user && !user.archived) {
    const accessToken = jwt.sign(
      { username: user.username, role: user.role },
      process.env.ACCESS_TOKEN_SECRET
    );

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
      accessToken: accessToken,
      archived: user.archived,
    });
  } else {
    res.send("Email or password is incorrect");
  }
};
