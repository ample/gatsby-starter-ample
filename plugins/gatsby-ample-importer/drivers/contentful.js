const contentful = require("contentful")
const get = require("lodash/get")

module.exports = class {
  /**
   * @constructor
   *
   * @param {object} config Configuration object for model. See README for more
   * details.
   */
  constructor(config) {
    this.config = config
    this.client = contentful.createClient({
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      space: process.env.CONTENTFUL_SPACE_ID
    })
  }

  /**
   * Import data for this model, returning an array of item objects.
   */
  async process() {
    // Retrieve the content from Contentful.
    const res = await this.client.getEntries({
      "sys.contentType.sys.id[in]": this.config.id,
      include: 10
    })
    // Once the data is in place, loop through it and process each item to return
    // an array of key-value pairs for all specified fields.
    return (res.items || []).map(item => this.processItem(item))
  }

  /**
   * Takes data returned for an item in Contentful, then uses the configured
   * fields to transform the data and return a normalized object.
   *
   * @param {object} item Data returned from Contentful's API.
   */
  processItem = (item, fieldsConfig = this.config.fields) => {
    // Create an array of fields from the config.
    let fieldsArray = Object.entries(fieldsConfig || {})
    // Retrieve the value for each field.
    let fields = fieldsArray.map(([name, type]) => {
      const typename = typeof type === "string" ? type.toLowerCase() : typeof type
      return [name, this.getValueByType[typename](item, name, type)]
    })
    // Convert the key-value pairs back to and object and return.
    return Object.fromEntries(fields)
  }

  /**
   * An object of type-specific functions that look into the response object and
   * retrieve the appropriate value for some given key (field).
   */
  getValueByType = {
    // Array fields are a series of linked subfields that get processed. This
    // must originate from the object method below.
    array: (item, name, config) => {
      const subItems = item.fields[name]
      return subItems.map(subItem => this.processItem(subItem, config[0]))
    },
    // For now, we're digging into a file field and extracting the URL.
    file: (data, name) => get(data, `fields.${name}.fields.file.url`),
    // When using a function as the value, the function gets executed, sending
    // the item as the only argument.
    function: (item, _, func) => func(item, this),
    // An object is a nested linked entry. It digs in and resolves the subitem.
    object: (item, name, config) => {
      if (Array.isArray(config)) {
        return this.getValueByType.array(item, name, config)
      }
      if (!item.fields[name]) {
        return {}
      }
      return this.processItem(item.fields[name], config)
    },
    // System fields are those that Contentful sets automatically in a sys object.
    sys: (data, name) => get(data, `sys.${name}`),
    // Text fields are retrieved directly from the fields object.
    text: (data, name) => get(data, `fields.${name}`)
  }
}
