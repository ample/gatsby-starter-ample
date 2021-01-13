# gatsby-ample-schema

This plugin provides the means to explicitly define GraphQL types through a YAML file configuration.

Explicitly defining types in a Gatsby project is beneficial, as it ensures GraphQL queries can run as expected, even when data may be missing from the data source. The benefit of using this plugin is that it saves a lot of boilerplate code that would otherwise be required to accomplish explicitly setting types for each project.

## Usage

The plugin is enabled by default in the starter kit. To remove or reinstall it, remove or add from the project's primary `gatsby-config.js` file:

```js
module.exports = {
  plugins: [`gatsby-ample-schema`]
}
```

When enabled, the schema is built from a `schema.yml` file, which should exist in the root of the project. See below for the schema file structure.

## The Schema File

The schema file is built using [YAML](https://yaml.org/). This is intentional, to keep the process simple. Follow the convention and it should all work as expected.

The main object coming from the file should be an array of objects, each with `type` and `fields` keys, like so:

```yml
- type: MyType
  fields: {}
- type: AnotherType
  fields: {}
```

`fields` is a set of field definitions for that type. The simplest form is to write a key-value pair as you would if you were [customizing the GraphQL schema manually](https://www.gatsbyjs.org/docs/schema-customization/).

```yml
- type: MyType
  fields:
    title: String!
    published: Boolean
```

This translates to:

```graphql
type MyType @infer {
  title: String!
  published: Boolean
}
```

See below for additional options:

### Files

Local and remote files are both supported.

Files are assumed to be local by default. They automatically get appended with the `fileByRelativePath` directive when using `File` as the type (the value):

```yml
- type: MyType
  fields:
    image: File
```

This translates to:

```graphql
type MyType @infer {
  image: File @fileByRelativePath
}
```

There's a little more magic expected behind the scenes with remote files. They assume that a node ID will be linked to a field with `___NODE` appended to it. This is meant to work in conjunction with the gatsby-remark-ample plugin.

Here's what it looks like:

```yml
- type: MyType
  fields:
    image: RemoteFile
```

This resolves to:

```graphql
type MyType @infer {
  image: File @link(from: "image___NODE")
}
```

Read more about the remote approach [here](https://www.gatsbyjs.com/docs/how-to/images-and-media/preprocessing-external-images/).

### Nodes

If you want to implement the `Node` interface, you can do so using the `node` attribute on the type:

```yml
- type: MyType
  node: true
  fields:
    title: String
```

This translates to:

```graphql
type MyType implements Node @infer {
  image: File @fileByRelativePath
}
```

### Arrays

Arrays are a construct in YAML, so they must be sent as a string explicitly (using quotes) to work properly:

```yml
- type: Tag
  fields:
    title: String!
- type: MyType
  fields:
    tags: "[Tag]"
```

This translates to:

```graphql
type Tag @infer {
  title: String!
}

type MyType @infer {
  tags: [Tag]
}
```

In addition, you can use the long-form approach, by making the field definition an object, using `array` as the type. This provides the same result:

```yml
- type: Tag
  fields:
    title: String!
- type: MyType
  fields:
    tags:
      type: array
      name: Tag
```

### Mappings

This plugin offers support for dynamic mappings, which is one of its more powerful features. When wanting to embed data from one markdown file into another, you can use a mapping to do so. Gatsby offers [a nice and easy way to do that](https://www.gatsbyjs.org/docs/gatsby-config/#mapping-node-types) through `gatsby-config.js`.

That approach has caused issues for us in the past, and we don't love it because it creates project-specific schema definitions in multiple places.

To define a mapping, use the same approach as the long-form array approach, shown above.

```yml
- type: Tag
  fields:
    title: String!
- type: MyType
  fields:
    tag:
      type: mapping
      name: Tag
```

Note that this only supports a one-to-one relationship.

**WARNING!** Should you use this feature, be aware of a big gotcha. It expects the mapping to exist as `filePath`. This is a bit of magic that happens behind the scenes, in conjunction with gatsby-remark-ample. In other words, the actual value within the sourced markdown file must match the _relative_ path by which the related content is fetched.

For example, suppose I have a `Post` object in `src/content/posts/my-post.md` with a field called `author` that should load the contents of an author object which lives at `src/content/author/stephen-king.md`.

The post file should look like this:

```md
---
title: My Post
author: src/content/author/stephen-king.md
---

...
```

The reason we do this (and don't provide a way around it at this time) is because it plays very nicely with Forestry, which makes associations using file paths like this. That's one reason why gatsby-remark-ample automatically adds the `filePath`field to all objects it processes.

## Known Issues

1. Console warnings will be printed when launching the dev server or building the project. This is because we are defining some types in multiple places. This has not caused a problem other than the annoyance of the warning, but there is a plan to address it (for future new projects).
2. This doesn't support custom fields. In some cases it could be useful to add fields dynamically after the content comes out of the data source. There is a plan to support this, but for now, custom schema behavior should be defined in the project's `gatsby-node.js` file.
