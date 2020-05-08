import React from "react"
// import PropTypes from "prop-types"

import styles from "./styles.module.scss"

const Form = props => (
  <div className={styles.form}>
    <pre>{JSON.stringify(props, null, "  ")}</pre>
  </div>
)

Form.propTypes = {}

Form.defaultProps = {}

export default Form
