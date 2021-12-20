const express = require("express");
const checkAuth = require("../../middleware/checkAuth");
const {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("./user.controller");

const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.put("/:id",updateUser);
userRouter.delete("/:id", deleteUser);
userRouter.get("/:id?",getUser);

module.exports = userRouter;
