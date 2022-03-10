const { CartItems } = require("../models");

class CartItemsController {
  ///// GET FULL CART
  static async getCart(req, res) {
    if (!req.user) {
      res.sendStatus(401);
    }
    try {
      const { id } = req.user;
      const userCartItems = await CartItems.findAll({ where: { userId: id } });
      res.status(200).send(userCartItems);
    } catch (error) {
      console.error(error);
    }
  }
  ///// ADD TO CART
  static async addToCart(req, res) {
    if (!req.user) {
      res.sendStatus(401);
    }
    try {
      const { id } = req.user;
      const { productId, quantity } = req.body;

      const newCartItem = await CartItems.create({
        quantity,
        productId,
        userId: id,
      });
      res.status(201).send(newCartItem);
    } catch (error) {
      console.error(error);
    }
  }
  ///// REMOVE FROM CART
  static async removeFromCart(req, res) {
    if (!req.user) {
      res.sendStatus(401);
    }
    try {
      //FRONT MUST SEND cartItemID to DELETE
      const { cartItemId } = req.body;
      const removedCartItem = await CartItems.destroy({
        where: { id: cartItemId },
      });
      res.sendStatus(201);
    } catch (error) {
      console.error(error);
    }
  }
  ///// EDIT CART ITEM QUANTITY
  static async editQuantity(req, res) {
    if (!req.user) {
      res.sendStatus(401);
    }
    try {
      //FRONT MUST SEND cartItemID to EDIT
      const { cartItemId, quantity } = req.body;
      const updatedCardItem = await CartItems.update(
        { quantity },
        { where: { id: cartItemId } }
      );
      res.status(200).send(updatedCardItem);
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = CartItemsController;
