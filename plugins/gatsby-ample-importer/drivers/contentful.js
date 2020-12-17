const contentful = require("contentful")
const get = require("lodash/get")

const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  space: process.env.CONTENTFUL_SPACE_ID
})

module.exports = class {
  /**
   * @constructor
   *
   * @param {object} config Configuration object for model. See README for more
   * details.
   */
  constructor(config) {
    this.config = config
  }

  /**
   * Import data for this model, returning an array of item objects.
   */
  async process() {
    // Retrieve the content from Contentful.
    const res = await client.getEntries({ content_type: this.config.id })
    // Once the data is in place, loop through it and process each item to return
    // an array of key-value pairs for all specified fields.
    return (res.items || []).map(this.processItem)
  }

  /**
   * Takes data returned for an item in Contentful, then uses the configured
   * fields to transform the data and return a normalized object.
   *
   * @param {object} item Data returned from Contentful's API.
   */
  processItem = item => {
    // Create an array of fields from the config.
    const fieldsArray = Object.entries(this.config.fields || {})
    // Retrieve the value for each field.
    const fields = fieldsArray.map(([name, type]) => [name, this.getValueByType[type](item, name)])
    // Convert the key-value pairs back to and object and return.
    return Object.fromEntries(fields)
  }

  /**
   * An object of type-specific functions that look into the response object and
   * retrieve the appropriate value for some given key (field).
   */
  getValueByType = {
    // String fields are retrieved directly from the fields object.
    String: (data, name) => data.fields[name],
    // System fields are those that Contentful sets automatically in a sys object.
    System: (data, name) => data.sys[name],
    // For now, we're digging into a file field and extracting the URL.
    File: (data, name) => get(data, `fields.${name}.fields.file.url`)
  }
}
