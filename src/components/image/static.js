import React from "react"
import { StaticImage } from "gatsby-plugin-image"

// TODO: Get Static Image to work in storybook
const TestStaticImage = () => {
  return (
    <StaticImage
      src="https://images2.fanpop.com/images/photos/5100000/Cats-wallpaper-cats-5194876-1280-1024.jpg"
      alt="A kitten"
    />
  )
}

TestStaticImage.propTypes = {}

TestStaticImage.defaultProps = {}

export default TestStaticImage
