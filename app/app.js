exports.handler = async (event, context) => {
  console.log(JSON.stringify(event));

  var data = "👋 Hello World";

  return {
    cookies: [],
    isBase64Encoded: false,
    statusCode: 200,
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  };
};
