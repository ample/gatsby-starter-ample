import React from "react"
import PropTypes from "prop-types"

import styles from "./styles.module.scss"

const Iframe = ({ src, title }) => (
  <div className={styles.iframe_container}>
    <iframe src={src} title={title}></iframe>
  </div>
)

Iframe.propTypes = {
  /** iframe URL */
  src: PropTypes.string.isRequired,
  /** title attribute on iframe */
  title: PropTypes.string.isRequired
}

Iframe.defaultProps = {}

export default Iframe
