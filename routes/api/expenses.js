const express = require("express");
const router = express.Router();

const {
  listExpenses,
  getExpensesById,
  addExpenses,
  updateExpenses,
} = require("../../controllers/expenses");

const { auth } = require("../../middlewares/auth");

const { expensesValidation } = require("../../middlewares/validation");
router.get("/", auth, listExpenses);

router.get("/:_id", getExpensesById);

router.post("/", auth, expensesValidation, addExpenses);

router.put("/:_id", expensesValidation, updateExpenses);

module.exports = router;
