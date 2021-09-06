const JWT = require("jsonwebtoken");
const createError = require("http-errors");

const checkAuth = async (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token) return next(createError.Unauthorized());

  try {
    let user = await JWT.verify(token, process.env.JWT_SECRET);
    req.user = user.sub;
    next();
  } catch (err) {
    const message = err.name === "JsonWebTokenError" ? "Unauthorized" : err.message;
    return next(createError.Unauthorized(message));
  }
};

module.exports = checkAuth;
