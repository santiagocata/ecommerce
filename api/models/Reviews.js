const { Model, DataTypes } = require("sequelize");
const db = require("../config/db");

class Reviews extends Model {}

Reviews.init(
  {
    // Model attributes are defined here
    vote: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true, //En requisitos especifica poder null
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize: db, // We need to pass the connection instance
    modelName: "reviews", // We need to choose the model name
  }
);

/// VIDA DE LA CATEGORIA
// 1) superadmin/admin agrega categoria

module.exports = Reviews;
