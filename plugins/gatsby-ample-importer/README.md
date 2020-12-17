# gatsby-ample-importer

This plugin is a data engine. Its primary purpose is to pull data from some source, transform it, then write the normalized data to file.

This approach is useful because it enables you to easily swap out data providers without having to change the front-end code. It also means you can get up and running quicker simply by using local files as your data source.

## Installation

There are two ways to use this plugin:

1. Direct use on the command-line. This is ready by default.
2. As part of the Gatsby build process. To install for use with Gatsby, simply add to your `gatsby-config.js` file and the process will run at the beginning of the build process.

## Usage

The operations here revolve around a configuration file. This file is `importer.config.js` and should be placed at the root of your project. It should export a single object representing the desired configuration. Here is an example config:

```js
const path = require("path")

module.exports = {
  driver: "contentful",
  models: [
    {
      id: "page",
      dir: path.join(__dirname, "tmp/pages"),
      filename: "slug",
      content: "body",
      fields: {
        id: "System",
        title: "String",
        slug: "String",
        body: "String",
        image: "File"
      }
    }
  ]
}
```

Here are the options:

- `driver`: The name of the driver to use. See more in the Drivers section below.
- `models`: Groupings of data to import. See more below.

### Models

Each model (content type, post type, template, etc.) is meant to represent a grouping of content that you want to import to local files. The example above shows a single model, `page`. Here are the options:

- `id`: The `id` for the model. This is specific to the data source.
- `dir`: Directory in which to store generated files.
- `filename`: The name **of the field** used to create the filename. In the example above, we are using `slug`. That means the value of the `slug` field is used to name the file. You should make sure this is a required field in your CMS.
- `content`: By default, all specified fields are written to frontmatter in the markdown file. You can also select one field to be rendered as the body content for the file.
- `fields`: The fields you'd like to write to the file. This is the process by which the content is normalized. See the next section for more information on fields.

### Fields

Fields are represented in the config as key-value pairs. The key is the name of the field in the data source, while the value is the type of field. Different drivers may support different field types. Here is a shared generic list:

- `File`: A media object or file. This gets normalized to the object's URL.
- `String`: A plain field to be extracted directly.
- `System`: A value that came from the data source itself.

## Drivers

Today only [Contentful](https://www.contentful.com/) is supported.

### Contentful

Note that pagination is not currently supported for the Contentful driver. You will only receive 100 records back for each model, by default.
