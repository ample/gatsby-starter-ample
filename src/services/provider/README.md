# Global State Management

The provider service establishes a means for working with global state. The `<Provider />` component in this directory (in `component.js`) holds the global state. This component wraps the root level component, which is configured in `gatsby-browser.js`.

The example used by default shows how you may use a global `theme` value. The provider service exposes the getter `theme` value, as well as the setter `setTheme` function. This is achieved via the `useState` hook. You're welcome to remove the `theme` state and add others as needed. By default, this component is not in use throughout the application.

You can use the global state in a component or template like so:

```js
import React from "react"
import ProviderContext from "@src/services/provider"

const MyComponent = () => {
  return (
    <ProviderContext.Consumer>
      {context => {
        return <p>The theme is: {context.theme}</p>
      }}
    </ProviderContext.Consumer>
  )
}

export default MyComponent
```

If you would like to call a setter method while in the rendering cycle of a component, the easiest way to do so and avoid a React error is to shove it in a brief `setTimeout` function:

```js
import React from "react"
import ProviderContext from "@src/services/provider"

const MyComponent = () => {
  return (
    <ProviderContext.Consumer>
      {context => {
        setTimeout(() => context.setTheme("dark"), 1)
        return <p>The theme should now have changed to "dark."</p>
      }}
    </ProviderContext.Consumer>
  )
}

export default MyComponent
```
