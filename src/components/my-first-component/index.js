import React from 'react'
import PropTypes from 'prop-types'

const MyFirstComponent = ({ name }) => <p>Hello, {name}</p>

MyFirstComponent.propTypes = {
  name: PropTypes.string.isRequired
}

MyFirstComponent.defaultProps = {
  name: 'World'
}

export default MyFirstComponent
