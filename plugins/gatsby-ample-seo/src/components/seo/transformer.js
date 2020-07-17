import lodash from "lodash"

/**
 * Cleans up properties coming into the SEO component adapter so they can be
 * passed on to the component.
 */
export default ({ defaults = {}, props = {} }) => {
  // The baseUrl is used in the helper functions, extracted from the location
  // object.
  const baseUrl = lodash.get(props, "location.origin")
  // We need a baseUrl to perform operations around the image, so we return null
  // if it's missing.
  if (!baseUrl) return null

  /**
   * An abstracted method for looking through a series of objects for the
   * presence of a key-value pair in which the value exists.
   */
  const fallback = (attr, fallbackObjects = [props, defaults]) => {
    // Look through the fallback objects for the first one that has a value for
    // the given attribute.
    const obj = lodash.find(fallbackObjects, obj => lodash.get(obj, attr))
    // And return that value (or undefined).
    return lodash.get(obj, attr)
  }

  /**
   * Use the baseUrl to output a full image URL we can use for SEO purposes.
   */
  const getImageUrl = image => {
    // Extract the image source string from the parameter, which expects a
    // specific structure if passed as an object.
    const imagePath =
      typeof image === "object" ? lodash.get(image, "childImageSharp.fixed.src") : image
    // Return nothing if we're missing something.
    if (!baseUrl || !image || !imagePath) return
    // Add the appropriate number of slashes between baseUrl and image path.
    let imageUrl = baseUrl
    if (!lodash.endsWith(imageUrl, "/") && imagePath[0] !== "/") {
      imageUrl = imageUrl.concat("/")
    } else if (lodash.endsWith(imageUrl, "/") && imagePath[0] === "/") {
      imageUrl = imageUrl.slice(0, -1)
    }
    // Append image path to the baseUrl
    return imageUrl.concat(imagePath)
  }

  return {
    // Description follows the expected pattern.
    description: fallback("description"),
    // Image URL follows the expected pattern.
    imageUrl: getImageUrl(fallback("image")),
    // OpenGraph tags first fall back to the main props for the page, then to
    // global OG defaults, then to global generic defaults. "type" is the
    // exception, which isn't used on main objects.
    og: {
      description: fallback("description", [props.og, props, defaults.og, defaults]),
      imageUrl: getImageUrl(fallback("image", [props.og, props, defaults.og, defaults])),
      title: fallback("title", [props.og, props, defaults.og, defaults]),
      type: fallback("type", [props.og, defaults.og])
    },
    // Title Template follows the expected pattern.
    titleTemplate: fallback("title_template"),
    // Title follows the expected pattern.
    title: fallback("title"),
    // Twitter tags will first fall back to OG, then follow the OG fallback
    // pattern. "card" is the exception, which isn't used on main objects.
    twitter: {
      description: fallback("description", [
        props.twitter,
        props.og,
        props,
        defaults.twitter,
        defaults.og,
        defaults
      ]),
      imageUrl: getImageUrl(
        fallback("image", [props.twitter, props.og, props, defaults.twitter, defaults.og, defaults])
      ),
      title: fallback("title", [
        props.twitter,
        props.og,
        props,
        defaults.twitter,
        defaults.og,
        defaults
      ]),
      card: fallback("card", [props.twitter, defaults.twitter])
    },
    // URL is extracted from the location object.
    url: lodash.get(props, "location.href")
  }
}
