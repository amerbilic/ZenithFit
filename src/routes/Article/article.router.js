const express = require("express");
const checkAuth = require("../../middleware/checkAuth");
const {
  getAllArticles,
  getArticleById,
  deleteArticle,
  createArticle,
  getBestSellers,
  updateArticle,
  getArticleSearchData,
  getRecommended
} = require("./article.controller");

const articlesRouter = express.Router();

articlesRouter.get("/", getAllArticles);
articlesRouter.get("/searchData", getArticleSearchData);
articlesRouter.get("/article/:id", getArticleById);
articlesRouter.put("/:id", updateArticle);
articlesRouter.get("/bestsellers", getBestSellers);
articlesRouter.get("/recommender/:id", getRecommended);
articlesRouter.delete("/:id", deleteArticle);
articlesRouter.post("/", createArticle);

module.exports = articlesRouter;
