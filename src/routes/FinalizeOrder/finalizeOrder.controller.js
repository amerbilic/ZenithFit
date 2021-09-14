const prisma = require("../../helpers/prisma");
const createError = require("http-errors");

const processOrder = async (req, res, next) => {
  const { provider, status, userId, total, productList } = req.body;
  try {
    if (!provider || !status || !userId || !total || !productList) {
      const { id } = await prisma.paymentDetails.create({
        data: {
          amount: total,
          provider,
          status,
        },
      });

      const newOrder = await prisma.orderDetails.create({
        data: {
          total,
          user_id: userId,
          payment_id: id,
        },
      });

      productList.forEach(async (element) => {
        await prisma.orderItems.create({
          data: {
            quantity: element.quantity,
            order_id: newOrder.id,
            article_id: element.id,
          },
        });
      });

      res.status(200).send({ success: "Order succesfully created." });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  processOrder,
};
