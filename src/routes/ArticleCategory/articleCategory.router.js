const express = require("express");
const checkAuth = require("../../middleware/checkAuth");
const {
  getAllCategories,
  addCategory,
  getCategoryById,
  deleteCategory,
  getAllArticlesByCategory
} = require("./articleCategory.controller");

const articleCategoryRouter = express.Router();

articleCategoryRouter.get("/", getAllCategories);
articleCategoryRouter.post("/", addCategory);
articleCategoryRouter.delete("/:id", getCategoryById);
articleCategoryRouter.get("/:id", deleteCategory);
articleCategoryRouter.get("/articles/:name",getAllArticlesByCategory)

module.exports = articleCategoryRouter;
