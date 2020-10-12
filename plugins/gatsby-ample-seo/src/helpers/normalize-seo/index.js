import deepForEach from "deep-for-each"
import dig from "object-dig"
import endsWith from "lodash/endswith"
import unset from "lodash/unset"

/**
 * Function to extract path from value, whether it's an object or a string.
 */
const imagePathFromSrc = src =>
  typeof src === "object" ? dig(src, "childImageSharp", "fluid", "src") : src

/**
 * Using the baseUrl for the current page, build a reference to an image,
 * assuming all images in this regard are local.
 */
const getImageUrl = (baseUrl, image) => {
  const imagePath = imagePathFromSrc(image)
  // Return nothing if we're missing something.
  if (!baseUrl || !image || !imagePath) return
  // Add the appropriate number of slashes between baseUrl and image path.
  let imageUrl = baseUrl
  if (!endsWith(imageUrl, "/") && imagePath[0] !== "/") {
    imageUrl = imageUrl.concat("/")
  } else if (endsWith(imageUrl, "/") && imagePath[0] === "/") {
    imageUrl = imageUrl.slice(0, -1)
  }
  // Append image path to the baseUrl
  return imageUrl.concat(imagePath)
}

const normalizeSEO = ({ location = {}, overrides = {}, page = {} }) => {
  let baseUrl = location.origin
  if (!baseUrl) return {}

  // Add URL to the overrides object and store as a new object.
  let props = { ...page, ...overrides, baseUrl, url: location.href }

  // Add title and image to props if they exist and the overrides don't.
  if (!props.title && page.title) props.title = page.title
  if (!props.description && page.description) props.description = page.description
  if (!props.image && page.image) props.image = page.image

  // Convert images to full URLs.
  if (props.image) props.imageUrl = getImageUrl(baseUrl, props.image)

  // Convert OG images.
  if (props.og && props.og.image) props.og.imageUrl = getImageUrl(baseUrl, props.og.image)

  // Convert Twitter images.
  if (props.twitter && props.twitter.image)
    props.twitter.imageUrl = getImageUrl(baseUrl, props.twitter.image)

  // Delete all empty strings.
  deepForEach(props, (value, key, _, keyPath) => {
    // Remove original image values.
    if (key === "image" || key === "image_src") unset(props, keyPath)
    // Remove empty strings.
    if (typeof value === "string" && value.length === 0) unset(props, keyPath)
  })

  return props
}

export default normalizeSEO

export { normalizeSEO, imagePathFromSrc, getImageUrl }
