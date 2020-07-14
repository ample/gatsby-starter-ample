import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import classNames from "classnames/bind"
import dig from "object-dig"
import styles from "./styles.module.scss"

const Image = ({ alt, className, src, ...props }) => {
  const classes = classNames(styles.cl_image, { [className]: className })

  // ---------------------------------------- | Gastby Image

  if (dig(src, "childImageSharp", "fluid") || dig(src, "childImageSharp", "fixed")) {
    return <Img className={classes} alt={alt} {...src.childImageSharp} />
  }

  // ---------------------------------------- | Native Image

  if (typeof src === "string") {
    return <img className={classes} src={src} alt={alt} {...props} />
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
