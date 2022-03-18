const express = require("express");
const router = express.Router();

const { CategoriesController } = require("../controllers");

//Search all categories
router.get("/", CategoriesController.getAll);

///////MUST BE SUPERADMIN OR ADMIN FOR ACTIONS BELLOW
//create new product category
router.post("/", CategoriesController.create);
//Delete category
router.delete("/:id", CategoriesController.delete);
//Edit category name
router.put("/", CategoriesController.edit);

module.exports = router;
