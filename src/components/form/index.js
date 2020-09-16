import React from "react"

import Component from "./component"
import fixtures from "./fixtures"
import transform from "./transformer"

const Form = props => <Component {...transform(props)} />

export default Form

export { Component as component, fixtures, transform as transformer }
