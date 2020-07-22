import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames/bind"

import styles from "./styles.module.scss"

import Component from "./component"

const Container = ({ className, components, config }) => {
  const wrapperClasses = classNames(styles.container, {
    [className]: className,
    [`text-${config.text_align}`]: config.text_align
  })

  return (
    <div className={wrapperClasses}>
      {components.map((comp, idx) => (
        <Component key={idx} data={comp} />
      ))}
    </div>
  )
}

Container.propTypes = {
  /**
   * A CSS class adding to the wrapping element.
   */
  className: PropTypes.string,
  /**
   * An array of component objects that get passed on to the <Component />.
   */
  components: PropTypes.arrayOf(PropTypes.object),
  /**
   * An object that controls the styling of the container on screen.
   */
  config: PropTypes.shape({
    text_align: PropTypes.oneOf(["left", "center", "right", ""])
  })
}

Container.defaultProps = {
  components: [],
  config: {}
}

export default Container
