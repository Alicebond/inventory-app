const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  price: { tyep: Number, require: true, default: 0 },
  description: { type: String, maxLength: 300 },
  stock: { type: Number, require: true, default: 0 },
  category: [{ type: Schema.Types.ObjectId, ref: "Category", required: true }],
});

// Virtual for item's URL
ItemSchema.virtual("url").get(function () {
  return `/catalog/item/${this._id}`;
});

module.exports = mongoose.model("Item", ItemSchema);
