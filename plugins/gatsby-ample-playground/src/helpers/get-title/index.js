import lodash from "lodash"

import { getParentDir, isPresent } from "../"

/**
 * Returns title from frontmatter if it exists. Otherwise it titleizes the
 * parent directory name. This requires that the fileAbsolutePath property exist
 * on the object passed into the function.
 */
export default obj => {
  // If title was passed in via frontmatter, use that.
  if (isPresent(lodash.get(obj, "frontmatter.title"))) return obj.frontmatter.title
  // If fileAbsolutePath is not available on the object, return null.
  if (!obj.fileAbsolutePath) return null
  // Otherwise, titleize the playground's parent directory.
  const parentDir = getParentDir(obj.fileAbsolutePath)
  return lodash.startCase(lodash.toLower(parentDir))
}
