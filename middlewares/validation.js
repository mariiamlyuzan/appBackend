const Joi = require("joi");

module.exports = {
  expensesValidation: (req, res, next) => {
    const schema = Joi.object({
      date: Joi.string(),
      food: Joi.string(),
      goods: Joi.string(),
      services: Joi.string(),
      makeup: Joi.string(),
      medicine: Joi.string(),
      clothing: Joi.string(),
      transport: Joi.string(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
      error.status = 400;
      throw error;
    }

    next();
  },

  userRegisterValidation: (req, res, next) => {
    const schema = Joi.object({
      name: Joi.string().required(),
      password: Joi.string().min(2).max(30).required(),
      email: Joi.string().required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
      error.status = 400;
      throw error;
    }

    next();
  },
  userLogInValidation: (req, res, next) => {
    const schema = Joi.object({
      password: Joi.string().min(2).max(30).required(),
      email: Joi.string().required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
      error.status = 400;
      throw error;
    }

    next();
  },
};
