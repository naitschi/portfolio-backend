const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const Page = new Schema(
  {
    title: { type: String, require: true },
    body: { type: String, require: true },
  },
  { timestamps: true }
);

module.exports = mongoose("pages", Page);
