const { PrismaClient } = require("@prisma/client");
const createError = require("http-errors");

const { orderItems } = new PrismaClient();

const getAllOrders = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

const getOrderById = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

const deleteOrder = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

const createOrder = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

const updateOrder = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllOrders,
  getOrderById,
  deleteOrder,
  createOrder,
  updateOrder,
};
