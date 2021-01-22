const { Schema, model } = require("mongoose");

const categorySchema = new Schema({
  name: String,
});

const categoryModel = model("category", categorySchema);

module.exports = { categoryModel };
