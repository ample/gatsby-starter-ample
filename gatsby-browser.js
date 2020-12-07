import { Provider } from "./src/services/provider"

import "./src/styles/libs/sanitize.scss"
import "./src/styles/global-styles.scss"
import "./src/styles/global-utilities.scss"

// ---------------------------------------- | Image Polyfill (IntersectionObserver)

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}

// ---------------------------------------- | Scroll To Anchor

export const onRouteUpdate = ({ location }) => scrollToAnchor(location)

/**
 * Smooth scroll to position of hash on page load.
 */
function scrollToAnchor(location, mainNavHeight = 0) {
  if (location && location.hash) {
    const item = document.querySelector(`${location.hash}`)
    if (!item) return

    const itemTop = item.offsetTop

    window.scrollTo({
      top: itemTop - mainNavHeight,
      behavior: "smooth"
    })
  }

  return true
}

// ---------------------------------------- | Global State Management

export const wrapRootElement = Provider
