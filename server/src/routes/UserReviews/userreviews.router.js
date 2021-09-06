const express = require("express");
const {
  getAllReviews,
  getReviewById,
  getReviewByUserId,
  addReview,
  deleteReview,
  updateReview,
} = require("./userreviews.controller");

const userreviewsRouter = express.Router();

userreviewsRouter.get("/", getAllReviews);
userreviewsRouter.get("/:id", getReviewById);
userreviewsRouter.get("/user/:id", getReviewByUserId);
userreviewsRouter.post("/", addReview);
userreviewsRouter.delete("/:id", deleteReview);
userreviewsRouter.put("/:id", updateReview);

module.exports = userreviewsRouter;
