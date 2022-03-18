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
      const { payment, address } = req.body;
      ///Search all cartitems from current user
      const cartItemsToConfirm = await CartItems.findAll({
        where: { userId: id, state: "unconfirmed" },
      });
      if (!cartItemsToConfirm) {
        res.sendStatus(401);
      }
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
        address,
        userId: id,
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
      console.log("newOrderItems", newOrderItems);
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
      /////Search all fullorders of the current user
      const fullOrders = await FullOrders.findAll({ where: { userId: id } });
      ////////OUTPUT = [{FULLORDER}, {FULLORDER}]
      /////Search all orderItems related with each fullOrderId
      const fullOrderWithProducts = await Promise.all(
        fullOrders.map(async (fullOrder) => {
          ///Backlog Products array per fullOrder
          fullOrder.dataValues.products = [];
          const orderItems = await OrderItems.findAll({
            where: { fullorderId: fullOrder.id },
          });
          const cartItems = await Promise.all(
            orderItems.map(async (orderItem) => {
              const cartItem = await CartItems.findByPk(orderItem.cartitemId);
              const productItem = await Products.findByPk(cartItem.productId);
              fullOrder.dataValues.products.push({
                id: productItem.id,
                name: productItem.name,
                price: productItem.price,
                categoryId: productItem.categoryId,
                quantity: cartItem.quantity,
              });
              return cartItem;
            })
          );
          return fullOrder;
        })
      );
      res.status(200).send(fullOrderWithProducts);
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
        const updatedstate = await FullOrders.update(
          { state },
          { where: { id } }
        );

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

///// vida compra:

////////1) usuario login
//////////a) INPUT: agrega productos al carrito => OUTPU: generan en DB cartItems STATE:unconfirmed(cuando se cierra el browser o se refresca, NO SE PIERDE NADA)
//////////b) confirmo la compra en ruta "/order/confirm" INPUT= todos los cartItems del usuario OURPUT = fullorder(y sus productos relacionados)
//////////c) Listar mis fullordes INPUT=usuario logeado OUTPUT=[{name}]

// [
//   {
//   id:fullOrderId,
//   total:fullorderTotal,
//   payment: fullorderPayment,
//   state: fullorderState,
//   address: fullorderAddress,
//   createAt: fecha de creacion fullorder,
//   updateAt: fecha actualizacion fullorder,
//    userId: current user id
//   productos:[
//     {
//     id:productId,
//     name:productName,
//     price:productPrice,
//     desciption:desciptionProduct,
//     image:imageProduct,
//     category:categoryProduct,
//     createAt: fecha de creacion product,
//     updateAt: fecha actualizacion product,
//     quantity: cartItem quantity of the current product
//   },
// ]
// },
// ];

////////2) usuario no logeado
/////////a) crear reducer para carrito en front
/////////b) popular con product items (cuando se cierra el browser o se refresca, SE PIERDE TODO)
/////////c) confirmar compra, se solicita REGISTRO O LOGIN y en base a todos los productos agregados al reducer, se generan todos los cartItems, los orderItems y la fullorder
