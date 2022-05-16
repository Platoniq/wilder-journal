const _ = require('lodash');
const path = require('path');

const globalVariables = {
  contact: {
    twitter_url: "https://twitter.com/platoniq/",
    instagram_url: "https://www.instagram.com/platoniqfoundation/",
    email_address: process.env.CONTACT_EMAIL_ADDRESS
  }
};

const assetPaths = {
  logo: "/media/assets/wilder-journal-logo.png",
  twitter: "/media/assets/icon-twitter.png",
  instagram: "/media/assets/icon-instagram.png",
  email: "/media/assets/icon-email.png"
}

let $t = (key, options) => {
  return options.data.root.t({ phrase: key, locale: options.data.root.locale },
    options.hash
  );
};

const sendContactEmail = async function(email, payload, config) {
  console.log(`== Sending "contact_admin" email to "${process.env.CONTACT_EMAIL_ADDRESS}"`);
  console.log(`== Sending "contact_user" email to "${payload.email}"`);

  let params_admin = _.merge({
    template: "contact_admin",
    message: {
      to: process.env.CONTACT_EMAIL_ADDRESS
    }
  }, config);

  let params_user = _.merge({
    template: "contact_user",
    message: {
      to: `"${payload.name}" <${payload.email}>`
    }
  }, config);

  let response_admin = await email.send(params_admin);
  let response_user = await email.send(params_user);

  console.log(`== "contact_admin" response:`);
  console.log(params_admin);
  // console.log(response_admin);
  console.log(`== "contact_user" response:`);
  console.log(params_user);
  // console.log(response_user);

  return _.merge(response_admin, response_user);
}

const sendWelcomeEmail = async function(email, payload, config) {
  console.log(`== Sending "welcome" email to "${payload.email}"`);

  let params = _.merge({
    template: "welcome",
    message: {
      to: `"${payload.name}" <${payload.email}>`
    }
  }, config);

  let response_welcome = await email.send(params);

  return response_welcome;
};

const send = async function(email, payload) {
  console.log(`== Mailer invoked with payload ${JSON.stringify(payload)}`); /* DEBUG */

  const assets = _.mapValues(assetPaths, (path) => {
    return payload.site_url + path;
  });

  const config = {
    locals: _.merge({
      assets,
      locale: payload.data.lang,
      payload: payload,
      site_url: payload.site_url,
      $t
    }, globalVariables)
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
