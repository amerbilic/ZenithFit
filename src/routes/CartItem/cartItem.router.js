const express = require("express");
const checkAuth = require("../../middleware/checkAuth");
const {
  createCartItem,
  deleteCartItem,
  updateCartItem,
  getCartItemsBySessionId,
} = require("./cartItem.controller");

const cartItemRouter = express.Router();

cartItemRouter.get("/session/:id", getCartItemsBySessionId);
cartItemRouter.post("/", createCartItem);
cartItemRouter.delete("/:id", deleteCartItem);
cartItemRouter.put("/:id", updateCartItem);

module.exports = cartItemRouter;
