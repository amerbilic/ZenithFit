const prisma = require("../../helpers/prisma");
const createError = require("http-errors");
const bcrypt = require("bcrypt");

const getAllUsers = async (req, res, next) => {
  try {
    const getUsers = await prisma.user.findMany({
      select: {
        id:true,
        username: true,
        email:true,
        firstname: true,
        lastname: true,
        telephone: true,
        status: true,
        createdAt: true,
        updatedAt: true,
        addresses: true,
      },
    });
    res.status(200).json(getUsers);
  } catch (err) {
    next(err);
  }
};

const getUser = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    const getUsers = await prisma.user.findFirst({
      where: {
        id,
      },
      select: {
        username: true,
        firstname: true,
        lastname: true,
        telephone: true,
        status: true,
        addresses: true,
        id: true,
      },
    });

    if (!getUsers)
      throw createError.NotFound("User with this Id does not exist.");

    res.status(200).json(getUsers);
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    const getUsers = await prisma.user.findFirst({
      where: {
        id,
      },
    });

    if (!getUsers)
      throw createError.NotFound("User with this Id does not exist.");

    await prisma.user.delete({
      where: {
        id,
      },
    });

    res.status(204).json({ success: "User successfully deleted." });
  } catch (err) {
    next(err);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const { username, firstname, lastname, password, newPassword } = req.body;

    let hashedPassword;
    const getUser = await prisma.user.findFirst({
      where: {
        id,
      },
    });

    if (!getUser)
      throw createError.NotFound("User with this Id does not exist.");

    if (password) {
      let isMatch = await bcrypt.compare(password, getUser.password);

      if (!isMatch)
        throw createError.Unauthorized(
          "You have provided an incorrect password."
        );
      hashedPassword = await bcrypt.hash(newPassword, 10);
    }

    const updatedUser = await prisma.user.update({
      where: {
        id,
      },
      data: {
        username,
        firstname,
        lastname,
        password: hashedPassword,
      },
      select: {
        id: true,
        username: true,
        firstname: true,
        lastname: true,
        telephone: true,
        status: true,
        createdAt: true,
        updatedAt: true,
        addresses: true,
      },
    });

    res
      .status(200)
      .json({ success: "User successfully updated.", updatedUser });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
};
