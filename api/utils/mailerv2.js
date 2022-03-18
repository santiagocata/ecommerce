const nodemailer = require("nodemailer");

const sendGmail = (email, newFullOrder, productsInvolve) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    post: 465,
    secure: true,
    auth: {
      user: "reactsport.info@gmail.com",
      pass: "tzui ieyp ztst qhiy",
    },
  });

  const mailOptions = {
    from: `React Sport`,
    to: `${email}`,
    subject: `Confirmacion de compra Nª ${newFullOrder.id}`,
    html: `<h3>El estado de su compra es: ${newFullOrder.state}</h3>
    <h3>La dirección de envío: ${newFullOrder.address}</h3>
    <h3>Método de pago elegido : ${newFullOrder.payment}</h3>
    <h3>El total de su compra es $${newFullOrder.total}</h3>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send(error.message);
    } else {
      res.status(200).send(mailOptions);
    }
  });
};

module.exports = sendGmail;
