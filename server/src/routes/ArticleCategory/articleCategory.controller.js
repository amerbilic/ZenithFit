const { PrismaClient } = require("@prisma/client");
const createError = require("http-errors");

const { articleCategory } = new PrismaClient();

const getAllCategories = async (req, res, next) => {
  try {
    const categories = await articleCategory.findMany({
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
    const checkCategory = await articleCategory.findFirst({
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

    const category = await articleCategory.findFirst({
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

    const checkCategory = await articleCategory.findFirst({
      where: { id },
    });

    if (!checkCategory) {
      throw createError.NotFound("Category by this Id not found.");
    } else {
      await article_category.delete({
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

    const returnList = await articleCategory.findFirst({
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
module.exports = {
  getAllCategories,
  addCategory,
  getCategoryById,
  deleteCategory,
  getAllArticlesByCategory,
};