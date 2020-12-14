import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Footer from "./component"

const FooterAdapter = () => {
  const data = useStaticQuery(graphql`
    {
      footer: adminFooter {
        menus {
          heading
          links {
            label
            url
          }
        }
        social_links {
          icon
          url
        }
        policy_links {
          label
          url
        }
        copyright
      }
    }
  `)

  const { footer } = data

  return <Footer {...footer} />
}

FooterAdapter.propTypes = {}

FooterAdapter.defaultProps = {}

export default FooterAdapter
