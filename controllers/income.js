const { Income } = require("../models/income");
const createError = require("http-errors");

async function listIncomes(req, res, next) {
  try {
    const { _id } = req.user;
    const income = await Income.find({ owner: _id });

    res.json({ status: "success", code: 200, income });
  } catch (error) {
    next(error);
  }
}

async function addIncome(req, res, next) {
  try {
    const { _id } = req.user;
    const { date, income } = req.body;

    const earnings = await Income.create({
      date,
      income,
      owner: _id,
    });

    res.status(201).json({ status: "success", code: 201, income: earnings });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  listIncomes,
  addIncome,
};
