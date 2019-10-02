// UTILS
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const convPaths = require('convert-tsconfig-paths-to-webpack-aliases').default
const tsconfig = require('./tsconfig.json')
const deepMerge = require('deepmerge')

// Typescript
const tsPaths = convPaths(tsconfig)

module.exports =  {
  experimental: { asyncToPromises: true },
  pageExtensions: ['tsx', 'ts'],
  webpack(webpackCfg, { dev, isServer }) {
    webpackCfg.devtool = dev ? 'inline-source-map' : 'source-map'
    webpackCfg.externals = webpackCfg.externals || []
    webpackCfg.resolve = deepMerge(
      {
        alias: {
          ...tsPaths
        }
      },
      webpackCfg.resolve
    )

    if (dev) {
      process.traceDeprecation = true
    }

    webpackCfg.plugins = webpackCfg.plugins || []

    webpackCfg.plugins.push(new LodashModuleReplacementPlugin())

    webpackCfg.plugins = webpackCfg.plugins.filter(plugin => {
      if (plugin.constructor.name === 'ForkTsCheckerWebpackPlugin') return false
      return true
    })

    return webpackCfg
  }
}
