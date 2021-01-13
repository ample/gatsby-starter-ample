# Ample's Gatsby Starter

This is the [_Gatsby Starter_](https://www.gatsbyjs.org/docs/creating-a-starter/) that serves as the starting point for most Ample development projects. It is built from [Gatsby's Default Starter](https://github.com/gatsbyjs/gatsby-starter-default), with our pre-configured preferences to make getting started less cumbersome for you.

## Quick Start

To start a new project from this template, run the following command:

    $ gatsby new [PROJECT_NAME] ample/gatsby-starter-ample

Then navigate to the project:

    $ yarn develop

That will start a development server at [http://localhost:8000](http://localhost:8000).

## Content Management System

This project has three methods for content management:

1. None: Use markdown files in `src/content` directly.
2. Forestry: Write markdown files to `src/content` using the Forestry UI.
3. API-Driven CMS: Import and normalize data coming from a third-party API, then write to markdown files in `src/content`.

### No CMS

If you don't want a CMS, but want to use the markdown files as the content source:

- Remove `.forestry` directory.
- (Optional) Remove `forestry:preview` script in `package.json`.
- Remove `gatsby-ample-importer` config in `gatsby-config.js`.
- Remove `importer.config.js`.
- (Optional) Remove `plugins/gatsby-ample-importer`. (We usually keep it since it's out of the way and may come in handy later.)

### Forestry

If using Forestry:

- Remove `gatsby-ample-importer` config in `gatsby-config.js`.
- Remove `importer.config.js`.
- (Optional) Remove `plugins/gatsby-ample-importer`. (We usually keep it since it's out of the way and may come in handy later.)
- Push code to a GitHub repository.
- Setup Forestry instance at [forestry.io](https://www.forestry.io/).

### Contentful

If using Contentful:

- Remove `.forestry` directory.
- (Optional) Remove `forestry:preview` script in `package.json`.
- Setup Contentful space.
- Set environment variables. (See `plugins/gatsby-ample-importer` for more info.)
- Uncomment `gatsby-ample-importer` config in `gatsby-config.js`.
- Change `File` declarations in `schema.yml` to `RemoteFile` for fields whose assets will be coming from the remote source.

## Alias Imports

This project support alias imports through [the gatsby-alias-imports plugin](https://www.gatsbyjs.org/packages/gatsby-alias-imports/). This provides a means for being able to import components without needing to know exactly where you are in the tree. It can make moving items around a little less painful.

The convention is to treat directories in our project like [NPM scopes](https://docs.npmjs.com/about-scopes). The scope is prepended with a `@` character. There are three prefixes supported out of the box:

- `@plugins` maps to `./plugins`
- `@root` maps to `./`
- `@src` maps to `./src`

Unfortunately, for seamless integration across the board, we have to configure aliases for every place in which we're going to use them, which means _at least_ Gatsby, VS Code, and Jest. Therefore, they are replicated (with the appropriate syntax) in:

- `gatsby-config.js`
- `jest.config.js`
- `jsconfig.json`

If you wish to add a custom alias to your project, make sure to touch all appropriate config files.

## Linters

It's recommended to set up seamless integration with your editor.

- [ESLint](http://eslint.org/) statically analyzes your code to quickly find problems in JavaScript. ([editor-integration](http://eslint.org/docs/user-guide/integrations#editors))
- [Stylelint](https://stylelint.io) helps avoid errors and enforces conventions in styles. ([editor-integration](https://stylelint.io/user-guide/complementary-tools/#editor-plugins)\)

> Note: _When using VS Code most ESLint and Stylelint conventions will be fixed automatically._

Run `yarn run lint` to ensure there are no linter errors or warnings before committing.

## License

gatsby-starter-ample is distributed under the [MIT License](LICENSE.md).
