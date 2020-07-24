# SEO

The SEO component is used by template adapters to render meta tags into the head of the page.

## How it Works

There are a few pieces of this plugin that all work together:

- `gatsby-node.js`
- GraphQL fragments
- Normalize helper
- Meta tag component

While this plugin doesn't _technically_ rely on any other piece of the puzzle, it is built to be used alongside `gatsby-remark-ample` and a specific structure for default content. Should that change, your mileage with this plugin may vary.

Let's look at each of its pieces ...

### Gatsby Node & GraphQL Fragments

The `gatsby-node.js` file in this directory is responsible for explicitly defining GraphQL types, such that we can use the `...SEO` fragment (in `src/fragments/seo.js`) in GraphQL queries.

### Normalize Helper & Meta Tag

The normalizeSEO helper (`src/helpers/normalize-seo`) is built to normalize data coming from GraphQL queries, combine them with fallback data, and present a data object that can be pass as props to the SEO component (`src/components/seo`).
