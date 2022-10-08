const { Schema, model } = require("mongoose");

const incomeSchema = new Schema(
  {
    date: {
      type: String,
      default: null,
    },

    income: {
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

const Income = model("income", incomeSchema);

module.exports = {
  Income,
};
