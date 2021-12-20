const express = require("express");
const passport = require("passport");
const {
  signUp,
  userLogin,
  refreshJWTToken,
  logOut,
} = require("./auth.controller");

const authRouter = express.Router();

authRouter.post("/signup", signUp);
authRouter.post("/login", userLogin);
// authRouter.get(
//   "/google",
//   passport.authenticate("google", { scope: ["email", "profile"] })
// );
// authRouter.get(
//   "/google/callback",
//   passport.authenticate("google", {
//     successRedirect: "http://localhost:3000/",
//     failureRedirect: "/login/failed",
//   })
// );
authRouter.post("/refreshToken", refreshJWTToken);
authRouter.get("/logout",logOut);
// authRouter.get("/login/failed", (req, res) => {
//   res.status(401).json({
//     success: false,
//     message: "failure",
//   });
// });
// authRouter.get("/login/success", (req, res) => {
//   if (req.user) {
//     res.status(200).json({
//       success: true,
//       message: "succesful",
//       user: req.user,
//     });
//   }
//   res.status(401).json({
//     success: false,
//     message: "failure",
//   });
// });

module.exports = authRouter;
