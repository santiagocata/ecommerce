const { Model, DataTypes } = require("sequelize");
const db = require("../config/db");

class OrderItems extends Model {}

OrderItems.init(
  {},
  {
    // Other model options go here
    sequelize: db, // We need to pass the connection instance
    modelName: "orderitems", // We need to choose the model name
  }
);

module.exports = OrderItems;
