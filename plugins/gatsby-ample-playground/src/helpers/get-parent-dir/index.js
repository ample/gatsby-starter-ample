import * as path from "path"

/**
 * Returns the immediate parent directory name of the file.
 */
export default filePath => {
  return path
    .dirname(filePath)
    .split(path.sep)
    .pop()
}
