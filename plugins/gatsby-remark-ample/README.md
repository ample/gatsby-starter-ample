# gatsby-remark-ample

gatsby-remark-ample is a Gatsby plugin that sits on top of [gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/) to provide a few frills to help us build Gatsby sites more efficiently.

If you are working with this plugin and aren't familiar with gatsby-transformer-remark, that's the place to start. Otherwise, the sections below will walk through usage and features.

## Install

This is irrelevant, as this plugin is currently included in our starter and is installed by default.

## How to use

```js
// In your gatsby-config.js
const path = require('path')

plugins: [
  {
    resolve: `gatsby-remark-ample`
    options: {
      contentSrc: "src/content/",
      imageExtensions: [".jpg", ".png"],
      imageSrcDir: path.join(__dirname, "./static"),
      imageSuffix: "_src",
      markdownSuffix: "_md",
      modelField: "model",
      seoField: "seo"
    }
  }
]
```

### Options

- `contentSrc`: The directory in which your markdown files live. This should be the topmost parent, as it can only be a single directory.
- `imageExtensions`: An array of image file extensions that should be processed as images.
- `imageSrcDir`: The directory that is treated as the root for image file paths.
- `imageSuffix`: The unique suffix on keys that should be processed as images.
- `markdownSuffix`: The unique suffix on keys that should be processed as markdown.
- `modelField`: The unique top-level property key that should be used as explicit instruction on which query the file should be available.
- `seoField`: The unique top-level property key that houses SEO data.

## How it works

This is built on top of gatsby-transformer-remark. It's meant provide backwards compatibility to projects that were exclusively using gatsby-transformer-remark, and to serve only as a utility on top of the remark plugin.

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
3. Enables markdown and image processing in conjunction with Gatsby's development server (i.e. solves a bug we were seeing before using this plugin).

The way structured data works is that it looks for a field at the top level of the frontmatter in nodes processed as MarkdownRemark. (This is the `modelField` option.) If it finds the field, it will create a new node of that type, maintaining a relationship to the MarkdownRemark node and its parent, the File node.

Say there's a file in `src/content/pages/index.md` that looks like this:

```md
---
title: Home Page
model: Page
---

Hello world ...
```

The node could be queried through `allMarkdownRemarkPage` or `markdownRemarkPage` because `Page` was the value of the `model` field. (`model` is the default model field key.)

```graphql
{
  markdownRemarkPage {
    html
    frontmatter {
      title
    }
  }
}
```

Notice that we maintain the query structure of gatsby-transformer-remark, making `html` and `frontmatter` the two methods to get to data processed by this plugin.

### New Fields

In addition to gatsby-transformer-remark fields, this plugin adds some logical fields to support the way we work, including:

- `slug`: The filename without the extension.
- `slugPath`: The relative path with the file slug from the segmented content directory.

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
  markdownRemarkPage {
    slug
    slugPath
  }
}
```

The results would be:

- `slug`: `company`
- `slugPath`: `about/company`

Note that in providing these new fields we've also removed fields we don't use, such as `fileAbsolutePath`. If necessary, you can get to those fields through the parent node, or you could contribute to this plugin to add support.

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
  markdownRemarkPage {
    sidebar_md # Returns original markdown string
    sidebar # Returns HTML string
  }
}
```

### Image Processing

Image processing works almost identically to markdown processing, with a few exceptions:

- It relies on `gatsby-remark-relative-images` and `gatsby-remark-images` for transforming image path strings into objects that can be used with gatsby-image.
- It will ignore image paths that don't end in the accepted extensions whitelist. This is so we don't try to process images we can't process, like SVG files.
- It will only process values that start with the proper path separator (e.g. `/`) character, indicating that it is a path to a file.

This is highly opinionated to work with content management systems that write images to the file system, such as NetlifyCMS or Forestry.

Because of that, this process is involved, optionated, and a little goofy. So let's look at how this transformation works:

First, this plugin scans frontmatter for keys that end in the `imageSuffix` (default: `_src`). When it finds one, if the value is a string that ends in an acceptable extension, it next identifies the relative path from the markdown file to the physical image file. (That's where `imageSrcDir` comes in handy.) If all of these items come together, the plugin then writes the value to a key without the suffix.

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

When this plugin finds the appropriate field, it creates a child node for the node we're creating. We do that so that we can use a single shared fragment through the project for querying SEO values.

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
  markdownRemarkPage {
    childSeoMeta {
      data {
        title
        description
        image_src
      }
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
  markdownRemarkPage {
    childSeoMeta {
      ...SEO
    }
  }
}
```

Note that the `seo` field does not get removed from the frontmatter. In other words, this will still work:

```graphql
{
  markdownRemarkPage {
    frontmatter {
      seo {
        title
        # ...
      }
    }
  }
}
```

But you won't be able to use the fragment when looking for SEO in frontmatter because Gatsby infers those type names, and our types are specific to the model field.
