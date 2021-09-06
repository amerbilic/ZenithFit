const express = require("express");
const checkAuth = require("../../middleware/checkAuth");
const {
  getAllAddresses,
  getAddressById,
  addAddress,
  deleteAddress,
} = require("./address.controller");

const addressRouter = express.Router();

addressRouter.get("/",checkAuth, getAllAddresses);
addressRouter.get("/:id", getAddressById);
addressRouter.post("/", addAddress);
addressRouter.delete("/:id", deleteAddress);

module.exports = addressRouter;
