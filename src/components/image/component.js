import React from "react"
import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image"
import classNames from "classnames"
import dig from "object-dig"
import startCase from "lodash/startCase"
import path from "path"

import { image } from "./styles.module.scss"

export const defaultAltAttribute = (image) => {
  const filename = path.basename(image, path.extname(image))
  return startCase(filename)
}

const Image = ({ alt, className, src, ...props }) => {
  const classes = classNames(image, { [className]: className })

  // TODO: Update Image component to work with new `gatsby-plugin-image`

  // ---------------------------------------- | Gastby Image

  if (dig(src, "childImageSharp", "fluid") || dig(src, "childImageSharp", "fixed")) {
    let imageName = dig(src, "childImageSharp", "fluid", "src")

    if (dig(src, "childImageSharp", "fixed")) {
      imageName = dig(src, "childImageSharp", "fixed", "src")
    }

    return (
      <GatsbyImage
        className={classes}
        alt={alt || defaultAltAttribute(imageName)}
        {...src.childImageSharp}
      />
    )
  }

  // ---------------------------------------- | Native Image

  if (typeof src === "string") {
    return <img className={classes} src={src} alt={alt || defaultAltAttribute(src)} {...props} />
  }

  // ---------------------------------------- | Invalid src

  return null
}

Image.propTypes = {
  /**
   * Specifies the image alt attribute.
   */
  alt: PropTypes.string,
  /**
   * Classes attributed to the wrapping element.
   */
  className: PropTypes.string,
  /**
   * Specifies the image src attribute as a string or Gatsby fixed/fluid image
   * object ([Gatsby Docs](https://www.gatsbyjs.org/packages/gatsby-image/)).
   */
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  /**
   * Support for directly passing styles to the image component.
   */
  styles: PropTypes.object
}

Image.defaultProps = {}

export default Image
