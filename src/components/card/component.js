import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import * as styles from "./styles.module.scss"

import Link from "@src/components/link"
import Button from "@src/components/button"
import Image from "@src/components/image"

const Card = ({ body, button, heading, image, textAlignment, theme, url }) => {
  const classes = classNames(styles.card, {
    [styles[`text_alignment_${textAlignment}`]]: textAlignment,
    [styles[`theme_${theme}`]]: theme
  })

  let card = (
    <div className={classes}>
      {image && <Image className={styles.card_image} src={image} />}
      {heading && <h3>{heading}</h3>}
      {body && <div dangerouslySetInnerHTML={{ __html: body }} />}
      {button && <Button {...button} />}
    </div>
  )

  if (url) {
    card = <Link to={url}>{card}</Link>
  }

  return card
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
    url: PropTypes.string.isRequired
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
  textAlignment: PropTypes.oneOf(["left", "center", "right"]),
  /**
   * Specifies the card theme
   */
  theme: PropTypes.oneOf(["graphic", "image"]),
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
