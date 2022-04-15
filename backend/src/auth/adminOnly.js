module.exports = (req, res, next) => {
  if (req.headers.role !== "ADMIN") {
    return res.sendStatus(401);
  }
  next();
};
