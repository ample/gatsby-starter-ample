import React, { useRef, useState } from "react"
import PropTypes from "prop-types"
import axios from "axios"
import flatMap from "lodash/flatMap"
import classNames from "classnames"

import FormFieldGroup from "./fields"

import { form } from "./styles.module.scss"

const Form = ({ button_label, className, driver, title, field_groups }) => {
  // Set the initial form data as an object which contains all field names as
  // keys, and each value as undefined.
  const fieldNames = flatMap(field_groups.map((group) => group.fields)).map(({ name }) => name)
  const initialFormData = {
    _meta: { driver: driver, title: title },
    data: Object.fromEntries(fieldNames.map((x) => [x, undefined]))
  }
  const [formData, setFormData] = useState(initialFormData)

  // Controls the form's current state.
  const [formState, setFormState] = useState(null)

  // Form DOM element.
  const formEl = useRef(null)

  /**
   * This function gets passed down to the fields. Each field component is
   * responsible for calling this function when its value changes.
   *
   * @param {string} name Name of the field
   * @param {string} value Current value of the field
   */
  const formDataHandler = (name, value) => {
    setFormData({ ...formData, data: { ...formData.data, [name]: value } })
  }

  /**
   * Sends the current data object to the function.
   *
   * @param {object} event onSubmit event object
   */
  const handleSubmit = (event) => {
    // Set the form state to loading.
    setFormState("loading")
    // Prevent the form from being submitted via default browser request.
    event.preventDefault()
    // Submit form data to the function for processing.
    axios
      .post("/.netlify/functions/submit-form", formData)
      .then(() => {
        setFormState("success")
        formEl.current.reset()
      })
      .catch((err) => {
        setFormState("error")
        console.error(err)
      })
  }

  return (
    <form
      className={classNames(form, {
        [className]: className
      })}
      action="/"
      data-netlify={driver === "netlify"}
      ref={formEl}
      onSubmit={handleSubmit}
      name={title}
    >
      <p>Current Form State: {formState || "null"}</p>
      <input type="hidden" name="form-name" value={title} />
      {field_groups.map((group, idx) => (
        <FormFieldGroup key={idx} {...group} formHandler={formDataHandler} />
      ))}
      <input type="submit" value={button_label || "Submit"} />
    </form>
  )
}

Form.propTypes = {
  /**
   * Text for the submit button. Falls back to "Submit".
   */
  button_label: PropTypes.string,
  /**
   * Tells the form submission control which driver to use. (i.e. It controls
   * where the data gets sent.)
   */
  driver: PropTypes.oneOf(["local_error", "local_success", "netlify"]),
  /**
   * An array of field groups, passed on to the field group component.
   */
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
