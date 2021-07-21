import URL from "url"

import { isFile } from "."

/**
 * Accepts a link string and determines if we should render using gatsby-link or
 * a native anchor tag.
 */
const isGatsbyLink = (link) => {
  // Treat missing links as external, so it will render an anchor tag with an
  // empty href.
  if (!link || link.length === 0) return false
  // Parse the link's properties.
  // TODO: Update deprecated-api
  // eslint-disable-next-line node/no-deprecated-api
  const url = URL.parse(link)
  // If the link is a hash reference for the same page, don't use gatsby-link.
  if (!url.path && url.hash) return false
  // If the link is a URL, don't use gatsby-link.
  if (url.host) return false
  // If the link begins with "//" don't use gatsby-link.
  if (url.path.slice(0, 2) === "//") return false
  // Don't use gatsby-link if the link is a file reference and the extension is
  // not .html.
  return !isFile(url.path)
}

export default isGatsbyLink
