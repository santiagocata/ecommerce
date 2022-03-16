const db = require("./db");

const Categories = require("../models/Categories");
const Products = require("../models/Products");
const categoriesList = require("./lists/categoriesList");
const productsList = require("./lists/productsList");

const Users = require("../models/Users");
const Reviews = require("../models/Reviews");

const usersList = require("./lists/usersList");
const reviewsList = require("./lists/reviewsList");

const setupSeed = async () => {
  console.log("SEED STARTING");

  // const users = Users.bulkCreate(usersList)
  // const users1 = Users.create(usersList[0])
  // const users2 = Users.create(usersList[1])

  const categories = await Categories.bulkCreate(categoriesList);

  const products = await Products.bulkCreate(productsList);

  const users = await Promise.all(
    usersList.map(async (user) => {
      return await Users.create(user);
    })
  );
  const reviews = await Reviews.bulkCreate(reviewsList);

  console.log("Products Seed...");

  return Promise.all([categories, products, users, reviews]);
};

db.sync({force: true})
  .then(setupSeed)
  .then(() => {
    console.log("Seed succesfully");
    process.exit(0);
  })
  .catch((err) => {
    console.log("Somethin went wrong on the seed process", err.message);
    process.exit(1);
  });
