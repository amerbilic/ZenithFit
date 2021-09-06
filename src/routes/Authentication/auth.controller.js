const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const createError = require("http-errors");
const client = require("../../helpers/init_redis");
const { PrismaClient } = require("@prisma/client");
const { authSchema, loginSchema } = require("../../helpers/validation.schema");
require("dotenv").config();

const { user } = new PrismaClient();

const signUp = async (req, res, next) => {
  try {
    const { password, email, username, firstname, lastname, telephone } =
      req.body;

    const result = await authSchema.validateAsync(req.body);

    const userEmail = await user.findFirst({
      where: {
        email: result.email,
      },
      select: {
        email: true,
      },
    });
    const userUsername = await user.findFirst({
      where: {
        username: result.username,
      },
      select: {
        username: true,
      },
    });

    if (userUsername)
      throw createError.Conflict(`${username} is already in use.`);
    if (userEmail) throw createError.Conflict(`${email} is already in use.`);

    const hashedPassword = await bcrypt.hash(password, 10);

    const savedUser = await user.create({
      data: {
        email,
        password: hashedPassword,
        firstname,
        lastname,
        status: 1,
        username,
      },
      select: {
        id: true,
        email: true,
        username: true,
      },
    });

    const userId = savedUser.id;

    const accessToken = await JWT.sign(
      {
        sub: userId,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
        issuer: "zenithFit.com",
      }
    );

    const refreshToken = await JWT.sign(
      {
        sub: userId,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1y",
        issuer: "zenithFit.com",
      }
    );

    client.SET(userId, refreshToken, "EX", 365 * 24 * 60 * 60, (err, reply) => {
      if (err) {
        console.log(err.message);
        throw createError.InternalServerError();
      }
    });

    res.json({ accessToken, refreshToken });
  } catch (err) {
    if (err.isJoi === true) err.status = 422;
    next(err);
  }
};

const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await loginSchema.validateAsync(req.body);

    console.log("one");

    let findUser = await user.findFirst({
      where: {
        email,
      },
      select: {
        password: true,
        status: true,
        id: true,
      },
    });

    console.log(findUser);

    if (!findUser || findUser === null)
      throw createError.NotFound("User not found.");

    const userStatus = findUser.status;
    const userId = findUser.id;

    let isMatch = await bcrypt.compare(password, findUser.password);

    if (!isMatch) throw createError.Unauthorized("Invalid credentials.");

    console.log("one");

    const accessToken = await JWT.sign(
      {
        sub: userId,
        userStatus,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
        issuer: "zenithFit.com",
      }
    );

    const refreshToken = await JWT.sign(
      {
        sub: userId,
        userStatus,
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1y",
        issuer: "zenithFit.com",
      }
    );

    client.SET(userId, refreshToken, "EX", 365 * 24 * 60 * 60, (err, reply) => {
      if (err) {
        console.log(err.message);
        throw createError.InternalServerError();
      }
    });

    res.json({ accessToken, refreshToken });
  } catch (err) {
    next(err);
  }
};

const refreshJWTToken = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) throw createError.BadRequest();

    let user = await JWT.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    req.user = user.sub;
    const userId = client.GET(user.sub, (err, result) => {
      if (err) {
        throw createError.InternalServerError();
      }
      if (refreshToken === result) return user.sub;
      throw createError.Unauthorized();
    });

    const accessToken = await JWT.sign(
      {
        sub: userId,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
        issuer: "zenithFit.com",
      }
    );

    const newRefreshToken = await JWT.sign(
      {
        sub: userId,
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1y",
        issuer: "zenithFit.com",
      }
    );
    res.send({ accessToken, newRefreshToken });
  } catch (err) {
    next(err);
  }
};

const logOut = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) throw createError.BadRequest();
    const { sub } = await JWT.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );
    client.DEL(sub, (err, val) => {
      if (err) {
        console.log(err.message);
        throw createError.InternalServerError();
      }
      console.log(val);
      res.sendStatus(204);
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  signUp,
  userLogin,
  refreshJWTToken,
  logOut,
};
