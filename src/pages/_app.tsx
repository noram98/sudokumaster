import { ThemeProvider } from 'emotion-theming'
import App from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import React from 'react'
import theme from 'styled/theme'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <title>Sudoku</title>
          <meta content="Best. Sudoku. Ever." name="description" />
          <meta name="keywords" content="Sudoku" />
        </Head>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    )
  }
}

export default MyApp
