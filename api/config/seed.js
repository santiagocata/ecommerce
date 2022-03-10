const db = require("./db");

const Categories = require("../models/Categories");
const Products = require("../models/Products");
const categoriesList = require("./lists/categoriesList");
const productsList = require("./lists/productsList");

const setupSeed = async () => {
  console.log("SEED STARTING");

  const productsWithCategories = Categories.bulkCreate(categoriesList).then(() => {
     Products.bulkCreate(productsList);
  });

  console.log("Products Seed...");

  return Promise.all([productsWithCategories]);
};

db.sync()
  .then(setupSeed)
  .then(() => process.exit(0))
  .catch((err) => {
    console.log("Somethin went wrong on the seed process", err.message);
    process.exit(1);
  });
