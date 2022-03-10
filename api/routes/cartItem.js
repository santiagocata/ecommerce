const express = require("express");
const router = express.Router();

const { CartItemsController } = require("../controllers");
///Get the user full cart
router.get("/cart", CartItemsController.getCart);
///Add to current cart
router.post("/cart", CartItemsController.addToCart);
///Remove from current cart
router.delete("/cart", CartItemsController.removeFromCart);
///Edit cartItem quantity
router.put("/cart", CartItemsController.editQuantity);

module.exports = router;
