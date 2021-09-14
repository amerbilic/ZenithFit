const prisma = require('../../helpers/prisma');
const createError = require("http-errors");

const getAllArticles = async (req, res, next) => {
  try {
    const articles = await prisma.article.findMany({
      select: {
        id: true,
        name: true,
        desc: true,
        img: true,
        price: true,
        rating: true,
        createdAt: true,
        category: {
          select: {
            name: true,
          },
        },
      },
    });

    res.status(200).json(articles);
  } catch (err) {
    next(err);
  }
};

const getArticleById = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    const searchArticle = await prisma.article.findFirst({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        desc: true,
        img: true,
        price: true,
        rating: true,
        createdAt: true,
        category: {
          select: {
            name: true,
          },
        },
      },
    });

    if (!searchArticle) {
      throw createError.NotFound("Article by this id not found.");
    } else {
      res.status(200).json(searchArticle);
    }
  } catch (err) {
    next(err);
  }
};

const deleteArticle = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    const searchArticle = await prisma.article.findFirst({
      where: {
        id,
      },
    });

    if (!searchArticle) {
      throw createError.NotFound("Article by this id not found.");
    } else {
      await prisma.article.delete({
        where: {
          id,
        },
      });
      res.status(204).json({ success: "Article successfully deleted" });
    }
  } catch (err) {
    next(err);
  }
};

const createArticle = async (req, res, next) => {
  try {
    const { name, desc, img, price, category_id, quantity, discount_id } =
      req.body;

    if (!name || !desc || !price || !category_id || !quantity)
      throw createError.BadRequest("Please provide all the specified fields.");

    const searchArticle = await prisma.article.findFirst({
      where: {
        name,
      },
    });

    if (searchArticle) {
      throw createError.Conflict("Article by this name already exists.");
    }

    await prisma.articleInventory.create({
      data: {
        quantity,
        articles: {
          create: {
            name,
            desc,
            img,
            price,
            category_id,
            discount_id,
          },
        },
      },
    });

    res.status(201).json({ success: "Article successfully created." });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllArticles,
  getArticleById,
  deleteArticle,
  createArticle,
};
