const express = require("express");
const router = express.Router();

const { Users } = require("../models");

///TODOS: Editar usuarios
router.put("/profile", async (req, res, next) => {
  try {
    const { address } = req.body;
    const { id } = req.user;
    const userUpdated = await Users.update(
      { address },
      {
        where: {
          id,
        },
      }
    );
    res.status(201).send(userUpdated);
  } catch (error) {
    console.error(error);
  }
});

///SUPERADMIN & ADMIN: Find all users
router.get("/list", async (req, res, next) => {
  try {
    const { rol } = req.user;
    if (rol === "superadmin" || rol === "admin") {
      const userList = await Users.findAll();
      res.status(200).send(userList);
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    console.error(error);
  }
});

///SUPERADMIN & ADMIN: eliminar usuario
router.delete("/delete", async (req, res, next) => {
  try {
    const { id } = req.body;
    //Control if USER ID exist in DB
    const controlIdExist = await Users.findAll({ where: { id } });

    if (controlIdExist) {
      const { rol } = req.user;
      if (rol === "superadmin" || rol === "admin") {
        const userDeleted = await Users.destroy({ where: { id } });
      } else {
        res.sendStatus(401);
      }
    } else {
      res.status(404).send(`user doesnt exist: ${id}`);
    }
  } catch (error) {
    console.error(error);
  }
});

///SUPERADMIN: promover usuario a admin
router.put("/setadmin", async (req, res, next) => {
  try {
    //Front send user ID to upgrade to admin role
    const { id } = req.body;
    //control if id exist in DB
    if (!id) {
      res.sendStatus(409);
    }
    const controlIdExist = await Users.findAll({ where: { id } });

    if (controlIdExist) {
      if (!req.user) {
        res.sendStatus(401);
      }
      const { rol } = req.user;
      if (rol === "superadmin") {
        const newAdmin = await Users.update(
          { rol: "admin" },
          { where: { id } }
        );
        res.status(201).send(newAdmin);
      } else {
        res.sendStatus(401);
      }
    } else {
      res.status(404).send(`user doesnt exist: ${id}`);
    }
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
