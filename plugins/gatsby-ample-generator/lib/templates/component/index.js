import React from "react"

import Component from "./component"
import fixtures from "./fixtures"
import transform from "./transformer"

const ComponentName = (props) => <Component {...transform(props)} />

export default ComponentName

export { Component as component, fixtures, transform as transformer }
