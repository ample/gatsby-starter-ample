import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import parameterize from "parameterize-string"

import Label from "./label"
import { selectAppearanceOptions } from "./__config__"

// -------------------------------------------------------- | styles

import {
  circle,
  form_field,
  radio_button,
  radio_buttons,
  radio,
  solo_field,
  width_half,
  width_quarter
} from "../styles.module.scss"

const widthOptions = {
  full: null,
  half: width_half,
  quarter: width_quarter
}

// -------------------------------------------------------- | component

const FormFieldSelect = ({
  appearance,
  formHandler,
  label,
  name,
  required,
  options,
  solo,
  width
}) => {
  const handleChange = (event) => {
    return formHandler(name, event.target.value)
  }

  let fieldHtml

  if (appearance === "dropdown") {
    fieldHtml = (
      <select
        name={name}
        required={required}
        defaultValue=""
        onBlur={handleChange}
        onChange={handleChange}
      >
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
      <div className={radio_buttons}>
        {options.map((option, idx) => {
          const id = `${name}-${parameterize(option)}`
          return (
            <div key={idx} className={radio_button}>
              <input
                className={radio}
                type="radio"
                id={id}
                name={name}
                value={option}
                onChange={handleChange}
              />
              <label htmlFor={id}>{option}</label>
              <div className={circle}></div>
            </div>
          )
        })}
      </div>
    )
  }

  const classes = classNames(form_field, {
    [solo_field]: solo,
    [widthOptions[width]]: widthOptions[width]
  })

  return (
    <div className={classes}>
      <Label required={required}>{label}</Label>
      {fieldHtml}
    </div>
  )
}

FormFieldSelect.propTypes = {
  /**
   * What type of field(s) to display for choosing.
   */
  appearance: PropTypes.oneOf(selectAppearanceOptions).isRequired,
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
   * The list options available to choose.
   */
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
   * Force that a value exists before submittin
   .*/
  required: PropTypes.bool,
  /**
   * Enforce that the field sits on its own line, regardless of widt
   .*/
  solo: PropTypes.bool,
  /**
   * Controls how wide the field renders on screen.
   */
  width: PropTypes.oneOf(Object.keys(widthOptions)).isRequired
}

FormFieldSelect.defaultProps = {}

export default FormFieldSelect
