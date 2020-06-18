import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames/bind"

import styles from "./styles.module.scss"

const DropdownTrigger = ({ children, className }) => (
  <span className={classNames(styles.dropdown_trigger, { [className]: className })}>
    {children}
  </span>
)

DropdownTrigger.propTypes = {
  /** Element(s) to render as the trigger */
  children: PropTypes.node.isRequired,
  /** CSS class to apply to the wrapping element */
  className: PropTypes.string
}

export default DropdownTrigger
