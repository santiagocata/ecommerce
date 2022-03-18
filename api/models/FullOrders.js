///VIDA FULLORDER
//1) CONFIRMA COMPRA CON CARTITEMS (1 O VARIOS)
//2) create fullOrder {Date(defualt seq), State(dafult: create), adress, dispatchDate (virtual) } sin completar (total, payment)
//3) si usuario no logiado cartItems se guardan en REDUX; y al logear se crean los cartItems en la base de datos.
//4) desestructura cartItem {...cartItems} = > create por cada uno orderItem CON el FullOrderID creado en paso 2)
//5) UPDATE a FULLORDER con los campos calculados {total, payment}
//a. total = por carda orderItem asignado a la FULLORDER(cartItem.quantity * cartItem.productID.price)

const { Model, DataTypes } = require("sequelize");
const db = require("../config/db");

class FullOrders extends Model { }

FullOrders.init(
  {
    // Model attributes are defined here
    total: {
      type: DataTypes.FLOAT,
    },
    payment: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
      defaultValue: "Creada",
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // dispatchDate: {
    //   type: DataTypes.VIRTUAL,
    //   set(value) {
    //     throw new Error("Do not try to set the `fullName` value!");
    //   },
    // },
  },
  {
    // Other model options go here
    sequelize: db, // We need to pass the connection instance
    modelName: "fullorders", // We need to choose the model name
  }
);

module.exports = FullOrders;
