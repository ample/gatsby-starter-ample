import React from "react"

import Adapter from "./adapter"
import Component from "./component"
import fixtures from "./fixtures"

const Footer = () => {
  return process.env.NODE_ENV === "test" ? <Component {...fixtures.default} /> : <Adapter />
}

export default Footer

export { Adapter as adapter, Component as component, fixtures }
