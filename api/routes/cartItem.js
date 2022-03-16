const express = require("express");
const router = express.Router();

const { CartItemsController } = require("../controllers");
///Get the user full cart
router.get("/", CartItemsController.getCart);
///Add to current cart
router.post("/", CartItemsController.addToCart);
///Remove from current cart
router.delete("/:id", CartItemsController.removeFromCart);
///Edit cartItem quantity
router.put("/", CartItemsController.editQuantity);

module.exports = router;
