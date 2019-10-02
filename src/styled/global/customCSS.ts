import { css } from '@emotion/core'

const CustomCSS = css`
  html {
    color: rgb(51, 51, 51);
    line-height: 1.4;
  }

  body,
  #__next {
    -moz-osx-font-smoothing: grayscale;
    -ms-flex-direction: column;
    -webkit-box-direction: normal;
    -webkit-box-orient: vertical;
    -webkit-font-feature-settings: 'pnum';
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    background: #fff;
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    flex-direction: column;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-feature-settings: 'pnum';
    font-size: 17px;
    font-style: normal;
    font-variant-numeric: proportional-nums;
    font-weight: 400;
    height: 100%;
    min-height: 100%;
    text-rendering: optimizeLegibility;
  }

  a,
  button,
  input,
  select,
  textarea {
    -webkit-tap-highlight-color: transparent;
  }

  button,
  select {
    border-top-color: initial;
    border-right-color: initial;
    border-bottom-color: initial;
    border-left-color: initial;
    outline-color: initial;
    background-image: none;
    background-color: initial;
  }

  input,
  textarea,
  select,
  button {
    text-rendering: auto;
    color: initial;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    margin: 0em;
  }

  * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  blockquote,
  body,
  button,
  dd,
  dl,
  figure,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ol,
  p,
  pre,
  ul {
    margin: 0;
    padding: 0;
  }

  :focus {
    outline: none;
  }

  a {
    text-decoration: none;
  }

  /* Contentful CMS styles */

  h1 {
    font-size: 48px;
    line-height: 1.1em;
    letter-spacing: -1px;
  }

  h2 {
    margin-top: 1em;
  }

  h3 {
    font-size: 32px;
    line-height: 1.25;
  }

  h4 {
    font-size: 1.6em;
    line-height: 1.4em;
  }

  p {
    margin-top: 0.8em;
  }

  ul,
  ol {
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 1.17647em;
  }
  ul ul,
  ul ol,
  ol ul,
  ol ol {
    margin-top: 0;
    margin-bottom: 0;
  }

  li p {
    font-weight: 600;
  }
  li ul p {
    font-weight: 400;
  }

  li li {
    font-size: 1em;
  }

  a {
    color: #0070c9;
  }
  p + a {
    display: inline-block;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }

  input[type='number'] {
    -moz-appearance: textfield; /* Firefox */
  }
`

export default CustomCSS
