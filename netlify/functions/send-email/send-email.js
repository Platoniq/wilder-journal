// details in https://css-tricks.com/using-netlify-forms-and-netlify-functions-to-build-an-email-sign-up-widget
require('dotenv').config()

const fetch = require('node-fetch')
const process = require('process')

const _ = require('lodash')
const resolve = require('path').resolve

// Emails
const nodemailer = require('nodemailer')
const Email = require('email-templates')

const smtp = {
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  username: process.env.SMTP_USERNAME,
  password: process.env.SMTP_PASSWORD
}

let transporter = nodemailer.createTransport({
  pool: true,
  host: smtp.host,
  port: smtp.port,
  // secure: true, // use TLS
  auth: {
    user: smtp.username,
    pass: smtp.password,
  },
});

const emailSettings = {
  send: true, // uncomment to send emails in development/test env
  transport: transporter,
  i18n: {
    defaultLocale: 'es',
    directory: resolve('emails/locales'),
    locales: ['en', 'es'],
  },
  views: {
    options: {
      extension: 'hbs'
    }
  }
}

const handler = async(event) => {
  // verify connection configuration
  transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  // Common form fields: "lang","page_uid","site_url","ip","user_agent","referrer","created_at"
  // Newsletter form fields: "name","email"
  // Contact form fields: "name","email","message"
  // Service form fields: ?

  const payload = JSON.parse(event.body).payload

  const config = {
    from: `"${process.env.FROM_EMAIL_NAME}" <${process.env.FROM_EMAIL_ADDRESS}>`,
    to: `"${payload.name}" <${payload.email}>`,
    template: "welcome"
  }

  console.log(`Sending email to: ${payload.email}, ${payload.name}`)
  console.log(`${JSON.stringify(config)}`)

  const email = new Email(_.merge({
      message: {
        from: config.from
      }
    },
    emailSettings))

  email
    .send({
      template: config.template,
      message: {
        to: config.to
      },
      locals: _.merge({
        locale: payload.lang,
        $t
      }, payload)
    })
    .then(console.log)
    .catch(console.error);

  return { statusCode: 200, body: `Sent email to ${config.to} from ${config.from}` }
}

let $t = (key, options) => {
  // <------ THIS IS OUR OWN TRANSLATION HELPER
  return options.data.root.t({ phrase: key, locale: options.data.root.locale },
    options.hash
  );
}

module.exports = { handler }
