import { Global } from '@emotion/core'
import React from 'react'
import globalStyles from 'styled/global'
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  public static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => (
          <>
            <Global styles={globalStyles} />
            <App {...props} />
          </>
        )
      })

    return Document.getInitialProps(ctx)
  }
  public render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
