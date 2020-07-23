import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames/bind"

import styles from "./styles.module.scss"

import Column from "./column"

const Container = ({ className, columns, config }) => {
  const wrapperClasses = classNames(styles.container, {
    [className]: className,
    [`text-${config.margin_bottom}`]: config.margin_bottom
  })

  return (
    <div className={wrapperClasses}>
      {columns.map((column, idx) => (
        <Column key={idx} {...column} />
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
   * An array of column objects that get passed on to the <Column />.
   */
  columns: PropTypes.arrayOf(PropTypes.object),
  /**
   * An object that controls the styling of the outer container on screen.
   */
  config: PropTypes.shape({
    margin_bottom: PropTypes.string
  })
}

Container.defaultProps = {
  columns: [],
  config: {}
}

export default Container
