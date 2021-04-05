import React from "react"
import PropTypes from "prop-types"
import GatsbyBackgroundImage from "gatsby-background-image"
import classNames from "classnames"

import { background_image } from "./styles.module.scss"

const BackgroundImage = ({ children, className, image }) => {
  // Combine wrapping class names.
  const wrapperClassNames = classNames(className, background_image)
  // If there is no image, render a wrapper and the children.
  if (!image) return <div className={wrapperClassNames}>{children}</div>
  // Should return either fluid or fixed if setup properly.
  const imageType = Object.keys(image.childImageSharp)[0]
  // Set props for the wrapping element.
  let props = {
    className: wrapperClassNames,
    [imageType]: image.childImageSharp[imageType]
  }
  // Render the content.
  return <GatsbyBackgroundImage {...props}>{children}</GatsbyBackgroundImage>
}

BackgroundImage.propTypes = {
  /**
   * Content to render inside the wrapping element (the one with the background
   * image attached).
   */
  children: PropTypes.node,
  /**
   * Additional classes on the wrapping element (the one with the background
   * image).
   */
  className: PropTypes.string,
  /**
   * Object representing the image values to pass on to gatsby-background-image.
   */
  image: PropTypes.object
}

BackgroundImage.defaultProps = {}

export default BackgroundImage
