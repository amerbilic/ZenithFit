const express = require("express");
const checkAuth = require("../../middleware/checkAuth");
const { getTop10Customers,getTop10Articles,getTopRatedArticles } = require("./reports.controller");

const reportsRouter = express.Router();

reportsRouter.get("/top10users", getTop10Customers);
reportsRouter.get("/top10articles", getTop10Articles);
reportsRouter.get("/topRatedArticles", getTopRatedArticles);

module.exports = reportsRouter;
