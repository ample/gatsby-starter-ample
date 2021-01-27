const axios = require("axios")
const qs = require("query-string")

module.exports = async formData => {
  // Collect form data and add the "form-name" attribute.
  let data = { ...formData.data, "form-name": formData._meta.title }
  // Build the axios options object
  const axiosOptions = {
    url: "/",
    method: "post",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    data: qs.stringify(data)
  }
  // Make the request.
  return axios(axiosOptions)
}
