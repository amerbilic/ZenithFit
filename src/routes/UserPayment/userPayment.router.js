const express = require("express");
const checkAuth = require("../../middleware/checkAuth");
const {
  getAllPayments,
  addPayment,
  getPaymentByUserId,
  deletePayment,
} = require("./usePayment.controller");

const usePaymentRouter = express.Router();

usePaymentRouter.get("/", getAllPayments);
usePaymentRouter.post("/", addPayment);
usePaymentRouter.delete("/:id", deletePayment);
usePaymentRouter.get("/:id", getPaymentByUserId);

module.exports = usePaymentRouter;
