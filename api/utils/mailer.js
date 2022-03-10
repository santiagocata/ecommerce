const { Tooltip } = require("@chakra-ui/react");
const { getSpaceUntilMaxLength } = require("@testing-library/user-event/dist/utils");
const nodemailer = require("nodemailer");
const { getTotalSlides } = require("react-slick/lib/utils/innerSliderUtils");

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'reactsport.info@getSpaceUntilMaxLength.com', // generated ethereal user
        pass: 'tzui ieyp ztst qhiy', // generated ethereal password
    },
});


transporter.verify().then(() =>
    console.log('Listo para enviar mails'))


