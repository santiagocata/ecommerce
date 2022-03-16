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
    to: `cdor.winslow@gmail.com, santiagoezequielcata@gmail.com`,
    subject: `Confirmacion de compra Nª ${newFullOrder.id}`,
    html: `<h1>test</h1>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send(error.message);
    } else {
      console.log("Email enviado correctamente");
      res.status(200).send(mailOptions);
    }
  });
};

module.exports = sendGmail;
