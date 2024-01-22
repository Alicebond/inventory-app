#! /user/bin/env node

const Category = require("./models/category");
const Item = require("./models/item");

const { username, password } = require("./config");
const mongoose = require("mongoose");

const categories = [];
const items = [];

mongoose.set("strictQuery", false);
const mongoDB = `mongodb+srv://${username}:${password}@cluster0.bnwtmlm.mongodb.net/inventory_app?retryWrites=true&w=majority`;

main().catch((err) => console.log(err));
async function main() {
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB);
  console.log("Debug: Should be connected?");
  await createCategories();
  await createItems();
  console.log("Debug: Closing mongoose");
  mongoose.connection.close();
}

async function categoryCreate(index, title) {
  const category = new Category({ title: title });
  await category.save();
  categories[index] = category;
  console.log(`Added category: ${title}`);
}

async function itemCreate(index, title, description, stock, price, category) {
  const itemDetail = { title, description, stock, price, category };
  const item = new Item(itemDetail);
  await item.save();
  items[index] = item;
  console.log(`Added item: ${title}`);
}

async function createCategories() {
  console.log("Adding categories...");
  await Promise.all([
    categoryCreate(0, "Beverages"),
    categoryCreate(1, "Bakery"),
    categoryCreate(2, "Vegetables"),
    categoryCreate(3, "Forzen Foods"),
  ]);
}

async function createItems() {
  console.log("Adding items...");
  await Promise.all([
    itemCreate(0, "Coca Cola", "710ml regular coke", 20, 2.6, [categories[0]]),
    itemCreate(1, "Chinese Cabbage", "Fresh Chinese Cabage", 10, 5, [
      categories[1],
    ]),
    itemCreate(2, "Begle", "Fresh Bakery", 20, 1.5, [categories[2]]),
    itemCreate(3, "Ice Cream", "French vnillia ice cream", 20, 3, [
      categories[3],
    ]),
  ]);
}
