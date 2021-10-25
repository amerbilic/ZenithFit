const prisma = require("../../helpers/prisma");
const createError = require("http-errors");

const getAllRatings = async (req, res, next) => {
  try {
    const ratingList = await prisma.userRating.findMany({
      select: {
        id: true,
        rating: true,
        review: true,
        user_id: true,
        article_id: true,
      },
    });

    res.status(200).json(ratingList);
  } catch (err) {
    next(err);
  }
};

const getRatingById = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    const findRating = await prisma.userRating.findFirst({
      where: { id },
    });

    if (!findRating) {
      throw createError.NotFound("Rating by this Id has not been found.");
    } else res.status(200).json(findRating);
  } catch (err) {
    next(err);
  }
};

const getRatingByArticleId = async (req, res, next) => {
  try {
    const articleId = parseInt(req.params.id);

    const findArticle = await prisma.article.findFirst({
      where: { id: articleId },
    });

    if (!findArticle)
      throw createError.NotFound("This article does not exist.");

    const findRating = await prisma.userRating.findFirst({
      where: { article_id: articleId },
    });

    res.status(200).json(findRating);
  } catch (err) {
    next(err);
  }
};

const getRatingByUserId = async (req, res, next) => {
  try {
    const userId = parseInt(req.params.id);

    const findUser = await prisma.user.findFirst({
      where: { id: userId },
    });

    if (!findUser) throw createError.NotFound("This user does not exist.");

    const findRating = await prisma.userRating.findFirst({
      where: { user_id: userId },
    });

    res.status(200).json(findRating);
  } catch (err) {
    next(err);
  }
};

const addRating = async (req, res, next) => {
  try {
    const { user_id, rating, article_id } = req.body;

    const checkRating = await prisma.userRating.findFirst({
      where: {
        user_id,
        article_id,
      },
    });

    if (checkRating) {
      throw createError.Conflict("You have already rated this article.");
    } else {
      await prisma.userRating.create({
        data: {
          user_id,
          rating,
          article_id,
        },
      });

      res.status(200).json({ success: "Succesfully added rating." });
    }
  } catch (err) {
    next(err);
  }
};

const deleteRating = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    const findRating = await prisma.userRating.findFirst({
      where: { id },
    });

    if (!findRating) {
      throw createError.NotFound("Rating by this Id has not been found.");
    } else {
      await prisma.userRating.delete({
        where: { id },
      });

      res.status(200).json({ success: "Succesfully deleted rating." });
    }
  } catch (err) {
    next(err);
  }
};

const updateRating = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const { rating } = req.body;

    const findRating = await prisma.userRating.findFirst({
      where: {
        id,
      },
    });

    if (!findRating) {
      throw createError.NotFound("Rating does not exist");
    } else {
      await prisma.userRating.update({
        where: {
          id,
        },
        data: {
          rating,
        },
      });

      res.status(200).json({ success: "Succesfully updated rating." });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllRatings,
  getRatingById,
  getRatingByUserId,
  addRating,
  deleteRating,
  updateRating,
  getRatingByArticleId,
};
