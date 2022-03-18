const express = require("express");
const router = express.Router();

const { Products } = require("../models");

//Busca todos los productos cuando es /home
router.get("/", async (req, res, next) => {
  const products = await Products.findAll();
  res.status(200).send(products);
});

router.get("/:productId", async (req, res, next) => {
  const product = await Products.findByPk(req.params.productId);
  res.status(200).send(product);
});

router.post("/by/name", async (req, res, next) => {
  const products = await Products.findByName(req.body.name);
  res.status(200).send(products);
});

router.get("/by/category/:categoryId", async (req, res, next) => {
  const products = await Products.findAll({ where: { ...req.params } });
  res.status(200).send(products);
});


///RUTAS PARA ADMIN {rol : "admin"}

const isAdmin = function (req, res, next) {
  if (true /* req.user.rol === "admin" */) return next();
  else return res.status(401);
};

router.post("/", isAdmin, async (req, res, next) => {
  try {
    const { name, price, description, categoryId, image } = req.body;
    const newProduct = await Products.create({
      name,
      price,
      description,
      categoryId,
      image,
    });
    res.status(200).send(newProduct);
  } catch (error) {
    console.error(error);
  }
});

router.put("/:id", isAdmin, async (req, res, next) => {
  try {
    const { name, price, description, categoryId, image } = req.body;
    await Products.update(
      {
        name,
        price,
        description,
        categoryId,
        image,
      },
      { where: { id: req.params.id } }
    );
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
  }
});

router.delete("/:id", isAdmin, async (req, res, next) => {
  try {
    await Products.destroy({ where: { id: req.params.id } });
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
