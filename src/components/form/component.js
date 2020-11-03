import React, { useState } from "react"
import PropTypes from "prop-types"
import axios from "axios"
import flatMap from "lodash/flatMap"
import classNames from "classnames"

import FormFieldGroup from "./fields"

import styles from "./styles.module.scss"

// TODO:
// - [ ] Move normalizedFieldData into the transformer.
// - [ ] Clean up fields/index
// - [ ] Adjust specs
// - [ ] Initialize the "formData" object as having keys representing all values in the form.
// - [ ] Update object onChange (this should already be happening)
// - [ ] Use axios to submit to the function
// - [ ] Add a form state to help front-enders with easy way to manage appearance
// - [ ] Fix specs

const Form = ({ button_label, className, title, field_groups }) => {
  // const formFieldNames = Object.fromEntries(
  //   field_groups.fields.map(({ name }) => [name, undefined])
  // )

  const fieldNames = flatMap(field_groups.map(group => group.fields)).map(({ name }) => name)
  console.log(fieldNames)
  const [formData, setFormData] = useState({})

  const formDataHandler = (name, value) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    // console.log(event.target)
    // console.log(event.target.elements)

    console.log(formData)

    // const fields = [...event.target.elements]

    // fields.map(obj => {
    //   console.log(obj.name, obj.value)
    // })

    // console.log("SUBMITTING FORM ...")

    // axios.post("/.netlify/functions/submit-form", {}).then(result => {
    //   console.log("RESPONSE RECEIVED.")
    //   console.log(result)
    // })
  }

  return (
    <form
      className={classNames(styles.form, {
        [className]: className
      })}
      // action="post"
      // data-netlify="true"
      onSubmit={handleSubmit}
      name={title}
    >
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
   * Additional classes on the form element.
   */
  className: PropTypes.string,
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
