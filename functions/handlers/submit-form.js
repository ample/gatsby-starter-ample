const submit = require("../src/submit-form")

/**
 * The submit function uses formData.driver to determine the appropriate driver
 * to load and run for processing form data.
 *
 * @param {object} event Event sent to the severless function.
 */
exports.handler = async function(event, context) {
  context
  const data = JSON.parse(event.body || "{}")
  const formTitle = data._meta.title
  const formDriver = data._meta.driver

  let statusCode, message

  try {
    const response = await submit(data)

    console.log(`--- SUCCESS SUBMITTING FORM ${formTitle} to ${formDriver} at ${Date.now()} ---`)
    console.log(response)
    statusCode = 200
    message = "Form submitted successfully."
  } catch (err) {
    console.error(`--- ERROR SUBMITTING FORM ${formTitle} to ${formDriver} at ${Date.now()} ---`)
    console.error(err)
    statusCode = 500
    message = "Form was not submitted successfully. Check logs for details."
  }

  return {
    statusCode,
    body: JSON.stringify({ message })
  }
}
