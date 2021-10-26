const prisma = require("../../helpers/prisma");
const createError = require("http-errors");

const getAllCategories = async (req, res, next) => {
  try {
    const categories = await prisma.articleCategory.findMany({
      include: {
        articles: {
          include: {
            rating: true,
          },
        },
      },
    });

    res.status(200).json(categories);
  } catch (err) {
    next(err);
  }
};

const addCategory = async (req, res, next) => {
  try {
    const { name, desc } = req.body;

    if (!name) {
      throw createError.BadRequest("Please provide a name.");
    }
    const checkCategory = await prisma.articleCategory.findFirst({
      where: {
        name,
      },
    });

    if (checkCategory) {
      throw createError.Conflict("Category by this name already exists.");
    } else {
      await articleCategory.create({
        data: {
          name,
          desc,
        },
      });
      res.status(200).json({ success: "Category successfully created." });
    }
  } catch (err) {
    next(err);
  }
};

const getCategoryById = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    const category = await prisma.articleCategory.findFirst({
      where: { id },
      select: {
        name: true,
        desc: true,
        createdAt: true,
        articles: true,
      },
    });

    if (!category) {
      throw createError.NotFound("Category by this Id not found.");
    } else {
      res.json(200).json(category);
    }
  } catch (err) {
    next(err);
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    const checkCategory = await prisma.articleCategory.findFirst({
      where: { id },
    });

    if (!checkCategory) {
      throw createError.NotFound("Category by this Id not found.");
    } else {
      await prisma.article_category.delete({
        where: { id },
      });

      res.status(204).json({ success: "Category deleted succesfully." });
    }
  } catch (err) {
    next(err);
  }
};

const getAllArticlesByCategory = async (req, res, next) => {
  try {
    const categoryName = req.params.name;
    console.log(categoryName);

    const returnList = await prisma.articleCategory.findFirst({
      where: { name: categoryName },
      include: {
        articles: {
          include: {
            rating: true,
          },
        },
      },
    });

    if (!returnList) {
      throw createError.NotFound("Category by this name not found.");
    } else {
      res.status(200).json(returnList);
    }
  } catch (err) {
    next(err);
  }
};

const getDirectoryArticles = async (req, res, next) => {
  try {
    const directoryName = req.params.name;

    const returnList = await prisma.articleCategory.findMany({
      where: {
        desc: {
          contains: directoryName,
        },
      },
      select: {
        id: true,
        name: true,
        articles: {
          select: {
            id: true,
            name: true,
            desc: true,
            img: true,
            price: true,
            rating: {
              select: {
                rating: true,
              },
            },
          },
        },
      },
    });

    if (!returnList)
      throw createError.NotFound("This directory does not exist.");

    res.status(200).json(returnList);
  } catch (err) {
    next(err);
  }
};

const getDirectoryArticlesByGoal = async (req, res, next) => {
  try {
    const directoryName = req.params.name;

    const returnList = await prisma.articleCategory.findMany({
      where: {
        goalCategory: {
          contains: directoryName,
        },
      },
      select: {
        id: true,
        name: true,
        articles: {
          select: {
            id: true,
            name: true,
            desc: true,
            img: true,
            price: true,
            rating: {
              select: {
                rating: true,
              },
            },
          },
        },
      },
    });

    if (!returnList)
      throw createError.NotFound("This directory does not exist.");

    res.status(200).json(returnList);
  } catch (err) {
    next(err);
  }
};
module.exports = {
  getAllCategories,
  addCategory,
  getCategoryById,
  deleteCategory,
  getAllArticlesByCategory,
  getDirectoryArticles,
  getDirectoryArticlesByGoal
};
