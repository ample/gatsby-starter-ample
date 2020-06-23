import React from "react"
// import PropTypes from "prop-types"
import Link from "../../components/link"

import styles from "./styles.module.scss"

const Header = () => (
  <header className={styles.root}>
    This is the header, and it has <Link to="/">a link that will get you home</Link>.
    <hr />
  </header>
)

Header.propTypes = {}

Header.defaultProps = {}

export default Header
