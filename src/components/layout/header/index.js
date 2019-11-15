import React from "react"
// import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = () => (
  <header>
    This is the header, and it has{" "}
    <Link to="/">a link that will get you home</Link>.
    <hr />
  </header>
)

Header.propTypes = {}

Header.defaultProps = {}

export default Header
