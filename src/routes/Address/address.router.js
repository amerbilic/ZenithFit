const express = require("express");
const checkAuth = require("../../middleware/checkAuth");
const {
  getAllAddresses,
  getAddressById,
  addAddress,
  deleteAddress,
  getAddressesbyUserId
} = require("./address.controller");

const addressRouter = express.Router();

addressRouter.get("/", getAllAddresses);
addressRouter.get("/:id", getAddressById);
addressRouter.get("/user/:id", getAddressesbyUserId);
addressRouter.post("/", addAddress);
addressRouter.delete("/:id", deleteAddress);

module.exports = addressRouter;
