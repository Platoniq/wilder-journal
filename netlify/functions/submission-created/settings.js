require('dotenv').config()

const path = require('path')
const process = require('process')

const _ = require('lodash')

const email = function(transporter) {
  return {
    message: {
      from: `"${process.env.FROM_EMAIL_NAME}" <${process.env.FROM_EMAIL_ADDRESS}>`
    },
    send: true, // uncomment to send emails in development/test env
    transport: transporter,
    i18n: {
      defaultLocale: 'es',
      directory: path.resolve('emails/locales'),
      locales: ['en', 'es'],
    },
    views: {
      options: {
        extension: 'hbs'
      }
    },
    juice: true,
    juiceSettings: {
      tableElements: ['TABLE']
    },
    juiceResources: {
      preserveImportant: true,
      webResources: {
        relativeTo: path.resolve('emails/assets')
          // images: true,
          // svgs: true
      }
    }
  }
}

const smtp = {
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  username: process.env.SMTP_USERNAME,
  password: process.env.SMTP_PASSWORD
}

module.exports = { email, smtp }
