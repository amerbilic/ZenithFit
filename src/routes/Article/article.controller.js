const prisma = require("../../helpers/prisma");
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

const getArticleSearchData = async (req, res, next) => {
  try {
    const articles = await prisma.article.findMany({
      select: {
        id: true,
        name: true,
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

    if (!id) throw createError.BadRequest("Please provide an id parameter");

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
            id:true
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

const updateArticle = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const { name, desc, price, category_id, quantity } = req.body;

    const getArticle = await prisma.article.findFirst({
      where: {
        id,
      },
    });

    const checkCollision = await prisma.article.findFirst({
      where: {
        name,
      },
    });

    if (checkCollision)
      throw createError.Conflict("An article by this name already exists");

    if (!getArticle)
      throw createError.NotFound("Article with this Id does not exist.");

    await prisma.article.update({
      where: {
        id,
      },
      data: {
        name,
        desc,
        price,
        category_id,
        quantity,
      },
    });

    res.status(200).json({ success: "Article succesfully updated" });
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

const getBestSellers = async (req, res, next) => {
  try {
    
    const bestSellersCount = await prisma.article.findMany({
      take: 4,
      select: {
        id: true,
        name: true,
        img: true,
        price: true,
        rating: {
          select: {
            rating: true,
          },
        },
      },
      orderBy: {
        order_items: {
          _count: "desc",
        },
      },
    });

    res.status(200).json(bestSellersCount);
  } catch (err) {
    next(err);
  }
};

const getRecommended = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const recommendedCount = await prisma.article.findMany({
      take: 10,
      where:{
        category: {
          id
        }
      },
      select: {
        id: true,
        name: true,
        img: true,
        price: true,
        rating: {
          select: {
            rating: true,
          },
        },
      },
      orderBy: {
        order_items: {
          _count: "desc",
        },
      },
    });

    res.status(200).json(recommendedCount);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllArticles,
  getArticleById,
  deleteArticle,
  createArticle,
  getBestSellers,
  updateArticle,
  getArticleSearchData,
  getRecommended
};
