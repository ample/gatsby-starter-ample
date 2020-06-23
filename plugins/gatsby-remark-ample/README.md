# gatsby-remark-ample

gatsby-remark-ample is a Gatsby plugin that sits on top of [gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/) to provide a few frills to help [Ample](https://www.helloample.com/) developers build Gatsby sites more efficiently.

If you are working with this plugin and aren't familiar with the gatsby-transformer-remark plugin, that's the place to start. Otherwise, the sections below will walk through usage and features.

## Install

This plugin is part of Ample's Gatsby starter. It is already configured in `gatsby-config.js`, with commented options. See below for an explanation of the options.

## Options

- `contentSrc`: The directory in which your markdown files live. This should be the topmost parent, as it can only be a single directory. **There is a major assumption in this plugin — that your content is segmented within the `contentSrc` directory by another directory, presumably indicating its type.** (e.g. If pages go in `src/content/pages` and posts go in `src/content/posts`, then `src/content` is the `contentSrc` value.)
- `imageExtensions`: An array of image file extensions that should be processed as images.
- `imageSrc`: The directory that is treated as the root for image file paths.
- `imageSuffix`: The unique suffix on keys that should be processed as images.
- `markdownSuffix`: The unique suffix on keys that should be processed as markdown.
- `modelField`: The unique top-level property key that should be used as explicit instruction on which query the file should be available.
- `models`: The names of the models whose schema we want to explicitly define. (Note: Today we're only defining `id`, `seo`, `slug`, and `slugField`, but the plan is to define the entire schema.) This determines whether a `processed_frontmatter` field is created on the `MarkdownRemark` node (more on this below).
- `projectRoot`: The root directory of the project. This is the base from which `filePath` is set upon child nodes. As long as you are using this plugin from either the `plugins` directory or the `node_modules` directory, you won't have to mess with this. Otherwise, set it to `path.join(__dirname)`.
- `seoField`: The unique top-level property key that houses SEO data.

## How it works

This is built on top of gatsby-transformer-remark. It takes the frontmatter from a `MarkdownRemark` node and creates a child of that node from the frontmatter, after further processing those properties and adding a few others.

It also then stores that transformed frontmatter on the `MarkdownRemark` node at `fields.processed_frontmatter` **if the matching model was passed to the plugin** (see `models` option above).

There are five concepts that we'll walk through to explain how this is working:

- Structured Data
- New Fields
- Markdown Processing
- Image Processing
- SEO

### Structured Data

One of the key benefits of this plugin is that it groups local content files into their individual queries, which provides three key benefits:

1. Makes querying data by type much simpler (no filters required).
2. Removes properties that are irrelevant to a group of objects.
3. Adds markdown, image, and SEO processing.

The way structured data works is that it looks for a field at the top level of the frontmatter in nodes processed as `MarkdownRemark`. (This is the `modelField` option.) If it finds the field, it will create a new node of that type, maintaining a relationship to the `MarkdownRemark` node.

### Creating structured child nodes

Say there's a file in `src/content/pages/index.md` that looks like this:

```md
---
title: Home Page
model: Page
---

Hello world ...
```

The node could be queried through `allPage` or `page` because `Page` was the value of the `model` field. (`model` is the default model field key.)

```graphql
{
  page {
    title
  }
}
```

This node is a _child_ of the `MarkdownRemark` node and only brings the processed frontmatter with it. For example, `html` would not work in the example above, as `html` is only accessible through the parent `MarkdownRemark` node.

### Accessing structured nodes through the `MarkdownRemark` node

If you want to work with fields from the `MarkdownRemark` node _and_ the new structured node, there are two ways to go about it.

The first way is to access the child node following Gatsby's parent-child relationship convention:

```graphql
{
  markdownRemark {
    childPage {
      title
    }
  }
}
```

The second way requires additional configuration using the `models` option. If you pass the appropriate model through to the plugin, the child will also be accessible through a custom `processed_frontmatter` field.

To set that up, first make sure the model is being passed into the plugin as an option:

```js
// in gatsby-config.js
module.exports = {
  plugins: [
    // ...
    {
      resolve: `gatsby-remark-ample`,
      options: {
        models: ["Page"]
      }
    }
  ]
}
```

Then the page will be available through `fields.processed_frontmatter` as its type:

```graphql
{
  markdownRemark {
    fields {
      processed_frontmatter {
        ... on Page {
          title
        }
      }
    }
  }
}
```

### Added frontmatter fields

In addition to the original frontmatter fields and the newly processed fields, this plugin adds some logical fields to support the way we work, including:

- `slug`: The filename without the extension.
- `slugPath`: The relative path with the file slug from the segmented content directory.
- `filePath`: The relative path of the file from the root of the project. This depends on the `projetRoot` option being the absolute path to the Gatsby project. (More on this below the example.)

Consider the example above, but for a page that lives at `src/content/pages/about/company.md`:

```md
---
title: About our Company
model: Page
---
```

And add those fields to the query:

```graphql
{
  page {
    slug
    slugPath
    filePath
  }
}
```

The results would be:

- `slug`: `company`
- `slugPath`: `about/company`
- `filePath`: `src/content/pages/about/company.md`

#### The Purpose of `filePath`

It may seem like an odd addition to put `filePath` attribute on each of these nodes. This is done to work with services like Forestry that use a file path as a way to association markdown files to one another.

This provides the ability to easily map GraphQL fields across nodes in Gatsby using [the mapping feature](https://www.gatsbyjs.org/docs/gatsby-config/#mapping-node-types).

Say you have a file at `src/content/posts/my-post.md` with this frontmatter:

```md
---
title: My Post
model: Post
author: src/content/authors/sad-clown.md
---
```

And the `author` field points to a file that exists, that is created into an `Author` child node. For example:

```md
---
title: Sad Clown
model: Author
---
```

You'd then be able to map the fields together in `gatsby-config.js` like so:

```js
module.exports = {
  mapping: {
    "Post.author": "Author.filePath"
  },
  plugins: [
    // ...
  ]
}
```

Then you would receive the `Author` object as the `author` field on the post in your GraphQL query:

```graphql
{
  post {
    author {
      title # returns "Sad Clown"
    }
  }
}
```

### Markdown Processing

gatsby-transformer-remark processes markdown, but only in the main content area of markdown files. We wanted to be able to process markdown within frontmatter. The concept here is that we'd create a unique key suffix that would tell this plugin to treat the field as a markdown field, to process it and save the resulting HTML string as a new key, without the suffix.

The default value of `markdownSuffix` is `_md`. So, say our example above had a frontmatter field for a sidebar that we wanted processed as markdown. We'd want to append the field's key with `_md`:

```md
---
title: About our Company
model: Page
sidebar_md: |-
  # Hello World

  Lorem ipsum ...
---
```

When it comes time to write the query, `sidebar_md` will return the original string, while `sidebar` will contain the HTML string.

```graphql
{
  page {
    sidebar_md # Returns original markdown string
    sidebar # Returns HTML string
  }
}
```

Note that the processed HTML field is not available on the `MarkdownRemark` node:

```graphql
{
  markdownRemark {
    frontmatter {
      sidebar_md
      sidebar # Does not exist!
    }
  }
}
```

### Image Processing

Image processing works almost identically to markdown processing, with a few exceptions:

- It relies on `gatsby-remark-relative-images` and `gatsby-remark-images` for transforming image path strings into objects that can be used with gatsby-image.
- It will ignore image paths that don't end in the accepted extensions whitelist. This is so we don't try to process images we can't process, like SVG files.
- It will only process values that start with the proper path separator (e.g. `/`) character, indicating that it is a path to a file.

This is highly opinionated to work with content management systems that write images to the file system, such as [NetlifyCMS](https://www.netlifycms.org/) or [Forestry](https://www.forestry.io/).

Because of that, this process is involved, opinionated, and a little goofy. So let's look at how this transformation works:

First, this plugin scans frontmatter for keys that end in the `imageSuffix` (default: `_src`). When it finds one, if the value is a string that ends in an acceptable extension, it next identifies the relative path from the markdown file to the physical image file. (That's where `imageSrc` comes in handy.) If all of these items come together, the plugin then writes the value to a key without the suffix.

For example, if our markdown file had an `image_src` field:

```md
---
title: About our Company
model: Page
image_src: "/uploads/our-company.jpg
---
```

And assuming there is a physical file at `static/uploads/our-company.jpg`, then the result looks something like this:

```md
---
title: About our Company
model: Page
image_src: "/uploads/our-company.jpg
image: "../../../static/uploads/our-company.jpg
---
```

When `gatsby-remark-images` then processes this node, it will transform the `image` property into a `childImageSharp` object if it can find the physical file.

But before `gatsby-remark-images` does its thing, `gatsby-remark-relative-images` also runs through our new node. Its responsibility is to look through body content of the markdown files and convert any items that would become `<img />` tags to adjust their `src` attribute to a relative path from the markdown file to the physical image file.

### SEO

The last feature this plugin brings is support for SEO. It assumes that there is one unique top-level frontmatter key used for storing SEO values. The default is `seo`.

Like the other features here, it ties into our other processes and is extremely opinionated. There are a lot of inner workings to make SEO work right out of the gate, and this adds to that process.

When this plugin finds the appropriate field, it creates a node of type `SeoMeta` as a child of our structured node. We do that so that we can use a single shared fragment through the project for querying SEO values.

Consider our example file with an `seo` field:

```md
---
title: About our Company
model: Page
seo:
  title: Some Meta Title
---
```

Now we can query like so:

```graphql
{
  page {
    seo {
      title
    }
  }
}
```

That enables you to create a fragment for SEO values, like so:

```graphql
fragment SEO on SeoMeta {
  # ...
}
```

And then simplify your queries throughout the project:

```graphql
{
  page {
    seo {
      ...SEO
    }
  }
}
```

The intention here was to not remove the original field reference to the SEO data. However, you may also reference the SEO data through Gatsby's parent-child relationship convention:

```graphql
{
  page {
    childSeoMeta {
      ...SEO
    }
  }
}
```
