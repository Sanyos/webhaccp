const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const staticUrl = path.join(__dirname, "..", "public", "angular");

const authHandler = require("./auth/authHandler");

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(cors());
app.options("*", cors());
app.use(express.urlencoded({ extended: true }));

app.use("/", (req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.post("/login", authHandler.login);
app.use("/user", require("./controllers/user/user.routes"));

app.get("*/*", express.static(staticUrl));
app.all("*", function (req, res) {
  res.status(200).sendFile(`${staticUrl}/index.html`);
});

app.use((err, req, res, next) => {
  console.error(`ERROR: ${err.stack}: ${err.message}`);
  res.status(err.statusCode);
  res.json({
    hasError: true,
    message: err.message,
  });
});

module.exports = app;
