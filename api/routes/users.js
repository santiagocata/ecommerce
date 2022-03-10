const express = require("express");
const router = express.Router();

const { UsersController } = require("../controllers");

///TODOS: Editar usuarios
router.put("/profile", UsersController.editUserProfile);

///SUPERADMIN & ADMIN: Find all users
router.get("/list", UsersController.getAllUsers);

///SUPERADMIN & ADMIN: eliminar usuario (FRONT MUST SEND ID)
router.delete("/delete", UsersController.deleteUser);

///SUPERADMIN: promover usuario a admin (FRONT MUST SEND ID)
router.put("/setadmin", UsersController.setAdmin);

module.exports = router;
