# gatsby-ample-redirects

Adds redirects from data within local markdown files.

This plugin relies on the following:

- Local markdown data files in `src/content/redirects`. (See below for structure.)
- `gatsby-remark-ample` for generating the query that returns only the redirect objects.

It uses the [`createRedirect`](https://www.gatsbyjs.org/docs/actions/#createRedirect) Gatsby action to build redirects within the React application. In addition, if you have [`gatsby-plugin-netlify`](https://www.gatsbyjs.org/packages/gatsby-plugin-netlify/) installed, it will write the redirects to a `_redirects` file in `public` upon building the project.

## File Structure

The files in `src/content/redirects` may have the following keys:

- `title` (required): The source path or URL.
- `destination` (required): The destination path or URL.
- `force`: If set to `true` will force the redirect even if the page exists.
- `permanent`: Treats the redirect as `301` if set to true. Otherwise, it will be a `302` redirect.

## Usage & Disabling

It is installed by default in `gatsby-config.js`. To disable, you can remove the configuration, or pass the `disable` option. You can disable without touching the code by setting an environment of `GATSBY_REDIRECTS_DISABLED` to `true`.
