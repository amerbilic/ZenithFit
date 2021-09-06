const Joi = require("joi");

const authSchema = Joi.object({
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(8).required(),
  username: Joi.string().required(),
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  telephone: Joi.string(),
});

const loginSchema = Joi.object({
  email:Joi.string().email().lowercase().required(),
  password:Joi.string().required(),
})

const addressSchema = Joi.object({});

const articleSchema = Joi.object({});

const inventorySchema = Joi.object({});

const cartSchema = Joi.object({});

const discountSchema = Joi.object({});

const orderDetailsSchema = Joi.object({});

const paymentDetailsSchema = Joi.object({});

const shoppingSessionSchema = Joi.object({});

const userSchema = Joi.object({});

const userPaymentSchema = Joi.object({});

const userReviewsSchema = Joi.object({});

module.exports = {
  authSchema,
  loginSchema,
};
