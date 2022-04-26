// // details in https://css-tricks.com/using-netlify-forms-and-netlify-functions-to-build-an-email-sign-up-widget
require('dotenv').config()

const path = require('path')
const process = require('process')

const fetch = require('node-fetch')

const nodemailer = require('nodemailer')

const Email = require('email-templates');

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
    views: {
      options: {
        extension: 'liquid'
      }
    }
  });

  email
    .send({
      template: 'welcome',
      message: {
        to: payload.email
      },
      locals: payload
    })
    .then(console.log)
    .catch(console.error);

  return { statusCode: 200, body: `Email sent to ${payload.name} (${payload.email})` }
}

module.exports = { handler }
