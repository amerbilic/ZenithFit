const  prisma  = require("../../helpers/prisma");
const createError = require("http-errors");

const getAllUserPayments = async (req, res, next) => {
  try {
    const Payments = await prisma.userPayment.findMany({
      select: {
        id: true,
        payment_type: true,
        provider: true,
        account_no: true,
        user_id: true,
        expiry: true,
      },
    });
    res.status(200).json(Payments);
  } catch (err) {
    next(err);
  }
};

const getUserPaymentById = async (req, res, next) => {
  const id = parseInt(req.params.id);
  try {
    const findPayment = await prisma.userPayment.findFirst({
      where: {
        id,
      },
      select: {
        id: true,
        payment_type: true,
        provider: true,
        account_no: true,
        user_id: true,
        expiry: true,
      },
    });

    if (!findPayment) {
      throw createError.NotFound("User payment by this Id was not found.");
    }

    res.status(200).json(findPayment);
  } catch (err) {
    next(err);
  }
};

const getUserPaymentByUserId = async (req, res, next) => {
  const id = parseInt(req.params.id);

  try {
    const findPayment = await prisma.userPayment.findFirst({
      where: {
        user_id: id,
      },
      select: {
        id: true,
        payment_type: true,
        provider: true,
        account_no: true,
        user_id: true,
        expiry: true,
      },
    });
    if (!findPayment) {
      throw createError.NotFound("User payment by this Id was not found.");
    }

    res.status(200).json(findPayment);
  } catch (err) {
    next(err);
  }
};

const addUserPayment = async (req, res, next) => {
  try {
    const { payment_type, provider, account_no, expiry, user_id } = req.body;

    if (!payment_type || !provider || !account_no || !expiry || !user_id) {
      throw createError.BadRequest("Please provide all required fields.");
    }

    const check = await prisma.userPayment.findFirst({
      where: {
        provider,
        account_no,
        user_id,
      },
    });

    if (check) {
      throw createError.Conflict("This payment already exists.");
    }

    await prisma.userPayment.create({
      data: {
        payment_type,
        provider,
        account_no,
        expiry,
        user_id,
      },
    });

    res.status(200).json({ success: "Payment succesfully added." });
  } catch (err) {
    next(err);
  }
};

const updateUserPayment = async (req, res, next) => {
  const id = parseInt(req.params.id);
  const { payment_type, provider, account_no, expiry } = req.body;

  try {
    const find = await prisma.userPayment.findFirst({
      where: {
        id,
      },
    });

    if (!find) {
      throw createError.NotFound("Payment with this Id was not found");
    }

    await prisma.userPayment.update({
      where: {
        id,
      },
      data: {
        payment_type,
        provider,
        account_no,
        expiry,
      },
    });

    res.status(200).json({ success: "Succesfully updated the payment" });
  } catch (err) {
    next(err);
  }
};

const deleteUserPayment = async (req, res, next) => {
  const id = parseInt(req.params.id);
  try {
    const find = await prisma.userPayment.findFirst({
      where: {
        id,
      },
    });

    if (!find) {
      throw createError.NotFound("Payment with this Id was not found");
    } else {
      await prisma.userPayment.delete({
        where: {
          id,
        },
      });

      res
        .status(204)
        .json({ success: "Succesfully deleted user payment method." });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllUserPayments,
  getUserPaymentById,
  getUserPaymentByUserId,
  addUserPayment,
  updateUserPayment,
  deleteUserPayment,
};
