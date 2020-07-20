import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import Link from "~components/link"
import Button from "~components/button"
import Image from "~components/image"

import styles from "./styles.module.scss"

const Card = ({ body, button, image, theme, url }) => {
  const classes = classNames(styles.card, {
    [styles[theme]]: theme
  })

  let card = (
    <div className={classes}>
      {image && <Image src={image} />}
      {body && <div dangerouslySetInnerHTML={{ __html: body }} />}
      {button && <Button to={button.url}>{button.label}</Button>}
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
   * Specifies the image src and alt text
   */
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  /**
   * Specifies the card theme
   */
  theme: PropTypes.oneOf(["theme_1", "theme_2"]),
  /**
   * Specifies the url for the card
   *
   * NOTE: Only use this prop,
   * if the card DOES NOT have a button
   * This will make the entire card a link
   */
  url: PropTypes.string
}

Card.defaultProps = {}

export default Card
