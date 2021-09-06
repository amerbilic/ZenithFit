const express = require("express");
const checkAuth = require("../../middleware/checkAuth");
const {} = require("./orderItems.controller");

const orderItemsController = express.Router();

orderItemsController.get("/");
orderItemsController.get("/:id");
orderItemsController.post("/");
orderItemsController.put("/:id");
orderItemsController.delete("/:id");

module.exports = orderItemsController;
