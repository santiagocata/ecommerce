const express = require("express");
const router = express.Router();

const { Products } = require("../models");

//Busca todos los productos cuando es /home
router.get("/", async (req, res, next) => {
  const products = await Products.findAll();
  res.status(200).send(products);
});

router.post("/", async (req, res, next) => {
  try {
    const { name, price, description, categoryId } = req.body;
    const newProduct = await Products.create({
      name,
      price,
      description,
      categoryId,
    });
    res.status(200).send(newProduct);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
