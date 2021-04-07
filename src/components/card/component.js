import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import Link from "@src/components/link"
import Button from "@src/components/button"
import Image from "@src/components/image"

// -------------------------------------------------------- | styles

import {
  card_image,
  card,
  text_alignment_center,
  text_alignment_left,
  text_alignment_right,
  theme_graphic,
  theme_image
} from "./styles.module.scss"

const alignmentOptions = {
  center: text_alignment_center,
  left: text_alignment_left,
  right: text_alignment_right
}

const themeOptions = {
  graphic: theme_graphic,
  image: theme_image
}

// -------------------------------------------------------- | component

const Card = ({ body, button, heading, image, textAlignment, theme, url }) => {
  const classes = classNames(card, {
    [themeOptions[theme]]: themeOptions[theme],
    [alignmentOptions[textAlignment]]: alignmentOptions[textAlignment]
  })

  let cardComponent = (
    <div className={classes}>
      {image && <Image className={card_image} src={image} />}
      {heading && <h3>{heading}</h3>}
      {body && <div dangerouslySetInnerHTML={{ __html: body }} />}
      {button && <Button {...button} />}
    </div>
  )

  if (url) {
    cardComponent = <Link to={url}>{cardComponent}</Link>
  }

  return cardComponent
}

Card.propTypes = {
  /**
   * Specifies the content
   * that is displayed under the heading
   */
  body: PropTypes.string,
  /**
   * Specifies the label and url
   * if the card has a button
   */
  button: PropTypes.exact({
    label: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    theme: PropTypes.string
  }),
  /**
   * Specifies the heading
   */
  heading: PropTypes.string,
  /**
   * Specifies the image src and alt text
   */
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  /**
   * Specifies the alignment of the card's content
   */
  textAlignment: PropTypes.oneOf(Object.keys(alignmentOptions)),
  /**
   * Specifies the card theme
   */
  theme: PropTypes.oneOf(Object.keys(themeOptions)),
  /**
   * Specifies the url for the card
   *
   * NOTE: Only use this prop,
   * if the card DOES NOT have a button
   * This will make the entire card a link
   */
  url: PropTypes.string
}

Card.defaultProps = {
  textAlignment: "left"
}

export default Card
