const express = require("express");
const routes = express.Router();

const products = require("./products");
const categories = require("./categories");
//const users = require("./users");

routes.use("/products", products);
routes.use("/categories", categories);

module.exports = routes;
