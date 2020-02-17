# Ample's Gatsby Starter

This is the [_Gatsby Starter_](https://www.gatsbyjs.org/docs/creating-a-starter/) that serves as the starting point for most Ample development projects. It is built from [Gatsby's Default Starter](https://github.com/gatsbyjs/gatsby-starter-default), with some of our pre-configured preferences to make getting started less cumbersome for you.

## Quick Start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying this starter:

        $ gatsby new my-project-name ample/gatsby-starter-ample

2.  **Start the dev server.**

    Navigate into your new site's directory and start the dev server:

        $ cd my-project-name/
        $ yarn develop

3.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    Open the `my-project-name` directory in VS Code and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## What's Included

In addition to (most of) what ships with the Gatsby default starer, this starter includes the following:

- **Component Template:** The `.component-starter` directory is your starting point for building new components (see _Creating a new component_ guide in the section below).
- **Docz:** We've included and configured [Docz](https://www.docz.site), including a few basic examples.

## Guides

Here are some usage guides for how to get started with this starter:

### Creating a new component

To add a new component, do the following:

1. Copy `.component-starer` into `src/components` and rename the directory to match the name of your component.
2. Replace all instances of `ComponentName` in `index.js`, `notes.mdx`, and `styles.module.scss` to match the name of the component.
3. Build the component!
4. Document component usage in the `notes.mdx` file. (Note: This feature uses [Docz Built-in Components](https://www.docz.site/docs/built-in-components).)

### Installing a CMS

At this time, this starter makes no inference as to the CMS you will be working with. We will soon fill out this section with options for including some of the regular Ample CMS preferences.
