const express = require("express");
const checkAuth = require("../../middleware/checkAuth");
const {processOrder} = require("./finalizeOrder.controller");

const finalizeOrderRouter = express.Router();

finalizeOrderRouter.post("/", processOrder);

module.exports = finalizeOrderRouter;
