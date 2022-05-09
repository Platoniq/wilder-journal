exports.handler = async function(event, context) {
  console.log("submission has been created!")

  const payload = JSON.parse(event.body).payload
  const site = JSON.parse(event.body).site

  console.log("Payload, site: ")
  console.log(payload)
  console.log(site)
  console.log(context)
  console.log("--")

  return {
    statusCode: 200,
    body: event.body
  };
};
