const { Schema, model } = require("mongoose");

const expensesSchema = new Schema(
  {
    date: {
      type: String,
      default: "",
    },
    
    food: {
      type: String,
      default: 0,
    },
    goods: {
      type: String,
      default: 0,
    },
    services: {
      type: String,
      default: 0,
    },
    makeup: {
      type: String,
      default: 0,
    },
    medicine: {
      type: String,
      default: 0,
    },
    clothing: {
      type: String,
      default: 0,
    },
    transport: {
      type: String,
      default: 0,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Expenses = model("expenses", expensesSchema);

module.exports = {
  Expenses,
};
