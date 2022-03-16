const Users = require("./Users");
const Products = require("./Products");
const Categories = require("./Categories");
const Reviews = require("./Reviews");
const CartItems = require("./CartItems");
const FullOrders = require("./FullOrders");
const OrderItems = require("./OrderItems");

Reviews.belongsTo(Products);
Reviews.belongsTo(Users);
Products.belongsTo(Categories);
CartItems.belongsTo(Users);
CartItems.belongsTo(Products);
OrderItems.belongsTo(CartItems);
FullOrders.hasMany(OrderItems);
FullOrders.belongsTo(Users);

module.exports = {
  Users,
  Products,
  Categories,
  Reviews,
  CartItems,
  FullOrders,
  OrderItems,
};
