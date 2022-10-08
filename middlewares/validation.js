const Joi = require("joi");

module.exports = {
  expensesValidation: (req, res, next) => {
    const schema = Joi.object({
      date: Joi.string().required(),
      food: Joi.string().required(),
      goods: Joi.string().required(),
      services: Joi.string().required(),
      makeup: Joi.string().required(),
      medicine: Joi.string().required(),
      clothing: Joi.string().required(),
      transport: Joi.string().required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
      error.status = 400;
      throw error;
    }

    next();
  },

  incomeValidation: (req, res, next) => {
    const schema = Joi.object({
      date: Joi.string().required(),
      income: Joi.string().required(),
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
