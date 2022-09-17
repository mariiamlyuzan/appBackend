const { Schema, model } = require("mongoose");

const expensesSchema = new Schema(
  {
    date: {
      type: String,
      default: "",
    },

    food: {
      type: String,
      default: "",
    },
    goods: {
      type: String,
      default: "",
    },
    services: {
      type: String,
      default: "",
    },
    makeup: {
      type: String,
      default: "",
    },
    medicine: {
      type: String,
      default: "",
    },
    clothing: {
      type: String,
      default: "",
    },
    transport: {
      type: String,
      default: "",
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
