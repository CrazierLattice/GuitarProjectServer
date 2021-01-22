const { Schema, model } = require("mongoose");

const guitarSchema = new Schema({
  name: String,
  category: { type: Schema.Types.ObjectId, ref: "category" },
  price: String,
  picture: String,
});

const itemModel = model("guitar", guitarSchema);

module.exports = { itemModel };
