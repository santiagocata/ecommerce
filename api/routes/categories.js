const express = require("express");
const router = express.Router();

const { Categories } = require("../models");

//Busca todos los productos cuando es /home
router.get("/", async (req, res, next) => {
  const categories = await Categories.findAll();
  res.status(200).send(categories);
});

router.post("/", async (req, res, next) => {
  try {
    const { name } = req.body;
    const newCategory = await Categories.create({
      name,
    });
    res.status(200).send(newCategory);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
