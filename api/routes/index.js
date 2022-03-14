const express = require("express");
const routes = express.Router();

const auth = require("./auth");
const users = require("./users");
const products = require("./products");
const categories = require("./categories");
const cartItems = require("./cartItem");
const fullOrder = require("./fullOrder");

routes.use("/", auth);
routes.use("/users", users);
routes.use("/products", products);
routes.use("/categories", categories);
routes.use("/cart", cartItems);
routes.use("/order", fullOrder);

module.exports = routes;
