const drivers = {
  local_error: require("./drivers/local-error"),
  local_success: require("./drivers/local-success"),
  netlify: require("./drivers/netlify")
}

module.exports = async formData => {
  return drivers[formData._meta.driver](formData)
    .then(res => {
      return res
    })
    .catch(error => {
      throw error
    })
}
