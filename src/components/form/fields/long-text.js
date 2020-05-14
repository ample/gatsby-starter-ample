import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames/bind"

import Label from "./label"
import { widthOptions } from "./__config__"

import styles from "../styles.module.scss"

const FormFieldShortText = ({ label, name, required, width }) => (
  <div className={classNames(styles.form_field, styles[`width_${width}`])}>
    <Label required={required}>{label}</Label>
    <textarea name={name} required={required} />
  </div>
)

FormFieldShortText.propTypes = {
  /** Label placed above the field. */
  label: PropTypes.string.isRequired,
  /** name attribute of the field, passed along with submission. */
  name: PropTypes.string.isRequired,
  /** Force that a value exists before submitting.*/
  required: PropTypes.bool,
  /** Controls how wide the field renders on screen. */
  width: PropTypes.oneOf(widthOptions).isRequired
}

FormFieldShortText.defaultProps = {}

export default FormFieldShortText
