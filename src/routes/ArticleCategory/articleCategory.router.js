const express = require("express");
const checkAuth = require("../../middleware/checkAuth");
const {
  getAllCategories,
  addCategory,
  getCategoryById,
  deleteCategory,
  getAllArticlesByCategory,
  getDirectoryArticles,
  getDirectoryArticlesByGoal
} = require("./articleCategory.controller");

const articleCategoryRouter = express.Router();

articleCategoryRouter.get("/", getAllCategories);
articleCategoryRouter.post("/", addCategory);
articleCategoryRouter.delete("/:id", getCategoryById);
articleCategoryRouter.get("/:id", deleteCategory);
articleCategoryRouter.get("/articles/:name",getAllArticlesByCategory)
articleCategoryRouter.get("/directory/:name",getDirectoryArticles)
articleCategoryRouter.get("/goals/:name",getDirectoryArticlesByGoal)


module.exports = articleCategoryRouter;
