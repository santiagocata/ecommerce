const express = require("express");
const routes = express.Router();

const auth = require("./auth");
const users = require("./users");
const products = require("./products");
const categories = require("./categories");
const cartItems = require("./cartItem");

routes.use("/", auth);
routes.use("/users", users);
routes.use("/products", products);
routes.use("/categories", categories);
routes.use("/cart", cartItems);

module.exports = routes;
