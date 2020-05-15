import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames/bind"
import parameterize from "parameterize-string"

import Label from "./label"
import { selectAppearanceOptions, widthOptions } from "./__config__"

import styles from "../styles.module.scss"

const FormFieldSelect = ({ appearance, label, name, required, options, solo, width }) => {
  let fieldHtml

  if (appearance === "dropdown") {
    fieldHtml = (
      <select name={name} required={required} defaultValue="">
        <option key="default" value="" />
        {options.map((option, idx) => (
          <option key={idx} value={option}>
            {option}
          </option>
        ))}
      </select>
    )
  } else if (appearance === "radio") {
    fieldHtml = (
      <div className={styles.radio_buttons}>
        {options.map((option, idx) => {
          const id = `${name}-${parameterize(option)}`
          return (
            <div key={idx} className={styles.radio_button}>
              <input type="radio" id={id} name={name} value={option} />
              <label className={styles.form_label} htmlFor={id}>
                {option}
              </label>
            </div>
          )
        })}
      </div>
    )
  }

  const classes = classNames(styles.form_field, styles[`width_${width}`], { [styles.solo]: solo })

  return (
    <div className={classes}>
      <Label required={required}>{label}</Label>
      {fieldHtml}
    </div>
  )
}

FormFieldSelect.propTypes = {
  /** What type of field(s) to display for choosing. */
  appearance: PropTypes.oneOf(selectAppearanceOptions).isRequired,
  /** Label placed above the field. */
  label: PropTypes.string.isRequired,
  /** name attribute of the field, passed along with submission. */
  name: PropTypes.string.isRequired,
  /** The list options available to choose. */
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  /** Force that a value exists before submitting.*/
  required: PropTypes.bool,
  /** Enforce that the field sits on its own line, regardless of width.*/
  solo: PropTypes.bool,
  /** Controls how wide the field renders on screen. */
  width: PropTypes.oneOf(widthOptions).isRequired
}

FormFieldSelect.defaultProps = {}

export default FormFieldSelect
