import React from "react"
import PropTypes from "prop-types"
import parameterize from "parameterize-string"

import styles from "../styles.module.scss"

import SelectField from "./select"
import TextField from "./text"
import { textTypeOptions } from "./__config__"

// ---------------------------------------- | Helpers

/**
 * Maps field types to field components.
 */
let fieldMap = {
  Select: SelectField
}
// Dynamically add text field options from the config.
textTypeOptions.map(opt => (fieldMap[opt] = TextField))

/**
 * Preps the props for passing them on to the various field components.
 */
const normalizedFieldData = data => {
  return data.map(field => ({
    ...field,
    name: field.name || parameterize(field.title, { separator: "_" }),
    label: field.label || field.title,
    type: field.type || "Short Text",
    width: field.width || "full"
  }))
}

// ---------------------------------------- | Component

const FormFields = ({ fields, heading }) => (
  <div className={styles.form_field_group}>
    {heading && <h2>{heading}</h2>}

    {normalizedFieldData(fields).map((field, idx) => {
      const TagName = fieldMap[field.type]
      if (TagName) return <TagName key={idx} {...field} />
      return (
        <div key={idx}>
          <p>
            <strong style={{ color: "red" }}>Field not supported:</strong> {field.type}
          </p>
          <pre>{JSON.stringify(field, null, "  ")}</pre>
        </div>
      )
    })}
  </div>
)

FormFields.propTypes = {
  /** Array of fields to display on the form. */
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Used for select field to determine whether to render radio buttons or a
       * dropdown.
       */
      appearance: PropTypes.string,
      /** Overrides the title for the label to place above the field. */
      label: PropTypes.string,
      /**
       * name attribute that gets submitted with the form data. Created from the
       * title if missing.
       */
      name: PropTypes.string,
      /** Used by select fields to list options to choose. */
      options: PropTypes.arrayOf(PropTypes.string),
      /**
       * Validates that the field is filled out before submitting, using HTML5
       * validation.
       */
      required: PropTypes.bool,
      /** Fallback for the label and the name of the form. */
      title: PropTypes.string,
      /**
       * The type of field to display, which controls some of the other
       * properties.
       */
      type: PropTypes.string,
      /** Controls how wide the field renders on screen. */
      width: PropTypes.string
    })
  ).isRequired,
  /** An optional heading to display above the fields. */
  heading: PropTypes.string
}

FormFields.defaultProps = {}

export default FormFields
