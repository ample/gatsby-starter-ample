import React from "react"
import PropTypes from "prop-types"
// import styled from "styled-components"

// import * as g from "../global/variables"

const MyFirstComponent = props => <p>Hello, {props.name}</p>

MyFirstComponent.propTypes = {
  name: PropTypes.string.isRequired
}

MyFirstComponent.defaultProps = {
  name: "World"
}

export default MyFirstComponent
