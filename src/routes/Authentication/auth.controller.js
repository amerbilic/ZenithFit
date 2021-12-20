const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const createError = require("http-errors");
const prisma = require("../../helpers/prisma");
// const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { authSchema, loginSchema } = require("../../helpers/validation.schema");
// const passport = require("passport");
require("dotenv").config();

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: "/auth/google/callback",
//     },
//     async function (accessToken, refreshToken, profile, done) {
//       const user = await prisma.user.findFirst({
//         where: {
//           email: profile.emails[0].value,
//         },
//       });

//       if(!user) {
//        const newUser = await prisma.user.create({
//           data: {
//             email: profile.emails[0].value,
//             password: "123456",
//             firstname: profile.name.givenName,
//             lastname: profile.name.familyName,
//             status: 1,
//             username: profile.emails[0].value,
//           },
//           select: {
//             id: true,
//             email: true,
//             username: true,
//           },
//         });
//         done(null, newUser);
//       }

//       done(null, user);
//     }
//   )
// );

// passport.serializeUser((user, done) => {
//   done(null, user);
// });

// passport.deserializeUser((user, done) => {
//   done(null, user);
// });

const signUp = async (req, res, next) => {
  try {
    const { password, email, username, firstname, lastname, telephone } =
      req.body;
    const result = await authSchema.validateAsync(req.body);

    const userEmail = await prisma.user.findFirst({
      where: {
        email: result.email,
      },
      select: {
        email: true,
      },
    });
    const userUsername = await prisma.user.findFirst({
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

    const savedUser = await prisma.user.create({
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
    const userStatus = savedUser.status;

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
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1y",
        issuer: "zenithFit.com",
      }
    );

    res.json({ accessToken, refreshToken, userId });
  } catch (err) {
    if (err.isJoi === true) err.status = 422;
    next(err);
  }
};

const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await loginSchema.validateAsync(req.body);

    let findUser = await prisma.user.findFirst({
      where: {
        email,
      },
      select: {
        password: true,
        status: true,
        id: true,
        status: true,
      },
    });

    if (!findUser || findUser === null)
      throw createError.NotFound("User not found.");

    const userStatus = findUser.status;
    const userId = findUser.id;

    let isMatch = await bcrypt.compare(password, findUser.password);

    if (!isMatch) throw createError.Unauthorized("Invalid credentials.");

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

    res.json({ accessToken, refreshToken, userId });
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
