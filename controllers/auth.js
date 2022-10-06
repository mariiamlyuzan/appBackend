const { Conflict, Unauthorized, NotFound } = require("http-errors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Jimp = require("jimp");
const shortid = require("shortid");
const { SECRET_KEY } = process.env;

const { User } = require("../models/user");

async function register(req, res, next) {
  try {
    const { name, email, password } = req.body;
    const userExist = await User.findOne({ email });

    if (userExist) {
      return next(Conflict(`User with ${email} exist`));
    }
    const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

    const payload = {
      id: shortid(),
    };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "90d" });
    const user = await User.create({
      name,
      email,
      password: hashPassword,
      token,
    });

    res.status(201).json({
      status: "success",
      code: 201,
      token,
      user: {
        name,
        email,
      },
    });
  } catch (err) {
    next(err);
  }
}

async function logIn(req, res, next) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return next(Unauthorized(`Email ${email} not found`));
    }

    const passwordCompare = bcrypt.compareSync(password, user.password);

    if (!passwordCompare) {
      return next(Unauthorized(`Password is wrong`));
    }

    const payload = {
      id: user._id,
    };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "10h" });
    await User.findByIdAndUpdate(user._id, { token });
    res.json({
      status: "success",
      code: 200,
      token,
      user: {
        email,
        name: user.name,
      },
    });
  } catch (err) {
    next(err);
  }
}

async function logOut(req, res, next) {
  try {
    const { _id } = req.user;
    await User.findByIdAndUpdate(_id, { token: null });
    res.status(204).json();
  } catch (err) {
    next(err);
  }
}

async function getCurrentUser(req, res, next) {
  try {
    const { email } = req.user;
    res.json({
      status: "success",
      code: 200,
      user: {
        email,
      },
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  register,
  logIn,
  logOut,
  getCurrentUser,
};
