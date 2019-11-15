import { css, createGlobalStyle } from "styled-components"
import "@openfonts/crimson-pro_latin"
import "@openfonts/montserrat_latin"

import * as normalize from "normalize.css"

import * as g from "./variables"

const brand = css`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  body {
    font-size: 13px;
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 1.33;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    font-family: inherit;
  }

  a {
    color: inherit;
    text-decoration: underline;
    transition: color 0.1s ease-out;
  }

  img,
  svg {
    display: inline-block;
    vertical-align: middle;
  }

  p {
    margin-top: 0;
    margin-bottom: 1em;
    font-size: 18px;
    font-size: 1.8rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    margin: 0;
    line-height: 1;
  }

  h1 {
    font-size: 6rem;
    line-height: 0.9;
    letter-spacing: -0.2rem;
    margin-bottom: 2.4rem;
    &.text-xl {
      font-size: 9rem;
      letter-spacing: -0.6rem;
      margin-bottom: 1.2rem;
    }
  }

  h2 {
    font-size: 4.8rem;
    line-height: 0.92;
    letter-spacing: -0.15rem;
    margin-bottom: 1.2rem;
  }

  h3 {
    font-size: 3rem;
    line-height: 0.97;
    letter-spacing: -0.05rem;
  }

  h4 {
    font-size: 2.1rem;
    line-height: 1;
    letter-spacing: -0.05rem;
  }

  h5 {
    font-size: 1.6rem;
    line-height: 1;
    letter-spacing: -0.05rem;
  }

  code,
  pre {
    font-family: "courier";
    font-size: 1.4rem;
  }

  /* ---------------------------------------- | Utility Classes */

  .text-center,
  .text-center * {
    text-align: center;
  }
  .text-white,
  .text-white * {
  }
  .text-red,
  .text-red * {
  }

  /* ---------------------------------------- | Standard font classes */

  .text-sm,
  .text-sm * {
    font-size: 1.2rem;
    line-height: 1.25;
  }
  .text-md,
  .text-md * {
    font-size: 1.3rem;
    line-height: 1.25;
  }
  .text-lg,
  .text-lg * {
    font-size: 1.7rem;
    line-height: 1.13;
  }

  /* ---------------------------------------- | Handles '\n' characters.  */

  .newline {
    white-space: pre-line;
  }

  /* ---------------------------------------- | Below 'md' breakpoint */

  @media ${g.screen.max.md} {
    h1 {
      font-size: 4rem;
      letter-spacing: -0.15rem;
      margin-bottom: 1.2rem;
      &.text-xl {
        font-size: 5rem;
        letter-spacing: -0.3rem;
      }
    }

    h2 {
      font-size: 3.4rem;
      letter-spacing: -0.1rem;
    }

    code,
    pre {
      font-family: "courier";
      font-size: 1.2rem;
    }
  }
`

const GlobalStyles = createGlobalStyle`${brand}`

export default GlobalStyles
