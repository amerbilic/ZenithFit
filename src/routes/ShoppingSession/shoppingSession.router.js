const express = require("express");
const checkAuth = require("../../middleware/checkAuth");
const {
  getShoppingSession,
  createShoppingSession,
  deleteShoppingSession,
  getShoppingSessionByUserId,
} = require("./shoppingSession.controller");

const shoppingSessionRouter = express.Router();

shoppingSessionRouter.get("/", getShoppingSession);
shoppingSessionRouter.get("/user/:id", getShoppingSessionByUserId);
shoppingSessionRouter.post("/", createShoppingSession);
shoppingSessionRouter.delete("/:id", deleteShoppingSession);

module.exports = shoppingSessionRouter;
