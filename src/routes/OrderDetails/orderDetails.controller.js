const prisma = require("../../helpers/prisma");
const createError = require("http-errors");

const getAllOrders = async (req, res, next) => {
  try {
    const orders = await prisma.orderDetails.findMany({
      select: {
        id: true,
        total: true,
        createdAt: true,
        user: {
          select: {
            username: true,
            firstname: true,
            lastname: true,
          },
        },
        payment_details: {
          select: {
            provider: true,
            status: true,
          },
        },
        order_items: {
          select: {
            quantity: true,
            article: {
              select: {
                name: true,
                price: true,
                img: true,
                rating: {
                  select: {
                    rating: true,
                    user_id:true,
                    id:true,
                  },
                },
              },
            },
          },
        },
      },
    });

    res.status(200).json(orders);
  } catch (err) {
    next(err);
    return;
  }
};

const getOrderByUserId = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    const findOrders = await prisma.orderDetails.findMany({
      where: { user_id: id },
      select: {
        id: true,
        total: true,
        createdAt: true,
        payment_details: {
          select: {
            provider: true,
            status: true,
          },
        },
        order_items: {
          select: {
            quantity: true,
            article: {
              select: {
                name: true,
                img: true,
                id: true,
                price: true,
                rating: {
                  select: {
                    rating: true,
                    user_id:true,
                    id:true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!findOrders) {
      throw createError.NotFound("This user has no previous orders.");
    }

    res.status(200).json(findOrders);
  } catch (err) {
    next(err);
  }
};

const getOrderById = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    if (!id)
      throw createError.BadRequest("You need to provide an Id parameter.");

    const findOrder = await prisma.orderDetails.findFirst({
      where: { id },
      select: {
        id: true,
        total: true,
        createdAt: true,
        user: {
          select: {
            username: true,
            firstname: true,
            lastname: true,
          },
        },
        payment_details: {
          select: {
            provider: true,
            status: true,
          },
        },
        order_items: {
          select: {
            quantity: true,
            article: {
              select: {
                name: true,
                img: true,
                price: true,
                rating: {
                  select: {
                    rating: true,
                    user_id:true,
                    id:true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!findOrder) {
      throw createError.NotFound("Order by this Id does not exist.");
    }

    res.status(200).json(findOrder);
  } catch (err) {
    next(err);
    return;
  }
};

const deleteOrder = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    if (!id)
      throw createError.BadRequest("You need to provide an Id parameter");

    const findOrder = await prisma.orderDetails.findFirst({
      where: { id },
    });

    if (!findOrder) {
      throw createError.NotFound("Order by this Id does not exist.");
    }

    const deleteOrderDetails = prisma.orderDetails.delete({
      where: { id },
    });
    const deleteOrderItems = prisma.orderItems.deleteMany({
      where: { order_id: id },
    });
    const deletePaymentDetails = prisma.paymentDetails.delete({
      where: { id: id },
    });

    await prisma.$transaction([
      deleteOrderDetails,
      deleteOrderItems,
      deletePaymentDetails,
    ]);

    res.status(200).json({ success: "Succesfully deleted order." });
  } catch (err) {
    next(err);
    return;
  }
};

module.exports = {
  getAllOrders,
  getOrderById,
  deleteOrder,
  getOrderByUserId,
};
