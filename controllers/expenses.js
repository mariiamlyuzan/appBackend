const { Expenses } = require("../models/expenses");
const shortid = require("shortid");
const createError = require("http-errors");

async function listExpenses(req, res, next) {
  try {
    const { _id } = req.user;
    const expenses = await Expenses.find({ owner: _id });

    res.json({ status: "success", code: 200, expenses });
  } catch (error) {
    next(error);
  }
}

async function getExpensesById(req, res, next) {
  const { _id } = req.params;

  try {
    const expenses = await Expenses.findOne({ _id });

    if (!expenses) {
      return next(createError(404, `No expenses with ${id}`));
    }

    return res.json({ status: "success", code: 200, expenses });
  } catch (error) {
    next(error);
  }
}

async function addExpenses(req, res, next) {
  try {
    const { _id } = req.user;
    const {
      date,
      food,
      goods,
      services,
      makeup,
      medicine,
      clothing,
      transport,
    } = req.body;

    const expenses = await Expenses.create({
      date,
      food,
      goods,
      services,
      makeup,
      medicine,
      clothing,
      transport,
      owner: _id,
    });

    res.status(201).json({ status: "success", code: 201, expenses: expenses });
  } catch (error) {
    next(error);
  }
}

async function updateExpenses(req, res, next) {
  try {
    const { _id } = req.params;
    const expenses = await Expenses.findOneAndUpdate(_id, req.body, {
      new: true,
    });
    if (!_id) {
      return next(createError(404, `No expenses with ${_id}`));
    }

    res.json({ status: "successs", code: 200, expenses });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  listExpenses,
  getExpensesById,
  addExpenses,
  updateExpenses,
};
