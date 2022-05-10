// details in https://css-tricks.com/using-netlify-forms-and-netlify-functions-to-build-an-email-sign-up-widget
// https://nodemailer.com/transports/ses/
// https://github.com/forwardemail/email-templates

require('dotenv').config()
require('handlebars')

const process = require('process')

const _ = require('lodash')
const path = require('path')

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

const global_vars = {
  contact: {
    twitter_url: "https://twitter.com/platoniq/",
    instagram_url: "https://www.instagram.com/platoniqfoundation/",
    email_address: "info@platoniq,net"
  }
}

const handler = async function(event, context) {
  const payload = JSON.parse(event.body).payload

  const config = {
    from: `"${process.env.FROM_EMAIL_NAME}" <${process.env.FROM_EMAIL_ADDRESS}>`,
    to: `"${payload.name}" <${payload.email}>`,
    template: "welcome"
  }

  console.log(`== Sending "${config.template}" email to ${payload.name} (${payload.email}) from ${process.env.FROM_EMAIL_ADDRESS} with payload ${JSON.stringify(payload)}`)

  // Common form fields: "lang","page_uid","site_url","ip","user_agent","referrer","created_at"
  // Newsletter form fields: "name","email"
  // Contact form fields: "name","email","message"
  // Service form fields: ?

  const email = new Email(_.merge({
      message: {
        from: config.from
      }
    },
    emailSettings))

  let response = await email
    .send({
      template: config.template,
      message: {
        to: config.to
      },
      attachments: [{
        filename: "wilder-journal-logo.png",
        path: path.resolve("emails/assets"),
        cid: "wilder-journal-logo"
      }],
      locals: _.merge({
        locale: payload.lang,
        $t
      }, payload, global_vars)
    })

  if (response.accepted.length) console.log(`== Sent email to: ${response.accepted}`);
  if (response.rejected.length) console.log(`== Failed sending email to: ${response.rejected}`);

  return { statusCode: 200, body: `Sent email to: ${response.accepted}` };
}

let $t = (key, options) => {
  // <------ THIS IS OUR OWN TRANSLATION HELPER
  return options.data.root.t({ phrase: key, locale: options.data.root.locale },
    options.hash
  );
}

module.exports = { handler }
