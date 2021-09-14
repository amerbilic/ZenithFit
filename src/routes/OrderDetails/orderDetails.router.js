const express = require("express");
const checkAuth = require("../../middleware/checkAuth");
const {
  getAllOrders,
  getOrderById,
  deleteOrder,
} = require("./orderDetails.controller");

const orderDetailsRouter = express.Router();

orderDetailsRouter.get("/", getAllOrders);
orderDetailsRouter.get("/:id", getOrderById);
orderDetailsRouter.delete("/:id", deleteOrder);

module.exports = orderDetailsRouter;
