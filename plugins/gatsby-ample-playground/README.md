# gatsby-plugin-ample-playground

The Ample Playground plugin automatically creates playgrounds from MDX files in `src/templates` and `src/components`. It's built to streamline our development process.

## Installation

This plugin is installed in the starter by default (see `gatsby-config.js`). It is recommended that the config not be changed. See the next section for disabling the plugin.

## Options

You can disable the playground builds by setting an environment variable: `GATSBY_PLAYGROUND_DISABLED="true"`.

## How it Works

This plugin is built to only look for template and component playgrounds, and each work a little differently from one another.

### Components

Any `playground.mdx` file within the `src/components` directory gets picked up and added to a running page at `/__playground__/components`.

The components are given their own section, which is hashed and therefore linkable. You can click on a section heading to see the result in the browser.

The headings are built automatically from the parent directory of the playground file, which follows Ample's convention of putting playground files alongside the component they represent. If you wish to override a heading, you can do so by adding `title` to the frontmatter of your playground file.

```mdx
---
title: My Custom Title
---

import MyComponent from "."

<MyComponent />
```

### Templates

Any `playground.mdx` file within `src/templates` receives its own playground page nested under `/__playground__/templates`. In addition, there is a list of available template playgrounds at `/__playground__/templates`.

Like components, you can override the template name/title using `title` in the playground's frontmatter.
