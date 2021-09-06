const express = require("express");
const {
  signUp,
  userLogin,
  refreshJWTToken,
  logOut,
} = require("./auth.controller");

const authRouter = express.Router();

authRouter.post("/signup", signUp);
authRouter.post("/login", userLogin);
authRouter.post("/refreshToken", refreshJWTToken);
authRouter.delete("/logout", logOut);

module.exports = authRouter;
