const express = require("express");
const morgan = require("morgan");
const createError = require("http-errors");
const cors = require("cors");
const path = require("path");
const cookieSession = require("cookie-session");
const passport = require("passport");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const addressRouter = require("./routes/Address/address.router");
const articlesRouter = require("./routes/Article/article.router");
const articleCategoryRouter = require("./routes/ArticleCategory/articleCategory.router");
const authRouter = require("./routes/Authentication/auth.router");
const articleInventoryRouter = require("./routes/ArticleInventory/articleInventory.router");
const cartItemRouter = require("./routes/CartItem/cartItem.router");
const discountRouter = require("./routes/Discount/discount.router");
const orderDetailsRouter = require("./routes/OrderDetails/orderDetails.router");
const paymentdetailsRouter = require("./routes/PaymentDetails/paymentDetails.router");
const shoppingSessionRouter = require("./routes/ShoppingSession/shoppingSession.router");
const userRouter = require("./routes/User/user.router");
const userPaymentRouter = require("./routes/UserPayment/userPayment.router");
const userRatingRouter = require("./routes/UserRating/userRating.router");
const finalizeOrderRouter = require("./routes/FinalizeOrder/finalizeOrder.router");
const reportsRouter = require("./routes/Reports/reports.router");

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(
  cookieSession({ name: "session", keys: ["amer"], maxAge: 24 * 60 * 60 * 100 })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/address", addressRouter);
app.use("/articles", articlesRouter);
app.use("/category", articleCategoryRouter);
app.use("/inventory", articleInventoryRouter);
app.use("/auth", authRouter);
app.use("/cartItem", cartItemRouter);
app.use("/discount", discountRouter);
app.use("/finalizeOrder", finalizeOrderRouter);
app.use("/orders", orderDetailsRouter);
app.use("/paymentdetails", paymentdetailsRouter);
app.use("/shoppingsession", shoppingSessionRouter);
app.use("/users", userRouter);
app.use("/userpayment", userPaymentRouter);
app.use("/rating", userRatingRouter);
app.use("/reports", reportsRouter);

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

app.post("/payment-sheet", async (req, res) => {
  const amount = 100;
  const customer = await stripe.customers.create();
  const ephemeralKey = await stripe.ephemeralKeys.create(
    { customer: customer.id },
    { apiVersion: "2020-08-27" }
  );
  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: "usd",
    customer: customer.id,
    automatic_payment_methods: {
      enabled: false,
    },
  });

  res.json({
    paymentIntent: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
    publishableKey:
      "pk_test_51JUspyLwlYLCgk44mgpftL5N6Cn7Roq0mTImZbkaHUnOF5MEIyGQFYbd3It6ug1jNHqatUjdO1Vr1GDW4zx6VZhH006sBepdLt",
  });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
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
