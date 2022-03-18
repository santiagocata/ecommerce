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
router.get("/history", FullOrdersController.fullOrdersHistory);

//superadmin && admin ver lista de todas las ordenes de los usuarios , y poder modificar el status de dicha orden
//(pendiente, confirmada, rechazada)
router.get("/all", FullOrdersController.allOrders);

//INPUT user roll = superadmin o admin
//PROCESS
//OUTPUT todas la fullorders generadas por los usuarios

router.put("/updstate", FullOrdersController.stateUpdate);
//CONTROL ROL SUPERADMIN O ADMIN
//INPUT FULLORDER (REQ.BODY) REQ.BODY DEBE ENVIAR ID Y STATE
//PROCESS

// Description
// Edit

//     Como admin, deberia poder acceder a una lista de todas las órdenes generadas por los usuarios, asi como tambien poder modificar el status de dicha orden .

//     La orden puede tener los siguientes status:
//         pendiente
//         confirmada
//         rechazada

module.exports = router;

