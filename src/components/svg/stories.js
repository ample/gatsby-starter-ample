import React from "react"

import { component as SVG, fixtures, svgOptions } from "./"

export default {
  argTypes: {
    name: {
      control: { type: "select" },
      options: Object.keys(svgOptions)
    }
  },
  component: SVG,
  title: "Components/SVG"
}

const Template = (args) => (
  <div style={{ width: "30px" }}>
    <SVG {...args} />
  </div>
)

// --------------------------------------------------------

export const Props = Template.bind({})
Props.args = fixtures.props

// --------------------------------------------------------

const availableSvgs = Object.keys(svgOptions)

const svgs = () => (
  <div style={{ display: "flex", flexWrap: "wrap" }}>
    {availableSvgs.map((icon, index) => {
      let width

      const small = icon === "angle-right" || icon === "times"

      if (icon === "logo") {
        width = "60px"
      } else if (small) {
        width = "30px"
      } else {
        width = "40px"
      }

      return (
        <div
          key={index}
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            width: "25%"
          }}
        >
          <div
            style={{
              display: "flex",
              height: "100px",
              width: width
            }}
          >
            <SVG name={icon} />
          </div>
          <p style={{ display: "block", marginTop: "10px" }}>{icon}</p>
        </div>
      )
    })}
  </div>
)

export const SVGs = svgs
SVGs.storyName = "Available SVGs"

// --------------------------------------------------------
