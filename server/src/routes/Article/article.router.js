const express = require("express");
const checkAuth = require("../../middleware/checkAuth");
const {
  getAllArticles,
  getArticleById,
  deleteArticle,
  createArticle,
} = require("./article.controller");

const articlesRouter = express.Router();

articlesRouter.get("/", getAllArticles);
articlesRouter.get("/:id", getArticleById);
articlesRouter.delete("/:id", deleteArticle);
articlesRouter.post("/", createArticle);

module.exports = articlesRouter;
