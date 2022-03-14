const { Model, DataTypes } = require("sequelize");
const db = require("../config/db");

class CartItems extends Model {}

CartItems.init(
  {
    // Model attributes are defined here
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        max: 999,
      },
    },
    state: {
      type: DataTypes.STRING,
      defaultValue: "unconfirmed",
    },
  },
  {
    // Other model options go here
    sequelize: db, // We need to pass the connection instance
    modelName: "cartitems", // We need to choose the model name
  }
);

module.exports = CartItems;
