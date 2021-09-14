const prisma = require("../../helpers/prisma");
const createError = require("http-errors");

const getCartItemsBySessionId = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    const findItems = await prisma.cartItem.findMany({
      where: { session_id: id },
    });

    if (!findItems)
      throw createError.NotFound(
        "Cart items under this Session Id do not exist."
      );
  } catch (err) {
    next(err);
  }
};

const createCartItem = async (req, res, next) => {
  try {
    const { quantity, session_id, article_id } = req.body;

    if (!quantity || !session_id || !article_id)
      throw createError.BadRequest("Please provide all required parameters.");

    await prisma.cartItem.create({
      data: {
        quantity,
        session_id,
        article_id,
      },
    });

    res.status(200).json({ success: "Succesfully added cart item." });
  } catch (err) {
    next(err);
  }
};

const deleteCartItem = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    if (!id)
      throw createError.BadRequest("Please provide all required parameters.");

    const findCartItem = await prisma.cartItem.findFirst({
      where: { id },
    });

    if (!findCartItem)
      throw createError.NotFound("Cart item by this Id has not been found.");

    await prisma.cartItem.delete({
      where: { id },
    });

    res.status(200).json({ success: "Sucessfully deleted the Cart item." });
  } catch (err) {
    next(err);
  }
};

const updateCartItem = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const { quantity } = req.body;

    if (!quantity || isNaN(quantity))
      throw createError.BadRequest("Please provide a valid quantity");

    if (!id) throw createError.BadRequest("Please provide an Id parameter.");

    const findCartItem = await prisma.cartItem.findFirst({
      where: { id },
    });

    if (!findCartItem)
      throw createError.NotFound("Cart item by this Id has not been found.");

    await prisma.cartItem.update({
      where: { id },
      data: { quantity },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createCartItem,
  deleteCartItem,
  updateCartItem,
  getCartItemsBySessionId,
};
