import React from "react"
import FlexibleTemplate from "@templates/page/flexible"
import data from "../data/index.json"

const homePage = () => (
  <FlexibleTemplate blocks={data.blocks}>
    <h1>{data.title}</h1>
  </FlexibleTemplate>
)
export default homePage
