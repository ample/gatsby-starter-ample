import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

const SEO = ({ description, og, imageUrl, title, titleTemplate, twitter, url }) => (
  <Helmet title={title} titleTemplate={titleTemplate || title}>
    {imageUrl && <meta name="image" content={imageUrl} />}
    {description && <meta name="description" content={description} />}
    {/* --- OpenGraph --- */}
    <meta property="og:title" content={og.title || title} />
    <meta property="og:url" content={url} />
    {(og.description || description) && (
      <meta property="og:description" content={og.description || description} />
    )}
    {(og.imageUrl || imageUrl) && <meta property="og:image" content={og.imageUrl || imageUrl} />}
    {/* --- Twitter --- */}
    <meta name="twitter:card" content={twitter.card || "summary"} />
    {twitter.title && <meta name="twitter:title" content={twitter.title || title} />}
    {(twitter.description || description) && (
      <meta name="twitter:description" content={twitter.description || description} />
    )}
    {(twitter.imageUrl || imageUrl) && (
      <meta name="twitter:image" content={twitter.imageUrl || imageUrl} />
    )}
  </Helmet>
)

SEO.propTypes = {
  /**
   * Meta description. Serves as a backup for og:description and
   * twitter:description.
   */
  description: PropTypes.string,
  /**
   * URL of the meta image. Serves as a backup for og:image and twitter:image.
   */
  imageUrl: PropTypes.string,
  /**
   * Specific OpenGraph tags. If omitted, they fall back to the main title,
   * image, and description.
   */
  og: PropTypes.shape({
    description: PropTypes.string,
    title: PropTypes.string,
    imageUrl: PropTypes.string
  }),
  /**
   * Meta title. Serves as a backup for og:title and twitter:title.
   */
  title: PropTypes.string.isRequired,
  /**
   * Template for the title of the page, which can inject the title of the page
   * (using "%s") alongside the site title. This is a feature of [React
   * Helmet](https://github.com/nfl/react-helmet).
   */
  titleTemplate: PropTypes.string,
  /**
   * Specific Twitter tags. If omitted, they fall back to the main title,
   * image, and description. The card falls back to "summary" if omitted.
   */
  twitter: PropTypes.shape({
    card: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
    imageUrl: PropTypes.string
  }),
  /**
   * URL of the page. This cannot be overridden in the OpenGraph object, but is
   * also set as the og:url content value.
   */
  url: PropTypes.string.isRequired
}

SEO.defaultProps = {
  og: {},
  twitter: {}
}

export default SEO
