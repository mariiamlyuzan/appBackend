const { Schema, model } = require("mongoose");

const expensesSchema = new Schema(
  {
    date: {
      type: String,
      default: null,
    },

    food: {
      type: String,
      default: null,
    },
    goods: {
      type: String,
      default: null,
    },
    services: {
      type: String,
      default: null,
    },
    makeup: {
      type: String,
      default: null,
    },
    medicine: {
      type: String,
      default: null,
    },
    clothing: {
      type: String,
      default: null,
    },
    transport: {
      type: String,
      default: null,
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
