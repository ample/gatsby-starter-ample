import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import styles from "./styles.module.scss"

import Column from "./column"

const Container = ({ className, children, columns, config }) => {
  const wrapperClasses = classNames(styles.container, {
    [className]: className,
    [`mb-${config.margin_bottom}`]: config.margin_bottom
  })

  return (
    <div className={wrapperClasses}>
      <div className={styles.content}>
        {children}

        {columns && columns.map((column, idx) => <Column key={idx} {...column} />)}
      </div>
    </div>
  )
}

Container.propTypes = {
  /**
   * A CSS class adding to the wrapping element.
   */
  className: PropTypes.string,
  /**
   * For use in templates when more control is needed.
   */
  children: PropTypes.node,
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
