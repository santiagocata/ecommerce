const { Model, DataTypes } = require("sequelize");
const db = require("../config/db");

class CartItems extends Model { }

CartItems.init(
  {
    // Model attributes are defined here
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 999
      }
    },
  },
  {
    // Other model options go here
    sequelize: db, // We need to pass the connection instance
    modelName: "cartitems", // We need to choose the model name
  }
);

module.exports = CartItems;
