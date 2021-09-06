const { PrismaClient } = require("@prisma/client");
const createError = require("http-errors");

const { address } = new PrismaClient();

const getAllAddresses = async (req, res, next) => {
  try {
    const allAddresses = await address.findMany({
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

const getAddressById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const addressSearch = await address.findOne({
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
    
    const searchAddress = await address.findOne({
      where: {
        addressLine,
        city,
      },
    });

    if (searchAddress) {
      throw createError.Conflict("Address by this name already exists.");
    }

    await address.create({
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

    const findAddress = await address.findOne({
      where: {
        id,
      },
    });

    if (!findAddress) {
      throw createError.NotFound("Address by this Id does not exist.");
    } else {
      await address.delete({
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
};
