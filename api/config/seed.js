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

  const productsWithCategories = Categories.bulkCreate(categoriesList).then(
    () => {
      return Products.bulkCreate(productsList).then(() => {
        return Users.create(usersList[0]).then(() => {
          return Users.create(usersList[1]).then(() => {
            return Users.create(usersList[2]).then(() => {
              return Reviews.bulkCreate(reviewsList);
            });
          });
        });
      });
    }
  );

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
