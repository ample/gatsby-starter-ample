import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames/bind"

import Label from "./label"
import { textTypeOptions, widthOptions } from "./__config__"

import styles from "../styles.module.scss"

const fieldTypeMap = {
  Date: "text",
  Email: "email",
  "Phone Number": "tel",
  "Long Text": null,
  "Short Text": "text"
}

const FormFieldText = ({ label, name, required, type, width }) => {
  let fieldOpts = { name: name, required: required, type: fieldTypeMap[type] }

  return (
    <div className={classNames(styles.form_field, styles[`width_${width}`])}>
      <Label required={required}>{label}</Label>
      {type === "Long Text" ? <textarea {...fieldOpts} /> : <input {...fieldOpts} />}
    </div>
  )
}

FormFieldText.propTypes = {
  /** Label placed above the field. */
  label: PropTypes.string.isRequired,
  /** name attribute of the field, passed along with submission. */
  name: PropTypes.string.isRequired,
  /** Force that a value exists before submitting.*/
  required: PropTypes.bool,
  /** Controls the HTML element to render, along with the "type" attribute. */
  type: PropTypes.oneOf(textTypeOptions).isRequired,
  /** Controls how wide the field renders on screen. */
  width: PropTypes.oneOf(widthOptions).isRequired
}

FormFieldText.defaultProps = {}

export default FormFieldText
