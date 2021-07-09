import React, { createContext, useState } from "react"
import PropTypes from "prop-types"

const ProviderContext = createContext()

const Provider = ({ children }) => {
  const [theme, setTheme] = useState(null)

  return <ProviderContext.Provider value={{ setTheme, theme }}>{children}</ProviderContext.Provider>
}

Provider.propTypes = {
  children: PropTypes.node.isRequired
}

/* eslint-disable-next-line react/display-name, react/prop-types */
export default ({ element }) => <Provider>{element}</Provider>

export { ProviderContext }
