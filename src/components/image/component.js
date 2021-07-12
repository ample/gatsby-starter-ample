import React from "react"
import PropTypes from "prop-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
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

  // ---------------------------------------- | Gatsby Image
  const gatsbyImageData = dig(src, "gatsbyImageData")
  if (gatsbyImageData) {
    const gImage = getImage(src)
    const imageName = dig(gatsbyImageData, "images", "fallback", "src")
    const width = dig(gatsbyImageData, "width")
    const height = dig(gatsbyImageData, "height")

    return (
      <GatsbyImage
        className={classes}
        alt={alt || defaultAltAttribute(imageName)}
        image={gImage}
        width={width}
        height={height}
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
   * Specifies the image src attribute as a string or
   * Gatsby image object ([Gatsby Docs](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/#all-options)).
   */
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      childImageSharp: PropTypes.shape({
        gatsbyImageData: PropTypes.shape({
          height: PropTypes.number,
          images: PropTypes.shape({
            fallback: PropTypes.shape({
              sizes: PropTypes.string,
              src: PropTypes.string,
              srcSet: PropTypes.string
            }),
            sources: PropTypes.arrayOf(
              PropTypes.shape({
                sizes: PropTypes.string,
                srcSet: PropTypes.string,
                type: PropTypes.string
              })
            )
          }),
          layout: PropTypes.oneOf(["constrained", "fixed", "fullWidth"]),
          width: PropTypes.number
        })
      })
    })
  ]).isRequired,
  /**
   * Support for directly passing styles to the image component.
   */
  styles: PropTypes.object
}

Image.defaultProps = {}

export default Image
