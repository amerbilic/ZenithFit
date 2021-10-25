const prisma = require("../../helpers/prisma");
const createError = require("http-errors");

const getAllAddresses = async (req, res, next) => {
  try {
    const allAddresses = await prisma.address.findMany({
      select: {
        addressLine: true,
        city: true,
        postalCode: true,
        country: true,
      },
    });
    res.status(200).json(allAddresses);
  } catch (err) {
    next(err);
  }
};

const getAddressesbyUserId = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    const checkUser = await prisma.user.findFirst({
      where: { id },
    });

    if (!checkUser) {
      throw createError.NotFound("This user does not exist in the database.");
    }

    const addressList = await prisma.address.findMany({
      where: {
        user_id: id,
      },
    });

    res.status(200).json(addressList);
  } catch (err) {
    next(err);
  }
};

const getAddressById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const addressSearch = await prisma.address.findFirst({
      where: {
        id: id,
      },
      select: {
        addressLine: true,
        city: true,
        postalCode: true,
        country: true,
      },
    });

    if (!addressSearch) {
      throw createError.NotFound("Address by this Id not found.");
    } else {
      res.status(200).json(addressSearch);
    }
  } catch (err) {
    next(err);
  }
};

const addAddress = async (req, res, next) => {
  try {
    const { addressLine, city, postalCode, country, phone, user_id } = req.body;

    if (!addressLine || !city || !postalCode || !country) {
      throw createError.BadRequest("Please provide all required fields.");
    }

    console.log(req.body);
    const searchAddress = await prisma.address.findFirst({
      where: {
        addressLine,
      },
    });

    if (searchAddress !== null) {
      throw createError.Conflict("Address by this name already exists.");
    }

    await prisma.address.create({
      data: {
        addressLine,
        city,
        postalCode,
        country,
        user_id,
        phone,
      },
    });

    return res.status(200).json({ success: "Address succesfully created." });
  } catch (err) {
    next(err);
  }
};

const deleteAddress = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    const findAddress = await prisma.address.findFirst({
      where: {
        id,
      },
    });

    if (!findAddress) {
      throw createError.NotFound("Address by this Id does not exist.");
    } else {
      await prisma.address.delete({
        where: {
          id,
        },
      });
      res.status(200).json({ success: "Address succesfully deleted!" });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllAddresses,
  getAddressById,
  addAddress,
  deleteAddress,
  getAddressesbyUserId,
};
