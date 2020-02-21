import React from 'react'

import colors from './_index.scss'

const Color = () => {
  const colorGrid = Object.keys(colors).map((key, index) => (
    <div
      key={index}
      className="color"
      style={{
        backgroundColor: colors[key]
      }}
    >
      <span>${key.replace('_', '-')}</span>
    </div>
  ))

  return <div className="colors">{colorGrid}</div>
}

export default Color
