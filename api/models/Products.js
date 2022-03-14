const { Model, DataTypes, Op } = require("sequelize");
const db = require("../config/db");

class Products extends Model {
  static findByName = function (inputName) {
    return Products.findAll({
      where: {
        name: { [Op.iLike]: `%${inputName}%` },
      },
    });
  };
}

Products.init(
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize: db, // We need to pass the connection instance
    modelName: "products", // We need to choose the model name
  }
);
///VIDA DEL PRODUCTO:
// 1) superadmin/admin CREATE PRODUCTO
// a. {name, price, image, categoryId}

////

module.exports = Products;
