import React from "react"
import PropTypes from "prop-types"

import { form_label } from "../styles.module.scss"

const FormFieldLabel = ({ children, required }) => (
  <label className={form_label}>
    {children}
    {required && <abbr>*</abbr>}
  </label>
)

FormFieldLabel.propTypes = {
  /** Text to display within the label */
  children: PropTypes.string.isRequired,
  /** Force that a value exists before submitting.*/
  required: PropTypes.bool
}

FormFieldLabel.defaultProps = {}

export default FormFieldLabel
