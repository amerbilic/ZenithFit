const express = require("express");
const {
  getAllRatings,
  getRatingById,
  getRatingByUserId,
  addRating,
  deleteRating,
  updateRating,
  getRatingByArticleId,
} = require("./userRating.controller");

const userRatingRouter = express.Router();

userRatingRouter.get("/", getAllRatings);
userRatingRouter.get("/:id", getRatingById);
userRatingRouter.get("/user/:id", getRatingByUserId);
userRatingRouter.get("/article/:id", getRatingByArticleId);
userRatingRouter.post("/", addRating);
userRatingRouter.delete("/:id", deleteRating);
userRatingRouter.put("/:id", updateRating);

module.exports = userRatingRouter;
