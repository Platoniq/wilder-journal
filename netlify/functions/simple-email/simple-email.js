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

const handler = async(event) => {
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

  transporter.sendMail({
    from: config.from,
    to: config.to,
    subject: "Test email Journal",
    text: 'I hope this message gets delivered!'
  }, (err, info) => {
    console.log(info.envelope);
    console.log(info.messageId);
  });

  return { statusCode: 200, body: `Sent email to ${config.to} from ${config.from}` }
}

module.exports = { handler }
