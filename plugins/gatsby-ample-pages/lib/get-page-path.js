const path = require("path")

/**
 * If the file is named index.md, look for a duplicate page (i.e. a page with
 * the same slugPath property preceding "/index"). If no duplicate is found,
 * remove "index" from the page's path.
 *
 * Example: If there is a page at src/pages/about/index.md and no other page at
 * src/pages/about.md, then the index.md page will be available at /about.
 * However, if there is a page at src/content/about.md, then the index.md page
 * will be available at /about/index, thus avoiding conflicts.
 */
module.exports = (page, pages = []) => {
  // Store reference to the page's path, as it may be altered. Paths are
  // provided as absolute.
  let pagePath = page.slugPath
  // If we're looking at the home page, return "/" as the path.
  if (pagePath === "index") return "/"
  // If the last segment is "index" then we attempt to find other pages with the
  // same matching slugPath.
  if (path.basename(pagePath) === "index") {
    // The new path would be the same as the old without the appended "index."
    const newPagePath = path.join(pagePath, "..")
    // Look for duplicate pages.
    const duplicatePages = pages.filter(page => page.slugPath === newPagePath)
    // Set the page path to the new path (remove the "index") if no duplicates were found.
    if (duplicatePages.length === 0) pagePath = newPagePath
  }
  // Add a preceding slash and return.
  return `/${pagePath}`
}
