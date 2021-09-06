const { PrismaClient } = require("@prisma/client");
const createError = require("http-errors");

const { articleInventory } = new PrismaClient();

const getAllInventories = async (req, res, next) => {
  try {
    const inventories = await articleInventory.findMany({
      select: {
        quantity: true,
        createdAt: true,
        updatedAt: true,
        articles: true,
      },
    });

    res.status(200).json(inventories);
  } catch (err) {
    next(err);
  }
};

const updateInventory = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const { quantity } = req.body;

    if (isNaN(quantity)) {
      throw createError.BadRequest("Please provide a valid number.");
    }

    const checkInventory = await articleInventory.findFirst({
      where: {
        id,
      },
    });

    if (!checkInventory) {
      throw createError.NotFound("Inventory by this Id does not exist.");
    }

    const inventory = await articleInventory.update({
      where: {
        id,
      },
      data: {
        quantity,
      },
    });

    res
      .status(200)
      .json({ success: "Inventory successfully updated.", inventory });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllInventories,
  updateInventory,
};
