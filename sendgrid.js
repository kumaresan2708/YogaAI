require("dotenv/config");
const sendGrid = (email) => {
  const otp = require("./otp");
  const sgMail = require("@sendgrid/mail");
  var pwd = String(otp.otp());
  var content = `<h1>Your verification code:${pwd}`;
  const API_KEY = process.env.SENDGRID_API;
  sgMail.setApiKey(API_KEY);

  const message = {
    to: email,
    from: "a.j.manoow@gmail.com",
    subject: "One Time Password",
    text: pwd,
    html: content,
  };

  sgMail
    .send(message)
    .then((response) => console.log("Email sent..."))
    .catch((error) => console.log(error.message));

  return pwd;
};
module.exports = { sendGrid };
