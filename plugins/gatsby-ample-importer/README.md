# gatsby-ample-importer

This plugin is a data engine. Its primary purpose is to pull data from some source, transform it, then write the normalized data to file.

This approach is useful because it enables you to easily swap out data providers without having to change the front-end code. It also means you can get up and running quicker simply by using local files as your data source.

## Usage

There are two ways to use this plugin:

1. Direct use on the command-line.
2. As part of the Gatsby build process.

### CLI

To use on the command-line, you can run a script to the `index.js` file in this plugin:

    $ node plugins/gatsby-ample-importer

The program has one option, `--config` (or `-c`), as the path to the config file. If omitted, this defaults to `importer.config.js` in the project root.

### Gatsby Build Process

To install for use with Gatsby, simply add to your `gatsby-config.js` file and the process will run at the beginning of the build process.

```js
module.exports = {
  plugins: [
    `gatsby-ample-importer`
    // ...
  ]
  // ...
}
```

You may also pass the config file as an option here, too.

```js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-ample-importer`,
      options: {
        config: path.join(__dirname, "importer.config.js")
      }
    }
    // ...
  ]
  // ...
}
```

## Configuration

The operations here revolve around a configuration file. This file is `importer.config.js` in the root of the project by default. It should export a single object representing the desired configuration. Here is an example config:

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
        id: "sys",
        title: "text",
        slug: "text",
        body: "text",
        image: "file"
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

- `id`: The `id` for the model. This may serve a different purpose for each data source.
- `dir`: Directory in which to store generated files.
- `filename`: The name **of the field** used to create the filename. In the example above, we are using `slug`. That means the value of the `slug` field is used to name the file. You should make sure this is a required field in your CMS.
- `content`: By default, all specified fields are written to frontmatter in the markdown file. You can also select one field to be rendered as the body content for the file.
- `fields`: The fields you'd like to write to the file. This is the process by which the content is normalized. See the next section for more information on fields.

### Fields

Fields are represented in the config as key-value pairs. The key is the name of the field in the data source, while the value is the type of field. Different drivers may support different field types. Here is a shared generic list:

- `file`: A media object or file. This gets normalized to the object's URL.
- `text`: A string or text field that can be extracted directly.
- `sys`: A value that came from the data source itself.

A field type value can also be a function, object, or array. See below for more info.

#### Function Field Type

There is one exception to this rule. If the value of the field is a function, the result of running the function will be the resolved value. The function receives one argument, the object retrieved from the data source. For example, say I wanted to include an alias `name` that returns the title. That config might look something like this:

```js
module.exports = {
  // ...
  models: [
    {
      // ...
      fields: {
        title: "text",
        name: item => item.title
      }
    }
  ]
}
```

#### Object Field Type

Fields may be nested, depending on the driver. Consider a case where a post is linked to its category, which is available as a sub-item on the post. If the category is an object with a title, then you can do something like this:

```js
module.exports = {
  // ...
  models: [
    {
      // ...
      fields: {
        title: "text",
        category: {
          title: "text"
        }
      }
    }
  ]
}
```

#### Array Field Type

The same goes for an array. Now consider that post example from above has many tags. That config may look like this:

```js
module.exports = {
  // ...
  models: [
    {
      // ...
      fields: {
        title: "text",
        tags: [
          {
            title: "text"
          }
        ]
      }
    }
  ]
}
```

Note here that the array syntax is simply to tell the driver what you want to do with the field. **There should only be one config object within the array.** All subsequent (sub)configs would do nothing.

## Drivers

Today only [Contentful](https://www.contentful.com/) is supported.

### Contentful

Note that there are two known limitations to the Contentful driver today:

1. Pagination is not currently supported. You will only receive 100 records back for each model, by default.
2. We have manually maxed out the number of linked levels in responses. This could affect performance. [Read mode here](https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/links).

For the Contentful driver to work properly, you must have the following environment variables set:

- `CONTENTFUL_SPACE_ID`
- `CONTENTFUL_ENV`
- `CONTENTFUL_ACCESS_TOKEN`
