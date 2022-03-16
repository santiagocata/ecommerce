const { Users } = require("../models");

class UsersController {
  ///TODOS: Editar usuarios
  static async editUserProfile(req, res) {
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
      res.sendStatus(201);
    } catch (error) {
      console.error(error);
    }
  }
  ///SUPERADMIN & ADMIN: Find all users
  static async getAllUsers(req, res) {
    try {
      if (!req.user) {
        res.sendStatus(401);
      }
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
  }
  ///SUPERADMIN & ADMIN: eliminar usuario
  static async deleteUser(req, res) {
    try {
      const { id } = req.body;
      //Control if USER ID exist in DB
      const controlIdExist = await Users.findAll({ where: { id } });
      if (controlIdExist) {
        const { rol } = req.user;
        //Control ADMIN DOES NOT erase another ADMIN
        if (rol === "admin" && controlIdExist[0].rol === "admin") {
          res
            .status(401)
            .send("Do contact Superadmin. Admin cant delete another admin.");
        }
        if (rol === "superadmin" || rol === "admin") {
          const userDeleted = await Users.destroy({ where: { id } });
          res.status(201).send(controlIdExist[0]);
        } else {
          res.sendStatus(401);
        }
      } else {
        res.status(404).send(`user doesnt exist: ${id}`);
      }
    } catch (error) {
      console.error(error);
    }
  }
  ///SUPERADMIN: promover usuario a admin
  static async setAdmin(req, res, next) {
    try {
      //Front send user ID to upgrade to admin role
      const { id, newRol } = req.body;
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
            { rol: newRol },
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
  }
}

module.exports = UsersController;
