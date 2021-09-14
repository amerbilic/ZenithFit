const prisma = require("../../helpers/prisma");
const createError = require("http-errors");

const getShoppingSession = async (req, res, next) => {
  try {
    const session = await prisma.shoppingSession.findMany({
      select: {
        total: true,
        user: {
          select: {
            username: true,
          },
        },
        cart_item: {
          select: {
            quantity: true,
            article: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });

    res.status(200).json(session);
  } catch (err) {}
};

const getShoppingSessionByUserId = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    const session = await prisma.shoppingSession.findFirst({
      where: { user_id: id },
    });

    if (!session)
      throw createError.NotFound(
        "Shopping session for this user does not exist."
      );

    res.status(200).json(session);
  } catch (err) {}
};

const createShoppingSession = async (req, res, next) => {
  try {
    const { total, user_id } = req.body;

    if (isNaN(total))
      throw createError.BadRequest("Please provide a valid amount");
    if (!user_id)
      throw createError.BadRequest("Please provide a valid user Id");

    const findSession = await prisma.shoppingSession.findFirst({
      where: { user_id },
    });

    if (findSession)
      throw createError.Conflict(
        "This user already has an active shopping session."
      );

    await prisma.shoppingSession.create({
      data: {
        user_id,
        total,
      },
    });

    res.status(200).json({ success: "Succesfully created shopping session." });
  } catch (err) {}
};

const deleteShoppingSession = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    const session = await prisma.shoppingSession.findFirst({
      where: { id },
    });

    if (!session)
      throw createError.NotFound("Session by this Id has not been found.");

    await prisma.shoppingSession.delete({
      where: { id },
    });

    res.status(200).json({ success: "Successfully deleted shopping session." });
  } catch (err) {}
};

module.exports = {
  getShoppingSession,
  createShoppingSession,
  deleteShoppingSession,
  getShoppingSessionByUserId,
};
