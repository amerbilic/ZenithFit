const express = require("express");
const checkAuth = require("../../middleware/checkAuth");
const {
  getAllArticles,
  getArticleById,
  deleteArticle,
  createArticle,
  getBestSellers,
  updateArticle
} = require("./article.controller");

const articlesRouter = express.Router();

articlesRouter.get("/", getAllArticles);
articlesRouter.get("/article/:id", getArticleById);
articlesRouter.put("/:id", updateArticle);
articlesRouter.get("/bestsellers", getBestSellers);
articlesRouter.delete("/:id", deleteArticle);
articlesRouter.post("/", createArticle);

module.exports = articlesRouter;
