const axios = require("axios")
const qs = require("query-string")

const submit = async formData => {
  // Collect form data and add the "form-name" attribute.
  let data = { ...formData.data, "form-name": formData._meta.title }
  // Build the axios options object
  const axiosOptions = {
    url: "/",
    method: "post",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    data: qs.stringify(data)
  }
  console.log(axiosOptions)
  // Make the request.
  return axios(axiosOptions)
}

exports.handler = async function(event) {
  // Parse the incoming data.
  const formData = JSON.parse(event.body || "{}")

  console.log("DATA RECEIVED: ", formData)

  // Run the appropriate submit function, then return a response.
  await submit(formData)
    .then(res => {
      console.log("SUCCESS: ", res)
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Form submitted successfully." })
      }
    })
    .catch(err => {
      console.error(`--- ERROR SUBMITTING FORM ${formData._meta.title} at ${Date.now()} ---`)
      console.error(err)
      return {
        statusCode: 500,
        body: JSON.stringify({
          message: "Form was not submitted successfully. Check logs for details."
        })
      }
    })
}
