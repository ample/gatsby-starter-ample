# gatsby-ample-playground

The Ample Playground plugin automatically creates playgrounds for components and templates. It's built to streamline our development process.

## Installation

This plugin is installed in the starter by default (see `gatsby-config.js`). It is recommended that the config not be changed. See the next section for disabling the plugin.

## Options

You can disable the playground builds by setting an environment variable: `GATSBY_PLAYGROUND_DISABLED="true"`. This is recommended for production builds of the website, so that the playground routes are not available on published versions of the site.

## How it Works

This plugin is focused on streamlining the development process. Its goal is to _just work_ — to get out of your way so you can focus on writing front-end code. To achieve this, we follow a _convention over configuration_ approach. In other words, this plugin is _extremely_ opinionated. But if you learn the convention, you'll be able to move fast.

The playgrounds can be viewed at `/__playground__/components` and `/__playground__/templates`.

This plugin creates two playgrounds — one for components and another for templates. They both work similarly. They are controlled from the primary configuration file, `playground.config.js`. The file then points to React components and fixture objects that control how the component is rendered in the playground. See below for more information.

### Configuration

The playground configuration file lives at the root of the project at `playground.config.js`. If you're using the starter kit, it should already be in place.

A single default export is all that is expected from this file. Here is an example, with the keys explained below:

```js
import * as Button from "~components/button"
import * as Card from "~components/card"

import * as Page from "~templates/page"

export default {
  title: "Ample Playground",
  components: {
    button: Button,
    card: {
      ...Card,
      maxWidth: "300px"
    }
  },
  templates: {
    page: Page
  },
  themes: {
    default: "#FFFFFF",
    black: "#000000"
  }
}
```

These are the options:

#### `title`

The title appears in the `<head>` of the playground pages, as well as any toolbars that may appear.

#### `components` (required)

An object of key-value pairs representing the components to be rendered in the component playground (`/__playgrounds__/components`). The key represents the name of the component, which is used for display purposes in the playground. The value should be an object consisting of the following key-value pairs:

- `component`: The imported React component.
- `fixtures`: An object representing fixtures. (See below for more info.)
- `maxWidth`: An optional width value to constrain the wrapper around each component.

#### `templates` (required)

At this time, the template configuration is identical to the components, although `maxWidth` is irrelevant since we're rendering entire templates.

#### `theme`

The themes control interactive background controls for components. If missing, the background will be transparent.

### Fixtures / Variations

The playgrounds all revolve around _fixtures_, which are objects representing parameters passed to a component. Each fixture will receive its own playground and will be rendered individually.

For example, consider a `<Button />` component that takes the following props:

- `children`: The text within the button.
- `to`: The `href` attribute, or the target of clicking the button.
- `theme`: The background color of the button.

I might want to show two variations for a button, in which case my fixtures file would look something like this:

```js
export default {
  default: {
    children: "Default Button",
    to: "/",
    theme: "default"
  },
  red: {
    children: "A Red Button",
    to: "/",
    theme: "red"
  }
}
```

The playground would generate two buttons in the playground, using the properties shown above, and labeling each using the key for each of those objects.
