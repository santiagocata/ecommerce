const { CartItems, OrderItems, FullOrders, Products } = require("../models");
const sendGmail = require("../utils/mailerv2");

class FullOrdersController {
  //Ruta confirmar carrito actual
  static async confirmCart(req, res) {
    //user is login?
    if (!req.user) {
      res.sendStatus(401);
    }
    try {
      const { id, email } = req.user;
      ////FRONT MUST SEND PAYMENT AND ADDRESS
      const { payment, adress } = req.body;
      ///Search all cartitems from current user
      const cartItemsToConfirm = await CartItems.findAll({
        where: { userId: id, state: "unconfirmed" },
      });
      ///Generate PRODUCTS array
      const productsInvolve = [];
      let total = 0;

      ///Calculate subtotals array
      const subtotals = await Promise.all(
        cartItemsToConfirm.map(async (cartItem) => {
          ////Update Cartitems STATE
          const cartItemStateUpdate = await CartItems.update(
            { state: "confirmed" },
            { where: { id: cartItem.id } }
          );
          ////Calculate each subtotal
          const product = await Products.findByPk(cartItem.productId);
          productsInvolve.push(product);
          const price = product.price;
          const quantity = cartItem.quantity;
          const subtotal = price * quantity;
          total += subtotal;
          return subtotal;
        })
      );
      ///calculate fullorder total
      // const total = subtotals.reduce((acc, sub) => (acc += sub));

      ////Create FULLORDER
      const newFullOrder = await FullOrders.create({
        total,
        payment,
        adress,
      });

      ////Create ORDERITEMS
      const newOrderItems = await Promise.all(
        cartItemsToConfirm.map(async (cartItem) => {
          const orderItem = await OrderItems.create({
            cartitemId: cartItem.id,
            fullorderId: newFullOrder.id,
          });
          return orderItem;
        })
      );
      ////Send confirmation email
      sendGmail(email, newFullOrder, productsInvolve);

      res.status(201).send({ newFullOrder, productsInvolve });
    } catch (error) {
      console.error(error);
    }
  }

  //Ruta que devuelva historial de fullorders del usuario logeado
  static async fullOrdersHistory(req, res) {
    //user is login?
    if (!req.user) {
      res.sendStatus(401);
    }
    try {
      const { id } = req.user;
      ////Search all cardItems confirmed for user logged
      const cartItemsConfirmed = await CartItems.findAll({
        where: { userId: id, state: "confirmed" },
      });
      ////Search all orderItems for thus cartItems
      const orderItemsInvolve = await Promise.all(
        cartItemsConfirmed.map(async (cartItem) => {
          const currentOrderItem = await OrderItems.findOne({
            where: { cartitemId: cartItem.id },
          });
          return currentOrderItem;
        })
      );
    } catch (error) {
      console.error(error);
    }
  }

  // I. Ruta que devuelve todas las fullorders de todos los usuarios
  //allOrders
  static async allOrders(req, res) {
    //user is login?
    if (!req.user) {
      res.sendStatus(401);
    }
    try {
      const { rol } = req.user;

      if (rol === "superadmin" || rol === "admin") {

        //search all fullorders
        const allFullOrders = await FullOrders.findAll();

        res.status(200).send(allFullOrders);
      } else {
        res.sendStatus(401);
      }

    } catch (error) {
      console.error(error);
    }
  }

  // II. Ruta para el update del status de una fullorder
  //
  static async stateUpdate(req, res) {
    //user is login?
    if (!req.user) {
      res.sendStatus(401);
    }
    try {
      const { rol } = req.user;

      if (rol === "superadmin" || rol === "admin") {

        //search and update a fullorder
        const { id, state } = req.body;
        const updatedstate = await FullOrders.update({ state }, { where: { id } });

        res.status(200).send(updatedstate);
      } else {
        res.sendStatus(401);
      }

    } catch (error) {
      console.error(error);
    }
  }



}

module.exports = FullOrdersController;
