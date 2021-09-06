const express = require("express");
const checkAuth = require("../../middleware/checkAuth");
const {} = require("./orderDetails.controller");

const orderDetailsController = express.Router();

orderDetailsController.get("/");
orderDetailsController.get("/:id");
orderDetailsController.post("/");
orderDetailsController.put("/:id");
orderDetailsController.delete("/:id");

module.exports = orderItemsController;
