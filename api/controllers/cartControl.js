const { CartItems, Products } = require("../models");

class CartItemsController {
  ///// GET FULL CART
  static async getCart(req, res) {
    if (!req.user) {
      res.sendStatus(401);
    }
    try {
      if (req.user.id) {
        const { id } = req.user;
        const userCartItems = await CartItems.findAll({
          where: { userId: id, state: "unconfirmed" },
        });
        const userCompleteCart = await Promise.all(
          userCartItems.map(async (cartItem) => {
            let product = await Products.findByPk(cartItem.productId);
            cartItem.dataValues.product = product.dataValues;
            return cartItem;
          })
        );
        res.status(200).send(userCompleteCart);
      }
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
     
      const cartItemId  = req.params.id;

      //Control cartitem state
      const cartItem = await CartItems.findByPk(cartItemId);
      if (cartItem.state !== "unconfirmed") {
        res.sendStatus(401);
      } 
      //////remove cartItem
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
      //Control cartitem state
      const cartItem = await CartItems.findByPk(cartItemId);
      if (cartItem.state !== "unconfirmed") {
        res.sendStatus(401);
      }  
      ////update cartItem
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
