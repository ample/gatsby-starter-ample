# Ample's Gatsby Starter

This is the [_Gatsby Starter_](https://www.gatsbyjs.org/docs/creating-a-starter/) that serves as the starting point for most Ample development projects. It is built from [Gatsby's Default Starter](https://github.com/gatsbyjs/gatsby-starter-default), with our pre-configured preferences to make getting started less cumbersome for you.

## Quick Start

To start a new project from this template, run the following command:

    $ gatsby new [PROJECT_NAME] ample/gatsby-starter-ample

Then navigate to the project:

    $ yarn develop

That will start a development server at [http://localhost:8000](http://localhost:8000).

## Documentation

This starter uses [Storybook](https://storybook.js.org/) for documentation, development, and visual testing. To start the server in development, run the `storybook` command:

    $ yarn storybook

This will launch a browser at localhost:6006, running storybook. Documentation specific to this project can be found in Storybook. You can also find more information about working with Gatsby within [Ample's Dev Playbook](https://dev-playbook.netlify.com/code/working-with-gatsby).

## Linters

It's recommended to set up seamless integration with your editor.

- [ESLint](http://eslint.org/) statically analyzes your code to quickly find problems in JavaScript. ([editor-integration](http://eslint.org/docs/user-guide/integrations#editors))
- [Stylelint](https://stylelint.io) helps avoid errors and enforces conventions in styles. ([editor-integration](https://stylelint.io/user-guide/complementary-tools/#editor-plugins)\)

> Note: _When using VS Code most ESLint and Stylelint conventions will be fixed automatically._

Run `yarn run lint` to ensure there are no linter errors or warnings before committing.

## License

This project is distributed under the [MIT License](LICENSE.md).
