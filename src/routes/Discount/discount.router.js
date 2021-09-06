const express = require("express");
const checkAuth = require("../../middleware/checkAuth");
const {
  getAllDiscounts,
  getDiscount,
  createDiscount,
  deleteDiscount,
  updateDiscount,
} = require("./discount.controller.js");

const discountRouter = express.Router();

discountRouter.get("/", getAllDiscounts);
discountRouter.get("/:id", getDiscount);
discountRouter.post("/", createDiscount);
discountRouter.delete("/:id", deleteDiscount);
discountRouter.put("/:id", updateDiscount);

module.exports = discountRouter;
