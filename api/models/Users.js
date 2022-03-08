const { Model, DataTypes } = require("sequelize");
const db = require("../config/db");

class Users extends Model {}

Users.init(
  {
    // Model attributes are defined here
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    adress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rol: {
      type: DataTypes.STRING,
      defaultValue: "user",
    },
  },
  {
    // Other model options go here
    sequelize: db, // We need to pass the connection instance
    modelName: "users", // We need to choose the model name
  }
);

// the defined model is the class itself
console.log(Users === db.models.users); // true

module.exports = Users;
