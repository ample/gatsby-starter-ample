import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { SEO as ThemeSEO } from "gatsby-theme-ample-components"

import { getImageUrl } from "../../helpers/normalize-seo"

const transformData = ({ queryData, srcProps }) => {
  let props = {
    ...srcProps,
    titleTemplate: queryData.title_template
  }

  // Don't need to send the baseUrl.
  delete props.baseUrl

  // Fill in missing image.
  if (!props.imageUrl) props.imageUrl = getImageUrl(srcProps.baseUrl, queryData.default_image)

  return props
}

const SEO = props => (
  <StaticQuery
    query={graphql`
      {
        settings: markdownRemarkAdminSeo {
          frontmatter {
            title_template
            default_image {
              ...FluidImageAttributes
            }
          }
        }
      }
    `}
    render={data => (
      <ThemeSEO {...transformData({ queryData: data.settings.frontmatter, srcProps: props })} />
    )}
  />
)

SEO.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  og: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string
  }),
  title: PropTypes.string.isRequired,
  twitter: PropTypes.shape({
    card: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string
  }),
  url: PropTypes.string.isRequired
}

SEO.defaultProps = {}

export default SEO

export { transformData }
