exports.handler = async function(event) {
  // your server-side functionality
  // console.log("event: ", event)
  // console.log("context: ", context)

  const formData = JSON.parse(event.body || "{}")

  console.log("DATA RECEIVED: ", formData)

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" })
  }
}
