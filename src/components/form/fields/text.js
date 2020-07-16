import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames/bind"

import Label from "./label"
import { textAppearanceOptions, textValidationOptions, widthOptions } from "./__config__"

import styles from "../styles.module.scss"

const fieldTypeMap = {
  email: "email",
  phone: "tel"
}

const FormFieldText = ({
  appearance,
  label,
  name,
  placeholder,
  required,
  solo,
  validation,
  width
}) => {
  let fieldOpts = {
    name: name,
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
  /** Whether to render an input or textarea (short v long). */
  appearance: PropTypes.oneOf(textAppearanceOptions).isRequired,
  /** Label placed above the field. */
  label: PropTypes.string.isRequired,
  /** name attribute of the field, passed along with submission. */
  name: PropTypes.string.isRequired,
  /** Muted text rendered inside the field when the value is missing. */
  placeholder: PropTypes.string,
  /** Force that a value exists before submitting.*/
  required: PropTypes.bool,
  /** Enforce that the field sits on its own line, regardless of width.*/
  solo: PropTypes.bool,
  /** Controls the "type" attribute for short-form text fields. */
  validation: PropTypes.oneOf([...textValidationOptions, ""]),
  /** Controls how wide the field renders on screen. */
  width: PropTypes.oneOf(widthOptions).isRequired
}

FormFieldText.defaultProps = {}

export default FormFieldText
