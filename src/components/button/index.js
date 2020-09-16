import React from "react"

import Component from "./component"
import fixtures from "./fixtures"
import transform from "./transformer"

const Button = props => <Component {...transform(props)} />

export default Button

export { Component as component, fixtures, transform as transformer }
