const { Model, DataTypes } = require("sequelize");
const db = require("../config/db");

class Categories extends Model {}

Categories.init(
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    // Other model options go here
    sequelize: db, // We need to pass the connection instance
    modelName: "categories", // We need to choose the model name
  }
);

/// VIDA DE LA CATEGORIA
// 1) superadmin/admin agrega categoria

module.exports = Categories;
