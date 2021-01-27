import React from "react"
import PropTypes from "prop-types"

import styles from "../styles.module.scss"

import SelectField from "./select"
import TextField from "./text"

// ---------------------------------------- | Helpers

/**
 * Maps field types to field components.
 */
let fieldMap = {
  select: SelectField,
  text: TextField
}

// ---------------------------------------- | Component

const FormFields = ({ fields, formHandler, heading }) => (
  <div className={styles.form_field_group}>
    {heading && <h2>{heading}</h2>}

    {fields.map((field, idx) => {
      const TagName = fieldMap[field.type]
      if (TagName) return <TagName key={idx} {...field} formHandler={formHandler} />
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
       * Overrides the title for the label to place above the field.
       */
      label: PropTypes.string,
      /**
       * name attribute that gets submitted with the form data. Created from the
       * title if missing.
       */
      name: PropTypes.string,
      /**
       * Validates that the field is filled out before submitting, using HTML5
       * validation.
       */
      required: PropTypes.bool,
      /**
       * Controls the appearance of a select field (dropdown or radio buttons).
       */
      select_appearance: PropTypes.string,
      /**
       * Used by select fields to list options to choose.
       */
      select_options: PropTypes.arrayOf(PropTypes.string),
      /**
       * If true, the field will be placed on its own line, regardless of width.
       */
      solo: PropTypes.bool,
      /**
       * Controls the appearance of a text field (long v short).
       */
      text_appearance: PropTypes.string,
      /**
       * Placeholder text for text fields that have no value.
       */
      text_placeholder: PropTypes.string,
      /**
       * Controls the "type" attribute for short text fields.
       */
      text_validation: PropTypes.string,
      /**
       * Fallback for the label and the name of the form.
       */
      title: PropTypes.string,
      /**
       * The type of field to display, which controls some of the other
       * properties.
       */
      type: PropTypes.string,
      /**
       * Controls how wide the field renders on screen.
       */
      width: PropTypes.string
    })
  ).isRequired,
  /**
   * A method that handles updating the form's data object on change.
   */
  formHandler: PropTypes.func,
  /**
   * An optional heading to display above the fields.
   */
  heading: PropTypes.string
}

FormFields.defaultProps = {}

export default FormFields

export { fieldMap, FormFields }
