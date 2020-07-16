/**
 * Accepts a URL path and returns if that path is a path to a non-HTML file.
 */
const isFile = path => {
  // Get the last segment in the path.
  const filename = path.split("/").pop()
  // Extract the file extension, if there is one.
  const ext = filename.lastIndexOf(".") >= 0 ? filename.split(".").pop() : null
  // If there is a file extension and if it is NOT .html then return true.
  return ext && ext.toLowerCase() !== "html" ? true : false
}

export default isFile
