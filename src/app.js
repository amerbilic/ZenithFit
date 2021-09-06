const express = require("express");
const morgan = require("morgan");
const createError = require("http-errors");
const cors = require("cors");
require("./helpers/init_redis");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const articlesRouter = require("./routes/Article/article.router");
const articleCategoryRouter = require("./routes/ArticleCategory/articleCategory.router");
const addressRouter = require("./routes/Address/address.router");
const userreviewsRouter = require("./routes/UserReviews/userreviews.router");
const authRouter = require("./routes/Authentication/auth.router");
const articleInventoryRouter = require("./routes/ArticleInventory/articleInventory.router");
const discountRouter = require("./routes/Discount/discount.router");
const userRouter = require("./routes/User/user.router");

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

if ((process.env.NODE_ENV = "production")) {
  app.use(express.static(path.join(__dirname, "../client/build")));
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.use("/articles", articlesRouter);
app.use("/category", articleCategoryRouter);
app.use("/address", addressRouter);
app.use("/userreviews", userreviewsRouter);
app.use("/auth", authRouter);
app.use("/inventory", articleInventoryRouter);
app.use("/discount", discountRouter);
app.use("/users", userRouter);

app.post("/payment", (req, res, next) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd",
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      next(createError.InternalServerError(stripeErr));
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});

app.use(async (req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

module.exports = app;
