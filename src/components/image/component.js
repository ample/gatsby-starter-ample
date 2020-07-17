import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import classNames from "classnames"
import dig from "object-dig"

import styles from "./styles.module.scss"

const Image = ({ alt, className, src, ...props }) => {
  const defaultAltAttribute = image =>
    image
      .split("/")
      .pop()
      .split(".")
      .slice(0, -1)
      .join(".")

  const classes = classNames(styles.image, { [className]: className })

  // ---------------------------------------- | Gastby Image

  if (dig(src, "childImageSharp", "fluid") || dig(src, "childImageSharp", "fixed")) {
    let imageName = dig(src, "childImageSharp", "fluid", "src")

    if (dig(src, "childImageSharp", "fixed")) {
      imageName = dig(src, "childImageSharp", "fixed", "src")
    }

    return (
      <Img
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
