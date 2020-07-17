# gatsby-ample-generator

This plugin is a library built to speed up development by generating new files with boilerplate code. It supports

- Components
- Templates
- Fragments

## Usage

The base project ships with a `generate` script that will call the `index.js` file in this plugin. You can use yarn to run the command:

    yarn generate ...

Running the command without any subsequent arguments will bring up the help menu, which is a great way to see what you have at your disposal.

In general, though, this plugin is pretty simple today. It pulls the appropriate files from `lib/templates` and inserts them into the base project.

That means there is typically still some boilerplate code to adjust. Our goal is to minimize that boilerplate code over time by providing more options in this library.
