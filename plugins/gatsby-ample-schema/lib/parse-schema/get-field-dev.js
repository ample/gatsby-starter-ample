/**
 * Given a key-value pair, return the appropriate string representing a GraphQL
 * type definition's field.
 */
module.exports = (key, value) => {
  // Convert long-form syntax to appropriate GraphQL types. If it's an array,
  // set the value to the proper array syntax. If it is a map, skip it.
  // Otherwise, set the value to the name.
  if (typeof value === "object") {
    if (value.type.toLowerCase() === "array") {
      value = `[${value.name}]`
    } else if (value.type.toLowerCase() === "map") {
      return null
    } else {
      value = value.name
    }
  }
  // Append the file directive. This is the only directive currently supported.
  if (value === "File") value += " @fileByRelativePath"
  // Return the key-value pair after making the appropriate adjustments.
  return `${key}: ${value}`
}
