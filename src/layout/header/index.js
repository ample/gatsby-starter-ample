import React from "react"

import Adapter from "./adapter"
import Component from "./component"
import fixtures from "./navigation/fixtures"

const Header = () => {
  return process.env.NODE_ENV === "test" ? <Component {...fixtures} /> : <Adapter />
}

export default Header

export { Adapter as adapter, Component as component, fixtures }
