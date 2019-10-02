import { css } from '@emotion/core'
import customCSS from './customCSS'
import html5DefaultCSS from './html5Defaults'
import normalizeCSS from './normalizeCSS'
import nprogressCSS from './nprogressCSS'

const globalStyle = css`
  ${html5DefaultCSS};
  ${normalizeCSS};
  ${customCSS};
  ${nprogressCSS};
`
export default globalStyle
