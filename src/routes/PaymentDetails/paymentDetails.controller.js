const prisma = require("../../helpers/prisma");
const createError = require("http-errors");

const getAllPayments = async (req, res, next) => {
  try {
    const payments = await prisma.paymentDetails.findMany({
      select: {
        amount: true,
        provider: true,
        status: true,
        order_details: true,
      },
    });

    res.status(200).json(payments);
  } catch (err) {
    next(err);
  }
};

const getPaymentById = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    if (!id) throw createError.BadRequest("Please provide an Id parameter.");

    const findPayment = await prisma.paymentDetails.findFirst({
      where: { id },
    });

    if (!findPayment) {
      throw createError.NotFound("Payment by this Id does not exist.");
    }

    res.status(200).json(findPayment);
  } catch (err) {
    next(err);
  }
};

const updatePayment = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const { amount, provider, status } = req.body;

    if (isNaN(amount)) {
      throw createError.BadRequest("Please provide a valid number.");
    }

    if (!id) throw createError.BadRequest("Please provide an Id parameter.");

    const findPayment = await prisma.paymentDetails.findFirst({
      where: { id },
    });

    if (!findPayment) {
      throw createError.NotFound("Payment by this Id does not exist.");
    }

    await prisma.paymentDetails.update({
      where: { id },
      data: {
        amount,
        provider,
        status,
      },
    });

    res.status(200).json({ success: "Succesfully updated the payment." });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllPayments,
  getPaymentById,
  updatePayment,
};
