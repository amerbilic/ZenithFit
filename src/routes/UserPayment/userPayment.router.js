const express = require("express");
const checkAuth = require("../../middleware/checkAuth");
const {
  getAllUserPayments,
  getUserPaymentById,
  getUserPaymentByUserId,
  addUserPayment,
  updateUserPayment,
  deleteUserPayment,
} = require("./userPayment.controller");

const userPaymentRouter = express.Router();

userPaymentRouter.get("/", getAllUserPayments);
userPaymentRouter.post("/", addUserPayment);
userPaymentRouter.delete("/:id", deleteUserPayment);
userPaymentRouter.put("/:id",updateUserPayment);
userPaymentRouter.get("/:id", getUserPaymentById);
userPaymentRouter.get("/user/:id", getUserPaymentByUserId);

module.exports = userPaymentRouter;
