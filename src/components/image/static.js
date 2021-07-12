import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const NewStaticImage = () => {
  return (
    <StaticImage
      src="https://images2.fanpop.com/images/photos/5100000/Cats-wallpaper-cats-5194876-1280-1024.jpg"
      alt="A kitten"
    />
  )
}

NewStaticImage.propTypes = {}

NewStaticImage.defaultProps = {}

export default NewStaticImage
