import { css } from '@emotion/core'

const NProgressCSS = css`
  /* Make clicks pass-through */
  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    background: #fff;

    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;

    width: 100%;
    height: 2px;
  }

  /* Fancy blur effect */
  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px #fff, 0 0 5px #fff;
    opacity: 1;
    transform: rotate(3deg) translate(0px, -4px);
  }
`

export default NProgressCSS