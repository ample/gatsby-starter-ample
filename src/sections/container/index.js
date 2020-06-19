import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames/bind"

import styles from "./styles.module.scss"

import Button from "../../components/button"
import Content from "../../components/content"
import Form from "../../components/form"
import Image from "../../components/image"

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
      // Name of the component to render comes from the componentMap above the
      // component.
      const TagName = componentMap[comp.template]
      // Drill a level deeper for forms to send the appropriate props.
      if (comp.template === "component-form") comp = comp.form
      // If there was a component in the map, render it, passing all the data to
      // it. Otherwise, display that it's not supported. (This is meant for
      // development purposes.)
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
