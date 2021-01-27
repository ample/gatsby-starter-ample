import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import Label from "./label"
import { textAppearanceOptions, textValidationOptions, widthOptions } from "./__config__"

import styles from "../styles.module.scss"

const fieldTypeMap = {
  email: "email",
  phone: "tel"
}

const FormFieldText = ({
  appearance,
  formHandler,
  label,
  name,
  placeholder,
  required,
  solo,
  validation,
  width
}) => {
  const handleChange = event => {
    return formHandler(name, event.target.value)
  }

  let fieldOpts = {
    name: name,
    onChange: handleChange,
    placeholder: placeholder,
    required: required,
    type: fieldTypeMap[validation] || "text"
  }

  const classes = classNames(styles.form_field, styles[`width_${width}`], { [styles.solo]: solo })

  return (
    <div className={classes}>
      <Label required={required}>{label}</Label>
      {appearance === "long" ? <textarea {...fieldOpts} /> : <input {...fieldOpts} />}
    </div>
  )
}

FormFieldText.propTypes = {
  /**
   * Whether to render an input or textarea (short v long).
   */
  appearance: PropTypes.oneOf(textAppearanceOptions).isRequired,
  /**
   * A method that handles updating the form's data object on change.
   */
  formHandler: PropTypes.func,
  /**
   * Label placed above the field.
   */
  label: PropTypes.string.isRequired,
  /**
   * name attribute of the field, passed along with submission.
   */
  name: PropTypes.string.isRequired,
  /**
   * Muted text rendered inside the field when the value is missing.
   */
  placeholder: PropTypes.string,
  /**
   * Force that a value exists before submittin
   .*/
  required: PropTypes.bool,
  /**
   * Enforce that the field sits on its own line, regardless of widt
   .*/
  solo: PropTypes.bool,
  /**
   * Controls the "type" attribute for short-form text fields.
   */
  validation: PropTypes.oneOf([...textValidationOptions, ""]),
  /**
   * Controls how wide the field renders on screen.
   */
  width: PropTypes.oneOf(widthOptions).isRequired
}

FormFieldText.defaultProps = {}

export default FormFieldText
