const _ = require('lodash');
const path = require('path');

const globalVariables = {
  contact: {
    twitter_url: "https://twitter.com/platoniq/",
    instagram_url: "https://www.instagram.com/platoniqfoundation/",
    email_address: process.env.CONTACT_EMAIL_ADDRESS
  }
};

let $t = (key, options) => {
  return options.data.root.t({ phrase: key, locale: options.data.root.locale },
    options.hash
  );
};

const sendContactEmail = async function(email, payload, config) {
  console.log(`== Sending "contact_admin" email to "${process.env.CONTACT_EMAIL_ADDRESS}"`);
  console.log(`== Sending "contact_user" email to "${payload.email}"`);

  let response_admin = await email.send(_.merge({
    template: "contact_admin",
    message: {
      to: process.env.CONTACT_EMAIL_ADDRESS
    }
  }, config));

  let response_user = await email.send(_.merge({
    template: "contact_user",
    message: {
      to: `"${payload.name}" <${payload.email}>`
    }
  }, config));

  return _.merge(response_admin, response_user);
}

const sendWelcomeEmail = async function(email, payload, config) {
  console.log(`== Sending "welcome" email to "${payload.email}"`);

  let response_welcome = await email.send(_.merge({
    template: "welcome",
    message: {
      to: `"${payload.name}" <${payload.email}>`
    }
  }, config));

  return response_welcome;
};

const send = async function(email, payload) {
  console.log(`== Mailer invoked with payload ${JSON.stringify(payload)}`); /* DEBUG */

  const config = {
    attachments: [{
      filename: "wilder-journal-logo.png",
      path: path.resolve("emails/assets"),
      cid: "wilder-journal-logo"
    }],
    locals: _.merge({
      locale: payload.data.lang,
      $t
    }, payload, globalVariables)
  };

  switch (payload.form_name) {
    case "contact":
      return sendContactEmail(email, payload, config);
      break;
    case "newsletter":
      return sendWelcomeEmail(email, payload, config);
      break;
    default:
      return { statusCode: 500, body: `Unknown error in mailer.send` }
      break;
  }
};

module.exports = { send };
