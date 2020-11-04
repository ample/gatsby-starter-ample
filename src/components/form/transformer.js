import parameterize from "parameterize-string"

/**
 * Preps the props for passing them on to the various field components.
 */
const normalizeField = field => {
  return {
    ...field,
    appearance: field[`${field.type}_appearance`],
    name: field.name || parameterize(field.title || "", { separator: "_" }),
    label: field.label || field.title,
    options: field[`${field.type}_options`],
    placeholder: field[`${field.type}_placeholder`],
    type: field.type || "Short Text",
    validation: field[`${field.type}_validation`],
    width: field.width || "full"
  }
}

/**
 * Transformer function.
 */
export default input => {
  // If the input object has a form key-value pair, that becomes the form
  // object.
  let form = input.form ? input.form : input

  // This normalizes all field data to ensure that labels, names, and other
  // required attributes are populated before being sent to the form. This
  // enables the form component to better manage values in a state object.
  form.field_groups = (form.field_groups || []).map(group => {
    return {
      ...group,
      fields: (group.fields || []).map(normalizeField)
    }
  })

  // Return the transformed object.
  return form
}

export { normalizeField }
