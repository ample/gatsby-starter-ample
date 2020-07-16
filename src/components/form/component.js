import React from "react"
import PropTypes from "prop-types"

import FormFieldGroup from "./fields"

import styles from "./styles.module.scss"

const Form = ({ button_label, title, field_groups }) => (
  <form className={styles.form} action="post" data-netlify="true" name={title}>
    <input type="hidden" name="form-name" value={title} />
    {field_groups.map((group, idx) => (
      <FormFieldGroup key={idx} {...group} />
    ))}
    <input type="submit" value={button_label || "Submit"} />
  </form>
)

Form.propTypes = {
  /** Text for the submit button. Falls back to "Submit". */
  button_label: PropTypes.string,
  /** An array of field groups, passed on to the field group component. */
  field_groups: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
   * The title of the form. When submitted to Netlify, this is what appears as
   * the name of the form in Netlify's UI.
   */
  title: PropTypes.string.isRequired
}

Form.defaultProps = {
  button_label: "Submit"
}

export default Form
