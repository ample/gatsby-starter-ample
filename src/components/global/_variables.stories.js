import React from "react"
import notes from "./_notes-variables.mdx"
import styled from "styled-components"
import { Grid } from "react-flexbox-grid"

import * as g from "./variables"
import GlobalStyles from "./styles"

export default {
  title: "Style Guide|Variables",
  component: GlobalStyles,
  parameters: {
    docs: { page: notes }
  }
}

export const colors = () => (
  <Grid className="text-center" style={{ padding: "2rem 0rem" }}>
    <h2>Colors</h2>
    <code>$&#123;colors.name&#125;</code>
    <SwatchGroup>
      <Swatch bg={g.colors.white} name={`white`} />
      <Swatch bg={g.colors.black} name={`black`} dark />
    </SwatchGroup>
  </Grid>
)

export const fonts = () => (
  <Grid className="text-center" style={{ padding: "2rem 0rem" }}>
    <h2>Fonts</h2>
    <code>$&#123;fonts.name&#125;</code>
    <Group>
      <section className="text-crimson">
        <code>fonts.name</code>
        <div style={{ fontWeight: 300 }}>Custom Font - Regular</div>
        <div style={{ fontWeight: 300, fontStyle: "italic" }}>
          Custom Font - Italic
        </div>
        <div style={{ fontWeight: 600 }}>Custom Font - Bold</div>
        <div style={{ fontWeight: 300 }}>And so on ...</div>
      </section>
    </Group>
  </Grid>
)

export const mediaQueries = () => (
  <Grid className="text-center" style={{ padding: "2rem 0rem" }}>
    <h2>Media Queries</h2>
    <code>$&#123;screen.minmax.breakpoint&#125;</code>
    <Group>
      <h5>(max-width)</h5>
      <section>
        <code>
          <div>@media $&#123;screen.max.sm&#125;</div>
          <div>@media $&#123;screen.max.md&#125;</div>
          <div>@media $&#123;screen.max.lg&#125;</div>
          <div>@media $&#123;screen.max.xl&#125;</div>
        </code>
      </section>
      <h5>(min-width)</h5>
      <section>
        <code>
          <div>@media $&#123;screen.min.sm&#125;</div>
          <div>@media $&#123;screen.min.md&#125;</div>
          <div>@media $&#123;screen.min.lg&#125;</div>
          <div>@media $&#123;screen.min.xl&#125;</div>
        </code>
      </section>
      <h5>combined</h5>
      <section>
        <code>
          <div>
            @media $&#123;screen.min.md&#125; and $&#123;screen.max.lg&#125;
          </div>
        </code>
      </section>
    </Group>
  </Grid>
)

// ---------------------------------------- | Styles

const Group = styled.section`
  max-width: 768px;
  margin: 1.5rem auto;
  padding: rem;
  h5 {
    margin-top: 4rem;
  }
  > section {
    padding: 1rem;
    margin: 2rem auto;
    border: 1px solid gainsboro;
    > div {
      padding: 0.5rem 0rem;
    }
  }
`
const SwatchGroup = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & > div {
    flex: 0 1 auto;
    min-width: 180px;
    padding: 1rem 1.5rem;
    text-align: center;
    div:first-child {
      vertical-align: middle;
      border: 1px solid gainsboro;
      font-family: monospace;
      font-weight: bold;
      padding: 3rem 1rem;
      margin-top: 1rem;
    }
  }
  code {
    text-transform: uppercase;
  }
`

const Swatch = props => (
  <div>
    <div
      className="text-lg"
      style={{
        backgroundColor: props.bg,
        color: props.dark ? g.colors.white : g.colors.black
      }}
    >
      {props.name}
    </div>
    <code>{props.bg}</code>
  </div>
)

Swatch.defaultProps = { dark: false }
