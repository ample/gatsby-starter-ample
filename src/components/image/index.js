import React from "react"

import Component from "./component"
import fixtures from "./fixtures"
import transform from "./transformer"

const Image = props => <Component {...transform(props)} />

export default Image

export { Component as component, fixtures, transform as transformer }
