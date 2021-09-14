const express = require("express");
const checkAuth = require("../../middleware/checkAuth");
const {
  getAllPayments,
  getPaymentById,
  updatePayment,
} = require("./paymentDetails.controller");

const paymentDetailsRouter = express.Router();

paymentDetailsRouter.get("/", getAllPayments);
paymentDetailsRouter.get("/:id", getPaymentById);
paymentDetailsRouter.put("/:id", updatePayment);

module.exports = paymentDetailsRouter;
