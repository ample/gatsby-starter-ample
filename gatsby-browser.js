import "./src/styles/libs/sanitize.scss"
import "./src/styles/global-styles.scss"
import "./src/styles/global-utilities.scss"

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}
