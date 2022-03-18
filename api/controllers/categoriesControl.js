const { Categories } = require("../models");

class CategoriesController {
  //Search all categories
  static async getAll(req, res) {
    try {
      const categories = await Categories.findAll();
      res.status(200).send(categories);
    } catch (error) {
      console.error(error);
    }
  }

  //create new product category ONLY ADMIN OR SUPERADMIN
  static async create(req, res) {
    if (!req.user) {
      res.sendStatus(401);
    }
    try {
      const { rol } = req.user;
      if (rol === "superadmin" || rol === "admin") {
        ///FRONT MUST SEND name OF NEW CATEGORY
        const { name } = req.body;

        //Check if category already exist
        const ControlAlreadyExist = await Categories.findOne({
          where: { name },
        });
        if (ControlAlreadyExist) {
          res.status(409).send(ControlAlreadyExist);
        }

        const newCategory = await Categories.create({ name });

        res.status(200).send(newCategory);
      } else {
        res.sendStatus(401);
      }
    } catch (error) {
      console.error(error);
    }
  }

  //Delete category
  static async delete(req, res) {
    if (!req.user) {
      res.sendStatus(401);
    }
    try {
      const { rol } = req.user;
      if (rol === "superadmin" || rol === "admin") {
        ///FRONT MUST SEND name OF NEW CATEGORY
        const { id } = req.params;
        console.log(id);
        const erasedCategory = await Categories.destroy({ where: { id: id } });
        res.sendStatus(200);
      } else {
        res.sendStatus(401);
      }
    } catch (error) {
      console.error(error);
    }
  }

  //Edit category name
  static async edit(req, res) {
    if (!req.user) {
      res.sendStatus(401);
    }
    try {
      const { rol } = req.user;
      if (rol === "superadmin" || rol === "admin") {
        ///FRONT MUST SEND name OF NEW CATEGORY
        const { categoryId, newCategoryName } = req.body;
        const updatedCategory = await Categories.update(
          { name: newCategoryName },
          { where: { id: categoryId } }
        );
        res.status(201).send(updatedCategory);
      } else {
        res.sendStatus(401);
      }
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = CategoriesController;
