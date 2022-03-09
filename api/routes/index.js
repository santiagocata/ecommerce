const express = require("express");
const routes = express.Router();

const auth = require("./auth");
const users = require("./users");
const products = require("./products");
const categories = require("./categories");
const router = require("./auth");

routes.use("/", auth);
router.use("/users", users);
routes.use("/products", products);
routes.use("/categories", categories);

module.exports = routes;
