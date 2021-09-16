const express = require("express");
const checkAuth = require("../../middleware/checkAuth");
const {
  getAllOrders,
  getOrderById,
  deleteOrder,
  getOrderByUserId,
} = require("./orderDetails.controller");

const orderDetailsRouter = express.Router();

orderDetailsRouter.get("/", getAllOrders);
orderDetailsRouter.get("/:id", getOrderById);
orderDetailsRouter.delete("/:id", deleteOrder);
orderDetailsRouter.get("/user/:id", getOrderByUserId);

module.exports = orderDetailsRouter;
