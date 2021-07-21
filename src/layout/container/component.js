import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import Block from "@root/src/layout/block"

import { container, content } from "./styles.module.scss"

const Container = ({ className, children, blocks, config }) => {
  const wrapperClasses = classNames(container, {
    [className]: className,
    [`mb-${config.margin_bottom}`]: config.margin_bottom
  })

  return (
    <div className={wrapperClasses}>
      <div className={content}>
        {children}

        {blocks && blocks.map((column, idx) => <Block key={idx} {...column} />)}
      </div>
    </div>
  )
}

Container.propTypes = {
  /**
   * An array of components that get passed on to the <Block />.
   */
  blocks: PropTypes.arrayOf(PropTypes.object),

  /**
   * For use in templates when more control is needed.
   */
  children: PropTypes.node,
  /**
   * An object that controls the styling of the outer container on screen.
   */
  config: PropTypes.shape({
    margin_bottom: PropTypes.string
  })
}

Container.defaultProps = {
  blocks: [],
  config: {}
}

export default Container
