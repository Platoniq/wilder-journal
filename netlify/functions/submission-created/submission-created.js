// // details in https://css-tricks.com/using-netlify-forms-and-netlify-functions-to-build-an-email-sign-up-widget
require('dotenv').config()

const fetch = require('node-fetch')
const process = require('process')

const _ = require('lodash')
const resolve = require('path').resolve

// Emails
const nodemailer = require('nodemailer')
const Email = require('email-templates')

const handler = async(event) => {

  // Common form fields: "lang","page_uid","site_url","ip","user_agent","referrer","created_at"
  // Newsletter form fields: "name","email"
  // Contact form fields: "name","email","message"
  // Service form fields: ?

  const payload = JSON.parse(event.body).payload

  console.log(`Received a submission: ${payload.email}, ${payload.name}`)

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.FROM_EMAIL_ADDRESS,
      pass: process.env.FROM_EMAIL_PASSWORD
    }
  });

  const email = new Email({
    message: {
      from: process.env.FROM_EMAIL_ADDRESS
    },
    // send: true, // uncomment to send emails in development/test env
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
    },
  });

  email
    .send({
      template: 'welcome',
      message: {
        to: payload.email
      },
      locals: _.merge(payload, {
        locale: payload.lang,
        $t(key, options) {
          // <------ THIS IS OUR OWN TRANSLATION HELPER
          return options.data.root.t({ phrase: key, locale: options.data.root.locale },
            options.hash
          );
        }
      })
    })
    .then(console.log)
    .catch(console.error);

  return { statusCode: 200, body: `Email sent to ${payload.name} (${payload.email}) with payload ${JSON.stringify(payload)}` }
}

module.exports = { handler }
