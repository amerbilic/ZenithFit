const prisma = require('../../helpers/prisma');
const createError = require("http-errors");

const getAllDiscounts = async (req, res, next) => {
  try {
    const discounts = await prisma.discount.findMany({
      select: {
        name: true,
        desc: true,
        discount_percent: true,
        active: true,
        articles: true,
      },
    });
    return res.status(200).json(discounts);
  } catch (err) {
    next(err);
  }
};

const getDiscount = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    const findDiscount = await prisma.discount.findFirst({
      where: {
        id,
      },
      select: {
        name: true,
        desc: true,
        discount_percent: true,
        active: true,
        articles: true,
      },
    });

    if (!findDiscount) {
      throw createError.NotFound("Discount by this Id does not exist");
    }

    return res.json(findDiscount);
  } catch (err) {
    next(err);
  }
};

const createDiscount = async (req, res, next) => {
  try {
    const { name, desc, discount_percent, active } = req.body;

    if (!name || !desc || !discount_percent || !active) {
      throw createError.BadRequest("Please provide all the required fields.");
    }
    d;
    const findDiscount = await prisma.discount.findFirst({
      where: {
        name,
      },
    });

    if (findDiscount) {
      throw createError.Conflict("Discount by this name already exists.");
    }

    await prisma.discount.create({
      data: {
        name,
        desc,
        discount_percent,
        active,
      },
    });

    res.json(200).json({ success: "Discount succesfully created" });
  } catch (err) {
    next(err);
  }
};

const deleteDiscount = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    const findDiscount = await prisma.discount.findFirst({
      where: {
        id,
      },
    });

    if (!findDiscount) {
      throw createError.NotFound("Discount by this Id does not exist.");
    }

    await prisma.discount.delete({
      where: {
        id,
      },
    });

    res.status(200).json({ success: "Discount deleted successfully." });
  } catch (err) {
    next(err);
  }
};

const updateDiscount = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const { name, desc, discount_percent, active } = req.body;

    const findDiscount = await prisma.discount.findFirst({
      where: {
        id,
      },
    });

    if (isNaN(discount_percent) || typeof discount_percent != "boolean") {
      throw createError.BadRequest("Please provide valid arguments.");
    }

    if (!findDiscount) {
      throw createError.NotFound("Discount by this Id does not exist.");
    }

    await prisma.discount.update({
      where: {
        id,
      },
      data: {
        name,
        desc,
        discount_percent,
        active,
      },
    });

    res.status(200).json({ success: "Succesfully updated the discount." });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllDiscounts,
  getDiscount,
  createDiscount,
  deleteDiscount,
  updateDiscount,
};
