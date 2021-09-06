const express = require("express");
const checkAuth = require("../../middleware/checkAuth");
const {
  getAllInventories,
  updateInventory,
} = require("./articleInventory.controller");

const articleInventoryRouter = express.Router();

articleInventoryRouter.get("/",getAllInventories);
articleInventoryRouter.put("/:id",updateInventory);

module.exports = articleInventoryRouter;
