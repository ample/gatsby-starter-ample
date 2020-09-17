import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import FormFieldGroup from "./fields"

import styles from "./styles.module.scss"

const Form = ({ button_label, className, title, field_groups }) => (
  <form
    className={classNames(styles.form, {
      [className]: className
    })}
    action="post"
    data-netlify="true"
    name={title}
  >
    <input type="hidden" name="form-name" value={title} />
    {field_groups.map((group, idx) => (
      <FormFieldGroup key={idx} {...group} />
    ))}
    <input type="submit" value={button_label || "Submit"} />
  </form>
)

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
