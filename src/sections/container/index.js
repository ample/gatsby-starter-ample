import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames/bind"
import { Image } from "gatsby-theme-ample-components"

import styles from "./styles.module.scss"

import Button from "../../components/button"
import Content from "../../components/content"
import Form from "../../components/form"

const componentMap = {
  "component-button": Button,
  "component-content": Content,
  "component-form": Form,
  "component-image": Image
}

const Container = ({ className, components, config, title }) => (
  <div
    className={classNames(styles.container, {
      [className]: className,
      [`text-${config.text_align}`]: config.text_align
    })}
  >
    <p>
      CONTAINER: <strong>{title}</strong>
    </p>
    {components.map((comp, idx) => {
      const TagName = componentMap[comp.template]
      if (TagName) return <TagName key={idx} {...comp} />
      return (
        <p key={idx}>
          <strong>{comp.template}</strong> not supported.
        </p>
      )
    })}
  </div>
)

Container.propTypes = {
  /** ... */
  className: PropTypes.string,
  /** ... */
  components: PropTypes.arrayOf(PropTypes.object),
  /** ... */
  config: PropTypes.shape({
    text_align: PropTypes.oneOf(["left", "center", "right", ""])
  }),
  /** ... */
  title: PropTypes.string
}

Container.defaultProps = {
  components: [],
  config: {}
}

export default Container
