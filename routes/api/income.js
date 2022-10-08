const express = require("express");
const router = express.Router();

const {
  listIncomes,
  
  addIncome,
 
} = require("../../controllers/income");

const { auth } = require("../../middlewares/auth");

const { incomeValidation } = require("../../middlewares/validation");
router.get("/", auth, listIncomes);



router.post("/", auth, incomeValidation, addIncome);


module.exports = router;
