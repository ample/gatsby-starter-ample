import React from "react"
import notes from "./_notes-styles.mdx"
import styled from "styled-components"
import { Grid } from "react-flexbox-grid"

import * as g from "./variables"
import GlobalStyles from "./styles"

export default {
  title: "Style Guide|Styles",
  component: GlobalStyles,
  parameters: {
    docs: { page: notes }
  }
}

export const headers = () => (
  <Grid style={{ padding: "2rem 0rem" }}>
    <h2 className="text-center">Headers</h2>
    <Table>
      <Header
        tag="h1"
        className="text-xl"
        size="90px/50px"
        desc="Home Jumbotron"
      />
      <Header tag="h1" size="60px/40px" desc="Page Title" />
      <Header tag="h2" size="48px/34px" desc="Section Header" />
      <Header tag="h3" size="30px" desc="Sub-Section Header" />
      <Header tag="h4" size="21px" desc="" />
      <Header tag="h5" size="16px" desc="Card & List Title" />
    </Table>
  </Grid>
)

export const utilityClasses = () => (
  <Grid style={{ padding: "2rem 0rem" }}>
    <div className="text-center">
      <h2>Utility Classes</h2>
      <p>All children of elements will inherit the utility class style.</p>
    </div>
    <h4 className="text-center" style={{ marginTop: 70, marginBottom: 24 }}>
      General
    </h4>
    <Table className="text-crimson">
      <Util name="text-center" />
      <Util name="text-red" />
      <Util name="text-white" dark />
      <Util name="text-montserrat" />
      <Util name="text-crimson" />
      <Util name="newline" />
    </Table>

    <div className="text-center">
      <h4 className="text-center" style={{ marginTop: 70, marginBottom: 12 }}>
        Text Size - Crimson
      </h4>
      <p>
        These styles apply to <code>&lt;p></code> tags and containers with
        <code>.text-crimson</code>
      </p>
    </div>
    <Table className="text-crimson">
      <Util name="text-sm" size="16px" />
      <Util name="text-md (default)" size="18px" />
      <Util name="text-lg" size="21px" />
    </Table>

    <div className="text-center">
      <h4 className="text-center" style={{ marginTop: 70, marginBottom: 12 }}>
        Text Size - Montserrat
      </h4>
      <p>
        These styles apply to all elements <em>except</em> <code>&lt;p></code>{" "}
        tags and containers with <code>.text-crimson</code>
      </p>
    </div>
    <Table>
      <Util name="text-sm" size="12px" />
      <Util name="text-md (default)" size="13px" />
      <Util name="text-lg" size="17px" />
    </Table>
  </Grid>
)

// -------------------------- Styles

const Group = styled.section`
  max-width: 768px;
  margin: 1.5rem auto;
  padding: 1rem;
  padding: 1rem;
  margin: 2rem auto;
  background-color: ${g.colors.gray100};
  border: 1px solid ${g.colors.gray200};
  > div {
    padding: 0.5rem 0rem;
  }
`

const Table = ({ children, ...props }) => (
  <StyledTable {...props}>
    <tbody>{children}</tbody>
  </StyledTable>
)

const StyledTable = styled.table`
  border-collapse: collapse;
  &,
  th,
  td {
    text-align: left;
    padding: 2rem 1.5rem;
  }
  td {
    &:first-of-type {
      width: 10%;
      min-width: 160px;
      max-width: 160px;
      border-right: 1px solid ${g.colors.gray200};
      font-weight: 500;
      background-color: ${g.colors.gray100};
    }
    strong {
      font-weight: 600;
    }
  }
`

const Header = props => {
  const Tag = props.tag
  return (
    <tr>
      <td>
        <code>
          {props.tag}
          {props.className && <>.{props.className}</>}
        </code>
      </td>
      <td>
        <Tag
          className={props.className && props.className}
          style={{ display: "inline-block" }}
        >
          {props.desc ? props.desc : props.tag}
        </Tag>
        {props.size && <> ({props.size})</>}
      </td>
    </tr>
  )
}

const Util = props => (
  <tr>
    <td>
      <code>.{props.name}</code>
    </td>
    <td style={{ backgroundColor: props.dark ? g.colors.gray900 : "" }}>
      <div className={props.name}>
        {props.size && (
          <>
            <strong>({props.size})</strong>{" "}
          </>
        )}
        {props.name === "newline" &&
          "Handles data with newline \\n characters.\n"}
        {`Nulla vitae elit libero, pharetra `}
        <a href="#">augue</a>
        {`. \nSed posuere consectetur est at lobortis. \nAenean lacinia bibendum nulla sed consectetur. \nSed posuere consectetur est at lobortis.`}
      </div>
    </td>
  </tr>
)

Util.defaultProps = { dark: false }
