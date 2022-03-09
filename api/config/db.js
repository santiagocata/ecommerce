const Sequelize = require("sequelize");

const db = new Sequelize("reactsport", null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = db;

///1º ADMIN (FULL PERMISO)   /  2º USER-ADMIN (EDITAR PRODUCTOS) / 3º USUARIO (COMPRAS Y OPINAR)
