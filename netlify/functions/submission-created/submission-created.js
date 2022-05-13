// details in https://css-tricks.com/using-netlify-forms-and-netlify-functions-to-build-an-email-sign-up-widget
// https://github.com/forwardemail/email-templates

require("handlebars");

const nodemailer = require("nodemailer");
const Email = require("email-templates");

const settings = require("./settings");
const mailer = require("./mailer");

let transporter = nodemailer.createTransport({
  pool: true,
  host: settings.smtp.host,
  port: settings.smtp.port,
  // secure: true, // use TLS
  auth: {
    user: settings.smtp.username,
    pass: settings.smtp.password,
  },
});

const handler = async function(event, context) {
  const payload = JSON.parse(event.body).payload;

  const emailSettings = settings.email(transporter);
  const email = new Email(emailSettings);

  let response = await mailer.send(email, payload);

  return response;
}


module.exports = { handler };
