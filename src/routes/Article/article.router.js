const express = require("express");
const checkAuth = require("../../middleware/checkAuth");
const {
  getAllArticles,
  getArticleById,
  deleteArticle,
  createArticle,
  getBestSellers,
} = require("./article.controller");

const articlesRouter = express.Router();

articlesRouter.get("/", getAllArticles);
articlesRouter.get("/article/:id", getArticleById);
articlesRouter.get("/bestsellers", getBestSellers);
articlesRouter.delete("/:id", deleteArticle);
articlesRouter.post("/", createArticle);

module.exports = articlesRouter;
