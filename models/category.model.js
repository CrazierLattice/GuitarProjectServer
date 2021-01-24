const { Schema, model } = require("mongoose");

const categorySchema = new Schema({
  name: { type: String, required: true },
});

const categoryModel = model("category", categorySchema);

/**
 * Insert guitar categories to the category collection
 */


module.exports = { categoryModel };
