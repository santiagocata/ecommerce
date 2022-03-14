const express = require("express");
const router = express.Router();

const { FullOrdersController } = require("../controllers");

/// sendGmail({ email, fullorderID })

//Ruta confirmar carrito actual
////INPUT todos los cartitems del usuario actual (sin fullorder)
////OUTPUT =
///////////// A) GENERAR FULLORDER
///////////// B) GENERAR ORDERITEMS
///////////// C) UPDATE CARTITEM STATE
///////////// D) ENVIAR CORREO CON: Fullorder + productos involucrados en los CartItems que conforman la FUllOrder
router.post("/confirm", FullOrdersController.confirmCart);

//Ruta que devuelva historial de fullorders del usuario logeado
/////INPUT = USUARIO LOGEADO
/////OUTPUT = FULLORDERS del usuario + productos involucrados en los CartItems que conforman la FullOrder
router.get("/:id");

module.exports = router;
